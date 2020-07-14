var GG = jQuery.noConflict();
var Health=function(){};
Health.prototype={
	firstNav:function(){
		GG("#healthNav li").hover(function(){
				GG(this).addClass("show" + GG(this).attr("name"));
				GG(this).find("span").attr("class",GG(this).attr("name"));
				GG(this).find("div").css("z-index","10").show().parent().siblings().find("div").css("z-index","1").hide();
				GG("#subNavBg").show();
				if(GG("body").attr("id") !== ""){
					GG(this).find("div").show();
				}
				if(GG(this).find("div").html() ===""){
					GG("#subNavBg").show();
					GG(this).find("div").hide();
				}
				if(GG(this).find("div").html() ==="" && GG("body").attr("id") === ""){
					GG("#subNavBg").hide();
					GG(this).find("div").hide();
				}
			},function(){
				GG(this).removeClass("show" + GG(this).attr("name"));
				GG("#subNavBg").hide();
				GG(this).find("div").hide();
				if(GG("body").attr("id") !== ""){
					GG("#subNavBg").show();
				}
				if(GG(this).find("div").html() ===""){
					GG("#subNavBg").show();
				}
				if(GG(this).find("div").html() ==="" && GG("body").attr("id") === ""){
					GG("#subNavBg").hide();
					GG(this).find("div").hide();
				}
			});
			if(GG("body").attr("id") == ""){
				GG("#healthNav a").each(function(){
					GG(this).attr("target","_blank")
				})
			}
	},
	focusFirst:function(){
		var sWidth = GG("#focus").width(); //��ȡ����ͼ�Ŀ�ȣ���ʾ�����
		var len = GG("#focus ul li").length; //��ȡ����ͼ����
		var index = 0;
		var picTimer;
		
		//���´���������ְ�ť�Ͱ�ť��İ�͸������������һҳ����һҳ������ť
		var btn = "<div class='btnBg'></div><div class='btn'>";
		for(var i=0; i < len; i++) {
			btn += "<span></span>";
		}
		btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
		GG("#focus").append(btn);
	
		//ΪС��ť�����껬���¼�������ʾ��Ӧ������
		GG("#focus .btn span").mouseover(function() {
			index = GG("#focus .btn span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseover");
	
		//��һҳ����һҳ��ť͸���ȴ���
		GG("#focus .preNext").css("opacity",1).hover(function() {
			GG(this).stop(true,false);
		},function() {
			GG(this).stop(true,false);
		});
	
		//��һҳ��ť
		GG("#focus .pre").click(function() {
			index -= 1;
			if(index == -1) {index = len - 1;}
			showPics(index);
		});
	
		//��һҳ��ť
		GG("#focus .next").click(function() {
			index += 1;
			if(index == len) {index = 0;}
			showPics(index);
		});
	
		//����Ϊ���ҹ�����������liԪ�ض�����ͬһ�����󸡶�������������Ҫ�������ΧulԪ�صĿ��
		GG("#focus ul").css("width",sWidth * (len));
		
		//��껬�Ͻ���ͼʱֹͣ�Զ����ţ�����ʱ��ʼ�Զ�����
		GG("#focus").hover(function() {
			clearInterval(picTimer);
		},function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if(index == len) {index = 0;}
			},4000); //��4000�����Զ����ŵļ������λ������
		}).trigger("mouseleave");
		
		//��ʾͼƬ���������ݽ��յ�indexֵ��ʾ��Ӧ������
		function showPics(index) { //��ͨ�л�
			var nowLeft = -index*sWidth; //����indexֵ����ulԪ�ص�leftֵ
			GG("#focus ul").stop(true,false).animate({"left":nowLeft},300); //ͨ��animate()����ulԪ�ع������������position
			GG("#focus .btn span").stop(true,false).addClass("on").eq(index).stop(true,false).removeClass("on"); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��
		}
		GG("#focus").hover(function(){
			GG(".preNext").show();
		},function(){
			GG(".preNext").hide();	
		})
	},
	tabs:function(){
		GG(".f_tab p a").hover(function(){
			GG(this).addClass("on").siblings().removeClass("on");
			var index = GG(".f_tab p a").index(this);
			GG(".f_tab_con ul").eq(index).attr("class","dis").siblings().attr("class","undis");
		})	
	},
	trumpHover:function(){
		GG("#trumpCon li").hover(function(){
			GG("#trumpCon .bd").hide();
			GG(this).find(".bd").show();
			GG(this).css("border-color","#ffffff").siblings().css("border-color","#d6d6d6");
		});
	},
	convenientTool:function(){
		GG("#convenientTool img").each(function(){
			GG(this).hover(function(){
				GG(this).animate({opacity:"1"});
			},function(){
				GG(this).animate({opacity:"0.4"});	
			})	
		})	
	},
	videoSYtab:function(vi,ci){
		GG(vi).hover(function(){
			GG(this).attr("id",GG(this).attr("class")).siblings().attr("id","");
			//var vIndex = GG(vi).index(this);
			//GG(ci).eq(vIndex).show().siblings().hide();
		},function(){
			GG(this)	.attr("id","")
		})	
	},
	healthTab:function(ht,hc){
		GG(ht).hover(function(){
			GG(this).addClass("on").siblings().removeClass("on");	
			var hIndex = GG(ht).index(this);
			GG(hc).eq(hIndex).show().siblings().hide();
		})	
	},
	newsLoadMore:function(ni,nii){
		GG(ni).click(function(){
			GG(this).siblings("ul").eq(1).slideDown();
			GG(this).hide();
			GG(nii).removeClass("undis").show();
				
		})
		GG(nii).click(function(){
			GG(this).siblings("ul").eq(1).slideUp();	
			GG(this).hide();
			GG(ni).removeClass("undis").show();
		})
	},
	backTop:function(){
		(function() {
			var GbackToTopTxt = "���ض���", GbackToTopEle = GG('<a class="backToTop"></a>').appendTo(GG("body"))
				.text(GbackToTopTxt).attr("title", GbackToTopTxt).click(function() {
					GG("html, body").animate({ scrollTop: 0 }, 120);
			}), GbackToTopFun = function() {
				var st = GG(document).scrollTop(), winh = GG(window).height();
				(st > 500)? GbackToTopEle.show(): GbackToTopEle.hide();    
				//IE6�µĶ�λ
				if (!window.XMLHttpRequest) {
					GbackToTopEle.css("top", st + winh - 166);    
				}
			};
			GG(window).bind("scroll", GbackToTopFun);
			GG(function() { GbackToTopFun(); });
			GG(".backToTop").hover(function(){
				GG(this).addClass("backToTop_hover")	
			},function(){
				GG(this).removeClass("backToTop_hover")	
			})
		})();
	},
	wxtip:function(){
		GG.ajax({
			url : "http://999.act.qq.com/user/seasonShow",
			dataType : 'jsonp',
			data :'',
			success : function(e){
				var jsn = GG.parseJSON(e);
				var seasonDate=jsn.data.seasonDate;
				var mystr=seasonDate.split("-");
	
				GG(".BBC_seasonShowY").html(mystr[0]);
				GG(".BBC_seasonShowM").html(mystr[1]);
				GG(".BBC_seasonShowD").html(mystr[2]); 
				GG(".BBC_seasonName").html(jsn.data.seasonShowText.seasonName);
				GG(".BBC_seasonIntro").html('<span class="fb">������飺</span>'+jsn.data.seasonShowText.seasonIntro);
				if(jsn.data.seasonShowText.seasonHealth.length>22){
						jsn.data.seasonShowText.seasonHealth=jsn.data.seasonShowText.seasonHealth.substring(0,22)+"...";}
					else{
						jsn.data.seasonShowText.seasonHealth=jsn.data.seasonShowText.seasonHealth
				}
				GG(".BBC_seasonHealth").html('<span class="fb">�����ʳ��</span>'+jsn.data.seasonShowText.seasonHealth);
			}
		})
	},
	secWeiBoHeader:function(){
		GG("#zhuan").click(function(){
			var _t = "��" + GG(this).parent().parent().parent().find("h3").text() + "��" + GG(this).parent().parent().parent().find("p.text span").text();
			var _url = "http://health.qq.com" + GG(this).parent().parent().parent().find("h3 a").attr("href");
			var _appkey = encodeURI("");
			var _pic = GG(this).parent().parent().parent().find("img").attr("src");
			var _site = '';
			var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t;
			window.open( _u,'', 'width=900, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
			return false;
			
		})	
	}

}

function postToWb(title,pic,url){
	var _t = title;//��ǰҳ��title��ʹ��document.title
	var _url = encodeURIComponent(url);//��ǰҳ�����ӵ�ַʹ��document.location
	var _appkey = '';//�����Ѷ��õ�appkey�������appkey,ֱ��д��keyֵ�����磺_appkey=123456
	var _pic = encodeURI(pic);//�����磺var _pic='ͼƬurl1|ͼƬurl2|ͼƬurl3....��
	var _site = '';//�����վ��ַ
	var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic;
	window.open( _u,'', 'width=900, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

var wind = new Health;
wind.firstNav();
wind.focusFirst();
wind.tabs();
wind.convenientTool();
wind.trumpHover();
wind.videoSYtab("#video .hd ul li",".vCons .vCons_con");
wind.videoSYtab("#healthPic .hd p a",".#healthPic .bd ul");
wind.healthTab(".hBtn a","#healthFocus .con .box");
wind.healthTab(".fFouce span a",".fFouce .con .boxx");
wind.newsLoadMore();
wind.newsLoadMore("#newsMore","#newsMoreClose")
wind.newsLoadMore("#diseaseMore","#diseaseMoreClose")
wind.newsLoadMore("#foodSafetyMore","#foodSafetyMoreClose")
wind.newsLoadMore("#sybjMore","#sybjMoreClose")
wind.backTop();
wind.wxtip();
wind.secWeiBoHeader();

/*  |xGv00|3b6b99736ddeef65e702580b291da6ea */