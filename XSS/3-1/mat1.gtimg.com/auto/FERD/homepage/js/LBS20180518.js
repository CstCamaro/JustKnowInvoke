/***ip���򱣴�ռ�**/
var citys = {};
citys.cityID = '',
citys.ipUrl = "//fw.qq.com/ipaddress";
citys.exist = false;
citys.list = [
	{
		name:"����",
		cn:"beijing",
		cityId:54
	},{
		name:"����",
		cn:"shenyang",
		cityId:262
	},{
		name:"�Ͼ�",
		cn:"nanjing",
		cityId:220
	},{
		name:"����",
		cn:"hangzhou",
		cityId:395
	},{
		name:"�Ϻ�",
		cn:"shanghai",
		cityId:321
	},{
		name:"����",
		cn:"fuzhou",
		cityId:56
	},{
		name:"����",
		cn:"guangzhou",
		cityId:68
	},{
		name:"�人",
		cn:"wuhan",
		cityId:173
	},{
		name:"��ɳ",
		cn:"changsha",
		cityId:179
	},{
		name:"�ɶ�",
		cn:"chengdu",
		cityId:302
	},{
		name:"����",
		cn:"chongqing",
		cityId:55
	},{
		name:"����",
		cn:"xian",
		cityId:296
	},{
		name:"֣��",
		cn:"zhengzhou",
		cityId:161
	},{
		name:"����",
		cn:"jinan",
		cityId:337
	},
	{
		name:"����",
		cn:"dalian",
		cityId:254
	},
	{
		name:"��ݸ",
		cn:"dongguan",
		cityId:66
	},
	{
		name:"��ɽ",
		cn:"foshan",
		cityId:67
	},
	{
		name:"�Ϸ�",
		cn:"hefei",
		cityId:46
	},
	{
		name:"����",
		cn:"kunming",
		cityId:385
	},
	{
		name:"�ϲ�",
		cn:"nanchang",
		cityId:235
	},
	{
		name:"�ൺ",
		cn:"qingdao",
		cityId:342
	},
	{
		name:"����",
		cn:"shenzhen",
		cityId:78
	},
	{
		name:"ʯ��ׯ",
		cn:"shijiazhuang",
		cityId:200
	},
	{
		name:"̫ԭ",
		cn:"taiyuan",
		cityId:328
	},
	{
		name:"����",
		cn:"xiamen",
		cityId:63
	},
	{
		name:"����",
		cn:"guiyang",
		cityId:102
	},
	{
		name:"����",
		cn:"ningbo",
		cityId:400
	},
	{
		name:"��ɽ",
		cn:"zhongshan",
		cityId:82
	},
	{
		name:"�麣",
		cn:"zhuhai",
		cityId:85
	},
	{
		name:"տ��",
		cn:"zhanjiang",
		cityId:84
	},
	{
		name:"����",
		cn:"jiangmen",
		cityId:72
	},
	{
		name:"����",
		cn:"huizhou",
		cityId:69
	},
	{
		name:"�˲�",
		cn:"yichang",
		cityId:178
	},
	{
		name:"����",
		cn:"nanning",
		cityId:96
	},
	{
		name:"��",
		cn:"jinhua",
		cityId:398
	},
	{
		name:"����",
		cn:"huzhou",
		cityId:396
	},
	{
		name:"����",
		cn:"wenzhou",
		cityId:404
	},
	{
		name:"����",
		cn:"jiaxing",
		cityId:397
	},
	{
		name:"����",
		cn:"shaoxing",
		cityId:402
	},
	{
		name:"̨��",
		cn:"taizhou",
		cityId:403
	},
	{
		name:"����",
		cn:"baoding",
		cityId:193
	},
	{
		name:"��̨",
		cn:"xingtai",
		cityId:202
	},
	{
		name:"����",
		cn:"luzhou",
		cityId:310
	},
	{
		name:"�ػʵ�",
		cn:"qinhuangdao",
		cityId:199
	},
	{
		name:"Т��",
		cn:"xiaogan",
		cityId:175
	},
	{
		name:"��ɽ",
		cn:"tangshan",
		cityId:201
	},
	{
		name:"����",
		cn:"mianyang",
		cityId:312
	},
	{
		name:"ï��",
		cn:"maoming",
		cityId:73
	},
	{
		name:"����",
		cn:"yangjiang",
		cityId:80
	},
	{
		name:"��ͨ",
		cn:"nantong",
		cityId:221
	},
	{
		name:"����",
		cn:"suzhou",
		cityId:222
	},
	{
		name:"����",
		cn:"xuzhou",
		cityId:226
	},
	{
		name:"����",
		cn:"wuxi",
		cityId:225
	},
	{
		name:"����",
		cn:"changzhou",
		cityId:217
	},
	{
		name:"��",
		cn:"zhenjiang",
		cityId:229
	},
	{
		name:"���",
		cn:"tianjin",
		cityId:350
	},
	{
		name:"��ˮ",
		cn:"hengshui",
		cityId:196
	},
	{
		name:"ʮ��",
		cn:"shiyan",
		cityId:169
	},
	{
		name:"����",
		cn:"cangzhou",
		cityId:195
	},
	{
		name:"�γ�",
		cn:"yancheng",
		cityId:227
	},
	{
		name:"����",
		cn:"handan",
		cityId:197
	},
	{
		name:"Ȫ��",
		cn:"quanzhou",
		cityId:61
	},
	{
		name:"�ϳ�",
		cn:"nanchong",
		cityId:313
	},
	{
		name:"����",
		cn:"huaian",
		cityId:218
	},
	{
		name:"����",
		cn:"yangzhou",
		cityId:228
	},
	{
		name:"̩��",
		cn:"tz",
		cityId:224
	},
	{
		name:"����",
		cn:"bengbu",
		cityId:38
	},
	{
		name:"�ߺ�",
		cn:"wuhu",
		cityId:51
	},
	{
		name:"����",
		cn:"nanyang",
		cityId:151
	},
	{
		name:"����",
		cn:"hengyang",
		cityId:183
	},
	{
		name:"�е�",
		cn:"chengde",
		cityId:194
	},
	{
		name:"��ɽ",
		cn:"huangshan",
		cityId:453
	},
	{
		name:"����",
		cn:"dali",
		cityId:381
	},
	{
		name:"����",
		cn:"yueyang",
		cityId:1474
	},
	{
		name:"����",
		cn:"qujing",
		cityId:390
	},
	{
		name:"����",
		cn:"luoyang",
		cityId:149
	},
	{
		name:"����",
		cn:"jinan",
		cityId:337
	},
	{
		name:"����",
		cn:"lanzhou",
		cityId:115
	},
	{
		name:"����",
		cn:"haikou",
		cityId:130
	},
	{
		name:"��³ľ��",
		cn:"wlmq",
		cityId:369
	},
	{
		name:"����",
		cn:"jining",
		cityId:338
	},
	{
		name:"����",
		cn:"xiangyang",
		cityId:174
	},
	{
		name:"�Ͳ�",
		cn:"zibo",
		cityId:349
	},
	{
		name:"Ϋ��",
		cn:"weifang",
		cityId:346
	},
	{
		name:"����",
		cn:"huaibei",
		cityId:44
	},
	{
		name:"����",
		cn:"heze",
		cityId:336
	},
	{
		name:"����",
		cn:"xianning",
		cityId:176
	},
	{
		name:"�ع�",
		cn:"shaoguan",
		cityId:77
	},
	{
		name:"����",
		cn:"xining",
		cityId:288
	},
	{
		name:"����",
		cn:"linyi",
		cityId:341
	},
	{
		name:"����",
		cn:"fuyang",
		cityId:42
	},
	{
		name:"����",
		cn:"yining",
		cityId:369
	},
	{
		name:"��ɽ",
		cn:"mas",
		cityId:48
	},{
		name:"������",
		cn:"haerbin",
		cityId:208
	},{
		name:"����",
		cn:"jilin",
		cityId:244
	},{
		name:"����",
		cn:"dezhou",
		cityId:334
	},{
		name:"��̨",
		cn:"yantai",
		cityId:347
	},{
		name:"����",
		cn:"changchun",
		cityId:243
	},{
		name:"����",
		cn:"anqing",
		cityId:36
	},{
		name:"����",
		cn:"hami",
		cityId:359
	},{
		name:"����",
		cn:"xuancheng",
		cityId:52
	},{
		name:"�˱�",
		cn:"yibin",
		cityId:318
	},{
		name:"̩��",
		cn:"taian",
		cityId:344
	},{
		name:"�ĳ�",
		cn:"liaocheng",
		cityId:340
	},{
		name:"����",
		cn:"linyi",
		cityId:341
	},{
		name:"̩��",
		cn:"tz",
		cityId:224
	},{
		name:"��̶",
		cn:"xiangtan",
		cityId:186
	},{
		name:"�ڽ�",
		cn:"neijiang",
		cityId:314
	},{
		name:"����",
		cn:"deyang",
		cityId:304
	},{
		name:"��ɽ",
		cn:"leshan",
		cityId:308
	},{
		name:"��ԭ",
		cn:"songyuan",
		cityId:246
	},{
		name:"��ƽ",
		cn:"siping",
		cityId:247
	},{
		name:"�ӱ�",
		cn:"yanji",
		cityId:249
	},{
		name:"����",
		cn:"ganzhou",
		cityId:231
	},{
		name:"�˳�",
		cn:"yuncheng",
		cityId:331
	},{
		name:"�麣",
		cn:"zhuhai",
		cityId:85
	},{
		name:"����",
		cn:"ziyang",
		cityId:319
	},{
		name:"�㰲",
		cn:"guangan",
		cityId:306
	},{
		name:"����",
		cn:"luan",
		cityId:47
	},{
		name:"���Ƹ�",
		cn:"lyg",
		cityId:219
	},{
		name:"����",
		cn:"zhaoqing",
		cityId:83
	},{
		name:"�ܿ�",
		cn:"zhoukou",
		cityId:159
	},{
		name:"��ɫ",
		cn:"baise",
		cityId:87
	},{
		name:"����",
		cn:"wuzhou",
		cityId:98
	},{
		name:"����",
		cn:"chenzhou",
		cityId:181
	},{
		name:"�е�",
		cn:"chengde",
		cityId:194
	},{
		name:"�żҿ�",
		cn:"zjk",
		cityId:203
	},{
		name:"�ȷ�",
		cn:"langfang",
		cityId:198
	},{
		name:"����",
		cn:"baoding",
		cityId:193
	},{
		name:"��",
		cn:"zhenjiang",
		cityId:229
	},{
		name:"��ͬ",
		cn:"datong",
		cityId:322
	},{
		name:"����",
		cn:"yinchuan",
		cityId:280
	},{
		name:"���ͺ���",
		cn:"huhehaote",
		cityId:270
	},{
		name:"ƽ��ɽ",
		cn:"pingdingshan",
		cityId:153
	},{
		name:"����",
		cn:"haikou",
		cityId:130
	}
];
citys.curCity = {
	name:'ȫ��',
	cn:''
};

//��ȡ�ӿ�����
citys.getUrl = function(key,area,id){
	var add ={
        'hq':'//' + area +'.auto.qq.com/15index/15foc/hangqing.htm',
        'jj':'//wecar.qq.com/api/lowprice/hotLowPriceSerial?cityid=' + id + '&pagesize=5&format=jsonp',
        'hqall':'//auto.qq.com/15index/15foc/hangqing.htm',
        'all':'//wecar.qq.com/api/AutoHomePage/getInfos?city_id=' + id + '&format=jsonp'
    };
    return add[key];
};
//��ȡ��������
citys.gethqpage = function(_url){
	$.ajax({
	  	type: 'get',
	  	url:_url,
	  	dataType:'html',
	  	scriptCharset:'gb2312',
	  	success:function(data){
	  		//console.log(data)
	  	}
	});
};
//��ȡ��������
citys.getjjpage = function(_url){
	$.ajax({
	  	type: 'GET',
	  	url:_url,
	  	dataType:'jsonp',
	  	success:function(data){
	  		var tpl = '',_data = data.data,remainDay=0,d,seconds=0;
	  		tpl += '<table><thead><tr><th class="fst">���۳�ϵ</th><th>���۷���</th><th>�۸�</th><th class="lst">�ʱ��</th></tr></thead><tbody>';
	  		if(_data.length > 5){
				_data.length =5;
			}
			for(var i = 0; i < _data.length; i++){
	  			/*d = new Date();
				seconds = Math.floor(d.getTime()/1000);
	  			remainDay = Math.floor((_data[i].send_time - seconds)/86400);
	  			if(remainDay<0){
	  				remainDay = 0;
	  			}*/
	  			tpl += '<tr><td class="tl"><a href="//auto.qq.com/jiangjia.htm?brandid=' + _data[i].sbrand_id + '&serialid=' + _data[i].sserial_id + '&cityid=' + _data[i].scity_id + '&pgv_ref=article';
		  		tpl += '" target="_blank">'+ _data[i].FName +'</a></td>';
				tpl += '<td class="tc">' + _data[i].sdiscount_amount + '��<em class="share10-downbg"></em></td>';
				tpl += '<td class="tc">' + _data[i].sdiscount_price + '��</td>';
				tpl += '<td class="tr">' + _data[i].left_day + '��<td></tr>';
			}
			tpl += '</tbody></table>';
			$('#discount_price').html(tpl);
	  	}
	});
};
//��ȡ��������
citys.getbjpage = function(cityId) {
	var _url = '//wecar.qq.com/api/recomm/index?num=7&site=dwhome&provinceid=' + cityId + '?callback=call';
	var form = util.createPostContainer_flag(_url,function(_data){
		var list = _data.data;
		//console.log(list);
		var priceRangeMap = ['8������','8-12��','12-18��','18-25��','25-45��','45������'];
		var thead = '<thead><tr><th><a href="javascript:void(0);">��ϵ</a></th><th><a href="javascript:void(0);">����</a></th><th><a href="javascript:void(0);">�����̱���</a></th><th><a href="javascript:void(0);">ָ����</a></th><th><a href="javascript:void(0);">������</a></th></tr></thead>';
		var tpl = '';
		for(var k = 0; k< 6; k++){
			tpl += '<table summary="' + priceRangeMap[k] + '" style="display:';
			if(k == 0){
				tpl += 'table';
			}else{
				tpl += 'none';
			}
			tpl += '">'+ thead +'<tbody>';
			for(var j = 0; j< list[k].length; j++){
				if( j%2 == 0 ){
					tpl += '<tr class="altRow">';
				}else{
					tpl += '<tr>';
				}
				tpl += '<td><a href="' + list[k][j].model_url + '" target="_blank">' + list[k][j].serial_name  + '</a></td>';
				tpl += '<td><a href="' + list[k][j].model_url + '" target="_blank">' + list[k][j].model_name  + '</a></td>';
				tpl += '<td class="r"><strong><a href="' + list[k][j].model_url + '" target="_blank">' + list[k][j].shop_price  + '��</a></strong></td>';
				tpl += '<td class="r2"><span>' + list[k][j].guide_price  + '��</span></td>';
				tpl += '<td><a href="' + list[k][j].dealer_url + '" target="_blank">' + list[k][j].dealer_name  + '</a></td>';
				tpl += '<td class="r"><a href="' +list[k][j].model_url+ '" class="ask" target="_blank">ѯ��</a>';
				tpl += '<a class="drive" href="' +list[k][j].model_url+ '#drive" target="_blank">�Լ�</a></td>';
				tpl += '</tr>';
			}
			tpl += '</tbody></table>'
		}
		$(".areaprice .bd .priceCon").html(tpl);
	},'','','bj');
	form.submit();
};
//IP��ַ��λ
function fixPosition(){
	$.ajax({
		type:'GET',
		url:citys.ipUrl,
		scriptCharset:'gb2312',
		dataType:'script',
		success:function(){
			//console.log(IPData);
			var tem = IPData,add = '',href ='',area ='',cityId = '0',cn = '';
			if( $.trim(tem[3]).length == 0 ){
				add = ($.trim(tem[2])).replace(/��|��|ʡ/,"");
			}else{
				add = ($.trim(tem[3])).replace(/��|��|ʡ/,"");
			}
			for(var i = 0; i<citys.list.length ;i++){
				if(citys.list[i].name == add){
					area = citys.list[i].cn;
					cityId = citys.list[i].cityId;
					cn = citys.list.cn;
				}
			}
			//�差��������
			if((IPData[2].split("ʡ")[0] == '����') && (IPData[3].split("��")[0] == '�差')){
				area = "xiangyang";
				add = "����";
				cn = "xiangyang";
				cityId = 174;
			}
			//��λΪ�������޸�
			if((IPData[2].split("ʡ")[0] == '����') && (IPData[3].split("��")[0] == '����')){
				area = "dali";
				add = "����";
				cn = "dali";
				cityId = 381;
			}
			//Ȫ�ݶ�λ��Ȫ��
			if((IPData[2].split("ʡ")[0] == '����') && (IPData[3].split("��")[0] == 'Ȫ')){
				area = "quanzhou";
				add = "Ȫ��";
				cn = "quanzhou";
				cityId = 61;
			}

			//Ȫ�ݶ�λ��Ȫ��
			if((IPData[2].split("ʡ")[0] == '�½�') && (IPData[3].split("����")[0] == '����')){
				area = "hami";
				add = "����";
				cn = "hami";
				cityId = 359;
			}
			
			//�ӱ߶�λ���ӱ���
			if((IPData[2].split("ʡ")[0] == '����') && (IPData[3].split("��")[0] == '�ӱ�')){
				area = "yanji";
				add = "�ӱ�";
				cn = "yanji";
				cityId = 249;
			}
			
			citys.getIpInfo(citys.getUrl('all','',cityId),cn);
			href = '//' + area +'.auto.qq.com/';
			$('#position').html(add).parent().attr('href',href);
			if( !!area.length){
				//��ȡ��Ӧ���е����顢���ۡ�������Ϣ
				$("#cityHQ").html(add);
				$("#cityJJ").html(add);
				$("#cityBJ").html(add);
				citys.getbjpage(cityId);
				citys.getjjpage(citys.getUrl('jj','',cityId));
			//	citys.getEscMore(cityId);//2017.11.30 ��ֵ���ֳ���Ŀ��������
			}else{
				//��ȡ����վ����Ϣ
			}
		}
	});
};
fixPosition();
citys.getIpInfo =  function(_url){
	var hangqing = '',hangqingTemp='',shangjia = '',shangjiaTemp = '',chengxin = '',chengxinTemp1 = '',chengxinTemp2 = '',tips = '',tipsHead = '',tipsTemp1 = '',tipsTemp2 = '',tipsTemp3 = '',areaUrl = "//beijing.auto.qq.com/";
	$.ajax({
		type: 'GET',
		url:_url,
		dataType:'jsonp',
		jsonp:'callback',
		success:function(data){
			//console.log(data.data);
			hangqing = data.data[1]['gedi_hangqing'];
			hangqingTemp += '<h2><a target="_blank" href="' + data.data[1]['gedi_hangqing'][0].url;
			hangqingTemp += '">' + data.data[1]['gedi_hangqing'][0].title + '</a> <a target="_blank" href="'+ data.data[1]['gedi_hangqing'][1].url;
			hangqingTemp += '">' + data.data[1]['gedi_hangqing'][1].title + '</a></h2><ul>';
			hangqingTemp += '<li><a href="' + data.data[1]['gedi_hangqing'][2].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][2].title + '</a>| ';
			hangqingTemp += '<a href="' + data.data[1]['gedi_hangqing'][3].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][3].title + '</a></li>';
			hangqingTemp += '<li><a href="' + data.data[1]['gedi_hangqing'][4].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][4].title + '</a>| ';
			hangqingTemp += '<a href="' + data.data[1]['gedi_hangqing'][5].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][5].title + '</a></li>';
			hangqingTemp += '<li><a href="' + data.data[1]['gedi_hangqing'][6].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][6].title + '</a>| ';
			hangqingTemp += '<a href="' + data.data[1]['gedi_hangqing'][7].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][7].title + '</a></li>';
			hangqingTemp += '<li><a href="' + data.data[1]['gedi_hangqing'][8].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][8].title + '</a>| ' ;
			hangqingTemp += '<a href="' + data.data[1]['gedi_hangqing'][9].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][9].title + '</a></li>';
			hangqingTemp += '<li><a href="' + data.data[1]['gedi_hangqing'][10].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][10].title + '</a>| ';
			hangqingTemp += '<a href="' + data.data[1]['gedi_hangqing'][11].url + '" target="_blank">' + data.data[1]['gedi_hangqing'][11].title + '</a></li>';
			hangqingTemp + '</ul>';
			$("#hqInfo").html(hangqingTemp);
			shangjia = data.data[2]['shangjia_cuxiao'];
            //console.log(shangjia);
			for(var i = 0 ; i <= 4 ; i++){
				shangjiaTemp += '<li><a target="_blank" href="' + data.data[2]['shangjia_cuxiao'][i].url + '">' + data.data[2]['shangjia_cuxiao'][i].title + '</a></li>';
			}
			$("#cuxiao").html(shangjiaTemp);
			chengxin = data.data[3]['chengxin_dealer'];
			//console.log(chengxin);
			for(var m = 0 ; m <= 6 ; m++ ){
				chengxinTemp1 += '<li><div class="con"><div class="con-nr"><img src="' + data.data[3]['chengxin_dealer'][m].brand_url + '"> <p class="s4name">' + data.data[3]['chengxin_dealer'][m].dealer_name + '</p><p class="s4tel"><span>[�绰]</span>' + data.data[3]['chengxin_dealer'][m].phone + '</p><a href="' + data.data[3]['chengxin_dealer'][m].consult_url + '" class="s4contact" target="_blank">������ѯ</a></div><div class="ewm"><img src="' + data.data[3]['chengxin_dealer'][m].qrcode_url + '"><p>΢��ɨ��ӹ�ע</p></div></div><div class="ewmtip share10-ewmtipbg"></div></li>'
			}
			$("#dealer1").html(chengxinTemp1);
			$("#dealer1 li").last().addClass('last');
			for(var n = 7 ; n <= 13 ; n++ ){
				chengxinTemp2 += '<li><div class="con"><div class="con-nr"><img src="' + data.data[3]['chengxin_dealer'][n].brand_url + '"> <p class="s4name">' + data.data[3]['chengxin_dealer'][n].dealer_name + '</p><p class="s4tel"><span>[�绰]</span>' + data.data[3]['chengxin_dealer'][n].phone + '</p><a href="' + data.data[3]['chengxin_dealer'][n].consult_url + '" class="s4contact" target="_blank">������ѯ</a></div><div class="ewm"><img src="' + data.data[3]['chengxin_dealer'][n].qrcode_url + '"><p>΢��ɨ��ӹ�ע</p></div></div><div class="ewmtip share10-ewmtipbg"></div></li>'
			}
			$("#dealer2").html(chengxinTemp2);
			$("#dealer2 li").last().addClass('last');
			/****���ž����̽���js****/
			$(".cxjxs .bd ul li .con-nr").hover(function(){
				$(this).find(".s4contact").css({"display":"block"});
				$(this).css({"border-style":"solid","border-width":"1px","border-color":"#9cb5d8"});
				$($(this).siblings()).hide();
				$(this).parent().siblings().show();
			},function(){
				$(this).find(".s4contact").css({"display":"none"});
				$(this).css({"border":"none"});
				$(this).parent().siblings().hide();
			});

			$(".cxjxs .bd ul li .ewmtip").hover(function(){
				$(this).parent().find(".ewm").show();
				$(this).hide();
			});
			$(".cxjxs .bd ul li .con .ewm").hover(function(){},function(){
				$(this).siblings().show();
				$(this).hide();
			});
			tips = data.data[4];
            tipsHead += '<a href="javascript:void(0);" style="text-decoration:none;">' + data.data[4].tips_city[0].title + '�Ż�</a><a href="' + data.data[4].tips_city[0].url + '" target="_blank">[����' + data.data[4].tips_city[0].title + 'վ]</a>';
			tipsTemp1 = '<li><a href="' + data.data[4].tips_pic[0].url + '" target="_blank"><img width="110" height="75" src="' + data.data[4].tips_pic[0].img_url + '" alt=""><p>' + data.data[4].tips_pic[0].title + '</p></a></li>';
			tipsTemp2 = '<a href="' + data.data[4].tips_txt[0].url + '" target="_blank" title="' + data.data[4].tips_txt[0].title + '">' + data.data[4].tips_txt[0].title + '</a>'
			tipsTemp3 += '<li><a href="' + data.data[4].tips_txt[1].url + '" target="_blank" title="' + data.data[4].tips_txt[1].title + '">' + data.data[4].tips_txt[1].title + '</a> | <a href="' + data.data[4].tips_txt[2].url + '" target="_blank" title="' + data.data[4].tips_txt[2].title + '">' + data.data[4].tips_txt[2].title + '</a></li>';
			tipsTemp3 += '<li><a href="' + data.data[4].tips_txt[3].url + '" target="_blank" title="' + data.data[4].tips_txt[3].title + '">' + data.data[4].tips_txt[3].title + '</a> | <a href="' + data.data[4].tips_txt[4].url + '" target="_blank" title="' + data.data[4].tips_txt[4].title + '">' + data.data[4].tips_txt[4].title + '</a></li>';
			tipsTemp3 += '<li><a href="' + data.data[4].tips_txt[5].url + '" target="_blank" title="' + data.data[4].tips_txt[5].title + '">' + data.data[4].tips_txt[5].title + '</a> | <a href="' + data.data[4].tips_txt[6].url + '" target="_blank" title="' + data.data[4].tips_txt[6].title + '">' + data.data[4].tips_txt[6].title + '</a></li>';
			tipsTemp3 += '<li><a href="' + data.data[4].tips_txt[7].url + '" target="_blank" title="' + data.data[4].tips_txt[7].title + '">' + data.data[4].tips_txt[7].title + '</a> | <a href="' + data.data[4].tips_txt[8].url + '" target="_blank" title="' + data.data[4].tips_txt[8].title + '">' + data.data[4].tips_txt[8].title + '</a></li>';
			$("#tipsBD .picTxt").html(tipsTemp1);
			$("#tipsTitle").html(tipsTemp2);
			$("#tipslist").html(tipsTemp3);
			$("#tipsHead").html(tipsHead);
			//$('#tips').show();
		}
	});
};




citys.getESCInfo = function(cityId){
	$.ajax({
	  url:"//ucar.qq.com/js/recommendlist?cityid=" + cityId + "&format=jsonp&callback=",
	  dataType: "jsonp",
	  callback: 'callback',
	  success:function(data){
		  var temp = data.data.todayRecmd,todayRecmdArr= [] ;
		  var DATA= {
			todayRecmdArr:[]
		  };
		  for(var i in temp){
			todayRecmdArr.push(temp[i]);
		  }
		  for(var j=0;j <todayRecmdArr.length;j++){
			todayRecmdArr[j].licensedDate = todayRecmdArr[j].licensedDate.split('-')[0];
		  }
		  DATA.todayRecmdArr = todayRecmdArr;
		  //var html = template("czescTpl",DATA);
		  //$("#czesc").html(html);
	  }
	});
}

//citys.getESCInfo(54);

//2017.11.30 ��ֵ���ֳ���Ŀ��������
citys.getEscMore = function(cityId){
	////ucar.qq.com/js/recommendlist?cityid=54&format=jsonp&callback=&callback=jQuery190022042583131765658_1512030253007&_=1512030253008(�Խ�edyang)
	$.ajax({
	  url : '//ucar.qq.com/js/recommendlist',
	  data : {
		cityid : cityId,
		format : 'jsonp'
	  },
	  dataType : 'jsonp',
	  success : function(res) {
		if(res.info == 'ok'){
			if(typeof(res.data.moreUrl) != 'undefined'){
				$(".czesc .bh .more a").attr("href",res.data.moreUrl);
			}
		}
	  }
	});
}


$("#hotcity_hq a,#tabb_hq a,#hotcity_jj a,#tabb_jj a,#hotcity_bj a,#tabb_bj a").on('click',function(){
	var name = $(this).text(),cityId ='',cn='';
	for(var i in citys.list){
		if(citys.list[i].name == name ){
			cityId = citys.list[i].cityId;
			cn = citys.list[i].cn;
			citys.getIpInfo(citys.getUrl('all','',cityId),cn);
			citys.getjjpage(citys.getUrl('jj','',cityId));
			citys.getbjpage(cityId);
		//	citys.getESCInfo(cityId);
		//	citys.getEscMore(cityId);//2017.11.30 ��ֵ���ֳ���Ŀ��������
			break;
		}
	}
	changeCityName(name,cn);
});
function changeCityName(name,cn){
	var href = '//' + cn +'.auto.qq.com/';
	$('#position').html(name).parent().attr('href',href);
	$('#cityHQ').html(name);
	$('#cityJJ').html(name);
	$('#cityBJ').html(name);
}

/*  |xGv00|b65f695afafcc7ed205ed282fce5bca8 */