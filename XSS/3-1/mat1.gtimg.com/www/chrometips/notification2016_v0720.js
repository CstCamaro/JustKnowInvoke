/**
* @�������������
* @author limeizhang#tencent.com 
* @time 2016-7-11
* @add UA
*/
window.FERD_UserData = function(res){
	if(res.code === 0){
		FERD_NavNotice.userStorage("true");
		news = res.data;
		FERD_NavNotice.checkPermission();
	}else if(res.code === 2){
		FERD_NavNotice.userStorage("false",new Date());
		//console.log("��������Ŀ���û���");
		return;
	}
};
window.FERD_NewsNotice = function(res){};

var FERD_NavNotice = {

	_this : this,
	news : {},
	noticeTitle : "��л���ģ�",
	noticeBody:"��Ѷ�����Ի��Ƽ�����  ����鿴",
	noticeIcon : "http://mat1.gtimg.com/news/lmz/navnotice/images/qqlogo.png",
	noticeUrl : "http://www.qq.com/chrometips/welcome.htm",
	notification : "",

	getScript : function(src, func){
		var script = document.createElement('script');
        script.async = "async";
        script.charset = "utf-8";
        script.src = src;
        if (func) {
          script.onload = func;
        }
        document.getElementsByTagName("head")[0].appendChild( script );
	},

	init : function(obj){
		var _this = this,
			_site = window.location.host.split(".qq.com")[0],
			ua = window.navigator.userAgent.toLowerCase();
		if(NavNoticeSiteName.indexOf(_site)<0){
			return;
		}
		if(ua.indexOf("chrome")<0||ua.indexOf('se 2.x') != -1||ua.indexOf('qqbrowser')!=-1||ua.indexOf('baidu')!=-1||ua.indexOf('greenbrowser')!=-1||ua.indexOf('worldchrome')!=-1||ua.indexOf('theworld')!=-1||ua.indexOf('aoyou')!=-1||ua.indexOf('360se')!=-1||ua.indexOf('360ee')!=-1){
			return;
		}

		if(_this.isSupport){
			_this.isUser();
		}else{
			//console.log("�����������֧������֪ͨ����ʹ��chrome����������ܸ�����Ȥ��");
		}
	},

	// �Ƿ�֧��NOTIFICATION
	isSupport : function(){
		return !!window.Notification;  
	},

	// ��¼�Ƿ�Ŀ���û�
	userStorage : function(status,date){
		// 7����Чʱ��
		localStorage["TECNENCT_FERD_USER"] = status;
		if(date){
			var time = date.getTime();
			localStorage["TECNENCT_FERD_USER_DATE"] = time;
		}
	},

	// boss
	beehive : function(dataType,sTargetUrl){
		var g_btrace_BOSS = new Image(1,1),
			url = window.location.href,
			pageType = "",
			a = document.cookie.match(new RegExp('(^|)pac_uid=([^;]*)(;|$)')),
			pacUID = (a == null ? "" : unescape(a[2]));
		if(url.indexOf('/nba/')>0){
			pageType = "sportsNBA";
		}else if (url.indexOf('/a/')>0){
			pageType = "sportsDetailPage";
		}else if (url == "http://sports.qq.com/") {
			pageType = "sportsPage";
		}else{
			pageType = "sportsOthers";
		}
		g_btrace_BOSS.src = "http://btrace.qq.com/kvcollect?BossId=3982&Pwd=1823624630&pageType="+pageType+"&pdtType=chromeNotification&dataTpye=&sLocalUrl="+escape(url)+"&sTargetUrl="+sTargetUrl+"&dataType="+dataType+"&pacUID="+pacUID+"&_dc=" + Math.random();
	},

	// �Ƿ���Ŀ���û�&��ȡ����
	isUser : function(){
		var _this = this,
			donext = false;

		if(localStorage["TECNENCT_FERD_USER"]=="false"){
			var time = new Date().getTime();
			var seperate = ((time - Number(localStorage["TECNENCT_FERD_USER_DATE"]))/86400000).toFixed(1);
			if(Number(seperate)>7){
				donext = true;
			}else{
				//console.log("��������Ŀ���û���");
				return;
			}
		}else{
			donext = true;
		}

		if(donext){
			var date = new Date();
			var day = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
			if(localStorage["TECNENCT_FERD_NOTICED"] == day){
				//console.log("�����Ѿ�֪ͨ���ˣ����ٴ���������");
			}else{
				_this.getScript("http://i.match.qq.com/notice/browser?action=get&ch=sports&callback=window.FERD_UserData");
			}
		}
	},

	// �ϱ�Ȩ��
	reportPermission : function(data){
		var _this = this;
		_this.getScript("http://i.match.qq.com/notice/browser?action=set&ch=sports&flag="+data+"&callback=window.FERD_NewsNotice");
	},

	// ��¼����֪ͨ״̬
	isNoticed : function(){
		var date = new Date();
		var day = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
		localStorage["TECNENCT_FERD_NOTICED"] = day;
	},

	// ���Ȩ��
	checkPermission : function(){
		var _this = this;
		if(window.Notification.permission=="granted"){
			_this.showNotification();
			_this.isNoticed();
		}else if(window.Notification.permission=="denied"){
			//console.log("���ܾ��������֪ͨ�����������п��������ܸ�����Ȥ��");
		}else if(window.Notification.permission=="default"){
			Notification.requestPermission(function(permission){
				if(permission === 'granted') {
					_this.showFirst();
					_this.reportPermission(1);
					_this.beehive("uYes");
					//console.log("�������������֪ͨ�����ܸ�����Ȥ��");
				}else if(permission === 'denied'){
					_this.reportPermission(0);
					_this.beehive("uNo");
					//console.log("��ѡ���˾ܾ������֪ͨ�����������п��������ܸ�����Ȥ��");
				}
			});
			_this.beehive("sQuery");
		}
	},

	// ��ʾ��ӭ��Ϣ
	showFirst : function(){
		var _this = this;
		FERD_NavNotice.notification = new Notification(_this.noticeTitle,{
			body : _this.noticeBody,
			icon : _this.noticeIcon,
			tag : 1,
			requireInteraction : true
		});
		FERD_NavNotice.notification.onclick=function(){
			window.open(_this.noticeUrl);
			this.close();
		};
		function addOnBeforeUnload(e) {
			FERD_NavNotice.notification.close();
		}
		if(window.attachEvent){
			window.attachEvent('onbeforeunload', addOnBeforeUnload);
		} else {
			window.addEventListener('beforeunload', addOnBeforeUnload, false);
		}
	},

	// ��ʾ���Ի�֪ͨ
	showNotification : function(){
		var _this = this;
		setTimeout(function(res){
	 		FERD_NavNotice.notification = new Notification(news.title,{
	 			icon : news.url_img,
				tag : 1,
				requireInteraction : true
	 		});
	 		FERD_NavNotice.notification.onclick=function(){
				_this.beehive("uClick",news.url);
	 			window.open(news.url);
				this.close();
	 		};
			function addOnBeforeUnload(e) {
				FERD_NavNotice.notification.close();
			}
			if(window.attachEvent){
				window.attachEvent('onbeforeunload', addOnBeforeUnload);
			} else {
				window.addEventListener('beforeunload', addOnBeforeUnload, false);
			}
			_this.beehive("nShow");
	 	}, 5000);
	}
};
FERD_NavNotice.init();/*  |xGv00|5ae7cc32b4068b439c2788c1d33a2947 */