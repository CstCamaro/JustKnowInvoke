
/*============================auto.js=================================*/
typeof $ === 'undefined' && typeof jQuery !== 'undefined' && ($=jQuery);


/**
 * ip���򱣴�ռ�
 **/
var citys = {};

citys.ipUrl = "//fw.qq.com:80/ipaddress";
citys.exist = false;
citys.list = [
	{
		name:"����",
		cn:"beijing",
		url:"http://auto.qq.com/c/cshq/hq_beijing/hangqingtop10.htm"
	},{
		name:"����",
		cn:"shenyang",
		url:"http://auto.qq.com/c/cshq/hq_shenyang/hangqingtop10.htm"	
	},{
		name:"�Ͼ�",
		cn:"nanjing",
		url:"http://auto.qq.com/c/cshq/hq_nanjing/hangqingtop10.htm"	
	},{
		name:"����",
		cn:"hangzhou",
		url:"http://auto.qq.com/c/cshq/hq_hangzhou/hangqingtop10.htm"	
	},{
		name:"�Ϻ�",
		cn:"shanghai",
		url:"http://auto.qq.com/c/cshq/hq_shanghai/hangqingtop10.htm"	
	},{
		name:"����",
		cn:"fuzhou",
		url:"http://auto.qq.com/c/cshq/hq_fuzhou/hangqingtop10.htm"	
	},{
		name:"����",
		cn:"guangzhou",
		url:"http://auto.qq.com/c/cshq/hq_guangzhou/hangqingtop10.htm"	
	},{
		name:"�人",
		cn:"wuhan",
		url:"http://auto.qq.com/c/cshq/hq_wuhan/hangqingtop10.htm"	
	},{
		name:"��ɳ",
		cn:"changsha",
		url:"http://auto.qq.com/c/cshq/hq_changsha/hangqingtop10.htm"	
	},{
		name:"�ɶ�",
		cn:"chengdu",
		url:"http://auto.qq.com/c/cshq/hq_chengdu/hangqingtop10.htm"	
	},{
		name:"����",
		cn:"chongqing",
		url:"http://auto.qq.com/c/cshq/hq_chongqing/hangqingtop10.htm"	
	},{
		name:"����",
		cn:"xian",
		url:"http://auto.qq.com/c/cshq/hq_xian/hangqingtop10.htm"	
	},{
		name:"֣��",
		cn:"zhengzhou",
		url:"http://auto.qq.com/c/cshq/hq_zhengzhou/hangqingtop10.htm"	
	},{
		name:"����",
		cn:"jinan",
		url:"http://auto.qq.com/c/cshq/hq_jinan/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"changchun",
		url:"http://auto.qq.com/c/cshq/hq_changchun/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"dalian",
		url:"http://auto.qq.com/c/cshq/hq_dalian/hangqingtop10.htm"	
	},
	{
		name:"��ݸ",
		cn:"dongguan",
		url:"http://auto.qq.com/c/cshq/hq_dongguan/hangqingtop10.htm"	
	},
	{
		name:"��ɽ",
		cn:"foshan",
		url:"http://auto.qq.com/c/cshq/hq_foshan/hangqingtop10.htm"	
	},
	{
		name:"�Ϸ�",
		cn:"hefei",
		url:"http://auto.qq.com/c/cshq/hq_hefei/hangqingtop10.htm"	
	},
	{
		name:"������",
		cn:"haerbin",
		url:"http://auto.qq.com/c/cshq/hq_haerbin/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"kunming",
		url:"http://auto.qq.com/c/cshq/hq_kunming/hangqingtop10.htm"	
	},
	{
		name:"�ϲ�",
		cn:"nanchang",
		url:"http://auto.qq.com/c/cshq/hq_nanchang/hangqingtop10.htm"	
	},
	{
		name:"�ൺ",
		cn:"qingdao",
		url:"http://auto.qq.com/c/cshq/hq_qingdao/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"shenzhen",
		url:"http://auto.qq.com/c/cshq/hq_shenzhen/hangqingtop10.htm"	
	},
	{
		name:"ʯ��ׯ",
		cn:"shijiazhuang",
		url:"http://auto.qq.com/c/cshq/hq_shijiazhuang/hangqingtop10.htm"	
	},
	{
		name:"̫ԭ",
		cn:"taiyuan",
		url:"http://auto.qq.com/c/cshq/hq_taiyuan/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"xiamen",
		url:"http://auto.qq.com/c/cshq/hq_xiamen/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"guiyang",
		url:"http://auto.qq.com/c/cshq/hq_guiyang/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"ningbo",
		url:"http://auto.qq.com/c/cshq/hq_ningbo/hangqingtop10.htm"	
	},
	{
		name:"��ɽ",
		cn:"zhongshan",
		url:"http://auto.qq.com/c/cshq/hq_zhongshan/hangqingtop10.htm"	
	},
	{
		name:"�麣",
		cn:"zhuhai",
		url:"http://auto.qq.com/c/cshq/hq_zhuhai/hangqingtop10.htm"	
	},
	{
		name:"տ��",
		cn:"zhanjiang",
		url:"http://auto.qq.com/c/cshq/hq_zhanjiang/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"jiangmen",
		url:"http://auto.qq.com/c/cshq/hq_jiangmen/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"huizhou",
		url:"http://auto.qq.com/c/cshq/hq_huizhou/hangqingtop10.htm"	
	},
	{
		name:"�˲�",
		cn:"yichang",
		url:"http://auto.qq.com/c/cshq/hq_yichang/hangqingtop10.htm"	
	},
	{
		name:"����",
		cn:"nanning",
		url:"http://auto.qq.com/c/cshq/hq_nanning/hangqingtop10.htm"	
	}//,
//	{
//		name:"��",
//		cn:"jinhua",
//		url:"http://auto.qq.com/c/cshq/hq_jinhua/hangqingtop10.htm"	
//	},
//	{
//		name:"����",
//		cn:"lanzhou",
//		url:"http://auto.qq.com/c/cshq/hq_lanzhou/hangqingtop10.htm"	
//	},
//	{
//		name:"����",
//		cn:"wenzhou",
//		url:"http://auto.qq.com/c/cshq/hq_wenzhou/hangqingtop10.htm"	
//	}
];

$.getScript(citys.ipUrl, function(){
//	var IPData = new Array("113.141.119.105","","����ʡ","������");
	$(citys.list).each(function (i,e) {
		if ((IPData[3] == '' && IPData[2].split("��")[0] == e.name) || (IPData[3]!=''&&IPData[3].split("��")[0] == e.name)) {
			citys.exist = true;
		}
	});
	$('#slt1').hide();
	$('#slt2').show();
});







//���ʹ�ȫ-�ȳ�
var hot_car_num = 0;

$.ajax({
	url:"//i.match.qq.com/auto/hotserial",
	dataType:"jsonp",
	success: function (d){
		if (d.code == 0 && d.num > 0) {
			$("#hot_cars").find("ul:not(.first)").remove();
			
			for (var i=0; i<d.serials.length; i++) {
				if (hot_car_num >= 14) {break; }
				var flag = 0;
				if (hot_car_num%7 == 0)  {
					var oUl = $('<ul></ul>');
					$("#hot_cars").append(oUl);
				}
				
				$("#hot_cars").find("ul.first li a").each(function () {
					if ($(this).attr("sid") == d.serials[i].id) {
						flag = 1;
					}
				});
				if (!flag) {
					hot_car_num++;
					var oLi = $('<li><strong><a target="_blank" href="//data.auto.qq.com/car_serial/'+d.serials[i].id+'/">'+d.serials[i].name+'</a></strong><a href="http://baojia.auto.qq.com/php/baojia_detail.php?info=0&serialID='+d.serials[i].id+'" target="_blank">\u62A5\u4EF7</a> <a href="http://data.auto.qq.com/piclib/index.shtml#sid='+d.serials[i].id+'" target="_blank">\u56FE\u5E93</a> <a href="http://data.auto.qq.com/car_serial/'+d.serials[i].id+'/modelscompare.shtml" target="_blank">\u914D\u7F6E</a></li>');
					oUl.append(oLi);
				}
			}
			if ($("#hot_cars").find("ul:empty").length) {
				$("#hot_cars").find("ul:empty").remove();
			}
		}
	}
});

//���Ž���
jQuery(function($){
	//����ѡ���б�
	var jsonData = lowprice_list;//json��������
	var strHTML = '';
		strHTML += '<tr>';
		strHTML += '	<th scope="col" class="th1">\u8F66\u7CFB</th>';
		strHTML += '	<th scope="col">\u964D\u5E45</th>';
		strHTML += '	<th scope="col">\u4EF7\u683C</th>';
		strHTML += '</tr>';
	for(var i=0; i<8 && i<jsonData.length; i++){
		strHTML += '<tr>';
		strHTML += '	<td class="l">';
		strHTML += '		<a href="//auto.qq.com/jiangjia.htm?brandid='+jsonData[i].sbrand_id+'&amp;serialid='+jsonData[i].sserial_id+'&amp;cityid='+jsonData[i].scity_id+'&amp;pgv_ref=article" target="_blank">';
		strHTML += 				jsonData[i].FName;
		strHTML += '		</a>';
		strHTML += '	</td>';
		strHTML += '	<td>';
		strHTML += '		<em class="desc"></em>';
		strHTML += 			jsonData[i].sdiscount_amount+'\u4E07';
		strHTML += '	</td>';
		strHTML += '	<td>';
		strHTML += 			jsonData[i].sdiscount_price+'\u4E07';
		strHTML += '	</td>';
		strHTML += '</tr>';
	}
	$(".jiangjia .body table").html(strHTML);
	$(".jiangjia .body tr").hover(
		function(){$(this).addClass("hover");},
		function(){$(this).removeClass("hover");}
	); 
});

//����ͼ
/**
 * @version 0.3 ������Ұ�ť, �޸İ�ťbug
 * @author  jianminlu
 * @update  2014-02-13 11:46
 */
(function($){
	/**
	 * @name    qqfocus     ҳ������
	 * @param   {Object}    ��ʼֵ
	 */
	$.fn.qqfocus = function(options){
		var focuser = {};
		var opts = $.extend({}, {
			event: 'mouseover',  //mouseover click
			conbox: '.focus_con',//��������
			condot: '.focus_dot',//�л�����
			conitem: 'li',       //���ݱ�ǩclass
			dotitem: 'li',       //�л�����ǩ Ĭ��Ϊli
			current: 'current',  //�л���ʽ
			effect: 'fade',      //�л�Ч�� scrollx|scrolly|fade|none
			speed: 1000,         //�����ٶ�
			space: 3000,         //ʱ����
			auto: true,          //�Զ�����
			prev: ".prevBtn",
			next: ".nextBtn"
		}, options);
		focuser.timer = "";
		focuser.index = 0;
		focuser.last_index = 0;
		focuser.conbox = $(this).find(opts.conbox);
		focuser.conitem = focuser.conbox.find(opts.conitem);
		focuser.condot = $(this).find(opts.condot);
		focuser.dotitem = focuser.condot.find(opts.dotitem);
		focuser.prev = $(this).find(opts.prev);
		focuser.next = $(this).find(opts.next);

		focuser.fn = {
			slide: function () {
				if (focuser.index >= focuser.conitem.length){
					focuser.index = 0;
				}
				focuser.dotitem.removeClass(opts.current).eq(focuser.index).addClass(opts.current);
				switch (opts.effect) {
					case 'scrollx':
						focuser.conitem.css({"float":"left"});
						focuser.conbox.css({"position": "relative"});
						focuser.conbox.width(focuser.conitem.length * focuser.conitem.width());
						focuser.conbox.stop().animate({left:-focuser.conitem.width() * Math.abs(focuser.index) + 'px'}, opts.speed);
						break;
					case 'scrolly':
						focuser.conitem.css({display:'block'});
						focuser.conbox.css({"position": "relative"});
						focuser.conbox.stop().animate({top:-focuser.conitem.height() * Math.abs(focuser.index) + 'px'}, opts.speed);
                        break;
					case 'fade':
						if(focuser.conbox.css('opacity') == 1){
							focuser.conbox.css('opacity', 0);
						}
						focuser.conbox.animate({'opacity':1}, opts.speed / 2);
						focuser.conitem.eq(focuser.last_index).stop().css('display', "none").end().eq(focuser.index).css('display', "block").stop();
						break;
					case 'none':
						focuser.conitem.hide().eq(focuser.index).show();
						break;
				}
				focuser.last_index = focuser.index;
				focuser.index ++;
			},
			next: function(){
				focuser.fn.stop();
				focuser.fn.slide();
				focuser.fn.play();
			},
			prev: function () {
				focuser.index = focuser.index < 2 ? (focuser.conitem.length - focuser.index) : focuser.index - 2;
				focuser.fn.stop();
				focuser.fn.slide();
				focuser.fn.play();
			},
			stop: function(){
				clearInterval(focuser.timer);
			},
			play: function(){
				if (opts.auto) {
					focuser.timer = setInterval(focuser.fn.slide, opts.space);
				}
			},
			init: function(){
				if (opts.effect == 'fade') {
					focuser.conitem.eq(focuser.index).css({'display':"block"}).siblings().css({'display':"none"});
				}
				if (opts.auto){
					focuser.fn.play();
				}else{
					focuser.fn.stop();
				}
				focuser.dotitem.bind(opts.event, function() {
					focuser.index = $(this).index();
					focuser.fn.stop();
					focuser.fn.slide();
					focuser.fn.play();
				});
				focuser.conbox.hover(focuser.fn.stop, focuser.fn.play);
				focuser.fn.slide();
				focuser.prev.bind("click", focuser.fn.prev);
				focuser.next.bind("click", focuser.fn.next);
			}
		};
		focuser.fn.init();
	}
})(jQuery);

// ����ͼ
$("#focus_A").qqfocus({effect:'scrollx', speed:500, space:8000});

// ���ų����Ƽ�
$(".hotCar").qqfocus({conbox:'.hotCarCon',condot:'.hotCarTab',conitem:'ul',effect:'scrollx', speed:500, space:8000, auto:false, prev: '.prevBtn', next: '.nextBtn'});

// ���ž�����
$("#jxs").qqfocus({conbox:'.focus_con2',condot:'.focus_dot2',conitem:'ul',effect:'scrollx', speed:500, space:8000, auto:false, prev: '.prevBtn2', next: '.nextBtn2'});

//ҳ���л�
function Tab(ops) {
	this.menus = ops.menus;
	this.cons = ops.cons;
	this.clsname = ops.clsname || "active";
	this.event = ops.event || "mouseover";
	this.cur = ops.cur || 0;
	this.lbtn = ops.lbtn || null;
	this.rbtn = ops.rbtn || null;
	
	this.init();
}
Tab.prototype = {
	init: function () {
		var _this = this;
		this.menus.each(function (i) {
			$(this).on(_this.event, function () {
				_this.cur = i;
				_this.change(_this.cur);
			});
		});

		if (this.lbtn) {
			this.lbtn.on("click", function () {
				_this.cur--;
				if (_this.cur < 0) {
					_this.cur = _this.menus.length -1;
				}
				_this.change(_this.cur);
			});
		}

		if (this.rbtn) {
			this.rbtn.on("click", function () {
				_this.cur++;
				if (_this.cur >= _this.menus.length) {
					_this.cur = 0;
				}
				_this.change(_this.cur);
			});
		}
		
		this.change(this.cur);
	},
	change: function (i) {
		this.menus.removeClass(this.clsname).eq(i).addClass(this.clsname);
		this.cons.hide().eq(i).show();
	}
}

/* ���ʹ�ȫ */
var cx_tab = new Tab({
	menus: $(".cx_tab ul li"),
	cons: $(".cx_content_item")
});

/* ��������|ԭ����Ʒ|������Ѷ */
var cx_tab = new Tab({
	menus: $(".newsListTag li"),
	cons: $(".newsList")
});

/* cur���Բ�д��Ĭ��Ϊ0 */
/* �Ѿ����� 
var yss_tab = new Tab({
	menus: $("#listed .ym_menu a"),
	cons: $("#listed .bd ul"),
	cur:11
});
*/
/*�ط�վ����*/
var links2 = new Tab({
	menus: $(".links_loc .menus a"),
	cons: $(".links_loc .cons")
});
/*��Ѷ��Ʒ*/
function SlideTab(ops) {
	this.cons = ops.cons;
	this.len = this.cons.find("li").length;
	this.up = ops.up;
	this.down = ops.down;
	this.moving = false;
	this.cur = 0;
	this.delay = ops.delay || 4000;
	this.timer = null;
	
	this.init();
}
SlideTab.prototype = {
	init: function () {
		var _this = this;
		this.cons.html(this.cons.html()+this.cons.html());

		this.up.on("mouseover", function() {
			_this.clear_timer();
		}).on("mouseout", function() {
			_this.set_timer();
		}).on("click",function () {
			if (_this.moving) {return}
			_this.clickup();
		});

		this.down.on("mouseover", function() {
			_this.clear_timer();
		}).on("mouseout", function() {
			_this.set_timer();
		}).on("click",function () {
			if (_this.moving) {return}
			_this.clickdown();
		});

		this.cons.find("li").on("mouseover", function (){
			_this.clear_timer();
		}).on("mouseout", function () {
			_this.set_timer();
		})
		
		this.set_timer();
	},
	clickup: function () {
		var _this = this;
		this.cur++;
		this.change(this.cur,function () {
			
			if (_this.cur >= _this.len) {
				_this.cons.css({
					top:-5
				});
				_this.cur = 0;
			}
		});
		
	},
	clickdown: function () {
		this.cur--;
		if (this.cur < 0) {
			this.cur = this.len;
			this.cons.css({
				top:-this.calc(this.cur+1)
			})
		}
		this.change(this.cur);
	},
	calc: function (index) {
		var dis = 4;
		this.cons.find('li').each(function (i) {
			if (i >= index) {return}
			dis += $(this).outerHeight();
		});
		return dis;
	},
	change: function (index,fn) {
		var _this = this;
		this.moving = true;
		this.cons.stop().animate({
			top:-this.cons.find("li").eq(index)[0].offsetTop-5
		},function () {
			if (fn) fn();
			_this.moving = false;
		});
	},
	clear_timer: function () {
		if (this.timer) {clearInterval(this.timer);}
	},
	set_timer: function () {
		var _this = this;
		this.timer = setInterval(function () {
			_this.clickup();
		}, this.delay);
	}
};

if($("#txcp").length){
	var cp1 = new SlideTab({
		cons:$("#txcp ul"),
		up:$("#txcp a.up_btn"),
		down:$("#txcp a.down_btn")
	});
}

//������ʾ
function loadingData(ulBox,moreBt,n){
	var loadingCon = ulBox;//�б�����ID
	var loadingBtn = moreBt;//���ఴťID
	var pinNum = n;//����ÿ�����Ӹ���
	if(document.getElementById(ulBox).getElementsByTagName("li").length>0){
		var liData = document.getElementById(ulBox).getElementsByTagName("li");
	}else{
		document.getElementById(loadingBtn).innerHTML = "\u6CA1\u6709\u6570\u636E\u3002";
		return false;
	}
	(function(window,doc,undefined){
		function pinLayout(node){
			var indicator = arguments.callee, that = this, Pb;
			if (!(this instanceof indicator)) return new indicator(node);
			typeof node == 'string' ? node = doc.getElementById(node) : node;
			if (!node || node.nodeType !== 1){
				return
			}
			Pb = indicator.prototype;
			Pb.constructor = indicator;
			return this;
		}
		window.pin = pinLayout;
		var x = pinLayout(loadingCon);
		(function(window, doc, undefined){
			var index = 0, j = liData.length;
			loadLi();
			function loadLi(){
				createPin();
				document.getElementById(loadingBtn).onclick = function(){
					createPin();
				}
			}
			
			//׷��һ��
			function createPin(fn){
				if(j > pinNum){
					var i = pinNum;
				}else if(pinNum >= j && j > 0){
					var i = j;
					document.getElementById(loadingBtn).innerHTML = "\u6CA1\u6709\u6570\u636E\u4E86\u3002";
				}
				for(;i--;){
					var dataLi = liData[index];
					dataLi.style.display = "block";
					index++;
					j--;
				}
			}
			
		})(this, document);
	})(this, document);
}
loadingData("LIST_LM1","loadingMore1",6);
loadingData("LIST_LM2","loadingMore2",6);
loadingData("LIST_LM3","loadingMore3",6);
loadingData("LIST_LM4","loadingMore4",6);
loadingData("LIST_LM5","loadingMore5",6);

/*�ص�����*/
var ie6=!-[1,]&&!window.XMLHttpRequest;
$(window).scroll(function () {
	if ($(window).scrollTop() > $(window).height()) {
		$("#toTop").show();
		if (ie6) {
			$("#toTop").css({
				"position":"absolute",
				"top":$(window).scrollTop()+$(window).height()-100
			});
			
		}
	} else {
		$("#toTop").hide();
	}
});

/*
 * jQuery Cookie Plugin v1.3.1
 */
;(function(e,f,b){var d=/\+/g;function g(j){return j}function h(j){return c(unescape(j.replace(d," ")))}function c(j){if(j.indexOf('"')===0){j=j.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}return j}function i(j){return a.json?JSON.parse(j):j}var a=e.cookie=function(r,q,w){if(q!==b){w=e.extend({},a.defaults,w);if(q===null){w.expires=-1}if(typeof w.expires==="number"){var s=w.expires,v=w.expires=new Date();v.setDate(v.getDate()+s)}q=a.json?JSON.stringify(q):String(q);return(f.cookie=[escape(r),"=",a.raw?q:escape(q),w.expires?"; expires="+w.expires.toUTCString():"",w.path?"; path="+w.path:"",w.domain?"; domain="+w.domain:"",w.secure?"; secure":""].join(""))}var j=a.raw?g:h;var u=f.cookie.split("; ");var x=r?null:{};for(var p=0,n=u.length;p<n;p++){var o=u[p].split("=");var k=j(o.shift());var m=j(o.join("="));if(r&&r===k){x=i(m);break}if(!r){x[k]=i(m)}}return x};a.defaults={};e.removeCookie=function(k,j){if(e.cookie(k)!==null){e.cookie(k,null,j);return true}return false}})(jQuery,document);

(function($){
	if(!$)return;
	document.domain = 'qq.com';
	var doc  = document,port='',win  = window,_loc = location;

/*
* ��������
*/
	
	// ģ��commonJS require
	var require=function(module){
		var exports={};
		module=require.modules[module]||undefined;
		typeof module=='function'&&module.call(exports,exports);
		return exports;
	}
	
	require.modules={};

	require.registar=function(module,fn){
		module&&fn&&(require.modules[module]=fn);
	}
	
	// ������ж�
	var userAgent = navigator.userAgent.toString().toLowerCase();
	$.browser = {
		tt  : /tencenttraveler|qqbrowser/i.test( userAgent ),
		ie6 : !-[1,] && !win.XMLHttpRequest || /msie.6\.0/i.test(userAgent),
		ie7 : /msie.[7]\.0/i.test(userAgent) && !/trident\/5\.0/i.test(userAgent) || (document.documentMode == 7),
		ie8 : /msie.[8]\.0/i.test(userAgent) || (document.documentMode == 8),
		ie67 : ((!-[1,] && !win.XMLHttpRequest || /msie.6\.0/i.test(userAgent)) || (/msie.[7]\.0/i.test(userAgent) && !/trident\/5\.0/i.test(userAgent) || (document.documentMode == 7))),
		ie78 : /msie.[7|8]\.0/i.test(userAgent),
		ie678: !$.support.leadingWhitespace,
		ie9 : /msie.[7|9]\.0/i.test(userAgent) && /mozilla\/[4|5]\.0/i.test(userAgent) && /trident\/5\.0/i.test(userAgent) || (document.documentMode == 9),
		safari: /webkit/i.test( userAgent ), 
		chrome: /chrome/i.test(userAgent) && /mozilla/i.test(userAgent) ,
		msie  : /msie/i.test(userAgent) && !/opera/.test(userAgent),
		ff:  /.*(firefox)\/([\w.]+).*/i.test(userAgent)
	};
	
	// �¼�ֹͣ��Ӧ
	$.stopEvent=function(event){
		if(event){
			(event && event.stopPropagation) ? event.stopPropagation() : (event.cancelBubble = true);
			(event && event.preventDefault) ? event.preventDefault() : (event.returnValue = false);
		}
	}
	//  �¼�����
	var eventSubscribeBox={};
	function eventSubscribe(type,fn){
		eventSubscribeBox[type]=eventSubscribeBox[type]||[];
		eventSubscribeBox[type].push(fn);				
	}
	function eventSpeaker(type,evt){
		var box=eventSubscribeBox[type];
		if(box){
			var i=box.length;
			while(i){
				i--;
				box[i](evt)
			}
		}
	}

/*
* ��������ģ��
*/

	//�л�����
	$('.switchCity').click(function(){
		var arrow = $(this).find('em').eq(0);
		$('.cityList').is(':visible') ? hide() : show();
		//����б�֮��ĵط������б�
		$(document).bind('click', function(e){
			var $clicked = $(e.target);
			(! $clicked.parents().hasClass("selectCity")) && hide();
		});
		//�������֮�������б�
		$("#cityWinUl li p a").bind('click', function(e){
			hide();
		});
		function show(){
			arrow.removeClass('arrowDown');
			arrow.addClass('arrowUp');
			$('.cityList').show("fast");
		}
		function hide(){
			arrow.removeClass('arrowUp');
			arrow.addClass('arrowDown');
			$('.cityList').hide("fast");
		}
	});

	// ѡ������  selectCarCenter.js
	require.registar('selectCarCenter',function(exports){
		
		var configs={el:'#cp_xczx .select_search_box'};
		var getId=function(id){return document.getElementById(id||'')};
		configs.getApi=function(key,id){
			var api={
				'brand':'//js.data.auto.qq.com/car_public/1/manufacturer_list_json.js',
				'serial':'//js.data.auto.qq.com/car_manufacturer/'+id+'/serial_list_json.js',
				'serialDetail':'//data.auto.qq.com/car_serial/'+id,
				'brandSearch':'//cgi.data.auto.qq.com/php/search.php?brand_id='+id
			}
			return api[key]||'';
		}

		function select(options){
			var aClass='subItemBtnActive';
			var selector=options.selector||'';
			var module='_'+Math.random();
			var el=$(selector);
			var btn=options.btn;
			var popBody=btn.siblings('div');
			
			function blur(){
				popBody.removeClass(aClass).hide();
				$(document.documentElement).unbind('click',blur);
			}
			function show(){
				popBody.addClass(aClass).show();
				$(document.documentElement).bind('click',blur);					
			}
			btn.bind('click',function(e){
				$.stopEvent(e);
				eventSpeaker('click',module);
				if(popBody.children('div').children('div').children().length){
					return popBody.hasClass(aClass)?blur():show();
				}
			});
			
			eventSubscribe('click',function(active){
				if(active!=module)blur();
			});
		}
		
		function subSelect(event,type){
			var option=$(event.target).closest('a');
			var inputBox=$(event.target).closest('.select_item').children('.xc_select_btn');
			var isBrand=!!$(event.target).closest('.brand').length;
			if(option.length){
				var val=option.attr('data-value')||'';
				var valArr=val.split(',');
				if(valArr.length==2){
					var valId=valArr[0],valName=valArr[1];
					inputBox.attr('data-value',val).children('span').text(valName);
					isBrand&&setTimeout(function(){getSerial(valId)},0);;
				}
			}
		}
		
		var getBrand= exports.getBrand=function(){		
			$.getScript(configs.getApi('brand'),parse);
			
			function parse(){
				var rs=new Array();
				if(window.oManufacturerData){
					var tmp={}
					$.each(oManufacturerData.arrManufacturer,function(index,item){
						var bLetter=item.FirstLetter;
						var sName=item.Name;
						!tmp[bLetter]&&(tmp[bLetter]=['<span class="">'+bLetter+'</span>']);
						tmp[bLetter].push('<a href="javascript:;" data-value="'+item.ID+','+sName+'">'+sName+'</a>');
					})
					for(var key in tmp)rs.push('<div class="pp_ops_item">'+(tmp[key].join('')||'')+'</div>');
					$(configs.el).find('.pp_ops_list').html(rs.join('')).bind('click',subSelect);
				}
			}
		}
		
		var getSerial=exports.getSerial=function(brandId){
			$.getScript(configs.getApi('serial',brandId),parse);
			
			function parse(){
			//debugger;
				var rs=new Array('<ul><li><a href="javascript:;" data-value="0,\u9009\u62e9\u8f66\u7cfb" >\u9009\u62e9\u8f66\u7cfb</a></li>')
				//console.log(configs.getApi('serial',brandId));
				if(window.oManufacturerSerialData){
					var tmp={}
					$.each(oManufacturerSerialData.arrSerial,function(index,item){
						var bName=item.BrandName;
						var sName=item.Name;
						!tmp[bName]&&(tmp[bName]=['<li><span>'+bName+'</span></li>']);
						tmp[bName].push('<li><a href="javascript:;" title="'+sName+'" data-value="'+item.ID+','+sName+'">'+sName+'</a></li>');
					})
					for(var key in tmp)rs.push(tmp[key].join('')||'');
					rs.push('</ul>')
					$(configs.el).find('.cx_ops_list').html(rs.join('')).unbind('click').bind('click',subSelect).find('a').first().trigger('click');				
				}
			}	
		}
		
		exports.submit=function(event){
			$.stopEvent(event);
			var brand=[],serial=[],url=''
			$(configs.el).find('.xc_select_btn').each(function(index,item){
				var value=$(item).attr('data-value')||'';
				if($(item).closest('.brand').length){
					brand=value.split(',');
				}else{				
					serial=value.split(',');
				}
			});
			if(brand.length!==2){alert('\u8bf7\u9009\u62e9\u54c1\u724c\u6216\u8f66\u7cfb');return }
				url=configs.getApi('brandSearch',brand[0]);
			if(+serial[0]){
				url=configs.getApi('serialDetail',serial[0]);
			}
			window.open(url);
		}
		
		exports.init=function(opts){
			$.extend(configs,opts);
			$('<style type="text/css">.pp_ops_win, .cx_ops_win{width:100%;*position:relative;}</style>').appendTo('body');
			this.getBrand();
			$(configs.el).find('.select_item').each(function(){
				select({selector:$(this),btn:$(this).find('.xc_select_btn').attr('data-value','')});
			});
			$(configs.el).find('.search_btn').bind('click',this.submit);
		}
	});

	// ��������
	require.registar('visitHistory',function(exports){
		exports.init=function(el){
			var history= $.cookie("wz_autoapp_ReviewSerials")||'',visitLink=['<span><em class="eye"></em>\u66fe\u7ecf\u770b\u8fc7:</span>'];
			history=history.split("|").reverse();
			$.each(history,function(a,b){
				var item;
				b&&(item=b.split(","));
				if(item && item.length==3){
					visitLink.push('<a target="_blank"  href="http://data.auto.qq.com/car_serial/'+item[1]+'">'+item[0]+'</a>');
				}					
			});
			visitLink.length>1&&$(el).find('.history_links').append(visitLink.splice(0,6).join(''));
		}	
	});

	//ÿ��ͷ���Ҳ����
	function AutoAcrollInit(obj){
		var liNum = $(obj).find("li").length;
		if(liNum <= 3){
			$(obj).css({
				width:155 * liNum + "px"
			});
		}else{
			$(obj).css({
				width:155 * 3 + "px"
			});
			$(obj).find("ul").css({
				width:155 * liNum + "px"
			})
			setInterval(function(){
				$(".toutiaoAD").find("ul").animate({
					marginLeft:"-155px"
				},500,function(){
					$(this).css({
						marginLeft:"0"
					}).find("li:first").appendTo(this);
				});
			},3000);
		}
	}
	AutoAcrollInit(".toutiaoAD");

	$(function(){
		require('selectCarCenter').init(); //ѡ������
		$('#cp_cxdq').length && require('visitHistory').init('#cp_cxdq'); //�����ʷ
		$('.search_ipt').length && $.getScript('//mat1.gtimg.com/auto/2014/js/auto.dev.js'); //��������
	})

	//�����б�
	$(".newsList li:nth-child(odd)").addClass("altRow");
	$(".newsList ul li").hover(
		function(){$(this).addClass("hover");},
		function(){$(this).removeClass("hover");}
	);
	$(".newFoot .share").hover(
		function(){
			$(this).find(".shareList").fadeIn("fast");
			$(this).addClass("hover");
		},
		function(){
			$(this).find(".shareList").fadeOut("slow");
			$(this).removeClass("hover");
		}
	);
	$(".newFoot .comment").hover(
		function(){$(this).addClass("hover");},
		function(){$(this).removeClass("hover");}
	);

	/* ѯ�� */
	var ask_brand_id = 0;
	var ask_serial_id = 0;
	//����Ʒ��������
	function askBrand(){
		$.ajax({
			url:"//js.data.auto.qq.com/car_public/1/manufacturer_list_json.js",
			dataType:"script",
			success: function (){
				var brand = oManufacturerData.arrManufacturer;
				if(brand && brand.length > 0){
					var oSelect = $('#def_brand');
					var oOption = $('<option selected="selected" value="0">\u9009\u62E9\u54C1\u724C</option> ');
					oSelect.append(oOption);
					for(var n=0; n<brand.length; n++){
						var oOption = $('<option value="'+brand[n].ID+'">'+brand[n].FirstLetter+'&nbsp;&nbsp;'+brand[n].Name+'</option>');
						oSelect.append(oOption);
					}
				}else{
					console.log("\u8BE2\u4EF7\u54C1\u724C\u6570\u636E\u51FA\u9519\u3002");
				}
			}
		});
	}
	//���ɳ�ϵ������
	function askSerial(){
		var oSelect = $('#def_serial');
		var oOption = $('<option selected="selected" value="0">\u9009\u62E9\u8F66\u7CFB</option> ');
		oSelect.append(oOption);
	}
	//ѡ��Ʒ��
	var askBrandChange = function(){
		var selectedValue = $(this).val();
		ask_brand_id = selectedValue;
		askBrandID = selectedValue;
		if(parseInt(selectedValue) != 0){
			$.ajax({
				url:"//js.data.auto.qq.com/car_manufacturer/"+selectedValue+"/serial_list_json.js",
				dataType:"script",
				success: function (){
					var serial = oManufacturerSerialData.arrSerial;
					if(serial && serial.length > 0){
						var oSelect = $('#def_serial');
						oSelect.empty();
						var oOption = $('<option selected="selected" value="0">\u9009\u62E9\u8F66\u7CFB</option> ');
						oSelect.append(oOption);
						for(var n=0; n<serial.length; n++){
							var oOption = $('<option value="'+serial[n].ID+'">'+serial[n].Name+'</option>');
							oSelect.append(oOption);
						}
					}else{
						console.log("\u8BE2\u4EF7\u8F66\u7CFB\u6570\u636E\u51FA\u9519\u3002");
					}
				}
			});
		}
	};
	//ѡ��ϵ
	var askSerialChange = function(){
		var _url= window.location.href;
		ask_serial_id = $(this).val();
		if(ask_brand_id != 0 && ask_serial_id != 0){
			var askUrl = 'http://auto.qq.com/buycar/askprice.htm?type=local_aichetuan&brand_id='+ask_brand_id+'&serial_id='+ask_serial_id+'&autobussboss=askprice|local_search|2&url='+_url;
			$(".askBt").attr("href",askUrl);
			$(".askBt").attr("target","_blank");
		}else{
			$(".askBt").attr("target","_self");
			alert("\u8BF7\u9009\u62E9\u54C1\u724C\u8F66\u7CFB\u3002");
			return false;
		}
	};
	askBrand();
	askSerial();
	$("#def_brand").unbind("change", askBrandChange).bind("change", askBrandChange);
	$("#def_serial").unbind("change", askSerialChange).bind("change", askSerialChange);

})(window.jQuery);

//������Ѷ΢��
function postToWb(title,pic,url){//����˵����title˵�����֣�picСͼƬ��url����Ҫ���ӵ��ĵ�ַ
	var _t = encodeURI(title);//��ǰҳ��title��ʹ��document.title
	var _url = encodeURIComponent(url);//��ǰҳ�����ӵ�ַʹ��document.location
	var _appkey = 801298467;//�����Ѷ��õ�appkey�������appkey,ֱ��д��keyֵ�����磺_appkey=123456
	var _pic = encodeURI(pic);//�����磺var _pic='ͼƬurl1|ͼƬurl2|ͼƬurl3....��
	var _site = '';//�����վ��ַ
	var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic;
	w = window.screen.width, h = window.screen.height;
	window.open( _u,'������Ѷ΢��', "height=480,width=608,top=" + (h-480)/2 + ",left=" + (w-608)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}

//����QQ�ռ�
function postToQzone(title,summary,pic,url){//����˵����title���⣬summaryժҪ��picСͼƬ��url����Ҫ���ӵ��ĵ�ַ
	var p = {
		url:url,
		showcount:'1',/*�Ƿ���ʾ��������,��ʾ��'1'������ʾ��'0' */
		desc:'',/*Ĭ�Ϸ�������(��ѡ)*/
		summary:summary,/*����ժҪ(��ѡ)*/
		title:title,/*�������(��ѡ)*/
		site:'',/*������Դ �磺��Ѷ��(��ѡ)*/
		pics:pic, /*����ͼƬ��·��(��ѡ)*/
		style:'203',
		width:98,
		height:22
	};
	var s = [];
	for(var i in p){
		s.push(i + '=' + encodeURIComponent(p[i]||''));
	}
	var _u='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+s.join('&');
	w = window.screen.width, h = window.screen.height;
	window.open( _u,'����QQ�ռ��������', "height=580,width=708,top=" + (h-580)/2 + ",left=" + (w-708)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}

//��������΢��
function shareToSina(articleTitle,articleURL){
	var url = "http://v.t.sina.com.cn/share/share.php",
	_url = articleURL,
	_title = articleTitle,
	_appkey = '',
	_ralateUid = '',
	c = '', pic = [];
	w = window.screen.width, h = window.screen.height;
	c = url + "?url=" + encodeURIComponent(_url) + "&appkey=" + _appkey + "&title=" + _title + "&pic" + pic + "&ralateUid=" + _ralateUid + "&language=";
	window.open(c, "shareQQ", "height=480,width=608,top=" + (h-480)/2 + ",left=" + (w-608)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}

//����QQ����
function postToQQEmail(title,summary,pic,url){
	var p = {
		url:url,/*��ǰҳ��url��ʹ��location.href*/
		to:'qqmail',
		desc:'', /*Ĭ�Ϸ�������(��ѡ)*/
		summary:summary,/*ժҪ(��ѡ)*/
		title:title,/*�������(��ѡ)*/
		site:'',/*������Դ �磺��Ѷ��(��ѡ)*/
		pics:pic /*����ͼƬ��·��(��ѡ)*/
	};
	var s = [];
	for(var i in p){
		s.push(i + '=' + encodeURIComponent(p[i]||''));
	}
	w = window.screen.width, h = window.screen.height;
	var _u = 'http://mail.qq.com/cgi-bin/qm_share?'+ s.join("&");
	window.open( _u,'����QQ����', "height=580,width=708,top=" + (h-580)/2 + ",left=" + (w-708)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
};

//��������
function shareToRenren(articleTitle,articleURL){
	var url = "http://widget.renren.com/dialog/share",
	_url =articleURL,
	_title =articleTitle,
	c = '', pic = [],
	w = window.screen.width, h = window.screen.height;
	c = url + "?resourceUrl=" + _url + "&title=" + _title + "&charset=GB2312";
	window.open(c, "shareQQ", "height=480,width=608,top=" + (h-480)/2 + ",left=" + (w-608)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}

//��������
function shareToKaixin(articleTitle,articleURL){
	var url = "http://www.kaixin001.com/rest/records.php",
	_url = articleURL,
	_title = articleTitle,
	c = '', pic = [],
	w = window.screen.width, h = window.screen.height;
	c = url + "?content=" + encodeURIComponent(_title) + "&url=" + _url + "&&starid=&aid=&style=11&t=10";
	var win = window.open(c, "shareQQ", "height=480,width=608,top=" + (h-480)/2 + ",left=" + (w-608)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}
/*  |xGv00|d7afb8fbac94f44dbe74d352e712a3b1 */