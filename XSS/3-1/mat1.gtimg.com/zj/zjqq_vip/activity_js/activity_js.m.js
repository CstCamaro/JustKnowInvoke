
    /**
     * @author lilylv
     */ 
	localhostPaht =  "http://vip.zjqq.mobi";
	
    var reg_host = localhostPaht+"/index.php/"
	var reg_host_img = localhostPaht+"/";
	
	document.write("<script language=javascript src='http://mat1.gtimg.com/zj/zjqq_vip/layer.m/layer.m.js'></script>");
	
	function showAlert(msg){
		var box = '<div style="display:none;color:#000;border:1px solid #ccc;background-color:#fbfbfb;width: 240px;height: 100px;position: fixed;top:50%;left:50%;margin:-50px 0 0 -120px;border-radius: 2px;z-index: 99999;font-size: 12px;-webkit-box-shadow:  1px 1px 1px #444;-moz-box-shadow:  1px 1px 1px #444;box-shadow:  1px 1px 1px #444;"><p style="padding:5px;line-height: 20px;font-family:SimSun;">'+msg+'</p><a href="javascript:;" class="close-alert-message" style="width: 60px;height: 20px;border: 1px #3e7ef8 solid;position: absolute;right: 10px;bottom:10px;text-align: center;line-height: 20px;color:#000;text-decoration: none;font-family:SimSun;">ȷ��</a></div>';
		var mg = $(box);
		var layer = $('<div style="position: fixed;top:0;left:0;width: 100%;height: 100%;z-index: 8888;background: #000;filter: alpha(opacity=60);-moz-opacity: 0.6;-khtml-opacity: 0.6;opacity: 0.6;"></div>');
		mg.appendTo('body');
		layer.appendTo('body');
		mg.fadeIn('fast');
		mg.find('.close-alert-message').click(function(){
			mg.hide().remove();
			layer.hide().remove();
		});
	}
	
	
  
   
	//����ajax jsonp�ύ������Ϣ
	function reg(activity_id){	
		$('#' + activity_id + '_reg_button').attr('disabled', 'disabled');
		var url = reg_host + 'sign/create/' + activity_id;
		var signSource = check_source();
		var timestamp = (new Date()).valueOf();
		var rand = timestamp+RndNum(4);
		$.ajax({
			cache: true,
			type: "get",
			url:url,
			data:$('#' + activity_id + '_reg_form').serialize()+ '&data[signsource]='+ signSource + 'rand = ' + rand,
			dataType:"jsonp",
			jsonp: "callback",          
			jsonpCallback:"reg_success_callback",    
			async: false,
			error: function(request) {
				layer.open({content: '�ύʧ�ܣ�������',btn: ['OK']});
				$('#' + activity_id + '_reg_button').removeAttr('disabled');
			},
			success: function(data) {
				data;
				$('#' + activity_id + '_reg_button').removeAttr('disabled');
			}
		});	
	}
	
	//����ajax post�ύ������Ϣ
	function reg_new(activity_id){	
		$('#' + activity_id + '_reg_button').attr('disabled', 'disabled');
		var url = reg_host + 'sign/submit/' + activity_id;
		var signSource = check_source();		 
		$.ajax({
			cache: false,
			type: "post",
			url:url,
			data:$('#' + activity_id + '_reg_form').serialize()+ '&data[signsource]='+ signSource + '&callback=reg_success_callback',   
			async: false,
			error: function(request) {
				layer.open({content: '�ύʧ�ܣ�������',btn: ['OK']});
				$('#' + activity_id + '_reg_button').removeAttr('disabled');
			},
			success: function(data) {
				data = JSON.parse(data);
				reg_success_callback(data);
				$('#' + activity_id + '_reg_button').removeAttr('disabled');
			}
		});
	
	}
	
	//�ύ������Ϣ��Ļص�����
	function reg_success_callback(data){    
		if(data.result == 'success'){
			if (typeof(reg_success) == 'function'){
				reg_success();
				if(data.pay.status==200){
					layer.open({
						content: data.pay.oid+'֧����'+data.pay.money+'Ԫ��',
						btn: ['ȥ֧��', 'ȡ��'],
						shadeClose: false,
						yes: function(){
							window.location.href=data.pay.url;
						}, 
						no: function(){
							
						}
					});
				}else if(data.pay.status==201){
					layer.open({
						content: '����������',
						btn: ['OK']
					});
				} 
			}else{
				layer.open({content: '�ύ�ɹ�',btn: ['OK']});
				if(data.pay.status==200){
					layer.open({
						content: data.pay.oid+'֧����'+data.pay.money+'Ԫ��',
						btn: ['ȥ֧��', 'ȡ��'],
						shadeClose: false,
						yes: function(){
							window.location.href=data.pay.url;
						}, 
						no: function(){
							
						}
					});
				}else if(data.pay.status==201){
					layer.open({
						content: '����������',
						btn: ['OK']
					});
				} 
			}
		}else{
			layer.open({content: data.result,btn: ['OK']});
		}
    }
     
    function check_tel(val,name){
		if ( val == "" ){
			var msg = "����д"+name;
		}else{
			var regu = /^[1][0-9][0-9]{9}$/; 
			var re = new RegExp(regu);
			if(re.test(val)){
				var msg = true;
			}else{
				var msg = "����д��ȷ��"+name;
			}
		}
		return msg;
    }
   
    function check_email(val,name){
		if ( val == "" ){
			var msg = "����д"+name;
		}else{
			var regu = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/; 
			var re = new RegExp(regu);
			if(re.test(val)){
				var msg = true;
			}else{
				var msg = "����д��ȷ��"+name;
			}
		}
		return msg;
    }
    
	/*�ж��豸��Դ*/
	function check_source(){
		if(window.TencentNews){
            signSource = 1;		//�ж��Ƿ�������Ѷ�ͻ���
        }else if(typeof WeixinJSBridge !== 'undefined'){
            signSource = 3;		//�ж��Ƿ�����΢��
        }/*else if(browser.versions.mobile){
            signSource = 2;		//�ж��Ƿ������ֻ���
        }*/else if(navigator.userAgent){
            signSource = 4;		//�ж��Ƿ�����΢��pc
		}else{
            signSource = 0;
        }
		return signSource;
	}

	/*�����ֻ���֤��*/
	function sendprove(activity_id){
		var tel = $('#mobile').val();
		msg = check_tel(tel,'�ֻ�����')
		if(msg===true){
			$('#' + activity_id + '_send_prove').attr('disabled', 'disabled');
			
			var c=10;
			var id=activity_id + '_send_prove';
			var message = 's���ٻ�ȡ';
			var jump = setInterval(function(){
				c--;
				$('#' + id).val('��'+c+message);
				if(c<=0){
					clearInterval(jump);
					$('#' + id).val('��ȡ��֤��');
					$('#' + activity_id + '_send_prove').removeAttr('disabled', 'disabled');
				}
			},1000)
			
			var url = reg_host + 'pub/sendProve';
			$.ajax({
				cache: true,
				type: "get",
				url:url,
				data:'id=' + activity_id + '&mobile='+ tel,
				dataType:"jsonp",
				jsonp: "callback",          
				jsonpCallback:"send_success",    
				async: false,
				error: function(request) {
					layer.open({content: '�ύʧ�ܣ�������',btn: ['OK']});
				},
				success: function(data) {
					data;
				}
			});
		}else{
			layer.open({content: msg,btn: ['OK']});
		}	
	}

	function send_success(data){
		layer.open({content: data.message,btn: ['OK']});
	}
	
	function up_img(activity_id)
    {
    	//var url = reg_host + 'upload/uploadImage.html';
		var url = "http://v0.api.upyun.com/vipupload";
		$("#gun").show();
    	if(checkSize()) {
			var type = checkFileType();
			if(type==true){
				var cur_img_num = $('.image_item').length;
				if(cur_img_num >= img_num) {	
					$("#gun").hide();
					layer.open({content: '\u6700\u591a\u53ea\u80fd\u4e0a\u4f20' + img_num + '\u5f20\u56fe\u7247',btn: ['OK']});			
					return ;
				} else {
					var form = $('#formImg');
					var frame = $('#frame_img');
					if (!frame[0]) {
						frame = $('<iframe id="frame_img" name="frame_img" style="display:none;" ></iframe>');
					}
					form.append(frame);
					form.attr('target', 'frame_img');
					form.attr('action', url);
					form.submit();
					
					$.when(check_img_uploaded($('#save-key').val()))
                        .done(function( data ){
                            if(callback){
                                callback( data );
                                $("#gun").hide();
                                up_img_init();
                            }
                        })
                        .fail(function(){
                            layer.open({content: '�ϴ���ʱ����',btn: ['OK']});
                            $("#gun").hide();
                            up_img_init();}
                    );
				}
			}else if(type===false){
				$("#gun").hide();
				layer.open({content: '\u60a8\u4e0a\u4f20\u7684\u6587\u4ef6\u6709\u8bef\u002c\u8bf7\u91cd\u8bd5\uff01',btn: ['OK']});	
			}else{
				$("#gun").hide();
			}
    	}else{
			$("#gun").hide();
			layer.open({content: '\u8bf7\u4e0a\u4f20\u5c0f\u4e8e\u0032\u004d\u7684\u56fe\u7247\uff01',btn: ['OK']});
		}
    }
	
	function up_img_init()
    {		
		var url = reg_host + 'upload/uploadInit';
		var timestamp = (new Date()).valueOf();
		var rand = timestamp+RndNum(4);		
		$.ajax({
			cache: true,
			type: "get",
			url:url,
			data:'rand = ' + rand,
			dataType:"jsonp",
			jsonp: "callback",          
			jsonpCallback:"up_img_init_callback",    
			async: true,
			error: function(request) {
				alert("fail");
			},
			success: function(data) {
				data;
			}
		});		
    }
	
	function up_img_init_callback(data){
		$('#bucket').val(data.param.bucket);
		$('#save-key').val(data.param.savekey);
		$('#expiration').val(data.param.expiration);
		$('#return-url').val(data.param.returnurl);
		$('#x-gmkerl-thumbnail').val(data.param.xgmkerlthumbnail);
		
		$('#policy').val(data.policy);
		$('#signature').val(data.signature);
	}
	
	function check_img_uploaded(src){
		var checkNum = 5;
		var dfd = $.Deferred();
		var url = reg_host + 'upload/checkImg.html';
		check();
		function check(){
			var timestamp = (new Date()).valueOf();
			var rand = timestamp+RndNum(4);
			$.ajax({
				cache: true,
				type: "get",
				url:url,
				data:'path='+src + '&rand='+rand,
				dataType:"jsonp",
				jsonp: "callback",
				jsonpCallback:"img_callback_callback",
				async: true,
				error: function(request) {
					alert("fail");
				},
				success: function(data) {
					if(data.status=='ok'){
						dfd.resolve(data);
					}else{
						if( checkNum-- >= 0){
							setTimeout(check,1000);
						}else{
							dfd.reject();
						}
					}
				}
			});
		}
		return dfd.promise();
	}
	
	function img_callback_callback(data){	
		if(data.status=='ok'){
			$("#img_leave_num").html(--img_num_count);
			
			var div = $('<div class="image_item img "><img src="'+data.path+'!thumb"/><a href="javascript:void(0);" onclick="del_image($(this))"> </a><input type="hidden" name="data[img_path][]" value="'+data.path+'" /><input type="hidden" name="data[img_thumb_path][]" value="'+data.path+'!thumb" /><input type="hidden" name="data[img_thumb_big_path][]" value="'+data.path+'!thumb.big" /><input type="text" name="data[img_desc][]"/ placeholder="������ͼƬ���" class="img_desc"></div>');
    		$('#my_images').prepend(div);

			$("#gun").hide();
			up_img_init();
		}						
	}	
	
	function checkFileType(){
		var ret = true;
		var f = document.getElementById("userfile");
		fileType=f.value.substr(f.value.lastIndexOf(".")).toLowerCase();
		if(fileType=='.jpg' || fileType=='.png' || fileType=='.gif'){
			ret = true;
		}else if(fileType==''){
			ret = '';
		}else{
			ret = false;
		}
        return ret;
	}
	
	function checkSize() {
    	var ret = true;
		var f = document.getElementById("userfile");
        if (f.files && f.files[0]) {
            var fv = f.files[0].size;
			if(fv > 2097152) {
            	ret = false;
            	return ret;
            }
        } else {
            var url = f.value + '?t=' + Math.random();
            var img = new Image();
            img.src = url;
            img.onreadystatechange = function () {
                if (img.readyState == "complete") {
					if(img.fileSize > 2097152) {						
                    	ret = false;
                    	return ret;
                    }
                }
            };
        }
    	return ret;
    }
	
	function del_image(obj){
		$("#img_leave_num").html(++img_num_count);
		obj.parent().remove();
	}
	
	//����֤��ͶƱ
	function vote_check(activity_id,voteid){
		$.ajax({
			cache: false,
			type: "get",
			url:localhostPaht+"/pub/getSid",
			dataType:"json",
			error: function(request) {
				layer.open({content: "�ύʧ�ܣ�������",btn: ['OK']});
			}
		}).done(function(data){
			var sid = data;	
			layer.open({
				content: "<img src='"+localhostPaht+"/pub/getPng?sid="+sid+"'><input type='text' id='pass' class='layui-layer-input' value=''>",
				btn: ['ȷ��', 'ȡ��'],
				shadeClose: false,
				yes: function(){
					pass = $('#pass').val();
					var url = reg_host + 'vote/vote.html';
					$.ajax({
						cache: false,
						type: "get",
						url:url,
						data:'activity_id=' + activity_id + '&voteid='+ voteid + '&sid='+sid+'&code='+pass,
						dataType:"jsonp",
						jsonp: "callback",          
						jsonpCallback:"vote_success_callback",    
						async: false,
						error: function(request) {
							layer.open({content: "�ύʧ�ܣ�������",btn: ['OK']});
						},
						success: function(data) {
							data;
						}
					});
				}, no: function(){
					
				}
			});				
		});
	}
	
	//����֤��ͶƱ
	function vote(activity_id,voteid){
		var url = reg_host + 'vote/vote.html';		
		$.ajax({
			cache: false,
			type: "get",
			url:url,
			data:'activity_id=' + activity_id + '&voteid='+ voteid,
			dataType:"jsonp",
			jsonp: "callback",          
			jsonpCallback:"vote_success_callback",    
			async: false,
			error: function(request) {
				layer.open({content: "�ύʧ�ܣ�������",btn: ['OK']});
			},
			success: function(data) {
				data;
			}
		});
	}
	
	//ͶƱ�ɹ���Ļص�����
	function vote_success_callback(data){  
		if(data.status == 'ok'){
			if (typeof(vote_success) == 'function'){
				vote_success(data.voteid);
			}else{				
				var score = $("#score_"+data.voteid).text();
				score = parseInt(score) + 1;
				$("#score_"+data.voteid).text(score);				
				layer.open({content: data.msg,btn: ['OK']});
			}
		}else{
			layer.open({content: data.msg,btn: ['OK']});
		}
    }	
	
	function RndNum(n){
		var rnd="";
		for(var i=0;i<n;i++)
			rnd+=Math.floor(Math.random()*10);
		return rnd;
	}
	
	//��ʼ�����Ϳ⼰����
	$(function () {
		var carList = {};
		
		if($('.car-brand').length > 0){
			$(".car-brand").one("mouseover",function(){
				setCarSelect();
			});
		}
		
		
		if($('.city-province').length > 0){
			$(".city-province").one("mouseover",function(e){
				setCitySelect();
			});
		}
		
		if($('.input-date').length > 0){
			$.getScript('http://mat1.gtimg.com/zj/zjqq_vip/laydate/laydate.js');			
			$('.input-date').on('click',function(){	
				laydate.skin('molv');
				laydate({istime: false, format: 'YYYY-MM-DD'});
			})		
		}
		
		function setCarSelect(){
			$.getJSON(localhostPaht+'/car/carList?id='+id,function(carList){
			//$.getJSON(localhostPaht+'/images/upload/car/car_'+id+'.js',function(carList){
				$('.car-brand').each(function(){
					var _this_ = $(this);
					var name = _this_.attr('name');
					var carGroupId = name.substring(name.indexOf('[')+1,name.indexOf(']'));
					var options = '<option value="">��ѡ��Ʒ��</option>';
					$.each(carList[carGroupId],function(){
						options += '<option value="' + this.name + '" data-cid="' + this.id + '">' + this.name + '</option>';
					});
					// $(options).appendTo(_this_);
					_this_.html(options);
					
					_this_.on('change',function(){
						var id = $(this).find("option:selected").attr('data-cid');
						var opts = '<option value="">��ѡ����</option>';
						if(id){
							$.each(carList[carGroupId][id].serialList,function(){
								opts += '<option value="' + this.name + '">' + this.name +'</option>';
							});
							$('.motorcycle-type[name="' + name + '"]').html(opts);
						}else{
							$('.motorcycle-type[name="' + name + '"]').html('<option value="">��ѡ����</option>');
						}
					});
				});
			});
		}
		
		function setCitySelect(){
			var areaList = {};
			$.getJSON(localhostPaht+'/city/cityList?id='+id,function(data){
				var drawCity = function(data,name,next){
					var aNum = 0;
					var opts = '';
					if(next.indexOf("city-city")>-1){
						opts = '<option value="" data-cid="0">��ѡ�����</option>';
					}else{
						opts = '<option value="">��ѡ������</option>';
					}
					
					var area = {};
					$.each(data,function(){
						opts += '<option value="' + this.name + '" data-cid="' + this.id + '">' + this.name + '</option>';
						if(this.areaList && aNum++ == 0){
							area = this.areaList;
						}
					});
					
					$(next + '[name="' + name + '"]').html(opts);
						return area;
				};

				$('.city-province').each(function(){
					var _this_ = $(this);
					var name = _this_.attr('name');
					var cityGroupId = name.substring(name.indexOf('[')+1,name.indexOf(']'));
					var options = '<option value="" data-cid="0">��ѡ��ʡ��</option>';
					var firstId = 0;
					var firstArea = {};
					var cNum = 0;
					$.each(data[cityGroupId],function(){
						if(cNum++ == 0){
							firstId = this.id;
						}
						options += '<option value="' + this.name + '" data-cid="' + this.id + '">' + this.name + '</option>';
					});
					_this_.html(options);
					/*
					firstArea = drawCity(data[cityGroupId][firstId].cityList,name,'.city-city');
					if($.isEmptyObject(firstArea)){
						$('.city-county[name="' + name + '"]').remove();
					}else{
						drawCity(firstArea,name,'.city-county');
					}
					*/
					_this_.on('change',function(){
						
						
						var sid = $(this).find("option:selected").attr('data-cid');
						var cid = $('.city-city[name="' + name + '"]').find("option:selected").attr('data-cid');
						
						if(sid=='0'){
							$('.city-city[name="' + name + '"]').html('<option value="" data-cid="0">��ѡ�����</option>');
							$('.city-county[name="' + name + '"]').html('<option value="">��ѡ������</option>');
							return;
						}
						var first = drawCity(data[cityGroupId][sid].cityList,name,'.city-city');
						
						if($.isEmptyObject(first)){
							$('.city-county[name="' + name + '"]').remove();
						}else{
							//drawCity(first,name,'.city-county');
						}
					});
				});
				
				$('.city-city').on('change',function(){
					var name = $(this).attr('name');
					var sid = $('.city-province[name="' + name + '"]').find("option:selected").attr('data-cid');
					var cid = $(this).find("option:selected").attr('data-cid');
					var cityGroupId = name.substring(name.indexOf('[')+1,name.indexOf(']'));
					if(cid=='0'){
						$('.city-county[name="' + name + '"]').html('<option value="">��ѡ������</option>');
						return;
					}
					var areaData = data[cityGroupId][sid].cityList[cid].areaList;
					if(!$.isEmptyObject(areaData)){
						drawCity(areaData,name,'.city-county');
					}
				});

			});
			
		}
	})/*  |xGv00|39fbd8d3adcd8ff23356b2e550d730e2 */