/**
 * @fileOverview ��źʹ�������ƽ̨���õģ����仯��Ƶ��������
 * @author <a href="mailto:arthurlin@tencent.com">arthurlin</a>, <a
 *         href="mailto:cargepeng@tencent.com">cargepeng</a>
 * @version 1.0.1
 * 
 * @createDate 2010.07.23
 * @updaeDate 2011.04.06
 */

var Xiake = Xiake || {};

Xiake.Data = (function() {
	// ���չ�˾�б�, ������Ϊkey, ����[����]
	var _airlineCompanyList = {
		"2Z" : [ "��������" ],
		"3Q" : [ "���Ϻ���" ],
		"3U" : [ "�Ĵ�����" ],
		"3W" : [ "�Ͼ�����" ],
		"6U" : [ "�ڿ�������" ],
		"8C" : [ "���Ǻ���" ],
		"8L" : [ "������������" ],
		"AA" : [ "��������" ],
		"AC" : [ "���ô󺽿�" ],
		"AF" : [ "��������" ],
		"AI" : [ "ӡ�Ⱥ���" ],
		"AY" : [ "��������" ],
		"AZ" : [ "���������" ],
		"BA" : [ "Ӣ������" ],
		"BI" : [ "��������" ],
		"BK" : [ "�¿�����" ],
		"BR" : [ "���ٺ���" ],
		"CA" : [ "�й�����" ],
		"CI" : [ "�л�����" ],
		"CJ" : [ "��������" ],
		"CN" : [ "���»�����" ],
		"CO" : [ "��½����" ],
		"CX" : [ "��̩����" ],
		"CZ" : [ "�Ϸ�����" ],
		"DL" : [ "���Ǻ���" ],
		"EK" : [ "����������" ],
		"ET" : [ "���������Ǻ���" ],
		"EU" : [ "�ɶ�����" ],
		"F6" : [ "�㽭����" ],
		"FI" : [ "��������" ],
		"FM" : [ "�Ϻ�����" ],
		"G4" : [ "���ݺ���" ],
		"G8" : [ "���Ǻ���" ],
		"GA" : [ "��³��ӡ�������Ǻ���" ],
		"GE" : [ "̨�帴�˺���" ],
		"GF" : [ "���庽��" ],
		"GS" : [ "��򺽿�" ],
		"HO" : [ "���麽��" ],
		"HU" : [ "���Ϻ���" ],
		"IB" : [ "����������" ],
		"IV" : [ "��������" ],
		"JD" : [ "�׶�����" ],
		"JL" : [ "�ձ�����" ],
		"JS" : [ "���ʺ���" ],
		"KA" : [ "��������" ],
		"KE" : [ "�󺫺���" ],
		"KL" : [ "��������" ],
		"KN" : [ "���Ϻ���" ],
		"KU" : [ "�����غ���" ],
		"KY" : [ "��������" ],
		"LH" : [ "��ɯ����" ],
		"LO" : [ "��������" ],
		"LY" : [ "��ɫ�к���" ],
		"MA" : [ "����������" ],
		"MF" : [ "���ź���" ],
		"MH" : [ "�������Ǻ���" ],
		"MS" : [ "��������" ],
		"MU" : [ "��������" ],
		"NH" : [ "ȫ�տպ���" ],
		"NW" : [ "������������" ],
		"NZ" : [ "����������" ],
		"OA" : [ "ϣ������ƥ�˺���" ],
		"OM" : [ "�ɹź���" ],
		"OS" : [ "�µ�������" ],
		"OZ" : [ "���Ǻ���" ],
		"PK" : [ "�ͻ�˹̹����" ],
		"PN" : [ "��������" ],
		"PR" : [ "���ɱ�����" ],
		"QF" : [ "���޺���" ],
		"QR" : [ "����������" ],
		"RG" : [ "��������" ],
		"SA" : [ "�ϷǺ���" ],
		"SC" : [ "ɽ������" ],
		"SK" : [ "��ŷ����" ],
		"SQ" : [ "�¼��º���" ],
		"SZ" : [ "���Ϻ���" ],
		"TG" : [ "̩������" ],
		"TK" : [ "�����亽��" ],
		"UA" : [ "�������Ϻ���" ],
		"UL" : [ "˹����������" ],
		"UM" : [ "��Ͳ�Τ����" ],
		"UX" : [ "������ŷ�޺���" ],
		"VN" : [ "Խ�Ϻ���" ],
		"VS" : [ "ά�亽��" ],
		"WH" : [ "��������" ],
		"WU" : [ "�人����" ],
		"X2" : [ "�»�����" ],
		"XO" : [ "�½�����" ],
		"Z2" : [ "��ԭ����" ],
		"ZH" : [ "���ں���" ]
	};

	// ���ڻ����б�, ����������Ϊkey, ����[����, �Ƿ���ʻ�����ʶ]
	var _airportList = {
		"AAT" : [ "����̩", 0 ],
		"ACX" : [ "����", 0 ],
		"AEB" : [ "��ɫ", 0 ],
		"AKA" : [ "������", 0 ],
		"AKU" : [ "������", 0 ],
		"AOG" : [ "��ɽ", 0 ],
		"AQG" : [ "����", 0 ],
		"BAV" : [ "��ͷ", 0 ],
		"BHY" : [ "��������", 0 ],
		"BJS" : [ "�׶�", 0 ],
		"BPX" : [ "����", 0 ],
		"BSD" : [ "��ɽ", 0 ],
		"CAN" : [ "�°���", 0 ],
		"CGD" : [ "����", 0 ],
		"CGO" : [ "֣��", 0 ],
		"CGQ" : [ "����", 0 ],
		"CHG" : [ "����", 0 ],
		"CIF" : [ "���", 0 ],
		"CIH" : [ "����", 0 ],
		"CKG" : [ "����", 1 ],
		"CSX" : [ "��ɳ", 0 ],
		"CTU" : [ "˫��", 0 ],
		"CZX" : [ "��ţ", 0 ],
		"DAT" : [ "��ͬ", 0 ],
		"DAX" : [ "����", 0 ],
		"DDG" : [ "����", 0 ],
		"DIG" : [ "�������", 0 ],
		"DLC" : [ "��ˮ��", 0 ],
		"DLU" : [ "����", 0 ],
		"DNH" : [ "�ػ�", 0 ],
		"DOY" : [ "��Ӫ", 0 ],
		"DQA" : [ "����ͼ", 0 ],
		"DSN" : [ "������˹", 0 ],
		"DYG" : [ "�żҽ�", 0 ],
		"ENH" : [ "��ʩ", 0 ],
		"ENY" : [ "�Ӱ�", 0 ],
		"ERL" : [ "������", 1 ],
		"FOC" : [ "����", 0 ],
		"FUG" : [ "����", 0 ],
		"FUO" : [ "��ɽɳ��", 0 ],
		"GOQ" : [ "���ľ", 0 ],
		"GYS" : [ "��Ԫ", 0 ],
		"HAK" : [ "����", 0 ],
		"HDG" : [ "����", 0 ],
		"HEK" : [ "�ں�", 0 ],
		"HET" : [ "���ͺ���", 0 ],
		"HFE" : [ "���", 0 ],
		"HGH" : [ "����", 0 ],
		"HJJ" : [ "����", 0 ],
		"HKG" : [ "���", 0 ],
		"HLD" : [ "������", 0 ],
		"HLH" : [ "��������", 0 ],
		"HMI" : [ "����", 0 ],
		"HRB" : [ "������", 0 ],
		"HSN" : [ "��ɽ", 0 ],
		"HTN" : [ "����", 0 ],
		"HYN" : [ "����", 0 ],
		"HZG" : [ "����", 0 ],
		"HZH" : [ "��ƽ", 0 ],
		"INC" : [ "����", 0 ],
		"IQM" : [ "��ĩ", 0 ],
		"IQN" : [ "����", 0 ],
		"JDZ" : [ "������", 0 ],
		"JGN" : [ "������", 0 ],
		"JGS" : [ "����ɽ", 0 ],
		"JHG" : [ "��˫����", 0 ],
		"JIL" : [ "����", 0 ],
		"JIU" : [ "�Ž�", 0 ],
		"JJN" : [ "����", 0 ],
		"JMU" : [ "��ľ˹", 0 ],
		"JNG" : [ "����", 0 ],
		"JNZ" : [ "����", 0 ],
		"JUZ" : [ "����", 0 ],
		"JXA" : [ "�˿���", 0 ],
		"JZH" : [ "�Ż�", 0 ],
		"KCA" : [ "�⳵", 0 ],
		"KGT" : [ "����", 0 ],
		"KHG" : [ "��ʲ", 0 ],
		"KHH" : [ "����", 0 ],
		"KHN" : [ "����", 0 ],
		"KJI" : [ "����˹", 0 ],
		"KMG" : [ "�׼Ұ�", 0 ],
		"KOW" : [ "����", 0 ],
		"KRL" : [ "�����", 0 ],
		"KRY" : [ "��������", 0 ],
		"KWE" : [ "����", 0 ],
		"KWL" : [ "����", 0 ],
		"LCX" : [ "����", 0 ],
		"LDS" : [ "�ֶ�", 0 ],
		"LHW" : [ "����", 0 ],
		"LJG" : [ "����", 0 ],
		"LLF" : [ "����", 0 ],
		"LNJ" : [ "�ٲ�", 0 ],
		"LUM" : [ "â��", 0 ],
		"LXA" : [ "����", 0 ],
		"LYA" : [ "����", 0 ],
		"LYG" : [ "���Ƹ�", 0 ],
		"LYI" : [ "����", 0 ],
		"LZH" : [ "����", 0 ],
		"LZO" : [ "����", 0 ],
		"LZY" : [ "��֥", 0 ],
		"MDG" : [ "ĵ����", 0 ],
		"MFM" : [ "����", 0 ],
		"MIG" : [ "����", 0 ],
		"MXZ" : [ "÷��", 0 ],
		"NAO" : [ "�ϳ�", 0 ],
		"NAY" : [ "��Է", 0 ],
		"NBS" : [ "����ɽ", 0 ],
		"NDG" : [ "�������", 0 ],
		"NGB" : [ "����", 0 ],
		"NKG" : [ "»��", 1 ],
		"NLT" : [ "������", 0 ],
		"NNG" : [ "����", 0 ],
		"NNY" : [ "����", 0 ],
		"NTG" : [ "��ͨ", 0 ],
		"NZH" : [ "������", 0 ],
		"OHE" : [ "Į��", 0 ],
		"PEK" : [ "�׶�", 1 ],
		"PVG" : [ "�ֶ�", 1 ],
		"PZI" : [ "��֦��", 0 ],
		"SHA" : [ "����", 1 ],
		"SHE" : [ "����", 1 ],
		"SHP" : [ "�ػʵ�", 0 ],
		"SHS" : [ "ɳ��", 0 ],
		"SJW" : [ "ʯ��ׯ", 0 ],
		"SWA" : [ "��ͷ", 0 ],
		"SYM" : [ "˼é", 0 ],
		"SYX" : [ "���", 0 ],
		"SZX" : [ "����", 1 ],
		"TAO" : [ "�ൺ", 0 ],
		"TCG" : [ "����", 0 ],
		"TCZ" : [ "�շ�", 0 ],
		"TEN" : [ "ͭ��", 0 ],
		"TGO" : [ "ͨ��", 0 ],
		"THQ" : [ "��ˮ", 0 ],
		"TLQ" : [ "��³��", 0 ],
		"TNA" : [ "����", 1 ],
		"TPE" : [ "̨��", 0 ],
		"TSN" : [ "���", 0 ],
		"TVS" : [ "��Ů��", 0 ],
		"TXN" : [ "��ɽ", 0 ],
		"TYN" : [ "����", 0 ],
		"URC" : [ "��³ľ��", 0 ],
		"UYN" : [ "����", 0 ],
		"WEF" : [ "Ϋ��", 0 ],
		"WEH" : [ "����", 0 ],
		"WNH" : [ "��ɽ", 0 ],
		"WNZ" : [ "����", 0 ],
		"WUA" : [ "�ں�", 0 ],
		"WUH" : [ "�人", 0 ],
		"WUS" : [ "����ɽ", 0 ],
		"WUX" : [ "����", 0 ],
		"WUZ" : [ "���޵�", 0 ],
		"WXN" : [ "����", 0 ],
		"XFN" : [ "�差", 0 ],
		"XIC" : [ "����", 0 ],
		"XIL" : [ "���ֺ���", 0 ],
		"XIY" : [ "����", 0 ],
		"XMN" : [ "����", 0 ],
		"XNN" : [ "�ܼұ�", 0 ],
		"XUZ" : [ "����", 0 ],
		"YBP" : [ "����", 0 ],
		"YCU" : [ "�˳�", 0 ],
		"YIH" : [ "�˲�", 0 ],
		"YIN" : [ "����", 0 ],
		"YIW" : [ "����", 0 ],
		"YNJ" : [ "�Ӽ�", 0 ],
		"YNT" : [ "��̨", 0 ],
		"YNZ" : [ "�γ�", 0 ],
		"YUS" : [ "����", 0 ],
		"ZAT" : [ "��ͨ", 0 ],
		"ZHA" : [ "տ��", 0 ],
		"ZHY" : [ "��ɽ", 0 ],
		"ZUH" : [ "�麣", 0 ],
		"HIA" : [ "��ˮ", 0 ]
	};

	// ���ڻ���ȡƱ���б�, ����������Ϊkey
	var _airportServiceDeskList = {
		"CAN" : [ "���ݰ��ƻ���3¥���ڳ�������13�������Թ�̨���ַ����ݸ����������λ��������̨" ],
		"CGO" : [ "֣�ݻ���24��ֵ����̨���������ι�̨���˴ﺽ����Ʊ����" ],
		"CKG" : [ "���콭�����ʻ���������2������������ι�̨�����������ԣ�" ],
		"CSX" : [ "��ɳ�ƻ�����������2¥����Ʊ��̨�������λ��������̨" ],
		"CTU" : [ "�ɶ�˫�����ʻ������Ŵ�����Ʊ��15�ţ�ԭ39�ţ������λ��������̨" ],
		"DLC" : [ "������ˮ�ӻ������¥2¥4�����Ҳࣨ�������չ�̨�������λ��������̨" ],
		"FOC" : [ "���ݳ��ֹ��ʻ������¥2¥������Ʊ4�������λ��������̨" ],
		"HAK" : [ "���������������¥2¥������2������ࣨ������Ʊ��̨�������λ��������̨" ],
		"HET" : [ "���ͺ��ذ������ʻ���������ڳ�������D�������λ��������̨" ],
		"LHW" : [ "�����д�������¥�����������λ��������̨(һ�������ڶ�����̨��������Ҳ�ڶ�����̨)" ],
		"PEK" : [ "�����׶����ʻ������ź�վ¥������ʳ�������69�Ź�̨������2���ź�4�����м䣩", "�����׶����ʻ���T3��վ¥4¥��������������ͨ���Ա߹�����˹����ĺ��ձ���Բ����̨�������λ��������̨" ],
		"PVG" : [ "�Ϻ��ֶ����ʻ���T1��վ¥������5���������η����̨", "�Ϻ��ֶ�����������վB06�ң�T1,T2���е��м䣩�����η����̨", "�Ϻ��ֶ�����T2��վ¥3¥��������23�Ŷ��棨D����E��֮�䣩�����η����̨", "�Ϻ��ֶ����ʻ���T1��վ¥3¥������5���������������λ��������̨", "�Ϻ��ֶ����ʻ���T2��վ¥���ڳ�������29����M����ͷ��Ʊ��̨�������λ��������̨" ],
		"SHA" : [ "�Ϻ����Ż���T2��վ¥������6����331��332�������η����̨", "�Ϻ����Ż���T2��վ¥������3����301��̨��6����329��̨" ],
		"SHE" : [ "�����������������56���������к��¥�����η����̨", "�������ɹ��ʻ������¥2�㶫�������ι�̨����A���Զ����ݿڣ�������Ʊ��̨��ࣩ" ],
		"SZX" : [ "���ڱ������ʻ���B¥2¥������7����32��33�������λ��������̨" ],
		"TSN" : [ "���������ʻ�����վ¥���۴���2�����Ҳ������λ��������̨" ],
		"TYN" : [ "ɽ��̫ԭ���޻���2�ź�վ¥���۴�������ͨ�����������η����̨" ],
		"WNZ" : [ "������ǿ����������2�Ŵ����������λ��������̨�������Աߵ���ת���̹�̨��" ],
		"WUH" : [ "�人��ӻ������ں��¥2¥������3�����Ҳ������λ��������̨" ],
		"XIY" : [ "������������2�ź��¥��������3������15�������λ��������̨" ],
		"XMN" : [ "���Ÿ���������ڳ�������������Ʊ38�ţ�c�����棩�����λ��������̨" ],
		"ZUH" : [ "�麣�������¥2¥��������1�����������λ��������̨��1���Ž�ֱ��30�ף��麣������Ʊ����̨�ԣ�" ]
	};

	// �������ų����б�, ����������Ϊkey, ����[������, ƴ��]
	var _hotCityList = {
		"PEK" : [ "����", "beijing", "bj" ],
		"SZX" : [ "����", "shenzhen", "sz" ],
		"SHA" : [ "�Ϻ�", "shanghai", "sh" ],
		"SYX" : [ "����", "sanya", "sy" ],
		"CTU" : [ "�ɶ�", "chengdu", "cd" ],
		"XMN" : [ "����", "xiamen", "xm" ],
		"HGH" : [ "����", "hangzhou", "hz" ],
		"CGQ" : [ "����", "changchun", "cc" ],
		"CSX" : [ "��ɳ", "changsha", "cs" ],
		"CKG" : [ "����", "chongqing", "cq" ],
		"DLC" : [ "����", "dalian", "dl" ],
		"CAN" : [ "����", "guangzhou", "gz" ],
		"KWL" : [ "����", "guilin", "gl" ],
		"KWE" : [ "����", "guiyang", "gy" ],
		"HRB" : [ "������", "haerbin", "heb" ],
		"HAK" : [ "����", "haikou", "hk" ],
		"HFE" : [ "�Ϸ�", "hefei", "hf" ],
		"KMG" : [ "����", "kunming", "km" ],
		"LHW" : [ "����", "lanzhou", "lz" ],
		"KHN" : [ "�ϲ�", "nanchang", "nc" ],
		"NKG" : [ "�Ͼ�", "nanjing", "nj" ],
		"NNG" : [ "����", "nanning", "nn" ],
		"TAO" : [ "�ൺ", "qingdao", "qd" ],
		"SHE" : [ "����", "shenyang", "sy" ],
		"TSN" : [ "���", "tianjin", "tj" ],
		"WNZ" : [ "����", "wenzhou", "wz" ],
		"WUH" : [ "�人", "wuhan", "wh" ],
		"URC" : [ "��³ľ��", "wulumuqi", "wlmq" ],
		"XIY" : [ "����", "xian", "xa" ],
		"CGO" : [ "֣��", "zhengzhou", "zz" ]
	};

	// ���ڳ����б�, ����������Ϊkey, ����[������, ƴ��, ƴ������ĸ]
	var _cityList = {
		"AKU" : [ "������", "akesu", "aks" ],
		"AAT" : [ "����̩", "aletai", "alt" ],
		"AKA" : [ "����", "ankang", "ak" ],
		"AQG" : [ "����", "anqing", "aq" ],
		"AOG" : [ "��ɽ", "anshan", "as" ],
		"MFM" : [ "����", "aomen", "am" ],
		"AEB" : [ "��ɫ", "baise", "bs" ],
		"BSD" : [ "��ɽ", "baoshan", "bs" ],
		"BAV" : [ "��ͷ", "baotou", "bt" ],
		"BHY" : [ "����", "beihai", "bh" ],
		"PEK" : [ "����", "beijing", "bj" ],
		"NBS" : [ "����ɽ", "changbais", "cbs" ],
		"CGQ" : [ "����", "changchun", "cc" ],
		"CGD" : [ "����", "changde", "cd" ],
		"BPX" : [ "����", "changdu", "cd" ],
		"CSX" : [ "��ɳ", "changsha", "cs" ],
		"CIH" : [ "����", "changzhi", "cz" ],
		"CZX" : [ "����", "changzhou", "cz" ],
		"CHG" : [ "����", "chaoyang", "cy" ],
		"CTU" : [ "�ɶ�", "chengdu", "cd" ],
		"CIF" : [ "���", "chifeng", "cf" ],
		"CKG" : [ "����", "chongqing", "cq" ],
		"DLU" : [ "����", "dali", "dl" ],
		"DLC" : [ "����", "dalian", "dl" ],
		"DDG" : [ "����", "dandong", "dd" ],
		"DQA" : [ "����", "daqing", "dq" ],
		"DAT" : [ "��ͬ", "datong", "dt" ],
		"DAX" : [ "����", "daxian", "dx" ],
		"DOY" : [ "��Ӫ", "dongying", "dy" ],
		"DNH" : [ "�ػ�", "dunhuang", "dh" ],
		"DSN" : [ "������˹", "eerduosi", "eeds" ],
		"ENH" : [ "��ʩ", "enshi", "es" ],
		"ERL" : [ "��������", "erlianhaote", "elht" ],
		"FUO" : [ "��ɽ", "foshan", "fs" ],
		"FUG" : [ "����", "fuyang", "fy" ],
		"FOC" : [ "����", "fuzhou", "fz" ],
		"KOW" : [ "����", "ganzhou", "gz" ],
		"KHH" : [ "����", "gaoxiong", "gx" ],
		"GOQ" : [ "���ľ", "geermu", "gem" ],
		"GYS" : [ "��Ԫ", "guangyuan", "gy" ],
		"CAN" : [ "����", "guangzhou", "gz" ],
		"KWL" : [ "����", "guilin", "gl" ],
		"KWE" : [ "����", "guiyang", "gy" ],
		"HRB" : [ "������", "haerbin", "heb" ],
		"HAK" : [ "����", "haikou", "hk" ],
		"HLD" : [ "������", "hailaer", "hle" ],
		"HMI" : [ "����", "hami", "hm" ],
		"HDG" : [ "����", "handan", "hd" ],
		"HGH" : [ "����", "hangzhou", "hz" ],
		"HZG" : [ "����", "hanzhong", "hz" ],
		"HFE" : [ "�Ϸ�", "hefei", "hf" ],
		"HEK" : [ "�ں�", "heihe", "hh" ],
		"HTN" : [ "����", "hetian", "ht" ],
		"HJJ" : [ "����", "huaihua", "hh" ],
		"TXN" : [ "��ɽ", "huangshan", "hs" ],
		"HYN" : [ "����", "huangyan", "hy" ],
		"HET" : [ "���ͺ���", "huhehaote", "hhht" ],
		"JMU" : [ "��ľ˹", "jiamusi", "jms" ],
		"JGN" : [ "������", "jiayuguan", "jyg" ],
		"JIL" : [ "����", "jilin", "jl" ],
		"TNA" : [ "����", "jinan", "jn" ],
		"JDZ" : [ "������", "jingdezhen", "jdz" ],
		"JGS" : [ "����ɽ", "jinggangshan", "jgs" ],
		"JNG" : [ "����", "jining", "jn" ],
		"JJN" : [ "����", "jinjiang", "jj" ],
		"JNZ" : [ "����", "jinzhou", "jz" ],
		"JIU" : [ "�Ž�", "jiujiang", "jj" ],
		"JZH" : [ "��կ��", "jiuzhaigou", "jzg" ],
		"JXA" : [ "����", "jixi", "jx" ],
		"KJI" : [ "����˹", "kanasi", "kns" ],
		"KGT" : [ "����", "kangding", "kd" ],
		"KHG" : [ "��ʲ", "kashi", "ks" ],
		"KRY" : [ "��������", "kelamayi", "klmy" ],
		"DIG" : [ "���׸�", "keleige", "klg" ],
		"KCA" : [ "�⳵", "kuche", "kc" ],
		"KRL" : [ "�����", "kuerle", "kel" ],
		"KMG" : [ "����", "kunming", "km" ],
		"LHW" : [ "����", "lanzhou", "lz" ],
		"LXA" : [ "����", "lasa", "ls" ],
		"LCX" : [ "����", "liancheng", "lc" ],
		"LYG" : [ "���Ƹ�", "lianyungang", "lyg" ],
		"LJG" : [ "����", "lijiang", "lj" ],
		"LNJ" : [ "�ٲ�", "lincang", "lc" ],
		"LYI" : [ "����", "linyi", "ly" ],
		"LZY" : [ "��֥", "linzhi", "lz" ],
		"HZH" : [ "��ƽ", "liping", "lp" ],
		"LZH" : [ "����", "liuzhou", "lz" ],
		"LYA" : [ "����", "luoyang", "ly" ],
		"LZO" : [ "����", "luzhou", "lz" ],
		"LUM" : [ "â��", "mangshi", "ms" ],
		"NZH" : [ "������", "manzhouli", "mzl" ],
		"MXZ" : [ "÷��", "meixian", "mx" ],
		"MIG" : [ "����", "mianyang", "my" ],
		"OHE" : [ "Į��", "mohe", "mh" ],
		"MDG" : [ "ĵ����", "mudanjiang", "mdj" ],
		"NLT" : [ "������", "nalati", "nlt" ],
		"KHN" : [ "�ϲ�", "nanchang", "nc" ],
		"NAO" : [ "�ϳ�", "nanchong", "nc" ],
		"NKG" : [ "�Ͼ�", "nanjing", "nj" ],
		"NNG" : [ "����", "nanning", "nn" ],
		"NTG" : [ "��ͨ", "nantong", "nt" ],
		"NNY" : [ "����", "nanyang", "ny" ],
		"NGB" : [ "����", "ningbo", "nb" ],
		"PZI" : [ "��֦��", "panzhihua", "pzh" ],
		"IQM" : [ "��ĩ", "qiemo", "qm" ],
		"TAO" : [ "�ൺ", "qingdao", "qd" ],
		"IQN" : [ "����", "qingyang", "qy" ],
		"SHP" : [ "�ػʵ�", "qinhuangdao", "qhd" ],
		"NDG" : [ "�������", "qiqihaer", "qqhe" ],
		"JUZ" : [ "����", "quzhou", "qz" ],
		"SYX" : [ "����", "sanya", "sy" ],
		"SHA" : [ "�Ϻ�", "shanghai", "sh" ],
		"SWA" : [ "��ͷ", "shantou", "st" ],
		"SHS" : [ "ɳ��", "shashi", "ss" ],
		"SHE" : [ "����", "shenyang", "sy" ],
		"SZX" : [ "����", "shenzhen", "sz" ],
		"SJW" : [ "ʯ��ׯ", "shijiazhuang", "sjz" ],
		"SYM" : [ "˼é", "simao", "sm" ],
		"SUB" : [ "��ˮ", "sishui", "ss" ],
		"TCG" : [ "����", "tacheng", "tc" ],
		"TPE" : [ "̨��", "taibei", "tb" ],
		"TYN" : [ "̫ԭ", "taiyuan", "ty" ],
		"TVS" : [ "��ɽ", "tangshan", "ts" ],
		"TSN" : [ "���", "tianjin", "tj" ],
		"THQ" : [ "��ˮ", "tianshui", "ts" ],
		"TGO" : [ "ͨ��", "tongliao", "tl" ],
		"TEN" : [ "ͭ��", "tongren", "tr" ],
		"TLQ" : [ "��³��", "tulufan", "tlf" ],
		"TCZ" : [ "�ڳ�", "tengchong", "tc" ],
		"WXN" : [ "����", "wanxian", "wx" ],
		"WEF" : [ "Ϋ��", "weifang", "wf" ],
		"WEH" : [ "����", "weihai", "wh" ],
		"WNH" : [ "��ɽ", "wenshan", "ws" ],
		"WNZ" : [ "����", "wenzhou", "wz" ],
		"WUA" : [ "�ں�", "wuhai", "wh" ],
		"WUH" : [ "�人", "wuhan", "wh" ],
		"HLH" : [ "��������", "wulanhaote", "wlht" ],
		"URC" : [ "��³ľ��", "wulumuqi", "wlmq" ],
		"WUX" : [ "����", "wuxi", "wx" ],
		"WUS" : [ "����ɽ", "wuyishan", "wys" ],
		"WUZ" : [ "����", "wuzhou", "wz" ],
		"XMN" : [ "����", "xiamen", "xm" ],
		"XIY" : [ "����", "xian", "xa" ],
		"XFN" : [ "�差", "xiangfan", "xf" ],
		"HKG" : [ "���", "xianggang", "xg" ],
		"XIC" : [ "����", "xichang", "xc" ],
		"XIL" : [ "���ֺ���", "xilinhaote", "xlht" ],
		"ACX" : [ "����", "xingyi", "xy" ],
		"XNN" : [ "����", "xining", "xn" ],
		"JHG" : [ "��˫����", "xishuangbanna", "xsbn" ],
		"XUZ" : [ "����", "xuzhou", "xz" ],
		"ENY" : [ "�Ӱ�", "yanan", "ya" ],
		"YNZ" : [ "�γ�", "yancheng", "yc" ],
		"YNJ" : [ "�Ӽ�", "yanji", "yj" ],
		"YNT" : [ "��̨", "yantai", "yt" ],
		"YBP" : [ "�˱�", "yibin", "yb" ],
		"YIH" : [ "�˲�", "yichang", "yc" ],
		"LDS" : [ "����", "yichun", "yc" ],
		"INC" : [ "����", "yinchuan", "yc" ],
		"YIN" : [ "����", "yining", "yn" ],
		"YIW" : [ "����", "yiwu", "yw" ],
		"LLF" : [ "����", "yongzhou", "yz" ],
		"UYN" : [ "����", "yulin", "yl" ],
		"YCU" : [ "�˳�", "yuncheng", "yc" ],
		"YUS" : [ "����", "yushu", "ys" ],
		"DYG" : [ "�żҽ�", "zhangjiajie", "zjj" ],
		"ZHA" : [ "տ��", "zhanjiang", "zj" ],
		"ZAT" : [ "��ͨ", "zhaotong", "zt" ],
		"CGO" : [ "֣��", "zhengzhou", "zz" ],
		"ZHY" : [ "����", "zhongwei", "zw" ],
		"HSN" : [ "��ɽ", "zhoushan", "zs" ],
		"ZUH" : [ "�麣", "zhuhai", "zh" ],
		"HIA" : [ "����", "huaian", "ha" ]
	};

	// ��Ʊ����ѡ���tab, ����[��ʼ�ַ�, �����ַ�, tab����]
	var _flightCityTabList = {
		'hot' : [ '', '', '���ų���' ],
		'a' : [ 'a', 'g', 'ABC DEFG' ],
		'h' : [ 'h', 'n', 'HIJK LMN' ],
		'o' : [ 'o', 't', 'OPQ RST' ],
		'u' : [ 'u', 'z', 'UVW XYZ' ]
	};

	// ��Ӧ����Ϣ, ����[����, �ͷ��绰, ͼƬ��ʽ��] -- �ǵ�ͬʱ���� �����̨--��Ӧ�̹���
	var _supplierList = {
		"1427076" : [ "ͬ����", "4007-777-777", "tongcheng" ]
	};

	// ֧������, ����[����, ����] -- �ǵ�ͬʱ���� flight_def.h �ļ�
	var _payTypeList = {
		"0" : [ "δ֪", "" ],
		"1" : [ "��������", "" ],
		"2" : [ "���ÿ�", "" ],
		"3" : [ "�Ƹ�ͨ", "" ],
		"4" : [ "����", "" ]
	};

	// ���͸�����, ����[����] -- �ǵ�ͬʱ���� flight_def.h �ļ�
	var _deliveryTypeList = {
		"1" : [ "��Ʊ����" ],
		"2" : [ "�����г̵�" ],
		"3" : [ "�Һ���" ],
		"4" : [ "������ȡ" ],
		"5" : [ "���" ]
	}; // /

	// ֤��ID����, ����[����] -- �ǵ�ͬʱ���� flight_def.h �ļ�
	var _cardTypeList = {
		"1" : [ "���֤" ],
		"2" : [ "����" ],
		"3" : [ "����֤" ],
		"4" : [ "����֤" ],
		"5" : [ "̨��֤" ],
		"6" : [ "�۰�ͨ��֤" ],
		"7" : [ "���ʺ�Ա֤" ],
		"8" : [ "��������þ�ס֤" ],
		"9" : [ "����֤" ],
		"11" : [ "������֤" ],
		"10" : [ "����" ]
	};// "3":["����֤"],

	// ��������, ����[����] -- �ǵ�ͬʱ���� flight_def.h �ļ�
	var _passengerTypeList = {
		"1" : [ "����", "12��������" ],
		"2" : [ "��ͯ", "2-12����" ],
		"3" : [ "Ӥ��", "С��������" ]
	};

	// ���չ�Ӧ��(+����), ����[���չ�˾����, ������������, �����ַ]
	var _insureTypeList = {
		"1" : [ "̫ƽ���չ�˾", "����������", "http://www.cpic.com.cn/cpicweb/index/cx_index/customerService/validatingEpolicyAndDownload.html" ]
	};

	var _feeList = {
		"insure" : [ 2000 ],// ���յ��ۣ���λ��
		"express" : [ 1000 ]
	// ��ݷ��ã���λ��
	};

	function _getInsureType(type) {
		if (_insureTypeList.hasOwnProperty(type)) {
			return _insureTypeList[type];
		}
		return [];
	}
	function _getAirlineCompany(code) {
		if (_airlineCompanyList.hasOwnProperty(code)) {
			return _airlineCompanyList[code];
		}
		return [];
	}
	function _getAirport(code) {
		if (_airportList.hasOwnProperty(code)) {
			return _airportList[code];
		}
		return [];
	}
	function _getSupplier(id) {
		if (_supplierList.hasOwnProperty(id)) {
			return _supplierList[id];
		} else {// ������Ӧ�̶���Ϊ��ͬ��
			return _supplierList['1427076'];
		}
	}
	function _getPayType(type) {
		if (_payTypeList.hasOwnProperty(type)) {
			return _payTypeList[type];
		}
		return [];
	}
	function _getDeliveryType(type) {
		if (_deliveryTypeList.hasOwnProperty(type)) {
			return _deliveryTypeList[type];
		}
		return [];
	}
	function _getCardType(type) {
		if (_cardTypeList.hasOwnProperty(type)) {
			return _cardTypeList[type];
		}
		return [];
	}
	function _getCardTypeByName(name) {
		var type = [];
		for ( var t in _cardTypeList) {
			if (_cardTypeList[t][0] == name) {
				type.push(t);
			}
		}
		return type;
	}

	function _getPassengerType(type) {
		if (_passengerTypeList.hasOwnProperty(type)) {
			return _passengerTypeList[type];
		}
		return [];
	}
	function _getPassengerTypeByName(name) {
		var type = [];
		for ( var t in _passengerTypeList) {
			if (_passengerTypeList[t][0] == name) {
				type.push(t);
			}
		}
		return type;
	}
	function _getAirportServiceDesk(code) {
		if (_airportServiceDeskList.hasOwnProperty(code)) {
			return _airportServiceDeskList[code];
		}
		return [];
	}
	function _getCity(key) {
		if (_cityList.hasOwnProperty(key)) {
			return _cityList[key];
		}
		return [];
	}
	/**
	 * name �����ǳ��е���������ƴ�����������ƴ������ĸ ���������ĸƴ�����ҵ���һ�������̷���
	 */
	function _getCityCode(name) {
		if (!name) {
			return '';
		}
		for ( var code in _cityList) {
			if (_cityList[code][0] == name || _cityList[code][1] == name || _cityList[code][2] == name || name.toUpperCase() == code) {
				return code;
			}
		}
		return '';
	}
	function _getDeliveryTypeList() {
		return _deliveryTypeList;
	}
	function _getCardTypeList() {
		return _cardTypeList;
	}
	function _getPassengerTypeList() {
		return _passengerTypeList;
	}
	function _getAirportServiceDeskList() {
		return _airportServiceDeskList;
	}
	function _getHotCityList() {
		return _hotCityList;
	}
	function _getCityList() {
		return _cityList;
	}
	function _getFlightCityTabList() {
		return _flightCityTabList;
	}
	function _getInsureTypeList() {
		return _insureTypeList;
	}
	function _getAirlineCompanyList() {
		return _airlineCompanyList;
	}
	function _getFee(type) {
		if (_feeList.hasOwnProperty(type)) {
			return _feeList[type];
		}
		return [];
	}
	function _getFeeList() {
		return _feeList();
	}
	return {
		getInsureType : _getInsureType,
		getCityCode : _getCityCode,
		getHotCityList : _getHotCityList,
		getCityList : _getCityList,
		getCity : _getCity,
		getFlightCityTabList : _getFlightCityTabList,
		getAirlineCompany : _getAirlineCompany,
		getAirport : _getAirport,
		getSupplier : _getSupplier,
		getPayType : _getPayType,
		getDeliveryType : _getDeliveryType,
		getDeliveryTypeList : _getDeliveryTypeList,
		getCardType : _getCardType,
		getCardTypeByName : _getCardTypeByName,
		getCardTypeList : _getCardTypeList,
		getPassengerType : _getPassengerType,
		getPassengerTypeByName : _getPassengerTypeByName,
		getPassengerTypeList : _getPassengerTypeList,
		getAirportServiceDesk : _getAirportServiceDesk,
		getAirportServiceDeskList : _getAirportServiceDeskList,
		getInsureTypeList : _getInsureTypeList,
		getAirlineCompanyList : _getAirlineCompanyList,
		getFee : _getFee,
		getFeeList : _getFeeList
	};

})();
/*  |xGv00|8e1f1a9dd08f67bb7b22afc6c2eb741c */