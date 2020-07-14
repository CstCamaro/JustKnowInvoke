function setAccountInfo(){
    if(global_userinfoobject.code != 0){  //δ��½̬
        return true;
    }
    else{
        var _nickname = global_userinfoobject.nick.entities();  //QQ�ǳ�
        $('#account_name').html(_nickname);
        var _headimg = global_userinfoobject.head;
        if(_headimg==false||_headimg=='false')
            _headimg = 'http://mat1.gtimg.com/gongyi/2011images/gongyi50.gif?/50';
        else
            _headimg += '/100';
        $('#accountImg').attr('src',_headimg);
        var _love_point = global_userinfoobject.love_point>0?global_userinfoobject.love_point:0;
        $('#mypoint').text(_love_point);
        $('#mydonateproject').html(projnumObj);
        var _level = '_gary';
        var _iconTitle = '';
        if(global_userinfoobject.love_step>0)
        {
            _level = global_userinfoobject.love_step;
            _iconTitle = '�������'+global_userinfoobject.love_step+'��';
        }else
        {
            _iconTitle = '��ε�������ͼ�ꣿ';
        }
        //console.log("global_userinfoobject.donateProjectNum:"+global_userinfoobject.donateProjectNum);
        $('#mydonateprojectnum').text(global_userinfoobject.donateProjectNum);

        var _money = !isNaN(global_userinfoobject.donation_money)?global_userinfoobject.donation_money:0;
        _money = parseFloat(_money);
        _money += parseFloat(!isNaN(global_uinobject.total_Money_Num)?global_uinobject.total_Money_Num:0);
        _money = _money.toFixed(2);
        $('#mydonatemoney').html(_money);
        $('#accountInfoPlane').show();
        $('#loginPlane').hide();
        var _point_level = [108,2000,7000,20000,50000,100000,180000,300000];

        if(_level>=1){
            var _point_process = (_love_point/_point_level[_level]).toFixed(1);
            _point_process*=100;
            $('#mylevel').attr('href','http://gongyi.qq.com/mygongyi.htm');
        }
        else{
            var _point_process = 0;
            $('#mylevel').attr('href','http://gongyi.qq.com/loveplan/qqloveico.htm');
        }

        $('#mylevel').addClass('lv'+_level).attr('title',_iconTitle).attr('zoom',1);
        $('#my_update_process').css('width',_point_process+'%');

        if(global_userinfoobject.idcode>0){
            $('#volunteer_icon').attr('href','http://gongyi.qq.com/mygongyi.htm').attr('title','�־�־Ը�ų�Ա').show();
        }
        else{
            $('#volunteer_icon').removeClass('lp_information_icon1').addClass('lp_information_icon1_gary').attr('href','http://gongyi.qq.com/succor/flow.htm').attr('title','��μ���־Ը��?').show();
        }

        if(global_userinfoobject.doubleIcon == 1){
            $('#doubleIcon').addClass('lp_double_v'+_level).attr('href','http://gongyi.qq.com/mygongyi.htm').attr('title','һ���ͼ��'+global_userinfoobject.love_step+'��').show();
        }
        else{
            $('#doubleIcon').addClass('lp_double_v_gary').attr('href','http://gongyi.qq.com/act/yiqijuan.htm').removeClass('lp_information_icon2').addClass('lp_information_icon3').attr('title','��ε���һ���ͼ�ꣿ').show();
        }

        if(global_userinfoobject.needPayProjectNum>0){
            var _pid = global_userinfoobject.needPayID;
            var _p = getProjectById(_pid);
            if(_p!=false){
                $('<a href="http://npoapp.gongyi.qq.com/_MonthlyList" target="_blank"><img width="78" height="44" src="'+_p.img2+'" alt="'+_p.title+'"></a>\
				<ul style="width:150px;overflow:hidden">\
					<li><a href="http://npoapp.gongyi.qq.com/_MonthlyList" target="_blank">������<span id="needPayProject">'+global_userinfoobject.needPayProjectNum+'</span>��������Ŀ</a></li>\
					<li><a href="http://npoapp.gongyi.qq.com/_MonthlyList" target="_blank" class="btn_subscribe">��������</a></li>\
				</ul>').appendTo('#needPayDiv');
                $('#needPayDiv').show();
            }
        }
        else{
            var _pidArr = global_userinfoobject.recommendProject.split(',');
            var _len = _pidArr.length;
            for(j=0;j<_len;j++){
                var _p = getProjectById(_pidArr[j]);
                if(_p!=false){
                    $('<a href="'+_p.url+'" target="_blank"><img width="78" height="44" src="'+_p.img2+'" alt="'+_p.title+'"></a>\
					<ul style="width:150px;overflow:hidden">\
						<li><a href="'+_p.url+'" target="_blank" title="'+_p.title+'">'+_p.title+'</a></li>\
						<li><a href="'+_p.url+'" target="_blank" class="btn_subscribe">��Ҫ�¾�</a></li>\
					</ul>').appendTo('#needPayDiv');
                    $('#needPayDiv').show();
                    break;
                }
            }
        }
        $('#lp_unlogin').hide();
        $('#lp_logined').show();
    }
}

function getProjectById(pid){
    var _len = global_project.length;
    for(i=0;i<_len;i++){
        var _p = global_project[i];
        if(pid==_p.id){
            return _p;
        }
    }
    return false;
}

function loadProjectList(){
    var _url = "//gongyi.qq.com/js/monthly/mlist/monthly.home.v1.js";
    $.ajax({
        url:_url,
        dataType:'script',
        type:'get',
        async:false,
        error:function(){},
        success:function(data){
            data = eval('('+data+')');
            var _len = data.length;
            if(_len<1){
                $('#plist').html('<li>��ʱû����Ŀ</li>');
            }
            else{
                global_project = data;
                var _max = _len>=6?6:_len;
                $('#plist').empty();
                for(i=0;i<_max;i++){
                    var _p = data[i];
                    var _tmp = i%2!=0?' style="margin-left:30px"':'';
                    $('<li'+_tmp+'><dl>\
					<dd>\
						<a href="'+_p.url+'" target="_blank"><img src="'+_p.img+'" title="'+_p.title+'" alt="'+_p.title+'"></a>\
					</dd>\
					</dl>\
					<div class="clearfix">\
						<a class="ptitle" href="'+_p.url+'" title="'+_p.title+'" alt="'+_p.title+'" target="_blank">'+_p.title+'</a>\
						<p>'+_p.simpledDesc2+'</p>\
						<div class="fundName">������֯��'+_p.fundName+'</div>\
						<a href="javascript:closeMonthDiv(\''+_p.title+'\','+_p.id+');" class="btn_donation"></a>\
					</div>\
					</li>').appendTo('#plist');
                }
                /*
                 $('#recommend_project').empty();

                 //�Ƽ���Ŀ
                 var _p = getProjectById(global_recommend_id);
                 if(_p!=false){
                 $('<div class="recommend_img"><a target="_blank" href="'+_p.url+'"><img src="'+global_recommend_img+'" class="fl" /></a></div>\
                 <div class="fl">\
                 <dl>\
                 <dt><a href="'+_p.url+'" target="_blank" class="h3">'+_p.title+'</a></dt>\
                 <dd class="clearfix">\
                 <em>��Ŀ��飺</em><span>'+_p.simpledDesc+'</span>\
                 </dd>\
                 <dd class="clearfix"><em>������֯��</em><span>'+_p.fundName+'</span></dd>\
                 </dl>\
                 <a href="javascript:showDonateDiv(\''+_p.title+'\','+_p.fundId+','+_p.id+');" class="btn_donation ht">��Ҫ�¾�</a>\
                 <span class="lp_week_people">���� <em>'+_p.donate.this_people+'</em> �˾��</span>\
                 </div>').appendTo('#recommend_project');
                 }
                 */
            }
        }
    })
}

/*
 function autoMove(id){
 //�����Ĵ���
 var _wrap=$('#'+id);//�����������
 var _interval= 2000;//���������϶ʱ��
 var _moving;//��Ҫ����Ķ���
 _wrap.hover(function(){
 clearInterval(_moving);//������ڹ���������ʱ,ֹͣ����
 },function(){
 _moving=setInterval(function(){
 var _field=_wrap.find('li:first');//�˱������ɷ����ں�����ʼ��,li:firstȡֵ�Ǳ仯��
 var _h=_field.height();//ȡ��ÿ�ι����߶�
 _field.animate({marginTop:-_h+'px'},400,function(){//ͨ��ȡ��marginֵ,���ص�һ��
 _field.css('marginTop',0).appendTo(_wrap);//���غ�,�����е�marginֵ����,�����뵽���,ʵ���޷����
 })
 },_interval)//�������ʱ��ȡ����_interval
 }).trigger('mouseleave');//��������ʱ,ģ��ִ��mouseleave,���Զ�����
 }
 */

function loadUserlist(){
    var _url = "//gongyi.qq.com/js/gy_script/pagejs/loveplan_userslist.js";
    $.ajax({
        url:_url,
        dataType:'script',
        type:'get',
        error:function(){},
        success:function(data){
            data = eval('('+data+')');
            var _len = data.length;
            if(_len<1){
                $('#ulist').html('<li>��ʱû����Ϣ</li>');
            }
            else{
                _len = _len>=20?20:_len;
                $('#ulist').empty();
                var _d = getCurrentDate();
                for(i=0;i<_len;i++){
                    var _p = data[i];
                    var _img = _p.face;
                    var _default_img = _img.indexOf('mat1');
                    if(_default_img<0)
                        _img = _img.substr(0,_img.length-3)+'50';
                    var _level = _p.level;
                    var _level_css = "icon_love lv"+_level;
                    if(_level<1)
                        _level_css = "level_gary";
                    var _ctime = _p.crttm;
                    var _ctime = _ctime.split(" ");
                    var _date = _ctime[0];
                    var _showTime = '';
                    if(_d == _date){//����ļ�¼
                        var _time = _ctime[1];
                        _showTime = _time.substr(0,5);
                    }
                    else{
                        _showTime = _date.substr(5,5);
                    }
                    if(_p.nickname=='')
                        _p.nickname = '����';
                    $('<li>\
						<span  tabindex="-1" class="avatar">\
							<img style="width:30px;height:30px" src="'+_img+'" alt="">\
						</span>\
						<dl>\
							<dt class="clearfix">\
								<span style="float: left" >'+_p.nickname+'</span>\
								<a href="http://gongyi.qq.com/loveplan/chengzhangtixi.htm" target="_blank"><i class="'+_level_css+'"></i></a>\
								<span class="fr">'+_showTime+'</span>\
							</dt>\
							<dd><a class="txt" href="'+_p.projecturl+'" target="_blank" class="pname">֧�֣�'+_p.projectname+'</a></dd>\
						</dl>\
					</li>').appendTo('#ulist');
                }
                //$('#ulist li:gt(4)').css('display','none');
                //autoMove('ulistzone','ulist','ulistcopy');
                $('#ulistzone').kxbdSuperMarquee({
                    isMarquee:true,
                    isEqual:false,
                    scrollDelay:60,
                    direction:'up'
                });
            }
        }
    })
}

function loadSuccorProject(){
    try
    {
        var query_str = '';
        var url = "//gongyi.qq.com/js/succor/pclist/succor.p.home.v3.js";
        $.ajax({
            'type':'GET',
            'url':url,
            'dataType':'jsonp',
            'jsonp':'jsoncallback',
            'jsonpCallback':'_Callback',
            'data':'',
            'success':function(data){
                if(data.status==1)
                {
                    var _project = data.info.pCateList;
                    var _len = _project.length;
                    var _max = 3;
                    var _step = 0;
                    $('#succor-recommend').empty();
                    for(i=0;i<_len;i++){
                        var _list = _project[i].list;
                        var _item = _list[0];
                        $('<a href="//gongyi.qq.com/succor/detail.htm?id='+_item.id+'" target="_blank"><img src="'+_item.img+'/120" width="90" height="90" alt="'+_item.title+'" title="'+_item.title+'"></a>').appendTo('#succor-recommend');
                        _step++;

                    }
                }else if(data.status==0){
                    alert(data.info);
                }
            }
        });
    }catch(e){}
}/*  |xGv00|42ccda7cb27045b60fb783e65fe24c32 */