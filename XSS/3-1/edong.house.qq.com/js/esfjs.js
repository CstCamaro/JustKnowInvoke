var esfUrl = window.location.href;
var esf_city  = 'huangshi';
esfUrl = esfUrl.replace("http://","").replace("edong.house.qq.com","").replace("/","").replace("/","").replace("/","").replace("index.htm","");
if(esfUrl == 'ez'){
	esf_city = 'ezhou';
}else if(esfUrl == 'hg'){
	esf_city = 'huanggang';
}

var esf_search_url = 'http://esf.db.house.qq.com/'+esf_city+'/#type1';
$('#keywordValue').css("color", "#999").bind("focus", function() {
	if ($(this).val() == '������¥����/����') {
		$(this).val('');
	}
}).bind("blur", function() {
	if ($.trim($("#keywordValue").val()) == "" || $(this).val() == '������¥����/����') {
		$(this).val('������¥����/����').css("color", "#999");
		//location.reload(true);  
	} else {
		$(this).css("color", "#333");
	}
}).bind("propertychange", function() {
	$(this).trigger(($.browser.opera ? "keypress" : "keydown") + ".autocomplete");
}).bind("input", function() {
	$(this).trigger(($.browser.opera ? "keypress" : "keydown") + ".autocomplete");
}).autocomplete('http://esf.db.house.qq.com/index.php?mod=common&act=searchHouseList&city='+esf_city+'&type=sale', {
	queryKeyName: "keywordValue",
	width: 302,
	delay: 0,
	max: 8,
	dataSplit: "!",
	itemSplit: ",",
	formatItem: function(row, i, max) {
		return "<span class='auto-xqmc'>" + row[1] + "</span><span>" + (row[2] == "" ? "-" : row[2]) + "</span><span>" + row[3] + "</span><span style='display: none;'>" + row[0] + "</span>";
	},
	formatResult: function(row, i, max) {
		return row[1];
	},
	selectFirst: true
}).result(function(event, data, formatted) {
	//console.log(data);
	var url = "http://esf.db.house.qq.com/"+esf_city+"/search/sale/#type1-h" + data[0] + "-k" + data[1];
	//window.location.href = url;
	esf_search_url = url;
	window.open(url);
});

$('.search_house_btn').on('click',function () {
	if ($.trim($("#keywordValue").val()) == "" || $("#keywordValue").val() == '������¥����/����') {
		window.open('http://esf.db.house.qq.com/'+esf_city+'/#type1');
	} else {
		window.open('http://esf.db.house.qq.com/'+esf_city+'/search/sale/#type1-k'+$("#keywordValue").val());
	}
});



/*���ַ�����*/
var esf_ks_url = 'http://esf.db.house.qq.com/index.php?mod=common&act=search&cityId='+ esf_city +'&jsonName=esf_ks';
$.getScript(esf_ks_url,function () {
	$('.search_house .cate li').each(function (i, elm) {
		switch (i) {
			case 0: 
				$(elm).empty();
				$(elm).append('<span>����</span>');
				if (esf_ks.region.length) {
					$.each(esf_ks.region, function (a, item) {
						if (a < esf_ks.region.length) {
							$(elm).append('<a target="_blank" href="'+ item.url +'" >'+item.regionName+'</a>');
						}
					});
				}
				break;
			case 1: 
				$(elm).empty();
				$(elm).append('<span>�۸�</span>');
				if (esf_ks.price.length) {
					$.each(esf_ks.price, function (a, item) {
						if (a < esf_ks.price.length) {
							$(elm).append('<a target="_blank" href="'+ item.url +'" >'+item.priceName+'</a>');
						}
					});
				}
				break;
			case 2: 
				$(elm).empty();
				$(elm).append('<span>�����</span>');
				if (esf_ks.area.length) {
					$.each(esf_ks.area, function (a, item) {
						if (a < 4) {
							$(elm).append('<a target="_blank" href="'+ item.url +'" >'+item.areaName+'</a>');
						}
					});
				}
				break;
			case 3: 
				$(elm).empty();
				$(elm).append('<span>���ͣ�</span>');
				if (esf_ks.room.length) {
					$.each(esf_ks.room, function (a, item) {
						if (a < esf_ks.room.length) {
							$(elm).append('<a target="_blank" href="'+ item.url +'" >'+item.roomNum+'</a>');
						}
					});
				}
				break;
			case 4: 
				$(elm).empty();
				$(elm).append('<span>��ҵ��ѡ��</span>');
				if (esf_ks.tag.length) {
					$.each(esf_ks.tag, function (a, item) {
						if (a < esf_ks.tag.length) {
							$(elm).append('<a target="_blank" href="'+ item.url +'" >'+item.tagName+'</a>');
						}
					});
				}
				break;
			case 5: 
				$(elm).empty();
				$(elm).append('<span>����С����</span>');
				if (esf_ks.house.length) {
					$.each(esf_ks.house, function (a, item) {
						if (a < esf_ks.house.length) {
							$(elm).append('<a target="_blank" href="'+ item.url +'" >'+item.houseName+'</a>');
						}
					});
				}
				break;
		}
	});
});

/*���³��۷�Դ*/
var esf_zxcs_url = 'http://esf.db.house.qq.com/index.php?mod=common&act=GetSaleList&cityId='+ esf_city +'&type=2&jsonName=esf_zxcs';
$.getScript(esf_zxcs_url, function () {
	if (esf_zxcs.length) {
		//$(".new_house ul").empty();
		var handlen = $(".new_house ul li").length;
		$.each(esf_zxcs, function(i, elm) {
			if (i < (6 - handlen)) {
				var alink = '<a target="_blank" href="'+elm.FLink+'" title="'+elm.FHouseName+'"><img alt="'+elm.FHouseName+'" src="'+elm.FPhotoUrl+'">'+elm.FHouseName+'</a>';
				var ptxt = '';
				if (elm.FPalorNum == 0 && elm.FRoomNum == 0) {
					ptxt = '<p>'+elm.FUseageId+'/'+elm.FArea+'�O <span>'+elm.FPrice+'��</span></p>';
				} else {
					ptxt = '<p>'+elm.FRoomNum+'��' + elm.FPalorNum + '��/' + elm.FArea + '�O <span>'+elm.FPrice+'��</span></p>';
				}
				
				var li = $('<li>' + alink + ptxt + '</li>');
				$(".new_house ul").append(li);
			}
		});
	}
});

/*���³��� ���۷�Դ ��˰��Դ*/
$(".esf_menu li").each(function (i, elm) {
	$(elm).on('click',function () {
		$(".esf_menu li").removeClass('on').eq(i).addClass('on');
		$(".esf_cons .sef_item").hide().eq(i).show();
	});
});

/*���³���*/
var esf_zxcz_url = 'http://esf.db.house.qq.com/index.php?mod=common&act=GetLeaseList&cityId='+ esf_city +'&jsonName=esf_zxcz';
$.getScript(esf_zxcz_url, function () {
	if (esf_zxcz && esf_zxcz.length) {
		//$(".sef_item ul").eq(0).empty();
		var handlen = $(".sef_item ul").eq(0).find('li').length;
		$.each(esf_zxcz, function(i, elm) {
			if (i < (9 - handlen)) {
				var alink = '', spantxt = '', li;
				
				var alink = '<a class="name" target="_blank" href="'+elm.FLink+'" title="'+elm.FHouseName+'">'+elm.FHouseName+'</a>';
				
				if (elm.FPalorNum == 0 && elm.FRoomNum == 0) {
					if (elm.FDecorationId) {
						spantxt = '<span class="type">'+elm.FUseageId+'/'+elm.FArea+'�O/'+elm.FDecorationId+'</span><span class="price">'+elm.FPrice+'Ԫ/��</span>';
					} else {
						spantxt = '<span class="type">'+elm.FUseageId+'/'+elm.FArea+'�O</span><span class="price">'+elm.FPrice+'Ԫ/��</span>';
					}
					
				} else {
					spantxt = '<span class="type">'+elm.FRoomNum+'��' + elm.FPalorNum + '��/' + elm.FArea + '�O/'+elm.FDecorationId+'</span><span class="price">'+elm.FPrice+'Ԫ/��</span>';
				}

				if ( i == 0) {
					li = $('<li class="first">' + alink + spantxt + '</li>');
				} else {
					li = $('<li>' + alink + spantxt + '</li>');
				}
				
				$(".sef_item ul").eq(0).append(li);
			}
		});
	}
});

/*���۷�Դ*/
var esf_jsfy_url = 'http://esf.db.house.qq.com/index.php?mod=common&act=GetSaleList&cityId='+ esf_city +'&type=3&jsonName=esf_jsfy';
$.getScript(esf_jsfy_url, function () {
	if (esf_jsfy && esf_jsfy.length) {
		//$(".sef_item ul").eq(1).empty();
		var handlen = $(".sef_item ul").eq(1).find('li').length;
		$.each(esf_jsfy, function(i, elm) {
			if (i < (9 - handlen)) {
				var alink = '', spantxt = '', li;
				
				var alink = '<a class="name" target="_blank" href="'+elm.FLink+'" title="'+elm.FHouseName+'">'+elm.FHouseName+'</a>';
				
				if (elm.FPalorNum == 0 && elm.FRoomNum == 0) {
					spantxt = '<span class="type">'+elm.FUseageId+'/'+elm.FArea+'�O/'+elm.FDecorationId+'</span><span class="price">�ܼ�'+elm.FPrice+'��</span>';
				} else {
					spantxt = '<span class="type">'+elm.FRoomNum +'��' + elm.FPalorNum + '��/' + elm.FArea + '�O/'+elm.FDecorationId+'</span><span class="price">�ܼ�'+elm.FPrice+'��</span>';
				}

				if ($(".sef_item ul").eq(1).find('li').length == 0 && i == 0) {
					li = $('<li class="first">' + alink + spantxt + '</li>');
				} else {
					li = $('<li>' + alink + spantxt + '</li>');
				}
				
				$(".sef_item ul").eq(1).append(li);
			}
		});
	}
});

/*��˰��Դ*/
var esf_msfy_url = 'http://esf.db.house.qq.com/index.php?mod=common&act=GetSaleList&cityId='+ esf_city +'&type=4&jsonName=esf_msfy';
$.getScript(esf_msfy_url, function () {
	if (esf_msfy && esf_msfy.length) {
		//$(".sef_item ul").eq(2).empty();
		var handlen = $(".sef_item ul").eq(2).find('li').length;
		$.each(esf_msfy, function(i, elm) {
			if (i < (9 - handlen)) {
				var alink = '', spantxt = '', li;
				
				var alink = '<a class="name" target="_blank" href="'+elm.FLink+'" title="'+elm.FHouseName+'">'+elm.FHouseName+'</a>';
				
				if (elm.FPalorNum == 0 && elm.FRoomNum == 0) {
					spantxt = '<span class="type">'+elm.FUseageId+'/'+elm.FArea+'�O/'+elm.FDecorationId+'</span><span class="price">�ܼ�'+elm.FPrice+'��</span>';
				} else {
					spantxt = '<span class="type">'+elm.FRoomNum+'��' + elm.FPalorNum + '��/' + elm.FArea + '�O/'+elm.FDecorationId+'</span><span class="price">�ܼ�'+elm.FPrice+'��</span>';
				}

				if ($(".sef_item ul").eq(2).find('li').length == 0 && i == 0) {
					li = $('<li class="first">' + alink + spantxt + '</li>');
				} else {
					li = $('<li>' + alink + spantxt + '</li>');
				}
				
				$(".sef_item ul").eq(2).append(li);
			}
		});
	}
});/*  |xGv00|592ac426978f3db8cc6b595b11a5562a */