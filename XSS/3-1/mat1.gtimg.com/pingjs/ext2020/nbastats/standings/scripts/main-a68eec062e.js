!function(){!function(){var e={};this.tmpl=function t(a,n){var r=/\W/.test(a)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):e[a]=e[a]||t(document.getElementById(a).innerHTML);return n?r(n):r}}(),define("tmpl",function(){}),require.config({baseUrl:"./scripts/",paths:{},shim:{tmpl:{}}}),require(["tmpl"],function(){function e(e){var t=this;return t.data=e,t.html=tmpl("table",t.data),t.$node=$(t.html),t.$pagingBtns=t.$node.find(".paging > a"),t.$scrollCont=t.$node.find(".scoll-container"),t.$detailTables=t.$scrollCont.find(".tbl-details"),t._appended=!1,t.append=function(){a.append(t.$node),t._appended=!0,t.$pagingBtns.click(function(){var e=$(this).attr("data-action");"prev"===e?t.goPage(0):"next"===e&&t.goPage(1)})},t._curPage=0,t._maxPage=1,t.goPage=function(e){if(t._appended&&e!==t._curPage){var a=t.$detailTables.eq(0).width();t.$scrollCont.stop().animate({"margin-left":0-a*e},800,"easeOutCubic"),t._curPage=e,0===t._curPage?t.$pagingBtns.removeClass("disable").filter("[data-action=prev]").addClass("disable"):t._curPage===t._maxPage&&t.$pagingBtns.removeClass("disable").filter("[data-action=next]").addClass("disable")}},t}$.extend($.easing,{easeOutCubic:function(e,t,a,n,r){return n*((t=t/r-1)*t*t+1)+a}});var t={preSeason:"\u5b63\u524d\u8d5b",regularSeason:"\u5e38\u89c4\u8d5b",playoff:"\u5b63\u540e\u8d5b"};$.ajax({type:"get",async:!0,url:"//matchweb.sports.qq.com/tools/getCurCompetition?competitionId=100000",dataType:"jsonp",success:function(e){if(0==e.code){var a=e.data,n=a.seasonId+"-"+(a.seasonId-0+1),r=t[a.seasonType];$(".area-tab .layout h2").text(n+"\u8d5b\u5b63 "+r)}},error:function(){error()}});var a=$(".area-tables .layout"),n=function(){var e;return function(t,a){e?a(e[t]):$.ajax({url:"//matchweb.sports.qq.com/rank/team?from=sporthp",data:{competitionId:"100000",from:"NBA_PC"},dataType:"jsonp",scriptCharset:"utf-8",success:function(n){n&&0===n[0]?(e=n[1],a(e[t])):e={}}})}}(),r={east:{theme:"blue",areaname:"\u4e1c\u90e8"},west:{theme:"red",areaname:"\u897f\u90e8"},central:{theme:"blue",areaname:"\u4e2d\u90e8"},atlantic:{theme:"blue",areaname:"\u5927\u897f\u6d0b"},eastsouth:{theme:"blue",areaname:"\u4e1c\u5357"},pacific:{theme:"red",areaname:"\u592a\u5e73\u6d0b"},westsouth:{theme:"red",areaname:"\u897f\u5357"},westnorth:{theme:"red",areaname:"\u897f\u5317"}},i=function(t,a){n(t,function(n){var i=$.extend(r[t],{type:"east"===t||"west"===t?"conference":"division",areacode:t,standings:n}),o=new e(i);o.append(),a&&a(o)})},o={conference:function(e){a.empty(),i("east",function(){i("west")})},division:function(){a.empty(),i("atlantic",function(){i("central",function(){i("eastsouth",function(){i("westnorth",function(){i("pacific",function(){i("westsouth")})})})})})}},s=$(".area-tab ul.tab > li[data-ref]");s.on("click",function(){var e=$(this),t=e.attr("data-ref");o[t]&&(o[t](),s.removeClass("current"),e.addClass("current"))});var c="conference",u=window.location.hash.substr(1);u&&("conference"!==u&&"division"!==u||(c=u)),s.filter("[data-ref="+c+"]").trigger("click");try{ExposureBoss(null,"PM_s")}catch(l){}}),define("config",function(){})}();
//# sourceMappingURL=main-a68eec062e.js.map
/*  |xGv00|5cb5d2f91c0f56bda265b244ababe16b */