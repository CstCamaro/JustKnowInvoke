(function(window, document, undefined) {

    var exports = {};
    var namespace = "jLogin";// ȫ�ֱ�����

    var iframe_url = "http://sports.qq.com/nba_public/login_iframe_debug.htm";

    // �ڵ�
    var $node = $(".qqcom-login"),
        $avatar = $node.find(".avatar"),
        $sportsVipShield = $node.find(".sports-vip-status");

    if ($node.length <= 0) return;

    window.login = window.login || {};

    // ��¼�Ƿ��ѵ�¼
    window.login.isLogin = false;

    // ��¼�ص�
    var loginCbArr = [];

    var cookie_options = {
        domain: location.hostname,
        path: "/",
        expires: 30//��
    };
    var cookie_remove_options = {domain: location.hostname, path: "/", expires: 0};



    /*
     * Cookie ����, �޸���https://github.com/js-coder/cookie.js
     */
    var cookie = (function() {
        var cookie = function() {
            return cookie.get.apply(cookie, arguments);
        };
        var utils = cookie.utils = {
            isArray: Array.isArray || function(value) {
                return Object.prototype.toString.call(value) === '[object Array]';
            },
            isPlainObject: function(value) {
                return !!value && Object.prototype.toString.call(value) === '[object Object]';
            },
            toArray: function(value) {
                return Array.prototype.slice.call(value);
            },
            getKeys: Object.keys || function(obj) {
                var keys = [],
                    key = '';
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) keys.push(key);
                }
                return keys;
            },
            // Unlike JavaScript's built-in escape functions, this method
            // only escapes characters that are not allowed in cookies.
            escape: function(value) {
                return String(value).replace(/[,;"\\=\s%]/g, function(character) {
                    return encodeURIComponent(character);
                });
            },
            // Return fallback if the value is not defined, otherwise return value.
            retrieve: function(value, fallback) {
                return value === null ? fallback : value;
            }
        };
        cookie.defaults = {};
        cookie.expiresMultiplier = 60 * 60 * 24;
        cookie.set = function(key, value, options) {
            if (utils.isPlainObject(key)) { // Then `key` contains an object with keys and values for cookies, `value` contains the options object.
                for (var k in key) { // TODO: `k` really sucks as a variable name, but I didn't come up with a better one yet.
                    if (key.hasOwnProperty(k)) this.set(k, key[k], value);
                }
            } else {
                options = utils.isPlainObject(options) ? options : {
                    expires: options
                };
                var expires = options.expires !== undefined ? options.expires : (this.defaults.expires || ''), // Empty string for session cookies.
                    expiresType = typeof(expires);
                if (expiresType === 'string' && expires !== '') expires = new Date(expires);
                else if (expiresType === 'number') expires = new Date(+new Date() + 1000 * this.expiresMultiplier * expires); // This is needed because IE does not support the `max-age` cookie attribute.
                if (expires !== '' && 'toGMTString' in expires) expires = ';expires=' + expires.toGMTString();
                var path = options.path || this.defaults.path; // TODO: Too much code for a simple feature.
                path = path ? ';path=' + path : '';
                var domain = options.domain || this.defaults.domain;
                domain = domain ? ';domain=' + domain : '';
                var secure = options.secure || this.defaults.secure ? ';secure' : '';
                document.cookie = utils.escape(key) + '=' + utils.escape(value) + expires + path + domain + secure;
            }
            return this; // Return the `cookie` object to make chaining possible.
        };
        cookie.remove = function(keys) {
            keys = utils.isArray(keys) ? keys : utils.toArray(arguments);
            for (var i = 0, l = keys.length; i < l; i++) {
                this.set(keys[i], '', -1);
            }
            return this; // Return the `cookie` object to make chaining possible.
        };
        cookie.empty = function() {
            return this.remove(utils.getKeys(this.all()));
        };
        cookie.get = function(keys, fallback) {
            fallback = fallback || undefined;
            var cookies = this.all();
            if (utils.isArray(keys)) {
                var result = {};
                for (var i = 0, l = keys.length; i < l; i++) {
                    var value = keys[i];
                    result[value] = utils.retrieve(cookies[value], fallback);
                }
                return result;
            } else return utils.retrieve(cookies[keys], fallback);
        };
        cookie.all = function() {
            if (document.cookie === '') return {};
            var cookies = document.cookie.split('; '),
                result = {};
            for (var i = 0, l = cookies.length; i < l; i++) {
                var item = cookies[i].split('=');
                var key, val;
                try { key = decodeURIComponent(item[0]); } catch(e) { key = item[0]; }
                try { val = decodeURIComponent(item[1]); } catch(e) { val = item[1]; }
                result[key] = val;
            }
            return result;
        };
        cookie.enabled = function() {
            if (navigator.cookieEnabled) return true;
            var ret = cookie.set('_', '_').get('_') === '_';
            cookie.remove('_');
            return ret;
        };
        return cookie;
    })();

    exports.cookie = cookie;

    // ɾ��cookie�ķ�װ����cookie.remove��Ч
    var remove_cookies = function(arr) {
        for (var i = 0; i < arr.length; i+=1) {
            if (cookie.get(arr[i])) cookie.set(arr[i], "", cookie_remove_options);
        }
    };
    // window.remove_cookies = remove_cookies;


    /*
    * ��Ҫ������
    */

    // �¼��󶨻ص��洢
    var eventCbs = { login: [], logout: [] };

    // �ж��Ƿ��¼
    var isLogin = function () {
        return (!!cookie.get("skey") && !!cookie.get("uin")) ||
               // (!!cookie.get("lskey") && !!cookie.get("luin")) ||
               cookie.get("main_login") === "wx";
    };
    // ����������¼
    var getLoginMethod = function() {
        if (!isLogin()) return false;
        return cookie.get("main_login") || "qq";
    };

    // ��ȡ�û���Ϣ���ǳƼ�ͷ��
    var getUserInfo = function(callback) {
        var login_method = getLoginMethod();
        var res = {};
        callback = callback || $.noop;
        // qq��¼����ȡ������Ϣ
        if ("qq" === login_method) {
            $.ajax({
                url: "http://matchweb.sports.qq.com/user/qqInfo",
                dataType: 'jsonp',
                scriptCharset: 'utf-8'
            }).done(function (obj) {
                if (obj && obj[0] === 0) {
                    var userInfo = obj[1];
                    // �ǳƼ�ͷ��
                    res.nick = userInfo.nick.replace(/</, "&lt;").replace(/>/, "&gt;");
                    res.avatar = userInfo.icon || "http://mat1.gtimg.com/news/dc/temp/c1.jpg";
                    callback(res);
                } else {
                    try {logout(); } catch(e) {}
                }
            });
        // ΢�ŵ�¼����ȡ������Ϣ
        } else if ("wx" === login_method) {
            $.ajax({
                url: "http://video.qq.com/fcgi-bin/check_login",
                dataType: 'jsonp',
                scriptCharset: 'utf-8'
            }).done(function (obj) {
                if (obj && obj.errcode === 0) {
                    res = {
                        nick: decodeURIComponent(obj.nick),
                        avatar: obj.head
                    };
                    callback(res);
                } else {
                    // δ��¼��TODO�����cookie
                }
            });
        }
    };

    // ������Ա״̬��ȡ���Ƿ��Ա��K�����
    // �漰�������ӿڣ�����Ҫ�κβ���
    var getSportsVipStatus = function(callback, error) {
        callback = callback || $.noop;
        error = error || $.noop;
        $.ajax({
            url: "http://sportswebapi.qq.com/vip/status",
            dataType: "jsonp"
        }).done(function(vip_res) {
            if (vip_res && vip_res[1]) {
                $.ajax({
                    url: "http://guess.sports.qq.com/sportsWeb/balance",
                    dataType: "jsonp"
                }).done(function(kb_res) {
                    if (!kb_res || kb_res.code !== 0) {
                        kb_res.data = {"kb": null};
                    }
                    callback(vip_res[1], kb_res.data);
                });
                // Ϊ������Ա������Ƶ�����������ʶ
                if (vip_res[1].vip === "1") {
                    window.__tenplay_getuinfo = function() {return 10;};
                }
            } else {
                error();
            }
        });
    };

    // ͬ��vվ΢�ŵ�¼cookie
    var syncWxCookie = function(callback) {
        $.ajax({
            url: "http://video.qq.com/fcgi-bin/get_cookie",
            dataType: "jsonp",
            data: {low_login: 1},
            scriptCharset: "utf-8",
            success: function(res) {
                if (res) {
                    $.each(["access_token", "openid", "vuserid", "vusession", "appid"], function(i, key) {
                        if (res[key]) {
                            cookie.set(key, res[key], cookie_options);
                        }
                    });
                    if (callback) callback();
                }
            }
        });
    };

    // ��¼�ɹ��ص�
    exports.loginSuccess = function(obj) {
        // console.log("main page success:" ,obj);
        cookie.set("main_login", obj.loginMethod, cookie_options);
         $("#nba-dl").find(".avatar").addClass("loginIn");
        if ("wx" === obj.loginMethod) {
            // ͬ�� cookie �� ���html
            syncWxCookie(fillUserHtml);
        } else {
            fillUserHtml();
        }

        $.each(eventCbs.login, function(i, fn) { fn.call(null); });
    };

    // ����΢�ŵ�¼ cookie
    var clearWxLoginCookies = function(callback) {
        remove_cookies(['wx_nick', 'wx_head', 'access_token', 'openid', 'appid', 'vuserid', 'vusession', 'shequid',
                    'nick', 'encuin', 'shequid',
                    'main_login']);
        //cgi���video.qq.com�����cookie
        $.ajax({
            url: 'http://video.qq.com/fcgi-bin/logout?clear=1&type=' + getLoginMethod(),
            type: 'get',
            dataType: 'jsonp',
            timeout: 10000,
            success: function () {
                if (callback) callback();
            }
        });
    };

    // �ǳ�
    var logout = function() {
        $.getScript("https://ui.ptlogin2.qq.com/js/ptloginout.js", function(){
            if (pt_logout) {
                pt_logout.logout(function(){
                    $("#nba-dl").find(".avatar").removeClass("loginIn");
                    $avatar.html("��¼");
                    $sportsVipShield.html("��ͨ��Ա");
                    cookie.remove(['uin', 'skey', 'luin', 'lskey']);
                });
            }
        });
        if (getLoginMethod() === "wx") clearWxLoginCookies();
        remove_cookies(["main_login"]);
        $.each(eventCbs.logout, function(i, fn) { fn.call(null); });
    };
    exports.logout = logout;

    //  �򿪵�¼����
    var openLoginWin = function() {
        // ׼��dom
        var $loginWindow = $("<div>").addClass("qqcom-login-mask").css({
            height: $(document).height() || $("html, body").height()
        });
        var $loginIframe = $("<iframe>").attr({
            scrolling: "no",
            frameborder: "0",
            src: iframe_url + "?callback=" + namespace + ".loginSuccess&onclose=" + namespace + ".closeLoginWin"
        });
        // ����
        try{document.domain="qq.com";}catch(err){}
        // ���ùرչ���
        exports.closeLoginWin = function() {
            $loginWindow.remove();
            $("#login_layer").remove();// ����������¼���
        };
        // ����dom
        $loginWindow.append($loginIframe);
        $("body").append($loginWindow);
    };
    exports.openLoginWin = openLoginWin;

    // ���ͷ�񡢲˵���
    var fillUserHtml = function() {
        getUserInfo(function(data) {
            //if (console) console.log("�û���Ϣ: ", data);
            var vipStatusReady = function(tyvip, tykb) {
                //if (console) console.log("������Ա��Ϣ: ", tyvip, tykb);
                //tyvip.vip = "1";// ǿ�Ʊ��vip  ������
                //tykb.kb = 1000;// ǿ������k������������
                // ���ͷ��
                $avatar.html(function(){
                    var html = "";
                    html += "<img src='" + data.avatar + "' alt='ͷ��'>";
                    // html += (data.Vip !== "0") ? '<i class="vipmark"></i>' : '';//QQ��Ա��־
                    html += (tyvip.vip !== "0") ? '<i class="vipmark-ty">VIP</i>' : '';//������Ա��ʶ
                    html += '<div class="bubble"><div class="inner" bosszone="SY_Toploginrk">';
                    html += (tyvip.vip !== "0") ? '<div class="plaintext">���ã�����������Ա</div>' : '';
                    html += '  <div class="nickname">';
                    html += tykb.kb ? ('<a class="kb" href="__mycenter__#myWallet" target="_blank" title="����鿴�ҵ�K��">' + (tykb.kb || "0") + '</a>') : '';
                    html += '    <div class="name">' + (tyvip.vip === "0" ? "���ã�" : "") + data.nick + '</div>';
                    html += '  </div>';
                    html += (tyvip.vip === "0") ? '<a class="getvip" href="http://sports.qq.com/vip/" target="_blank">��ͨ������Ա</a>' : '';
                    html += '  <hr>';
                    html += '  <div class="links">';
                    html += '    <a href="__mycenter__#message"   target="_blank">�ҵ���Ϣ</a>';
                    html += '    <a href="__mycenter__#reminder"  target="_blank">��������</a>';
                    html += '    <a href="__mycenter__#community" target="_blank">�ҵ�����</a>';
                    html += '    <a href="__mycenter__#thread"    target="_blank">�ҵ�����</a>';
                    html += '    <a href="__mycenter__#myWallet"  target="_blank">�ҵ�Ǯ��</a>';
                    html += '    <a href="__mycenter__#myQuiz"    target="_blank">�ҵľ���</a>';
                    html += '    <hr>';
                    html += '    <a class="logout" href="javascript:;" target="_self">�˳���¼</a>';
                    html += '  </div>';
                    html += '</div><i class="arrow"></i></div>';
                    // �滻����
                    html = html.replace(/__mycenter__/g, "http://sports.qq.com/kbsweb/mycenter.htm");
                    return html;
                });
                // �����������Ա���޸Ķ��Ʊ��İ�
                if (tyvip.vip !== "0") {
                    $sportsVipShield.text("������Ա");
                }
            };
            getSportsVipStatus(vipStatusReady, function() {
                // �ӿڴ��� ���������
                vipStatusReady({"vip": "0"}, {"kb": "0"});
            });
        });
    };

    // ���ͷ��򿪵�¼����
    $avatar.on("click", function(e) {
        if (!isLogin()) {
            openLoginWin();
            e.preventDefault();
        }
    });
    // �˳���¼
    $avatar.on("click", ".bubble a.logout", function(e) {
        e.preventDefault();
        e.stopPropagation();
        logout();
    });

    // ������¼���
    exports.on = function(type, fn) {
        if (!type || "function" !== typeof fn) return;
        if (eventCbs[type]) {
            eventCbs[type].push(fn);
        }
    };



    // ���
    var init = function() {
        if (isLogin()) {
            $("#nba-dl").find(".avatar").addClass("loginIn");
            fillUserHtml();
        } else {
            $avatar.html("��¼");
        }
    };
    init();




    // ��¶
    window[namespace] = exports;

    // ���ݾɵ�¼
    if (!window.login) window.login = {};
    window.login.openLogin = exports.openLoginWin;


})(window, document);/*  |xGv00|c44b75737ee26e3d4585e165745e76ef */