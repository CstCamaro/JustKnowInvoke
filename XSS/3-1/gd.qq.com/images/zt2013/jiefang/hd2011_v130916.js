/*
hdPic:������ͼר�ýű�
@�汾:hd2011_v2.7.2
@����:tomiezhang#tencent.com
@ʱ��:2011-3-18
@�¸ҵ��ˣ���ϲ����뵽���ص�bug���ã�
*/

/*json�ļ���ʼ*/
JSON=new function(){this.decode=function(){var filter,result,self,tmp;if($$("toString")){switch(arguments.length){case 2:self=arguments[0];filter=arguments[1];break;case 1:if($[typeof arguments[0]](arguments[0])===Function){self=this;filter=arguments[0]}else self=arguments[0];break;default:self=this;break};if(rc.test(self)){try{result=e("(".concat(self,")"));if(filter&&result!==null&&(tmp=$[typeof result](result))&&(tmp===Array||tmp===Object)){for(self in result)result[self]=v(self,result)?filter(self,result[self]):result[self]}}catch(z){}}else{throw new JSONError("bad data");}};return result};this.encode=function(){var self=arguments.length?arguments[0]:this,result,tmp;if(self===null)result="null";else if(self!==undefined&&(tmp=$[typeof self](self))){switch(tmp){case Array:result=[];for(var i=0,j=0,k=self.length;j<k;j++){if(self[j]!==undefined&&(tmp=JSON.encode(self[j])))result[i++]=tmp};result="[".concat(result.join(","),"]");break;case Boolean:result=String(self);break;case Date:result='"'.concat(self.getFullYear(),'-',d(self.getMonth()+1),'-',d(self.getDate()),'T',d(self.getHours()),':',d(self.getMinutes()),':',d(self.getSeconds()),'"');break;case Function:break;case Number:result=isFinite(self)?String(self):"null";break;case String:result='"'.concat(self.replace(rs,s).replace(ru,u),'"');break;default:var i=0,key;result=[];for(key in self){if(self[key]!==undefined&&(tmp=JSON.encode(self[key])))result[i++]='"'.concat(key.replace(rs,s).replace(ru,u),'":',tmp)};result="{".concat(result.join(","),"}");break}};return result};this.toDate=function(){var self=arguments.length?arguments[0]:this,result;if(rd.test(self)){result=new Date;result.setHours(i(self,11,2));result.setMinutes(i(self,14,2));result.setSeconds(i(self,17,2));result.setMonth(i(self,5,2)-1);result.setDate(i(self,8,2));result.setFullYear(i(self,0,4))}else if(rt.test(self))result=new Date(self*1000);return result};var c={"\b":"b","\t":"t","\n":"n","\f":"f","\r":"r",'"':'"',"\\":"\\","/":"/"},d=function(n){return n<10?"0".concat(n):n},e=function(c,f,e){e=eval;delete eval;if(typeof eval==="undefined")eval=e;f=eval(""+c);eval=e;return f},i=function(e,p,l){return 1*e.substr(p,l)},p=["","000","00","0",""],rc=null,rd=/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$/,rs=/(\x5c|\x2F|\x22|[\x0c-\x0d]|[\x08-\x0a])/g,rt=/^([0-9]+|[0-9]+[,\.][0-9]{1,3})$/,ru=/([\x00-\x07]|\x0b|[\x0e-\x1f])/g,s=function(i,d){return"\\".concat(c[d])},u=function(i,d){var n=d.charCodeAt(0).toString(16);return"\\u".concat(p[n.length],n)},v=function(k,v){return $[typeof result](result)!==Function&&(v.hasOwnProperty?v.hasOwnProperty(k):v.constructor.prototype[k]!==v[k])},$={"boolean":function(){return Boolean},"function":function(){return Function},"number":function(){return Number},"object":function(o){return o instanceof o.constructor?o.constructor:null},"string":function(){return String},"undefined":function(){return null}},$$=function(m){function $(c,t){t=c[m];delete c[m];try{e(c)}catch(z){c[m]=t;return 1}};return $(Array)&&$(Object)};try{rc=new RegExp('^("(\\\\.|[^"\\\\\\n\\r])*?"|[,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t])+?$')}catch(z){rc=/^(true|false|null|\[.*\]|\{.*\}|".*"|\d+|\d+\.\d+)$/}};

/*json�ļ�����*/
	var indexPic = 0;
	var loadingProcess= {//ȫ��������
		isJsReady : false,
		isSwfReady : false,
		divName : 'fullSwf',
		swfUrl : '//mat1.gtimg.com/joke/swfflash/picViewsFullScreenv1.0.0.1.0.swf',
		sitePicUrl : '#',
		lastUrl : '#',
		datas : null,
		flashNub:0,
		isFlashReady: function() {
			loadingProcess.isSwfReady = true;
			return loadingProcess.isJsReady;
		},
		setPicHandler : function () {
			var numargs = arguments.length;
			if (typeof window.document.setSoScreen.loadFullScreen != 'undefined') {
				if (numargs >= 1) {
					indexPic = arguments[0];
				}
				window.document.setSoScreen.loadFullScreen(loadingProcess.datas, indexPic);
			} else {
				setTimeout("loadingProcess.setPicHandler()", 300);
			}
		},
		addSwfHandler : function () {
			var sofull = new SWFObject(loadingProcess.swfUrl, "setSoScreen", "48", "12", "9.0.28", "#000000"); 
			 sofull.addParam("allowNetworking", "all"); 
			 sofull.addParam("allowScriptAccess", "always"); 
			 sofull.addParam("allowFullScreen", "true"); 
			 sofull.addParam("wmode", "window"); 
			 sofull.addVariable("fristTips", "��һ��");
			 sofull.addVariable("lastTips", "���һ��");
			 sofull.addVariable("gotoUrl",loadingProcess.sitePicUrl);
			 sofull.addVariable("picUrl",loadingProcess.lastUrl);
			 sofull.write(loadingProcess.divName);
		},
		setTitle : function() {
			var title = document.title.replace(/#p.\d/i,"");
			document.title = title;
		},
		callByFullScreen : function (indexId, isExiting) {
			var deDatas = JSON.decode(loadingProcess.datas);
			hdPic.fn._showBig(deDatas,indexId);
		},
		setFullScreenDatas:function (data) {
			loadingProcess.datas = JSON.encode(data);
		},
		initSystems : function (){
			loadingProcess.addSwfHandler();
		}
	};
	var hdPic = window.hdPic = function(p){
		return hdPic.fn.init(p);
	};
	hdPic.fn=hdPic.prototype = {
			_tmpArray:[],
			_lastUrl:"",
			_lastTitle:"",
			_isgoOn:false,
			_coentArray:"",
			_coreurl:"//mat1.gtimg.com/www/core/core_v1.5.1.js",
			_pageNow:0,
			_isMove:false,
			_dragx:0,
			_isAuto:false,
			_autoTimer:null,
			_nowSrc:new Image(),
			_preloadN:new Image(),
			_preloadP:new Image(),
			_sourName:"",
			_sourUrl:"",
			_pubTime:"",
			_siteName:"",
			_siteLink:"",
			_isPic:true,
			_isCiment:false,
			_aid:0,
		    _siteEname:"news",
			_auth:"",
			_specificID:"",
			_record : false,
			_clickSum : 0,
			_tempTime : null,
			_isDoc : false,
			_isAD : false,
			_AD_id : '',
			_listLen : 10,
			_coreload:function(file,callback) {
			try {
				var script = document.createElement('script');
				script.src = file;
				script.type = "text/javascript";
				document.getElementsByTagName("head")[0].appendChild(script);
				if( script.addEventListener ) {
					script.addEventListener("load", callback, false);
				} else if(script.attachEvent) {
					script.attachEvent("onreadystatechange", function(){
                        if(script.readyState == 4
                            || script.readyState == 'complete'
                            || script.readyState == 'loaded') {
                            callback();
                        }
					});
				}
			} catch(e) {
				callback();
			}
		},
		_getReady:function(){//��ͼ�״�����ready����ʼ������������߶ȣ�ͼƬ�л�Ч����hoverЧ��
            $(".pageLeft-bg").show();
            $(".pageRight-bg").show();
            $(".pageLeft").height($("#Main-A").height());
            $(".pageLeft span").css("marginTop",parseInt(($("#Main-A").height()-25)/2));
            $(".pageRight").height($("#Main-A").height());
            $(".pageRight span").css("marginTop",parseInt(($("#Main-A").height()-25)/2));
            /*
            $(".pageLeft-bg").height($("#Main-A").height());
            $(".pageRight-bg").height($("#Main-A").height());
            $("#mouseOverleft").height($("#Main-A").height());
            $("#mouseOverleft").width(parseInt($("#Main-A").width()/2));
            $("#mouseOverright").height($("#Main-A").height());
            $("#mouseOverright").width(parseInt($("#Main-A").width()/2));

            $("#mouseOverleft").hover(function(){
                $(".pageLeft").fadeIn("fast");
                $(".pageLeft").attr("title","��������һ��ͼƬ��֧��'��'��ҳ");
            },function(){
                $(".pageLeft").fadeOut("fast");
                $(".pageLeft").attr("title","");
            });
            $("#mouseOverright").hover(function(){
                $(".pageRight").fadeIn("fast");
                $(".pageRight").attr("title","��������һ��ͼƬ��֧��'��'��ҳ");
            },function(){
                $(".pageRight").fadeOut("fast");
                $(".pageRight").attr("title","");
            });
            if($("#Main-D").css("display")=="block"){
                $("#Main-D").fadeTo('slow',1).fadeTo('slow',0.2).fadeTo('slow',1);
            }
            */
            $("#Main-C").fadeTo('slow',1).fadeTo('slow',0.2).fadeTo('slow',1);
		},
		nowSite : function(){
			var siteName = window.location.href, siteN=siteName.match(/http:\/\/([^\/]+)\//i)[1], nowSite=siteN.split(".")[0];
			return nowSite;
		},
		secondSite : function(){
			var siteName = window.location.href, siteN=siteName.match(/http:\/\/([^\/]+)\//i)[1], secondSite=siteN.split(".")[1];
			return secondSite;
		},
		_getLast:function(data){//ĩҳ�Ƽ�
			var siteName = window.location.href;
			var siteN=siteName.match(/http:\/\/([^\/]+)\//i)[1];
		},
		_showLast:function(data,siteN){
			this.AD = true;
			$("#end").css("left",parseInt(($("#Main-A").width()/2-$("#end").width()/2))+"px");
			$("#Main-A").height($("#Main-A").height());
			$("#end").animate({top:"114px"},"slow",function(){
						$(".pageLeft").height($("#Main-A").height());
						$(".pageLeft span").css("marginTop",parseInt(($("#Main-A").height()-100)/2));
						$(".pageLeft-bg").height($("#Main-A").height());
						$(".pageRight").height($("#Main-A").height());
						$(".pageRight span").css("marginTop",parseInt(($("#Main-A").height()-100)/2));
						$(".pageRight-bg").height($("#Main-A").height());
						$("#mouseOverleft").height($("#Main-A").height());
						$("#mouseOverright").height($("#Main-A").height());
			});
            $(".firstImg").html("<img src='"+data[0].smallpic+"' width=86 height=56/>");
            $("h2").html($("h1").html());
            $("#replayPic").bind("click",function(){
                hdPic.fn._hideLast();
                hdPic.fn._pageNow = 0;
                hdPic.fn._showBig(data,hdPic.fn._pageNow);
            });
            $("a.close").bind("click",function(){
                hdPic.fn._hideLast();
                hdPic.fn._showBig(data,hdPic.fn._pageNow);
            });
            $("#end .ft").append('<a href="http://news.qq.com/mobile/" target="_blank" class="appDownLoad" bosszone="gqAppDownLoad">�ֻ��ͻ��� ��ͼ������</a>');
            this._getThreepic();
            $(".buttonClik").attr("href",hdPic.fn._siteLink);
            if(hdPic.fn._isPic){
            $(".buttonClik").html("����"+hdPic.fn._siteName+"ͼƬ����");
            }else{
            $(".buttonClik").html("����"+hdPic.fn._siteName+"��ҳ");
            }
            if(siteN.split(".")[0] == "finance" || siteN.split(".")[0] == "kid"){
                    $("#lastAD").hide();
            }else{
                setTimeout(function(){//5s���жϹ����Ƿ����
                    $("#lastAD").hide();
                },5000);
            }
		},
		_hideLast:function(){//����ĩҳ�Ƽ�
			var _this = this;this._isAD = false;
			$("#end").animate({top:"-528px"},"slow",function(){
                $(".pageLeft").height($("#Main-A").height());
                $(".pageLeft span").css("marginTop",parseInt(($("#Main-A").height()-100)/2));
                $(".pageLeft-bg").height($("#Main-A").height());
                $(".pageRight").height($("#Main-A").height());
                $(".pageRight span").css("marginTop",parseInt(($("#Main-A").height()-100)/2));
                $(".pageRight-bg").height($("#Main-A").height());
                $("#mouseOverleft").height($("#Main-A").height());
                $("#mouseOverright").height($("#Main-A").height());
			});
		},
		_getThreepic:function(){//����ĩҳ�Ƽ����3��ͼ
			var tmp = "",newLength = 3;
			if(typeof lastPic_hd !=="undefined"){
				if (lastPic_hd.length == 3) {
					for (var i = 0; i < lastPic_hd.length; i++) {
						var title = lastPic_hd[i].Title;
						if(title.length>20){
							title = lastPic_hd[i].Title.substring(0,19)+"...";
						}
						tmp += '<li><div><a  bosszone="gqRe' + (i+1) + '" href="' + lastPic_hd[i].Url + '#pref=hdpicture" class="img"  target="_blank"><img src="' + lastPic_hd[i].ImgUrl + '" width="145" title="'+lastPic_hd[i].Title+'" /></a><a href="' + lastPic_hd[i].Url + '#pref=hdpicture" target="_blank" title="'+lastPic_hd[i].Title+'">' + title + '</a></div></li>';
					}
					$("#lastComend").html(tmp);
					$("#lastComend div:eq(0)").css("float","left");
					$("#lastComend div:eq(2)").css("float","right");
					return false;
				} else {
					if (lastPic_hd.length !== 0) {
						for (var i = 0; i < lastPic_hd.length; i++) {
							var title = lastPic_hd[i].Title;
							if(title.length>20){
								title = lastPic_hd[i].Title.substring(0,19)+"...";
							}
							tmp += '<li><div><a bosszone="gqRe' + (i+1)+ '" href="' + lastPic_hd[i].Url + '#pref=hdpicture" class="img"  target="_blank"><img src="' + lastPic_hd[i].ImgUrl + '" width="145" title="'+lastPic_hd[i].Title+'" /></a><a href="' + lastPic_hd[i].Url + '#pref=hdpicture" target="_blank" title="'+lastPic_hd[i].Title+'">' + title + '</a></div></li>';;
						}
					}
				    newLength = 3 - lastPic_hd.length;
			    }
				   $.ajax({
				   url: "/c/otherPic.js",  
				   type: "GET",   
				   beforeSend: function(x) {  
					   x.setRequestHeader("If-Modified-Since","0");
					   x.setRequestHeader("Charset", "GB2312");
					   x.setRequestHeader("Cache-Control","no-cache");
					},  
				   success: function() {  
					 var arrMe = eval("(" + arguments[0] + ")")[0].root;
						for (i = 0; i < newLength; i++) {
							var title = arrMe[i].article[1].title;
							if(title.length>20){
								title = arrMe[i].article[1].title.substring(0,19)+"...";
							}
							tmp += '<li><div><a bosszone="gqRe' + (i+1) + '" href="' + arrMe[i].article[3].url + '#pref=hdpicture" class="img" target="_blank"><img src="' + arrMe[i].article[4].rec_img + '" width="145" title="'+arrMe[i].article[1].title+'"/></a><a href="' + arrMe[i].article[3].url + '#pref=hdpicture" target="_blank" title="'+arrMe[i].article[1].title+'">' + title + '</a></div></li>';
						}
						$("#lastComend").html(tmp);
						$("#lastComend div:eq(0)").css("float","left");
						$("#lastComend div:eq(2)").css("float","right");
				   } 
			   }); 
			}else{
				 $.ajax({  
				   url: "/c/otherPic.js",  
				   type: "GET",   
				   beforeSend: function(x) {  
					   x.setRequestHeader("If-Modified-Since","0");
					   x.setRequestHeader("Charset", "GB2312");
					   x.setRequestHeader("Cache-Control","no-cache");
					},  
				   success: function() {  
					 var arrMe = eval("(" + arguments[0] + ")")[0].root;
						for (i = 0; i < newLength; i++) {
							var title = arrMe[i].article[1].title;
							if(title.length>20){
								title = arrMe[i].article[1].title.substring(0,19)+"...";
							}
							tmp += '<li><div><a bosszone="gqRe' + (i+1) + '" href="' + arrMe[i].article[3].url + '#pref=hdpicture" class="img" target="_blank"><img src="' + arrMe[i].article[4].rec_img + '" width="145" title="'+arrMe[i].article[1].title+'"/></a><a href="' + arrMe[i].article[3].url + '#pref=hdpicture" target="_blank" title="'+arrMe[i].article[1].title+'">' + title + '</a></div></li>';
						}
						$("#lastComend").html(tmp); 
						$("#lastComend div:eq(0)").css("float","left");
						$("#lastComend div:eq(2)").css("float","right");
				   } 
			   });
			}
		},
		_clickleft:function(data){//��ǰ��
			if(hdPic.fn._pageNow>0){
				hdPic.fn._pageNow--;
				hdPic.fn._showBig(data,hdPic.fn._pageNow);
			}else{
				hdPic.fn._pageNow = 0;
				return;
			}
		},
		_clickright:function(data){//����
			if(hdPic.fn._pageNow<data.length-1){
				this._isAD = false;
				hdPic.fn._pageNow++;
				hdPic.fn._showBig(data,hdPic.fn._pageNow);
				
				if(hdPic.fn._pageNow>=17){
					tubdTips.showInfo();
				}
				
			}else{
				var left1 = 100*(hdPic.fn._tmpArray.length - 10), left2 = parseInt($("#Smailllist").css('left'));
				//alert(left1+':'+left2);
				if( (left1+left2) < 10 && !this._isAD) { this._getLast(data);this._isAD = true;}
			}
		},
		_bindClick:function(data){//Ϊ���ְ�ť���¼�����ק�������ݼ���ҳ���ʼ����
			var _this = this;
			$("#Smailllist li").each(function(i){
				$(this).click(function(){
					hdPic.fn._stopAuto();
					hdPic.fn._showBig(data,i);
				})
			});
			_calTime = function (){

				var curTime = (new Date()).getTime(), oldTime = _this._tempTime || curTime;
				if((curTime - oldTime) < 200) { _this._clickSum++ }
				else { _this._clickSum = 0 }
				_this._tempTime = curTime;
			};
			$("#mouseOverright").bind('click',function(){
				_calTime();
				hdPic.fn._stopAuto();
				hdPic.fn._clickright(data);				
			});
			$("#goright").bind('click',function(){
				_calTime();
				hdPic.fn._stopAuto();
				hdPic.fn._clickright(data);
			});
			$("#mouseOverleft").bind('click',function(){
				_calTime();
				hdPic.fn._stopAuto();
				hdPic.fn._clickleft(data);
			});
			$("#goleft").bind('click',function(){
				_calTime();
				hdPic.fn._stopAuto();
				hdPic.fn._clickleft(data);	
			});
			//��ק���
			if(hdPic.fn._tmpArray.length>_this._listLen){
				$(".scrollButton").bind("selectstart",function(){return false;})
				$(".scrollButton").click(function(){}).mousedown(function(e){
						_this._isDoc = true;
						hdPic.fn._stopAuto();
					  //���ò���Χ
					  if($(".scrollButton").setCapture){
						  $(".scrollButton").setCapture();
					  }else if(window.captureEvents){
						  window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
					  }
					hdPic.fn._isMove = true;
					hdPic.fn._dragx = e.pageX-parseInt($(".scrollButton").css("left"));
					$(".scrollButton").fadeTo(20, 0.5);
					$("a.mask").hide();
				});
				 $(document).mousemove(function(e){
					if(hdPic.fn._isMove){
						var x=Math.max(0, Math.min(e.pageX-hdPic.fn._dragx,_this._listLen*100));
						$(".scrollButton").css({left:x});
						hdPic.fn._dragmov();
					}
				 }).mouseup(function(){
					hdPic.fn._isMove=false;
					//ȡ������Χ
					 if($(".scrollButton").releaseCapture){
						 $(".scrollButton").releaseCapture();
					   }else if(window.captureEvents){
						  window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
					  }
					$(".scrollButton").fadeTo("fast", 1);
					if(parseInt($("#Smailllist").css("left"))%100!==0 && _this._isDoc){
						var argleft = parseInt($("#Smailllist").css("left"));
						$("#Smailllist").animate({left:argleft+(Math.abs(parseInt($("#Smailllist").css("left"))%100))+"px"},"fast");
					};
					_this._isDoc = false;
				 })
			};
			//�Զ�����
			$(".play").click(function(){
				if(!hdPic.fn._isAuto){
					hdPic.fn._autoplay(data);
				}else{
					hdPic.fn._stopAuto();
				}
			});
			//��ݼ�
			$(document).bind("keydown",function(e){
				e = window.event || e;
				hdPic.fn._stopAuto();
				e.keyCode == 37 && hdPic.fn._clickleft(data);
				e.keyCode == 39 && hdPic.fn._clickright(data);
			});
			//����
            var scrollPos;
            if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
                scrollPos = document.documentElement;
            }
            else if (typeof document.body != 'undefined') {
                scrollPos = document.body;
            }
            var _topnav = $("#toolBar").offset().top;
            $(scrollPos).animate({scrollTop:_topnav - 10}, 1000);
		},
		_stopAuto:function(){//ֹͣ�Զ�����
			$(".play").html("�õƲ���");
			$(".play").removeClass("stop");
			hdPic.fn._isAuto = false;
			window.clearInterval(hdPic.fn._autoTimer);
		},
		_autoplay:function(data){//�Զ�����
			$(".play").html("ֹͣ����");
			$(".play").addClass("stop");
			hdPic.fn._isAuto = true;
				this._autoTimer = window.setInterval(function(){
					if(hdPic.fn._pageNow<data.length-1){
						hdPic.fn._pageNow++;
						hdPic.fn._showBig(data,hdPic.fn._pageNow);
					}else{
						hdPic.fn._stopAuto();
						hdPic.fn._getLast(data);
					}
				},5000)
		},
		_dragmov:function(){//��ק����ú���
			 var a = parseInt(100 * (parseInt($(".scrollButton").css("left"))/(this._listLen*100))*(this._tmpArray.length - this._listLen));
			 $("#Smailllist").css({left:-a+"px"});
		},
		_replaceTitle:function(){//��������bug
			var title = document.title.replace(/#p.\d/i,"");
			document.title = title;
		},
		_showtit:function(n){//����ͼƬͼע��ʾ
            var _len = hdPic.fn._tmpArray.length;
			var sours = hdPic.fn._sourUrl!==""?"<a href='"+hdPic.fn._sourUrl+"' target='_blank'>"+hdPic.fn._sourName+"</a>":"<span>"+hdPic.fn._sourName+"</span>";
			var zuozhe = hdPic.fn._auth!==""?"<span style='padding-left:13px;padding-right:0px;'>"+hdPic.fn._auth+"</span>":"";
            var number = '<div class="number"><span class="cur">'+ (n+1) +'</span><span class="count">'+ _len +'</span></div>'
			if(this._tmpArray[n].showtit==""){
				$("#Main-B").html(number+'<div class="TimeInfo"><span>'+hdPic.fn._pubTime+'</span>'+sours+''+zuozhe+'</div>');//ͼעװ��
			}else{
				$("#Main-B").html(number+'<P>'+this._tmpArray[n].showtit+'</p><div class="TimeInfo"><span>'+hdPic.fn._pubTime+'</span>'+sours+''+zuozhe+'</div>');//ͼעװ��
			}
			$("#Main-B").fadeIn("slow");
			loadingProcess.setPicHandler(n);
		},
		_creatUrl:function(n){//������ͼ���url��ʶ
			var _org = /\#p\=/i.test(window.location.href);
			if(!_org){
				window.location.href = window.location.href+"#p=1";
			}else{
				window.location.href = window.location.href.split("#p=")[0] + "#p="+parseInt(n+1);
			}
		},
		_getUrl:function(){//�����ͼurl��ʶ
			var str = window.location.href.toString(),pos = str.indexOf("#p=");
			var nub = 1;
			if(pos!==-1){
                nub=str.match(/\#p\=(\d{1,})/i)[1];
            }
			return nub;
		},
		_Pload:function(data,n){//Ԥ����ǰ��
			if(data.length>3){//����3�� ��Ԥ����
				if (n != Number(data.length - 1)) {
					this._preloadN.src = data[n + 1].bigpic
				}
			}
		},
		_showBig:function(data,n){//��ʾ��ͼ����ʾ�ɹ�����������ֵ��Ӧ��ͼע��url����ͼ��ǰ����ֵ��д��Сͼλ�á�ͳ��
			indexPic = n;
			$("#orgPic").attr("href",data[n].bigpic);
			//$("#PicSrc").attr("src","//mat1.gtimg.com/www/hd2011/ajax-loader.gif");
			this._sharwb(data[n].bigpic);
			hdPic.fn._Pload(data,n);
			this._isAD && hdPic.fn._hideLast();
			var img = new Image();
			$("#PicSrc").load(function(){
				img.src  = data[n].bigpic;
				hdPic.fn._replaceTitle();
				$(this).height()>600?$("#Main-A").height($(this).height()):$("#Main-A").height(600);
				$(this).css("margin-top",parseInt($("#Main-A").height()-$(this).height())/2+"px");
			}, function(){
				w = img.width, h = img.height;
				if(img.complete){
					if(w>1000) w = 1000;
				}
				img.onerror = function(){
					img = img.onload = img.onerror = null;
				};
				
				img.onload = function(){
					w = img.width;
					h = img.height;
					if(w>1000) w = 1000;
					img = img.onload = img.onerror = null;
				};
				$("#PicSrc").css('width', w);
			});
			$("#PicSrc").fadeTo("fast", 0, function(){
					hdPic.fn._showSmall(n);
					hdPic.fn._showtit(n);
					hdPic.fn._countPV(parseInt(n+1));//ͳ��PGV
					$("#PicSrc").attr("src",data[n].bigpic);
					$("#PicSrc").fadeTo("fast",1);
			 });
			 hdPic.fn._pageNow = n;
		},
		_autoSca:function($this,src){
			var img = new Image();
			img.src = src;
			if (img.width > 0 && img.height > 0) {//������0
				if(img.width>980) {
					$this.width(980);
				}
			}
		},
		_showSmall:function(n){//Сͼ�ƶ��л��߼�
		    var _this = this,
                _len = hdPic.fn._tmpArray.length;
            var perw = 100;
			$("a.mask").show();
			if(_len <= this._listLen){
				$("a.mask").animate({left: (perw*n)+2+"px"},"slow");
				return false;
			}
			var _left,
                _latsindex=this._listLen,
                _n = Math.floor(this._listLen/2);

			if(n>=_n && n<_len-_n){//����3С�ڵ���3
				setTimeout(function(){
                    if(_this._clickSum > 1) {
                        $("#Smailllist").css({left: -perw*(n-_n)+"px"});
                    }else{
                        $("#Smailllist").stop(true, true).animate({left:-perw*(n-_n)+"px"},"slow");
                    }
                }, 200);
				if(!this._record){
					_left = (perw*_n)+2+"px";
					$("a.mask").animate({left:_left},"fast");
					//$(".scrollButton").animate({left:_left},"fast");
					this._record = true;
				}
			}else{
				this._record = false;
				if(n>=_len-_n){
					_left = (perw*(_latsindex-(_len-n)))+2+"px";
					$("#Smailllist").animate({left:-(_len-this._listLen)*perw+"px"},"slow");
					$("a.mask").animate({left:_left},"slow");
					//$(".scrollButton").animate({left:_left},"fast");
				}else{
					if(n<2){
						$("#Smailllist").animate({left:"0px"},"slow");
					}
					_left = (perw*n)+2+"px";
					$("a.mask").animate({left:_left},"slow");

                    setTimeout(function(){
                        $("#Smailllist").stop(true, true).animate({left:"0px"},"slow");
                    }, 200);
					//$(".scrollButton").animate({left:_left},"fast");
				}
			}
		},
		_sharwb:function(pic){//ת����΢��
			$("#Sharewbpic").bind("click",function(){
				_MI.Share.pop(pic,"qqcom.hdpicture.single");
			});
			  _MI.ShareArticle.build('MIcblog','qqcom.hdpicture');
		},
		_iwannComent:function(site,id){//����
			$.getScript("http://sum.comment.gtimg.com.cn/php_qqcom/gsum.php?site="+site+"&c_id="+id,function(){
				return false;
			})
		},
		_countIFrame:function(){//����ͳ��iframe
			$(".footer").append("<iframe id='iframeP' name='iframeP' src='' style='display:none;width:0px;height:0px;'></iframe>");	
		},
	    _countPV:function(index){//ˢ��PV
			/*���ɭͳ�ƽ���*/
			this._coreload("//mat1.gtimg.com/ping.js",function(){
				try{
					 if (typeof pgvMain == "function") {
						if(pvRepeatCount==2){
							pvRefDomain=window.location.host;
							pvRefUrl=location.pathname;
						}
						pvRepeatCount =1;
						pgvMain();
					}
				}catch(e){}
				hdPic.fn._creatUrl(parseInt(index-1));
			});
		},
		_getData:function(data,coent){//��һ�μ��غ󣬳�ʼ����ͼ��Сͼ�����¼���ͳ�Ƶ�
			if(coent!==""){
				$("#Main-D").html(coent);
			}
			if(data.length>0){
				/*�ɹ�*/
				$("#Main-A").append("<img src="+data[parseInt(hdPic.fn._getUrl()-1)].bigpic+" id='PicSrc' style='display:none'/>");
				this._getReady();//��ͼready
				this._small(data);//װ��Сͼ
				this._pageNow = parseInt(hdPic.fn._getUrl()-1);
				this._bindClick(data);
				$("#orgPic").attr("href",data[parseInt(hdPic.fn._getUrl()-1)].bigpic);
				this._showBig(data,parseInt(hdPic.fn._getUrl()-1));
				//setPicHandler
			}
		},
		_falshInt:function(data){
			loadingProcess.initSystems();//��ʼ��ȫ����ť
			loadingProcess.isJsReady = true;
			loadingProcess.setFullScreenDatas(data);//ȫ�����ݴ���
		},
		_getDomain:function(){//��������
			var Do = window.location.hostname;
			return Do.split(".")[0];
		},
		_small:function(data){//��һ�μ��غ��ʼ��Сͼ
			var _tmp="",ulLength=100*data.length;
			$.each(data,function(i){
                if(i==0){
                    _tmp+='<li><div><a href="javascript:void(0);" class="select"  onfocus="this.blur()"><img src="'+data[i].smallpic+'" rel="'+data[i].bigpic+'"/></a></div></li>';
                }else{
                    _tmp+='<li><div><a href="javascript:void(0);" onfocus="this.blur()"><img src="'+data[i].smallpic+'" rel="'+data[i].bigpic+'"/></a></div></li>';
                }
			});
			$("#Smailllist").width(ulLength);
			$("#Smailllist").html(_tmp);
			/*�Ŵ�*/
			if(hdPic.fn._getDomain()=="ent" || hdPic.fn._getDomain()=="lady"){//Ů�ԡ����ֻҶ�
				var _width=0,_height=0;
				$("#Smailllist img").each(function(){
					$(this).bind('mouseover',function(e){
                        var _selfs = $(this);
                        $(".sh").html('<img src="'+$(this).attr('rel')+'" id="preloadBig"/>');
                        $("#preloadBig").load(function(){
                            $(".sh").css({'left':_selfs.offset().left-parseInt(100-61)+'px','top':parseInt(_selfs.offset().top-270)+'px'});
                            _width = $(this).width();
                            _height=$(this).height();
                            $("#preloadBig").css({'left':'0px','top':'0px'});
                            $(".sh").fadeIn('slow');
                        });
					});
					$(this).bind('mousemove',function(e){
						e = e || window.event;
						var x=e.clientX,y=e.clientY,ori=this.getBoundingClientRect(),z=Math.round($(".sh").width()/2);
						var zoom = $("#preloadBig").width()/$(this).width();
						x-=ori.left;
						y-=ori.top;
						$("#preloadBig").css({'left':-parseInt(x*zoom)+'px','top':-parseInt(y*zoom)+'px'});
						
					});
					$("#Smailllist").bind('mouseout',function(){
						$(".sh").fadeOut('slow');
					})
				})
			}
			/*�Ŵ�*/
		},
		/*
			@��������
		*/
		_specific:function(){
			if(this._specificID!==""){
				if(this._specificID.indexOf("|")!==-1){
					var DOms = this._specificID.split("|");
					$.each(DOms,function(){
						try{
							$(this).hide();
						}catch(e){}
					})
				}else{
					try{
						$(this._specificID).css("visibility","hidden");
					}catch(e){
					
					}
				}
			}
		},
		_query:function(){//��һ�μ���,ʹ��ajax��������,���ڳɹ�������ݸ�ʽ�������� 
			 var org = getPageUrl;
			$.ajax({
              url: org.split(".htm")[0]+".hdBigPic.js?time="+Math.random(),
			  /* url:"http://ent.qq.com/a/20110816/000246.hdBigPic.js",*/
               type: "GET",   
               beforeSend: function(x) {  
				   x.setRequestHeader("If-Modified-Since","0");
                   x.setRequestHeader("Charset", "GB2312");
				   x.setRequestHeader("Cache-Control","no-cache");
                },  
               success: function() { //ajax�ɹ�
                    var arrMe = eval("(" + arguments[0] + ")");
					var length = arrMe.Children[0].Children[0].Children[0].Content;//����
					for(var i=0;i<length;i++){
						var txt = arrMe.Children[0].Children[1].Children[i].Children[3].Children[0].Content;
						hdPic.fn._tmpArray.push({'showtit':''+txt.replace(/\<p\>/i,"").replace(/\<\/p\>/i,"")+'', 'showtxt':''+arrMe.Children[0].Children[1].Children[i].Children[0].Children[0].Content+'', 'smallpic':''+arrMe.Children[0].Children[1].Children[i].Children[1].Children[0].Content+'', 'bigpic':''+arrMe.Children[0].Children[1].Children[i].Children[2].Children[0].Content+''})
					}
					hdPic.fn._isgoOn = arrMe.Children[0].Children[5].Children[0].Content==0?false:true;//�Ƿ�����������һ��ͼ
					hdPic.fn._lastTitle = arrMe.Children[0].Children[3].Children[0].Content;//��һƪ��ͼ����
					hdPic.fn._lastUrl = arrMe.Children[0].Children[2].Children[0].Content;//��һƪ��ͼ��ַ
					if(arrMe.Children[0].Children[8].Children.length!==0){
						hdPic.fn._coentArray = arrMe.Children[0].Children[8].Children[0].Content;//�ײ�������
						$("#Main-D").show();
					}else{
						hdPic.fn._coentArray = "";
						$("#Main-D").hide();
					}
					/*���ɭͳ�ƽ���*/
					/*hdPic.fn._countIFrame();//����ͳ��iframe;*/
					hdPic.fn._getData(hdPic.fn._tmpArray,hdPic.fn._coentArray);
					hdPic.fn._falshInt(hdPic.fn._tmpArray);
					if(hdPic.fn._isCiment=="2"){
						hdPic.fn._iwannComent(hdPic.fn._siteEname,hdPic.fn._aid);
					}else{
						$("#toolBar").find("ul.right").hide();
					};
					hdPic.fn._specific();
               },  
               error: function(x, e) {  
					$("#Main-P-QQ").html("<div style='margin:100px auto'>���ݼ��ش���!</div>");
				},
               complete: function(x) {  
                 //  alert(x.responseText);  
               }  
           });  
		},
		init:function(p){
			window.onerror = ResumeError;
			hdPic.fn._sourName = p.name;//��Դ;
			hdPic.fn._sourUrl = p.url;//��ԴUrl;
			hdPic.fn._pubTime = p.time;//����ʱ��;
			hdPic.fn._siteName = p.siteName;//վ��������
			hdPic.fn._siteLink = p.siteLink;//վ������
			hdPic.fn._isPic =p.ispic;//�Ƿ�ͼƬվ
			hdPic.fn._isCiment = p.isComent;//�Ƿ�����
			hdPic.fn._aid = p.aid;//����ID
			hdPic.fn._siteEname = p.siteEname;//վ��Ӣ����
			hdPic.fn._isShowLastAD = p.isShowLastAD;//�Ƿ���ʾĩҳ��� 1 : ��ʾ 0 : ����
			if(typeof hdpic_specifics!=="undefined"){
				hdPic.fn._specificID =hdpic_specifics;//����������������
			}
			if(typeof p.auth!=="undefined"){
				hdPic.fn._auth = p.auth;//����
			}
			this._coreload(this._coreurl,function(){
				$(document).ready(function($){
					hdPic.fn._query();
				});
			});
		}
	}
	hdPic.fn.init.prototype = hdPic.fn;/*  |xGv00|c586e892e5c9c790b74edc92c93acf8c */