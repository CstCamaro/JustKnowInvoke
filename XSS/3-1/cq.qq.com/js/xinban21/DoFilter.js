$(function(){
	var sw2 = 0;
	$(".XFtab li").mouseover(function(){
		sw2 = $(".XFtab li").index(this);
		myShow2(sw2);
	});
	function myShow2(i){
		$(".XFtab li").eq(i).addClass("selectTag").siblings("li").removeClass("selectTag");

		$(".Coupons").eq(i).stop(true,true).fadeIn(600).siblings(".Coupons").fadeOut(600);
	}
	//����ֹͣ������������ʼ����
	$(".Coupons").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow2(sw2)
		  sw2++;
		  if(sw2==3){sw2=0;}
		} , 4000);
	});
	$(".XFtab li").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow2(sw2)
		  sw2++;
		  if(sw2==3){sw2=0;}
		} , 4000);
	});
	//�Զ���ʼ
	var myTime = setInterval(function(){
	   myShow2(sw2)
	   sw2++;
	   if(sw2==3){sw2=0;}
	} , 4000);
})

Qfast.add('common',{path:"//cq.qq.com/js/xinban21/ued_common.js",type:"js"});//���ѵ�����ɾ��
Qfast.add('scroll',{path:"//cq.qq.com/js/xinban21/ued_scroll.js",type:"js",requires: ['common']});//���ѵ�����ɾ��

Qfast(false,'scroll',function(){
var Scroll = new uedScroll();
Scroll.scrollContId = "pic";//��������
Scroll.scrollSplit = {mytag:"div",myclass:"split"};//������Ԫ��class��
Scroll.arrLeftId = "btn_left";//��ť
Scroll.arrRightId = "btn_right";//�Ұ�ť
Scroll.sSliceIndex = 3;//ÿ�ι�����Ԫ�ĸ���  
Scroll.sDir = 1;//��������:1Ϊ���ҡ�2Ϊ���� 
Scroll.nStep = 20;//�ٶȣ�Խ��Խ�� 
Scroll.nType = 2;//��������:1Ϊ����ʽ��2Ϊѭ��ʽ��3��ѭ��ʽ�Զ�����ʱ���� 
Scroll.autoPlay = true;//�Ƿ��Զ����� 
Scroll.autoPlayTime = 10;//�Զ��������ʱ�䣨�룩 ����Ϊ0����ͣ��   
Scroll.init();
})

Qfast(false,'scroll',function(){
var Scroll01 = new uedScroll();
Scroll01.scrollContId = "pic01";//��������
Scroll01.scrollSplit = {mytag:"div",myclass:"s01"};//������Ԫ��class��
Scroll01.arrLeftId = "left01";//��ť
Scroll01.arrRightId = "right01";//�Ұ�ť
Scroll01.sSliceIndex = 1;//ÿ�ι�����Ԫ�ĸ���  
Scroll01.sDir = 1;//��������:1Ϊ���ҡ�2Ϊ���� 
Scroll01.nStep = 20;//�ٶȣ�Խ��Խ�� 
Scroll01.nType = 2;//��������:1Ϊ����ʽ��2Ϊѭ��ʽ��3��ѭ��ʽ�Զ�����ʱ���� 
Scroll01.autoPlay = true;//�Ƿ��Զ����� 
Scroll01.autoPlayTime = 3;//�Զ��������ʱ�䣨�룩 ����Ϊ0����ͣ��   
Scroll01.init();
})

Qfast(false,'scroll',function(){
var Scroll02 = new uedScroll();
Scroll02.scrollContId = "pic02";//��������
Scroll02.scrollSplit = {mytag:"div",myclass:"s02"};//������Ԫ��class��
Scroll02.arrLeftId = "left02";//��ť
Scroll02.arrRightId = "right02";//�Ұ�ť
Scroll02.sSliceIndex = 1;//ÿ�ι�����Ԫ�ĸ���  
Scroll02.sDir = 2;//��������:1Ϊ���ҡ�2Ϊ���� 
Scroll02.nStep = 20;//�ٶȣ�Խ��Խ�� 
Scroll02.nType = 2;//��������:1Ϊ����ʽ��2Ϊѭ��ʽ��3��ѭ��ʽ�Զ�����ʱ���� 
Scroll02.autoPlay = true;//�Ƿ��Զ����� 
Scroll02.autoPlayTime = 3;//�Զ��������ʱ�䣨�룩 ����Ϊ0����ͣ��   
Scroll02.init();
})

Qfast(false,'scroll',function(){
var Scroll03 = new uedScroll();
Scroll03.scrollContId = "pic03";//��������
Scroll03.scrollSplit = {mytag:"div",myclass:"s03"};//������Ԫ��class��
Scroll03.arrLeftId = "left03";//��ť
Scroll03.arrRightId = "right03";//�Ұ�ť
Scroll03.sSliceIndex = 1;//ÿ�ι�����Ԫ�ĸ���  
Scroll03.sDir = 1;//��������:1Ϊ���ҡ�2Ϊ���� 
Scroll03.nStep = 20;//�ٶȣ�Խ��Խ�� 
Scroll03.nType = 2;//��������:1Ϊ����ʽ��2Ϊѭ��ʽ��3��ѭ��ʽ�Զ�����ʱ���� 
Scroll03.autoPlay = true;//�Ƿ��Զ����� 
Scroll03.autoPlayTime = 3;//�Զ��������ʱ�䣨�룩 ����Ϊ0����ͣ��   
Scroll03.init();
})

LeftLoad();/*  |xGv00|e0288ef2373d037fbae8092e6167ea11 */

/*  |xGv00|96477fd96988e599320d6ed0c4b5ed63 */