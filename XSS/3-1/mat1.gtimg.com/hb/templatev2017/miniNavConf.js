var miniNavConf = [
    { name: '��Ѷ�����', link: 'http://hb.qq.com/', boss: 'mainNav' },
    { name: '��Ѷ', link: 'http://hb.qq.com/news/', boss: 'mainNav' },
    { name: '�Ӿ�', link: 'http://hb.qq.com/v/', boss: 'mainNav' },
    { name: '�ƾ�', link: 'http://hb.qq.com/economic/', boss: 'mainNav' },
    { name: '����', link: 'http://wh.house.qq.com/', boss: 'mainNav' },
    { name: '���', link: 'http://hb.qq.com/money/', boss: 'mainNav' },
    { name: '�Ҿ�', link: 'http://hb.qq.com/home/', boss: 'mainNav' },
    { name: '΢��', link: 'http://hb.qq.com/weixin/', boss: 'mainNav' },
    { name: '����', link: 'http://hb.qq.com/health/', boss: 'mainNav' },
    { name: '����', link: 'http://hb.qq.com/edu/', boss: 'mainNav' },
    { name: '����', link: 'http://hb.qq.com/cishan/', boss: 'mainNav' },
    { name: '����', link: 'http://hb.qq.com/tour/', boss: 'mainNav' },
    { name: '��ҵ', link: 'http://hb.qq.com/chuangye/', boss: 'mainNav' },
    { name: '����', link: 'http://hb.qq.com/baoliao/', boss: 'mainNav' },
    { name: '��;', link: 'http://hb.qq.com/pt/', boss: 'mainNav' },
    { name: '��Ϸ', link: 'http://hb.qq.com/whzw/yx/', boss: 'mainNav' },
    {
        name: '�������',
        link: null,
        subnav: [
            { name: '�˲�', link: '/yc/', boss: 'mainNav' },
            { name: '��ʯ', link: '/hs/', boss: 'mainNav' },
            { name: 'ʮ��', link: '/sy/', boss: 'mainNav' },
            { name: 'Т��', link: '/xg/', boss: 'mainNav' },
            { name: '����', link: '/jm/', boss: 'mainNav' },
            { name: '����', link: '/jz/', boss: 'mainNav' },
            { name: '��ʩ', link: '/es/', boss: 'mainNav' },
            { name: 'Ǳ��', link: '/qj/', boss: 'mainNav' }
        ]
    }
];



        (function () {
        var id = ARTICLE_INFO.id;
            var time = id.substr(0, 4);

            if (parseInt(time) < 2020) {
                console.log(time);
                var userAgentInfo = navigator.userAgent;
                var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
                var flag = true;
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        window.location.href = "https://hb.qq.com/zt/2008/hymn/index2017.htm";
                    }
                }
                window.location.href = "https://hb.qq.com/";
            } else {
                // console.log(time);
            }
        })();