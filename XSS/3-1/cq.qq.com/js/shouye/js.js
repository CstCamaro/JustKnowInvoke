
function fade(){ 
//�����onmouseover�¼������ĺ��������ñ���v��ֵΪ100������(Ϊ//onmouseout������ʱ)Ϊ20 
var v=(event.type=="mouseover"?70:100)     
if(event.srcElement.tagName=="IMG"&&event.srcElement.className=="alpha")//���������classΪalpha��ͼƬ��ִ������Ĵ��� 
   with(event.srcElement){ 
        filters[1].apply()//����������ݵĳ�ʼ��ʾ��Ϊת������Ҫ��׼���� 
//����alpha�˾�����opacity��ֵΪ����v��ֵ 
        filters[0].opacity=v 
        filters[1].play() //��ʼת���� 
   } 
} 
document.onmouseover=fade//�������ʱ����fade���� 
document.onmouseout=fade //����ƿ�ʱ����fade���� 
/*  |xGv00|539b1f31fe5f4c741caa61f50568d2af */