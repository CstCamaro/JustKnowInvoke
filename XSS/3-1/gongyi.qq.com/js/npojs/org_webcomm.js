var act_info_fun = function(jsondata,listtype){
	var HtmlToPage ="";
	if(jsondata.status_type == 'act'){
		if(jsondata.ACTIVITY_WEBTYPE == 1) {
			var divclassname = "bg bg_position2"; 
			var typename = "���ϻ";
		}else{
			var divclassname="bg";
			var typename = "���»";			
		}
		//var cityname = ShowCityRegion(-1,jsondata.DONATOR_PROVINCE,jsondata.DONATOR_CITY,0,Province_City,0);
		var cityname =Writepageinit(-1,jsondata.PROVINCE,jsondata.CITY,0,Province_City,1);
		if(!cityname) cityname="ȫ��";
		
		//activity_image http://gongyi.qq.com/images/npoimages/chatu1.gif
		//var act_showurl = "http://npoapp.gongyi.qq.com/gongyiactivity/index/3/"+jsondata.ORGANIZER_QQ+"/"+jsondata.ACTIVITY_ID;
		
		//url�Զ��л� 
		var act_showurl = jsondata.URL;
		
		var activity_image = jsondata.ACTIVITY_IMAGE;
		var timecharts = $.Tjs_ChangTimesViewMeth(jsondata.CREATE_TIME);
		HtmlToPage+="<div class=\"dongtai\">";
		HtmlToPage+="<div class=\""+divclassname+"\">";
		//
		jsondata.NAME = $.Tjs_HtmlEncode(jsondata.NAME);
		
		HtmlToPage+="</div>";
		HtmlToPage+="<div class=\"dongtai_con\"><span><a href='"+act_showurl+"' target='_blank' ><img src=\""+activity_image+"\" width=\"60\" height=\"60\" alt="+jsondata.NAME+"></a></span>";
		HtmlToPage+="<div class=\"neirong\">";
		
		
		 
		 
		 
		
		HtmlToPage+="<h3 class=\"STYLE2 STYLE8\" style=\"padding-left:0px;\"> <a href='"+act_showurl+"' target='_blank' title="+jsondata.NAME+">"+jsondata.NAME+"</a><span class=\"STYLE4\">��"+typename+"�� "+jsondata.ACT_STATUS_TEXT+"</span></h3>";
	
		HtmlToPage+="<p class=\"sorttime\" style=\"display:none\">"+jsondata.mod_time+"</p>";
		HtmlToPage+="</div>";
		HtmlToPage+="<ul>";
		
			
		 
		 
		/*
		HtmlToPage+="<li class=\"left\">�ʱ�䣺</li>";
		HtmlToPage+="<li class=\"right\">"+jsondata.BEGIN_TIMES_WEEK+"&nbsp;��&nbsp;"+jsondata.END_TIMES_WEEK+"</li>";
		HtmlToPage+="<li class=\"left\">��ص㣺</li>";
		HtmlToPage+="<li class=\"right\">"+cityname+"</li>";
		HtmlToPage+="<li class=\"left\">����ܣ�</li>";
		HtmlToPage+="<li class=\"right\">"+jsondata.ACT_INTRO+"&hellip;&hellip; </li>";
		HtmlToPage+="<li class=\"left\">������ֹ��</li>";
		HtmlToPage+="<li class=\"right\">"+jsondata.LASTENTER_TIMES_WEEK+"</li>";
		HtmlToPage+="<li class=\"left\">"+jsondata.REGISTER_NUM+"�˱���</li>";	
		*/
		if(jsondata.ACTIVITY_WEBTYPE == 1) {
			HtmlToPage+="<li class=\"left\">������ֹ��</li>";
			HtmlToPage+="<li class=\"right\">"+jsondata.LASTENTER_TIMES_WEEK+"</li>";
			HtmlToPage+="<li class=\"left\">����ܣ�</li>";
			HtmlToPage+="<li class=\"right\">"+jsondata.ACT_INTRO+"&hellip;&hellip; </li>";
			HtmlToPage+="<li class=\"left\">����������"+jsondata.REGISTER_NUM+"</li>";
		}
		else 
		{
			HtmlToPage+="<li class=\"left\">��ʼʱ�䣺</li>";
			HtmlToPage+="<li class=\"right\">"+jsondata.BEGIN_TIMES_WEEK+"</li>";
			HtmlToPage+="<li class=\"left\">��ص㣺</li>";
			HtmlToPage+="<li class=\"right\">"+cityname+"</li>";
			HtmlToPage+="<li class=\"left\">����ܣ�</li>";
			HtmlToPage+="<li class=\"right\">"+jsondata.ACT_INTRO+"&hellip;&hellip; </li>";
			HtmlToPage+="<li class=\"left\">������ֹ��</li>";
			HtmlToPage+="<li class=\"right\">"+jsondata.LASTENTER_TIMES_WEEK+"</li>";
			HtmlToPage+="<li class=\"left\">����������"+jsondata.REGISTER_NUM+"</li>";
		}
		HtmlToPage+="</ul>";
		HtmlToPage+="</div>";
		HtmlToPage+="</div>";
		
	}else if(jsondata.status_type == 'log'){
		//mod_time
		var timecharts = $.Tjs_ChangTimesViewMeth(jsondata.mod_time);
		var imagecode = "";
		if(jsondata.media_type==1 && jsondata.media_total_num>0){

			//junhaiguo 20110505 ��jsondata.images=null��ʱ������ֵ
			if(jsondata.images!=null)
			{
				var imgarray   = jsondata.images.images;
				for(var m=0;m<imgarray.length;m++){
					if(m>=4) break;
					//alert(imgarray[m]);
					imagecode+="<img src=\""+imgarray[m]+"\" style='max-height:82px;max-width:122px;height=100px'/>";				
				}
			}
			//alert(imagecode);
		}
		jsondata.title = $.Tjs_HtmlEncode(jsondata.title);
		HtmlToPage+="<div class=\"dongtai\">";
		HtmlToPage+="<div  class=\"bg bg_position1\">";
		HtmlToPage+="<h3 title="+jsondata.title+">�����˹�����־ <a href='http://npoapp.gongyi.qq.com/blog/detail/"+jsondata.qq+"/"+jsondata.id+"' target='_blank'><span class=\"STYLE3\">"+$.Tjs_Intercept_str(jsondata.title,60)+"</span></a></h3>";
		HtmlToPage+="<p class=\"time\">"+timecharts+"</p>";
		HtmlToPage+="<p class=\"sorttime\" style=\"display:none\">"+jsondata.mod_time+"</p>";
		HtmlToPage+="</div>";
		if(imagecode !="") ImageHtmlToPage ="<div>"+imagecode+"</div>"; else ImageHtmlToPage="";
		HtmlToPage+="<div class=\"dongtai_con\">"+$.Tjs_Intercept_str(jsondata.abstract,280,false)+"&hellip;&hellip;<span class=\"STYLE3\"><a href='http://npoapp.gongyi.qq.com/blog/detail/"+jsondata.qq+"/"+jsondata.id+"' target='_blank'>�鿴����</a></span>"+ImageHtmlToPage+"</div></div>";
	}else if(jsondata.status_type == 'photo'){
//			HtmlToPage+='<div class="nothing_newlist">';
//       	    HtmlToPage+='<img src="<%logo%>" width="50" height="50" /> ';
//            HtmlToPage+='<h3><a href="http://gongyi.qq.com/npo/customer.htm?uin=<%uin%>" target="_blank"><%orgname%></a></h3><span class="dongtai">���������</span><span><a href="http://gongyi.qq.com/npo/npophoto/photo_detail.html?aid=<%=@albumId|%>&uin=<%uin%>" target="_blank");" title="<%=@albumName|%>"><%=@albumName|%></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://gongyi.qq.com/npo/npophoto/photo_detail.html?aid=<%=@albumId|%>&uin=<%uin%>" target="_blank");" title="<%=@albumName|%>">�鿴</a></span>';
//			HtmlToPage+='<div class="nothing_newcontent none">';
//			HtmlToPage+='<a href="http://gongyi.qq.com/npo/npophoto/photo_show.html?aid=<%=@albumId|%>&uin=<%uin%>&id=<%=@sloc|%>" target="_blank">',	
//			'<img style="display:none;" src="http://imgcache.qq.com/ac/b.gif" onload="this.onload=null;QPHOTO.img.preLoad(this,\'<%=@pre|%>\',null,null,null,true,\'small\');"��title="<%=@name|%>" alt="<%=@name|%>" width="100" height="76" />',
//			'</a>';
//			HtmlToPage+='</div></div>';

		/*
		HtmlToPage+="<div class=\"dongtai\">";
		HtmlToPage+="<div  class=\"bg bg_position3\">";
		HtmlToPage+="<h3>�ϴ���5����Ƭ<span class=\"STYLE3\"> �鿴</span></h3>";
		HtmlToPage+="<p class=\"time\">ǰ�� 17:40</p>";
		HtmlToPage+="</div>";
		HtmlToPage+="<div class=\"dongtai_con\"> <img src=\"http://gongyi.qq.com/images/npoimages/chatu2.gif\" width=\"122\" height=\"82\" /> <img src=\"http://gongyi.qq.com/images/npoimages/chatu3.gif\" width=\"121\" height=\"82\" /> <img src=\"http://gongyi.qq.com/images/npoimages/chatu4.gif\" width=\"121\" height=\"82\" /> </div>";
		HtmlToPage+="</div>";
		*/
		//myView.init(jsondata);
		//var aa=$("#save_photo_info").html();
		//alert(aa);
	}
	return HtmlToPage;
};


//updated by junhaiguo 20110328 ȡ����ҳ�����һҳ����ʾ
//��ʼ����ҳ����
//var PageParameterSet={"record_total_num":"11","pagemax_num":10,"total_page_num":2,"thispagenum":"2"};
var InitPageContent 		= function(pagedataobject,weburl,urltype){
	var showpagebuttonMax = 10;//����ʾ���ٸ���ҳ��ť
	var pageslitnum = 5;//�����̫��ķ�ҳ�����������ҳ��ʼ	
	var record_total_num 	= pagedataobject.record_total_num;
	var pagemax_num 		= pagedataobject.pagemax_num;
	var total_page_num 		= pagedataobject.total_page_num;
	var thispagenum 		= pagedataobject.thispagenum;
	//update by niou begin
	//var pagehtml = thispagenum+"/"+total_page_num+"&nbsp;";
	var pagehtml;
	if(total_page_num==0)
	{
		pagehtml = thispagenum+"/1&nbsp;";
	}
	else
	{
		pagehtml= thispagenum+"/"+total_page_num+"&nbsp;"; 	
	}
	//update by niou end
	
	var sl = weburl.indexOf('?');
	if(sl>0){var urlflag = "&";}else{var urlflag = "?";}
	
	if(typeof urltype != 'undefined'){
		urlflag = urltype;
	}
	
	if(urlflag != "/"){
		var pagenumstring = "pagenum=";	
	}else{
		var pagenumstring = "";	
	}
	
	var befor_page_num = parseInt(thispagenum)-1;
	if(befor_page_num<1) befor_page_num = 1;
	if(thispagenum>1) var beforurl = weburl+urlflag+pagenumstring+befor_page_num
	else var beforurl = "javascript:void(0);"
	
	
	var lastbtn = firstbtn = lastpagebottom = firstpagebottom ="";
	if(total_page_num<=showpagebuttonMax){
		var pageshowlong 	= parseInt(total_page_num);
		var showindexpage 	= 1;
	}else{
		if(parseInt(thispagenum)<total_page_num)
		lastpagebottom ="<a href=\""+weburl+urlflag+pagenumstring+total_page_num+"\" >βҳ</a> ";
		lastbtn ="<a>...</a>&nbsp;";
		if(parseInt(thispagenum)-parseInt(pageslitnum) > 0 ){
			firstpagebottom ="<a href=\""+weburl+urlflag+pagenumstring+"1"+"\" >��ҳ</a> ";
			firstbtn ="<a>...</a>&nbsp;";
			
			var pageshowlong 		= parseInt(thispagenum)+parseInt(pageslitnum);
			var showindexpage 		= parseInt(thispagenum)-parseInt(pageslitnum);
		
		}
		else{
			var pageshowlong 	= showpagebuttonMax;
			var showindexpage 		= 1;
		}
	}
	if(thispagenum<=1)
	{
		//pagehtml+=firstpagebottom+"<a href=\""+beforurl+"\"  style=\"cursor:default;\">��һҳ</a> ";
	}
	else
	{
		pagehtml+=firstpagebottom+"<a href=\""+beforurl+"\" >��һҳ</a> ";
	}

	for(var i=showindexpage;i<=pageshowlong;i++){
		if(i==thispagenum) var pageclassname = " class='current'"; else var pageclassname="";
		var thisurl = weburl+urlflag+pagenumstring+i
		if(pageclassname=="")
			pagehtml+="<a href=\""+thisurl+"\" "+pageclassname+">"+i+"</a>&nbsp;";
		else
			pagehtml+="<a "+pageclassname+">"+i+"</a>&nbsp;";
			
		if((i>=parseInt(total_page_num))||(i-showindexpage+1)>=showpagebuttonMax){ lastbtn = "";break;}
			
	}	
	pagehtml+=lastbtn;
	
	var end_page_num = parseInt(thispagenum)+1;
	if(parseInt(end_page_num)>parseInt(total_page_num)) end_page_num = total_page_num;
	var endurl = weburl+urlflag+pagenumstring+end_page_num
	
	if(parseInt(thispagenum)>=parseInt(total_page_num)){
		//pagehtml+="<a href=\"javascript:void(0);\" style=\"cursor:default;\">��һҳ</a> ";
	}else{
		pagehtml+="<a href=\""+endurl+"\" >��һҳ</a> ";
	}
	
	pagehtml+=lastpagebottom;
	return pagehtml;
}


//updated by junhaiguo 20110907 ��תҳ��url �滻Ϊ window.loaction.href="getjson_huitie(thispagenum)";
//��ʼ����ҳ����
//var PageParameterSet={"record_total_num":"11","pagemax_num":10,"total_page_num":2,"thispagenum":"2"};
var InitPageContentForNewActivity 		= function(pagedataobject,weburl,urltype,scroll){
	var showpagebuttonMax = 10;//����ʾ���ٸ���ҳ��ť
	var pageslitnum = 5;//�����̫��ķ�ҳ�����������ҳ��ʼ	
	var record_total_num 	= pagedataobject.record_total_num;
	var pagemax_num 		= pagedataobject.pagemax_num;
	var total_page_num 		= pagedataobject.total_page_num;
	var thispagenum 		= pagedataobject.thispagenum;
	//update by niou begin
	//var pagehtml = thispagenum+"/"+total_page_num+"&nbsp;";
	var pagehtml;
	if(total_page_num==0)
	{
		pagehtml = thispagenum+"/1&nbsp;";
	}
	else
	{
		pagehtml= thispagenum+"/"+total_page_num+"&nbsp;"; 	
	}
	//update by niou end
	
	var sl = weburl.indexOf('?');
	if(sl>0){var urlflag = "&";}else{var urlflag = "?";}
	
	if(typeof urltype != 'undefined'){
		urlflag = urltype;
	}
	
	if(urlflag != "/"){
		var pagenumstring = "pagenum=";	
	}else{
		var pagenumstring = "";	
	}
	
	var befor_page_num = parseInt(thispagenum)-1;
	if(befor_page_num<1) befor_page_num = 1;
	if(thispagenum>1) var beforurl = weburl+urlflag+pagenumstring+befor_page_num
	else var beforurl = "javascript:void(0);"
	
	
	var lastbtn = firstbtn = lastpagebottom = firstpagebottom ="";
	if(total_page_num<=showpagebuttonMax){
		var pageshowlong 	= parseInt(total_page_num);
		var showindexpage 	= 1;
	}else{
		lastpagebottom ="<a href='javascript:getjson_huitie("+total_page_num+","+scroll+")' class=\"active\">βҳ</a> ";
		lastbtn ="<a>...</a>&nbsp;";
		if(parseInt(thispagenum)-parseInt(pageslitnum) > 0 ){
			//firstpagebottom ="<a href=\""+weburl+urlflag+pagenumstring+"1"+"\" class=\"active\">��ҳ</a> ";
			firstpagebottom ="<a href='javascript:getjson_huitie(1,"+scroll+")' class=\"active\">��ҳ</a> ";
			firstbtn ="<a>...</a>&nbsp;";
			
			var pageshowlong 		= parseInt(thispagenum)+parseInt(pageslitnum);
			var showindexpage 		= parseInt(thispagenum)-parseInt(pageslitnum);
		
		}
		else{
			var pageshowlong 	= showpagebuttonMax;
			var showindexpage 		= 1;
		}
	}
	if(thispagenum<=1)
	{
		pagehtml+=firstpagebottom+"<a href='javascript:getjson_huitie("+befor_page_num+","+scroll+")'  class=\"active\" style=\"cursor:default;\">��һҳ</a> ";
		//pagehtml+=firstpagebottom+"<a href=\""+beforurl+"\" class=\"active\" style=\"cursor:default;\">��һҳ</a> ";
	}
	else
	{
		//pagehtml+=firstpagebottom+"<a href=\""+beforurl+"\" class=\"active\">��һҳ</a> ";
		pagehtml+=firstpagebottom+"<a href='javascript:getjson_huitie("+befor_page_num+","+scroll+")' class=\"active\">��һҳ</a> ";
	}

	for(var i=showindexpage;i<=pageshowlong;i++){
		if(i==thispagenum) var pageclassname = " class='current'"; else var pageclassname="";
		var thisurl = weburl+urlflag+pagenumstring+i
		if(pageclassname=="")
			pagehtml+="<a href='javascript:getjson_huitie("+i+","+scroll+")' "+pageclassname+">"+i+"</a>&nbsp;";
			//pagehtml+="<a href=\""+thisurl+"\" "+pageclassname+">"+i+"</a>&nbsp;";
		else
			pagehtml+="<a "+pageclassname+">"+i+"</a>&nbsp;";
			
		if((i>=parseInt(total_page_num))||(i-showindexpage+1)>=showpagebuttonMax){ lastbtn = "";break;}	
	}	
	pagehtml+=lastbtn;
	
	var end_page_num = parseInt(thispagenum)+1;
	if(parseInt(end_page_num)>parseInt(total_page_num)) end_page_num = total_page_num;
	var endurl = weburl+urlflag+pagenumstring+end_page_num
	
	if(parseInt(thispagenum)>=parseInt(total_page_num)){
		pagehtml+="<a href=\"javascript:void(0);\" class=\"active\" style=\"cursor:default;\">��һҳ</a> ";
	}else{
		pagehtml+="<a href='javascript:getjson_huitie("+end_page_num+","+scroll+")' class=\"active\">��һҳ</a> ";
		//pagehtml+="<a href=\""+endurl+"\" class=\"active\">��һҳ</a> ";
	}
	
	pagehtml+=lastpagebottom;
	return pagehtml;
}

var InitPageContentForNewBlog 		= function(pagedataobject,scroll,weburl,urltype){
	scroll=1;
	
	var showpagebuttonMax = 10;//����ʾ���ٸ���ҳ��ť
	var pageslitnum = 5;//�����̫��ķ�ҳ�����������ҳ��ʼ	
	var record_total_num 	= pagedataobject.record_total_num;
	var pagemax_num 		= pagedataobject.pagemax_num;
	var total_page_num 		= pagedataobject.total_page_num;
	var thispagenum 		= pagedataobject.thispagenum;

	var pagehtml;
	if(total_page_num==0)
	{
		pagehtml = thispagenum+"/1&nbsp;";
	}
	else
	{
		pagehtml= thispagenum+"/"+total_page_num+"&nbsp;"; 	
	}
	var	urlflag="";
	if(urlflag != "/"){
		var pagenumstring = "pagenum=";	
	}else{
		var pagenumstring = "";	
	}
	
	var befor_page_num = parseInt(thispagenum)-1;
	if(befor_page_num<1) befor_page_num = 1;
	if(thispagenum>1) var beforurl = weburl+urlflag+pagenumstring+befor_page_num
	else var beforurl = "javascript:void(0);"
	

	var lastbtn = firstbtn = lastpagebottom = firstpagebottom ="";
	if(total_page_num<=showpagebuttonMax){
		var pageshowlong 	= parseInt(total_page_num);
		var showindexpage 	= 1;
	}else{
		lastpagebottom ="<a href='javascript:getComment("+total_page_num +","+scroll+")' class=\"active\">βҳ</a> ";
		lastbtn ="<a>...</a>&nbsp;";
		if(parseInt(thispagenum)-parseInt(pageslitnum) > 0 ){
			//firstpagebottom ="<a href=\""+weburl+urlflag+pagenumstring+"1"+"\" class=\"active\">��ҳ</a> ";
			firstpagebottom ="<a href='javascript:getComment(1,"+scroll+")' class=\"active\">��ҳ</a> ";
			firstbtn ="<a>...</a>&nbsp;";
			
			var pageshowlong 		= parseInt(thispagenum)+parseInt(pageslitnum);
			var showindexpage 		= parseInt(thispagenum)-parseInt(pageslitnum);
		
		}
		else{
			var pageshowlong 	= showpagebuttonMax;
			var showindexpage 		= 1;
		}
	}
	if(thispagenum<=1)
	{
		pagehtml+=firstpagebottom+"<a href='javascript:getComment("+thispagenum+","+scroll+")'  class=\"active\" style=\"cursor:default;\">��һҳ</a> ";
		//pagehtml+=firstpagebottom+"<a href=\""+beforurl+"\" class=\"active\" style=\"cursor:default;\">��һҳ</a> ";
	}
	else
	{
		var current = parseInt(thispagenum) -1;
		//pagehtml+=firstpagebottom+"<a href=\""+beforurl+"\" class=\"active\">��һҳ</a> ";
		pagehtml+=firstpagebottom+"<a href='javascript:getComment("+current+","+scroll+")' class=\"active\">��һҳ</a> ";
	}

	for(var i=showindexpage;i<=pageshowlong;i++){
		if(i==thispagenum) var pageclassname = " class='current'"; else var pageclassname="";
		var thisurl = weburl+urlflag+pagenumstring+i
		if(pageclassname=="")
			pagehtml+="<a href='javascript:getComment("+i+","+scroll+")' "+pageclassname+">"+i+"</a>&nbsp;";
			//pagehtml+="<a href=\""+thisurl+"\" "+pageclassname+">"+i+"</a>&nbsp;";
		else
			pagehtml+="<a "+pageclassname+">"+i+"</a>&nbsp;";
			
		if((i>=parseInt(total_page_num))||(i-showindexpage+1)>=showpagebuttonMax){ lastbtn = "";break;}	
	}	
	pagehtml+=lastbtn;
	
	var end_page_num = parseInt(thispagenum)+1;
	if(parseInt(end_page_num)>parseInt(total_page_num)) end_page_num = total_page_num;
	var endurl = weburl+urlflag+pagenumstring+end_page_num
	
	if(parseInt(thispagenum)>=parseInt(total_page_num)){
		pagehtml+="<a href=\"javascript:void(0);\" class=\"active\" style=\"cursor:default;\">��һҳ</a> ";
	}else{
		var current = parseInt(thispagenum)+1;
		pagehtml+="<a href='javascript:getComment("+current+","+scroll+")' class=\"active\">��һҳ</a> ";
		//pagehtml+="<a href=\""+endurl+"\" class=\"active\">��һҳ</a> ";
	}

	pagehtml+=lastpagebottom;
	return pagehtml;
}/*  |xGv00|721946bed529b0d701e1e3c382b05594 */