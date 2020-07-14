/**
 * @ version v0.1
 * @ author  wpzheng
 * @ update  2016-03-07 19:23
 */

(function($){

    // Ĭ��ȡֵ
    $.paraScroll = {
        direction:"right",      //��������
        step :1,               //��������
        speed:800,            //�����ٶ�
        time:4000,           //�Զ��������ʱ�� 
        auto:true,          //�Ƿ��Զ�����
        prev:".prev",      //��ťCLASSֵ 
        next:".next",     //��ťCLASSֵ
        inner:".inner",  //����Ԫ��CLASSֵ
        list:".list",   //UL��CLASSֵ
        split:".split" //LI��CLASSֵ
    }

    $.fn.paraScroll = function (options) {
         var opts = $.extend({}, $.paraScroll, options),
            obj = $(this),
            scroller = {};

            scroller.box = obj.find(opts.inner);              // inner
            scroller.list = scroller.box.find(opts.list);    // ul
            scroller.items = scroller.list.find(opts.split);// li
            scroller.itemSum = scroller.items.length;      // ����
            scroller.prevBtn = obj.find(opts.prev);
            scroller.nextBtn = obj.find(opts.next);
            scroller.itemWidth = scroller.items.outerWidth(); // ����padding+border ������margin ,��outerWidth(true) �Ͱ���margin
            scroller.itemHeight = scroller.items.outerHeight();
            scroller.itemallWidth=0;


            // MAIN FUNCTION
            scroller.fn = {
                navCon:function(v){
                    var item = 0;
                    if(v == scroller.itemallWidth){
                        item = 1;
                    }else{
                        item = scroller.itemSum-((scroller.itemallWidth-v)/scroller.itemWidth-1);
                    }
                    obj.find(".scroll-dotted li").removeClass("current");
                    obj.find(".scroll-dotted li").eq(item-1).addClass("current");
                },
                start: function() {
                    if (!opts.auto) {
                        return;
                    }
                    scroller.fn.stop();
                    scroller.run = setTimeout(function() {
                        scroller.fn.goto(opts.direction);
                    }, opts.time);
                },
                stop: function() {
                    if (typeof(scroller.run) !== "undefined") {
                        clearTimeout(scroller.run);
                    }
                },
                addControl: function() {
                    if (scroller.prevBtn.length) {
                        scroller.prevBtn.bind("click", function() {
                            scroller.fn.goto(scroller.prevVal);
                        });
                    }
                    if (scroller.nextBtn.length) {
                        scroller.nextBtn.bind("click", function() {
                            scroller.fn.goto(scroller.nextVal);
                        });
                    }
                },
                removeControl: function() {
                    if (scroller.prevBtn.length) {
                        scroller.prevBtn.unbind("click");
                    }
                    if (scroller.nextBtn.length) {
                        scroller.nextBtn.unbind("click");
                    }
                },
                goto: function(d) {
                    scroller.fn.stop();
                    scroller.fn.removeControl();
                    scroller.box.stop(true);
                    var _max;
                    var _dis;
                    switch (d) {
                        case "left":
                            _max = 0;
                            if (parseInt(scroller.box.scrollLeft(), 10) == 0) {
                                scroller.box.scrollLeft(scroller.itemSum * scroller.moveVal);
                            }
                            _dis = scroller.box.scrollLeft() - (scroller.moveVal * opts.step);
                            scroller.fn.navCon(_dis);
                            scroller.box.animate({"scrollLeft": _dis}, opts.speed, function() {});
                            break;
                        case "top":
                            _max = 0;
                            if (parseInt(scroller.box.scrollTop(), 10) == 0) {
                                scroller.box.scrollTop(scroller.itemSum * scroller.moveVal);
                            }
                            _dis = scroller.box.scrollTop() - (scroller.moveVal * opts.step);
                            scroller.fn.navCon(_dis);
                            scroller.box.animate({"scrollTop": _dis}, opts.speed, function() {});
                            break;
                        case "right":
                            _max = scroller.itemSum * scroller.moveVal;
                            _dis = scroller.box.scrollLeft() + (scroller.moveVal * opts.step);
                            scroller.fn.navCon(_dis);
                            scroller.box.animate({"scrollLeft": _dis}, opts.speed, function() {
                                if (parseInt(scroller.box.scrollLeft(), 10) >= _max) {
                                    scroller.box.scrollLeft(0);
                                };
                            });
                            break;
                        case "bottom":
                            _max = scroller.itemSum * scroller.moveVal;
                            _dis = scroller.box.scrollTop() + (scroller.moveVal * opts.step);
                            scroller.fn.navCon(_dis);
                            scroller.box.animate({"scrollTop": _dis}, opts.speed, function() {
                                if (parseInt(scroller.box.scrollTop(), 10) >= _max) {
                                    scroller.box.scrollTop(0);
                                };
                            });
                            break;
                    }
                    scroller.box.queue(function() {
                        scroller.fn.addControl();
                        scroller.fn.start();
                        $(this).dequeue();
                    });
                },
                init: function(){
               
                    // ��Ϊһ��liʱ������
                    if (scroller.itemSum <= 1) {
                        return; 
                    }

                    // �ж�����/���ҹ���
                    if (opts.direction == "left" || opts.direction == "right") {
                        scroller.itemallWidth = scroller.itemWidth * scroller.itemSum;
                        if ( scroller.itemallWidth <= scroller.box.outerWidth()) {return;}
                        scroller.prevVal = "left";
                        scroller.nextVal = "right";
                        scroller.moveVal = scroller.itemWidth;
                    } else {
                        scroller.itemallWidth = scroller.itemHeight * scroller.itemSum;
                        if ( scroller.itemallWidth <= scroller.box.outerHeight()) {return;}
                        scroller.prevVal = "top";
                        scroller.nextVal = "bottom";
                        scroller.moveVal = scroller.itemHeight;
                    }
                     // ��ʼ����
                    var _dottedHtml = "";
                    for(var j=0;j<scroller.itemSum;j++){
                        if(j==0){
                            _dottedHtml += '<li class="current" data-slide="'+scroller.moveVal*j+'">1</li>';
                        }else{
                            _dottedHtml += '<li data-slide="'+scroller.moveVal*j+'">'+(j+1)+'</li>';
                        }  
                    }
                    obj.find(".scroll-dotted").html(_dottedHtml);
 
                    /**
                     *  ���dotted�����ʼ��
                     *  ���������ֹͣ�Զ�����
                     *****************************/
                    $(".scroll-dotted li").on("click",function(){
                        var _scrolldistance = $(this).attr("data-slide");
                            _scrolldistance = Number(_scrolldistance);
                        $(".scroll-dotted li").removeClass("current");
                        $(this).addClass("current");
                        // ���ҹ���
                        if(opts.direction == "left" || opts.direction == "right"){
                            scroller.box.animate({"scrollLeft":_scrolldistance}, opts.speed, function() {});
                        }
                        // ���¹���
                        if(opts.direction == "top" || opts.direction == "bottom"){
                            scroller.box.animate({"scrollTop": _scrolldistance}, opts.speed, function() {});
                        }
                    })
                    $(".scroll-dotted").hover(function(){
                        scroller.fn.stop();
                    },function(){
                        scroller.fn.start();
                    })

                    // ��¡+����UL���
                    scroller.list.append(scroller.list.html());
                    if (opts.direction == "left" || opts.direction == "right") {
                        scroller.list.css({
                            width: scroller.itemWidth * scroller.itemSum * 2 + "px"
                        })
                    }

                    // �������ֹͣ����
                    scroller.box.hover(function() {
                        scroller.fn.stop();
                    }, function() {
                        scroller.fn.start();
                    });
                    // ���ҵ����
                    scroller.fn.addControl();
                    scroller.fn.start();
                }
            }
            scroller.fn.init();
    }
})(jQuery);/*  |xGv00|efcb8a695286aa503a7cc0170ddbb502 */