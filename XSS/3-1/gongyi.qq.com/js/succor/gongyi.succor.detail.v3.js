var succorObj = {};
succorObj = {
    //��ȡ��������
    //start detail
    "detail": {
        //������֯��Ϣ
        "fundInfo": {
            'data': {},
            'show': function (data) {
                $("#fund_info_wrap").tmpl('tpl_fund_info', {vo: data});
            }
        },
        //��ͼ�õ�Ƭ
        "imgFlash": {
            'data': {},
            'slideObj': {},
            'slideOriginalObj': {},
            'isShowOriginal': false,
            'show': function (data) {
                if (!data || data.length <= 0) return;
                this.data = data;
                $("#pj_attach_imgs").tmpl('tpl_attach_imgs', {'list': data});
                //var _url = 'http://gongyi.qq.com/js/pack/slide.v1.js';
                //$.getScript(_url,function(){
                this.slideObj = new slider({'auto': false});
                $('#' + this.slideObj.bigList + '').click(function () {
                    succorObj.detail.imgFlash.showOriginal();
                });
                //});
            },
            'showOriginal': function () {
                //alert('��ͼ��ʾ��'+this.slideObj.currentSlide+'��');
                var _o = $.extend({'contentId': 'floatDiv', 'maskId': 'tipsMask', 'opacity': 0.9});
                //�������ֲ�
                _maskObj = GyLib.Effect.Mask({id: _o.maskId, opacity: _o.opacity});
                _maskObj.create();
                _maskObj.show();

                //�������ݣ��������¼���
                if (this.isShowOriginal) {
                    this.slideOriginalObj.go(this.slideObj.currentSlide);
                    $("#album-dialog").show();
                    return;
                }
                //��ҳ��߶ȺͿ��
                var win = GyLib.Window().viewSize();
                $ww = win.width;		//window���
                $wh = win.height;		//window�߶�
                var dWidth = Math.ceil($ww * 0.9);	//���ڿ��
                var dHeight = Math.ceil($wh * 0.96);	//���ڸ߶�
                var x = ($ww - dWidth) / 2;
                var y = ($wh - dHeight) / 2;

                $("#album-dialog").tmpl('tpl_attach_Original', {'list': this.data});
                $(".album-close-btn").click(function () {
                    $("#album-dialog").hide();
                    $('#' + GyLib.Effect.Mask.handlerID).hide();
                });
                $("#album-dialog").height(dHeight).width(dWidth);
                $("#album-big-frame").height(dHeight - 20).width(dWidth);
                $("#album-small-frame").css('left', (dWidth - $("#album-small-frame").width()) / 2);
                $('.album-big-list li').width(dWidth).height(parseInt(dHeight - 150));
                $(".album-ht").css('top', (dHeight - $(".album-ht").height()) / 2);
                this.slideOriginalObj = new slider({
                    id: 'album-slide-group',
                    action: 'left',
                    bigFrame: 'album-big-frame',
                    bigList: 'album-big-list',
                    bigDirection: 'left',
                    smallFrame: 'album-small-frame',
                    smallList: 'album-small-list',
                    smallDirection: 'left',
                    prevBtn: 'album-slide-prev',
                    nextBtn: 'album-slide-next',
                    //arrow:'album-arrow-up',
                    auto: false,
                    bigStyle: 2
                });
                this.isShowOriginal = true;
                this.slideOriginalObj.currentSlide = this.slideObj.currentSlide;
                this.slideOriginalObj.go(this.slideObj.currentSlide);
                $("#album-dialog").PositionFixed({x: x, y: y}).show();
                //showDialog.show({id:'album-dialog3',bgcolor:"#000000",opacity:70});
            }
        },
        //��������չʾ
        "content": {
            'data': {},
            'show': function (cData, isAttach) {
                this.data = cData;
                cData = cData.replace(/&lt;(?:(?!&gt;).)+&gt;/g,'');
                $("#pj_content").append(cData);
                $("#pj_content h3").eq(0).css('padding-top', '30px');
                if ($("#pj_content h3").length > 1 && !!isAttach) {
                    $("#pj_content h3").eq(1).before('<div id="pj_attach_imgs"></div>');
                } else {
                    $("#pj_content").append('<div id="pj_attach_imgs"></div>');
                }
            }
        }
        //��ά��չʾ
        , "showQr": function (pid) {
            if (!pid || pid <= 0) return;
            var _qrContent = 'http://gongyi.qq.com/succor/detail.htm?id=' + pid;
            var _qr = qrcode(3, 'L');
            _qr.addData(_qrContent);
            _qr.make();
            $(".img_qrcode").html(_qr.createImgTag());
            //$(".img_qrcode").attr("src","http://chart.apis.google.com/chart?chs=75x75&cht=qr&chld=L|0&chl=http%3A%2F%2Fgongyi.qq.com%2Fsuccor%2Fdetail.htm%3Fid%3D"+pid);
            $("#weixin_qrcode").show();
        }
        //������Ϣչʾ
        , "base": {
            'data': {},
            'show': function (baseData) {
                if (!baseData) return;
                //succorObj.detail.base.data = baseData;
                $("#pj_name").html(baseData.title);
                //����ٷֱ�

                baseData.donate.needMoney = parseInt(baseData.donate.needMoney / 100);
                baseData.donate.obtainMoney = parseInt(baseData.base.obtainMoney);
                if (baseData.donate.needMoney > 0) {
                    baseData.donate.percentage = parseInt(baseData.donate.obtainMoney / baseData.donate.needMoney * 100);
                }
                /*if(baseData.base.obtainMoney > 0){
                    baseData.donate.obtainMoney = parseInt(baseData.base.obtainMoney);
                    console.log(baseData.base.obtainMoney)
                    if (baseData.donate.needMoney > 0) {
                        baseData.donate.percentage = parseInt(baseData.donate.obtainMoney / baseData.donate.needMoney * 100);
                    }
                }else{
                    baseData.donate.obtainMoney = 0
                    baseData.donate.percentage = 0;

                }*/
                //���ģ��
                $("#top_info_wrap").tmpl("tpl_top_base_info", {
                    vo: baseData
                });
            }
        },
        //��ʼ������ҳ����
        "init": function (pid) {
            pid = parseInt(pid);
            if (!pid) return false;
            if (isNaN(pid)) {
                window.location.href = "//gongyi.qq.com/succor";
                return;
            }

            window['_cb_fn_proj_'+pid] = function (data) {
                if (data.code != 0) {
                    alert(data.info);
                    return false;
                }
                //�Ƿ�������ת
                if (!!data.base.r_url && data.base.r_url != "" && data.base.id == 1212) {
                    window.location = data.base.r_url;
                    return;
                }

                var _showCallback = function () {
                    //end
                    //�ж��Ƿ�ΪԤ�������
                    var _pType = $.gyUtil.getQueryStr("ptype")
                        , _gtk = $.gyUtil.getQueryStr("tk");
                    if (_pType == 'preViewERP' && _gtk == $.gyUtil.getToken()) {
                        data.base.status = 3;
                    }
                    //end
                    var pid = data.base.id;
                    var eUin = data.base.eOrgUin;
                    //����ͼƬͼƬ
                    // data.base.img_500 = data.base.focusImg.syn_url + '/500';
                    if(!!data.base.focusImg){
                        data.base.img_500 = data.base.focusImg.syn_url + '/500';
                    }else if(!!data.base.img_mob_list){
                        data.base.img_500 = data.base.img_mob_list[0] + '/500';
                    }else if(!!data.base.img_list){
                        data.base.img_500 = data.base.img_list[0] + '/500';
                    }else{
                        console.log('����ͼƬȱʧ');
                    }

                    //��Ŀ��ʼ��ʱ���
                    var _date = new Date()
                    var _uStartTime = Date.parse(data.base.startTime.replace('-', '/').replace('-', '/'));
                    var _curTime = _date.getTime();
                    if (_curTime < _uStartTime) data.base.status = 5;

                    //û��΢��ID������ף����
                    //if(data.base.weiboID == "0") $('.main_bottom_left_bless').hide();
                    //������Ϣ

                    succorObj.detail.base.data = data.base;
                    succorObj.detail.base.show(data.base);
                    succorObj.statusTipsInit();
                    //�������ݳ�ʼ��
                    succorObj.shareSNS.init(data.base);
                    if (!!data.detail.process && (data.base.status == 2 || data.base.status == 1)){
                        succorObj.process.firstShow(data.detail.process[0]);
                    }

                    //start�ж��Ƿ�Ϊ�°�����
                    var _isNewReport = 0;
                    if (!!data.detail.endReport && !!data.detail.endReport.desc) {
                        _isNewReport = 1;
                    }
                    //if(!!data.detail.desc.endReport && data.base.status == 3 && _isNewReport == 1) succorObj.endReport.firstShow(data.detail.desc.endReport);
                    //end
                    //��ϸ��Ϣ
                    var _boolAttach = false;
                    var _descModuleTitle = {
                        'proj_budget':'<h3 class="title">��ĿԤ��</h3>',
                        'proj_exe_plan':'<h3 class="title">ִ�мƻ�</h3>',
                        'proj_implement_res':'<h3 class="title">��ĿЧ��</h3>',
                        'proj_exe_content':'<h3 class="title">ִ������˵��</h3>',
                        'proj_team_info':'<h3 class="title">��������</h3>',
                        'proj_donate_feedback':'<h3 class="title">��������</h3>',
                        'proj_invoice':'<h3 class="title">��Ʊ˵��</h3>'
                    };

                    if(!!data.detail.desc_module){
                        var _detailContent = '<h3 class="title">��Ŀ����</h3>' + data.detail.desc;
                        var _descModule = {
                            'proj_budget':'',
                            'proj_exe_plan':'',
                            'proj_implement_res':'',
                            'proj_exe_content':'',
                            'proj_team_info':'',
                            'proj_donate_feedback':'',
                            'proj_invoice':''
                        };
                        for( var i  in _descModule){
                            if(!!data.detail.desc_module[i]){
                                _descModule[i] =_descModuleTitle[i] + data.detail.desc_module[i];
                                _detailContent +=_descModule[i];

                            }
                        }

                        /* var _detailContent = data.detail.desc
                             + '<h3>��ĿԤ��</h3>' + data.detail.desc_module.proj_budget + '<br>'
                             + '<h3>ִ�мƻ�</h3>' + data.detail.desc_module.proj_exe_plan + '<br>'
                             + '<h3>ִ������˵��</h3>' + data.detail.desc_module.proj_exe_content + '<br>'
                             + '<h3>�Ŷӽ���</h3>' + data.detail.desc_module.proj_team_info + '<br>'
                             + '<h3>��������</h3>' + data.detail.desc_module.proj_donate_feedback + '<br>'
                             + '<h3>��Ʊ˵��</h3>' + data.detail.desc_module.proj_invoice + '<br>';*/
                    }else{
                        var _detailContent = '<h3 class="title">��Ŀ����</h3>' + data.detail.desc;
                    }

                    if (!!data.detail.attach && data.detail.attach.length > 0) _boolAttach = true;
                    succorObj.detail.content.show(_detailContent, _boolAttach);
                    //��ά��չʾ
                    succorObj.detail.showQr(pid);
                    //��ͼ�ֻ�
                    if (!!data.detail.attach) succorObj.detail.imgFlash.show(data.detail.attach);
                    //��֯��Ϣ
                    succorObj.detail.fundInfo.show(data.base);
                    if (data.base.hide_donate == 1) {
                        $(".main-donate-wrap").remove();
                    }

                    //״̬1ʱ��ʼ��������
                    if (data.base.status == 1) {
                        if (typeof(data.base.hide_donate) == "undefined" || data.base.hide_donate != 1) {
                            succorDonate.succorData = {
                                'fid': data.base.fundID,
                                'pid': data.base.id,
                                'title': data.base.title
                            };
                            succorDonate.init();
                        }
                    } else if (data.base.status == 3 && _pType != 'preViewERP') {
                        $("#middle_avi li").removeClass('current');
                        $("#m_menu_report").addClass('current').show();
                        $(".jzsm_info").hide();
                        //var _endReport = (!!data.detail.desc.report && !!data.detail.desc.report[0])?data.detail.desc.report[0]:'��Ŀ����ȴ��У�';
                        var _endReport = (_isNewReport == 1) ? data.detail.endReport.desc : (!!data.detail.report && !!data.detail.report[0]) ? data.detail.report[0] : '��Ŀ����ȴ��У�';
                        $("#process_end_report_desc").show().html(_endReport);
                        if (_isNewReport == 1) {
							$("#process_end_report_desc").show().html(_endReport);
                            
                            $("#process_end_report_desc h3").eq(0).css('padding-top', '10px');
                            $("#processListTop").prepend('<div id="endReportSummaryForProcess"></div>');
                            $("#endReportSummaryForProcess").tmpl('tpl_end_report_summary_for_process_list', {
                                vo: data.detail.desc.endReport,
                                process: data.detail.desc.process
                            });
                        }
						
                    } else if (data.base.status == 3 && _pType == 'preViewERP') {
                        $("#middle_avi li").removeClass('current');
                        $("#m_menu_report").addClass('current').show();
                        $(".jzsm_info").hide();
                        $.ajax({
                            type: 'post',
                            dataType: 'jsonp',
                            jsonp: 'jsoncallback',
                            url: 'http://npoapp.gongyi.qq.com/mp/project/end_report/preView/' + pid + '?g_tk=' + $.gyUtil.getToken() + "&pid=" + pid,
                            success: function (data) {
                                if (data.code != 0) window.location = '//gongyi.qq.com/succor';
								$("#process_end_report_desc").show().html(data.detail.desc);
                                
                                $("#process_end_report_desc h3").eq(0).css('padding-top', '10px');
                                //$("#processListTop").css('margin-top','0');
                                $("#process_desc").prepend('<div class="end-report-summary" id="endReportSummary"></div>');
                                $("#endReportSummary").tmpl('tpl_end_report_summary', {
                                    vo: data.detail
                                });
								
                            }
                        });
                    }
					
                    //�����б�
                    succorObj.donateLastList.show(data.detail.donateTopList);
                    //΢��֧���б�
                    //					succorObj.weiboList.weibo_id = data.base.weiboID;
                    //					succorObj.weiboList.show(data.detail.weiboTopList);
                    //��΢�����ʼ��
                    //					$("#sendWeiboW").succor_weibo({'type':4,'pid':pid,'buin':buin,weibo_title:'��Ѷ�־�'});
                    //��ʼ������ף��
                    //					succorObj.topZhufu.init(pid,buin);
                }

                //����ѯ��Ŀ�Ļ�������
                //http://ssl.gongyi.qq.com/cgi-bin/WXQueryOrder?jsoncallback=Zepto1473306628430&transcode=415&type=proj_base&_=1473306628525
                var _reqPar = {
                    id: pid
                    , type: "proj_base"
                }
                $.ajax({
                    type: 'get',
                    dataType: 'jsonp',
                    data: _reqPar,
                    jsonp: 'jsoncallback',
                    jsoncallback: "_cb_fn_proj_"+pid,
                    url: '//ssl.gongyi.qq.com/cgi-bin/ProjInfoQuery.fcgi',
                    success: function (baseData) {
                        if (baseData.code != 0) {
                            alert("��������");
                            return;
                        }
                        if(!!baseData.msg.stat && !!baseData.msg.stat.children_money){
                            baseData.msg.stat.recvedMoney = baseData.msg.stat.recvedMoney + baseData.msg.stat.children_money
                            baseData.msg.stat.donateNum = baseData.msg.stat.donateNum + baseData.msg.stat.children_times
                        }

                        if (!!baseData.msg.stat && !!baseData.msg.stat.recvedMoney) {
                            baseData.msg.base.obtainMoney = (baseData.msg.stat.recvedMoney) / 100;
                        }else if(baseData.msg.stat.recvedMoney ==0){
                            baseData.msg.base.obtainMoney = (baseData.msg.stat.recvedMoney) / 100;
                        }
                        var _rankPar = {
                            pid: pid
                        }
                        $.ajax({
                            type:'get',
                            dataType:'jsonp',
                            data: _rankPar,
                            jsonp: 'jsoncallback',
                            url: '//ssl.gongyi.qq.com/cgi-bin/gywcom_proj_ent_rank.fcgi',
                            success:function (res) {
                                baseData.msg.base.quotaMoney = (parseInt(res.data.sum) + parseInt(res.data.un_sum)) / 100;
                                data.base = $.extend(data.base, baseData.msg.base, baseData.msg);
                                _showCallback();
                            }

                        })
                    }
                });

            }
            /*var _jsFilename = 'pc.detail.' + pid + '.js';
            var url = 'http://gongyi.qq.com/js/succor_data/pcdetail/' + _jsFilename + '?_t=' + Math.random();*/
            /*ʹ���ƶ�������ӿ�*/
            // var _jsFilename = 'pc.detail.' + pid + '.js';
            var url = '//scdn.gongyi.qq.com/json_data/data_detail/'+pid % 100+'/detail.'+pid+'.js';
            document.write('<script src="' + url + '"></script>');
            /*$.ajax({
                'type': 'GET',
                'url': url,
                'dataType': 'jsonp',
                'jsonp': 'jsoncallback',
                'jsonpCallback': "_cb_fn_proj_"+pid,
                'timeout':2000,
                success:function () {
                    console.log('success')
                },
                error : function(xhr,textStatus){
                    console.log('error:'+textStatus);
                    if(textStatus == 'timeout'){
                        $.ajax({
                            'type': 'GET',
                            'url':'//ssl.gongyi.qq.com/cgi-bin/ProjInfoQuery.fcgi',
                            'dataType': 'jsonp',
                            'jsonp': 'jsoncallback',
                            'jsonpCallback': "_cb_fn_proj_"+pid
                        })
                    }
                }
            })*/
        }

    },
    //end detail
    //��Ŀ��չ
    "process": {
        'isload': false,
        'curPage': 1,
        'buin': 0,
        'pid': 0,
        'isExeOrg': false,
        'isAddInit': false,
        'load': function (page) {
            if (!this.isAddInit && this.isExeOrg == true) {
                this.isAddInit = true;
                succorObj.process.addInit();
            }
            if (!!page) {
                var targetOffset = $("#processListTop").offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 300);
            } else {
                page = succorObj.process.curPage;
            }

            if (this.isload && page == succorObj.process.curPage) return;
            succorObj.process.curPage = page;
            this.isload = true;
            var pid = succorObj.detail.base.data.id;
            var uin = succorObj.detail.base.data.exeOrganizerUin;
            // var curl = 'http://npoapp.gongyi.qq.com/succorv2/unprocess/getlist/' + pid + '/' + page;
            var curl = '//ssl.gongyi.qq.com/cgi-bin/WXUnprocessV2?pid=' + pid + '&row=10&curr=' + page;
            //https://ssl.gongyi.qq.com/cgi-bin/WXUnprocessV2?pid=1783&row=10&curr=2&soid=oproJj3AzstI7pJeJqsoiyKfgo6I&jsoncallback=_cb_fn_10&_=1508207707725&callback=_cb_fn_10
            try {
                $.getJSON(curl + '&g_tk=' + $.gyUtil.getToken() + '&jsoncallback=?&r=' + Math.random(), function (data) {
                    if (data.ret != 0) {
                        $.gyUtil.showDialog1({content: data.info, flag: 2});
                        return false;
                    }
                    var tempHtml = $('#endReportSummaryForProcess').html();
                    $('#processListTop').tmpl('tpl_process_list', data.info);
                    $(tempHtml).prependTo($('#processListTop'));
                });
            } catch (e) {
            }
        },
        'changeImg': function (obj) {
            var originalSrc = $(obj).attr('src');//('smallSrc');
            var _this = $(obj);
            if (_this.hasClass('beBig')) {
                $(obj).attr('src', originalSrc.replace(/\/180$/, '/0') + "").attr('title', '��С');
                _this.removeClass("beBig").addClass("beSmall");
            } else if (_this.hasClass('beSmall')) {
                $(obj).attr('src', originalSrc.replace(/\/0$/, '/180')).attr('title', '�Ŵ�');
                _this.removeClass("beSmall").addClass("beBig");
            }
        },
        firstShow: function (data) {
            if (data.desc != undefined) {
                $("#pj_content").tmpl('tpl_firstProcess', {
                    vo: data
                });
            }

        },
        getMore: function () {
            $("#middle_avi li").eq(1).click();
        },
        gotoLongDesc:function (id) {
            var pid = succorObj.detail.base.data.id;
            window.location.href = '//gongyi.qq.com/succor/proj_proc_detail.html?pid='+pid+'&id='+id;
        }
    },
    endReport: {
        getMore: function () {
            $("#middle_avi li").eq(2).click();
        }
        , firstShow: function (data) {
            $("#pj_content").tmpl('tpl_firstEndReport', {
                vo: data
            });
        }
    }
    //���¾����б�
    , "donateLastList": {
        'show': function (data) {
            if (!data) {
                $('#donate_toplist_wrap').remove();
                return;
            }
            $("#donate_last_wrap").tmpl('tpl_donate_top_list', {list: data});
        }
    },
    //����
    "shareSNS": {
        'init': function (data) {
            this._getShareInfo(data);
            $(".share_btn").click(function () {
                var type = $(this).attr('ctype');
                var info = succorObj.shareSNS._getShareInfo(data);
                $.gyUtil.shareSNS(type, info);
            });
        },
        '_getShareInfo': function (data) {
            if (data.status == 1) {
                var url = "//gongyi.qq.com/succor/detail.htm?id=" + data.id;
                var _url = encodeURI(url);
                var _title = '���ע#��Ѷ�־�-' + data.title + '#' + _url;
            }
            else {
                var url = "//gongyi.qq.com/succor";
                var _url = encodeURI(url);
                var _title = '��@' + data.exeOrganizer + '�����#��Ѷ�־�-' + data.title + '#��Ŀ����ļ����Բ����ɣ�����ִ�н׶Σ���л���ѵĴ�' + _url;
            }
            var _t = encodeURI(_title);
            _t = _t.replace(/\#/g, "%23");
            var _pic = encodeURI(data.img);
            var _site = '//gongyi.qq.com/succor/';
            return {'url': _url, 'title': _t, 'pic': _pic, 'site': _site};
        }

    },
    //�Ƽ���Ŀ
    "tjProject": {
        'data': {},
        'show': function (type) {
            if (!type) type = 2;
            var _url = '//scdn.gongyi.qq.com/js/succor_data/pclist/succor.p.hot.cate.' + type + '.js';
            $.ajax({
                'type': 'GET',
                'url': _url,
                'dataType': 'jsonp',
                'jsonp': 'jsoncallback',
                'jsonpCallback': '_CallbackHotP',
                'success': function (data) {
                    if (data.code == 0) {
                        succorObj.tjProject.data = data.info;
                        $("#other_hot_project_wrap").tmpl('tpl_hot_project', {
                            list: data
                        });
                    }
                }
            });
        }
    },
    //��ʼ��tab
    "tabClick": {
        'init': function () {
            $("#middle_avi li").each(function (i) {
                $(this).click(function (evt) {
                    $("#middle_avi li").removeClass('current');
                    $(this).addClass('current');
                    var _id = $(this).attr('wrapId');
                    $(".jzsm_info").hide();
                    $("#" + _id).show();
                    if (_id == "project_mdesc") {

                    } else if (_id == "process_desc") {	//��Ŀ��������
                        succorObj.process.load();
                        evt.preventDefault();
                    } else if (_id == "process_end_report_desc") {	//�����

                    }
                });
            });

        }

    },
    //��Ŀ״̬tips
    'statusTipsInit': function () {
        $("#status_tips li").each(function (i) {
            $(this).hover(function () {
                var _id = $(this).attr('id');
                $("." + _id).show();
            }, function () {
                var _id = $(this).attr('id');
                $("." + _id).hide();
            });
        });
    },
    //΢��ף��
    "topZhufu": {
        'init': function (pid, uin) {
            //ף������΢��
            $("#zhufu2Tips").click(function () {
                if ($("#zhufuTips2").css('display') == 'none') {
                    $("#zhufuTips2").show();
                } else {
                    $("#zhufuTips2").hide();
                }
            });
            $("#zhufuTips2 .closets").click(function () {
                $("#zhufuTips2").hide();
            });
            $("#zhufuTips2").succor_weibo({
                type: 4, pid: pid, buin: uin, callback: function () {
                    $("#zhufuTips2").hide()
                }
            });
        }
    },
    //��ʼ��
    "init": function () {
        //����id
        var pid = $.gyUtil.getQueryStr("id");
        this.tabClick.init();
        this.detail.init(pid);
        //�Ƽ���Ŀ
        this.tjProject.show();
    }

}

//���ҳ��Ƭ
var succorDonate = {
    'form': 'donateForm',
    'btn1': 'btn_donate1',
    'succorData': {},
    'init': function () {
        //����л�
        var $_amountInput = $("#" + succorDonate.form + " input[name='amount']");
        $(".marginrg").each(
            function (i) {
                $(this).click(function () {
                    $(".marginrg").removeClass('on');
                    $(this).addClass('on');
                    var _amount = $(this).attr('value');
                    if (!!_amount && _amount > 0) {
                        $_amountInput.val(_amount * 100);
                        $("#money_other_top").val("");
                    } else if ($(this).attr('ctype') == 'other') {
                        var _val = $("#money_other_top").val();
                        $_amountInput.val(_val * 100);
                        $("#money_other_top").keyup(function () {
                            $(this).val($(this).val().replace(/[^0-9\.]*/g, ""));
                        });
                    }
                });
            }
        );
        $("#" + succorDonate.form + " input[name='Fund_Id']").val(this.succorData.fid);
        $("#" + succorDonate.form + " input[name='Even_Name']").val(this.succorData.title);
        $("#" + succorDonate.form + " input[name='Prog_id']").val(this.succorData.pid);
        $_amountInput.val($(".marginrg").eq(0).attr("value") * 100);

        $("#money_other_top").keyup(function () {
            var _amount = $(this).val();
            if (!!_amount && _amount > 0)
                $_amountInput.val(_amount * 100);
            else
                $_amountInput.val("");
        });
        $("#" + this.btn1).bind('click', function () {
            succorDonate.toDonate();
        });
        //΢��֧��
        $("#btn_donate_wx").bind('click', function () {
            succorDonate.toDonate('wx');
        });

        //�ж��Ƿ��¼��������
        var _bLoginMoney = GyLib.Cookie().get("bLoginMoney");
        if (!!_bLoginMoney && _bLoginMoney > 0) {
            $_amountInput.val(_bLoginMoney);
            GyLib.Cookie().clear("bLoginMoney", "", "/", "gongyi.qq.com");
            //succorDonate.toDonate();
        }
        //��Դͳ��
        var _et = $.gyUtil.getQueryStr("et");
        if (_et != "") $("#" + succorDonate.form + " input[name='entry_type']").val(_et);
        //99�ڼ�ر�pc֧��
        // $("#pj_attach_imgs").after('<a href="javascript:GyLib.Donate.show(1,\'' + this.succorData.title + '\',' + this.succorData.fid + ',' + this.succorData.pid + ',1);" class="donate_btn_b"></a>');
    }
    , 'toDonate': function (dtype) {
        var _uin = $.gyUser.checkLogin();
        //�ж��Ƿ��¼
        if (!!dtype && dtype == 'wx') {

        } else if (!_uin) {
            var _money = $("#" + succorDonate.form + " input[name='amount']").val();
            var expires = new Date();
            expires.setTime(expires.getTime() + 50 * 60 * 1000); //50������Ч
            GyLib.Cookie().set("bLoginMoney", _money, expires, "/", "gongyi.qq.com");
            ptloginopenfun();
            return false;
        }
        var _amount = $("#" + this.form + " #amount_a").val();	//���
        if (_amount <= 0) {
            alert('��������');
            return false;
        }
        //token��ֵ
        var gy_key = $.gyUtil.getToken();
        $("#g_tk").val(gy_key);
        $("#qq").val(_uin);


        //977��Ŀ��Ҫ��������Ĳ���
        if (this.succorData.pid == 977) {
            var _addressVal = $('#selAddress').val();
            if (!_addressVal || _addressVal == 0) {
                alert('��ѡ��ʡ��');
                return false;
            }
            $("#" + succorDonate.form + " input[name='entry_type']").val('qz2');
            $("#" + succorDonate.form + " input[name='gf']").val('loc');
            $("#" + succorDonate.form + " input[name='gt']").val(_addressVal);
        }

        if (!!dtype && dtype == 'wx') {
            this.toWXDonate();
        } else {
            //�Ƹ�ͨ���½
            var _skey = GyLib.Cookie().get("skey");

            var _url = "https://www.tenpay.com/app/v1.0/communitylogin.cgi?p_uin=" + _uin + "&skey=" + _skey + "&u1=&appid=113&win=self";
            var _iframe = $('#tenpay_iframe');
            if (_iframe[0] == null)
                $('<iframe id="tenpay_iframe" frameborder="0px" scroll="no" border="0px" src="' + _url + '" width="1px" height="1px"></iframe>').appendTo('body');
            else
                _iframe.attr('src', _url);
            $("#" + this.form).submit();
        }

    }
    , 'dialog': function (obj) {
        var title = succorObj.detail.base.data.title;
        var pid = succorObj.detail.base.data.id;
        var fundid = succorObj.detail.base.data.fundID;
        GyLib.Donate.show(1, title, fundid, pid, 1, 1);
    }
    //΢��֧��
    , toWXDonate: function () {
        var _oldAction = $("#" + this.form).attr('action');
        $("#" + this.form).attr('action', 'http://gongyi.qq.com/succor/wxpay.v2.htm');
        $("#" + this.form).submit();
        $("#" + this.form).attr('action', _oldAction);
    }
}


//�ر�΢��Tips
function closeWeiboLayer() {
    $("div#replyWrap").remove();
}
function ptloginopenfun() {
    GyLib.Login.on();
}

var listenWeibo = function (obj) {
    var _u = $(obj).attr('account');
    $.gyUtil.listenWeibo(_u);
}

//qzone act
function selQzAddress(val) {
    if (!document.getElementById('donate_province_id')) {
        var _provinceNode = document.createElement('input');
        _provinceNode.id = "donate_province_id";
        _provinceNode.name = "donate_province_id";
        _provinceNode.type = 'hidden';
        _provinceNode.value = val;
        document.getElementById('donateForm').appendChild(_provinceNode);
    } else {
        document.getElementById('donate_province_id').value = val;
    }


}
/*  |xGv00|b48d647d2311bb9a303fc282b89789b3 */