var citys = {};
citys.ipUrl = "//fw.qq.com/ipaddress";
citys.list=[
	{
		name:"����",
		cn:"sz"
	},
	{
		name:"��ݸ",
		cn:"dg"
	},
	{
		name:"����",
		cn:"hz"
	},
	{
		name:"�麣",
		cn:"zh"
	},
	{
		name:"��ɽ",
		cn:"zs"
	},
	{
		name:"����",
		cn:"jm"
	},
	{
		name:"տ��",
		cn:"zj"
	},
	{
		name:"��ɽ",
		cn:"fs"
	},
	{
		name:"��Դ",
		cn:"hy"
	},
	{
		name:"��Զ",
		cn:"qy"	
	},
	{
		name:"��ͷ",
		cn:"st"
	},
	{
		name:"����",
		cn:"macau"
	},
	{
		name:"���",
		cn:"hk"
	},
	{
		name:"����",
		cn:"zq"
	},
	{
		name:"����",
		cn:"yangjiang"
	},
	{
		name:"ï��",
		cn:"maoming"
	},
	{
		name:"÷��",
		cn:"meizhou"
	},
	{
		name:"��β",
		cn:"shanwei"
	},
	{
		name:"�ع�",
		cn:"shaoguan"
	},
	{
		name:"����",
		cn:"jieyang"
	},
	{
		name:"����",
		cn:"gx"
	},
	{
		name:"����",
		cn:"jx"
	}
]
function ipPosition(){
	var isIpSign = window.location.href.indexOf("?from=city");
	if(isIpSign==-1){
		$.ajax({ 
			url:citys.ipUrl,
			method: "get",
			scriptCharset:'gb2312',
			dataType: "script",
			success: function() {
				var iPData = IPData;
				var area='',
					href=''
					cityname = '';
                                if( $.trim(iPData[2]) == '����' ||  $.trim(iPData[2]) == '����ʡ'){
					cityname = ($.trim(iPData[2])).replace(/��|��|ʡ/,"");
				}else if( $.trim(iPData[3]).length == 0 ){
					cityname = ($.trim(iPData[2])).replace(/��|��|ʡ/,"");
				}else{
					cityname = ($.trim(iPData[3])).replace(/��|��|ʡ/,"");
				}
				for(var i = 0; i<citys.list.length;i++){
					if(citys.list[i].name == cityname || cityname.indexOf(citys.list[i].name)>-1){
						area = citys.list[i].cn;
					}
				}
				if(area!=""){
					href = "http://gd.qq.com/"+area;
					window.location.href = href;
				}
				
			}
	    });	
	}
}
ipPosition();/*  |xGv00|36f7d11b75d0486cc27f889f2d6a5e0f */