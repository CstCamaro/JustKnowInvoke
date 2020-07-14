// JavaScript Document  ΢������jquery��չ��
//var rsR = {"donatePer":null,"donateCount":null,"donated":null,"isDonate":0,"weiai_money":0,"yuejuan_info":0};
(function($) {     
	$.fn.wgy_donate = function(options) {    
		var defaults = {  
			//��������ʽ
			showWgyWrapId:options.layerId?options.layerId:'wgyLayer',  
			descId:options.descId?options.descId:'wgyDesc',
			background: '#FFF',
			//�������
			txtCount : 140 ,
			syId:'syWrap',
			btnId:options.btnId?options.btnId:'wgyBtn',
			countId:options.countId?options.countId:'wgySyCount'
		};  
	// Extend our default options with those provided.
	var user_uin=0;  
	var opts = $.extend(defaults, options);	
	
	if(opts.vd==0)
		var wgyDatas = smalldreamlist_v100_0;
	else if(opts.vd==1)
		var wgyDatas = smalldreamlist_v100_1;
	else if(opts.vd==2)
		var wgyDatas = smalldreamlist_v100_2;
	else if(opts.vd==3)
		var wgyDatas = smalldreamlist_v100_3;							
	else
		var wgyDatas = smalldreamlist_v100_1;	
	var wgyData;
	if(opts.index>=0)
		wgyData = wgyDatas[opts.index];
	else if(opts.wgy_id>0)
	{
		for(var kks in wgyDatas)
		{
			if(wgyDatas[kks].id==opts.wgy_id)
			{
					wgyData = wgyDatas[kks];
					break;
			}
		}
	}	
	
 	/**
	* ��ť����¼�,��ȡ�û���ʼ��������
	* ������
	*/
	//
	return this.bind('click',function(){
		//�û���½�ж�
		if(global_userinfoobject.uin <= 0)
		{
		//	$.cookie('loginBid',B);
			ptloginopenfun();
			return false;
		}
		user_uin = global_userinfoobject.uin;
		var gy_key = setGyToken();
		$.getScript("http://wgyapp.gongyi.qq.com/donate_v5/checkDonateTimes?gy_key="+gy_key+"&pid="+wgyData.id+"&r="+Math.random(),function(){
			if(typeof(rsObj)!='undefined' && rsObj!=null && typeof(rsObj.code)!='undefined' && rsObj.code==-1)
			{
				ptloginopenfun();
				return;
			}
			if(typeof(rsR) != "undefined" && rsR != null && rsR != "")
			{			
				if(rsR.isDonate!=1)
				{
					toSupport(1);
					return;
				}
				$("#"+opts.showWgyWrapId).remove();
				var wgyLayerWraps = $.fn.wgy_donate.getLayer(wgyData,rsR);
				$("body").append(wgyLayerWraps);
				$wgyWrap = $("#"+opts.showWgyWrapId);				//���������
				$wgyDesc = $("#"+opts.descId);						//ף��textarea����
				$wgyBtn = $("#"+opts.btnId);						//ף��botton	
				$syWrap = $("#"+opts.countId);							//ף��botton
	/*-�߼��ж���ʾ-----------------------------------------------------------------------------------------*/	
				
	/*-�߼��ж���ʾ-----------------------------------------------------------------------------------------*/
				
				
				//����������
				showBoxBg();
				//����������						
				showLayer($wgyWrap);
				//����ͳ��
				$wgyDesc.keyup(function(){
					//����ͳ��
					zfCln($wgyDesc,$syWrap);
				});
				
				//����¼�
				$wgyBtn.click(function(){
					//����ͳ��
					if(user_uin<=0)
					{
						if(typeof(getWgyUser) == 'function')
						{
							user_uin = getWgyUser();
						}else{
							return false;	
						}
						//return false;
					}
					if(user_uin<=0) return false;
					
					doWgy();
				});
				
			}
		});
				
	});
	
	
	
	/**
	* ����������
	*/
	function showLayer(obj) {  
		var xwidth = obj.width();
		var xheight = obj.height();
		var A = parseInt($(window).width()) - xwidth;
		var T = parseInt($(window).height()) - xheight;
		obj.css("position","absolute");
		//obj.css("position","fixed");
		obj.css("z-index",30);
		obj.css("left", (A/2) + "px");
		obj.css('top', parseInt($(document).scrollTop()+(T/2-50))+'px');
		//obj.css('top', parseInt(T/2-50)+'px');
		obj.find(".closet").click(function(){
			hideBoxBg();
			obj.hide();	
		});
		obj.show();
		return;
	};	
	
	
	/**
	* ��������ص�����
	*/
	function doWgy() {  
		var content =$wgyDesc.val();
		if(content==''||content.replace(' ','') == '')
		{
			alert("������д΢��ף��");
			$wgyDesc.focus();
			return false;
		}
		
		var isShare_val = $("#"+opts.showWgyWrapId+" input[name='isShare']:checked").val();
		if(typeof(isShare_val) != "undefined" && isShare_val != null && isShare_val==1)
		{
			var shareUrl = '&shareuin='+wgyData.uin+'&shareid='+wgyData.share_id;
		}else
		{
			var shareUrl = "";
		}
		
		//button ����--------start
		$wgyBtn.hide();
		$("#"+opts.showWgyWrapId+" .submitWrap").html("<div style=\"text-align:center;color:green;font-weight:bold;line-height:200%;font-size:14px;\">���ݼ�����....</div>");
		//-------------------end
		var gy_key = setGyToken();
		$.getScript('http://wgyapp.gongyi.qq.com/weibo/broadcastV5_1?gy_key='+gy_key+'&did='+wgyData.id+'&desc='+encodeURIComponent(content)+'&wid='+wgyData.weibo_id+'&uin='+wgyData.uin+'&ref=i'+shareUrl+'&r='+Math.random(),
			function(response,status){
				if (typeof(rsObj) != "undefined" && rsObj != null && rsObj != "") {
					if(rsObj.code==-1){
						ptloginopenfun();
						return false;
					}
					if(rsObj.code==-2){
						showAlerts('��ܰ��ʾ','������д΢��ף��',1);
						return false;
					}
				
					if(rsObj.code==0 || typeof(rsShareObj) != "undefined" || (typeof(rsWeiaiObj) != "undefined" && rsWeiaiObj.code==0))
					{
						//hideDonateLayer();
						//�ɹ�
						var resMsg = '<div class="contentsss"><p>�����ɹ�����л����֧�֣�</p><p>\"<span id="donateTipTitle"><a href="'+wgyData.url+'" target="_blank">'+wgyData.title+'</a></span></p><p>��л�������Ĳ��룬���ע��΢������Ľ�չ��</p><p>��ܰ��ʾ���¾��û�����΢����Ŀ���ж��⽱����<a href="http://gongyi.qq.com/loveplan/?ticket=20111101140626880039" hidefocus target="_blank"><span style="color:#0091d2">��ͨ�¾�&gt;&gt;</span></a></p></div>';
						showAlerts('֧��΢������',resMsg,1,460);
						if(typeof(flushAccount)!='undefined' && typeof(flushAccount)=='function') flushAccount();//��ʼ���û���Ϣ
						//rsObj = null;
						rsShareObj = null;
						
						if(rsObj.code==0){
							var str=rsObj.msg;
							if(str)
							{
								var rsStr=str.substr(0,3);
								if (rsStr == "0,0") {
									rsObj = null;
									$.getScript("http://t.qq.com/asyn/userAttrSave.php?t=116&v=1&cb=tFunc");
								}
							}
						}
						
						return false;	
					}
					
					//ʧ�ܴ���
					var rsArr=rsObj.msg.split(',');
					var ERROR_NET_EX = "�������ɹ��������������������������������ԡ�";
					var errorMsg='<div>'+ERROR_NET_EX+'</div>';
					switch(rsArr[2]){
						case '3':errorMsg='����û�п�ͨ΢��<br /><a href="http://t.qq.com" target="_blank">���Ͽ�ͨ΢��</a>';break;
						case '13':errorMsg='�벻Ҫ�����㲥��ͬ���ݵ�΢��';break;
						case '4':errorMsg='�벻Ҫ�㲥��������΢��';break;
						case '5':errorMsg='��ֹ����';break;
						case '8':errorMsg='�㲥�����ݹ���';break;
						case '9':errorMsg='�벻Ҫ�㲥������Ϣ';break;
						case '10':errorMsg='���Ĺ㲥̫��';break;
						default:errorMsg='�������ɹ��������������������������������ԡ�';
					}
					showAlerts('������ʾ',errorMsg,1);
					rsObj = null;
					return false;
				}
				showAlerts('������ʾ','�������ɹ��������������������������������ԡ�',1);
			}
		);
		
		
		
	};
	
	/**
	* ���2�κ����֧��
	*/
	function toSupport(mtype){
		if(user_uin<=0)
		{
			if(typeof(getWgyUser) == 'function')
			{
				user_uin = getWgyUser();
			}else{
				return false;	
			}
		}
		if(user_uin<=0) return false;
		var layerWrap;
		if(mtype==1)
			layerWrap = $.fn.wgy_donate.getSupportLayer();
		else if(mtype==2)
			layerWrap = $.fn.wgy_donate.getOverLayer();
		showAlerts('֧��΢������',layerWrap,0,470);
		$("#pt_broadcastBtn").click(function(){
			var content = $("#plBroadcastWgyDesc").val();
			if(content==''||content.replace(' ','') == '')
			{
				alert("������д΢��ף��");
				$("#plBroadcastWgyDesc").focus();
				return false;
			}	
			var shareUrl = '&shareuin='+wgyData.uin+'&shareid='+wgyData.share_id;
			var gy_key = setGyToken();
			$.getScript('http://wgyapp.gongyi.qq.com/weibo/ptbroadcast?gy_key='+gy_key+'&desc='+encodeURIComponent(content)+'&wid='+wgyData.weibo_id+'&uin='+wgyData.uin+'&ref=i'+shareUrl+'&r='+Math.random(),
			function(){
				if (typeof(rsObj) != "undefined" && rsObj != null && rsObj != "") {
					if(rsObj.code==-1){
						ptloginopenfun();
						return false;
					}
					if(rsObj.code==-2){
						showAlerts('��ܰ��ʾ','<div>������д΢��ף��</div>',1);
						return false;
					}
					/*success*/
					if(rsObj.code==0 || rsShareObj.code==0 || rsWeiaiObj.code==0)
					{
						//hideBroadcastLayer();
						rsShareObj = null;
						showAlerts("��ܰ��ʾ","�ջ��Ͳ�������ǧ���л����֧�֣�",1);	
						return false;	
					}
					
					
					var rsArr=rsObj.msg.split(',');
					var ERROR_NET_EX = "ת�����ɹ��������������������������������ԡ�";
					var errorMsg='<div>'+ERROR_NET_EX+'</div>';
					switch(rsArr[2]){
						case '3':errorMsg='����û�п�ͨ΢��<br /><a href="http://t.qq.com" target="_blank">���Ͽ�ͨ΢��</a>';break;
						case '13':errorMsg='�벻Ҫ�����㲥��ͬ���ݵ�΢��';break;
						case '4':errorMsg='�벻Ҫ�㲥��������΢��';break;
						case '5':errorMsg='��ֹ����';break;
						case '8':errorMsg='�㲥�����ݹ���';break;
						case '9':errorMsg='�벻Ҫ�㲥������Ϣ';break;
						case '10':errorMsg='���Ĺ㲥̫��';break;
						default:errorMsg='ת�����ɹ��������������������������������ԡ�';
					}
					showAlerts('������ʾ',errorMsg,1);
					rsObj = null;
					return false
				}
				
			});
			
			
			
			
		});
		$("#plBroadcastWgyDesc").keyup(function(){
			//����ͳ��
			zfCln($("#plBroadcastWgyDesc"),$("#ptSupportCount"));
		});
	}
	
	//����������
	function showBoxBg()
	{
		hideBoxBg();
		$("body").append("<div id=\"floatBoxBg\" style=\"position:absolute;\"></div>");
		$("#floatBoxBg").attr('style','background:'+opts.background+';filter:alpha(opacity=80);opacity:0.8;position:absolute;top:0;left:0;');
		$("#floatBoxBg").css({display:"block",width:$(document).width(),height:$(document).height()});
	}
	
	//���ر�����
	function hideBoxBg()
	{
		$("#floatBoxBg").remove();
	}
	
	//����Tips
	function hideTips(tipsId)
	{
		hideBoxBg();
		//var tipsId = eval("tipsId"+tipsId);
		$("#"+tipsId).hide();
	}
	
	//������
	function showAlerts(title,msg,isclose,width_v)
	{
		$("#alertsWrap").remove();
		var closeBtn = "";
		if(isclose)
		{
			closeBtn = "<a class=\"closet\" style=\"background:url(http://mat1.gtimg.com/gongyi/2011star/closeTips.jpg) no-repeat;display:block;height:29px;width:65px;margin:0 auto;\"></a>";	
		}
		if(!width_v) width_v=300;
		$("body").append("<div id=\"alertsWrap\" style=\"color:#000;position:absolute;display:none;border:2px #d7d7d7 solid; background:#FFF;padding-bottom:10px;width:"+width_v+"px;\"><div style=\"height:32px; overflow:hidden; background:#F1F1F1; clear:both;\"><h4 class=\"titles\" style=\"list-style:none; padding:0; margin:0; color:#3F3F3F; font-weight:100; font-size:12px; float:left; width:180px; line-height:32px; padding-left:13px;\">Loading...</h4><span class=\"closet\" style=\"float:right; background:url(http://mat1.gtimg.com/gongyi/wgy/closeTips.png) no-repeat; width:11px; padding:3px; cursor:pointer; display:block; text-indent:-9999px; margin-top:10px;\" title=\"�ر�\">cloase</span></div><div class=\"contents\" style=\"padding:10px; padding-top:10px; line-height:180%;clear:both;overflow:hidden;\"></div>"+closeBtn+"</div>");
		showBoxBg();
		$("#alertsWrap .titles").html(title);
		if(typeof(msg) != 'undefined' && msg!='' && msg!=null) $("#alertsWrap .contents").html(msg);
		showLayer($("#alertsWrap"));
		$("#"+opts.showWgyWrapId).hide();
		return;
	}
	
	
		  
	  
	  
	 //˽�к���������ʣ���ַ�
	function zfCln(txtarea,syWrap)
	{
		var maxCount = opts.txtCount;
		var sy;
		var content = txtarea.val();
		sy = clnTextCount(txtarea.val(),maxCount);
		if(sy<0)
		{
			txtarea.val(getStrByLen(content,maxCount));
			alert('�����涨�ַ���');//$('p#boradcast_tips').html('���ݳ�������...');
			//is_send = false;
			sy = "0";	
		}
		if(syWrap) syWrap.html(sy);	
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
	
	  
	 	function checkMoneyFormat(value)
		{
			var preg = /^[0-9]{1,}(\.[0-9]{1}0{0,1}){0,1}$/g;
			if(preg.test(value))
			{
				return true;
			}else{
				alert("΢�������ʽ����");
				$("#"+opts.showWgyWrapId+" #donate_weiai_Money").focus();
				return false;
			}
		} 
	
		 
	};//END plugin   

	//����������
	//$.fn.wgy_donate.
	
	
	
	//״̬����
	/*$.fn.wgy_donate.showStatus = function() {  
		alert('����״̬');
	};
	*/
	
	

})(jQuery);  

function tFunc(){return;}



$.fn.wgy_donate.getLayer = function(wgyData,rsR){
		var wgyLayerWrap = '<div id="wgyLayer" class="donateV3Tips" style="display:none; width:500px; color:#000;position:absolute; margin-top:75px; left:0;z-index:6; border:2px #d7d7d7 solid; background:#FFF; padding-bottom:20px;">\
 	<div class="titleWrap" style="height:32px; overflow:hidden; background:#F1F1F1; clear:both;"><h4 class="titleV3" style="list-style:none; padding:0; margin:0; color:#3F3F3F; font-weight:100; font-size:12px; float:left; width:300px; line-height:32px; padding-left:13px;">֧��΢������</h4><span class="closeTips closet" title="�ر�" style="float:right; background:url(http://mat1.gtimg.com/gongyi/wgy/closeTips.png) no-repeat; width:11px; padding:3px; cursor:pointer; display:block; text-indent:-9999px; margin-top:10px;">cloase</span></div>\
 	<table border="0" cellpadding="0" cellspacing="0" style="margin:0 4px;" style="margin-top:10px;">\
        <tr><th class="titleL" style="width:88px; font-weight:100; text-align:right;line-height:38px;">֧����Ŀ��</th><td id="donateLayerTitle"><a href="'+wgyData.url+'" target="_blank">'+wgyData.title+'</a></td></tr>\
        <tr>\
        	<th class="titleL" style=" font-weight:100; text-align:right;">�ҵ�ף����</th><td>\
            <textarea id="wgyDesc" name="donateLayerDesc" style="width:368px; height:80px;"></textarea><br />\
		<div style="margin-top:5px;font-weight:500;"><span class="tips">��<span id="textCount" style="display:none;"></span>��������<span id="wgySyCount">140</span>���֣�����ף����ͬ����΢���Ϳռ䣩</span></div>\
		            </td>\
        </tr>\
        <tr><td colspan="2" class="notifyT" style="text-align:center;display:none;">С��ʾ��֧�ֳɹ��󣬼��ɵ���΢������ͼ���QQ����ͼ��</td></tr>\
        <tr style="display:none;"><td colspan="2" class="notifyT" style="text-align:center;">&nbsp;&nbsp;�����ռ䣺<input type="checkbox" name="isShare" value="1" checked="checked" /></td></tr>\
    </table>\
    <div class="pp1 error" style="display:none" id="donateLayerTip"><p class="pp1 x"></p></div>\
	<div class="submitWrap"><a class="submit_btn" id="wgyBtn" style="display:block;width:86px;height:40px; overflow:hidden; background:url(http://mat1.gtimg.com/gongyi/wgy/btn.v3.png) no-repeat -212px -175px; margin:0 auto;"></a></div>\
 </div>';

	return wgyLayerWrap;
	
	}
	
$.fn.wgy_donate.getSupportLayer = function(){	
	return '<div style="padding:0px;"><h4 style="font-size:12px;margin:0;padding:0;font-weight:100;padding-bottom:8px;">����Ŀ��������֧���ˣ��������Լ�������ף��֧��΢�����룬��л����֧��</h4><div><textarea id="plBroadcastWgyDesc" name="plBroadcastWgyDesc" style="width:440px;overflow-y:auto;"></textarea><div style="margin-top:5px;font-weight:500;color:#999;"><span>&nbsp;����������<span id="ptSupportCount">140</span>���֣�����ף����ͬ����΢���Ϳռ䣩</span></div></div><div class="submitWrap" style="clear:both;"><a class="submit_btn" style="display:block;width:86px;height:40px; overflow:hidden; background:url(http://mat1.gtimg.com/gongyi/wgy/btn.v3.png) no-repeat -212px -175px; margin:0 auto;" id="pt_broadcastBtn"></a></div></div>';
	}
		
$.fn.wgy_donate.getOverLayer = function(){	
	return '<div style="padding:0px;"><h4 style="font-size:12px;margin:0;padding:0;font-weight:100;padding-bottom:8px;">��л�������Ĳ��룬��Ȼ����΢�������Ѿ����������������Լ���֧��΢�����룬������ף����������˴������ģ��ٴθ�л��</h4><div><textarea id="plBroadcastWgyDesc" name="plBroadcastWgyDesc" style="width:440px;overflow-y:auto;"></textarea><div style="margin-top:5px;font-weight:500;"><span>&nbsp;����������<span id="ptSupportCount">140</span>���֣�����ף����ͬ����΢���Ϳռ䣩</span></div></div><div class="submitWrap" style="clear:both;"><a class="submit_btn" style="display:block;width:86px;height:40px; overflow:hidden; background:url(http://mat1.gtimg.com/gongyi/wgy/btn.v3.png) no-repeat -212px -175px; margin:0 auto;" id="pt_broadcastBtn"></a></div></div>';
	}	
	
function setGyToken()
{
	var str = getCookie_h('skey'),hash = 5381;
	for(var i = 0, len = str.length; i < len; ++i)
	{
		hash += (hash << 5) + str.charAt(i).charCodeAt();
	}
	return hash & 0x7fffffff;
}
function getCookie_h(name)//ȡcookies����        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;

}	
	/*  |xGv00|903ee3ace397b2b93f81b7217245617d */