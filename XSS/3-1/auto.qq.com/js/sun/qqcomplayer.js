function clickLidn(){};

/*
*@describe: ��Ѷ����Ƶ������

*@author: Tomiezhang@tencent.com
*@Supported formats: mp3
*@Time:2013/3/3
*/
;(function(w){
		w.g_flashPlayer = w.g_flashPlayer || {};
	/*���ȵ���*/
	g_flashPlayer.soundData = function(dataObj) {
		QQCOMPLAYER.barCount(dataObj.position,$("#flashMusicPlayerFm")[0].swfGetTotalTime());
	};
	g_flashPlayer.soundStatChange = function(dataObj) {};
	g_flashPlayer.soundIOError = function(msg) {};
	/*����*/
	g_flashPlayer.swfPlay = function(mp3){
		try{
			$("#flashMusicPlayerFm")[0].swfPlayMusic(mp3);
			QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":true};
			return false;
		}catch(e){
			setTimeout(function(){
				g_flashPlayer.swfPlay(mp3);
			},100)
		}
	};
	/*ֹͣ*/
	g_flashPlayer.swfStop = function(){
		try{
			$("#flashMusicPlayerFm")[0].swfStopMusic();
			QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":false};
		}catch(e){}
	};
	/*��ͣ*/
	g_flashPlayer.swfPaus = function(){
		try{
			$("#flashMusicPlayerFm")[0].swfPauseMusic();
			QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":false};
		}catch(e){}
	};
	/*����*/
	g_flashPlayer.swfMute = function(is){
		try{
			if(is){
				$("#flashMusicPlayerFm")[0].swfSetMute(true);
				QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isMute":true};
			}else{
				$("#flashMusicPlayerFm")[0].swfSetMute(false);
				QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isMute":false};
			}
		}catch(e){}
	};
	w.QQCOMPLAYER = w.QQCOMPLAYER || {};
	QQCOMPLAYER.sq=0;
	/*������״̬*/
	QQCOMPLAYER.sta =[];
	QQCOMPLAYER.swfhtml = '<object width="1" height="1" data="//mat1.gtimg.com/joke/shenshenadd/MusicPlayer.swf" id="flashMusicPlayerFm" name="flashMusicPlayer" type="application/x-shockwave-flash"><param name="quality" value="high"><param name="movie" value="//mat1.gtimg.com/joke/shenshenadd/MusicPlayer.swf" /><param name="wmode" value="transparent"><param name="allowScriptAccess" value="always"></object>';
	QQCOMPLAYER.CreatH5player = function(){
		this.html5player = new Audio();
	};
	/*h5����*/
	QQCOMPLAYER.html5play = function(mp3){
		try{
			this.html5player.src=mp3;
			this.html5player.play();
			this.html5player.addEventListener("timeupdate", function(){
				QQCOMPLAYER.html5SoundData();
			}, true);
			QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":true};
		}catch(e){}
	};
	/*h5��ͣ*/
	QQCOMPLAYER.html5Paus = function(){
		this.html5player.pause();
		QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":false};
	};
	/*h5ֹͣ*/
	QQCOMPLAYER.html5Stop = function(){
		this.html5player.stop();
		QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":false};
	};
	/*h5����*/
	QQCOMPLAYER.html5Mute = function(is){
		if(is){
			this.html5player.volume = 0;
			QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isMute":true}
		}else{
			this.html5player.volume = 100;
			QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isMute":false}
		}
	};
	/*h5���ȵ���*/
	QQCOMPLAYER.html5SoundData = function(){
		QQCOMPLAYER.barCount(this.html5player.currentTime,this.html5player.duration);
	};
	/*��������Ⱦ*/
	QQCOMPLAYER.barCount = function(p,t){
		$(QQCOMPLAYER["wrap"]).eq(QQCOMPLAYER.sq).find("div[qqcom_player_pro]").css("width",((Math.ceil(p)/t)*100)+"%");
		if($(QQCOMPLAYER["wrap"]).eq(QQCOMPLAYER.sq).find("div[qqcompalyer_timezone]")){
			$(QQCOMPLAYER["wrap"]).eq(QQCOMPLAYER.sq).find("div[qqcompalyer_timezone]").html(Math.ceil(p)+"s:"+Math.ceil(t)+"s");
		}
		if(((Math.ceil(p)/t)*100)>=100){
			QQCOMPLAYER.sta[QQCOMPLAYER.sq].isplay = false;
			$(QQCOMPLAYER["wrap"]).find("div[qqcom_player_pro]").css("width","0");
			if($(QQCOMPLAYER["wrap"]).find("button[qqcom_player_url]").hasClass(QQCOMPLAYER["palyClass"])){
				$(QQCOMPLAYER["wrap"]).find("button[qqcom_player_url]").removeClass(QQCOMPLAYER["palyClass"]).addClass(QQCOMPLAYER["stopClass"])
			}
		}
	
	}
	QQCOMPLAYER.init = function(args){
		$.each(args,function(o,i){
			QQCOMPLAYER[o] = i;
		});
		/*�ж�ƽ̨*/
		var ua = navigator.userAgent;
		if(ua.indexOf("iPod")!=-1 || ua.indexOf("iPad")!=-1 || ua.indexOf("iPhone")!=-1 || ua.indexOf("Android")!=-1){
			QQCOMPLAYER.CreatH5player();
			$(QQCOMPLAYER["wrap"]).each(function(i){
				$(this).find("button[qqcom_player_url]").bind("click",function(){
						/*�Ƿ��ʼ��*/
							if(QQCOMPLAYER.sta.length==0){
							QQCOMPLAYER.sq = i;
							QQCOMPLAYER.html5play($(this).attr("qqcom_player_url"));
							$(this).removeClass(QQCOMPLAYER["stopClass"]).addClass(QQCOMPLAYER["palyClass"]);
						/*��δ���������Ŀ*/
						}else if(QQCOMPLAYER.sta[i] === undefined){
							$(QQCOMPLAYER["wrap"]).eq(QQCOMPLAYER.sq).find("button[qqcom_player_url]").removeClass(QQCOMPLAYER["palyClass"]).addClass(QQCOMPLAYER["stopClass"]);
							QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":false};
							QQCOMPLAYER.sq = i;
							QQCOMPLAYER.html5play($(this).attr("qqcom_player_url"));
							$(this).removeClass(QQCOMPLAYER["stopClass"]).addClass(QQCOMPLAYER["palyClass"]);
						}else{
								/*�Ƿ��ڲ�����*/
								if(!QQCOMPLAYER.sta[i].isplay){
								$(QQCOMPLAYER["wrap"]).eq(QQCOMPLAYER.sq).find("button[qqcom_player_url]").removeClass(QQCOMPLAYER["palyClass"]).addClass(QQCOMPLAYER["stopClass"]);
								QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":false};
								 QQCOMPLAYER.sq = i;
								QQCOMPLAYER.html5play($(this).attr("qqcom_player_url"));
								//console.log(QQCOMPLAYER.sta);
								$(this).removeClass(QQCOMPLAYER["stopClass"]).addClass(QQCOMPLAYER["palyClass"]);
								
								}else{
								QQCOMPLAYER.html5Paus();
								$(this).removeClass(QQCOMPLAYER["palyClass"]).addClass(QQCOMPLAYER["stopClass"]);
								}
						}
				})
			})
	
		}else{
			$("body").append(this.swfhtml);
			$(QQCOMPLAYER["wrap"]).each(function(i){
				$(this).find("button[qqcom_player_url]").bind("mouseover",function(){
					/*�Ƿ��ʼ��״̬*/
					if(QQCOMPLAYER.sta.length==0){
						if($(this).hasClass(QQCOMPLAYER["stopClass"])){
							$(this).removeClass(QQCOMPLAYER["stopClass"]).addClass(QQCOMPLAYER["hoverClass"])
						}
					}else{
						/*�Ƿ񲥷�״̬*/
					$(this).removeClass(QQCOMPLAYER["stopClass"]).addClass(QQCOMPLAYER["hoverClass"])
						if(!QQCOMPLAYER.sta[QQCOMPLAYER.sq].isplay){
							if($(this).hasClass(QQCOMPLAYER["stopClass"])){
								$(this).removeClass(QQCOMPLAYER["stopClass"]).addClass(QQCOMPLAYER["hoverClass"])
							}
						}
					}
				}).bind("mouseout",function(){
					/*�Ƿ��ʼ��״̬*/
					if(QQCOMPLAYER.sta.length==0){
						if($(this).hasClass(QQCOMPLAYER["hoverClass"])){
							$(this).removeClass(QQCOMPLAYER["hoverClass"]).addClass(QQCOMPLAYER["stopClass"])
						}
					}else{
						/*�Ƿ񲥷�״̬*/
						$(this).removeClass(QQCOMPLAYER["hoverClass"]).addClass(QQCOMPLAYER["stopClass"])
						if(!QQCOMPLAYER.sta[QQCOMPLAYER.sq].isplay){
							if($(this).hasClass(QQCOMPLAYER["hoverClass"])){
								
							$(this).removeClass(QQCOMPLAYER["hoverClass"]).addClass(QQCOMPLAYER["stopClass"])
						}
						}
					}
				}).bind("click",function(){
						/*�Ƿ��ʼ��*/
							if(QQCOMPLAYER.sta.length==0){
							QQCOMPLAYER.sq = i;
							g_flashPlayer.swfPlay($(this).attr("qqcom_player_url"));
							$(this).removeClass(QQCOMPLAYER["stopClass"]).addClass(QQCOMPLAYER["palyClass"]);
						/*��δ���������Ŀ*/
						}else if(QQCOMPLAYER.sta[i] === undefined){
							$(QQCOMPLAYER["wrap"]).eq(QQCOMPLAYER.sq).find("button[qqcom_player_url]").removeClass(QQCOMPLAYER["palyClass"]).addClass(QQCOMPLAYER["stopClass"]);
							QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":false};
							QQCOMPLAYER.sq = i;
							g_flashPlayer.swfPlay($(this).attr("qqcom_player_url"));
							$(this).removeClass(QQCOMPLAYER["stopClass"]).addClass(QQCOMPLAYER["palyClass"]);
						}else{
							/*�Ƿ��ڲ�����*/
							if(!QQCOMPLAYER.sta[i].isplay){
							$(QQCOMPLAYER["wrap"]).eq(QQCOMPLAYER.sq).find("button[qqcom_player_url]").removeClass(QQCOMPLAYER["palyClass"]).removeClass(QQCOMPLAYER["hoverClass"]).addClass(QQCOMPLAYER["stopClass"]);
							QQCOMPLAYER.sta[QQCOMPLAYER.sq] = {"isplay":false};
							 QQCOMPLAYER.sq = i;
							g_flashPlayer.swfPlay($(this).attr("qqcom_player_url"));
							//console.log(QQCOMPLAYER.sta);
							$(this).removeClass(QQCOMPLAYER["stopClass"]).addClass(QQCOMPLAYER["palyClass"]);
							
							}else{
							g_flashPlayer.swfPaus();
							$(this).removeClass(QQCOMPLAYER["palyClass"]).addClass(QQCOMPLAYER["stopClass"]);
							}
						}
				})
			});
		}
	}; 
})(window);
QQCOMPLAYER.init({
	"wrap":"div.qqcom_player",
	"stopClass":"qqcompalyer_btn_play_unchk",
	"hoverClass":"qqcompalyer_btn_play_hover",
	"palyClass":"qqcompalyer_btn_play_chk"
});
/*  |xGv00|4f6863318fe72e9dc510494c3abff392 */