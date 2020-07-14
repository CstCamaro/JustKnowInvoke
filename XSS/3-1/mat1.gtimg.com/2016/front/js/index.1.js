var tool = {
    // ��ȡ������Ƶ
    getWonderVideo : function(){
        var $ul = $('.jcsp_mod ul'),
            cid = $ul.data('cid');

        $.ajax({
            method: "GET",
            url: "http://data.video.qq.com/fcgi-bin/data",
            data: {
                tid: "426",
                idlist: cid,
                appid: "10001009",
                appkey: "c5a3e1529a7ba805",
                otype: "json"
            },
            dataType: "jsonp",
            cache: !0,
            scriptCharset: "utf-8"
        }).done(function(data){
            if( data.errorno==0 ){
                var videos = data.results[0].fields.videos,
                    len = videos.length,
                    len = len > 12 ? 12 : len,
                    html = '';

                for(var i=0; i<len; i++){
                    var item = videos[i],
                        time = item.c_tl,
                        minute = parseInt( time/60 ),
                        minute = minute<10 ? '0'+minute : minute,
                        second = parseInt( time%60 ),
                        t = minute +':'+second;

                    html += '<li>\
                                <a href="'+item.c_play_url+'" target="_blank">\
                                    <img src="'+item.c_pic_228_128+'" alt="'+item.c_title+'" />\
                                    <div class="shadow"><span class="time">'+t+'</span><span class="num">'+item.allnumc+'</span></div>\
                                </a>\
                                <p>'+item.c_title+'</p>\
                            </li>';
                }

                $ul.html( html );
            }
        })
    },
	
	getProjectVideo : function(){
		var $category = $('.categorywrapper .category');
		
		$category.each(function(){
			var $category_c_leftcon = $(this).find('.category-c-leftcon'),
				_url = $category_c_leftcon.data('url');
			
			if( _url ){
				$.ajax({
					url : _url,
					type : 'get',
					// data : {c_column_id : columnid},
					dataType : 'jsonp'
				}).done(function(data){
					if( data.total>0 && data.ret==0 ){
					
						var results = data.jsonvalue.results,
							len = results.length,
							html = '';
							
						if( len>0 ){
							var fields = results[0].fields;
							html += '<a class="category-c-top-img" href="'+fields.url+'" target="_blank">\
										<img src="'+fields.pic496x280+'" alt="" ></img>\
										<p>��Ƶ��'+fields.title+'</p>\
										<em></em>\
									</a>';
						}
						if( len>1 ){
							var fields = results[1].fields;
							html += '<a class="category-c-bottom-img" href="'+fields.url+'" target="_blank">\
										<p>\
											<img src="'+fields.pic_228_128+'" alt=""></img>\
											<span><em></em></span>\
										</p>\
										<div>��Ƶ��'+fields.title+'</div>\
									</a>';
						}

						$category_c_leftcon.append( html );
					}
					
				})
			}
		})
	},
	
	// ��ȡ�ǲ��Ƽ�����Ƶ
	getXingVideo : function(){
		$.ajax({
			url : 'http://matchweb.sports.qq.com/qQLiveProgram/videoList?num=18',
			dataType : 'jsonp',
			type : 'get'
		}).done(function(result){
			if( result.code==0 ){
				var html = '',
					list = result.data.list,
					len = list.length,
					len = len>12 ? 12 : len;
					
				for(var i=0; i<len; i++){
					var item = list[i],
						minu = ('00'+parseInt( item.liveVidInfo.duration/60 )).substr(-2),
						second = ('00'+item.liveVidInfo.duration%60).substr(-2),
						time = minu+':'+second;
					
					html += '<li>\
								<a href="'+item.liveVidInfo.url+'" target="_blank" title="'+item.liveVidInfo.title+'" class="pic">\
									<img src="'+item.image+'" alt="">\
									<div class="shadow"><span class="time">'+time+'</span><span class="num">'+item.liveVidInfo.view+'</span></div>\
								</a>\
								<p><a href="'+item.liveVidInfo.url+'" target="_blank" title="'+item.liveVidInfo.title+'">'+item.liveVidInfo.title+'</a></p>\
							</li>';
							
					var j = len<5 ? len-1 : 5;
					if( i==j ){
						$('.xcyj_mod .tab-bd-item').find('.big ul').html( html );
					}
				}
				
				$('.jcsp_mod .pvinner').html( html );
			}
		})
	},

    init : function(){
        // this.getWonderVideo();
		this.getProjectVideo();
		this.getXingVideo();
    }
}

tool.init();

$("#focus_05").length && $("#focus_05").qqfocus({
    effect: 'fade',
    prev: ".prevBtn",
    next: ".nextBtn"
});

$("#scroll_jzt").length && $("#scroll_jzt").qqScroll({
    direction:"right",
    prev:".prev-btn",
    next:".next-btn",
    auto:false,
    step:5
});

$(".dkzk_mod .scroll_B").length && $(".dkzk_mod .scroll_B").qqScroll({
    direction:"right",
    prev:".prev-btn",
    next:".next-btn",
    auto:false,
    step:6
});

$('.tab').on('click', '.tab-hd-item', function(){
    var $this = $(this),
        index = $this.index(),
        $tab_bd = $this.parents('.tab').find('.tab-bd'),
        $tab_bd_item = $tab_bd.find('.tab-bd-item');

    $this.addClass('active').siblings().removeClass('active');
    $tab_bd_item.removeClass('show').eq(index).addClass('show');
})

var _data = { "one":{ "title":"��Լ��������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/99/78/2053/133516314.png",
"address":"��Լ��������2�Ź�", "item" :"����", "num" :9000, "summary":"��Լ���������ǵ�����Ҫ�Ļ�չ���ģ��ٽ����˴壬�����������ƥ�˹�԰ֻ��5���ӵ�·�̡�" }, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/100/78/2053/133516315.jpg",
"address":"��Լ��������3�Ź�", "item" :"ƹ����", "num" :7000, "summary":"��Լ���������ǵ�����Ҫ�Ļ�չ���ģ��ٽ����˴壬�����������ƥ�˹�԰ֻ��5���ӵ�·�̡�" }, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/98/141/2053/133532378.jpg",
"address":"��Լ��������4�Ź�", "item" :"��ë��", "num" :6500, "summary":"��Լ���������ǵ�����Ҫ�Ļ�չ���ģ��ٽ����˴壬�����������ƥ�˹�԰ֻ��5���ӵ�·�̡�" }, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/99/141/2053/133532379.jpg",
"address":"��Լ��������6�Ź�", "item" :"ȭ��", "num" :6500, "summary":"��Լ���������ǵ�����Ҫ�Ļ�չ���ģ��ٽ����˴壬�����������ƥ�˹�԰ֻ��5���ӵ�·�̡�" } ] }, "two":{ "title":"��������ƥ�˹�԰",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/47/80/2053/133516772.jpg", "address":"����¿�������1�Ź�", "item" :"����",
"num" :16000, "summary":"�ù�λ�ڰ�������ƥ�˹�԰��������˴������·�̡��ڰ��˻��ڼ䣬�����ٰ�����������а»�ʱ���������������������������" }, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/112/141/2053/133532392.jpg",
"address":"����¿�������2�Ź�", "item" :"�����ˤ��", "num" :10000, "summary":"2�Ź�λ�ڰ�������ƥ�˹�԰��������˴������·�̡��ڰ��˻��ڼ䣬�����ٰ�ˤ�ӡ�������������˻������������Ϊ����ƥ��ѵ�����ĵ�һ���֡�"
}, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/113/141/2053/133532393.jpg", "address":"����¿�������3�Ź�", "item" :"��������ȭ��",
"num" :10000, "summary":"3�Ź�λ�ڰ�������ƥ�˹�԰��������˴������·�̡��ڰ��˻��ڼ䣬�����ٰ��������ȭ�����������˻������������Ϊ����ƥ��ѵ�����ĵ�һ���֡�" }, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/203/143/2053/133532993.jpg",
"address":"��Լ����ƥ��������", "item" :"������١�������١��Ĵ�", "num" :12000, "summary":"��Լ����ƥ����������Ϊ2007��ķ����˶���������������Լ�������������ݣ��㷺���ڴ����������¡����ֻ�͸����Ļ����"
}, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/251/141/2053/133532531.jpg", "address":"������-�׿�ˮ���˶�����", "item" :"��ˮ��������Ӿ��ˮ��",
"num" :6500, "summary":"������-�׿�ˮ���˶������ǰ���Ϊ��2007�귺���˶�����������������Լ���˻��ڼ�������ˮ��������Ӿ��ˮ��ı�����" }, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/16/142/2053/133532551.jpg",
"address":"����ƥ��ˮ���˶�����", "item" :"��Ӿ��ˮ��", "num" :18000, "summary":"����ƥ��ˮ���˶�����λ�ڰ�������ƥ�˹�԰������ش���������˴���10���ӵ�·�̡�" }, { "imgUrl"
:"http://img1.gtimg.com/sports/pics/hv1/34/142/2053/133532569.jpg", "address":"����ƥ����������", "item" :"����", "num" :18250, "summary":"����ƥ���������Ľ�Ϊ���������˶����±����Ų������˽���֮�󣬳��˳�Ϊ����ƥ��ѵ������һ���֣��������ж����������¡��а»��ڼ䣬������ٰ�����������ı�����"
}, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/72/142/2053/133532607.jpg", "address":"δ��������", "item" :"����", "num"
:12000, "summary":"δ����������һ����ʱ�������ڰ��˻�����󽫱������Ȼ����4������ѧУ�����´��С��������ʩ����ί�������ٶ��������±��������Ų���" } ] }, "three":{ "title":"����ƥ�˸߶�����",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/233/82/2053/133517468.jpg", "address":"��Լ����¬��������", "item" :"�߶���",
"num" :15000, "summary":"����ƥ�˸߶����򳡾�����˴�Լ5������˻������������Ϊһ�������γ̺���ѵ���ģ�Ŀ���Ǵٽ������������޸߶����˶���չ��ͬʱ����ٰ춥�����¡�" } ] }, "four":{ "title":"���˴�",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/132/150/2054/133599732.jpeg", "address":"��Լ����¬����", "item" :"���˴�",
"num" :10160, "summary":"��Լ���˴��ܹ�ӵ�У�����¥����ÿ�������㣩��3604���׼��10160����λ���ڰ��˻��ڼ䣬���ڲ���ʩ��������������ҽ�ƺͽ������ĵ���ʱ������" } ] }, "five":{ "title":"���ض���̲",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/232/83/2053/133517722.jpg", "address":"��Լ����¬����", "item" :"���ߡ����г���ʱ��",
"num" :5000, "summary":"���ض�����Լ����¬������������һ�������ĺ�̲�������������������ּ���ķ����д�������С����˻��ڼ䣬���������г���ʱ�����ﾶ���߱����������յ㡣" } ] }, "six":{ "title":"�°¶��ް���ƥ�˹�԰",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/129/84/2053/133517874.jpg", "address":"ɽ�����г�����", "item" :"ɽ�����г�",
"num" :5000, "summary":"ɽ�����г�����λ�ڵ°¶��ް���ƥ�˹�԰���X-��԰������ȫ��4.8������ᱣ֤ÿ��ѡ���ڹ�����ǰ���о�����ֹһ�Ρ�" }, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/149/142/2053/133532684.jpg",
"address":"BMXС�ֳ�����", "item" :"BMXС�ֳ�", "num" :7500, "summary":"BMXС�ֳ�����λ��X-��԰�ڣ������ɵ���������������350�׵�400��֮�䡣" }, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/150/142/2053/133532685.jpg",
"address":"��ˮ������", "item" :"Ƥ��ͧ�������� ", "num" :8000, "summary":"��ˮ������������һ��250�׳����������������˻��������˼���Ϊ�˶�Ա�ṩƤ��ͧ��������ѵ�����أ�Ҳ�����ڹ���������Ϸ��"
} ] }, "serven":{ "title":"����������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/169/84/2053/133517914.jpg",
"address":"�°¶��ް���ƥ�˹�԰", "item" :"�����ִ�����", "num" :5000, "summary":"���������ݽ��ٰ�����������ִ������еĻ������������������ݡ��°¶������������°¶���ˮ���˶��������������ݱ��ϳ�Ϊ�°¶����ִ����԰��"
} ] }, "eight":{ "title":"����ƥ������������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/43/85/2053/133518043.jpg",
"address":"�°¶��ް���ƥ�˹�԰", "item" :"������", "num" :14000, "summary":"����ƥ��������������Ϊ2007��ķ����˶��������Ŀǰ�ǰ������Ҷӵ�ѵ�����ء�" } ] }, "nine":{
"title":"�°¶���������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/103/85/2053/133518103.jpg", "address":"�°¶��ް���ƥ�˹�԰",
"item" :"������������ִ�����", "num" :15000, "summary":"�°¶����������������е����򳡻����Ͻ��д�������ִ��������������������֣������������������������" } ] }, "ten":{ "title":"�°¶���ˮ���˶�����",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/156/85/2053/133518156.jpg", "address":"�°¶��ް���ƥ�˹�԰", "item" :"�ִ�����",
"num" :2000, "summary":"�ùݽ�������ִ������е���Ӿ�������֣����������������ݽ��У����������������ڵ°¶������������У����������������300�ף���ѡ���Ƿǳ����㡣" } ] }, "eleven":{ "title":"����ƥ����������",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/209/85/2053/133518209.jpg", "address":"�°¶��ް���ƥ�˹�԰", "item" :"����",
"num" :14000, "summary":"����ƥ������������Ϊ2007��ķ����˶��������Ϊ��ӭ����Լ���˻�����˷��º����������ڰ��˻��ڼ����������Ŀ�����б�����" } ] }, "twelve":{ "title":"����ƥ���������",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/234/85/2053/133518234.jpg", "address":"�°¶��ް���ƥ�˹�԰", "item" :"���",
"num" :8500, "summary":"����ƥ�����������Ϊ2007��ķ����˶��������Ŀǰ��Ϊ��ˮƽѡ�����Ӱ���ѵ��������������������Ͽ����ܵ���Ϊ���˻�ֻ��Ҫ������С���޸ľ��С�" } ] }, "thirteen":{ "title":"ɭ�;�����",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/50/86/2053/133518305.jpg", "address":"�������ɵ���", "item" :"������ﾶ",
"num" :36000, "summary":"�Ǵ�˵����Լ�񻶽����е���㣬����2016����Լ���˻�ǰ�������ش�ı����ｫ��Ϊ���˻������ɱ����������յ㣬ͬʱ���ٰ���˻�Ͳа»��������¡�" } ] }, "fourteen":{
"title":"����ƥ��������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/24/143/2053/133532814.jpg", "address":"�������ɵ�������",
"item" :"�����ﾶ ", "num" :60000, "summary":"����ƥ����������Ϊ2007�����˶�����������������ڰ��˻�Ͳа»��ڼ�ٰ�����������ﾶ�ﾶ������ͬʱ����45,000��������ʱ������60,000�˴Ρ�"
} ] }, "fifteen":{ "title":"������������������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/143/86/2053/133518398.jpg",
"address":"�������ɵ���", "item" :"���򡢿���Ļʽ", "num" :90000, "summary":"�������������������Ϊ��1950�����籭������2014�����籭ʱ�����־�����7�����������оͰ������ľ��������˻��ڼ䣬������������Ů��ı�������������ʢ��Ŀ���Ļʽ��"
}, { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/39/143/2053/133532829.jpg", "address":"С��������������", "item" :"����", "num"
:12000, "summary":"С���������������ٽ������������������������ǰ�������ͳ�Ĵ�Ӫ��Ϊ��2007��ķ����˶��ᣬС���������������������й����׵ķ��¡�" } ] }, "sixteen":{ "title":"���갢������",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/176/86/2053/133518431.jpg", "address":"�޵���񻷽�", "item" :"��ͧ��Ƥ��ͧ��ˮ",
"num" :5000, "summary":"���갢������������������׳�۵�ɽ���䣬��������Ү����ң�������ｫ��ٰ���˻ᴫͳ����ͧ��Ŀ���ټ���Ƥ��ͧ��ˮ�ı�����" } ] }, "seventeen":{ "title":"���������ɱ�",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/14/87/2053/133518524.jpg", "address":"���������ɺ�̲", "item" :"��Ӿ����ˮ�򡢹�·���г�����������",
"num" :5000, "summary":"���������ɱ��ɾ��»��ر�����ڿ��ŵ���ʷ����ݡ���·���г����������Դ���Ϊ�����յ㡣�а»�������ɱ���Ҳ���Դ���Ϊ�����յ㡣" } ] }, "eighteen":{ "title":"����������ͷ",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/185/87/2053/133518695.jpg", "address":"�������깫԰", "item" :"��������",
"num" :10000, "summary":"����������ͷ���������ĺ͸������깫԰���Է羰׳�������ɽ���ƶ����߶�ɽΪ���������ﻹ����������2014�����籭�ĳ�ǩ��ʽ��" } ] }, "nineteen":{ "title":"����������������",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/84/88/2053/133518849.jpg", "address":"���������ɺ�̲", "item" :"ɳ̲����",
"num" :12000, "summary":"��Լ���˻��ɳ������λ�������Ŀ��������ɺ�̲�����ٰ��2007�귺���˶����ɳ�š���������͹���ˮ�������" } ] }, "twenty":{ "title":"������������", "data":[
{ "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/138/88/2053/133518903.png", "address":"������������", "item" :"����", "num" :74000,
"summary":"��������1965���ɰ����������ѹ����ʦ��˹��������Ү��ƣ�֮�󱻰�������Ϊ�Ļ��Ų���Ϊ��ӭ��2014�����籭��������2012������˷��޹��̡�" } ] }, "twentyone":{ "title":"�������ǹ���������",
"data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/199/89/2053/133519219.jpg", "address":"����������", "item" :"����",
"num" :76000, "summary":"�������ǹ��������������ڵ춨�������ǳ��л�����ֵ���������֮�ϡ�����������״��̨����һ�����εĹ㳡Χ�ƣ�ȫ����ͨ���������ڹ㳡֮�ڣ��㳡�ġ����֡�֮�������渲�ǡ�" } ] }, "twentytwo":{
"title":"����ѷ������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/199/91/2053/133519729.jpg", "address":"���˹��",
"item" :"����", "num" :40549, "summary":"����ѷ��Ϊ2014�����籭������֮���ΪΤ�߶���������ֲ������������籭�ڼ䣬�������������Աȴ��ʪ�ȵ�������ʱ����û���ж����ﱧԹ������" } ] }, "twentythree":{
"title":"��������������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/143/86/2053/133518398.jpg", "address":"�������ɵ���",
"item" :"���򡢿���Ļʽ", "num" :90000, "summary":"�������������������Ϊ��1950�����籭������2014�����籭ʱ�����־�����7�����������оͰ������ľ��������˻��ڼ䣬������������Ů��ı�������������ʢ��Ŀ���Ļʽ��"
} ] }, "twentyfour":{ "title":"��ˮԴ������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/27/97/2053/133521087.jpg",
"address":"�����߶���", "item" :"����", "num" :20000, "summary":"��ˮԴ��������1951��1��28�տ��ţ���ξٰ�����Ǻ�ά�������������ֲ���ĵ±ȡ�2007��11�¹ر���������������ھ�ַ���޽�����������ǰ�����������ͽ������"
} ] }, "twentyfive":{ "title":"���ֵٰ�������", "data":[ { "imgUrl" :"http://img1.gtimg.com/sports/pics/hv1/46/97/2053/133521106.jpg",
"address":"ʥ������", "item" :"����", "num" :48000, "summary":"���ֵٰ���������Ϊ2014�����籭��������ʱ��Ļս�����ڴ��򳡾��У�����Ϊ�ͼ׺��ſ��ֵٰ��ӵ�������" } ] } }


;(function(){
    var obj = $("#map-scroll");
    var address = $("#map-address");
    function inintScroll(){
        var config = {
            direction: "right",
            step: 1,
            speed:800,
            time:4000,
            auto:false
        };
        $("#map-scroll").paraScroll(config);
    }
    function initData(data,text){
        var tmp = _data[data].data;
        if(tmp == " ") return false;
        var title = _data[data].title;
        var length = tmp.length;
        var html = "";
        obj.find("h2").html('<em>'+text+'</em>'+title);
        obj.find(".inner").html('<ul class="list"></ul>');
        for(var i=0;i<length;i++){
            var _tdata = tmp[i];
            html += '<li class="split">'
            +'<a href="javascript:void(0)">'
            +'<img src="'+_tdata.imgUrl+'">'
            +'</a>'
            +'<p class="s-top"><span>����λ�ã�</span>'+_tdata.address+'</p>'
            +'<p><span>������Ŀ��</span>'+_tdata.item+'</p>'
            +'<p><span>���ɹ�������</span>'+_tdata.num+'</p>'
            +'<p class="s-bottom">'+_tdata.summary+'</p>'
            +'</li>';
        }
        obj.find(".list").html(html);
        if(length > 1){
            $("#map-scroll").find(".btn").show();
            inintScroll()
        }else{
            $("#map-scroll").find(".btn").hide();
        };
        obj.fadeIn();
    }
    initData(address.find(".current").attr("data-id"),address.find(".current").text());

    $("#map-address span").each(function(){
        var _index = $(this);
        _index.on("click",function(){
            if(!_index.hasClass("current")){
                $("#map-address span").removeClass("current");
                _index.addClass("current");
                var data = _index.attr("data-id");
                var text = _index.text();
                initData(data,text);
            }
        })

    })
})();

var d1 = new Date().getTime(),
    d2 = new Date("2016/08/06 07:00").getTime(),
    dayNum = Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));

$('.empty_area').html('<strong>' + dayNum + '</strong>');/*  |xGv00|691fa81d298f0a8567b6aaf75bcc78a4 */