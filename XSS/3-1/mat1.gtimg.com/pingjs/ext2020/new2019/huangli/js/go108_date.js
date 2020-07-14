function DateSelector(selYear, selMonth, selDay)                      
{    
    this.selYear = selYear;      
    this.selMonth = selMonth;    
    this.selDay = selDay;        
    this.selYear.Group = this;   
    this.selMonth.Group = this;
	  //Ĭ��Ϊ����
	  this.Calendar = 1;
    // ����ݡ��·������˵���Ӵ���onchange�¼��ĺ���
    if(window.document.all != null) // IE 
    {
        this.selYear.attachEvent("onchange", DateSelector.Onchange);  
        this.selMonth.attachEvent("onchange", DateSelector.OnMonthchange);
    }
    else // Firefox              
    {
        this.selYear.addEventListener("change", DateSelector.Onchange, false); 
        this.selMonth.addEventListener("change", DateSelector.OnMonthchange, false);
    }

    if(arguments.length == 4) // ��������������Ϊ4�����һ����������ΪDate����                           
        this.InitSelector(arguments[3].getFullYear(), arguments[3].getMonth() + 1, arguments[3].getDate());
    else if(arguments.length == 6) // ��������������Ϊ6�����������������Ϊ��ʼ����������ֵ              
        this.InitSelector(arguments[3], arguments[4], arguments[5]);
	else if(arguments.length == 8) // ��������������Ϊ8����������������Ϊ��ʼ�������պ���������ֵ              
    {
		this.selCalendar = arguments[6];
		this.selCalendar.Group = this;
		if(window.document.all != null)
		{
			this.selCalendar.attachEvent("onchange", DateSelector.Onchange);
		}else
		{
			this.selCalendar.addEventListener("change", DateSelector.Onchange, false);
		}
		this.InitSelector(arguments[3], arguments[4], arguments[5], arguments[7]);
	}
    else // Ĭ��ʹ�õ�ǰ����
    {
        var dt = new Date();
        this.InitSelector(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());  
    }
}    

// ����һ�������ݵ�����        
DateSelector.prototype.MinYear =(new Date()).getFullYear()-1;    

// ����һ�������ݵ�����        
DateSelector.prototype.MaxYear = (new Date()).getFullYear()+1;          

// ��ʼ�����                    
DateSelector.prototype.InitYearSelect = function()                    
{    
    // ѭ�����OPIONԪ�ص����select������
    for(var i = this.MaxYear; i >= this.MinYear; i--)                 
    {
        // �½�һ��OPTION����    
        var op = window.document.createElement("OPTION");             

        // ����OPTION�����ֵ    
        op.value = i;            

        // ����OPTION���������  
        op.innerHTML = i;

        // ��ӵ����select����  
        this.selYear.appendChild(op);
    }
};

// ��ʼ���·�                    
DateSelector.prototype.InitMonthSelect = function()                   
{
	var mon = Number(this.selMonth.value);

	var numOfMon = 12;
	
	//��������
	var pre_m = leapMonth(this.preYear);
	var m = leapMonth(parseInt(this.selYear.value));
	
	// ���ԭ�е�ѡ��
    this.selMonth.options.length = 0;
    // ѭ�����OPIONԪ�ص��·�select������
    for(var i = 1; i <= numOfMon; i++)
    {
        // �½�һ��OPTION����
        var op = window.document.createElement("OPTION");

        // ����OPTION�����ֵ
        op.value = i;

        // ����OPTION���������
        op.innerHTML = i;

		//Ĭ��Ϊ��һ�ε��·�ֵ
		if(i == mon || (mon <= 0 && pre_m == i))
			op.selected = true;

        // ��ӵ��·�select����
        this.selMonth.appendChild(op);
		
		//����
		if(this.Calendar == 0 && m > 0 && m == i)
		{
			op = window.document.createElement("OPTION");
			op.value = -m;
			op.innerHTML = m + "(��)";
			op.style.color = "#cc0000";
			this.selMonth.appendChild(op);
		}
    }
	
};

// ����������·ݻ�ȡ���µ�����  
DateSelector.DaysInMonth = function(year, month, Calendar)                      
{
	var num;
	if(Calendar == 0)
	{
		//����
		if(0 == month)
			num = leapDays(year);
		else
			num = monthDays(year,month);
	}else
	{
		var date = new Date(year, month, 0);  
		num = date.getDate();
	}
	return num;
};

// ��ʼ������                    
DateSelector.prototype.InitDaySelect = function()                     
{    
    // ʹ��parseInt������ȡ��ǰ����ݺ��·�                           
    var year = parseInt(this.selYear.value);                          
    var month = parseInt(this.selMonth.value);
	var day = Number(this.selDay.value);

    // ��ȡ���µ�����            
    var daysInMonth = DateSelector.DaysInMonth(year, month, this.Calendar);          

	this.daysInMonth = daysInMonth;
	
    // ���ԭ�е�ѡ��
    this.selDay.options.length = 0;
    // ѭ�����OPIONԪ�ص�����select������
    for(var i = 1; i <= daysInMonth ; i++)
    {
        // �½�һ��OPTION����    
        var op = window.document.createElement("OPTION");             

        // ����OPTION�����ֵ    
        op.value = i;            

        // ����OPTION���������  
        op.innerHTML = i;
		
		if(i == day)
			op.selected = true;

        // ��ӵ�����select����  
        this.selDay.appendChild(op);      
    }
};

// ��ʼ��������
DateSelector.prototype.InitCalendarSelect = function()                   
{
	var cal = {"1":'����',"0":'����'};
  for(var el in cal){
 		var op = window.document.createElement("OPTION");
		op.value = el;
		op.innerHTML = cal[el];
		if(el == this.Calendar){
			op.selected = true;
		}
		this.selCalendar.appendChild(op);
  }
};

// ������ݺ�������onchange�¼��ķ���������ȡ�¼���Դ���󣨼�selYear��selMonth�� 
// ����������Group���󣨼�DateSelectorʵ����������캯�����ṩ��InitDaySelect�������³�ʼ������            
// ����eΪevent����
DateSelector.Onchange = function(e)
{    
    var selector = window.document.all != null ? e.srcElement : e.target;
	
	if(selector.Group.selCalendar)
	{
		selector.Group.Calendar = selector.Group.selCalendar.value;
	}

	selector.Group.InitMonthSelect();
	selector.Group.InitDaySelect();
	
	selector.Group.preYear = selector.Group.selYear.value;
};

DateSelector.OnMonthchange = function(e)       
{    
    var selector = window.document.all != null ? e.srcElement : e.target;
	selector.Group.InitDaySelect();
};

// ���ݲ�����ʼ�������˵�ѡ��    
DateSelector.prototype.InitSelector = function(year, month, day)      
{    
    // �����ⲿ�ǿ��Ե�������������������������ҲҪ��selYear��selMonth��ѡ����յ�                       
    // ������ΪInitDaySelect�����Ѿ���������������˵����������Ͳ����ظ�������                           
    this.selYear.options.length = 0;      
    this.selMonth.options.length = 0;
	
    // ��ʼ����              
    this.InitYearSelect();
	this.selYear.selectedIndex = this.MaxYear - year;
	this.preYear = this.selYear.value;

	if(arguments.length == 4)
	{
		// ��ʼ��������		
		this.InitCalendarSelect();
		//this.selCalendar.selectedIndex = arguments[3];
		this.Calendar = arguments[3];
	}
	
	// ��ʼ����
    this.InitMonthSelect();
	this.selMonth.selectedIndex = month - 1; 
           

    // ��ʼ������                
    this.InitDaySelect();        
    this.selDay.selectedIndex = day - 1;
	
};

function InitHourSelect(selHour,stype)
{    
	// ���ԭ�е�ѡ�� 
	selHour.options.length = 0; 
	if(stype==1)   
	{                         
    // ѭ�����OPIONԪ�ص�Сʱselect������   
    // �½�һ��OPTION����    
        var op = window.document.createElement("OPTION"); 
        // ����OPTION�����ֵ    
        op.value = 0;       
        op.innerHTML = "00:00~00:59 (����)";  
        selHour.appendChild(op);                  
    for(var i = 1; i <= 23; i=i+2)                 
    {
        // �½�һ��OPTION����    
        var op = window.document.createElement("OPTION");             

        // ����OPTION�����ֵ    
        op.value = i;            

        // ����OPTION���������   
        switch(i)
        {
        	case 1:
        	 op.innerHTML = "01:00~02:59 (��)";
        	 break;
        	case 3:
        	 op.innerHTML = "03:00~04:59 (��)";
        	 break;
        	case 5:
        	 op.innerHTML = "05:00~06:59 (î)";
        	 break;
        	case 7:
        	 op.innerHTML = "07:00~08:59 (��)";
        	 break;
        	case 9:
        	 op.innerHTML = "09:00~10:59 (��)";
        	 break;
        	case 11:
        	 op.innerHTML = "11:00~12:59 (��)";
        	 break;
        	case 13:
        	 op.innerHTML = "13:00~14:59 (δ)";
        	 break;
        	case 15:
        	 op.innerHTML = "15:00~16:59 (��)";
        	 break;
        	case 17:
        	 op.innerHTML = "17:00~18:59 (��)";
        	 break;
        	case 19:
        	 op.innerHTML = "19:00~20:59 (��)";
        	 break;
        	case 21:
        	 op.innerHTML = "21:00~22:59 (��)";
        	 break;
        	case 23:
        	 op.innerHTML = "23:00~23:59 (����)";
        	 break;       	                        
        }  
        // ��ӵ�Сʱselect����  
        selHour.appendChild(op);  
 
    }
     if(arguments.length == 3){ // ��������������Ϊ3�����һ��������ʱ��   
       	 if(arguments[2]< 24)
         selHour.selectedIndex = Math.round(arguments[2]/2);    
       }      
   }else
   	{
      // ѭ�����OPIONԪ�ص�Сʱselect������
      for(var i = 0; i <= 23; i++)                 
      {
          // �½�һ��OPTION����    
          var op = window.document.createElement("OPTION");             
  
          // ����OPTION�����ֵ    
          op.value = i;            
  
          // ����OPTION���������   
          op.innerHTML = i;      
          // ��ӵ�Сʱselect����  
          selHour.appendChild(op);     
      }  
      if(arguments.length == 3) {// ��������������Ϊ3�����һ��������ʱ��  
        if(arguments[2]< 24)
        selHour.selectedIndex = arguments[2];
      }
    }  
}


///////////////////////////////////////////////////
//
// lunarInfo
//
///////////////////////////////////////////////////

// base data about chinese year informace
// ���湫��ũ��֮���ת����Ϣ:������һ����Ϊ��㣬
// �Ѵ���һ����������(����Ҫ����)��ũ����Ϣ���������� Ҫ����һ�����Ϣ��ֻҪ������Ϣ�͹���: 1)ũ��ÿ���µĴ�С;2)�����Ƿ������£������Լ����µĴ�С�� ��һ��������������Щ��Ϣ���㹻�ˡ� ����ķ�����:��һλ����ʾһ���µĴ�С�����¼�Ϊ1��С�¼�Ϊ0��
// �������õ�12λ(������)��13λ(������)�����ø���λ����ʾ���µ��·ݣ�û�����¼�Ϊ0�� ��-----��----: 2000�����Ϣ������0xc96�����ɶ����ƾ���110010010110B��
// ��ʾ�ĺ�����:1��2��5��8��10��11�´������·�С�� 2001���ũ����Ϣ������0x1a95(��Ϊ���£�������13λ)��
// ����ľ���1��2��4��5��8��10��12�´� �����·�С(0x1a95=1101010010101B)��
// 4�µĺ�����һ��0��ʾ������4��С�����ŵ��Ǹ�1��ʾ5�´� �����Ϳ�����һ��������������Щ��Ϣ��������������lunarInfo[]��������Щ��Ϣ
var lunarInfo=new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,
0x14b63);  

//====================================== ����ũ�� y������µ�����
function leapDays(y) {
	if(leapMonth(y)) return((lunarInfo[y-1900] & 0x10000)? 30: 29);
	else return(0);
}

//====================================== ����ũ�� y�����ĸ��� 1-12��û�򷵻� 0
function leapMonth(y) {
	return(lunarInfo[y-1900] & 0xf);
}

//====================================== ����ũ�� y��m�µ�������
function monthDays(y,m) {
	return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
}/*  |xGv00|874a22f9172c69b2d57f2db43342b9bc */