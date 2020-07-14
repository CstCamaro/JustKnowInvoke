/*!
 * artTemplate - Template Engine
 * https://github.com/aui/artTemplate
 * Released under the MIT, BSD, and GPL Licenses
 */
 
(function (global) {

'use strict';

/**
 * ģ������
 * ���ڶ�����������Ϊ String ��ִ�� compile ����, ����ִ�� render ����
 * @name    template
 * @param   {String}            ģ��ID
 * @param   {Object, String}    ���ݻ���ģ���ַ���
 * @return  {String, Function}  ��Ⱦ�õ�HTML�ַ���������Ⱦ����
 */
var template = function (id, content) {
    return template[
        typeof content === 'string' ? 'compile' : 'render'
    ].apply(template, arguments);
};


template.version = '2.0.2'; 
template.openTag = '<%';     // �����߼��﷨��ʼ��ǩ
template.closeTag = '%>';    // �����߼��﷨������ǩ
template.isEscape = true;    // HTML�ַ������������
template.isCompress = false; // �޳���Ⱦ��HTML����Ŀհ׿���
template.parser = null;      // �Զ����﷨����ӿ�



/**
 * ��Ⱦģ��
 * @name    template.render
 * @param   {String}    ģ��ID
 * @param   {Object}    ����
 * @return  {String}    ��Ⱦ�õ�HTML�ַ���
 */
template.render = function (id, data) {

    var cache = template.get(id) || _debug({
        id: id,
        name: 'Render Error',
        message: 'No Template'
    });
    
    return cache(data); 
};



/**
 * ����ģ��
 * 2012-6-6 @TooBug: define ��������Ϊ compile���� Node Express ����һ��
 * @name    template.compile
 * @param   {String}    ģ��ID (��ѡ��������������)
 * @param   {String}    ģ���ַ���
 * @return  {Function}  ��Ⱦ����
 */
template.compile = function (id, source) {
    
    var params = arguments;
    var isDebug = params[2];
    var anonymous = 'anonymous';
    
    if (typeof source !== 'string') {
        isDebug = params[1];
        source = params[0];
        id = anonymous;
    }

    
    try {
        
        var Render = _compile(id, source, isDebug);
        
    } catch (e) {
    
        e.id = id || source;
        e.name = 'Syntax Error';

        return _debug(e);
        
    }
    
    
    function render (data) {
        
        try {
            
            return new Render(data, id) + '';
            
        } catch (e) {
            
            if (!isDebug) {
                return template.compile(id, source, true)(data);
            }
            
            return _debug(e)();
            
        }
        
    }
    

    render.prototype = Render.prototype;
    render.toString = function () {
        return Render.toString();
    };
    
    
    if (id !== anonymous) {
        _cache[id] = render;
    }

    
    return render;

};



var _cache = template.cache = {};




// ������������
var _helpers = template.helpers = {

    $include: template.render,

    $string: function (value, type) {

        if (typeof value !== 'string') {

            type = typeof value;
            if (type === 'number') {
                value += '';
            } else if (type === 'function') {
                value = _helpers.$string(value());
            } else {
                value = '';
            }
        }

        return value;

    },

    $escape: function (content) {
        var m = {
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "&": "&#38;"
        };
        return _helpers.$string(content)
        .replace(/&(?![\w#]+;)|[<>"']/g, function (s) {
            return m[s];
        });
    },

    $each: function (data, callback) {
        var isArray = Array.isArray || function (obj) {
            return ({}).toString.call(obj) === '[object Array]';
        };
         
        if (isArray(data)) {
            for (var i = 0, len = data.length; i < len; i++) {
                callback.call(data, data[i], i, data);
            }
        } else {
            for (i in data) {
                callback.call(data, data[i], i);
            }
        }
    }
};




/**
 * ���ģ�帨������
 * @name    template.helper
 * @param   {String}    ����
 * @param   {Function}  ����
 */
template.helper = function (name, helper) {
    _helpers[name] = helper;
};




/**
 * ģ������¼�
 * @name    template.onerror
 * @event
 */
template.onerror = function (e) {
    var message = 'Template Error\n\n';
    for (var name in e) {
        message += '<' + name + '>\n' + e[name] + '\n\n';
    }
    
    if (global.console) {
        console.error(message);
    }
};







// ��ȡģ�建��
template.get = function (id) {

    var cache;
    
    if (_cache.hasOwnProperty(id)) {
        cache = _cache[id];
    } else if ('document' in global) {
        var elem = document.getElementById(id);
        
        if (elem) {
            var source = elem.value || elem.innerHTML;
            cache = template.compile(id, source.replace(/^\s*|\s*$/g, ''));
        }
    }

    return cache;
};



// ģ�������
var _debug = function (e) {

    template.onerror(e);
    
    return function () {
        return '{Template Error}';
    };
};



// ģ�������
var _compile = (function () {


    // �������
    var forEach = _helpers.$each;


    // ��̬����ģ�����
    var KEYWORDS =
        // �ؼ���
        'break,case,catch,continue,debugger,default,delete,do,else,false'
        + ',finally,for,function,if,in,instanceof,new,null,return,switch,this'
        + ',throw,true,try,typeof,var,void,while,with'

        // ������
        + ',abstract,boolean,byte,char,class,const,double,enum,export,extends'
        + ',final,float,goto,implements,import,int,interface,long,native'
        + ',package,private,protected,public,short,static,super,synchronized'
        + ',throws,transient,volatile'

        // ECMA 5 - use strict
        + ',arguments,let,yield'

        + ',undefined';

    var REMOVE_RE = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g;
    var SPLIT_RE = /[^\w$]+/g;
    var KEYWORDS_RE = new RegExp(["\\b" + KEYWORDS.replace(/,/g, '\\b|\\b') + "\\b"].join('|'), 'g');
    var NUMBER_RE = /^\d[^,]*|,\d[^,]*/g;
    var BOUNDARY_RE = /^,+|,+$/g;

    var getVariable = function (code) {
        return code
        .replace(REMOVE_RE, '')
        .replace(SPLIT_RE, ',')
        .replace(KEYWORDS_RE, '')
        .replace(NUMBER_RE, '')
        .replace(BOUNDARY_RE, '')
        .split(/^$|,+/);
    };


    return function (id, source, isDebug) {
        
        var openTag = template.openTag;
        var closeTag = template.closeTag;
        var parser = template.parser;

        
        var code = source;
        var tempCode = '';
        var line = 1;
        var uniq = {$data:1,$id:1,$helpers:1,$out:1,$line:1};
        var prototype = {};

        
        var variables = "var $helpers=this,"
        + (isDebug ? "$line=0," : "");

        var isNewEngine = ''.trim;// '__proto__' in {}
        var replaces = isNewEngine
        ? ["$out='';", "$out+=", ";", "$out"]
        : ["$out=[];", "$out.push(", ");", "$out.join('')"];

        var concat = isNewEngine
            ? "if(content!==undefined){$out+=content;return content;}"
            : "$out.push(content);";
              
        var print = "function(content){" + concat + "}";

        var include = "function(id,data){"
        +     "data=data||$data;"
        +     "var content=$helpers.$include(id,data,$id);"
        +     concat
        + "}";
        
        
        // html���߼��﷨����
        forEach(code.split(openTag), function (code, i) {
            code = code.split(closeTag);
            
            var $0 = code[0];
            var $1 = code[1];
            
            // code: [html]
            if (code.length === 1) {
                
                tempCode += html($0);
             
            // code: [logic, html]
            } else {
                
                tempCode += logic($0);
                
                if ($1) {
                    tempCode += html($1);
                }
            }
            

        });
        
        
        
        code = tempCode;
        
        
        // �������
        if (isDebug) {
            code = "try{" + code + "}catch(e){"
            +       "throw {"
            +           "id:$id,"
            +           "name:'Render Error',"
            +           "message:e.message,"
            +           "line:$line,"
            +           "source:" + stringify(source)
            +           ".split(/\\n/)[$line-1].replace(/^[\\s\\t]+/,'')"
            +       "};"
            + "}";
        }
        
        
        code = variables + replaces[0] + code
        + "return new String(" + replaces[3] + ");";
        
        
        try {
            
            var Render = new Function("$data", "$id", code);
            Render.prototype = prototype;

            return Render;
            
        } catch (e) {
            e.temp = "function anonymous($data,$id) {" + code + "}";
            throw e;
        }



        
        // ���� HTML ���
        function html (code) {
            
            // ��¼�к�
            line += code.split(/\n/).length - 1;

            // ѹ������հ���ע��
            if (template.isCompress) {
                code = code
                .replace(/[\n\r\t\s]+/g, ' ')
                .replace(/<!--.*?-->/g, '');
            }
            
            if (code) {
                code = replaces[1] + stringify(code) + replaces[2] + "\n";
            }

            return code;
        }
        
        
        // �����߼����
        function logic (code) {

            var thisLine = line;
           
            if (parser) {
            
                 // �﷨ת���������
                code = parser(code);
                
            } else if (isDebug) {
            
                // ��¼�к�
                code = code.replace(/\n/g, function () {
                    line ++;
                    return "$line=" + line +  ";";
                });
                
            }
            
            
            // ������. ת��: <%=value%> ��ת��:<%==value%>
            if (code.indexOf('=') === 0) {

                var isEscape = code.indexOf('==') !== 0;

                code = code.replace(/^=*|[\s;]*$/g, '');

                if (isEscape && template.isEscape) {

                    // ת�崦�����ų���������
                    var name = code.replace(/\s*\([^\)]+\)/, '');
                    if (
                        !_helpers.hasOwnProperty(name)
                        && !/^(include|print)$/.test(name)
                    ) {
                        code = "$escape(" + code + ")";
                    }

                } else {
                    code = "$string(" + code + ")";
                }
                

                code = replaces[1] + code + replaces[2];

            }
            
            if (isDebug) {
                code = "$line=" + thisLine + ";" + code;
            }
            
            getKey(code);
            
            return code + "\n";
        }
        
        
        // ��ȡģ���еı�����
        function getKey (code) {
            
            code = getVariable(code);
            
            // �ִ�
            forEach(code, function (name) {
             
                // ����
                if (!uniq.hasOwnProperty(name)) {
                    setValue(name);
                    uniq[name] = true;
                }
                
            });
            
        }
        
        
        // ����ģ�����
        // ��ֵ���ȼ�:
        // ������Ȩ����(include, print) > ˽��ģ�帨������ > ���� > ����ģ�帨������
        function setValue (name) {

            var value;

            if (name === 'print') {

                value = print;

            } else if (name === 'include') {
                
                prototype["$include"] = _helpers['$include'];
                value = include;
                
            } else {

                value = "$data." + name;

                if (_helpers.hasOwnProperty(name)) {

                    prototype[name] = _helpers[name];

                    if (name.indexOf('$') === 0) {
                        value = "$helpers." + name;
                    } else {
                        value = value
                        + "===undefined?$helpers." + name + ":" + value;
                    }
                }
                
                
            }
            
            variables += name + "=" + value + ",";
        };


        // �ַ���ת��
        function stringify (code) {
            return "'" + code
            // �������뷴б��ת��
            .replace(/('|\\)/g, '\\$1')
            // ���з�ת��(windows + linux)
            .replace(/\r/g, '\\r')
            .replace(/\n/g, '\\n') + "'";
        };
        
        
    };
})();


// RequireJS && SeaJS
if (typeof define === 'function') {
    define(function() {
        return template;
    });

// NodeJS
} else if (typeof exports !== 'undefined') {
    module.exports = template;
}

global.template = template;


})(this);


/*  |xGv00|bef8844eb4fac0d63548ffc03db1b3cc */