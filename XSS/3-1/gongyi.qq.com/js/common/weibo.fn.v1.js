//�־�΢��jquery��չ��
//
(function($) {     
	$.fn.succor_weibo = function(options) {    
		var defaults = {
			weiboId:options.weiboId,		//΢��ID  
			actId:options.actId,			//��ĿID
			txtCount : 140,					//�������
			type:options.type?options.actId:1,	//1����΢����2��ת��΢����3������΢��	
			default_text:options.default_text,		//΢��ID 
			countHmtl:options.countHtml,				//����ͳ�ƿ�
			btnId:options.btnId,			//�ύ��ť
			callback:options.callback,		//�ص�����
			return_code:0,
			return_data:null,
			wbContents:'',
			pid:options.pid,
			buin:options.buin,
			attach_url:options.url,
			weibo_title:options.weibo_title	//΢������
		}; 
		
		var opts = $.extend(defaults, options);	
		
		if(typeof(opts.textarea_id) != 'undefined' && opts.textarea_id)
		{
			var txtarea = $(this).find("#"+opts.textarea_id);
			var cntHtml = $(this).find("#"+opts.countHmtl);
			var btn = $(this).find("#"+opts.btnId);
		}else{
			var txtarea = $(this).find("textarea");
			var cntHtml = $(this).find("em");
			//var btn = $(this).find("input#send");
			var btn = $(this).find("#send");
		}
		//΢����ʼ������
		var init_content = '';
		function _construst()
		{
			var init_textarea = '';
			if(typeof(opts.weibo_title) != 'undefined' && opts.weibo_title != "")
			{
				init_textarea = init_content = '#'+opts.weibo_title+'#';
			}
			if(typeof(opts.default_text) != 'undefined' && opts.default_text != "")
			{
				init_textarea = init_content+opts.default_text;
			}
			if(init_textarea != '') txtarea.val(init_textarea);
			zfCln();
		}
		
		txtarea.bind('keyup',function(){
			zfCln();//��������			
		});
		
		btn.bind('click',function(){
			//�û���½�ж�
			//if(global_userinfoobject.nick.length <= 0 || global_userinfoobject.global_gongyiuserinfo != 1)
			//if(global_userinfoobject.nick.length <= 0)
			if(global_userinfoobject.code != 0)
			{
				ptloginopenfun();
				return false;
			}
			//�Ƿ���д��֤
			var content = txtarea.val();
			if(content=="" || init_content==content)
			{
				alert('����д���ݣ�');
				txtarea.focus();
				return false;
			}
			opts.wbContents = encodeURIComponent(content);
			//��ť���
			btn.attr('disabled','disabled').addClass('udClick');
			//��΢��
			if(opts.type == 1)
			{
				weibo_send();
			}
			//����
			else if(opts.type == 2)
			{
				weibo_comment();
			}
			//ת��
			else if(opts.type == 3)
			{
				weibo_broadcast();
			}
			//ף��
			else if(opts.type == 4)
			{
				weibo_zhufu();
			}
			//������Ŀ��չ
			else if(opts.type == 5)
			{
				sendProcess();
			}
			else if(opts.type == 6){
				weibo_sendv2();
			}
		});
		
		
		//�㲥
		function weibo_send()
		{
			var gy_key = setGyToken();
			var url = 'http://npoapp.gongyi.qq.com/succor/weibo_v1/broadcastv2?gy_key='+gy_key+'&isajax=1&comment='+opts.wbContents+'&id='+opts.weiboId+'&jsoncallback=?';
			$.getJSON(url,function(data){
				if(data.status == 1)
				{
					showTips1('�㲥�ɹ���');
					btnResume();
					if(typeof(opts.callback) == 'function')
					{
						opts.callback(data);
					}
				}else{
					showTips1(data.info.code+" ����ʧ�ܣ�",2);
					return false;
				}
			});
		}
		
		//�㲥
		//	kidxiong
		//	2013-08-26
		function weibo_sendv2()
		{
			var gy_key = setGyToken();
			var url = 'http://npoapp.gongyi.qq.com/succor/weibo_v1/sendv2/'+global_userinfoobject.uin+'/?gy_key='+gy_key+'&isajax=1&comment='+opts.wbContents+opts.attach_url+'&jsoncallback=?';
			$.getJSON(url,function(data){
				if(data.status == 1)
				{
					showTips1('�㲥�ɹ���');
					btnResume();
					if(typeof(opts.callback) == 'function')
					{
						opts.callback(data);
					}
				}else{
					showTips1(data.info.code+" ����ʧ�ܣ�",2);
					return false;
				}
			});
		}
		
		//����
		function weibo_comment()
		{
			var gy_key = setGyToken();
			var url = 'http://npoapp.gongyi.qq.com/succor/weibo_v1/sendCommentv2?gy_key='+gy_key+'&isajax=1&comment='+opts.wbContents+'&id='+opts.weiboId+'&jsoncallback=?';
			$.getJSON(url,function(data){
				if(data.status == 1)
				{
					showTips1('���۳ɹ���');
					btnResume();
				}else{
					showTips1(data.info.code+" ����ʧ�ܣ�",2);
					return false;
				}
			});
		}
		
		//ת��
		function weibo_broadcast()
		{
			var gy_key = setGyToken();
			var url = 'http://npoapp.gongyi.qq.com/succor/weibo_v1/broadcastv2/'+global_userinfoobject.uin+'/'+opts.weiboId+'?gy_key='+gy_key+'&isajax=1&content='+opts.wbContents+'&jsoncallback=?';
			$.getJSON(url,function(data){
				if(data.status == 1)
				{
					showTips1('ת���ɹ���');
					btnResume();
				}else{
					showTips1(getWeiboErrorCode(data.info.code),2);
					return false;
				}
			});
		}
		
		//��ף��
		function weibo_zhufu()
		{
			var gy_key = setGyToken();
			var url = 'http://npoapp.gongyi.qq.com/succor/wish_v1/send_wish?gy_key='+gy_key+'&isajax=1&uin='+global_userinfoobject.uin+'&pcontent='+opts.wbContents+'&pid='+opts.pid+'&buin='+opts.buin+'&jsoncallback=?';
			$.getJSON(url,function(data){
				if(data.status == 1)
				{
					showTips1('ף���ɹ���');
					btnResume();
					if(typeof(opts.callback) == 'function')
					{
						opts.callback(data);
					}
				}else{
					showTips1(getWeiboErrorCode(data.info.code),2);
					return false;
				}
			});
		}
		//����Ŀ����
		function sendProcess()
		{
			var gy_key = setGyToken();
			var url = 'http://npoapp.gongyi.qq.com/succor/process_v1/saveProcess/'+opts.pid+'?gy_key='+gy_key+'&isajax=1&fcontent='+opts.wbContents+'&jsoncallback=?';
			$.getJSON(url,function(data){
				if(data.status == 1)
				{
					showTips1('������Ŀ��չ�ɹ���');
					btnResume();
					if(typeof(opts.callback) == 'function')
					{
						opts.callback(data);
					}
				}else{
					showTips1(getWeiboErrorCode(data.info.code),2);
					return false;
				}
			});
		}
		
		//�ύ��ť�ָ��ɵ�
		function btnResume()
		{
			btn.removeAttr('disabled').removeClass('udClick');
		}
		
		 //˽�к���������ʣ���ַ�
		function zfCln()
		{
			var maxCount = opts.txtCount;
			var sy;
			var content = txtarea.val();
			sy = clnTextCount(content,maxCount);
			if(sy<0)
			{
				txtarea.val(getStrByLen(content,maxCount));
				//alert('�����涨�ַ���');//$('p#boradcast_tips').html('���ݳ�������...');
				//cntHtml.next("")
				//is_send = false;
				sy = "0";	
			}
			if(cntHtml) cntHtml.html(sy);	
		}	
		//�����ַ�
		function clnTextCount(D,maxCount)
		{
			if(!maxCount) maxCount = opts.txtCount;
			D = D.replace(/\s/ig,"");
			var C = maxCount - strlen(D);
			return C;
		} 
		/* Private �����ַ�������*/
		function strlen(D) {
			var C = 0;
			for (i = 0; i < D.length; i++) {
				if (isChinese(D.charAt(i)) == true) {
					C = C + 1
				} else {
					C = C + 0.5
			}
		}
			return Math.floor(C)
		}
		
		// Private �ж��Ƿ������ַ�
		function isChinese(D) {
			var C = /[u00-uFF]/ig;
			return ! C.test(D)
		}
		// Private ��ȡ����
		function getStrByLen(K, J) {
			if(typeof(K)=='undefined') return '';
			if(typeof(J)=='undefined') J=0;
			else{
				J = parseInt(J);
			if(J<0)
				J=100;
			}
			var G = "";
			var L = 0;
			var H = "";
			for (var I = 0; I < K.length; I++) {
				H = K.charAt(I);
				if (H.match(/[^\x00-\xff]/ig) != null) {
					L += 1
				} else {
					L += 0.5
				}
				if (L > J) {
					break
				}
				G += H
			}
			if(K.length>J) G+='...';
			return G
		}
		
		//΢��������ʾ
		function getWeiboErrorCode(errorCode)
		{
			//if(errorCode<=0) return false;
			errorCode = Math.abs(errorCode);
			switch(errorCode)
			{
				case '3':errorMsg='����û�п�ͨ΢��&nbsp;&nbsp;&nbsp;&nbsp;[<a href="http://t.qq.com" target="_blank">���Ͽ�ͨ΢��</a>]';break;
				case '13':errorMsg='�벻Ҫ�����㲥��ͬ���ݵ�΢��';break;
				case '4':errorMsg='�벻Ҫ�㲥��������΢��';break;
				case '5':errorMsg='��ֹ����';break;
				case '8':errorMsg='�㲥�����ݹ���';break;
				case '9':errorMsg='�벻Ҫ�㲥������Ϣ';break;
				case '10':errorMsg='���Ĺ㲥̫��';break;
				default:errorMsg='΢���������';break; 
			}
			return errorMsg;
			
		}
		//����
		_construst();
		
	}
	
	
	
	
	
})(jQuery); 


//���������У���
(function($) {     
	$.fn.succor_weibo_input = function(options) {    
		var defaults = {
			default_text:options.default_text,		//΢��ID  
			textarea_id:options.textarea_id,		//��ĿID
			txtCount : 140,					//�������
			countHmtl:options.countHtml				//����ͳ�ƿ�
		};
		var opts = $.extend(defaults, options);
		
		if(typeof(opts.textarea_id) != 'undefined' && opts.textarea_id)
		{
			var txtarea = $(this).find("#"+opts.textarea_id);
			var cntHtml = $(this).find("#"+opts.countHmtl);
		}else{
			var txtarea = $(this).find("textarea");
			var cntHtml = $(this).find("em");
		}
		
		function _construst()
		{
			if(typeof(opts.default_text) != 'undefined' && opts.default_text != "")
			{
				txtarea.val(opts.default_text);
			}
			zfCln();
		}
		
		txtarea.bind('keyup',function(){
			zfCln();//��������			
		});
		
		
		 //˽�к���������ʣ���ַ�
		function zfCln()
		{
			var maxCount = opts.txtCount;
			var sy;
			var content = txtarea.val();
			sy = clnTextCount(content,maxCount);
			if(sy<0)
			{
				txtarea.val(getStrByLen(content,maxCount));
				//alert('�����涨�ַ���');//$('p#boradcast_tips').html('���ݳ�������...');
				//cntHtml.next("")
				//is_send = false;
				sy = "0";	
			}
			if(cntHtml) cntHtml.html(sy);	
		}	
		//�����ַ�
		function clnTextCount(D,maxCount)
		{
			if(!maxCount) maxCount = opts.txtCount;
			D = D.replace(/\s/ig,"");
			var C = maxCount - strlen(D);
			return C;
		} 
		/* Private �����ַ�������*/
		function strlen(D) {
			var C = 0;
			for (i = 0; i < D.length; i++) {
				if (isChinese(D.charAt(i)) == true) {
					C = C + 1
				} else {
					C = C + 0.5
			}
		}
			return Math.floor(C)
		}
		
		// Private �ж��Ƿ������ַ�
		function isChinese(D) {
			var C = /[u00-uFF]/ig;
			return ! C.test(D)
		}
		// Private ��ȡ����
		function getStrByLen(K, J) {
			if(typeof(K)=='undefined') return '';
			if(typeof(J)=='undefined') J=0;
			else{
				J = parseInt(J);
			if(J<0)
				J=100;
			}
			var G = "";
			var L = 0;
			var H = "";
			for (var I = 0; I < K.length; I++) {
				H = K.charAt(I);
				if (H.match(/[^\x00-\xff]/ig) != null) {
					L += 1
				} else {
					L += 0.5
				}
				if (L > J) {
					break
				}
				G += H
			}
			if(K.length>J) G+='...';
			return G
		}
		
		//
		_construst();
	}
})(jQuery);

function setGyToken()
{
	//getCookie_h('skey')
	var str = _cookie_obj.get("skey"),hash = 5381;
	for(var i = 0, len = str.length; i < len; ++i)
	{
		hash += (hash << 5) + str.charAt(i).charCodeAt();
	}
	return hash & 0x7fffffff;
}
/*  |xGv00|1bcea1a7b144c5d65917a5a40a2cc8ff */