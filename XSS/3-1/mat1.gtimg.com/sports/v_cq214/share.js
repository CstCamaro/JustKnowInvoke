// JavaScript Document

//����	
$(document).ready(function(e) {
	var share_html = '<ul class="shareBtn16 onShares">\
						  <li class="shareButton share2wb"><a href="javascript:void(0)" class="qqweibo">��Ѷ΢��</a></li>\
						  <li class="shareButton share2qzone"><a href="javascript:void(0)" class="qzone">QQ�ռ�</a></li>\
						  <li class="shareButton share2qq"><a href="javascript:void(0)" class="qq">QQ����</a></li>\
						  <li class="shareButton share2sina"><a href="javascript:void(0)" class="sinaweibo">����΢��</a></li>\
					  </ul>';
	$('.J_btnShare').hover(function(){
		if($(this).find('.onShares').length){
			$(this).find('.onShares').show();
		}else{
			$(this).append(share_html);
		}
	}, function(){
        var _this = this;
		window.setId = setTimeout(function(){
			$('.onShares', _this).hide();
		}, 500);
	})
    $(document).on('click', '.onShares li a', function(e){
		e.preventDefault();
		var $this = $(this),
			className = $this.attr('class'),
			$shareBox = $this.parents('.J_shareBox');
		var title = $shareBox.find('.J_title').text(),
			url = $shareBox.find('.J_url').attr('href'),
			pic = $shareBox.find('.J_src').attr('src'),
			dec = $shareBox.find('.J_dec').text();
		var site = window.share_site? window.share_site:'';
		switch(className){
			case 'qzone':
				postToQzone(title, dec, pic, url, site);
				break;
			case 'sinaweibo':
				shareToSina(title, dec, pic, url);
				break;
			case 'renren':
				shareToRenren(title, url, site);
				break;
			case 'qqemail':
				postToQQEmail(title, dec, pic, url, site);
				break;
			case 'qqweibo':
				postToWb(title, pic, url);
				break;
			case 'kaixin':
				shareToKaixin(title, url, site);
				break;
			case 'wechat':
				shareToWechat(url);
				break;
			case 'qq':
				shareToQQ(title, dec, pic, url, site);
				break;
		}
	});
	
});


<!--������Ѷ΢��--> 
//����˵����title˵�����֣�picСͼƬ��url����Ҫ���ӵ��ĵ�ַ
function postToWb(title,pic,url){
	var _t = encodeURI(title);//��ǰҳ��title��ʹ��document.title
	var _url = encodeURIComponent(url);//��ǰҳ�����ӵ�ַʹ��document.location
	var _appkey = 801564356;//�����Ѷ��õ�appkey�������appkey,ֱ��д��keyֵ�����磺_appkey=123456
	var _pic = encodeURI(pic);//�����磺var _pic='ͼƬurl1|ͼƬur�ҵ�Ƶ����ҳ�İ�l2|ͼƬurl3....��
	var _site = encodeURIComponent(location.href);//�����վ��ַ
	var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic;
	w = window.screen.width, h = window.screen.height;
	window.open( _u,'������Ѷ΢��', "height=480,width=608,top=" + (h-480)/2 + ",left=" + (w-608)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}
 
<!--����QQ�ռ�--> 
//����˵����title���⣬summaryժҪ��picСͼƬ��url����Ҫ���ӵ��ĵ�ַ
function postToQzone(title,summary,pic,url,site){
	var p = {
		url:url,
		showcount:'1',/*�Ƿ���ʾ��������,��ʾ��'1'������ʾ��'0' */
		//desc:'',/*Ĭ�Ϸ�������(��ѡ)*/
		summary:summary||'',/*����ժҪ(��ѡ)*/
		title:title,/*�������(��ѡ)*/
		site:site||'',/*������Դ �磺��Ѷ��(��ѡ)*/
		pics:pic, /*����ͼƬ��·��(��ѡ)*/
		style:'203',
		width:98,
		height:22
	};
	var s = [];
		for(var i in p){
		s.push(i + '=' + encodeURIComponent(p[i]||''));
	}
	var _u='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+s.join('&'),
		w = window.screen.width,
		h = window.screen.height;
		window.open( _u,'����QQ�ռ��������', "height=580,width=708,top=" + (h-580)/2 + ",left=" + (w-708)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}

<!--����QQ����--> 
function postToQQEmail(title,summary,pic,url,site){
	var p = {
		url:url,/*��ǰҳ��url��ʹ��location.href*/
		to:'qqmail',
		desc:'', /*Ĭ�Ϸ�������(��ѡ)*/
		summary:summary,/*ժҪ(��ѡ)*/
		title:title,/*�������(��ѡ)*/
		site:site||'',/*������Դ �磺��Ѷ��(��ѡ)*/
		pics:pic /*����ͼƬ��·��(��ѡ)*/
	};
	var s = [];
		for(var i in p){
		s.push(i + '=' + encodeURIComponent(p[i]||''));
	}
	w = window.screen.width, h = window.screen.height;
	var _u = 'http://mail.qq.com/cgi-bin/qm_share?'+ s.join("&");
	window.open( _u, '����QQ����', "height=580,width=708,top=" + (h-580)/2 + ",left=" + (w-708)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
};


<!--��������΢��--> 
function shareToSina(articleTitle,articleURL){
	var url = "http://v.t.sina.com.cn/share/share.php",
	_url = articleURL,
	_title = articleTitle,
	_appkey = '',
	_ralateUid = '',
	c = '',
	w = window.screen.width, h = window.screen.height;
	c = url + "?url=" + encodeURIComponent(_url) + "&appkey=" + _appkey + "&title=" + _title + "&ralateUid=" + _ralateUid + "&language=";

	window.open(c, "��������΢��", "height=480,width=608,top=" + (h-480)/2 + ",left=" + (w-608)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}		

<!--��������--> 
function shareToKaixin(articleTitle,articleURL,formsite){
	var url = "http://www.kaixin001.com/rest/records.php",
	_url = articleURL,
	_title = articleTitle,
	c = '',
	w = window.screen.width, h = window.screen.height;
	c = url + "?content=" + encodeURIComponent(_title) + "&url=" + _url + "&from="+ encodeURIComponent(formsite) +"&starid=&aid=&style=11&t=10";
	var win = window.open(c, "����������", "height=480,width=608,top=" + (h-480)/2 + ",left=" + (w-608)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}

<!--��������--> 
function shareToRenren(articleTitle,articleURL){
	var url = "http://widget.renren.com/dialog/share",
	_url =articleURL,
	_title =articleTitle,
	c = '',


	w = window.screen.width, h = window.screen.height;
	
	c = url + "?resourceUrl=" + _url + "&title=" + _title + "&charset=GB2312";

	window.open(c, "����������", "height=480,width=608,top=" + (h-480)/2 + ",left=" + (w-608)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");
}

<!--����΢��--> 
function shareToWechat(url){
	var $popup = $('#bdshare_weixin_qrcode_dialog');
	$popup.show().css({left:($(window).width()*0.5)+220, top:($(window).height()*0.5)-($popup.height()*0.5)});
	$('#bdshare_weixin_qrcode_dialog_qr').html('').qrcode(url+ '#' +window.location.hash.substr(1));
	$('.bd_weixin_popup_close').on('click', function(e){
		e.preventDefault();
		$popup.hide();
	});
}

<!--����QQ--> 
function shareToQQ(title,summary,pic,url,site){	
	var p = {
			url:url, /*��ȡURL���ɼ������Է���QQ��ʶ������ͳ��*/
			desc:'', /*��������(���Ӧģ���û��Ի�),֧�ֶ���������չ�֣�ʹ��|�ָ���*/
			title:title, /*�������(��ѡ)*/
			summary:summary, /*����ժҪ(��ѡ)*/
			pics:pic, /*����ͼƬ(��ѡ)*/
			flash: '', /*��Ƶ��ַ(��ѡ)*/
			site:site||'', /*������Դ(��ѡ) �磺QQ����*/
			style:'201',
			width:32,
			height:32
		};
	var s = [];
	for(var i in p){
		s.push(i + '=' + encodeURIComponent(p[i]||''));
	}
	var _u='http://connect.qq.com/widget/shareqq/index.html?'+s.join('&'),
		w = window.screen.width,
		h = window.screen.height;
		window.open( _u,'����QQ����', "height=600,width=800,top=" + (h-600)/2 + ",left=" + (w-800)/2 + ",toolbar=no,menubar=no,resizable=yes,location=yes,status=no");	
}
/*  |xGv00|e2d4539745b4e31adb8910c08cccae90 */