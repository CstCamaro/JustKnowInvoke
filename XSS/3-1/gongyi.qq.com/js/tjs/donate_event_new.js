document.domain="qq.com";

if(window.top.location!=''){
	var Windows_ThispageUrl	="http://"+window.top.location.host+window.top.location.pathname+window.top.location.search;
}else{
	var Windows_ThispageUrl	=$.Tjs_GetThisPageUrl();
}

$.Tjs_setCookie("GY_ThisDo_Url",Windows_ThispageUrl,'','',"qq.com");
var Windows_ThispageFun="";
var SERVER_TEMP			= $.Tjs_HtmlEncode(window.location.search.replace(/.*\?/,"")); //HtmlEncode ���а�ȫ��֤



//ȡ�ɣе�ַ�ãϣϣˣɣţ����û�еĻ���ֱ����
//2010-1-20 ��ӳ��д��룬��������ߵĳ�������Ϳգ���Ĭ��һ��ֵ����
if(!$.Tjs_getCookie('QQ_IPAddress')){
	$.getScript("http://fw.qq.com:80/ipaddress?"+Math.random(), function(){
		var expires = new Date();
		expires.setTime(expires.getTime() + 6 * 30 * 24 * 60 * 60 * 1000); //6������Ч
		ipvalue = IPData[2]+","+IPData[3];
		$.Tjs_setCookie("QQ_IPAddress",ipvalue,expires,'','qq.com');
		var Global_QQ_IPAddress = ipvalue;
	});
}else{
	var Global_QQ_IPAddress 	= $.Tjs_getCookie('QQ_IPAddress');
}


/* ���ڵ��ƶ����� ------BEGIN*/
var TOPHEIGHT =10;			//Ĭ�ϵ�λ���ǰ�ť�ģԣϣУ�������;
var ClickButId = "";
var Donate_Abond = function(buttonobject){

	var divwhere = $.Tjs_Get_Object_Where('donate_div');
	ClickButId	 = buttonobject.id;
	var butwhere = $.Tjs_Get_Object_Where(ClickButId);

	var divtop  = divwhere[1];
	var divleft = divwhere[0];
	var buttop	= butwhere[1];
	var diff	= $.Tjs_getPageScroll();
	if(diff>10) TOPHEIGHT =diff+80;else TOPHEIGHT = buttop-180;
	var movetopnum = divtop-TOPHEIGHT;	//��Ҫ�����ƶ�������	


	if($('#donate_div_windows').html()=="" && $('#donate_div').html()!=''){
		$('#donate_div').hide();//����������
		$('#donate_div_windows').html($('#donate_div').html());	//�������ڵ������ƶ��ƶ�������
		$('#donate_div').html('');//��������ڵ�html��
		$('#donate_div_windows').show("slow");	//��ʾ�ƶ�����
		$('#close_aband_btid').show();
	}

	$.Tjs_createmaskLayout('','#FFFFFF',80); //�������ڲ�	
	
	//��������ֵ����ֵ
	var Tjs_CL_DivObjectArray = $("div").get().reverse(); 
	var Tjs_zIndex_aray = new Array();
	var Tjs_MaxzIndex_num =0;
	for(var i=0;i<Tjs_CL_DivObjectArray.length;i++){
		Tjs_zIndex_aray.push(Tjs_CL_DivObjectArray[i].style.zIndex);
		if(Tjs_MaxzIndex_num<Tjs_CL_DivObjectArray[i].style.zIndex) Tjs_MaxzIndex_num=Tjs_CL_DivObjectArray[i].style.zIndex;
	}
	var Tjs_MaskDivzIndexNum = Tjs_MaxzIndex_num+1;	
	$('#donate_div_windows').css('z-index',Tjs_MaskDivzIndexNum);//���㶨λ

	$.Tjs_OpenFlashShowDiv('donate_div_windows',{top:'-='+movetopnum},{top:divtop+'px',left:divleft+'px'},500); //�ƶ�

};


var Cancle_Donate_Abond = function(){
	$('#donate_div_windows').hide();
	$('#donate_div').html($('#donate_div_windows').html());
	$.Tjs_canclemaskLayout('','#FFFFFF',80); //�������ڲ�	
	$('#donate_div_windows').html('');
	$('#donate_div').show("slow");
	$('#close_aband_btid').hide();
};

/* ���ڵ��ƶ����� ----- END */




/* �ҵĹ�ע*/
var Attention_Fun = function(Attention_permitkeys){	
	if (!$.Tjs_getCookie("uin") && !$.Tjs_getCookie("skey")){
		ptlogin_init('��עǰ���ȵ�¼',$.Tjs_GetThisPageUrl(),'','','',true,0);
		openLogin(openparam_info);
		return false;
	}
	var href = "http://app.gongyi.qq.com/donation/donaterthis/"+Attention_permitkeys;
	document.getElementById("login_frame").src=href;
	setTimeout('document.getElementById("login_frame").src=""',1000);	
};
/* END */



/* ���Դ���---Begin*/
var inputguest_book = function(){
	document.getElementById('guest_inputtext_id').style.display="";
	//document.getElementById('guest_submit_id').style.display="";
};

var cancle_inputguest_book = function(){
	document.getElementById('guest_inputtext_id').style.display="none";
	//document.getElementById('guest_submit_id').style.display="none";
};


//alert($.Tjs_getCookie("GY_Guest_Flag"));
$.Tjs_setCookie("GY_Guest_Flag","true",'','',"qq.com");

var sh,sh2;
var SetTimsSh = 30;
var Timssh = SetTimsSh;

var save_inputguest_book = function(){
	var IsSave_Flag  = $.Tjs_getCookie("GY_Guest_Flag");
	if(IsSave_Flag=="true"){
		clearInterval(sh);
		clearInterval(sh2);
		Timssh = SetTimsSh;	

		
		var length_num=	$.Tjs_StrLength(document.getElementById('guest_book_context').value);
		var guest_book_context = document.getElementById('guest_book_context').value;
		if(guest_book_context=="[48��������]"){alert("��������������");document.getElementById('guest_book_context').focus();return false;}
		if(length_num>96){
			alert("���Ե�����ֻ��С�ڻ����48������!96���ֽ�,����ǰ��¼��"+length_num+"���ֽڣ�");
			return false;
		}
		document.getElementById('guest_book_form').action = "http://app.gongyi.qq.com/donation/savepageguest/ajax";
		document.getElementById('guest_book_form').target = "login_frame";//login_frame _blank
		document.getElementById('guest_book_form').submit();

		document.getElementById('guest_book_context').value="";
		setTimeout('document.getElementById("guest_book_form").reset();',100);	
		setTimeout('document.getElementById("login_frame").src=""',100);

		sh = setInterval("Clear_Flag()",SetTimsSh*1000);
		sh2= setInterval("times_add()",1000);
	}else{
		alert("��������Ƶ�ʹ��죬���Ժ��ٲ�����"+Timssh);
	}
};

function Clear_Flag(){
	$.Tjs_setCookie("GY_Guest_Flag","true",'','',"qq.com");
	clearInterval(sh);
}

function times_add(){
	Timssh=Timssh-1;
	if(Timssh<=0) Timssh=SetTimsSh;
}


/* ���Դ���---END*/






/* �ж�QQ�û��Ƿ��� ��¼Ȼ��ֵ */
var jsQQvalue ="";
var jsQQnick  ="";
function Qislogin(){
	if ($.Tjs_getCookie("uin") && $.Tjs_getCookie("skey")){
		if($.Tjs_getCookie("uin")) jsQQvalue = $.Tjs_getCookie("uin").replace(/^o0*/, "");		
		jsQQnick  = $.Tjs_getCookie("GY_qqnick");
	}else{
		$.Tjs_clearCookie("GY_Cookie_JF_TOTAL_NUM","","qq.com"); 
		$.Tjs_clearCookie("GY_Cookie_abond_name","","qq.com"); 
		$.Tjs_clearCookie("GY_Cookie_keys","","qq.com"); 
		$.Tjs_clearCookie("GY_Cookie_abandon_pk","","qq.com"); 
		$.Tjs_clearCookie("GY_Cookie_abandoninfo_pk","","qq.com"); 
	}
}
Qislogin();




/* ���������� */
function showjzamount(object,listid,idvalue){
	var formobject = document.getElementById(listid+"_payrequest");
	var thisvalue = object.value;
	formobject.abandoninfo_pk.value = idvalue;
	if(thisvalue=="-1"){
		$('#'+listid+'_other_num_div').show();
	}else{
		$('#'+listid+'_other_num_div').hide();
	}	
}



/* ѡ�������ʽ */
function selectType(banktype,listid,fornum_meth,url_flag)
{
	/*
	if(!document.getElementById("termobj").checked){
		alert('��������ܡ���Ѷ�������û�Э�顷���ܽ��о�')
		return false;
	}
	*/
	var formobject = document.getElementById(listid+"_payrequest");
	var textLength = $.Tjs_StrLength(formobject.memo.value);
	if(textLength > 100){
		alert("����дС��50�ֵ�����!");
	}else{
		var varBanktype=formobject.bank_type;
		varBanktype.value=banktype;
		onsumit(listid,fornum_meth,url_flag);	
	}
}


function checkname(name)
{
  var reg=/^[\u4E00-\u9FA5a-zA-Z\d^\.��_\-\(\)\[\]\&\s]+$/g;
   if(!reg.test(name))
  {
         return false;
  }
     return true;
}



/* �Ƹ�ͨ���߾��JS	*/
function onsumit(listid,fornum_meth,url_flag){
	var formobject = document.getElementById(listid+"_payrequest");
	var Div_Object = document.getElementById(listid+"_other_num_div");
	var QQobject   = formobject.qq;
	var fornum_meth = parseInt(fornum_meth);
	
	if(Div_Object.style.display==""){
		if(formobject.amountelse.value==""){
			alert("������������!");
			Div_Object.style.dispaly="";
			formobject.amountelse.focus();
			return false;
		}else{
			//var url_flag =url_flag;
			var isvalue_num2 = parseInt(parseFloat(formobject.amountelse.value)*100);
			if(isvalue_num2<=0){
				alert("���������0.01Ԫ"+isvalue_num2);
				return false;
			}
			if(url_flag=="0"){
				formobject.amount[fornum_meth].value = parseInt(parseFloat(formobject.amountelse.value)*100);
				//alert(formobject.amount[fornum_meth].value);
			}
		}
	}
	
	
	if(formobject.city.value == '' && typeof(Global_QQ_IPAddress)!="undefined"){
		formobject.city.value = Global_QQ_IPAddress;
	}


	if(formobject.nickname.value!="" && !checkname(formobject.nickname.value))
	{
		alert("�������Ϸ�,ֻ������������,Ӣ����ĸ�ͺ���!�����������޸ľ�������")
		formobject.nickname.select();
		formobject.nickname.focus();
		return false;
	}else{
		if(QQobject.value!="" && isNaN(QQobject.value))
		{
		   alert("QQ�ű���Ϊ����");
		   QQobject.value="";
		   QQobject.focus();
		   return false;
		}
		do_donate(listid);
	}

}

var do_donate = function(listid)
{
	var formobject = document.getElementById(listid+"_payrequest");
	var QQobject   = formobject.qq;

	QQobject.value = QQobject.value.replace(/(^\s*)|(\s*$)/g, "");
	if(QQobject.value!="" && isNaN(QQobject.value))
	{
	   alert("QQ�ű���Ϊ����");
	   QQobject.value="";
	   QQobject.focus();
	   return false;
	}else{
		if(parseInt(QQobject.value) > 4294960000){
		   alert("QQ������!");
		   QQobject.value="";
		   QQobject.focus();
		   return false;
		}
	}

	//alert(parseInt(QQobject.value));
	
	var textLength = $.Tjs_StrLength(formobject.memo.value);
	if(textLength > 100){
		alert("����дС��50���ֻ�100���ַ�������!");
		formobject.memo.select();
		formobject.memo.focus();
		return false;
	}


	var expires = new Date();
	expires.setTime(expires.getTime() + 12 * 30 * 24 * 60 * 60 * 1000); //1����Ч
	var ThisFromName_Value	= formobject.nickname.value;
	var ThisFromQQ_Value	= formobject.qq.value;
	var ThisFromCity_Value	= formobject.city.value;	
	var CookieStrValue =ThisFromName_Value+"^|^"+ThisFromQQ_Value+"^|^"+ThisFromCity_Value 
	$.Tjs_setCookie("GY_P_STR",CookieStrValue,expires,'','qq.com');

	if (!$.Tjs_getCookie("uin") || !$.Tjs_getCookie("skey")){
		formobject.submit();
	}else{
		if(QQobject.value=='')
			QQobject.value = $.Tjs_getCookie("uin").replace(/^o0*/, "");
		formobject.submit();
	}
};

/*�� �Ƹ�ͨ���߾�����	*/







/*	���־���JS	 */
function JiFen_PayInter_Save(keys){
	
	var formobiect		= document.getElementById(keys+"_jifen_request");
	var other_object	= document.getElementById(keys+"_other_num");
	var meth_object		= document.getElementById(keys+"_abandoninfo_pk");
	var aband_money		= 0;
	var radio_array		= document.getElementsByName(keys+'_abound_meth[]');

	var check_value = 0;
	var ischeckedflag = false;
	//alert("OKBEGIN");
	meth_object.value = radio_array[0].idvalue;
	//alert(meth_object.value);

	for(i=0;i<radio_array.length;i++){
		if(radio_array[i].checked && radio_array[i].value!="0"){
			check_value = radio_array[i].value;
			ischeckedflag  =true;
			meth_object.value 	= radio_array[i].idvalue;
			aband_money			= radio_array[i].value;
			other_object.value="";
		}
		if(ischeckedflag) break;
	}


	if(!ischeckedflag){
		if(other_object.value=="" || other_object.value=="0"){
			showinputotherinfo(keys);
			alert("��¼�����������");
			//other_object.focus();
			return false;
		}
		meth_object.value = "-1";	
		aband_money	=	other_object.value;
	}
	
	aband_money=aband_money.replace(/[^0-9|\.]*/g,'');

	formobiect.JF_TOTAL_NUM.value = parseInt(aband_money); 
	var thisvalue = formobiect.JF_TOTAL_NUM.value
	if(thisvalue<1){
		alert("�������Ļ��ֶ��̫С������С��1");
		other_object.focus();
		other_object.select();
		return false;
	}
	

    var aband_whoes		=document.getElementById(keys+"_abond_name").value;
	if($.Tjs_StrLength(aband_whoes)>40){
		alert("������ľ���ʹ�������������ܳ���20������,40���ַ�");
		return false;
	}


	if(aband_whoes!="" && !checkname(aband_whoes))
	{
		alert("�������Ϸ�,ֻ������������,Ӣ����ĸ�ͺ���!�����������޸ľ�������")
		//document.getElementById(keys+"_abond_name").value="";
		document.getElementById(keys+"_abond_name").focus();
		document.getElementById(keys+"_abond_name").select();
		return false;
	}

	var textLength = $.Tjs_StrLength(formobiect.memo.value);
	if(textLength > 100){
		alert("����дС��50���ֻ�100���ַ�������!");
		formobiect.memo.select();
		formobiect.memo.focus();
		return false;
	}


	Windows_ThispageFun = "JiFenInitSubmit()";

	Qislogin(); //QQ�Ƿ��¼��ʼ
	formobiect.JF_QQ_NUM.value = jsQQvalue;



	var expires = new Date();
	expires.setTime(expires.getTime() + 12 * 30 * 24 * 60 * 60 * 1000); //1����Ч
	var ThisFromName_Value	= aband_whoes;
	var ThisFromQQ_Value	= jsQQvalue;
	var ThisFromCity_Value	= formobiect.city.value;
	var CookieStrValue =ThisFromName_Value+"^|^"+ThisFromQQ_Value+"^|^"+ThisFromCity_Value 
	$.Tjs_setCookie("GY_P_STR", CookieStrValue, expires,'','qq.com');
	
	if(formobiect.JF_QQ_NUM.value==""){
		/*û�е�¼��¼��Ϊ*/
		$.Tjs_setCookie("GY_Cookie_JF_TOTAL_NUM",formobiect.JF_TOTAL_NUM.value,'','',"qq.com");
		$.Tjs_setCookie("GY_Cookie_abond_name",aband_whoes,'','',"qq.com");
		$.Tjs_setCookie("GY_Cookie_keys",keys,'','',"qq.com");
		$.Tjs_setCookie("GY_Cookie_abandon_pk",keys,'','',"qq.com");
		$.Tjs_setCookie("GY_Cookie_abandoninfo_pk",meth_object.value,'','',"qq.com");
		//&rebackfun=JiFenInitSubmit()
		


		$.Tjs_setCookie("GY_Cookie_memo",formobiect.memo.value,'','',"qq.com");
		//alert(keys);
		Windows_ThispageFun = "JiFenInitSubmit()";
		//alert(Windows_ThispageFun);
		//QQLogIn("����ǰ�����ȵ�¼");
		var s_url =$.Tjs_GetThisPageUrl();
		if(s_url.indexOf("?")==-1) s_url = $.Tjs_GetThisPageUrl()+"?rebackfun="+Windows_ThispageFun;
		else s_url = $.Tjs_GetThisPageUrl()+"&rebackfun="+Windows_ThispageFun;

		ptlogin_init("����ǰ�����ȵ�¼",$.Tjs_GetThisPageUrl(),Windows_ThispageFun,'','self',true,0);
		openLogin(openparam_info);
		return false;
	}else{
		$.Tjs_clearCookie("GY_Cookie_JF_TOTAL_NUM","","qq.com"); 
		$.Tjs_clearCookie("GY_Cookie_abond_name","","qq.com"); 
		$.Tjs_clearCookie("GY_Cookie_keys","","qq.com"); 
		$.Tjs_clearCookie("GY_Cookie_abandon_pk","","qq.com"); 
		$.Tjs_clearCookie("GY_Cookie_abandoninfo_pk","","qq.com"); 
		$.Tjs_clearCookie("GY_Cookie_memo","","qq.com");
	}


	//alert("test--OK!");
	formobiect.submit();
}


/* �����û�е�¼֮ǰ¼��������,�����������е�¼Ȼ��ֱ�ӽ��о���,��������¼��*/
function JiFenInitSubmit(){
	var keyscookie = $.Tjs_getCookie("GY_Cookie_keys");
	//alert(keyscookie);
	$.Tjs_clearCookie("GY_Cookie_keys","","qq.com");

	var formobiect			= document.getElementById(keyscookie+"_jifen_request");
	var other_object		= document.getElementById(keyscookie+"_other_num");
	var other_div_object	= document.getElementById(keyscookie+"_other_num_span");
	var meth_object			= document.getElementById(keyscookie+"_abandoninfo_pk");
	var meno_object			= formobiect.memo;
	var radio_array			= document.getElementsByName(keyscookie+'_abound_meth[]');
	//alert(keyscookie);
	var Cookie_abond_name		= $.Tjs_getCookie("GY_Cookie_abond_name");
	var Cookie_JF_TOTAL_NUM		= $.Tjs_getCookie("GY_Cookie_JF_TOTAL_NUM");
	var Cookie_abandoninfo_pk	= $.Tjs_getCookie("GY_Cookie_abandoninfo_pk");
	var Cookie_memo				= $.Tjs_getCookie("GY_Cookie_memo");

	formobiect.JF_TOTAL_NUM.value	= Cookie_JF_TOTAL_NUM;
	if(Cookie_memo)formobiect.memo.value			= Cookie_memo;

	if(Cookie_abond_name)
		document.getElementById(keyscookie+"_abond_name").value=Cookie_abond_name;

	meth_object.value = Cookie_abandoninfo_pk;
	if(Cookie_abandoninfo_pk=="-1"){
		radio_array[(radio_array.length-1)].checked= true;
		other_div_object.style.display = "";
		other_object.value = formobiect.JF_TOTAL_NUM.value;
	}else{
		for(i=0;i<radio_array.length;i++){
			if(radio_array[i].idvalue == Cookie_abandoninfo_pk){
				check_value = radio_array[i].value;
				radio_array[i].checked= true;
				break;
			}
		}
	}

	$.Tjs_setCookie("GY_ThisDo_Url",Windows_ThispageUrl,'','',"qq.com");
	JiFen_PayInter_Save(keyscookie);
}
/*	���־���JS END 	 */


//�ɽӿ�����Ҫ�ĺ���������ҳ��ر�parent���login����
function cancle_login(){
	ptlogin2_onClose();
}



/* QQ ��¼ */
function QQLogIn(LogTitle_Chart_set){
	if (typeof(LogTitle_Chart_set)=="undefined") var LogTitle_Chart_set="����ǰ�����ȵ�¼";
	//qq_login(0,LogTitle_Chart_set)
	ptlogin_init(LogTitle_Chart_set,$.Tjs_GetThisPageUrl(),'','','',true,0);
	openLogin(openparam_info);
	return false;

}


/* COPY THISPAGE URL*/
function copy_url_thispage(fontobject)
{	
	$.Tjs_JsCopyTo(window.location.toString());
	$(fontobject).html("<font color='#FF0000'>���Ƴɹ�</font>");
}



/* ���ݾ��ķ�ʽ��ͬ����ʾ����������*/
function showinputotherinfo(thisobject_id,idstr){
	document.getElementById(thisobject_id+"_trinfo_id").style.display='';
	/*
	var idarray = idstr.split(",");
	for(var i=0;i<idarray.length;i++){
		if(idarray=="") continue;
		if(idarray[i] == thisobject_id){
			document.getElementById(thisobject_id+"_trinfo_id").style.display='';
		}else{
			if(document.getElementById(idarray[i]+"_trinfo_id"))
				document.getElementById(idarray[i]+"_trinfo_id").style.display='none';
		}
	}
	*/
}


var MyQQ_JiFeng = 0;
function search_jifen_fun(listid){
	$.getScript("http://app.gongyi.qq.com/donation/getjifenvalue", function(){
		if(!rebackmsg.islogin){
			ptlogin_init('��ѯ����ǰ���ȵ�¼',$.Tjs_GetThisPageUrl(),'','','',true,0);
			openLogin(openparam_info);
			return false;
		}else{
			var url = rebackmsg.geturl;
			$('#search_jifen_span').removeAttr('onclick').css('cursor','text').html("<font color='#339933'>���ڲ�ѯ��...</font>");;
			$.getScript(url, function(){
				$('#search_jifen_span').parent().css('align','right');
				$('#search_jifen_span').removeAttr('onclick').css('cursor','text');
				$('#search_jifen_span').html("<font color='#339933'>����ǰ����"+MyQQ_JiFeng+"����</font>");
				$('#'+listid+'_other_num_span').show();
				$('#'+listid+'_other_num').val(MyQQ_JiFeng);
				
				var checkobject = document.getElementsByName(listid+'_abound_meth[]');
				checkobject[(checkobject.length-1)].checked=true;
				showinputotherinfo(listid,'');

			});
		}
	});
}/*  |xGv00|b667061e73285ff1f282310bac9db69e */