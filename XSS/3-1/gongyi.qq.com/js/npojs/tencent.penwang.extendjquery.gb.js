/*

jsѹ����ַ��http://www.jb51.net/tools/jsmin/


2008-10-24
Tencent.Penwang
Jquery extend js

global����˵����
	Tjs_Mask_Onclickfun	���ڲ��ʱ���ȡ������¼���������
	Tjs_regexEnum		����ʽ 
	Tjs_aCity			���֤��֤�ı�������


����˵����
	ҳ�����Ժ���
	Tjs_getPageWidth
	Tjs_getPageHeight
	Tjs_getBodyWidth
	Tjs_getBodyHeight
	Tjs_getBodyLeft
	Tjs_getBodyTop
	Tjs_getBody
	Tjs_getScreenWidth
	Tjs_getScreenHeight
	Tjs_getPageScroll
 
	Ajax�����ϴ��ļ�����
	Tjs_createUploadIframe
	Tjs_createUploadForm
	Tjs_ajaxFileUpload
	Tjs_uploadHttpData



Tjs_setCookie			����Cookie
Tjs_getCookie			ȡ��ookieֵ
Tjs_clearCookie			ȡ��Cookieֵ	

Tjs_Get_Object_Where	�õ�һ������ľ���λ��
Tjs_ContronlPageObject	��ʾ������ҳ���еĲ����޷����ڵĿؼ�
Tjs_createmaskLayout	�������ڲ�	������ʱ�򽫴����¼��Ķ���onclick�¼���move��		(Tjs_Mask_Onclickfun)
Tjs_canclemaskLayout	ȡ�����ڲ�	ȡ����ԭ����onclick�¼��������					(Tjs_Mask_Onclickfun)
Tjs_ShowObject			���� ��ʾĳ�����񣬲��̶����λ��	
Tjs_MoveDiv				�ƶ���
Tjs_CancleMoveDiv		ȡ���ƶ�
Tjs_OpenFlashShowDiv	������ʾ�� ��һ��Ŵ���ʾ ��Ȼ���Ƶ���Ҫ��λ��	--��Ч��
Tjs_CloseFlashShowDiv	������ʾ�� ��һ��Ŵ���ʾ ��Ȼ���Ƶ���Ҫ��λ��	--�ر�Ч��
Tjs_Arrayunique			��һΨ�����е��ظ�Ԫ��ȥ��
Tjs_FormInertalertinfo	����֤ʱ����ʾ��Ϣ���
Tjs_MoreCheckAction		��ѡ��Ķ�ѡ����ȡ��		--��������
Tjs_GetMoreSelectValue	�õ�ѡ�и�ѡ���ֵ������
Tjs_isCardID			�ж��Ƿ�Ϊ���֤��
Tjs_RegexpressRegExp	ִ�������﹫ʽ
Tjs_StrLength			�����ַ����ĳ���
Tjs_OnlyScrollTo		���е����л�����һ��ҳ��ֻ�ܴ���һ��
Tjs_number_format		��������
Tjs_HtmlEncode			����Ҫ������HTML������(����HTML������)�Ĳ�����������б���
Tjs_HtmlUnEncode		��HtmlEncode�����Ľ�����н���
Tjs_Get					�õ���ַ���еĲ���ֵ �����ִ�Сд
Tjs_GetThisPageUrl		ȡ�ñ�ҳ��ģգң̵�ַ������ȡ����ȡ�õ�ַ���ļ�����������
Tjs_JsCopyTo			COPY�ı�
Tjs_CompTime				�Ƚ�ʱ�� ��ʽ yyyy-mm-dd hh:mi:ss	
Tjs_ChangTimesViewMeth		�����ڽ��и�ʽת�����磺10��ǰ,һ��Сʱǰ��һ��ǰ��һ����ǰ......
Tjs_CompTime��				ʱ��Ƚϣ��ڶ���ʱ���Ļ�����1 С�Ļ�����-1����ȵĻ�����0
Tjs_Intercept_str			��ȡ�ַ�������
Tjs_Pagegotourl 			��ʱҳ��ת��
Tjs_Init_ListInfoObject_Fun	ҳ�����ó�ʼ������

fn����˵����
jQuery.fn.Tjs_FloatDiv	�̶����λ�ã����ܹ�������ʾ����λ��������������⣬��ȡ���̶����ԣ�
jQuery.fn.formcheck		������֤
jQuery.fn.setinfo		���ؼ����Ե�����
jQuery.fn.setval		�Ա��ؼ���ֵ
*/


/* ����Ϊ extend����
���ã�$.������(����1������1������1��......);
*/
var Tjs_Mask_Onclickfun = ""; //��ȡ�¼�����
var Tjs_regexEnum = 
{
	intege:"^([+-]?)\\d+$",					//����
	intege1:"^([+]?)\\d+$",					//������
	intege2:"^-\\d+$",						//������
	num:"^([+-]?)\\d*\\.?\\d+$",			//����
	num1:"^([+]?)\\d*\\.?\\d+$",			//����
	num2:"^-\\d*\\.?\\d+$",					//����
	decmal:"^([+-]?)\\d*\\.\\d+$",			//������
	decmal1:"^([+]?)\\d*\\.\\d+$",			//��������
	decmal2:"^-\\d*\\.\\d+$",				//��������
	email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //�ʼ�
	color:"^[a-fA-F0-9]{6}$",				//��ɫ
	url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",	//url
	url2:"^([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",	//url ����html
	chinese:"^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",					//������
	ascii:"^[\\x00-\\xFF]+$",				//��ACSII�ַ�
	zipcode:"^\\d{6}$",						//�ʱ�
	mobile:"^(13|15)[0-9]{9}$",				//�ֻ�
	ip4:"^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]).(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]).(d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]).(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$",				//ip��ַ
	notempty:"^\\S+$",						//�ǿ�
	//picture:"(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",	//ͼƬ
	//jpg\jpeg\png\gif
	picture:"(.*)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$",	//ͼƬ

	rar:"(.*)\\.(rar|zip|7zip|tgz)$",								//ѹ���ļ�
	date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",					//����
	qq:"^[1-9]*[1-9][0-9]*$",				//QQ����
	tel:"(\\d{3}-\\d{8}|\\d{4}-\\d{7})",	//���ڵ绰 (\\d{3}-|\\d{4}-)?(\\d{8}|\\d{7})
	username:"^\\w+$",						//�����û�ע�ᡣƥ�������֡�26��Ӣ����ĸ�����»�����ɵ��ַ���
	letter:"^[A-Za-z]+$",					//��ĸ
	letter_u:"^[A-Z]+$",					//��д��ĸ
	letter_l:"^[a-z]+$",					//Сд��ĸ
	idcard:"^[1-9]([0-9]{14}|[Xx0-9]{17})$",	//���֤
	chinese_name:"^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]{2,6}$",			//2~6������
	chinese_english:"^[a-zA-Z\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",		//ֻ���������Ļ�Ӣ��
	HourMinute:"^\\d{2}:\\d{2}$",		//Сʱ�ͷ�
	qqqun:"^([1-9][0-9]*(;[1-9][0-9]*)*)$",		//���QQ�����á�;���ָ�
	t_url:"^(http://t.qq.com/)",				//http://t.qq.com/xxxx
	qqZone:"^(http://user.qzone.qq.com/)"		//http://user.qzone.qq.com/
};
/* ʡ�е����֤��ͷ��λ */
var Tjs_aCity={11:"����",12:"���",13:"�ӱ�",14:"ɽ��",15:"���ɹ�",21:"����",22:"����",23:"������",31:"�Ϻ�",32:"����",33:"�㽭",34:"����",35:"����",36:"����",37:"ɽ��",41:"����",42:"����",43:"����",44:"�㶫",45:"����",46:"����",50:"����",51:"�Ĵ�",52:"����",53:"����",54:"����",61:"����",62:"����",63:"�ຣ",64:"����",65:"�½�",71:"̨��",81:"���",82:"����",91:"����"} ;

var HourArray = new Array("00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00");


var specialty_desc = new Array( Array("0","����"),
								Array("1","������ѯ"),
								Array("2","�μӴ����͵Ĺ���"),
								Array("3","ҽ������/���������Ⱥ"),
								Array("4","�������Ρ��ڿΡ���ѵ"),
								Array("5","���ṩ��ѯ����񣨱��編��/������ѯ�ȣ�"),
								Array("6","����/д�����İ�����"),
								Array("7","�����ͯ����"),
								Array("8","���ձ���/���֯"),
								Array("9","¼�ƴ�����Ƶ��Ƶ"),
								Array("10","���ṩIT��������"),
								Array("11","���²߻�������๤��"),
								Array("*","����"));


var Tjs_PageGotoMinnum	=1;



jQuery.extend({

		/* ��ȡҳ������ */
		Tjs_getPageWidth: function()
		{
			return document.documentElement.scrollWidth || document.body.scrollWidth || 0;
		},

		Tjs_getPageHeight: function()
		{
			return document.documentElement.scrollHeight || document.body.scrollHeight || 0;
		},

		Tjs_getBodyWidth: function()
		{
			return document.documentElement.clientWidth || document.body.clientWidth || 0;
		},

		Tjs_getBodyHeight: function()
		{
			return document.documentElement.clientHeight || document.body.clientHeight || 0;
		},

		Tjs_getBodyLeft: function()
		{
			return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
		},

		Tjs_getBodyTop: function()
		{
			return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		},

		Tjs_getBody: function()
		{
			return {
				width	: $.Tjs_getBodyWidth(),
				height	: $.Tjs_getBodyHeight(),
				left	: $.Tjs_getBodyLeft(),
				top		: $.Tjs_getBodyTop()
			};
		},

		Tjs_getScreenWidth: function()
		{
			return window.screen.width;
		},

		Tjs_getScreenHeight: function()
		{
			return window.screen.height;
		},

		Tjs_getPageScroll: function()
		{
		   var yScroll;
		   if (self.pageYOffset) {
				yScroll = self.pageYOffset;
		   } else if (document.documentElement && document.documentElement.scrollTop){   // Explorer 6 Strict
				yScroll = document.documentElement.scrollTop;
		   } else if (document.body) {// all other Explorers
				yScroll = document.body.scrollTop;
		   }else{
				yScroll =0;
		   }
		   return yScroll;
		},
		

		/* �����ãϣϣˣɣ�*/
		//����Cookie	 
		Tjs_setCookie: function(name, value, expires, path, domain){
			/*
			var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
			if (arr != null)
			{
				return unescape(arr[2]);
			}
			return null;
			*/
			document.cookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires.toGMTString(): "") + ((path) ? "; path=" + path: "; path=/") + ((domain) ? "; domain=" + domain: "");

		},
		//ȡ��ookieֵ
		Tjs_getCookie:function(name){
			var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));

			if (arr != null)
			{
				return unescape(arr[2]);
			
			}

			return null;
		},
		//ȡ��Cookieֵ
		Tjs_clearCookie:function(name, path, domain){
			if ($.Tjs_getCookie(name))
			{
				document.cookie=name+"="+((path)?"; path="+path:"; path=/")+((domain) ? "; domain=" + domain: "")+";expires=Fri, 02-Jan-1970 00:00:00 GMT";
			}
		},

		/* �õ�һ������ľ���λ��*/ 
		Tjs_Get_Object_Where:function(ObjectElementName){
			var e=document.getElementById(ObjectElementName);
			var Left	=e.offsetLeft;
			var Top		=e.offsetTop;
			var Width	=e.offsetWidth;
			var Height	=e.offsetHeight;
			while(e=e.offsetParent){
				Left+=e.offsetLeft;
				Top+=e.offsetTop;
			}
			return Array(Left,Top,Width,Height);
		},


		/* Ajax�����ϴ��ļ�*/
		/*
		ʹ�÷���
		$.ajaxFileUpload
		(
			{
				url:'doajaxfileupload.php?acts='+flag+"&Image_Class="+Image_Class+"&Prmitkeys_value="+Prmitkeys_value+"&log_attach_id="+log_attach_id+"&filesname="+filesname,
				secureuri:false,
				fileElementId:filesname,
				dataType: 'json',
				success: function (data, status)
				{
					if(typeof(data.error) != 'undefined'){
						if(data.error != ''){
							alert(data.error);
						}else{
							alert(data.msg);
							if(data.images_url!=""){
								if(log_attach_id!="")
									imagesobject.src = data.images_url;
								else
									imagesobject.innerHTML = "<img src='"+data.images_url+"' "+imagsepaemt+">";
							}

							if(data.logid!="" && log_attach_id==""){
								document.all.log_attach_id.value = data.logid;
							}
						}
						filesboject.readOnly = false;
						butobject.disabled   = false;
					}
				},
				error: function (data, status, e)
				{
					alert(e);
					filesboject.readOnly = false;
					butobject.disabled   = false;
				}
			}
		)
		
		*/
		
		Tjs_createUploadIframe: function(id, uri)
		{
				//create frame
				var frameId = 'jUploadFrame' + id;
				
				if(window.ActiveXObject) {
					var io = document.createElement('<iframe id="' + frameId + '" name="' + frameId + '" />');
					if(typeof uri== 'boolean'){
						io.src = 'javascript:false';
					}
					else if(typeof uri== 'string'){
						io.src = uri;
					}
				}
				else {
					var io = document.createElement('iframe');
					io.id = frameId;
					io.name = frameId;
				}
				io.style.position = 'absolute';
				io.style.top = '-1000px';
				io.style.left = '-1000px';

				document.body.appendChild(io);

				return io			
		},
		Tjs_createUploadForm: function(id, fileElementId)
		{
			//create form	
			var formId = 'jUploadForm' + id;
			var fileId = 'jUploadFile' + id;
			var form = $('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');	
			var oldElement = $('#' + fileElementId);
			var newElement = $(oldElement).clone();
			$(oldElement).attr('id', fileId);
			$(oldElement).before(newElement);
			$(oldElement).appendTo(form);
			//set attributes
			$(form).css('position', 'absolute');
			$(form).css('top', '-1200px');
			$(form).css('left', '-1200px');
			$(form).appendTo('body');		
			return form;
		},

		Tjs_ajaxFileUpload: function(s) {
			// TODO introduce global settings, allowing the client to modify them for all requests, not only timeout		
			s = jQuery.extend({}, jQuery.ajaxSettings, s);
			var id = new Date().getTime()        
			var form = jQuery.Tjs_createUploadForm(id, s.fileElementId);
			var io = jQuery.Tjs_createUploadIframe(id, s.secureuri);
			var frameId = 'jUploadFrame' + id;
			var formId = 'jUploadForm' + id;		
			// Watch for a new set of requests
			if ( s.global && ! jQuery.active++ )
			{
				jQuery.event.trigger( "ajaxStart" );
			}            
			var requestDone = false;
			// Create the request object
			var xml = {}   
			if ( s.global )
				jQuery.event.trigger("ajaxSend", [xml, s]);
			// Wait for a response to come back
			var uploadCallback = function(isTimeout)
			{			
				var io = document.getElementById(frameId);
				try 
				{				
					if(io.contentWindow)
					{
						 xml.responseText = io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;
						 xml.responseXML = io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;
						 
					}else if(io.contentDocument)
					{
						 xml.responseText = io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;
						xml.responseXML = io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;
					}						
				}catch(e)
				{
					jQuery.handleError(s, xml, null, e);
				}
				if ( xml || isTimeout == "timeout") 
				{				
					requestDone = true;
					var status;
					try {
						status = isTimeout != "timeout" ? "success" : "error";
						// Make sure that the request was successful or notmodified
						if ( status != "error" )
						{
							// process the data (runs the xml through httpData regardless of callback)
							var data = jQuery.Tjs_uploadHttpData( xml, s.dataType );    
							// If a local callback was specified, fire it and pass it the data
							if ( s.success )
								s.success( data, status );
		
							// Fire the global callback
							if( s.global )
								jQuery.event.trigger( "ajaxSuccess", [xml, s] );
						} else
							jQuery.handleError(s, xml, status);
					} catch(e) 
					{
						status = "error";
						jQuery.handleError(s, xml, status, e);
					}

					// The request was completed
					if( s.global )
						jQuery.event.trigger( "ajaxComplete", [xml, s] );

					// Handle the global AJAX counter
					if ( s.global && ! --jQuery.active )
						jQuery.event.trigger( "ajaxStop" );

					// Process result
					if ( s.complete )
						s.complete(xml, status);

					jQuery(io).unbind()

					setTimeout(function()
										{	try 
											{
												$(io).remove();
												$(form).remove();	
												
											} catch(e) 
											{
												jQuery.handleError(s, xml, null, e);
											}									

										}, 100)

					xml = null

				}
			}
			// Timeout checker
			if ( s.timeout > 0 ) 
			{
				setTimeout(function(){
					// Check to see if the request is still happening
					if( !requestDone ) uploadCallback( "timeout" );
				}, s.timeout);
			}
			try 
			{
			   // var io = $('#' + frameId);
				var form = $('#' + formId);
				$(form).attr('action', s.url);
				$(form).attr('method', 'POST');
				$(form).attr('target', frameId);
				if(form.encoding)
				{
					form.encoding = 'multipart/form-data';				
				}
				else
				{				
					form.enctype = 'multipart/form-data';
				}			
				$(form).submit();

			} catch(e) 
			{			
				jQuery.handleError(s, xml, null, e);
			}
			if(window.attachEvent){
				document.getElementById(frameId).attachEvent('onload', uploadCallback);
			}
			else{
				document.getElementById(frameId).addEventListener('load', uploadCallback, false);
			} 		
			return {abort: function () {}};	

		},

		Tjs_uploadHttpData: function( r, type ) {
			var data = !type;
			data = type == "xml" || data ? r.responseXML : r.responseText;
			// If the type is "script", eval it in global context
			if ( type == "script" )
				jQuery.globalEval( data );
			// Get the JavaScript object, if JSON is used.
			if ( type == "json" )
				eval( "data = " + data );
			// evaluate scripts within html
			if ( type == "html" )
				jQuery("<div>").html(data).evalScripts();
				//alert($('param', data).each(function(){alert($(this).attr('value'));}));
			return data;
		},
		/* Ajax�����ϴ��ļ�-----����*/









		/* ��ʾ������ҳ���еĲ����޷����ڵĿؼ� */
		Tjs_ContronlPageObject:function(show){
				var windowedObjectTags = new Array("SELECT","OBJECT", "APPLET","EMBED");
				for (var i=0; i<windowedObjectTags.length; i++) {
					if(show){
						$(windowedObjectTags[i]).show();
					}else{
						$(windowedObjectTags[i]).hide();
					}
				}
		},


		/* �������ڲ� */
		Tjs_createmaskLayout: function(ObjectElementId,ObjectElementColor,ObjectElementopcity,objectElementbutton,ObjectLevel)
		{
			/*
			ObjectElementId,		���ڲ��ID��
			ObjectElementColor,		���ڲ����ʾ��ɫ
			ObjectElementopcity,	���ڲ��͸����
			objectElementbutton		�������ڲ�Ķ�����
			ObjectLevel				0Ϊȫ������Ϊiframe�� Ĭ��Ϊ0
			*/

			
			//��ID��
			if(typeof(ObjectElementId)=="undefined" || !ObjectElementId){
				ObjectElementId = "_MaskLayout_gongyi_penwang";
			}
			//���ڲ���ɫ��Ĭ��Ϊ��ɫ
			if(typeof(ObjectElementColor)=="undefined" || !ObjectElementColor){
				ObjectElementColor = "#FFFFFF";
			}
			//���ڲ��͸����
			if(typeof(ObjectElementopcity)=="undefined" || !ObjectElementopcity){
				ObjectElementopcity =90;
			}

			//ȡ�������¼�
			if(typeof(objectElementbutton)!="undefined" && objectElementbutton!=""){
				$("#"+objectElementbutton).blur();
				Tjs_Mask_Onclickfun = $("#"+objectElementbutton).attr("onclick");
				$("#"+objectElementbutton).removeAttr("onclick");
				//$("#"+objectElementbutton).attr("onclick","");
				$("#"+objectElementbutton).unbind("click") 
			}


			//���ڲ��͸����
			if(typeof(ObjectLevel)=="undefined" || ObjectLevel==""){
				ObjectLevel =0;
			}

			
			/*
			var isIE6=false;
			if($.browser.msie && $.browser.version=="6.0"){
				//$("html").css("overflow-x","auto").css("overflow-y","hidden");
				$("body").css("overflow-x","auto").css("overflow-y","hidden");
				isIE6=true;
			};
			
			
			$("body").css({
				margin:"0px",
				padding:"15px 10px 0 10px",
				border:"0px",
				height:"100%",
				overflow:"auto"
			});
			*/





			// ��ȡ���в������õ����ǵ�zindex��ȡ�����ģ�Ȼ�����ó����ֵ+1
			var Tjs_CL_DivObjectArray = $("div").get().reverse();
			//alert(Tjs_CL_DivObjectArray);
			var Tjs_zIndex_aray = new Array();
			var Tjs_MaxzIndex_num =0;
			for(var i=0;i<Tjs_CL_DivObjectArray.length;i++){
				if(Tjs_CL_DivObjectArray[i].style.zIndex!='auto' && Tjs_CL_DivObjectArray[i].style.zIndex!=''){
					Tjs_zIndex_aray.push(parseInt(Tjs_CL_DivObjectArray[i].style.zIndex));
					if(Tjs_MaxzIndex_num<parseInt(Tjs_CL_DivObjectArray[i].style.zIndex)) Tjs_MaxzIndex_num=parseInt(Tjs_CL_DivObjectArray[i].style.zIndex);
				}
			}
			var Tjs_MaskDivzIndexNum = parseInt(Tjs_MaxzIndex_num)+10;


			$.Tjs_ContronlPageObject(false); //���ؿؼ�
			//var Tjs_testbutton="<br><br><br><span><input type=\"button\" name=\"Cancle_button\" value=\"�ر����ڲ�\" onclick=\"$.Tjs_canclemaskLayout('"+ObjectElementId+"','"+ObjectElementColor+"','"+ObjectElementopcity+"','"+objectElementbutton+"');\"/></span>";
			var Tjs_testbutton="";
			
			$("body").prepend("<div id=\""+ObjectElementId+"\" name=\""+ObjectElementId+"\" style=\"display:none;z-index:"+Tjs_MaskDivzIndexNum+";background-color: "+ObjectElementColor+";position: absolute;top:-1px;left:-1px;filter: alpha(opacity="+ObjectElementopcity+");opacity: 0.80;-moz-opacity: 0.80;\" align=\"center\"  valign=\"middle\">"+Tjs_testbutton+"</div>"); 


			//��ȡ�ߺͿ�
			if(ObjectLevel==0){
				var Tjs_height =(document.body.scrollHeight<screen.availHeight)?screen.availHeight:(document.body.scrollHeight+30);
				var Tjs_width  =(document.body.scrollWidth<screen.availWidth)?(screen.availWidth-20):document.body.scrollWidth;
			}else{
				var Tjs_height =document.body.scrollHeight;
				var Tjs_width  =document.body.scrollWidth;
			}
			//����mask�ĸߺͿ�
			$("#"+ObjectElementId).height(Tjs_height);
			$("#"+ObjectElementId).width(Tjs_width);
			$("#"+ObjectElementId).fadeIn("slow");


			//$("body").css("overflow","hidden"); 
		},
		



		/* ȡ�����ڲ� */
		Tjs_canclemaskLayout: function(ObjectElementId,ObjectElementColor,ObjectElementopcity,objectElementbutton)
		{
			/*
			ObjectElementId,		���ڲ��ID��
			ObjectElementColor,		���ڲ����ʾ��ɫ
			ObjectElementopcity,	���ڲ��͸����
			objectElementbutton		�������ڲ�Ķ�����
			*/



			//��ID��
			if(typeof(ObjectElementId)=="undefined" || !ObjectElementId){
				ObjectElementId = "_MaskLayout_gongyi_penwang";
			}

			//���ڲ���ɫ��Ĭ��Ϊ��ɫ
			if(typeof(ObjectElementColor)=="undefined" || !ObjectElementColor){
				ObjectElementColor = "#FFFFFF";
			}
			//���ڲ��͸����
			if(typeof(ObjectElementopcity)=="undefined" || !ObjectElementopcity){
				ObjectElementopcity =90;
			}
			
			//��ԭ�¼�
			if(typeof(objectElementbutton)!="undefined" && objectElementbutton!=""){
				//objectElementbutton = document.all.item(objectElementbutton);
				$("#"+objectElementbutton).bind("click",function(){$.Tjs_createmaskLayout(ObjectElementId,ObjectElementColor,ObjectElementopcity,objectElementbutton);});
			}

			//��ȥ���ڲ�
			$("#"+ObjectElementId).remove();
			$.Tjs_ContronlPageObject(true); //��ʾ�ؼ�

			//$("body").css("overflow","auto"); 
		},

		

		/* ���� ��ʾĳ�����񣬲��̶����λ��*/
		Tjs_ShowObject: function(ObjectElementname,ObjectelEmentFlag,ObjectelEmentWhere,IshaveMaskLoyoutflag,ObjectLevel){
			/*
			ObjectElementname,		���ID
			ObjectelEmentFlag,		������ʾ�ı�ʶ true��ʾ��ʾ false��ʾ�ر�
			ObjectelEmentWhere,		��ʾ��λ�� ����Tjs_FloatDiv �Ĳ�������
			IshaveMaskLoyoutflag	��ʾ��Ҫ��ʾ���ڲ� true��ʾ false����ʾ
			ObjectLevel				0Ϊȫ������Ϊiframe�� Ĭ��Ϊ0
			*/

			//������ʾ�ı�ʶ
			if(typeof(ObjectelEmentFlag)=="undefined" || ObjectelEmentFlag.length==0){
				ObjectelEmentFlag =true;
			}
			//�Ƿ�Ҫ���ڲ�
			if(typeof(IshaveMaskLoyoutflag)=="undefined" || IshaveMaskLoyoutflag.length==0){
				IshaveMaskLoyoutflag =true;
			}
			//������ʾ��λ��
			if(typeof(ObjectelEmentWhere)=="undefined" || !ObjectelEmentWhere){
				ObjectelEmentWhere = "middle";
			}
			//�������ƣ����Ϊ���򷵻�false
			if(typeof(ObjectElementname)=="undefined" || !ObjectElementname){
				alert("�����ö�������");
				return false;
			}
			//������ʾ��λ��
			if(typeof(ObjectLevel)=="undefined" || ObjectLevel==''){
				ObjectLevel = 0;
			}



			if(ObjectelEmentFlag){
				if(IshaveMaskLoyoutflag) $.Tjs_createmaskLayout('','#FFFFFF',80,"create_maskbutton",ObjectLevel); //��ʾ���ڲ�

				$("#"+ObjectElementname).Tjs_FloatDiv(ObjectelEmentWhere); //�̶����λ�ã����ܹ�������ʾ����λ
				//$("#"+ObjectElementname).fadeIn("slow");
				$("#"+ObjectElementname).show();
			}else{
				if(IshaveMaskLoyoutflag) $.Tjs_canclemaskLayout('','#FFFFFF',80,'create_maskbutton'); //�ر����ڲ�
				//$("#"+ObjectElementname).fadeOut("slow");
				$("#"+ObjectElementname).hide();
			}
		},

		
		/* �ƶ��� */
		Tjs_MoveDiv:function(ObjectElementHeadname,ObjectElementmovename,ObjectElementbodyname,ObjectElementclosename,ObjectElementsetsmallname,ObjectElementsetbigname){
			/*
			ObjectElementHeadname,		�ƶ���ı��⣬��ק�ϵ�ID
			ObjectElementmovename,		�ƶ��������ID
			ObjectElementbodyname,		�ƶ�������ID		����Ϊ��
			ObjectElementclosename,		�ƶ���Ĺر�ID	����Ϊ��
			ObjectElementsetsmallname,	�ƶ����С��ID	����Ϊ��
			ObjectElementsetbigname		�ƶ���Ĵ�ID	����Ϊ��
			*/
			
			
			
			var Tjs_x1,Tjs_y1;

			if(typeof(ObjectElementHeadname)=="undefined" || !ObjectElementHeadname){
				alert("�������ƶ�ץȡ�����������");
				return false;
			}

			if(typeof(ObjectElementmovename)=="undefined" || !ObjectElementmovename){
				alert("�������ƶ������������");
				return false;
			}
			
			 
			 $("#"+ObjectElementHeadname).css("cursor","move");
			 $("#"+ObjectElementHeadname).mousedown(
				 function(event){
					var offset=$("#"+ObjectElementmovename).offset();
					Tjs_x1=event.clientX-offset.left;
					Tjs_y1=event.clientY-offset.top;
					
					var witchButton=false;
					if(document.all&&event.button==1){
						witchButton=true;
					}else{
						if(event.button==0)	witchButton=true;
					}
					
					if(witchButton)//�����,FF��0��IE��1
					{
						$(document).mousemove(function(event){
							$("#"+ObjectElementmovename).css("left",(event.clientX-Tjs_x1)+"px");
							$("#"+ObjectElementmovename).css("top",(event.clientY-Tjs_y1)+"px");
						})
					}
			 });

			 $("#"+ObjectElementHeadname).mouseup(function(event){$(document).unbind("mousemove");});	
			 
			 if(typeof(ObjectElementclosename)!="undefined" || ObjectElementclosename)
				 $("#"+ObjectElementclosename).click(function(event){$("#move_div").hide();});

			 if((typeof(ObjectElementsetsmallname)!="undefined" || ObjectElementsetsmallname) && (typeof(ObjectElementbodyname)!="undefined" || ObjectElementbodyname))
				 $("#"+ObjectElementsetsmallname).click(function(event){$("#"+ObjectElementbodyname).hide();});

			 if((typeof(ObjectElementsetbigname)!="undefined" || ObjectElementsetbigname) && (typeof(ObjectElementbodyname)!="undefined" || ObjectElementbodyname))
				 $("#"+ObjectElementsetbigname).click(function(event){$("#"+ObjectElementbodyname).show();});
		},



		/* ȡ�����ƶ�*/
		Tjs_CancleMoveDiv:function(ObjectElementHeadname){
			/*
			ObjectElementHeadname �ƶ���ק�ϵ� ID
			*/
			if(typeof(ObjectElementHeadname)=="undefined" || !ObjectElementHeadname){
				alert("�������ƶ�ץȡ�����������");
				return false;
			}
			$("#"+ObjectElementHeadname).unbind("mousedown");
		},

		


		/* ������ʾ�� ��һ��Ŵ���ʾ ��Ȼ���Ƶ���Ҫ��λ�� */
		Tjs_OpenFlashShowDiv:function(ObjectElementIdname,ObjectelementLocation,ObjectelementBeginWhere,SpeedNum){
			/*
			ObjectElementIdname		 ���ID
			ObjectelementLocation	 ������ʾ���ƶ���λ�ò�������ʽ�磺{left:'+=200'} 
			ObjectelementBeginWhere	 ��ĳ�ʼ��λ�ã���ʽ���£�{left:'200px',top:'100px'} 
			*/
			if(typeof(ObjectElementIdname)=="undefined" || !ObjectElementIdname){
				alert("��������Ҫ��������Ķ�������");
				return false;
			}

			if(typeof(ObjectelementLocation)=="undefined" || !ObjectelementLocation){
				ObjectelementLocation = "false"; //�仯����ķ�Χ
			}


			if(typeof(ObjectelementBeginWhere)=="undefined" || !ObjectelementBeginWhere){
				ObjectelementBeginWhere = "false"; //�仯����ķ�Χ
			}
			
			if(typeof(SpeedNum)=="undefined" || SpeedNum==""){
				SpeedNum = 2000; //�ƶ����ٶ�
			}
			


			if(ObjectelementBeginWhere!="false")
				$("#"+ObjectElementIdname).css(ObjectelementBeginWhere);

			$("#"+ObjectElementIdname).css("position","absolute");

			/*
			show(speed,[callback]) ������ö�����ɺ�ִ��ĳ�ֲ��������������������    
			*/
			$("#"+ObjectElementIdname).show("slow"); 

			if(ObjectelementLocation!="false")
				$("#"+ObjectElementIdname).animate(ObjectelementLocation,SpeedNum); 

			return true;
		},
		


		/* ������ʾ�� ��һ��Ŵ���ʾ ��Ȼ���Ƶ���Ҫ��λ�� */
		Tjs_CloseFlashShowDiv:function(ObjectElementIdname,ObjectelementLocation){
			/*
			ObjectElementIdname	���ID
			ObjectelementLocation ������ʾ���ƶ���λ�ò�������ʽ�磺{left:'+=200'} 
			*/
		

			if(typeof(ObjectElementIdname)=="undefined" || !ObjectElementIdname){
				alert("��������Ҫ��������Ķ�������");
				return false;
			}

			if(typeof(ObjectelementLocation)=="undefined" || !ObjectelementLocation){
				ObjectelementLocation = "false"; //�仯����ķ�Χ
			}
		
			$("#"+ObjectElementIdname).css("position","absolute");

			if(ObjectelementLocation!="false")
				$("#"+ObjectElementIdname).animate(ObjectelementLocation,2000); 

			$("#"+ObjectElementIdname).hide("slow");

			return true;
		},



		/* �����ݽ���Ψһ�� ֻ����һΨ���� */
		Tjs_Arrayunique:function(arraynum){
			/*
			arraynum һΨ����
			*/
			var temp_num = new Array();
			//alert(arraynum);
			for(var i=0;i<arraynum.length;i++){
				//alert(arraynum[i]);
				//alert("====="+temp_num);
				//alert($.inArray(arraynum[i],temp_num));
				if($.inArray(arraynum[i],temp_num) == -1) temp_num.push(arraynum[i]);
			}
			return temp_num;
		},



		/*	����֤ʱ����ʾ��Ϣ���	*/
		Tjs_FormInertalertinfo:function(objectElement,strinfo,classnameobject){
			/*
			if($("#"+objectElement).attr("tagName").toUpperCase()=="SPAN" && usetarget!="SPAN"){
				// �����SPAN��ǩ�������ģɣֺ���html()
				$("#"+objectElement).empty();
				$("#"+objectElement).append("<div style='width:100%'>"+strinfo+"</div>");
				$("#"+objectElement+" div:first-child").addClass(classnameobject);
			}else{
				// �����DIV��ǩ����ֱ��html()
				$("#"+objectElement).empty();
				$("#"+objectElement).removeClass();
				$("#"+objectElement).addClass(classnameobject);
				$("#"+objectElement).css("padding-top","5px").css("padding-bottom","5px").css("padding-right","10px");
				$("#"+objectElement).html(strinfo);
			
			}
			*/

			if(strinfo=="") {
				$("#"+objectElement).empty();
				$("#"+objectElement).removeClass();
				$("#"+objectElement).html('');
				return false;
			}

			$("#"+objectElement).empty();
			$("#"+objectElement).removeClass();
			$("#"+objectElement).addClass(classnameobject);
			

			if($("#"+objectElement).attr("tagName")=="undefined") return false;
			
			//alert(objectElement);
			//if($("#"+objectElement).attr("tagName").toUpperCase()!="DIV"){
				//alert(objectElement);
				//$("#"+objectElement).css("padding-top","2px").css("padding-bottom","6px").css("padding-right","10px");
			//}
			//alert(strinfo);
			if(strinfo!='-1')$("#"+objectElement).html(strinfo);
		},

		/* ��ѡ��Ķ�ѡ����ȡ��*/
		Tjs_MoreCheckAction:function(ObjectElementname,CheckFlag){
			/*
			ObjectElementname	��ѡ��ģɣ�
			CheckFlag			Ϊtrue��ʱ�����ѡ��,Ϊfalse��ʱ��ȡ��
			
			return 
			ReturnDataArray		��ѡ��ѡ����ֵ������
			*/
			
			var ReturnDataArray = new Array();
			var Check_array =  $("input[@name=" + ObjectElementname + "]");
			for(var i=0;i<Check_array.length;i++){
				if(CheckFlag){
					$(Check_array[i]).attr("checked",true);
					ReturnDataArray.push($(Check_array[i]).attr("value"));
				}else{
					$(Check_array[i]).attr("checked",false);
				}
			}
			return ReturnDataArray;
		},
		

		/* �õ�ѡ�и�ѡ���ֵ������*/
		Tjs_GetMoreSelectValue:function(ObjectElementname,PenwangCheckFlag){
			/*
			ObjectElementname			��ѡ��ģɣ�
			PenwangCheckFlag			Ϊtrue��ʱ��ȡѡ�е�ֵ��false��ʱ��ȡδѡ�е�ֵ
			
			return 
			ReturnDataArray		��ѡ��ѡ����ֵ������
			*/
			var ReturnDataArray_Yes = new Array();
			var ReturnDataArray_No	= new Array();
			var Check_array =  $("input[@name=" + ObjectElementname + "]");
			for(var i=0;i<Check_array.length;i++){
				if($(Check_array[i]).attr("checked")){
					ReturnDataArray_Yes.push($(Check_array[i]).attr("value"));
				}else{
					ReturnDataArray_No.push($(Check_array[i]).attr("value"));
				}
			}

			if(PenwangCheckFlag){
				return ReturnDataArray_Yes;
			}else{
				return ReturnDataArray_No;
			}
		},


		/* �ж��Ƿ�Ϊ���֤���� */
		Tjs_isCardID:function (Tjs_sId){ 
			var iSum=0 ;
			var info="" ;
			if(!/^\d{17}(\d|x)$/i.test(Tjs_sId)) return false; 
			Tjs_sId=Tjs_sId.replace(/x$/i,"a"); 

			if(Tjs_aCity[parseInt(Tjs_sId.substr(0,2))]==null){
				//alert("������֤�����Ƿ�"); 
				return false; 
			}
			sBirthday=Tjs_sId.substr(6,4)+"-"+Number(Tjs_sId.substr(10,2))+"-"+Number(Tjs_sId.substr(12,2));			
			var d=new Date(sBirthday.replace(/-/g,"/")) ;
			if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate())){
				//alert("���֤�ϵĳ������ڷǷ�");
				return false; 
			}
			for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(Tjs_sId.charAt(17 - i),11) ;

			if(iSum%11!=1) return false; 
			return true;
			//Tjs_aCity[parseInt(Tjs_sId.substr(0,2))]+","+sBirthday+","+(Tjs_sId.substr(16,1)%2?"��":"Ů") 
		},


		/* ִ�������ж� */
		Tjs_RegexpressRegExp:function(ObjectContext,RegExpChart){
			/*
			ObjectContext	��Ҫ�жϵ�����
			RegExpChart		��Ҫ�������������ʽ

			return 
			true	����ͨ��
			false	����ʧ��

			���ã�$.Tjs_RegexpressRegExp("�й����񹲺͹�","chinese");
			*/
			if(typeof(ObjectContext)=="undefined" || !ObjectContext){
				ObjectContext = "";
			}

			if(typeof(RegExpChart)=="undefined" || !RegExpChart){
				alert("��ѡ������ʽ");
				return false;
			}
			
			var regexpress_chart = eval("Tjs_regexEnum."+RegExpChart);
			if(regexpress_chart=="undefined" || regexpress_chart==""){
				regexpress_chart= false;
			}

			var exp = new RegExp(regexpress_chart);
			if (exp.test(ObjectContext)) 
				return true;
			else 
				return false;
		},

		/* �ƻ��ַ��ĳ���*/
		Tjs_StrLength:function(sString){
			/*
			sString	��Ҫ���㳤�ȵ��ַ�������			
			return 
			icount������������һ������ת���������ַ�
			*/

		   var sStr,iCount,i,strTemp ;
		   if(sString=="" || !sString) return 0;
		   iCount = 0 ;
		   sStr = sString.split("");
			for (i = 0 ; i < sStr.length ; i ++)
			 {
				 strTemp = escape(sStr[i]);
				  if (strTemp.indexOf("%u",0) == -1)
				  {
					  iCount = iCount + 1 ;
				  }
				  else
				  {
					  iCount = iCount + 2 ;
				  }
			  }
			  return iCount ;
		},

		
		/* ���е����л�����һ��ҳ��ֻ�ܴ���һ��*/ 
		Tjs_OnlyScrollTo:function(PermitObjectname,ChirldObjectname){  
			/*
			PermitObjectname  �л����������
			ChirldObjectname���л����ݶ�����
			setInterval('$.Tjs_OnlyScrollTo("lie","p")',3000);
			*/
			if(typeof(PermitObjectname)=="undefined" || PermitObjectname==""){
				alert("PermitObjectname������Ϊ��");
				return false;
			}
			if(typeof(ChirldObjectname)=="undefined" || ChirldObjectname==""){
				alert("ChirldObjectname������Ϊ��");
				return false;
			}
			
			//$("div").data("blah"); 
			var Thisnum = $(PermitObjectname).data("ScrollTonum");
			if(typeof(ScrollTonum)=="undefined" || ScrollTonum==""){
				ScrollTonum =0;
			}


			var firstNode = $('#'+PermitObjectname+'>'+ChirldObjectname); 	
			firstNode.eq(ScrollTonum).fadeOut('slow',function(){  
				if(ScrollTonum>=$(firstNode).length-1){ScrollTonum=0;}else{ScrollTonum++;}
				firstNode.eq(ScrollTonum).fadeIn("slow");
				$(PermitObjectname).data("ScrollTonum",ScrollTonum);
			});

		},
		


		/* ȥβ */
		Tjs_formatnumber:function (value,num) 
		{
			var a,b,c,i
			a = value.toString();
			b = a.indexOf('.');
			c = a.length;
			if (num==0){
				if (b!=-1)	a = a.substring(0,b);
			}else{
				if (b==-1){
					a = a + ".";
					for (i=1;i<=num;i++) a = a + "0";
				}else{
					a = a.substring(0,b+num+1);
					for (i=c;i<=b+num;i++) a = a + "0";
				}
			}
			return a;
		},


		/* �������� */
		Tjs_number_format:function(value,num){
			/*
			value	Ҫ��������Ĕ���
			num		Ҫ�����Ĕ�λ
			*/
			var a_str = $.Tjs_formatnumber(value,num);
			var a_int = parseFloat(a_str);
			if (value.toString().length>a_str.length)
			{
				var b_str = value.toString().substring(a_str.length,a_str.length+1)
				var b_int = parseFloat(b_str);
				if (b_int<5){
					return a_str;}
				else{
					var bonus_str,bonus_int;
					if (num==0)
					{bonus_int = 1;}
					else
					{
						bonus_str = "0."
						for (var i=1; i<num; i++)
						bonus_str+="0";
						bonus_str+="1";
						bonus_int = parseFloat(bonus_str);
					}
					a_str = $.Tjs_formatnumber(a_int + bonus_int, num);
				}
			}
			return a_str;
		},

		//html���ı��룺����Ҫ������HTML������(����HTML������)�Ĳ�����������б���
		Tjs_HtmlEncode:function (sStr)
		{
			if(typeof(sStr)=='undefined' || !sStr || sStr == "")
				return '';
			sStr = sStr.replace(/&/g,"&amp;");
			sStr = sStr.replace(/>/g,"&gt;");
			sStr = sStr.replace(/</g,"&lt;");
			sStr = sStr.replace(/"/g,"&quot;");
			sStr = sStr.replace(/'/g,"&#39;");
			return sStr;
		},

		//html���Ľ��룺��HtmlEncode�����Ľ�����н���
		Tjs_HtmlUnEncode:function (sStr)
		{
			sStr = sStr.replace(/&amp;/g,"&");
			sStr = sStr.replace(/&gt;/g,">");
			sStr = sStr.replace(/&lt;/g,"<");
			sStr = sStr.replace(/&quot;/g,'"');
			sStr = sStr.replace(/&#39;/g,"'");
			return sStr;
		},

		
		// �õ���ַ���еĲ���ֵ �����ִ�Сд
		Tjs_Get:function(parmtname){
			//var SERVER_TEMP			= $.Tjs_HtmlEncode(window.location.search.replace(/.*\?/,"")); //HtmlEncode ���а�ȫ��֤


			var sl = location.href.indexOf('&');
			var hl = location.href.indexOf('#');
			var str = '';
			if ((sl < 0 || sl > hl) && hl > 0) str = location.hash.substr(1);
			else str = location.search.substr(1);
			
			//var SERVER_TEMP = str;
			var SERVER_TEMP			= $.Tjs_HtmlEncode(str.replace(/.*\?/,"")); //HtmlEncode ���а�ȫ��֤

			var PAGE_PARMT_ARRAY	= SERVER_TEMP.split("&amp;");
			if(PAGE_PARMT_ARRAY.length==0) return "";
			var value="";
			for(var i=0;i<PAGE_PARMT_ARRAY.length;i++){
				if(PAGE_PARMT_ARRAY[i]=="") continue;
				var GETname = PAGE_PARMT_ARRAY[i].substr(0,PAGE_PARMT_ARRAY[i].indexOf("="));
				if(GETname == parmtname){
					value = PAGE_PARMT_ARRAY[i].substr((PAGE_PARMT_ARRAY[i].indexOf("=")+1),PAGE_PARMT_ARRAY[i].length);
					return value;
					break;
				}
			}
			return "";
		},
		
		
		//ȡ�ñ�ҳ��ģգң̵�ַ������ȡ����ȡ�õ�ַ���ļ�����������
		Tjs_GetThisPageUrl:function(){
			//var Windows_ThispageUrl	=window.top.location.protocol+"//"+window.top.location.host+window.top.location.pathname+window.top.location.search+window.top.location.hash;
			var Windows_ThispageUrl	=window.top.location.href;
			return Windows_ThispageUrl;
		},
		
		//add by niou begin
		//ȡ�ñ�ҳ��ģգң̵�ַ������ȡ����ȡ�õ�ַ���ļ�����������
		Tjs_GetThisPageUrlAll:function(){
			var Windows_ThispageUrl	=top.location.href;
			return Windows_ThispageUrl;
		},
		//add by niou end

		/* COPY�ı�*/ 
		Tjs_JsCopyTo:function(txt){
			 if(window.clipboardData){    
				clipboardData.setData('text',txt);    
			 } else if(navigator.userAgent.indexOf("Opera") != -1) {    
				  window.location = txt;    
			 } else if (window.netscape) {    
				  try {    
					   netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");    
				  } catch (e) {    
					   alert("��������ܾ���\n�����������ַ������'about:config'���س�\nȻ��'signed.applets.codebase_principal_support'����Ϊ'true'");    
				  }    
				  var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);    
				  if (!clip)    
					   return;    
				  var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);    
				  if (!trans)    
					   return;    
				  trans.addDataFlavor('text/unicode');    
				  var str = new Object();    
				  var len = new Object();    
				  var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);    
				  var copytext = txt;    
				  str.data = copytext;    
				  trans.setTransferData("text/unicode",str,copytext.length*2);    
				  var clipid = Components.interfaces.nsIClipboard;    
				  if (!clip)    
					   return false;    
				  clip.setData(trans,null,clipid.kGlobalClipboard);    
				 // alert("���Ƴɹ���")    
			 }    
		},

		//�¼Ӻ��� 20110803 bypenwang
		Tjs_GetDayTimes:function()
		{
			var DateTmpStr = new Date();
			var Yearth	= DateTmpStr.getUTCFullYear();
			var Month	= DateTmpStr.getMonth() + 1;
			if(Month < 10 ) Month = "0" + Month.toString();

			var Day	= DateTmpStr.getDate();
			if(Day < 10 ) Day = "0" + Day.toString();
			
			var Hours	= DateTmpStr.getHours();
			if(Hours < 10 ) Hours = "0" + Hours.toString();
			
			var Minutes	= DateTmpStr.getMinutes();
			if(Minutes < 10 ) Minutes = "0" + Minutes.toString();
			
			var Secondes= DateTmpStr.getSeconds();
			if(Secondes < 10 ) Secondes = "0" + Secondes.toString();
			//alert(Yearth + "-" +Month+ "-" +Day + " " + Hours + ":"+ Minutes + ":"+ Secondes);
			DateTmpStr = Yearth + "-" +Month+ "-" +Day + " " + Hours + ":"+ Minutes + ":"+ Secondes;
			
			return DateTmpStr;
		},	
		/* �����ڽ��и�ʽת�����磺10��ǰ,һ��Сʱǰ��һ��ǰ��һ����ǰ.......*/
		Tjs_ChangTimesViewMeth:function(NeedChangTimes,SplitChart){
			/* 
			NeedChangTimes	��Ҫ����ת����ʱ�� 
			SplitChart		������ʱ���м�ķ��� һ��Ϊ�վͿ�����

			�÷���$.Tjs_ChangTimesViewMeth("2008-11-04 10:56:22");
			ע��ʱ��ĸ�ʽ��������:��-��-�� ʱ��

			return �����ַ���
			*/
			
			
			//�õ���ǰʱ��
			var DateTmpStr = $.Tjs_GetDayTimes();

			NeedChangTimes = NeedChangTimes.replace("��","-");
			NeedChangTimes = NeedChangTimes.replace("��","-");
			NeedChangTimes = NeedChangTimes.replace("��","");
			
			var Timescompreslut = $.Tjs_CompTime(NeedChangTimes,DateTmpStr);
			if(Timescompreslut<0){
				return "";
			}

			if(typeof(NeedChangTimes)=="undefined" || NeedChangTimes==""){
				//alert("��Ҫת����ʱ�������Ϊ��");
				return "";
			}
			if(typeof(SplitChart)=="undefined" || SplitChart==""){
				var SplitChart = " ";
			}



			//�ֽ�ʱ���ַ���
			/*
			DateTmpStr = $.trim(DateTmpStr);
			var thisdateparam	= DateTmpStr.split(SplitChart);
			var nowDate			=thisdateparam[0].split("-");
			var nowTime			=thisdateparam[1].split(":");

			var Str1 = thisdateparam[0].replace(/-/g,"/");
			var ThisDay_Year	= nowDate[0];		//���

			var ThisDay_Month	= nowDate[1];		//�·�
			var ThisDay_Data	= nowDate[2];;		//��
			var ThisDay_Hours	= nowTime[0];		//Сʱ
			var ThisDay_Minutes = nowTime[1];		//����
			var ThisDay_Seconds = nowTime[2];		//��
			*/


			//�ֽ�ʱ���ַ���2
			NeedChangTimes = $.trim(NeedChangTimes);
			var NeedChangedateparam	= NeedChangTimes.split(SplitChart);
			var nowDate_C			=NeedChangedateparam[0].split("-");
			var nowTime_C			=NeedChangedateparam[1].split(":");
			var Str1 = NeedChangedateparam[0].replace(/-/g,"/");
			var NeedChangeDay_Year		= nowDate_C[0];		//���
			var NeedChangeDay_Month		= nowDate_C[1];		//�·�
			var NeedChangeDay_Data		= nowDate_C[2];	//��
			var NeedChangeDay_Hours		= nowTime_C[0];		//Сʱ
			var NeedChangeDay_Minutes	= nowTime_C[1];		//����
			var NeedChangeDay_Seconds	= nowTime_C[2];		//��

			
			//var Timesnow	= ThisDay_Month+"-"+ThisDay_Data+"-"+ThisDay_Year+" "+ThisDay_Hours+":"+ThisDay_Minutes+":"+ThisDay_Seconds;
			//var TimesChange = NeedChangeDay_Month.toString()+"-"+NeedChangeDay_Data.toString()+"-"+NeedChangeDay_Year.toString()+" "+NeedChangeDay_Hours.toString()+":"+NeedChangeDay_Minutes.toString()+":"+NeedChangeDay_Seconds.toString();
			var TimesChange_ffandie = NeedChangeDay_Month.toString()+"/"+NeedChangeDay_Data.toString()+"/"+NeedChangeDay_Year.toString()+" "+NeedChangeDay_Hours.toString()+":"+NeedChangeDay_Minutes.toString()+":"+NeedChangeDay_Seconds.toString();
			
			//alert(nowDate_C[1]);



			//������Ҫע�⣺��FF��ֻ����"2/2/2009 12:50:00" �����ĸ�ʽ���бȽ�
			var TimesChangeday = new Date(TimesChange_ffandie);
			var DyMilli = 1000*60*60*24;    
			var ChangeValue =(Date.parse(new Date())-Date.parse(TimesChangeday))/DyMilli;	//��������

			


			var return_text = "";
			
			if(ChangeValue>365){
				return_text = "һ��ǰ";
			}else if(ChangeValue<=365 && ChangeValue>=30){
				var m = parseInt(ChangeValue/30);
				if(m<=0) m=1;
				return_text = m+"��ǰ";
			}else if(ChangeValue<30 && ChangeValue>=1){
				if(ChangeValue!=15)	return_text = parseInt(ChangeValue)+"��ǰ";	
				else return_text = "����ǰ";				
			}else if(ChangeValue<1){
				var ChangeValue_h	= ChangeValue*24;				//������Сʱ
				if(ChangeValue_h>=1){
					 return_text = parseInt(ChangeValue_h)+"Сʱǰ";
				}else if(ChangeValue_h<1){
					 var fengtimes = parseInt(ChangeValue_h*60);
					 if(fengtimes>0){
						 return_text = fengtimes+"����ǰ";
					 }else {
						 var ChangeValue_s	= parseInt(ChangeValue*24*3600);			//��������
						 if(ChangeValue_s>0)  return_text = ChangeValue_s+"��ǰ";
						 else return_text = "1��ǰ";
					 }
				}
			}
			return return_text;
		},


		//�Ƚ�ʱ�� ��ʽ yyyy-mm-dd hh:mi:ss	 
		Tjs_CompTime:function(beginTime,endTime){

			/*
				beginTime		�Ƚϵ�ʱ��һ
				endTime			�Ƚϵ�ʱ���
				��� endTime>beginTime ����1
				��� endTime<beginTime ����-1
				��� endTime==beginTime ����0
				�����������exception

				�÷���$.Tjs_CompTime("2008-05-10 12:30:22","2008-01-02 12:23:22");
				ע��ʱ��ĸ�ʽ
			
			*/

			if(typeof(beginTime)=="undefined" || beginTime==""){
				alert("�Ƚϵĵ�һ��ʱ�䲻��Ϊ��");
				return false;
			}
			if(typeof(endTime)=="undefined" || endTime==""){
				alert("�Ƚϵĵڶ���ʱ�䲻��Ϊ��");
				return false;
			}
			
			var begintemp = beginTime.split(" ");
			var endtimesemp = endTime.split(" ");

			
			var beginTimes_array	=	begintemp[0].split("-");
			var endTimes_array	=	endtimesemp[0].split("-");
			beginTime	=	parseInt(beginTimes_array[1])+'/'+parseInt(beginTimes_array[2])+'/'+parseInt(beginTimes_array[0])+' '+begintemp[1];
			endTime		=	endTimes_array[1].toString()+'/'+endTimes_array[2].toString()+'/'+endTimes_array[0].toString()+' '+endtimesemp[1];
			//alert(beginTime + " | " + endTime);
			var beginTime_date = new Date(beginTime);
			var endTime_date = new Date(endTime);
			var a =(Date.parse(endTime_date)-Date.parse(beginTime_date))/3600/1000;
			//alert(beginTime_date + " = " + Date.parse(endTime_date) + "|" + endTime_date + "|"  + a);
			

			if(a<0){
				return -1;
			}else if (a>0){
				return 1;
			}else if (a==0){
				return 0;
			}else{
				return 'exception'
			}
		},

		//��ȡ������꺯�� Tjs_MouseEvent 
		Tjs_MouseEvent:function() {
			var x = event.clientX
			var y = event.clientY
			return Array(x,y);
		},
		
		//�ԣɣв���
		//������$('#�����¼���������').bind('mouseover',function(){$.Tjs_mousemove_fun('��ɣ�');}).bind('mouseout',function(){$.Tjs_mouseout_fun('��ɣ�');});
		Tjs_mousemove_fun:function(Objectname,divoffset_x,divoffset_y){
			if(typeof(divoffset_x)=="undefined" || divoffset_x==""){
				var divoffset_x=5;
			}
			if(typeof(divoffset_y)=="undefined" || divoffset_y==""){
				var divoffset_y=5;
			}
			var mouse = $.Tjs_MouseEvent();//������ʾ���λ��
			var BodyWidth = $.Tjs_getBodyWidth();//�õ�ҳ��Ŀ�  $.Tjs_getCookie('uin').replace(/^o0*/, ""); 
			var ObjectWidth = $('#'+Objectname).css('width').replace(/px*/, "");

			var leftnumber = mouse[0]+divoffset_x;//��߾���
			//��������������߾���̫�󣬴�����ҳ���ȣ������¶�λ
			if(leftnumber+parseInt(ObjectWidth) >=BodyWidth){
				leftnumber = parseInt(BodyWidth) - parseInt(ObjectWidth) - 100;
			}

			var toppos	=(mouse[1]+divoffset_y)+"px";
			var leftpos	=(leftnumber)+"px";



			$('#'+Objectname).css({top:toppos,left:leftpos,position:'absolute'});
			$('#'+Objectname).fadeIn("slow");
		},

		Tjs_mouseout_fun:function (Objectname){
			$('#'+Objectname).fadeOut("slow");
		},

		//ҳ����ר�������ݴ���HTML specialty_desc speciality   ------��Ի����ҳ���JS
		Tjs_specialityToHtml:function(ObjectElementId,ObjectElementname,HtmlObject,OtherValue){
			if(typeof(ObjectElementId)=="undefined" || ObjectElementId==""){
				var ObjectElementId='speciality';
			}

			if(typeof(ObjectElementname)=="undefined" || ObjectElementname==""){
				var ObjectElementname=ObjectElementId;
			}

			if(typeof(HtmlObject)=="undefined" || HtmlObject==""){
				var HtmlObject='';
			}
			if(typeof(OtherValue)=="undefined" || OtherValue==""){
				var OtherValue='';
			}

			if(specialty_desc.length<=0) return false;

			

			var str_specialityhtml = "";
			for(var i=0;i<specialty_desc.length;i++){
				//str_specialityhtml+="<p><label><input type='checkbox' name='speciality' id='speciality' value='"+specialty_desc[i][0]+"'/>"+specialty_desc[i][1]+"</label>";
				//<p class='other'> <label><input name='specialty[]' type='checkbox' class='other' id='specialty' value='13' />����</label><input id='other_text_input' class='other_text_input' type='text' name='specialty_other'/></p>

				if(specialty_desc[i][0]=="*" && specialty_desc[i][1] =="����"){
					if(OtherValue!="") var desc_check = " checked"; else var desc_check="";
					//str_specialityhtml+="<p><label><input type='checkbox' name='"+ObjectElementId+"' id='"+ObjectElementname+"' value='"+specialty_desc[i][0]+"' "+desc_check+"/>"+specialty_desc[i][1]+"&nbsp;<input type='text' name='"+ObjectElementId+"_other' id='"+ObjectElementId+"_other' value='"+OtherValue+"' style='border:#999999 1px SOLID; width:100px'/></label>";
					str_specialityhtml+="<p class='other'><label><input type='checkbox' class='other' name='"+ObjectElementname+"' id='"+ObjectElementId+"' value='"+specialty_desc[i][0]+"' "+desc_check+"/>"+specialty_desc[i][1]+"</label><input type='text' name='"+ObjectElementId+"_other' id='"+ObjectElementId+"_other' value='"+OtherValue+"' class='other_text_input' maxlength='32'/></label>";
				
				}else{
					str_specialityhtml+="<p><label><input type='checkbox' name='"+ObjectElementname+"' id='"+ObjectElementId+"' value='"+specialty_desc[i][0]+"'/>"+specialty_desc[i][1]+"</label>";
				}
				
				i++;
				if(i>=specialty_desc.length-1){	str_specialityhtml+="</p>"; break;}
				
				if(specialty_desc[i][0]=="*" && specialty_desc[i][1] =="����"){
					if(OtherValue!="") var desc_check = " checked"; else var desc_check="";
					//str_specialityhtml+="<p><label><input type='checkbox' name='"+ObjectElementId+"' id='"+ObjectElementname+"' value='"+specialty_desc[i][0]+"' "+desc_check+"/>"+specialty_desc[i][1]+"&nbsp;<input type='text' name='"+ObjectElementId+"_other' id='"+ObjectElementId+"_other' value='"+OtherValue+"' style='border:#999999 1px SOLID; width:100px'/></label>";
					str_specialityhtml+="<p class='other'><label><input type='checkbox' class='other' name='"+ObjectElementname+"' id='"+ObjectElementId+"' value='"+specialty_desc[i][0]+"' "+desc_check+"/>"+specialty_desc[i][1]+"</label><input type='text' name='"+ObjectElementId+"_other' id='"+ObjectElementId+"_other' value='"+OtherValue+"' class='other_text_input' maxlength='32'/></label>";
				}else{
					str_specialityhtml+="<label><input type='checkbox' name='"+ObjectElementname+"' id='"+ObjectElementId+"' value='"+specialty_desc[i][0]+"'/>"+specialty_desc[i][1]+"</label></p>";
				}
			}

			//alert(str_specialityhtml);
			if(HtmlObject!="") $('#'+HtmlObject).html(str_specialityhtml);
			else document.write(str_specialityhtml);
		},


		//ҳ����ר�������ݴ�����ʾ��ҳ���ϣ��鿴״̬ 
		Tjs_specialityshowinfopage:function(HtmlObject,ValueString,OtherValue,SplitChart){
			if(typeof(HtmlObject)=="undefined" || HtmlObject==""){
				var HtmlObject='';
			}
			if(typeof(OtherValue)=="undefined" || OtherValue==""){
				var OtherValue='';
			}
			if(typeof(SplitChart)=="undefined" || SplitChart==""){
				var SplitChart=';';
			}
			if(specialty_desc.length<=0) return false;

			var valuearray = ValueString.split(',');
			if(valuearray.length<=0 && OtherValue=="") return false;
			//alert(valuearray);
			var str_specialityhtml = "";
			for(var i=0;i<specialty_desc.length;i++){
				//alert($.inArray(specialty_desc[i][0],valuearray));
				if(specialty_desc[i][0]=="") continue;

				if($.inArray(specialty_desc[i][0],valuearray) !=-1){					
					str_specialityhtml+=""+specialty_desc[i][1]+SplitChart;
				}else{
					continue;
				}
			}

			if(OtherValue!=""){
				str_specialityhtml+=OtherValue;
			}


			if(HtmlObject!="") $('#'+HtmlObject).append(str_specialityhtml);
			else document.write(str_specialityhtml);
		},
		
		//�ԣǣ�2312�ַ������н�ȡ
		/*
		@ str		��Ҫ������ַ�����ע�⣺�ǣ�2312��
		@ len		��ȡ�ĳ���
		@ DianTrue	�Ƿ���Ҫ��	
		*/
		Tjs_Intercept_str:function (str,len,DianTrue)
		{
			if(typeof(str)=="undefined" || str==""){
				var str='';
			}
			if(typeof(len)=="undefined" || len==""){
				var len=0;
			}
			
			if(typeof(DianTrue)=="undefined"){
				var DianTrue=true;
			}
			
			if(str=="" || len<=0) return str;
			

			var strlen = 0; 
			var s = "";
			for(var i = 0;i < str.length;i++)
			{
				if(str.charCodeAt(i) > 128)
					strlen += 2;
				else 
					strlen++;

				s += str.charAt(i);

				if(strlen >= len){ 
					if(DianTrue){ 
						return s + "...";
					}
					else
					{
						return s;
					}
				}
			}
			return s;
		},
		
		//��ʱ��ҳ��ת��ĳ����ַ
		/*
		Timesnum		�೤ʱ�����ת�� ��λ����  Ĭ��Ϊ5��
		Pageurl			��ַ		��ַΪ�յ�ʱ�򲻽��в���
		Timetextobject	��Ҫʱ��䶯��ʱ���ı�����
		*/

		Tjs_Pagegotourl:function(Timesnum,Pageurl,Timetextobject){
			if(typeof(Timesnum)=="undefined" || Timesnum==""){
				var Timesnum=5;
			}
			if(typeof(Pageurl)=="undefined" || Pageurl==""){
				var Pageurl = "";
				return false;
			}
			if(typeof(Timetextobject)=="undefined" || Timetextobject==""){
				var Timetextobject='';
			}


			Tjs_PageGotoMinnum			= Timesnum;

			if(Timetextobject==''){ 
				setTimeout("window.location='"+Pageurl+"';",Timesnum*1000);
			}else if(Timetextobject!='') {
				setInterval("$.Tjs_Pagegotourlinterval('"+Pageurl+"','"+Timetextobject+"');",1000);
			}
		},

		Tjs_Pagegotourlinterval:function(Pageurl,Timetextobject){
			Tjs_PageGotoMinnum--;
			$('#'+Timetextobject).text(Tjs_PageGotoMinnum);
			if(Tjs_PageGotoMinnum<=0) 
				window.location=Pageurl;
		},




		/* ҳ�����ú�����   --- BEGIN*/
		Tjs_PageClip_Focus_InitFun:function(divobject){
			var index =$(divobject).data('initindex');
			var focusclassname		= $(divobject).data('focusclassname');
			var lostfocusclassname	= $(divobject).data('lostfocusclassname');

			if(index=='undefined' || !index){
				var index = 0;
			}
			if(lostfocusclassname=='undefined'){
				var lostfocusclassname = '';
			}
			if(lostfocusclassname=='undefined'){
				var lostfocusclassname = '';
			}

			$(divobject).find('a').removeClass().addClass(lostfocusclassname);
			$(divobject).find('a').eq(index).removeClass().addClass(focusclassname);
		},
		
		Tjs_PageClip_Focus_Fun:function(object){
		  var parentobjec = $(object).parent();
		  var thisindex = $(parentobjec).find("a").index(object);
		  var listinfodivid 	= $(parentobjec).data('dividname');	 
		  var listinfomaxnum 	= $(parentobjec).data('listinfomaxnum');	 
		  var focusclassname	= $(parentobjec).data('focusclassname');
		  var lostfocusclassname	= $(parentobjec).data('lostfocusclassname');

		  $(parentobjec).find("a").removeClass().addClass(lostfocusclassname);
		  $(parentobjec).data('initindex',thisindex);	 
		  $(object).addClass(focusclassname);
		  
		  $.Tjs_InitListInfoDiv($(parentobjec).attr('id'),listinfodivid,thisindex,listinfomaxnum);
		},
		
		Tjs_PageClip_LostFocus_Fun:function(object){
		  var parentobjec = $(object).parent();
		  var lostfocusclassname	= $(parentobjec).data('lostfocusclassname');
		  $(parentobjec).find("a").removeClass().addClass(lostfocusclassname);
		},
		
		Tjs_InitListInfoDiv:function(listmenuobject,dividname,index,maxnum){
			for(var i=0;i<maxnum;i++){
				$('#'+dividname+i.toString()).hide();
			}
			$('#'+dividname+index.toString()).show();
			$('#'+listmenuobject).data('dividname',dividname);
			$('#'+listmenuobject).data('listinfomaxnum',maxnum);
			$.Tjs_PageClip_Focus_InitFun($('#'+listmenuobject));
		},


		/*
		Init_ListInfoObject_Fun ��ʼ��һ��ҳ��
		objectelemetname		ҳ�������ɣ���
		listdivobjectname		ҳ����Ӧ��ʾ��Ĳ�̶��ɣ�
		Maxnum					ҳ�������
		initindex				ҳ���ʼ����ʾҳ
		focusclassname			���õõ��������ʽ
		lostfocusclassname		����ʧȥ�������ʽ��Ĭ��Ϊ��
		ʹ�ã�$.Tjs_Init_ListInfoObject_Fun('paihangbang_div_id','listinfodivid',4,0,'on','');
		*/

		Tjs_Init_ListInfoObject_Fun:function(objectelemetname,listdivobjectname,Maxnum,initindex,focusclassname,lostfocusclassname){
			if(typeof(objectelemetname)=="undefined" || objectelemetname==""){alert('ҳ����������������');return false;}
			if(typeof(listdivobjectname)=="undefined" || listdivobjectname==""){alert('ҳ����ʾ������������');return false;}
			if(typeof(Maxnum)=="undefined" || Maxnum==""){alert('ҳ�������������');return false;}
			if(typeof(focusclassname)=="undefined"){alert('ҳ��ѡ�е���ʽ���󣬱�������');return false;}
			if(typeof(lostfocusclassname)=="undefined"){var lostfocusclassname ='';return false;}
			if(typeof(initindex)=="undefined" || initindex=="" || initindex<0 ){var initindex =0;}

			$('#'+objectelemetname).data('focusclassname',focusclassname);
			$('#'+objectelemetname).data('lostfocusclassname',lostfocusclassname);
			$('#'+objectelemetname).data('initindex',initindex);
			$.Tjs_InitListInfoDiv(objectelemetname,listdivobjectname,initindex,Maxnum);
			$('#'+objectelemetname).find("a").bind('mouseover',function(){$.Tjs_PageClip_Focus_Fun($(this));});
			$('#'+objectelemetname).find("a").bind('mouseout',function(){$.Tjs_PageClip_LostFocus_Fun($(this));});
			$('#'+objectelemetname).bind('mouseout',function(){$.Tjs_PageClip_Focus_InitFun($(this));});
		},
		/* ҳ�����ú�������  --- END*/
		


		/* ��ҳ��ʼ������*/
		Tjs_NextPageClassInit:function(DateTotalNum,Pagenum_Total,Pageno,Meth,PageurlParaeter,RePageSizeNum,PageObjectName){
				/*
				DateTotalNum	���������ݼ�¼
				Pagenum_Total	�ܹ��ж���ҳ
				Pageno			��ǰҳ
				Meth			==GET Ϊhref������ҳ
								==POST ΪOnClike������ҳ
				PageurlParaeter	= ��Ҫ���ϵ�ַURL��Ĳ����ַ���
				RePageSizeNum	= �ض���ÿҳ��ʾ����������
				PageObjectName	= ��ҳ����Ķ���ɣ�
				*/	
				Meth = 'GET';
				var ThispageUrl			="http://"+window.location.host+window.location.pathname; //��ǰ����������ҳ���ַ

				if(typeof(RePageSizeNum)=="undefined") RePageSizeNum = 0;
					if(RePageSizeNum>0) PageSizeNum = RePageSizeNum;

				if(!Pageno) Pageno=1;
				
				if(Pagenum_Total==''){
					var Total_Pagenum = parseInt(DateTotalNum/PageSizeNum); //��ҳ��
					if(Total_Pagenum==0) 
						Total_Pagenum=1;
					else
						if((DateTotalNum%PageSizeNum)>0) Total_Pagenum++;
				}else{
					Total_Pagenum= Pagenum_Total;
				}
				
				
				if(Total_Pagenum==1) {
					var PageNext_str = "";
					PageNext_str+="<div class='pagelist'>��ǰֻ��1ҳ</div>";
					$('#'+PageObjectName).html(PageNext_str); //���ֻ��һҳ������ʾ��ҳ
					return false;
				}
				
				if(Pageno>Total_Pagenum) Pageno=Total_Pagenum;	//�����ת��ҳ���������󣬾�ת�����һҳ

				if(!PageObjectName) Meth="GET";
				



				/*ˢ��ҳ����·�ҳ���� 2009-1-7  ��¼��Get�����иĳɹ���Post�ķ���û�иĶ�*/

				var PageNext_str ="";
				PageNext_str+="<div class=\"pagelist\">";

				PageNext_str+=Pageno+"/"+Total_Pagenum+"ҳ&nbsp;";
				if(Pageno>1) 
					  PageNext_str+="<a href='"+ThispageUrl+"?JSPAGENO=1"+PageurlParaeter+"'>��ҳ</a>&nbsp;";
				var topnext = Pageno-1;

				if(topnext>0) 
					  PageNext_str+="<a href='"+ThispageUrl+"?JSPAGENO="+topnext+PageurlParaeter+"'>��һҳ</a>&nbsp;";

				PageNext_str+="<span class=\"pagenum\">";
				for(var i=1;i<=Total_Pagenum;i++){
					if(i==Pageno){
						PageNext_str+="<span>"+i+"</span>&nbsp;";
					}else{
						PageNext_str+="<a href='"+ThispageUrl+"?JSPAGENO="+i+PageurlParaeter+"'>"+i+"</a>&nbsp;";
					}
				}
				PageNext_str+="</span>";


				var nextpageno=Pageno+1;
				if(nextpageno<=Total_Pagenum)
					PageNext_str+="<a href='"+ThispageUrl+"?JSPAGENO="+nextpageno+PageurlParaeter+"'>��һҳ</a>&nbsp;";

				if(Pageno<Total_Pagenum) 
					PageNext_str+="<a href='"+ThispageUrl+"?JSPAGENO="+Total_Pagenum+PageurlParaeter+"'>βҳ</a>&nbsp;";

				PageNext_str+="</div>";

				$('#'+PageObjectName).html(PageNext_str);
		}, // END FUN




		/* ����ʾ�ر�ҳ��*/
		Tjs_ClosePage:function(){
			window.opener=null;
			window.open('','_self','');
			window.close();
		},
		//window.opener=null;window.open('','_self','');window.close();







		/**
		 * ���ͼ��
		 */
		Tjs_Fis:function(v, s) {
			switch (s) {
				case 'integer':
					return typeof v === 'number' || (typeof v == 'string' && /^\d+$/.test(v));
				case 'empty':
					return v === null || v === undefined || v === '' || v === 0;
				case 'object':
					//��null��undefined��object������array
					return v !== null && typeof v == 'object';
				case 'array':
					return typeof v == 'object' && v !== null && typeof v.slice == 'function';
				default:
					return (typeof v == 'object' && v.constructor == s) || typeof v == s;
			}
			return false;
		},

		/**
		 * �ж��Ƿ�Ϊnull��undefined�����ַ�����0
		 */
		Tjs_Fempty:function(v) {
			return $.Tjs_Fis(v, 'empty');
		},

		Tjs_Fid:function(id) {
			if(id && (id.tagName || id.item)) return id;
			return document.getElementById(id);
		},




	/**
	 * ������
	 * @param {String} winid
	 * @param {String} content
	 * @param {Object} properties
	 * properties�������ݣ�
	 * {
		 width���0ΪĬ��,
		 height�߶�0ΪĬ��,
		 tiptitle���������,
		 onsubmitȷ������,
		 onclose�رն���,
		 oncacelȡ������,
		 winclass�����������ʽ,
		 contentclass���������ݶ�����ʽ,
		 okbtntxtȷ����ť����,
		 canbtntxtȡ����ť����,
		 btns��ť��ʾ��ʽ,
		 exthtml�������(��ʽֻ֧������)};
		 ����btnsΪ0 �ް�ť 1 ȷ�� 2 ȡ�� 3 ȷ��+ȡ��
	 */
	  Tjs_showtips:function(winid, content, properties){
		if(!properties || typeof properties!='object') properties = {};
		var pr = properties;
		winid = winid || ('$_Gytip__$'+Math.floor(Math.random()*100));
		var win = $.Tjs_Fid(winid);
		if($.Tjs_Fempty(win)){
			win = document.createElement('div');
			win.id = winid;
			win.className = pr.winclass||'prompt';
			win.style.position = 'absolute';
			win.style.zIndex = 101;
			win.style.display = 'none';
			document.body.insertBefore(win, document.body.firstChild);
		}
		
		
		if(pr.width>0) win.style.width = pr.width+'px';
		if(pr.height>0) win.style.height = pr.height+'px';
		
		if(typeof pr.onsubmit=='function') win.cOnsubmit = pr.onsubmit;
		else win.cOnsubmit = function(){document.getElementById(winid).style.display='none';};
		if(typeof pr.onclose=='function') win.cOnclose = pr.onclose;
		else win.cOnclose = function(){document.getElementById(winid).style.display='none';};
		if(typeof pr.oncancel=='function') win.cOncancel = pr.oncancel;
		else win.cOncancel = function(){document.getElementById(winid).style.display='none';};
		
		//var htm = ['<div id="'+winid+'" class="prompt">'];
		var htm =['<div class="t" id="'+winid+'_title"><a href="javascript:$.Tjs_TipwinClick(\''+winid+'\',\'close\')"><img style=\'margin-bottom:-30px\' src="http://mat1.gtimg.com/gongyi/npoimages/close.jpg" width="32" height="32" /></a>'+(pr.tiptitle||'��ܰ��ʾ��')+'</div>'];
		htm.push('<p id="'+winid+'_content">'+(content||'')+'</p>');
		if((pr.btns&&pr.btns!=0) || !!pr.exthtml){
			htm.push('<div class="btn"> <span>');
			if(pr.exthtml) htm.push(pr.exthtml);
			if((pr.btns&1)==1) {
				htm.push('<input onclick="$.Tjs_TipwinClick(\''+winid+'\',\'submit\')" style="margin-right:30px;"  value="'+(pr.okbtntxt||'ȷ��')+'"/>');
			}
			if((pr.btns&2)==2) {
				htm.push('<input onclick="$.Tjs_TipwinClick(\''+winid+'\',\'cancel\')" value=\"'+(pr.canbtntxt||'ȡ��')+'\" />');
			}
			htm.push('</div>');
		}
		
		win.innerHTML = htm.join('');
		$('#'+winid).Tjs_FloatDiv('middle');
		win.style.display = 'block';
	},


	/**
	 * ������
	 * @param {String} winid
	 * @param {String} content
	 * @param {Object} properties
	 * properties�������ݣ�
	 * {
		 width���0ΪĬ��,
		 height�߶�0ΪĬ��,
		 tiptitle���������,
		 onsubmitȷ������,
		 onclose�رն���,
		 oncacelȡ������,
		 winclass�����������ʽ,
		 contentclass���������ݶ�����ʽ,
		 okbtntxtȷ����ť����,
		 canbtntxtȡ����ť����,
		 btns��ť��ʾ��ʽ,
		 exthtml�������(��ʽֻ֧������)};
		 ����btnsΪ0 �ް�ť 1 ȷ�� 2 ȡ�� 3 ȷ��+ȡ��
	 */
	  Tjs_showtipsforactivity:function(winid, content, properties){
		if(!properties || typeof properties!='object') properties = {};
		var pr = properties;
		winid = winid || ('$_Gytip__$'+Math.floor(Math.random()*100));
		var win = $.Tjs_Fid(winid);
		if($.Tjs_Fempty(win)){
			win = document.createElement('div');
			win.id = winid;
			win.className = pr.winclass||'prompt';
			win.style.position = 'absolute';
			win.style.zIndex = 101;
			win.style.display = 'none';
			document.body.insertBefore(win, document.body.firstChild);
		}
		
		
		if(pr.width>0) win.style.width = pr.width+'px';
		if(pr.height>0) win.style.height = pr.height+'px';
		
		if(typeof pr.onsubmit=='function') win.cOnsubmit = pr.onsubmit;
		else win.cOnsubmit = function(){document.getElementById(winid).style.display='none';};
		if(typeof pr.onclose=='function') win.cOnclose = pr.onclose;
		else win.cOnclose = function(){document.getElementById(winid).style.display='none';};
		if(typeof pr.oncancel=='function') win.cOncancel = pr.oncancel;
		else win.cOncancel = function(){document.getElementById(winid).style.display='none';};
		
		//var htm = ['<div id="'+winid+'" class="prompt">'];
		var htm =['<div class="t" id="'+winid+'_title"><a href="javascript:$.Tjs_TipwinClick(\''+winid+'\',\'close\')"><img style=\'margin-bottom:-30px\' src="http://mat1.gtimg.com/gongyi/npoimages/close.jpg" width="32" height="32" /></a>'+(pr.tiptitle||'��ܰ��ʾ��')+'</div>'];
		htm.push('<p id="'+winid+'_content">'+(content||'')+'</p>');
		if((pr.btns&&pr.btns!=0) || !!pr.exthtml){
			htm.push('<div class="btn"> <span>');
			if(pr.exthtml) htm.push(pr.exthtml);
			if((pr.btns&1)==1) {
				htm.push('<input onclick="$.Tjs_TipwinClick(\''+winid+'\',\'submit\')" style="margin-right:30px;"  value="'+(pr.okbtntxt||'ȷ��')+'"/>');
			}
			if((pr.btns&2)==2) {
				htm.push('<input onclick="$.Tjs_TipwinClick(\''+winid+'\',\'cancel\')" value=\"'+(pr.canbtntxt||'ȡ��')+'\" />');
			}
			htm.push('</div>');
		}
		
		win.innerHTML = htm.join('');
		$('#'+winid).Tjs_FloatDiv('middle2');
		win.style.display = 'block';
	},



	Tjs_showtips_forphoto:function(winid, content, properties){	
		if(!properties || typeof properties!='object') properties = {};
		var pr = properties;
		winid = winid || ('$_Gytip__$'+Math.floor(Math.random()*100));
		var win = $.Tjs_Fid(winid);
		if($.Tjs_Fempty(win)){
			win = document.createElement('div');
			win.id = winid;
			win.className = pr.winclass||'promptforphoto';
			win.style.position = 'absolute';
			win.style.zIndex = 101;
			win.style.display = 'none';
			document.body.insertBefore(win, document.body.firstChild);
		}
		
		
		if(pr.width>0) win.style.width = pr.width+'px';
		if(pr.height>0) win.style.height = pr.height+'px';
		
		
		if(typeof pr.onsubmit=='function') win.cOnsubmit = pr.onsubmit;
		else win.cOnsubmit = function(){document.getElementById(winid).style.display='none';};
		if(typeof pr.onclose=='function') win.cOnclose = pr.onclose;
		else win.cOnclose = function(){document.getElementById(winid).style.display='none';};
		if(typeof pr.oncancel=='function') win.cOncancel = pr.oncancel;
		else win.cOncancel = function(){document.getElementById(winid).style.display='none';};

		var htm =['<div class="t" id="'+winid+'_title">'+(pr.tiptitle||'��ܰ��ʾ��')+'<a href="javascript:$.Tjs_TipwinClick(\''+winid+'\',\'close\')"><img src="http://mat1.gtimg.com/gongyi/npoimages/close.jpg" width="32" height="32" /></a></div>'];
		htm.push('<p id="'+winid+'_content">'+(content||'')+'</p>');
		if((pr.btns&&pr.btns!=0) || !!pr.exthtml){
			htm.push('<div class="btn"> <span>');
			if(pr.exthtml) htm.push(pr.exthtml);
			if((pr.btns&1)==1) {
				htm.push('<input onclick="$.Tjs_TipwinClick(\''+winid+'\',\'submit\')" style="margin-right:1%;"  value="'+(pr.okbtntxt||'ȷ��')+'"/>');
			}
			if((pr.btns&2)==2) {
				htm.push('<input onclick="$.Tjs_TipwinClick(\''+winid+'\',\'cancel\')" value=\"'+(pr.canbtntxt||'ȡ��')+'\" />');
			}
			htm.push('</div>');
		}
		
		win.innerHTML = htm.join('');
		$('#'+winid).Tjs_FloatDiv('middle');
		win.style.display = 'block';	
	},


	Tjs_TipwinClick:function(winid, op, onlyclose){
		if(typeof onlyclose == "undefined") onlyclose=null;
		if(op!='close'&&op!='submit'&&op!='cancel') return;
		var win = $.Tjs_Fid(winid);
		if($.Tjs_Fempty(win)) return;
		var passed = true;
		if(!onlyclose && typeof win['cOn'+op]=='function') {
			passed = win['cOn'+op]();
		}
		
		if(passed!==false) {
			//FunsetModal(winid+'_modal_$');
			win.posited=false;
			win.style.display = 'none';
		}
		
	},

	
	//�ҵ���ǩname����
	Tjs_FtagName:function(tagname) {
		return document.getElementsByTagName(tagname);
	},

	//������ʽ�ļ�
	Tjs_insertCSS:function(url) {
		if (!url) return;
		var l = $.Tjs_FtagName('link');
		for (var i in l) {
			if (l[i].href == url) return;
		}
		var css = document.createElement("link");
		css.rel = 'stylesheet';
		css.media = 'screen';
		css.type = "text/css";
		css.href = url;
		$.Tjs_FtagName('HEAD').item(0).appendChild(css);
	}


























});


 









/*  ����Ϊ fn ��չ*/
/*���ã�
1 �޲������ã�Ĭ�ϸ��������½�
$("#id").Tjs_FloatDiv();

2 ���ù̶�λ�ø���
//���½�
$("#id").Tjs_FloatDiv("rightbottom");
//���½�
$("#id").Tjs_FloatDiv("leftbottom");
//���½�
$("#id").Tjs_FloatDiv("rightbottom");
//���Ͻ�
$("#id").Tjs_FloatDiv("lefttop");
//���Ͻ�
$("#id").Tjs_FloatDiv("righttop");
//����
$("#id").Tjs_FloatDiv("middle");

3 �Զ���λ�ø���
$("#id").Tjs_FloatDiv({left:"10px",top:"10px"});
���ϲ��������ø�������left 10������,top 10�����ص�λ��
*/

jQuery.fn.Tjs_FloatDiv=function(location_xy){
	//ie6Ҫ�������������

	var isIE6=false;
	if($.browser.msie && $.browser.version=="6.0"){
		//$("html").css("overflow-x","auto").css("overflow-y","hidden");
		//$("body").css("overflow-x","auto").css("overflow-y","hidden");
		isIE6=true;
	};
	
	//alert(isIE6);
	/*
	$("body").css({
		margin:"0px",
		padding:"15px 10px 0 10px",
		border:"0px",
		height:"100%",
		overflow:"auto"
	});
	*/


	return this.each(function(){
		var loc;//��ľ��Զ�λλ��
		if(location_xy==undefined || location_xy.constructor == String){
			switch(location_xy){
				case("rightbottom")://���½�
					loc={right:"0px",bottom:"0px"};
					break;
				case("leftbottom")://���½�
					loc={left:"0px",bottom:"0px"};
					break;	
				case("lefttop")://���Ͻ�
					loc={left:"0px",top:"0px"};
					break;
				case("righttop")://���Ͻ�
					loc={right:"0px",top:"0px"};
					break;
				case("middle")://����
					var l=0;//����
					var t=0;//����
					var windowWidth,windowHeight;//���ڵĸߺͿ�
					//ȡ�ô��ڵĸߺͿ�
					if (self.innerHeight) {
						windowWidth=self.innerWidth;
						windowHeight=self.innerHeight;
					}else if (document.documentElement&&document.documentElement.clientHeight) {
						windowWidth=document.documentElement.clientWidth;
						windowHeight=document.documentElement.clientHeight;
					} else if (document.body) {
						windowWidth=document.body.clientWidth;
						windowHeight=document.body.clientHeight;
					}
						
					//alert(windowHeight);

					var scrolltop =$.Tjs_getPageScroll(); // $.Tjs_getPageScroll();
					l=windowWidth/2-$(this).width()/2;
					//t=windowHeight/2-$(this).height()/2;//+$.Tjs_getPageScroll();
					t = windowHeight/2 -$(this).height()/2 + scrolltop;		
					loc={left:l+"px",top:t+"px"};
					break;
				case("middle2")://���� ����������ϱ�Եx����
					var l=0;//����
					var t=0;//����
					var windowWidth,windowHeight;//���ڵĸߺͿ�
					//ȡ�ô��ڵĸߺͿ�
					if (self.innerHeight) {
						windowWidth=self.innerWidth;
						windowHeight=self.innerHeight;
					}else if (document.documentElement&&document.documentElement.clientHeight) {
						windowWidth=document.documentElement.clientWidth;
						windowHeight=document.documentElement.clientHeight;
					} else if (document.body) {
						windowWidth=document.body.clientWidth;
						windowHeight=document.body.clientHeight;
					}
						

					var scrolltop =$.Tjs_getPageScroll(); // $.Tjs_getPageScroll();
					l=windowWidth/2-$(this).width()/2;
					//t=windowHeight/2-$(this).height()/2;//+$.Tjs_getPageScroll();
					t = windowHeight/2 -$(this).height()/2 + scrolltop;
								
					t=document.body.clientHeight ;
					//alert();
					t=t-450;

					loc={left:l+"px",top:t+"px"};
					break;
				default://Ĭ��Ϊ���½�
					loc={right:"0px",bottom:"0px"};
					break;
			}
		}else{
			loc=location_xy;
		}
			
		//alert(loc.left+"----"+loc.top);

		// ��ȡ���в������õ����ǵ�zindex��ȡ�����ģ�Ȼ�����ó����ֵ+1
		var Tjs_CL_DivObjectArray = $("div").get().reverse(); 
		/*
		var Tjs_zIndex_aray = new Array();
		var Tjs_MaxzIndex_num =0;
		for(var i=0;i<Tjs_CL_DivObjectArray.length;i++){
			Tjs_zIndex_aray.push(Tjs_CL_DivObjectArray[i].style.zIndex);
			if(Tjs_MaxzIndex_num<Tjs_CL_DivObjectArray[i].style.zIndex) Tjs_MaxzIndex_num=Tjs_CL_DivObjectArray[i].style.zIndex;
		}
		var Tjs_FlostDivZindex = Tjs_MaxzIndex_num+1;
		*/
		var Tjs_zIndex_aray = new Array();
		var Tjs_MaxzIndex_num =0;
		for(var i=0;i<Tjs_CL_DivObjectArray.length;i++){
			if(Tjs_CL_DivObjectArray[i].style.zIndex!='auto' && Tjs_CL_DivObjectArray[i].style.zIndex!=''){
				Tjs_zIndex_aray.push(parseInt(Tjs_CL_DivObjectArray[i].style.zIndex));
				if(Tjs_MaxzIndex_num<parseInt(Tjs_CL_DivObjectArray[i].style.zIndex)) Tjs_MaxzIndex_num=parseInt(Tjs_CL_DivObjectArray[i].style.zIndex);
			}
		}
		var Tjs_FlostDivZindex = Tjs_MaxzIndex_num+1;


		$(this).css("position","absolute").css("z-index",Tjs_FlostDivZindex).css(loc);



		//if(isIE6){
			if(loc.right!=undefined){
				if($(this).css("right")==null || $(this).css("right")==""){
					$(this).css("right","18px");
				}
			}
			$(this).css("position","absolute");
		//}
	});
};










/* ����֤ */
jQuery.fn.formcheck=function(){

	var formname =$(this).attr("id");//�õ���form�ģɣ�
	if(typeof(formname)=="undefined" || !formname){
		alert("Form��ID����û�����ã���������form��id");
		return false;
	}

	//�õ�ĳ���������е�Input�ؼ�
	var formobject_input = $("#"+formname+" input"); 
	//�õ�ĳ���������е�Select�ؼ�
	var formobject_select = $("#"+formname+" select"); 
	//�õ�ĳ���������е�Check�ؼ�
	var formobject_textarea = $("#"+formname+" textarea"); 

	/* ��check��radio��Ҫ���С�id&name��ͬ��������Ψһ*/
	
	//alert(formobject_select);

	/* �ռ�����������пؼ��ģɣ�*/
	var FormInput_Text		=new Array(); //�ռ������ɣ�
	var FormInput_Check		=new Array(); //�ռ�ѡ����ɣ�
	var FormInput_Radio		=new Array(); //�ռ���ѡ��ɣ�
	var FormInput_Button	=new Array(); //�ռ���ѡ��ɣ�
	var FormInput_Files		=new Array(); //�ռ������ļ��ϴ��ɣ�

	var type = "";
	var thisid = "";
	var msgid = "";
	for(var i=0;i<formobject_input.length;i++){
		type =$(formobject_input[i]).attr("type");
		thisid=$(formobject_input[i]).attr("id")?$(formobject_input[i]).attr("id"):$(formobject_input[i]).attr("name");
		msgid=$(formobject_input[i]).attr("msgid")?$(formobject_input[i]).attr("msgid"):"";
		//stype.toUpperCase()=="FILE" && srcTag.toUpperCase()=="INPUT"
		if(type.toUpperCase()=="TEXT"){
			FormInput_Text.push(thisid);
		}else if(type.toUpperCase()=="RADIO"){
			FormInput_Radio.push(thisid);
		}else if(type.toUpperCase()=="CHECKBOX"){
			FormInput_Check.push(thisid);
		}else if(type.toUpperCase()=="FILE"){
			//alert(thisid);
			FormInput_Files.push(thisid);
		}else if(type.toUpperCase()=="BUTTON" || type.toUpperCase()=="SUBMIT"){
			FormInput_Button.push(thisid);
		}
	}


	var FormInput_Select		=new Array(); //�ռ�ѡ����ɣ�
	for(var i=0;i<formobject_select.length;i++){
		thisid=$(formobject_select[i]).attr("id")?$(formobject_select[i]).attr("id"):$(formobject_select[i]).attr("name");
		msgid=$(formobject_select[i]).attr("msgid")?$(formobject_select[i]).attr("msgid"):"";
		FormInput_Select.push(thisid);
	}


	var FormInput_textarea		=new Array(); //�ռ��ı���ɣ�
	for(var i=0;i<formobject_textarea.length;i++){
		thisid=$(formobject_textarea[i]).attr("id")?$(formobject_textarea[i]).attr("id"):$(formobject_textarea[i]).attr("name");
		msgid=$(formobject_textarea[i]).attr("msgid")?$(formobject_textarea[i]).attr("msgid"):"";
		FormInput_textarea.push(thisid);
	}




	FormInput_Radio = $.Tjs_Arrayunique(FormInput_Radio); 
	FormInput_Check = $.Tjs_Arrayunique(FormInput_Check); 
	
	var FocusIdname = "";
	/*������ı������ */
	var checkinpu_text_flag = true;
	for(var i=0;i<FormInput_Text.length;i++){
		var result = $("#"+FormInput_Text[i]).data("Tjs_checkresult");
		if(typeof(result)=="undefined"){
			result = true;
		}
		//alert(result);
		if(!result){
			//alert(FormInput_Text[i]);
			if(FocusIdname=="") FocusIdname = FormInput_Text[i]
			$("#"+FormInput_Text[i]).blur();
			if(checkinpu_text_flag) checkinpu_text_flag = false;
		}
	}


	/*������ѡ���ļ���FIELS�ؼ� */
	var checkinpu_files_flag = true;
	for(var i=0;i<FormInput_Files.length;i++){
		var result = $("#"+FormInput_Files[i]).data("Tjs_checkresult");
		if(typeof(result)=="undefined"){
			result = true;
		}
		//alert(result);
		if(!result){
			if(FocusIdname=="") FocusIdname = FormInput_Files[i]
			$("#"+FormInput_Files[i]).keyup();
			if(checkinpu_files_flag) checkinpu_files_flag = false;
		}
	}




	

	/*if(!checkinpu_text_flag){
		alert("����ע����Ϣ������������ȷ����text!");
		return false;
	}*/

	//alert(FormInput_Select);
	
	/*���������ѡ���� */
	var checkinpu_select_flag = true;
	for(var i=0;i<FormInput_Select.length;i++){
		var result = $("#"+FormInput_Select[i]).data("Tjs_checkresult");
		if(typeof(result)=="undefined"){
			result = true;
		}
		if(!result){
			if(FocusIdname=="") FocusIdname = FormInput_Select[i]
			$("#"+FormInput_Select[i]).change();
			if(checkinpu_select_flag) checkinpu_select_flag = false;
		}
	}
	

	/*
	if(!checkinpu_select_flag){
		alert("����ע����Ϣ������������ȷ����select!");
		return false;
	}
	*/

	/*����鸴ѡ�� */
	var checkinpu_check_flag = true;
	for(var i=0;i<FormInput_Check.length;i++){
		var checkobject = $("input[@name=" + FormInput_Check[i] + "]");
		//alert(checkobject.length);
		if(checkobject.length==1) var dataobject = checkobject;
		else  var dataobject = checkobject[0];
		
		var result = $(dataobject).data("Tjs_checkresult");
		if(typeof(result)=="undefined"){
			result = true;
		}
		//alert(result);
		if(!result){
			$(dataobject).click();
			if(checkinpu_check_flag) checkinpu_check_flag = false;
		}
	}

	/*if(!checkinpu_check_flag){
		alert("����ע����Ϣ������������ȷ����check!");
		return false;
	}*/

	/*����鵥ѡ�� */
	var checkinpu_radio_flag = true;
	for(var i=0;i<FormInput_Radio.length;i++){
		var checkobject = $("input[@name=" + FormInput_Radio[i] + "]");
		if(checkobject.length==1) var dataobject = checkobject;
		else  var dataobject = checkobject[0];
		
		var result = $(dataobject).data("Tjs_checkresult");
		if(typeof(result)=="undefined"){
			result = true;
		}
		if(!result){
			$(dataobject).change();
			if(checkinpu_radio_flag) checkinpu_radio_flag = false;
		}
	}

	/*
	if(!checkinpu_radio_flag){
		alert("����ע����Ϣ������������ȷ����radio!");
		return false;
	}
	*/

	/*������ı�����textarea */
	var checkinpu_area_flag = true;
	for(var i=0;i<FormInput_textarea.length;i++){
		var result = $("#"+FormInput_textarea[i]).data("Tjs_checkresult");
		if(typeof(result)=="undefined"){
			result = true;
		}
		if(!result){
			if(FocusIdname=="") FocusIdname = FormInput_textarea[i]
			$("#"+FormInput_textarea[i]).keyup();
			if(checkinpu_area_flag) checkinpu_area_flag = false;
		}
	}

	/*
	if(!checkinpu_area_flag){
		alert("����ע����Ϣ������������ȷ����textarea!");
		return false;
	}
	*/
	
	//alert(checkinpu_text_flag+"--"+checkinpu_select_flag+"--"+checkinpu_check_flag+"--"+checkinpu_radio_flag+"--"+checkinpu_area_flag)
	//checkinpu_text_flag  checkinpu_select_flag checkinpu_check_flag checkinpu_radio_flag checkinpu_area_flag
	if(FocusIdname!='') $('#'+FocusIdname).focus();
	if(checkinpu_text_flag && checkinpu_select_flag && checkinpu_check_flag && checkinpu_radio_flag && checkinpu_area_flag && checkinpu_files_flag){
		return true;
	}else{
		return false;
	}

	//alert("�����ͨ��!!!");
	//return false;
};




/* ���Ʊ�����ʼ�� */
jQuery.fn.setinfo=function(msgOptions){
	var setting = 
	{
		defaultvalue : "",				//Ĭ�ϵ�ʱ����ʾ�ַ���ֻ���TEXT��textarea���ƿ��ã�
		defaultvalue_use :true,			//Ĭ�ϵ�ʱ����ʾ�ַ��Ƿ����ʹ�ã�ֻ���TEXT��textarea���ƿ��ã��� defaultvalue ���ʹ��
		defaultvalue_color : "#C3C3C3",	//������ɫ��ֻ���TEXT��textarea���ƿ��ã�
		defaultvalue_Bcolor : "#000000",//�����ԭ��������ɫ��ֻ���TEXT��textarea���ƿ��ã�
		empty :false,					//�Ƿ���Ϊ�� true ��ʾҪ�жϲ���Ϊ�գ�false����Ϊ��
		textnumberalert :false,			//�Ƿ���Ҫ��text ��textarea���������ݽ�������������ʾ
		inputtype : "",					//������ʽ����
		typemsg:"����������ݸ�ʽ����!",	//����ʧ�ܺ����ʾ
		maxinputnum : -1,				//���¼���ַ���  ע�����������ַ���ġ�������2���ַ� ��ЩUTF8��������Ҫռ3���ַ�
		initmsg:"",						//��ʼ��ʱ�����ʾ
		onblurmsg:"",					//ʧȥ����ʱ�����ʾ�� --û��
		errmsg:"��������",				//�������ʾ�������ʱ��û���
		sussmsg:"������ȷ",				//������ɣ���ȷ����ʾ��
		msg_id:"",						//��ʾԪ�صģɣ�	
		err_class:"reg err",
		fou_class:"reg tips",
		shw_class:"reg d_tips",
		sus_class:"reg yes",
		isinputformatflag:false			//¼���ֵ�Ƿ����¼���ǣ����Ϊ���ʾ����¼�룬һ��¼���˰���ַ����滻�ɿո�
	};

	/*
			err_class:"onError",
			fou_class:"onFocus",
			shw_class:"onShow",
			sus_class:"onSuccess"


			reg d_tips
			reg tips
			reg err
			reg yes

	*/

	//$("div").data("blah", "hello");


	msgOptions = msgOptions || {};
	$.extend(setting, msgOptions);
	return this.each(function()
	{

		var thisid		= $(this).attr("id");
		var thisname	= $(this).attr("name");
		var msgid		= $(this).attr("initmsg");
		var thisvalue	= $(this).val();
		var stype		= this.type;
		var srcTag		= this.tagName;

		$(this).removeData("Tjs_checkresult"); 
		setting.defaultvalue_Bcolor=$(this).css("color");

		if(setting.msg_id!=""){
			var penwang = $(this);
			
			if((stype.toUpperCase()=="TEXT" && srcTag.toUpperCase()=="INPUT") || srcTag.toUpperCase()=="TEXTAREA"){
				
				if(setting.empty && $(penwang).val()=="")	$(this).data("Tjs_checkresult",false);
				else $(this).data("Tjs_checkresult",true);
				


				//alert(setting.sussmsg+"---------"+thisvalue);
				//��ʼ����ʾ��Ϣ
				if(setting.msg_id!="" && setting.initmsg!="" && thisvalue==""){

					if(setting.defaultvalue!=""){
						$(this).val(setting.defaultvalue);
						if(!setting.defaultvalue_use) $(this).css("color",setting.defaultvalue_color);
						//$(this).select();
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
					}else{
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
					}


					
				}else if(setting.msg_id!="" && thisvalue!=""){
					
					
					if(setting.defaultvalue=="" && setting.defaultvalue_use){
						//��ʼ������						
						if(setting.inputtype!="" && !$.Tjs_RegexpressRegExp($(penwang).val(),setting.inputtype)){
							$.Tjs_FormInertalertinfo(setting.msg_id,setting.typemsg,setting.err_class);
							$(penwang).data("Tjs_checkresult",false);
							//return false;

						}else{

								//idcard ��������֤��֤�Ļ�������Ҫִ��������� $.Tjs_isCardID() �ж��Ƿ�Ϊ���֤��
								var checkidstr = $(penwang).val();
								//if(setting.inputtype == 'idcard' && checkidstr.length==18 && !$.Tjs_isCardID(checkidstr)){
									//$.Tjs_FormInertalertinfo(setting.msg_id,'��������֤������������ȷ¼�����֤��',setting.err_class);
									//$(penwang).data("Tjs_checkresult",false);
									//return false;
								//}else{

									/* �жϳ��� ���볬��,���Ϊ32�ַ�(һ�������������ַ�)*/
									var thisvaluelength = $.Tjs_StrLength($(penwang).val());
									if(setting.maxinputnum>0 && thisvaluelength>setting.maxinputnum){
										//$.Tjs_FormInertalertinfo(setting.msg_id,"���볬��,���Ϊ"+setting.maxinputnum+"�ַ�(һ�������������ַ�)����¼��"+thisvaluelength+"���ַ�",setting.err_class);
										$.Tjs_FormInertalertinfo(setting.msg_id,"���볬��,���Ϊ"+setting.maxinputnum+"�ַ�����¼��"+thisvaluelength+"���ַ�",setting.err_class);
										$(penwang).data("Tjs_checkresult",false);
										//return false;
									}else{

										/* �����TEXTAREA ������ʾ����������������Ϣ��ʾ*/
										if(srcTag.toUpperCase()=="TEXTAREA"){
											var LastStrlength  = setting.maxinputnum - thisvaluelength;
											//var TextAreA_BuMsg = "<font color='#0080FF'>Ŀ¼����¼��<B>"+thisvaluelength+"</B>���ַ�/<B>"+parseInt(thisvaluelength/2)+"</B>������,������¼��<B>"+LastStrlength+"</B>���ַ�/<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
											var TextAreA_BuMsg = "����������<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
										}else{
											var TextAreA_BuMsg = "";
										}


										if(setting.sussmsg!='-1')$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg+TextAreA_BuMsg,setting.sus_class);
										else $.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
										
										if(setting.sussmsg!='-1')
										{
											$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg+TextAreA_BuMsg,setting.sus_class);
										}else {
											if(setting.textnumberalert) $.Tjs_FormInertalertinfo(setting.msg_id,TextAreA_BuMsg,setting.sus_class);
											else $.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
										}

										if(setting.initmsg) $.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
										$(penwang).data("Tjs_checkresult",true);
									}
								//}
						}					
						

					}else{ // END ��ʼ������
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
					}
					//penwang.focus();
				}// END INIT
				



				var blur_fun = function(){
					var settings = penwang.get(0).settings;
					var isempty_this = false;
					var value_this	=	"";
			
					/* �����������ʱ��Ĭ���ַ�ȥ�����ظ�CSS*/
					if(setting.defaultvalue!="" && setting.defaultvalue==$(penwang).val() && !setting.defaultvalue_use){
						$(this).val("");
						$(this).css("color",setting.defaultvalue_Bcolor);
						isempty_this = false;
						value_this = "";
					}else{
						value_this	=$(penwang).val();	
						if(value_this!="") isempty_this = true; else isempty_this = false;
					}
					
					/*��ʧȥ�����ʱ�������������Ϊ�յĻ�����Ĭ���ַ�����*/
					if($(penwang).val()=="" && isempty_this && !setting.defaultvalue_use){
						$(this).val(setting.defaultvalue);
						$(this).css("color",setting.defaultvalue_color);
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
						value_this = "";
						if(isempty_this) isempty_this = false;
						//return false;
					}

					
					if(setting.empty && !isempty_this){
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.errmsg,setting.err_class);
						$(penwang).data("Tjs_checkresult",false);
						return false;
					}else{
						if(!isempty_this){
							if(setting.initmsg)
								$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.fou_class);
								$(penwang).data("Tjs_checkresult",true);
								//return true;
						}else{
							/* ���������ж�*/ 
								//alert($.Tjs_RegexpressRegExp($(penwang).val(),setting.inputtype));
							if(value_this!='' && setting.inputtype!="" && !$.Tjs_RegexpressRegExp(value_this,setting.inputtype)){
								$.Tjs_FormInertalertinfo(setting.msg_id,setting.typemsg,setting.err_class);
								$(penwang).data("Tjs_checkresult",false);
								return false;

							}else{
								$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.fou_class);

							}


							//idcard ��������֤��֤�Ļ�������Ҫִ��������� $.Tjs_isCardID() �ж��Ƿ�Ϊ���֤��
							var checkidstr = $(penwang).val();
							//alert($.Tjs_isCardID(checkidstr));
							//if(setting.inputtype == 'idcard' && checkidstr.length==18 && !$.Tjs_isCardID(checkidstr)){
							//	$.Tjs_FormInertalertinfo(setting.msg_id,'��������֤������������ȷ¼�����֤��',setting.err_class);
							//	$(penwang).data("Tjs_checkresult",false);
							//	return false;
							//}


							/* �жϳ���*/
							var thisvaluelength = $.Tjs_StrLength(value_this);
							if(setting.maxinputnum>0 && thisvaluelength>setting.maxinputnum){
								//$.Tjs_FormInertalertinfo(setting.msg_id,"���볬��,���Ϊ"+setting.maxinputnum+"�ַ�(һ�������������ַ�)����¼��"+thisvaluelength+"���ַ�",setting.err_class);
								$.Tjs_FormInertalertinfo(setting.msg_id,"���볬��,���Ϊ"+setting.maxinputnum+"�ַ�����¼��"+thisvaluelength+"���ַ�",setting.err_class);
								$(penwang).data("Tjs_checkresult",false);
								return false;
							}

							/* �����TEXTAREA ������ʾ����������������Ϣ��ʾ*/
							if(setting.textnumberalert && setting.maxinputnum>0  && srcTag.toUpperCase()=="TEXTAREA"){ //textnumberalert maxinputnum:400
								var LastStrlength  = setting.maxinputnum - thisvaluelength;
								//var TextAreA_BuMsg = "<font color='#0080FF'>Ŀ¼����¼��<B>"+thisvaluelength+"</B>���ַ�/<B>"+parseInt(thisvaluelength/2)+"</B>������,������¼��<B>"+LastStrlength+"</B>���ַ�/<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
								var TextAreA_BuMsg = "����������<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
							}else{
								var TextAreA_BuMsg = "";
							}


							//alert(setting.sussmsg);

							if(setting.sussmsg!=""){
								if(setting.sussmsg!='-1')
								{
									$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg+TextAreA_BuMsg,setting.sus_class);
								}else {
									if(setting.textnumberalert) $.Tjs_FormInertalertinfo(setting.msg_id,TextAreA_BuMsg,setting.sus_class);
									else $.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
								}
							}else{
								$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg+TextAreA_BuMsg,setting.shw_class);
							}

							$(penwang).data("Tjs_checkresult",true);
							//return true;
						}
					}



                    //���isinputformatflagΪ���ʾ����¼�����ַ���¼���ǽ��Զ��滻�ɿո�
					if(setting.isinputformatflag){
						var regx_value = $(penwang).val();
						var result_regx_value = regx_value.replace(/[^\u0100-\uFFFF\w]/g,'');
						//$(penwang).val(result_regx_value);
						if(result_regx_value!=regx_value)
						{
							$.Tjs_FormInertalertinfo(setting.msg_id,'�����ݲ���¼�����ַ�',setting.err_class);
							$(penwang).data("Tjs_checkresult",false);
							return false;
						}
					}

					return true;



				};

				var onfouc_fun = function(){
					//$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
					//return false;

					var settings = penwang.get(0).settings;
					var isempty_this = false;
					var value_this	=	"";



					/* �����������ʱ��Ĭ���ַ�ȥ�����ظ�CSS*/
					if(setting.defaultvalue!="" && setting.defaultvalue==$(penwang).val() && !setting.defaultvalue_use){
						$(this).val("");
						$(this).css("color",setting.defaultvalue_Bcolor);
						isempty_this = false;
						value_this = "";
					}else{
						value_this	=$(penwang).val();	
						if(value_this!="") isempty_this = true; else isempty_this = false;
					}
					
					/*��ʧȥ�����ʱ�������������Ϊ�յĻ�����Ĭ���ַ�����*/
					if($(penwang).val()=="" && isempty_this && !setting.defaultvalue_use){
						$(this).val(setting.defaultvalue);
						$(this).css("color",setting.defaultvalue_color);
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
						value_this = "";
						if(isempty_this) isempty_this = false;
						//return false;
					}else{
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
					}

					//return false;

					if(setting.empty && !isempty_this){
						//$.Tjs_FormInertalertinfo(setting.msg_id,setting.errmsg,setting.err_class);
						$(penwang).data("Tjs_checkresult",false);
						return false;
					}else{
						if(!isempty_this){
							if(setting.initmsg)
								//$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.fou_class);
								$(penwang).data("Tjs_checkresult",true);
								//return true;
						}else{
							/* ���������ж�*/ 
								//alert($.Tjs_RegexpressRegExp($(penwang).val(),setting.inputtype));
							if(setting.inputtype!="" && !$.Tjs_RegexpressRegExp(value_this,setting.inputtype)){
								//$.Tjs_FormInertalertinfo(setting.msg_id,setting.typemsg,setting.err_class);
								$(penwang).data("Tjs_checkresult",false);
								return false;
							
							}

							//idcard ��������֤��֤�Ļ�������Ҫִ��������� $.Tjs_isCardID() �ж��Ƿ�Ϊ���֤��
							var checkidstr = $(penwang).val();
							//if(setting.inputtype == 'idcard' && checkidstr.length==18 && !$.Tjs_isCardID(checkidstr)){
							//	$.Tjs_FormInertalertinfo(setting.msg_id,'��������֤������������ȷ¼�����֤��',setting.err_class);
							//	$(penwang).data("Tjs_checkresult",false);
							//	return false;
							//}


							
							/* �жϳ���*/
							var thisvaluelength = $.Tjs_StrLength(value_this);
							if(setting.maxinputnum>0 && thisvaluelength>setting.maxinputnum){
								//$.Tjs_FormInertalertinfo(setting.msg_id,"���볬��,���Ϊ"+setting.maxinputnum+"�ַ�(һ�������������ַ�)����¼��"+thisvaluelength+"���ַ�",setting.err_class);
								$.Tjs_FormInertalertinfo(setting.msg_id,"���볬��,���Ϊ"+setting.maxinputnum+"�ַ�����¼��"+thisvaluelength+"���ַ�",setting.err_class);
								$(penwang).data("Tjs_checkresult",false);
								return false;
							}

							/* �����TEXTAREA ������ʾ����������������Ϣ��ʾ*/
							if(setting.textnumberalert && setting.maxinputnum>0  && srcTag.toUpperCase()=="TEXTAREA"){ //textnumberalert maxinputnum:400
								var LastStrlength  = setting.maxinputnum - thisvaluelength;
								//var TextAreA_BuMsg = "<font color='#0080FF'>Ŀ¼����¼��<B>"+thisvaluelength+"</B>���ַ�/<B>"+parseInt(thisvaluelength/2)+"</B>������,������¼��<B>"+LastStrlength+"</B>���ַ�/<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
								var TextAreA_BuMsg = "����������<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
							}else{
								var TextAreA_BuMsg = "";
							}							
							//$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg+TextAreA_BuMsg,setting.shw_class);
							if(setting.sussmsg!=''){
								if(setting.sussmsg!='-1')
								{
									$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg+TextAreA_BuMsg,setting.sus_class);
								}else {
									if(setting.textnumberalert) $.Tjs_FormInertalertinfo(setting.msg_id,TextAreA_BuMsg,setting.sus_class);
									else $.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
								}
							}else{
								$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg+TextAreA_BuMsg,setting.shw_class);
							}


							$(penwang).data("Tjs_checkresult",true);
							//return true;
						}
					}



                    //���isinputformatflagΪ���ʾ����¼�����ַ���¼���ǽ��Զ��滻�ɿո�
					if(setting.isinputformatflag){
						var regx_value = $(penwang).val();
						var result_regx_value = regx_value.replace(/[^\u0100-\uFFFF\w]/g,'');
						//$(penwang).val(result_regx_value);
						if(result_regx_value!=regx_value)
						{
							$.Tjs_FormInertalertinfo(setting.msg_id,'�����ݲ���¼�����ַ�',setting.err_class);
							$(penwang).data("Tjs_checkresult",false);
							return false;
						}
					}

					//return true;
				};



				var fun_keyup = function(){
					var settings = penwang.get(0).settings;
					var isempty_this = false;
					var value_this	=	"";


					/* �����������ʱ��Ĭ���ַ�ȥ�����ظ�CSS*/
					if(setting.defaultvalue!="" && setting.defaultvalue==$(penwang).val()){
						isempty_this = false;
						value_this = "";
					}else{
						value_this	=$(penwang).val();	
						if(value_this!="") isempty_this = true; else isempty_this = false;
					}
					

					if(setting.empty && !isempty_this){
						//$.Tjs_FormInertalertinfo(setting.msg_id,setting.errmsg,setting.err_class);




						var thisvaluelength = $.Tjs_StrLength(value_this);
						/* �����TEXTAREA ������ʾ����������������Ϣ��ʾ*/
						if(setting.textnumberalert && setting.maxinputnum>0 && srcTag.toUpperCase()=="TEXTAREA"){
							var LastStrlength  = setting.maxinputnum - thisvaluelength;
							//var TextAreA_BuMsg = "<font color='#0080FF'>Ŀ¼����¼��<B>"+thisvaluelength+"</B>���ַ�/<B>"+parseInt(thisvaluelength/2)+"</B>������,������¼��<B>"+LastStrlength+"</B>���ַ�/<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
							var TextAreA_BuMsg = "����������<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
						}else{
							var TextAreA_BuMsg = "";
						}


						if(setting.sussmsg!=''){
							if(setting.sussmsg!='-1')
							{
								$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg+TextAreA_BuMsg,setting.sus_class);
							}else {
								if(setting.textnumberalert) $.Tjs_FormInertalertinfo(setting.msg_id,TextAreA_BuMsg,setting.sus_class);
								else $.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
							}
						}else{
							$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg+TextAreA_BuMsg,setting.shw_class);
						}

						$(penwang).data("Tjs_checkresult",false);
						return false;
					}else{
						if(!isempty_this){
							if(setting.initmsg)
								//$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.fou_class);
								$(penwang).data("Tjs_checkresult",true);
								//return true;
						}else{
							/* ���������ж�*/ 
								//alert($.Tjs_RegexpressRegExp($(penwang).val(),setting.inputtype));
							if(setting.inputtype!="" && !$.Tjs_RegexpressRegExp(value_this,setting.inputtype)){
								//$.Tjs_FormInertalertinfo(setting.msg_id,setting.typemsg,setting.err_class);
								$(penwang).data("Tjs_checkresult",false);
								return false;
							}

						/*
						//idcard ��������֤��֤�Ļ�������Ҫִ��������� $.Tjs_isCardID() �ж��Ƿ�Ϊ���֤��
						var checkidstr = $(penwang).val();
						if(setting.inputtype == 'idcard' && checkidstr.length==18 && !$.Tjs_isCardID(checkidstr)){
							$.Tjs_FormInertalertinfo(setting.msg_id,'��������֤������������ȷ¼�����֤��',setting.err_class);
							$(penwang).data("Tjs_checkresult",false);
							return false;
						}

						*/	
							/* �жϳ���*/
							var thisvaluelength = $.Tjs_StrLength(value_this);
							if(setting.maxinputnum>0 && thisvaluelength>setting.maxinputnum){
								//$.Tjs_FormInertalertinfo(setting.msg_id,"���볬��,���Ϊ"+setting.maxinputnum+"�ַ�(һ�������������ַ�)����¼��"+thisvaluelength+"���ַ�",setting.err_class);
								$.Tjs_FormInertalertinfo(setting.msg_id,"���볬��,���Ϊ"+setting.maxinputnum+"�ַ�����¼��"+thisvaluelength+"���ַ�",setting.err_class);
								$(penwang).data("Tjs_checkresult",false);
								return false;
							}
							

							
							/* �����TEXTAREA ������ʾ����������������Ϣ��ʾ*/
							if(setting.textnumberalert && setting.maxinputnum>0 && srcTag.toUpperCase()=="TEXTAREA"){
								var LastStrlength  = setting.maxinputnum - thisvaluelength;
								//var TextAreA_BuMsg = "<font color='#0080FF'>Ŀ¼����¼��<B>"+thisvaluelength+"</B>���ַ�/<B>"+parseInt(thisvaluelength/2)+"</B>������,������¼��<B>"+LastStrlength+"</B>���ַ�/<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
								var TextAreA_BuMsg = "����������<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
							}else{
								var TextAreA_BuMsg = "";
							}


							if(setting.sussmsg!=''){
								if(setting.sussmsg!='-1')
								{
									$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg+TextAreA_BuMsg,setting.sus_class);
								}else {
									if(setting.textnumberalert) $.Tjs_FormInertalertinfo(setting.msg_id,TextAreA_BuMsg,setting.sus_class);
									else $.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
								}
							}else{
								$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg+TextAreA_BuMsg,setting.shw_class);
							}

							$(penwang).data("Tjs_checkresult",true);
							//return true;
						}
					}




                    //���isinputformatflagΪ���ʾ����¼�����ַ���¼���ǽ��Զ��滻�ɿո�
					if(setting.isinputformatflag){
						var regx_value = $(penwang).val();
						var result_regx_value = regx_value.replace(/[^\u0100-\uFFFF\w]/g,'');
						//$(penwang).val(result_regx_value);
						if(result_regx_value!=regx_value)
						{
							$.Tjs_FormInertalertinfo(setting.msg_id,'�����ݲ���¼�����ַ�',setting.err_class);
							$(penwang).data("Tjs_checkresult",false);
							return false;
						}
					}

					return true;

				};



				/* ȡ�����úõ�onchange���������ۼ� */
				var OldFunString = "";
				var OldChangeFun = $(this).attr('onchange');
				
				
				if(OldChangeFun){
					var str = "function anonymous()\n{";
					OldChangeFun = $.trim(OldChangeFun.toString().replace(str,''));
					str = "function onchange(event) {";//firefoxΪ��˶���
					OldChangeFun = $.trim(OldChangeFun.toString().replace(str,''));
					str = "function onchange()\n{";//ie8��
					OldChangeFun = $.trim(OldChangeFun.toString().replace(str,''));
					
					OldChangeFun = OldChangeFun.toString().replace('}','');
					$(penwang).removeAttr('onchange');
					OldFunString+= OldChangeFun;
				}

				var OldFocusFun = $(this).attr('onfocus');
				
				if(OldFocusFun){	
					var str = "function anonymous()\n{";
					OldFocusFun = $.trim(OldFocusFun.toString().replace(str,''));
					str = "function onfocus(event) {";//firefoxΪ��˶���
					OldFocusFun = $.trim(OldFocusFun.toString().replace(str,''));
					str = "function onfocus()\n{";//ie8��
					OldFocusFun = $.trim(OldFocusFun.toString().replace(str,''));

					OldFocusFun = OldFocusFun.toString().replace('}','');
					//$(penwang).removeAttr('onfocus');
					OldFunString+= OldFocusFun;
				}

				
				var OldonBlurFun = $(this).attr('onblur');
				if(OldonBlurFun){
					var str = "function anonymous()\n{";
					OldonBlurFun = $.trim(OldonBlurFun.toString().replace(str,''));
					str = "function onblur(event) {";//firefoxΪ��˶���
					OldonBlurFun = $.trim(OldonBlurFun.toString().replace(str,''));
					str = "function onblur()\n{";//firefoxΪ��˶���
					OldonBlurFun = $.trim(OldonBlurFun.toString().replace(str,''));
					
					OldonBlurFun = OldonBlurFun.toString().replace('}','');
					$(penwang).removeAttr('onblur');
					OldFunString+= OldonBlurFun;
				}

				var OldonKeyUpFun = $(this).attr('onkeyup');
				if(OldonKeyUpFun){
					var str = "function anonymous()\n{";
					OldonKeyUpFun = $.trim(OldonKeyUpFun.toString().replace(str,''));
					str = "function onkeyup(event) {";//firefoxΪ��˶���
					OldonKeyUpFun = $.trim(OldonKeyUpFun.toString().replace(str,''));
					str = "function onkeyup(event)\n{";//firefoxΪ��˶���
					OldonKeyUpFun = $.trim(OldonKeyUpFun.toString().replace(str,''));

					OldonKeyUpFun = OldonKeyUpFun.toString().replace('}','');
					$(penwang).removeAttr('onkeyup');
					OldFunString+= OldonKeyUpFun;
				}

				//var OldFunString = OldChangeFun.toString()+OldFocusFun.toString()+OldonBlurFun.toString()+OldonKeyUpFun.toString();
				//if(OldFunString.length>0) alert(OldFunString);
				/* --- END ---*/
				/*
				if(OldChangeFun){
					penwang.bind("change",function(){fun();eval(OldChangeFun)});
				}else{
					penwang.bind("change",function(){fun()});
				}
				*/


				//alert(OldFocusFun);
				/* �� ����*/
				//if(OldFocusFun)$(penwang).bind("focus",function(){onfouc_fun()});else$(penwang).bind("focus",function(){eval(OldFocusFun);onfouc_fun();}); 
				//if(OldonBlurFun) $(this).bind("blur",function(){fun()});else $(this).bind("blur",function(){fun();eval(OldonBlurFun);});
				//if(OldonKeyUpFun) $(this).bind("keyup",function(){fun_keyup()});else $(this).bind("keyup",function(){fun_keyup();eval(OldonKeyUpFun);});
				$(this).bind("focus",function(){onfouc_fun()}); 
				$(this).bind("blur",function(){blur_fun()});
				$(this).bind("keyup",function(){fun_keyup()});
				/* ����*/

			}else if(srcTag.toUpperCase()=="SELECT"){
				if(thisvalue==0) thisvalue="";
				//alert(thisvalue);

				if(setting.empty && thisvalue=="")	
					$(penwang).data("Tjs_checkresult",false);
				else $(penwang).data("Tjs_checkresult",true);

				//��ʼ����ʾ��Ϣ
				if(setting.msg_id!="" && setting.initmsg!="" && thisvalue==""){
					$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
				}else if(setting.msg_id!="" && setting.sussmsg!="" && thisvalue!=""){

					
					if(setting.defaultvalue=="" && setting.defaultvalue_use){
						//��ʼ������						
						if(setting.inputtype!="" && !$.Tjs_RegexpressRegExp($(penwang).val(),setting.inputtype)){
							$.Tjs_FormInertalertinfo(setting.msg_id,setting.typemsg,setting.err_class);
							$(penwang).data("Tjs_checkresult",false);
							//return false;
						}
						
						/* �жϳ���*/
						var thisvaluelength = $.Tjs_StrLength($(penwang).val());
						if(setting.maxinputnum>0 && thisvaluelength>setting.maxinputnum){
							$.Tjs_FormInertalertinfo(setting.msg_id,"����������ݹ������ô�ֻ��¼��"+setting.maxinputnum+"��Ӣ�Ļ�"+parseInt(setting.maxinputnum/2)+"������",setting.err_class);
							$(penwang).data("Tjs_checkresult",false);
							//return false;
						}

						/* �����TEXTAREA ������ʾ����������������Ϣ��ʾ*/
						if(srcTag.toUpperCase()=="TEXTAREA"){
							var LastStrlength  = setting.maxinputnum - thisvaluelength;
							var TextAreA_BuMsg = "<font color='#0080FF'>Ŀ¼����¼��<B>"+thisvaluelength+"</B>���ַ�/<B>"+parseInt(thisvaluelength/2)+"</B>������,������¼��<B>"+LastStrlength+"</B>���ַ�/<B>"+parseInt(LastStrlength/2)+"</B>������</font>";
						}else{
							var TextAreA_BuMsg = "";
						}
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg+TextAreA_BuMsg,setting.sus_class);
						$(penwang).data("Tjs_checkresult",true);

					} // END ��ʼ������


					$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
					//penwang.change();
				}// END INIT

				
				/* ȡ�����úõ�onchange���������ۼ� */
				var OldChangeFun = $(penwang).attr('onchange');
				
				if(OldChangeFun){
					var str = "function anonymous()\n{";//ie����˶���
					OldChangeFun = $.trim(OldChangeFun.toString().replace(str,''));					
					str = "function onchange(event) {";//firefoxΪ��˶���
					OldChangeFun = $.trim(OldChangeFun.toString().replace(str,''));
					str = "function onchange()\n{";//ie8��
					OldChangeFun = $.trim(OldChangeFun.toString().replace(str,''));
					
					OldChangeFun = OldChangeFun.toString().replace('}','');

					$(penwang).removeAttr('onchange');
				}
				/* --- END ---*/

				var fun = function(){
					var settings = penwang.get(0).settings;
					var thisvalue = $(penwang).val();
					if(thisvalue==0) thisvalue="";

					if(setting.empty && thisvalue==""){
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.errmsg,setting.err_class);
						$(penwang).data("Tjs_checkresult",false);
						//return false;
					}else{
						if(thisvalue==""){
							if(setting.initmsg){
								$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.fou_class);
								$(penwang).data("Tjs_checkresult",true);
								//return true;
							}
						}else{
							$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
							$(penwang).data("Tjs_checkresult",true);
							//return true;
						}
						$(penwang).data("Tjs_checkresult",true);
						//return true;
					}
				};

				/* �� ���� */	
				//penwang.bind("click",fun);
				//penwang.bind("blur",fun);
				if(OldChangeFun){
					//alert(OldChangeFun);
					penwang.bind("change",function(){fun();eval(OldChangeFun)});
				}else{
					penwang.bind("change",function(){fun()});
				}
				/* ����*/

			} else if((stype.toUpperCase()=="RADIO" || stype.toUpperCase()=="CHECKBOX")&& srcTag.toUpperCase()=="INPUT"){
				var Radio_array =  $("input[@name=" + this.name + "]");
				var penwang = $("input[@name=" + this.name + "]");
				

				//alert("befor:"+Radio_array.length);

				var ischeck =false;
				for(var i=0;i<Radio_array.length;i++){
					if($(Radio_array[i]).attr("checked")){ ischeck =true; /*break;*/ }
				}
				
				//alert("after:"+Radio_array.length);


				if(Radio_array.length==1){
					if($(Radio_array).attr("checked")){ ischeck =true;}
					if(setting.empty && !ischeck)	$(Radio_array).data("Tjs_checkresult",false);
					else $(Radio_array).data("Tjs_checkresult",true);
				}else{
					if(setting.empty && !ischeck)	$(Radio_array[0]).data("Tjs_checkresult",false);
					else $(Radio_array[0]).data("Tjs_checkresult",true);
				}


				//��ʼ����ʾ��Ϣ
				if(setting.msg_id!="" && setting.initmsg!="" && !ischeck){
					$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
				}else if(setting.msg_id!="" && setting.sussmsg!="" && ischeck){
					$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
					//penwang.click();
				}
				// END INIT


				var fun = function(){
					var settings = penwang.get(0).settings;
					var this_name=penwang.get(0).name;

					var Radio_array =  $("input[@name=" + this_name + "]");
					var ischeck =false;
					

					for(var i=0;i<Radio_array.length;i++){
						if($(Radio_array[i]).attr("checked")){ ischeck =true;}
					}
					if(Radio_array.length==1){
						if($(Radio_array).attr("checked")){ ischeck =true;}
						var dataobject = $(Radio_array);
					}else{
						var dataobject = $(Radio_array[0]);
					}




					if(setting.empty && !ischeck){
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.errmsg,setting.err_class);
						$(dataobject).data("Tjs_checkresult",false);
						//return false;
					}else{
						if(!ischeck){
							if(setting.initmsg){
								$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.fou_class);
								$(dataobject).data("Tjs_checkresult",true);
								//return true;
							}
						}else{
							$.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
							$(dataobject).data("Tjs_checkresult",true);
							//return true;
						}
						$(dataobject).data("Tjs_checkresult",true);
						//return true;
					}
				};

				/* �� ���� */	
				//penwang.bind("focus",fun);
				penwang.bind("change",fun);
				penwang.bind("click",fun);
				/* ����*/

			} else if(stype.toUpperCase()=="FILE" && srcTag.toUpperCase()=="INPUT"){
				
				//��ʼ��
				if(setting.initmsg && setting.msg_id){
					$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.shw_class);
				}
				if(setting.empty) $(this).data("Tjs_checkresult",false); else $(this).data("Tjs_checkresult",true);

				var fun = function(){
					$(penwang).data("Tjs_checkresult",true);
					var settings	= penwang.get(0).settings;
					if($(penwang).val()!="" && !$.Tjs_RegexpressRegExp($(penwang).val(),setting.inputtype)){
						var inputtypename = setting.inputtype;
						var upfiles_classname = $.trim(eval("Tjs_regexEnum."+inputtypename).toString());
						var upfiles_name = upfiles_classname.substr(7,parseInt(upfiles_classname.length)-9);
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.typemsg+"�������ϴ����ͣ�"+upfiles_name,setting.err_class);
						$(penwang).data("Tjs_checkresult",false);
					}else if($(penwang).val()!="" && $.Tjs_RegexpressRegExp($(penwang).val(),setting.inputtype)){
						if(setting.sussmsg!='-1') $.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.fou_class);
						else $.Tjs_FormInertalertinfo(setting.msg_id,setting.sussmsg,setting.sus_class);
						$(penwang).data("Tjs_checkresult",true);
					}else if($(penwang).val()=="" && setting.empty && setting.errmsg){
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.errmsg,setting.err_class);
						$(penwang).data("Tjs_checkresult",false);
					
					}else if($(penwang).val()=="" && setting.msg_id && !setting.empty){
						$.Tjs_FormInertalertinfo(setting.msg_id,setting.initmsg,setting.fou_class);
						$(penwang).data("Tjs_checkresult",true);
					}

				};
				
				/* �� ���� */	
				penwang.bind("focus",fun);
				penwang.bind("change",fun);
				penwang.bind("keyup",fun);
				/* ����*/				
				
			}// END IF 


		} //  END msg_id


	}); // END EACH

};




jQuery.fn.setval=function(setvalue){
	/*
	* @ setvalue ������Ϊһ����ֵҲ����Ϊ���飬������ֻ���ڶ�checkbox���и�ֵ��ʱ����������飬����������������
	*/
	//alert(setvalue.length);
	//alert(setvalue);
	//alert(setvalue);
	if(typeof(setvalue)=="undefined" && setvalue!=0){
		var setvalue="";
		return false;
	}

	if(setvalue.toString() =="") return false;
	if(setvalue.constructor == window.Array) var checkbox_value = true;else var checkbox_value=false;


	var thisid		= $(this).attr("id");
	var thisname	= $(this).attr("name");
	if(thisid=="")  var thisid=thisname;
	var stype		= $(this).attr("type");
	var srcTag		= $(this).attr("tagName");


	if((stype.toUpperCase()=="TEXT" && srcTag.toUpperCase()=="INPUT") || srcTag.toUpperCase()=="TEXTAREA"){
		if(checkbox_value){ alert("text textarea ��ֵ����Ϊ����");return false;}
		$(this).val(setvalue);
	}else if(srcTag.toUpperCase()=="SELECT"){
		if(checkbox_value){ alert("SELECT ��ֵ����Ϊ����");return false;}
		$(this).val(setvalue);
	} else if(stype.toUpperCase()=="CHECKBOX"&& srcTag.toUpperCase()=="INPUT"){
		if(checkbox_value){
			for(var i=0;i<setvalue.length;i++){
				$("input[@type="+stype+"][@id="+thisid+"][@value="+setvalue[i]+"]").attr("checked",true);
			}
		}else{
				$("input[@type="+stype+"][@id="+thisid+"][@value="+setvalue+"]").attr("checked",true);
		}

	} else if(stype.toUpperCase()=="RADIO"&& srcTag.toUpperCase()=="INPUT"){
		if(checkbox_value){ alert("RADIO ��ֵ����Ϊ����");return false;}
		$("input[@type="+stype+"][@id="+thisid+"][@value="+setvalue+"]").attr("checked",true);
	} else if(stype.toUpperCase()=="FILE" && srcTag.toUpperCase()=="INPUT"){
		if(checkbox_value){ alert("FILE ��ֵ����Ϊ����");return false;}
		$(this).val(setvalue);
	}else{
		if(checkbox_value){ alert(stype+"��ֵ����Ϊ����");return false;}
		$(this).val(setvalue);
	}
};
























/* ����

   var roll = new MessageRoll({
		container : document.getElementById("ParentTables"), // ����������
		height : 650 + 1 , // ������Ϣ���ĸ߶�,���ϵױ߿�1px,���û�еױ߿��򲻼�1
		rollElements : "li" // ����Ԫ�ص�html�������
   });
   roll.start(200); //��ʼ����,ÿ�������һ��

*/
var MessageRoll = function() {
	this.container = null;
	this.height = 0;
	this.interval = null;
	this.rollElements = "";
	this.rollIndex = 0;
	this.nowRoll = 0;
	this.stopeda = false;
	if(arguments.length > 0) {
	   var object = arguments[0];
	   if(typeof object == "object") {
		for(var key in object) {
		 if(!this[key]) {
		  this[key] = object[key];
		 }
		}
	   }
	}
	if(this.container != null && this.height != 0) {
	   this.container.style.height = this.height + "px";
	   this.container.style.overflow = "hidden";
	}
	if(this.container != null && this.rollElements != "") {
	   this.rollElements = this.container.getElementsByTagName(this.rollElements);
	}
	this.instanceIndex = MessageRoll.instanceCount;
	MessageRoll.instanceCount++;
};

MessageRoll.instanceCount = 0;
MessageRoll.instances = [];

MessageRoll.prototype.start = function(delay) {
	this.stoped = false;
	if(typeof delay != "number" || 0 == delay || null == this.container) {
	   return;
	}
	if("" == this.rollElements || null == this.rollElements) {
	   if(arguments.length >= 2 && typeof arguments[1] == "string") {
		this.rollElements = this.container.getElementsByTagName(arguments[1]);
	   }
	}
	if(null == MessageRoll.instances[this.instanceIndex]) {
	   MessageRoll.instances[this.instanceIndex] = this;
	}
	var _messageRollCopy = MessageRoll.instances[this.instanceIndex];
	var Proc = function() {
	   with(_messageRollCopy) {
		if(rollIndex >= rollElements.length - 2) {
		 container.scrollTop = 0;
		 rollIndex = 0;
		 window.setTimeout(smallProc,delay);
		 return;
		}
	   }
	   smallProc();
	}
	var eHeight = _messageRollCopy.rollElements[0].offsetHeight;
	var smallProc = function() {
	   if(_messageRollCopy.stoped){return false;};
	   if(_messageRollCopy.nowRoll < eHeight) {
		_messageRollCopy.container.scrollTop++;
		_messageRollCopy.nowRoll++;
		window.setTimeout(smallProc,80);
	   } else {
		_messageRollCopy.nowRoll = 0;
		_messageRollCopy.rollIndex++;
		if(!_messageRollCopy.stoped) {
		 window.setTimeout(Proc,delay);
		}
	   }
	};
	window.setTimeout(Proc,delay);
};

MessageRoll.prototype.stop = function() {
	this.stoped = true;
};











function Tjs_dhscroll(){
    //author:dh20156
    var dh = this;
	//�ܼ�����
    this.content_cnt = 1;

    this.autoid = null;
    //��1
    this.scrollDOM = null;
    //��2
    this.scrollCDOM = null;
    //չʾ��ȣ��Ϳ�1���һ�£�
    this.showwidth = 0;
    //ÿ�ι�������
    this.steplength =33;
    var oldlength = this.steplength;
    //����ʱ����
    this.steptime = 1;
    //ͣ��ʱ��
    this.resttime = 9999999999999;
    //��������
    this.uvwidth = 0;

    //�޷����ù���
    this.getsw = function() {
    
        var tempw = this.scrollCDOM.offsetWidth;
        var temps = this.scrollCDOM.innerHTML;
        this.scrollCDOM.innerHTML = [temps,temps].join("");
        this.scrollCDOM.style.width = tempw*2+"px";
        if(document.attachEvent){
            this.scrollDOM.attachEvent("onmouseover",dh.pause);
            this.scrollDOM.attachEvent("onmouseout",dh.goon);
        }else{
            this.scrollDOM.addEventListener("mouseover",dh.pause,true);
            this.scrollDOM.addEventListener("mouseout",dh.goon,true);
        }
        //this.uvwidth = Math.ceil(this.scrollDOM.scrollWidth / 2);
		this.uvwidth = this.showwidth*parseInt(this.content_cnt-1); //���� * ��������-1��
    }

    //���ҵ���
    this.scrollleft = function(){
        if(this.autoid!=null){
            window.clearTimeout(this.autoid);
        }
        var uvleft = this.scrollDOM.scrollLeft;
        uvleft += this.steplength;

        this.scrollDOM.scrollLeft = uvleft;

		//modefy by junhaiguo  �������� 2011.03.21
        if(uvleft>=this.uvwidth)
		{
			if(uvleft==this.uvwidth)
			{
			 	this.scrollDOM.scrollLeft = 0;
			}
			else
			{
				this.scrollDOM.scrollLeft =0;
			}
		}
		else
		{
			if(uvleft % this.showwidth == 0){
				this.autoid = window.setTimeout(function(){dh.scrollleft()},dh.resttime);
			}else{
				this.autoid = window.setTimeout(function(){dh.scrollleft()},dh.steptime);
			}
		}
        
    }

    //������
    this.scrollright = function() {
        if (this.autoid != null) {
            window.clearTimeout(this.autoid);
        }
        var uvleft = this.scrollDOM.scrollLeft;
        uvleft -= this.steplength;

        this.scrollDOM.scrollLeft = uvleft;
		
		//modefy by junhaiguo  �������� 2011.03.21
        if (uvleft <= 0) {
			if(uvleft==0)
			{
			 	this.scrollDOM.scrollLeft = 0;
			}
			else
			{
				this.scrollDOM.scrollLeft =this.uvwidth-this.showwidth;
			}
        }
		else
		{
			if (uvleft % this.showwidth == 0) {
				this.autoid = window.setTimeout(function() { dh.scrollright() }, dh.resttime);
			} else {
				this.autoid = window.setTimeout(function() { dh.scrollright() }, dh.steptime);
			}
		}
    }

    //��ʼ����������Ϊ���������Ƿ�ͣ��
    this.go = function(direction, rest) {
        if(this.autoid!=null){
            window.clearTimeout(this.autoid);
        }
        if(direction=="left"){
            if(rest){
                this.autoid = window.setTimeout(function(){dh.scrollleft()},9999999999999);
            }else{
                dh.scrollleft();
            }
        }else{
            if(rest){
                this.autoid = window.setTimeout(function(){dh.scrollright()},9999999999999);
            }else{
                dh.scrollright();
            }
        }
    }

    //����
    this.pre = function(){
            this.scrollright();
    }
    //����
    this.next = function(){
            this.scrollleft();
    }
    //��ͣ
    this.pause = function(){
        dh.oldlength = dh.steplength;
        dh.steplength = 0;
    }
    //����
    this.goon = function(){
        dh.steplength = dh.oldlength;
    }
}









/* ����Ϊ��дJS ��Jquery�޹�*/
//2008-12-16  �գ���qlog_gb.js��tencent.penwang.system.gb.js �� tencent.penwang.extendjquery.gb.js �ϲ���һ���ļ�
var OldDomain =document.domain;
//document.domain="qq.com";
/* ��¼JS*/
var openparam_info = "";
function ptlogin2_onResize(width, height)
{	
	login_wnd = document.getElementById("login_div");
	if (login_wnd)
	{	
		var oldtop = login_wnd.style.top;
		if(oldtop) oldtop = parseInt(oldtop.replace("px",""));
		var pagescroll = $.Tjs_getPageScroll();
		var top =oldtop+pagescroll;

		//login_wnd.style.top =top + "px";
		login_wnd.style.width = width + "px";
		login_wnd.style.height = height + "px";
		
		login_wnd.style.visibility = "hidden";
		login_wnd.style.visibility = "visible";
	}
	//frames.login_frame.document.all.u.readOnly=true;
}



function ptlogin2_onClose()
{
	
	if(ismaskflag){
		$.Tjs_ShowObject('login_div',false,'middle',true);
		//$.Tjs_canclemaskLayout('','#D9ECFF',80,'create_maskbutton');
	}
	
	login_wnd = document.getElementById("login_div");	
	login_wnd.style.display="none";
}


function ptlogin2_onLogin() {
	//.ִ��ҵ���Լ��Ĵ���
	//�����Ҫ������¼�������򷵻�true, �����뷵��false
	/* �õ�¼���QQ�ţ����Ҹ�QQ���Ƿ�����Ȩ��Χ�� */
	return true;
}



var openLogin = function (urlparam)
{
	
	document.domain="qq.com";
	//�Ƿ�֧��һ����¼ 
	var vSupportQLogin = 0;
	var firstchart = urlparam.substr(0,1);

	if(firstchart!="&" && firstchart!="?")
		var url = "http://ui.ptlogin2.qq.com/cgi-bin/login" + "?" + urlparam;
	else if(firstchart!="&")
		var url = "http://ui.ptlogin2.qq.com/cgi-bin/login?1=1"+urlparam;
	else if(firstchart!="?")
		var url = "http://ui.ptlogin2.qq.com/cgi-bin/login"+urlparam;
	

	login_wnd = document.getElementById("login_div");

	if (login_wnd != null){
		login_wnd.style.visible = "hidden";	//�����أ������û��Ϳ�����ҳ��ĳߴ�仯��Ч��
		login_wnd.style.display = "block";	//��Ϊblock�� ����ҳ�治����������
		
		if (0 != vSupportQLogin)
		{
			url += ("&qlogin_jumpname=&qlogin_param=&qlogin_auto_login=0");
			//alert(url);
		}

		document.getElementById("login_frame").src = url; 		
	}
};


var ismaskflag =false;

/* �˳���¼*/
var systemlogout = function (reback_url){
	//�ɹ����غ���1
	if(typeof(reback_url)=="undefined" || reback_url==""){
		var reback_url			=	"";
	}

	if(ismaskflag){
		$.Tjs_ShowObject('login_div',false,'middle',true);
		//$.Tjs_canclemaskLayout('','#D9ECFF',80,'create_maskbutton');
	}
	$.Tjs_clearCookie("uin","","qq.com");
	$.Tjs_clearCookie("uin_cookie","","qq.com");
	$.Tjs_clearCookie("verifysession","","qq.com");
	$.Tjs_clearCookie("skey","","qq.com");
	$.Tjs_clearCookie("adid","","qq.com");
	$.Tjs_clearCookie("euin_cookie","","qq.com");
};



//��½����
var GlobalLoginTypeSet = 0; 
var ptlogin_init = function (TiTle,LoginOktoUrl,Windows_ThispageFun,FullUrl,Target,ismask,isclose){
	/*
	TiTle					��¼�����
	LoginOktoUrl			�ɹ��󷵻صģգң�
	Windows_ThispageFun		�ɹ���ִ�еĺ���
	FullUrl					�������գ����ʾ��¼ֱ�������ãգң̶�������Login.cgi
	ismask					�Ƿ���Ҫ���ڲ� true��ʾ��Ҫfalse��ʾ����Ҫ
	*/



	/* ��ʼ����¼��*/
	
	var w=$.Tjs_Fid('login_div');
	if($.Tjs_Fempty(w)){
		w=document.createElement('div');
		w.id='login_div';
		w.style.cssText = 'display:block;display:none;left: 0px; top: 0px; width:373px; height:280px; padding:0; margin:0px;';
		document.body.insertBefore(w, document.body.firstChild);
		w.innerHTML="<iframe name='login_frame' id='login_frame' frameborder='0' scrolling='auto' width='100%' height='100%' src=''></iframe>";
	}

	//�ɹ����أգң�
	if(typeof(LoginOktoUrl)=="undefined" || LoginOktoUrl==""){
		var LoginOktoUrl			=	"";
	}
	//�ɹ����غ���2
	if(typeof(FullUrl)=="undefined" || FullUrl==""){
		var FullUrl			=	"";
	}

  	//�ɹ�ִ�к�����
	if(typeof(Target)=="undefined" || Target==""){
		var Target			=	"self";
	}

  	//�ɹ�ִ�к�����
	if(typeof(Windows_ThispageFun)=="undefined" || Windows_ThispageFun==""){
		var Windows_ThispageFun			=	"";
	}
  	//���ڲ�ı�ʶ
	if(typeof(ismask)=="undefined" || ismask==""){
		var ismask			=	false;
	}
  	//�Ƿ�Ҫ�رմ��ڰ�ť
	if(typeof(isclose)=="undefined" || isclose==""){
		var isclose			=	0;
	}
	
	
	ismaskflag	=	ismask;
	if(ismaskflag){
		$.Tjs_ShowObject('login_div',true,'middle',true,0);
	}

	
	//��¼����
	if(typeof(TiTle)=="undefined" || TiTle==""){
		var title_txt			=	"&title=�������û���¼";
	}else{
		var title_txt			=	"&title="+TiTle;
	}
	var title_txt			=	"";

	
	if(GlobalLoginTypeSet == 0)
		var cgiurl = "http://pay.gongyi.qq.com/cgi-bin/Login";
	else
		var cgiurl = "http://pay.gongyi.qq.com/cgi-bin/NpoLogin";
	
	//alert(cgiurl);

	if(FullUrl=="")
		var s_url				=	"s_url="+escape(cgiurl+"?"+Math.random()+"&rebackurl="+escape(LoginOktoUrl)+"&rebackfun="+Windows_ThispageFun);
	else
		var s_url				=	"s_url="+escape(FullUrl);
	

	var	bgimage  ="";
	var bgcolor				=	"&bgcolor=F4F6FA";

	var uin					=	"&uin=";
	var reset_text			=	"&reset_text=%D6%D8%CC%EE";
	var f_url				=	"&f_url=loginerroralert";
	var low_login			=	"&low_login=0";
	var	hide_title_bar		=	"&hide_title_bar=0";
	var	hide_close_icon		=	"&hide_close_icon="+isclose;
	var	appid				=	"&appid=30000101";
	var	style				=	"&style=0";
	var bgcolor				=	"&bgcolor=0";
	var target				=	"&target="+Target;
	var hide_uin_tip		=	"&hide_uin_tip=0";	
	var qlogin_jumpname = "&qlogin_jumpname=GongYiPtLogin2&qlogin_param="+escape(Math.random()+"&rebackurl="+escape(LoginOktoUrl)+"&rebackfun="+Windows_ThispageFun)+"&qlogin_auto_login=0";
	if(GlobalLoginTypeSet == 1) qlogin_jumpname ="";


	openparam_info		=	s_url+bgimage+bgcolor+title_txt+uin+reset_text+f_url+low_login+hide_title_bar+hide_close_icon+appid+style+bgcolor+target+hide_uin_tip+qlogin_jumpname;
	//alert(openparam_info);
};












/* �����ղؼ�*/
var addBookmark = function (title,url) {
    if (window.sidebar) { 
        window.sidebar.addPanel(title, url,""); 
    } else if( document.all ) {
        window.external.AddFavorite( url, title);
    } else if( window.opera && window.print ) {
        return true;
    }
};







/*
 * �˵�д��ҳ�溯��
 @ SelectId			��ǰѡ�е�ҳ���ҳ��a---id
 @ PageRebackUrl	�˳��󷵻ص�ҳ��
 @ ShowInfo			�Ƿ���ʾ���ϽǸ�����Ϣ��
 @ IsLoading		�Ƿ�����������������������
*/
var g_donator_info	=Array();
var t_donator_info	=Array();
var total_time = 0;



var ptloginopenfun=function(npoflag){
	if(typeof npoflag =="undefined") npoflag = 0
	
	GlobalLoginTypeSet = npoflag;
	ptlogin_init('�û���¼',$.Tjs_GetThisPageUrl(),'','','',true,0);
	//alert(openparam_info);
	openLogin(openparam_info);
};


var ptlogoutopenfun=function(PageRebackUrl){
	//alert(PageRebackUrl); return false;
	if(typeof(PageRebackUrl)=="undefined" || PageRebackUrl==""){
		var PageRebackUrl = "";
	}

	$.Tjs_clearCookie("uin","","qq.com");
	$.Tjs_clearCookie("skey","","qq.com");
	$.Tjs_clearCookie("uin_cookie","","qq.com");
	$.Tjs_clearCookie("verifysession","","qq.com");
	$.Tjs_clearCookie("adid","","qq.com");
	$.Tjs_clearCookie("euin_cookie","","qq.com"); 
	$.Tjs_clearCookie("GY_G_DONATOR","","qq.com"); 
	$.Tjs_clearCookie("GY_qqnick","","qq.com"); 
	$.Tjs_clearCookie("GY_ThisDo_Url","","qq.com");
	$.Tjs_clearCookie("GY_Npoobject","","qq.com");

//	try{
//		var w=$.Tjs_Fid('loginout_div');
//		if($.Tjs_Fempty(w)){
//			w=document.createElement('div');
//			w.id='loginout_div';
//			w.style.cssText = 'display:block;display:none;left: 0px; top: 0px; width:3px; height:0px; padding:0; margin:0px;';
//			document.body.insertBefore(w, document.body.firstChild);
//			w.innerHTML="<iframe name='loginout_frame' id='loginout_frame' frameborder='0' scrolling='auto' width='0' height='0' src='http://npoapp.gongyi.qq.com/weblogin/ptlogout'></iframe>";
//		}else{
//			document.getElementById("loginout_frame").src="http://npoapp.gongyi.qq.com/logou/ptlogout";
//		}
//	}catch(e) {}
	


	if(PageRebackUrl=='') window.location.reload();
	else window.location = PageRebackUrl;
};



var IsLoginAndLogin=function(){
	if (!$.Tjs_getCookie("uin") && !$.Tjs_getCookie("skey")){
		ptlogin_init('�ٱ�ǰ���ȵ�¼',$.Tjs_GetThisPageUrl(),'','','',true,1);
		openLogin(openparam_info);
	}
};

var ShowHourPageHtml = function(OPbject,times){
	//HourArray
	if(typeof(times)=="undefined" || times==""){
		var times = "00:00";
	}

	for(var i=0;i<HourArray.length;i++){
		var newItem		=  document.createElement("OPTION") ;
		newItem.text	=  HourArray[i];
		//alert(HourArray[i]);
		newItem.value	=  HourArray[i];
		document.getElementById(OPbject).add(newItem);
	}


};








/*2010-12�İ����� npoϵͳ��¼��Ϣ��ʾ*/
/* ���Ͻǵ�¼�ʣ�*/
var Global_NpoObject  = null;
var _MenuShowRightUserInfoLoading_2011 =function (PageRebackUrl,IsLoading){
	if(typeof global_userinfoobject == "undefined" || IsLoading){
		$.getScript("http://npoapp.gongyi.qq.com/_GetUserInfo", function(){
			//alert(PageRebackUrl);
			_MenuShowNpoLoginInit(global_userinfoobject,PageRebackUrl);
		});
	}else{
		//alert(PageRebackUrl);
		_MenuShowNpoLoginInit(global_userinfoobject,PageRebackUrl);
	}
};

var _MenuShowNpoLoginInit = function(JsonoBject,PageRebackUrl){
		var Gongyi_Head_Set = "";
		if(JsonoBject.global_gongyiuserinfo== 0){
			Gongyi_Head_Set+="		<a href='javascript:ptloginopenfun(1)'>[���¼]</a>";
			
			//emilydeng(2011/6/29)
			//��ie6��PagaeLoadUserInfoDiv���벻�ԣ��ؼ�
			if ($.browser.msie&&($.browser.version == "version6.0"))
			{
				document.getElementById("PagaeLoadUserInfoDiv").innerHTML = Gongyi_Head_Set;
			}
			else
			{
				$("#PagaeLoadUserInfoDiv").html(Gongyi_Head_Set);
			}
			return  false;
		}
	
		var usermenustr = "";
		if(JsonoBject.usertyperesult == 0)
		{
			usermenustr = "<a href='http://gongyi.qq.com/mygongyi.htm' target='_blank'>��������</a>";
			//20110501 junhaiguo buglist25 ����3 ���Ʋ���Ҫ����
			Gongyi_Head_Set += "<a style=\"cursor:default;text-decoration:none\" title=\""+JsonoBject.jsonnick+"\">"+JsonoBject.jsonnick+"</a>"+usermenustr;
			//Gongyi_Head_Set += "<a href='http://gongyi.qq.com/mygongyi.htm' target='_blank' title='��������������'>"+JsonoBject.jsonnick+"</a>"+usermenustr;
		}
		else if(JsonoBject.usertyperesult == 1)
		{
			JsonoBject.nickAll		= $.Tjs_HtmlEncode(unescape(JsonoBject.nick));
			JsonoBject.registernameAll	= $.Tjs_HtmlEncode(unescape(JsonoBject.registername));

			JsonoBject.nick		=$.Tjs_HtmlEncode(unescape(JsonoBject.nick)).substr(0,15);
			JsonoBject.registername	=$.Tjs_HtmlEncode(unescape(JsonoBject.registername)).substr(0,15);

			usermenustr = "<a href='http://npoapp.gongyi.qq.com/_OrgCenter'>��������</a><a href='http://gongyi.qq.com/mygongyi.htm' target='_blank'>��������</a>";

			//20110501 junhaiguo buglist25 ����3 ���Ʋ���Ҫ����
			Gongyi_Head_Set += "<a style=\"cursor:default;text-decoration:none\" title=\""+JsonoBject.nickAll+"\">"+JsonoBject.nick+"</a>"+usermenustr;
			//Gongyi_Head_Set += "<a href='http://npoapp.gongyi.qq.com/_OrgCenter'  title='��������������'>"+JsonoBject.nick+"</a>"+usermenustr;
		}
		else if(JsonoBject.usertyperesult == 2)
		{
			JsonoBject.nickAll		= $.Tjs_HtmlEncode(unescape(JsonoBject.nick));
			JsonoBject.registernameAll	= $.Tjs_HtmlEncode(unescape(JsonoBject.registername));
			JsonoBject.nick		=$.Tjs_HtmlEncode(unescape(JsonoBject.nick)).substr(0,15);
			JsonoBject.registername	=$.Tjs_HtmlEncode(unescape(JsonoBject.registername)).substr(0,15);
			usermenustr = "<a href='http://npoapp.gongyi.qq.com/_OrgCenter'>��������</a><a href='http://gongyi.qq.com/mygongyi.htm' target='_blank'>��������</a>"

			//20110501 junhaiguo buglist25 ����3 ���Ʋ���Ҫ����
			Gongyi_Head_Set += "<a style=\"cursor:default;text-decoration:none\" title=\""+JsonoBject.nickAll+"\">"+JsonoBject.nick+"</a>"+usermenustr;
			//Gongyi_Head_Set += "<a href='http://npoapp.gongyi.qq.com/_OrgCenter'  title='��������������'>"+JsonoBject.nick+"</a>"+usermenustr;
		}
	
		Gongyi_Head_Set +="<a href='javascript:ptlogoutopenfun(\""+PageRebackUrl+"\")'>[�˳�]</a>";

		$("#PagaeLoadUserInfoDiv").html(Gongyi_Head_Set);
		return Gongyi_Head_Set;	

}







var PageLoadOrgInfoRender = function (uin,type){
	$.getScript("http://npoapp.gongyi.qq.com/getjsonforweb/getShortOrgJson/"+uin, function(){
		var orgLogoImg = org_info_short.LOGO_60;
		var orgTitle = org_info_short.NAME == "" ? "default title" : org_info_short.NAME;
	

		//modify by junhaiguo 2011.3.18 ����̬title��ͷ��������ת����ҳ

		if(type!=1)
		{	
			var url = "http://gongyi.qq.com/npo/customer.htm?uin="+uin;
			var orgTitle = "<a href="+url+"  style=\"color:#000000\" style=\"text-decoration:none\">"+orgTitle+"</a>";
			$("#PageLoadOrgInfoA").attr("href",url);
		}
		
		$("#PageLoadOrgInfoTitle").html(orgTitle);
		$("#PageLoadOrgInfoImage").attr("src",orgLogoImg);
		$("#PageLoadOrgInfoImage").attr("width",58);
		$("#PageLoadOrgInfoImage").attr("height",58);
		if($("#t_content"))
		{
			var T_Url = org_info_short.T_URL;
			if(T_Url=="" || T_Url=="undefined" || T_Url == null || typeof(T_Url=="undefined"))
			{
				var T_Src = "����֯��δ��д΢����ַ";
				$("#t_iframe").html(T_Src);	
				$("#t_href").html("&nbsp;");	
				$("#urltop").hide();	
				
			}
			else
			{
				var T_Name = T_Url.substr(T_Url.lastIndexOf("/")+1,T_Url.length-T_Url.lastIndexOf("/"));
				var T_Src = "http://radio.t.qq.com/open.php?type=2&value="+T_Name+"&freq=10&initNum=9&pickNum=10";
				$("#t_content").attr("src",T_Src);	
				var T_Home = "http://t.qq.com/"+T_Name;
				$("#t_home").attr("href",T_Home);	
			}
		}
	});
};



//add by niou for img begin
function   SetImgSize(pimg,iw,ih)   {                      
  var   img   =   new   Image();                           
  img.src = pimg.src;                                      
  var   w   =   iw;                                        
  var   h   =   ih;                                        
                                                           
 if(img.width>0 && img.height>0)                           
  {                                                        
  if(img.width>iw||img.height>ih)                          
  {                                                        
    if((iw   /   ih)   >   (img.width   /   img.height))   
    {                                                      
        h =  ih;                                           
        w   =   img.width   *   (ih   /   img.height);     
    }                                                      
    else                                                   
    {                                                      
        w   =   iw;                                        
        h   =   img.height   *   (iw   /   img.width);     
    }                                                      
   }                                                       
   else                                                    
   {                                                       
        w = img.width;                                     
        h = img.height;                                    
   }                                                       
 }                                                         
 else                                                      
 {                                                         
  w = iw;                                                  
  h = ih;                                                  
 }                                                         
                                                           
 pimg.width=w;                                             
 pimg.height=h;                                            
 pimg.style.display="";                                    
}    
//add by niou for img end


















/*  |xGv00|42eff00f11902a6df1498cb3c0e2c0fe */