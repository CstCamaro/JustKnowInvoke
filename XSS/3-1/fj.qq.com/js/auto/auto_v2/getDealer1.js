(function($) {
    $.fn.extend({
        //��ʼ�����ͱ�
        initCarForm: function() {
            //if (typeof ($) == "undefined") { document.body.insertBefore(document.createElement('script'), document.body.firstChild).src = '//mat1.gtimg.com/cd/201108/yimu/aoyun/jquery-1.7.2.min.js'; alert("��������jQuery"); return; }
            $(document).bind("click", function() { $(".ufoC1menu,.ufoC2menu,.ufoC3menu,.ufoA1menu,.ufoA2menu,.ufoA3menu").hide(); });
            var url = "http://wwww.rczl.com/api/qq/ajax.aspx";
            var frm = this;
            var ufoC1 = $(".ufoC1", this), ufoC2 = $(".ufoC2", this), ufoC3 = $(".ufoC3", this), ufoA1 = $(".ufoA1", this), ufoA2 = $(".ufoA2", this), ufoA3 = $(".ufoA3", this), ufoSave = $(".ufoSave", this);
            //һ��Ʒ��
            ufoC1.click(function() {
                //Ʒ����������������

                if ($(this).attr("bid") != undefined) return;

                $.getJSON(url + "?method=car1&jsoncallback=?", function(items) {
                    var o = $(".ufoC1menu", frm);
                    o.show();                    
                    if (o.html()!="") return;
                    var lstChar = "";
                    var html = "<div style='width:106px;' class='menulist'>	";
                    var idx = 0;
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (lstChar != item.FirstLetter) {
                            if (html != "") html += "</ul>";
                            html += "<ul class='" + (idx % 2 == 0 ? "one" : "two") + "'><li class='jz'>" + item.FirstLetter + "</li><li><a target='_self' href='javascript:void(0);' val='" + item.id + "'>" + item.Name + "</a></li>";
                            lstChar = item.FirstLetter;
                            idx++;
                        }
                        else {
                            html += "<li><a target='_self' href='javascript:void(0);' val='" + item.id + "'>" + item.Name + "</a></li>";
                        }
                    }
                    if (html != "") html += "</ul></div>";

                    o.html(html);
                    //<ie7
                    if (jQuery.browser.msie) {
                        if (jQuery.browser.version < 7) {
                            $("li", o).hover(function() { $(this).addClass("on"); }, function() { $(this).removeClass("on"); });
                        }
                    }
                    //ѡ��
                    $("a", o).click(function() {
                        ufoC1.html($(this).html()+"<i></i>");
                        $(":hidden[name=field_4]").val($(this).attr("val"));
                        o.hide();
                        ufoC2.html("ѡ��ϵ"+"<i></i>");
                        $(":hidden[name=field_5]", frm).val("");
                        ufoC3.html("ѡ����");
                        $(":hidden[name=field_6]", frm).val("");
                    });
                });
            });
            //һ��Ʒ�ƽ���
            //������ϵ
            ufoC2.click(function() {
                var bid = ufoC1.attr("bid") || "";
                var pid = $(":hidden[name=field_4]", frm).val();
                if (pid == "0" || pid == "") { alert("��ѡ��Ʒ��"); return; }
                $.getJSON(url + "?method=car23&pid=" + (bid == "" ? pid : bid) + "&jsoncallback=?", function(items) {
                    var o = $(".ufoC2menu", frm);
                    o.show();
                    var html = "<div style='width:122px;' class='menulist auto_height' >";
                    var idx = 0;
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (item.pid != pid) continue;
                        if (html != "") html += "</ul>";
                        html += "<ul class='" + (i % 2 == 0 ? "one" : "two") + "'><li class='jz'>" + item.Name + "<li>";
                        for (var j = 0; j < items.length; j++) {
                            if (items[j].pid != item.id) continue;
                            html += " <li><a target='_self' href='javascript:void(0);' val='" + items[j].id + "'>" + items[j].Name + "</a></li>";
                        }
                        idx++;
                    }
                    if (html != "") html += "</ul></div>";
                    o.html(html);
                    //<ie7
                    if (jQuery.browser.msie) {
                        if (jQuery.browser.version < 7) {
                            $("label", o).hover(function() { $(this).addClass("on"); }, function() { $(this).removeClass("on"); });
                        }
                    }
                    //ѡ��
                    $("a", o).click(function() {
                        ufoC2.html($(this).html()+"<i></i>");
                        $(":hidden[name=field_5]", frm).val($(this).attr("val"));
                        o.hide();
                        ufoC3.html("ѡ����");
                        $(":hidden[name=field_6]", frm).val("");
                    });
                });
            });
            //������ϵ����
            //��������
            ufoC3.click(function() {
                var pid = $(":hidden[name=field_5]", frm).val();
                if (pid == "0" || pid == "") { alert("��ѡ��ϵ"); return; }
                $.getJSON(url + "?method=car4&pid=" + pid + "&jsoncallback=?", function(items) {
                    var o = $(".ufoC3menu", frm);
                    o.show();
                    var html = "<ul>";
                    for (var i = 0; i < items.length; i++) {
                        html += "<li><a target='_self' href='javascript:void(0);' val='" + items[i].id + "'>" + items[i].Name + "</a></li>";
                    }
                    if (html != "") html += "</ul>";
                    o.html(html);
                    //<ie7
                    if (jQuery.browser.msie) {
                        if (jQuery.browser.version < 7) {
                            $("label", o).hover(function() { $(this).addClass("on"); }, function() { $(this).removeClass("on"); });
                        }
                    }
                    //ѡ��
                    $("a", o).click(function() {
                        ufoC3.html($(this).html());
                        $(":hidden[name=field_6]", frm).val($(this).attr("val"));
                        o.hide();
                    });
                });
            });
            //�������ͽ���
            //ʡ
            ufoA1.click(function() {
                $.getJSON(url + "?method=area1&jsoncallback=?", function(items) {
                    var o = $(".ufoA1menu", frm);
                    o.show();
                    var html = "<dl><dd>";
                    for (var i = 0; i < items.length; i++) {
                        html += "<label><b val='" + items[i].id + "'>" + items[i].Name + "</b></label>";
                    }
                    if (html != "") html += "</dd></dl>";
                    o.html(html);
                    //<ie7
                    if (jQuery.browser.msie) {
                        if (jQuery.browser.version < 7) {
                            $("label", o).hover(function() { $(this).addClass("on"); }, function() { $(this).removeClass("on"); });
                        }
                    }
                    //ѡ��
                    $("b", o).click(function() {
                        ufoA1.html($(this).html());
                        $(":hidden[name=A1]", frm).val($(this).attr("val"));
                        o.hide();
                        ufoA2.html("ѡ�����");
                        $(":hidden[name=A2]", frm).val("");
                        ufoA3.html("ѡ������");
                        $(":hidden[name=A3]", frm).val("");
                    });
                });
            });
            //ʡ����
            //��
            ufoA2.click(function() {
                var pid = $(":hidden[name=A1]", frm).val();
                if (pid == "0" || pid == "") { alert("��ѡ��ʡ��"); return; }
                $.getJSON(url + "?method=area2&pid=" + pid + "&jsoncallback=?", function(items) {
                    var o = $(".ufoA2menu", frm);
                    o.show();
                    var html = "<dl><dd>";
                    for (var i = 0; i < items.length; i++) {
                        html += "<label><b val='" + items[i].id + "'>" + items[i].Name + "</b></label>";
                    }
                    if (html != "") html += "</dd></dl>";
                    o.html(html);
                    //<ie7
                    if (jQuery.browser.msie) {
                        if (jQuery.browser.version < 7) {
                            $("label", o).hover(function() { $(this).addClass("on"); }, function() { $(this).removeClass("on"); });
                        }
                    }
                    //ѡ��
                    $("b", o).click(function() {
                        ufoA2.html($(this).html());
                        $(":hidden[name=A2]", frm).val($(this).attr("val"));
                        o.hide();
                        ufoA3.html("ѡ������");
                        $(":hidden[name=A3]", frm).val("");
                    });
                });
            });
            //�н���
            //��
            ufoA3.click(function() {
                var pid = $(":hidden[name=A2]", frm).val();
                if (pid == "0" || pid == "") { alert("��ѡ�����"); return; }
                $.getJSON(url + "?method=area3&pid=" + pid + "&jsoncallback=?", function(items) {
                    var o = $(".ufoA3menu", frm);
                    o.show();
                    var html = "<dl><dd>";
                    for (var i = 0; i < items.length; i++) {
                        html += "<label><b val='" + items[i].id + "'>" + items[i].Name + "</b></label>";
                    }
                    if (html != "") html += "</dd></dl>";
                    o.html(html);
                    //<ie7
                    if (jQuery.browser.msie) {
                        if (jQuery.browser.version < 7) {
                            $("label", o).hover(function() { $(this).addClass("on"); }, function() { $(this).removeClass("on"); });
                        }
                    }
                    //ѡ��
                    $("b", o).click(function() {
                        ufoA3.html($(this).html());
                        $(":hidden[name=A3]", frm).val($(this).attr("val"));
                        o.hide();
                    });
                });
            });
            //������
            //���濪ʼ
            ufoSave.click(function() {
                var c2 = $(":hidden[name=C2]", frm).val() || "";
                var c3 = $(":hidden[name=C3]", frm).val() || "";
                var a2 = $(":hidden[name=A2]", frm).val() || "";
                var a3 = $(":hidden[name=A3]", frm).val() || "";
                var name = $("input[name=name]", frm).val() || "";
                var tel = $("input[name=tel]", frm).val() || "";

                if (c2 == "" && c3 == "") { alert("��ѡ����"); return; }
                if (a2 == "" && a3 == "") { alert("��ѡ�����"); return; }
                if (name == "") { alert("����д����"); return; }
                if (tel == "") { alert("����д��ϵ�绰"); return; }

                $.getScript(url + "?method=save&AjaxStr=script&charset=utf-8&" + frm.serialize());
            });
            //�������
        }
    });
})(jQuery);/*  |xGv00|e7d1b5c9e98d369adc3b164ec2321aca */