/* 
 * Tencent.hunterguo
 * 2011-11-22
 */
 
Global_weiboObj = function(param)
{
	var weiboTextArea = param.weiboTextArea;
	var showWrap = param.showWrap;
	var weiboList = param.weiboList;
	var maxCount = (param.maxCount>0)?param.maxCount:140;
	var overLenAlert = (typeof(param.overLenAlert) != "undefined" && param.overLenAlert != null && param.overLenAlert != "")?param.overLenAlert:"��������̫����!";
	
	/* Public weibo content list*/
	this.GetWeiBoContent = function(type, value, freq, initNum, pickNum){
		if(!weiboList) return false;
		if(typeof type == "undefined") return false;
		if(typeof value == "undefined") return false;
		if(typeof freq == "undefined") freq = 5;
		if(typeof initNum == "undefined") initNum = 5;
		if(typeof pickNum == "undefined") pickNum = 10;	
		var GetUrl = "http://radio.t.qq.com/open.php?type="+type+"&value="+value+"&freq="+freq+"&initNum="+initNum+"&pickNum="+pickNum;	
		weiboList.attr('src',GetUrl);
	};
	
	/* Public ���û���*/
	this.weiboContentTitle = function(title)
	{
		weiboTextArea.val("#"+title+"#");
	}
	
	/*������ʾ*/
	weiboTextArea.keyup(
		function(){
			if(showWrap)
			{
				showWrap.html(clnTextCount(maxCount));
			}
			else
			{
				var sy = clnTextCount(maxCount);
				if(sy <= 0) alert(overLenAlert);
			}	
		}
	);
	
	weiboTextArea.focus(
		function(){
			$(this).addClass("focus");
		}
	)
	weiboTextArea.blur(function(){
			$(this).removeClass("focus");
		});
	
	/**
	 * Public
	 * ����΢��
	 * ����״̬��-1δ��½ -2δ��д���� -3�������� 1���ͳɹ�
	 */
	this.sendWeibo = function(content,uin,callback)
	{	//var returnCode2 = -3;
		if(uin==''||content=='') return false;
		var gy_token = setGyToken();
		var url='http://wgyapp.gongyi.qq.com/weibo/send?gy_key='+gy_token+'&desc='+encodeURIComponent(content)+'&uin='+uin+'&r='+Math.random();
		var returnCode = $.getScript(url,
		function(){
			if (typeof(rsObj) != "undefined" && rsObj != null && rsObj != "") {
				if(rsObj.code==-1){
					returnCode = rsObj.code;
					rsObj = null;
				}
				else if(rsObj.code==-2){
					returnCode = rsObj.code;
					rsObj = null;
				}
				else if(rsObj.code==0){
					var str=rsObj.msg;
					var rsStr=str.substr(0,3);
					/*success*/
					if(rsStr == "0,0"){
						rsObj = null;
						returnCode = 1;
					}
					else{
						ERROR_NET_EX = "�㲥���ɹ��������������������������������ԡ�";
						var rsArr=str.split(',');
						var errorMsg='�㲥���ɹ��������������������������������ԡ�';
						switch(rsArr[2]){
							case '3':errorMsg='����û�п�ͨ΢��<br /><a href="http://t.qq.com" target="_blank">���Ͽ�ͨ΢��</a>';break;
							case '13':errorMsg='�벻Ҫ�����㲥��ͬ���ݵ�΢��';break;
							case '4':errorMsg='�벻Ҫ�㲥��������΢��';break;
							case '5':errorMsg='��ֹ����';break;
							case '8':errorMsg='�㲥�����ݹ���';break;
							case '9':errorMsg='�벻Ҫ�㲥������Ϣ';break;
							case '10':errorMsg='���Ĺ㲥̫��';break;
							default:errorMsg='�㲥���ɹ��������������������������������ԡ�';
						}
						rsObj = null;
						returnCode = errorMsg;
					}
					
				}
				
				if(typeof(callback) == 'function')
				{
					callback(returnCode);
				}
				return false;
				
				
			}
		});
		return false;
	}
	
	/* Private ���������ı���ʣ������*/
	var clnTextCount = function()
	{
		var D = weiboTextArea.val();
		D1 = D;
		D = D.replace(/\s/ig,"");
		var C = maxCount - strlen(D);
		if (C <= 0) {
			weiboTextArea.val(getStrByLen(D1, maxCount));
			return "0";
		}else{
			return C;
		}
	}
	
	
	/* Private �����ַ�������*/
	var strlen = function(D) {
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
	var isChinese = function(D) {
		var C = /[u00-uFF]/ig;
		return ! C.test(D)
	}
	
	// Private ��ȡ����
	var getStrByLen = function(K, J) {
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
		return G
	}
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

}/*  |xGv00|504894db6acfa4f5d89b4bb61a98ba8e */