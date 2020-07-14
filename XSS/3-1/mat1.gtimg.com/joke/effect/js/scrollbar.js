/**
 * @description scrollBarģ��������¼� ���� jQuery
 * @author jianminlu
 * @update 2013-09-04 16:31
 * @version v0.1
 */
(function($){
    var scrollBar = window['scrollBar'] = function(o){
        return new _scrollBar(o);
    },
    _scrollBar = function(o){
        var _this = this;
        this.mod = $("#" + o.mod);
        this.con = $("#" + o.con);
        this.bar = $("#" + o.bar);
        this.btn = $("#" + o.btn);
        this.modH = this.mod.height();
        this.conH = this.con.height();
        this.barH = this.bar.height();
        this.btnH = (this.modH * this.modH / this.conH) < 20 ? 20 : (this.modH * this.modH / this.conH);
        this.TxtScroll();
    };
    _scrollBar.prototype = {
        TxtScroll: function(){
            var _this = this;
            if(_this.conH - _this.modH > 0){
                _this.bar.css({height: _this.modH});
                _this.bar.show();
                _this.startDrag(_this.btn);
            }else{
                _this.bar.hide();
            }
            _this.btn.css("height", _this.btnH);
        },
        startDrag: function(btn){
            var _this = this,
                _move = false,  //�ƶ����
                _y; //�����ؼ����Ͻǵ����λ��
            btn.click(function(){}).mousedown(function(e){
                _move = true;
                _y = e.pageY - parseInt(btn.css("top"));
                btn.fadeTo(20, 0.9);    //�����ʼ�϶���͸����ʾ
                return false;
            });
            $(document).mousemove(function(e){
                if(_move){  //�ƶ�ʱ�������λ�ü���ؼ����Ͻǵľ���λ��
                    _this.drag(e.pageY - _y);
                }
            }).mouseup(function(){
                _move = false;
                btn.fadeTo("fast", 1);//�ɿ�����ֹͣ�ƶ����ָ��ɲ�͸��
            });
            _this.con.bind('mousewheel DOMMouseScroll', function(e, delta){
                if(_this.bar.css('display') == 'none') return;
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);
                var y = parseInt(btn.css('top'));
                if(delta < 0){
                    y += 10;
                }else{
                    y -= 10;
                }
                _this.drag(y);
                return false;
            });
        },
        drag: function (y){
            var _this = this;
            if(y <= 0){
                y = 0;
            }else if( y >= (_this.modH - _this.btnH)){
                y = (_this.modH - _this.btnH)
            }
            var t = (_this.modH - _this.conH) * y / (_this.modH - _this.btnH);
            _this.btn.css({top: y});   //�ؼ���λ��
            _this.con.css({top: t});
        },
        scrollTo: function(t){
            var _this = this;
            var y = -(_this.modH - _this.btnH) * t / (_this.modH - _this.conH);
            if(y <= 0){
                y = 0;
            }else if( y >= (_this.modH - _this.btnH)){
                y = (_this.modH - _this.btnH)
            }
            var t = (_this.modH - _this.conH) * y / (_this.modH - _this.btnH);
            _this.btn.css({top: y});
            _this.con.animate({top: t});
        }
    }
})(jQuery)
/*  |xGv00|a933589f764ce27777dd07489beb9e7a */