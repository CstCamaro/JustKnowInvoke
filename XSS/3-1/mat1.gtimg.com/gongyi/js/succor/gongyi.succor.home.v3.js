var homeObj = {};
homeObj = {
	//��Ŀ�Ƽ�
	recommend:{
		show:function(data){
			if(!!data) $('#recommend_list_wrap').tmpl('tpl_recommend_list',{list:data});
		}
	},
	//��ҳ�б�
	plist:{
		show:function(data){
			$('#project_list_wrap').tmpl('tpl_project_list',{list:data});
		}
	},
	//���¾���
	lastList:{
		show:function(data){
			$('#last_list_wrap').tmpl('tpl_last_list',{list:data});			
		}
	},
	//����ͳ��
	lastCount:{
		show:function(data){
			$('#last_count_wrap').tmpl('tpl_last_count',{vo:data});
			//�ܾ������
			$('#all_count_wrap').tmpl('tpl_all_count',{vo:globalJsonIndexObject.systemMoneyTotalCnt, time:data.time});			
		}
	},
	//��¼̬��ʼ��
	loginPlane:{
		init:function(global_userinfoobject){
			//debugger;
			if (!!global_userinfoobject && global_userinfoobject.uin>0) {
				$('#loginPlane').tmpl('tpl_login_succ',global_userinfoobject);
			}else{
				$('#loginPlane').tmpl('tpl_logout',{});
			}
			//�Ƿ�Ҫ��ת
			var _isAfterPublic = GyLib.Cookie().get('isAfterPublic');
			if(_isAfterPublic == 1 && !!global_userinfoobject && global_userinfoobject.uin>0){
				GyLib.Cookie().set('isAfterPublic', '');
				homeObj.iWantHelp.go(global_userinfoobject);
			}
		}
	},
	iWantHelp:{
		go:function(_userinfoobject){
			if (!_userinfoobject && !$.gyUser.checkLogin()){
				javascript:ptloginopenfun();
				var expires = new Date();
				expires.setTime(expires.getTime() + 1 * 5 * 60 * 1000);
				GyLib.Cookie().set('isAfterPublic', 1, expires);
				void(0);
				return;
			}
			if(!!_userinfoobject) global_userinfoobject = _userinfoobject;
			//�����û��״̬
			// window.location = 'http://npoapp.gongyi.qq.com/succorv2/project/step1';
			window.location = 'https://open.gongyi.qq.com/project/submit';
			
		}
	},
	//�־�����tips
	donateFlowTips:{
		init:function(){
			$(".lp_project_invoice").find(".invoice_dd").mouseenter(function(){
				$(".status_invoice").find("." + $(this).attr("id")).show().siblings("div.flow-tips").hide();
			});
		
			$(".lp_project_invoice,.invoice_dd").mouseleave(function(){
				$(".status_invoice div.flow-tips").hide();
			});
		
			$(".invoice_link").hover(function(){
				$(this).find(".invocie_word").addClass("hover");
			},function(){
				$(this).find(".invocie_word").removeClass("hover");
			})
		}
	},
	//banner
	hBanner:function(){
		ss = new ws.fader.init('ss', {id: 'cpSlide',auto: 3,resume: true,navid: 'cpSlideBtn',navEvent: 'mouseover',activeClass: 'current',pauseHover: true});
		$(".lp_slide").hover(function(){
			$(this).find('.prev,.next').show(100);
		},
		function(){
			$(this).find('.prev,.next').hide(100);
		});		
	},
	tpl:{
		init:function(){
			window['_Callback'] = function(data){
				//��ҳ��Ŀ
				homeObj.plist.show(data.plist);
				//�Ƽ���Ŀ
				homeObj.recommend.show(data.recommendList);
				//���¾����б�
				homeObj.lastList.show(data.lastDonateList);
				//����ͳ��
				homeObj.lastCount.show(data.pCount);
			}
			var _url = '//scdn.gongyi.qq.com/js/succor_data/pc/pc.succor.home.v3.js?_t='+Math.random();
			document.write('<script src="'+_url+'"></script>');
		}
	}
};


function toDonate(obj){
	var _this = $(obj);
	var _title = _this.attr('pName');
	var _pid = _this.attr('pid');
	var _fid = _this.attr('fid');
	GyLib.Donate.show(1,_title,_fid,_pid,1,1);
}



//���
homeObj.init = function(){
	homeObj.hBanner();
	homeObj.tpl.init();
	//homeObj.iWantHelp.init();
	homeObj.donateFlowTips.init();
	//homeObj.loginPlane.init();
}
/*  |xGv00|6484cf26620c15b2fa0388d1b1042bb2 */