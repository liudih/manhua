var qTcms={screenWidth:window.screen.width,Dom:{get:function(a){return(typeof a=="object")?a:document.getElementById(a)},eles:function(b,a){if(typeof(b)=="string"){b=qTcms.Dom.get(b)}
return b.getElementsByTagName(a)},show:function(a,b){qTcms.Dom.get(a).style.display=(b==0?"":"block")},hide:function(a){qTcms.Dom.get(a).style.display="none"},toggle:function(a){var b=qTcms.Dom.get(a);b.style.display=="none"?b.style.display="block":b.style.display="none"}},Browser:{ie:/msie/.test(window.navigator.userAgent.toLowerCase()),ie6:/msie 6.0/.test(window.navigator.userAgent.toLowerCase()),moz:/gecko/.test(window.navigator.userAgent.toLowerCase()),opera:/opera/.test(window.navigator.userAgent.toLowerCase()),safari:/safari/.test(window.navigator.userAgent.toLowerCase())},Cookie:{set:function(b,d,a,e,c){if(typeof a=="undefined"){a=new Date(new Date().getTime()+1000*3600*24*30)}
document.cookie=b+"="+escape(d)+((a)?"; expires="+a.toGMTString():"")+((e)?"; path="+e:"; path=/")+((c)?";domain="+c:"")},get2:function(b){var aCookie=document.cookie.split("; ")
for(var i=0;i<aCookie.length;i++){var aCrumb=aCookie[i].split("=")
if(b==unescape(aCrumb[0]))return unescape(aCrumb[1])}
return null},get3:function(a,b){if(a==null)return null
var aCookie=a.split("&")
for(var i=0;i<aCookie.length;i++){var aCrumb=aCookie[i].split("=")
if(b==unescape(aCrumb[0]))return unescape(aCrumb[1])}
return null},get:function(b){var a=document.cookie.match(new RegExp("(^| )"+b+"=([^;]*)(;|$)"));if(a!=null){return unescape(a[2])}
return null},clear:function(a,c,b){if(this.get(a)){document.cookie=a+"="+((c)?"; path="+c:"; path=/")+((b)?"; domain="+b:"")+";expires=Fri, 02-Jan-1970 00:00:00 GMT"}}},getStyle:function(b,a){if(document.defaultView){return document.defaultView.getComputedStyle(b,null).getPropertyValue(a)}else{a=a.replace(/\-([a-z])([a-z]?)/ig,function(e,d,c){return d.toUpperCase()+c.toLowerCase()});return b.currentStyle[a]}},getPosXY:function(c,d){var b=d?d.slice(0):[0,c.offsetHeight-1],a;do{b[0]+=c.offsetLeft;b[1]+=c.offsetTop;c=c.offsetParent}while(c);return b},Ajax:function(c,j){var h;if(typeof XMLHttpRequest!=="undefined"){h=new XMLHttpRequest()}else{var b=["Microsoft.XmlHttp","MSXML2.XmlHttp","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.5.0"];for(var d=0,a=b.length;d<a;d++){try{h=new ActiveXObject(b[d]);break}catch(f){}}}
h.onreadystatechange=g;function g(){if(h.readyState<4){return}
if(h.status!==200){return}
if(h.readyState===4){j(h)}}
h.open("GET",c,true);h.send("")},AjaxPost:function(url,query,j){var h;if(typeof XMLHttpRequest!=="undefined"){h=new XMLHttpRequest()}else{var b=["Microsoft.XmlHttp","MSXML2.XmlHttp","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.5.0"];for(var d=0,a=b.length;d<a;d++){try{h=new ActiveXObject(b[d]);break}catch(f){}}}
h.onreadystatechange=g;function g(){if(h.readyState<4){return}
if(h.status!==200){return}
if(h.readyState===4){j(h)}}
h.open("POST",url,true);h.setRequestHeader("Content-Length",query.length);h.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");h.send(query);},JsLoader:function(d,a,e,c){var b=document.createElement("script");if(c){b.setAttribute("charset",c)}
else{b.setAttribute("charset","utf-8")}
b.setAttribute("type","text/javascript");b.setAttribute("src",d);b.id=a;document.getElementsByTagName("head")[0].appendChild(b);if(e){if(qTcms.Browser.ie){b.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){e()}}}else{if(qTcms.Browser.moz){b.onload=function(){e()}}
else{e()}}}},addFav:function(a){if(document.all){window.external.AddFavorite(location.href,a)}else{if(window.sidebar){window.sidebar.addPanel(a,location.href,"")}else{if(window.opera&&window.print){return true}}}},setHomepage:function(c,a){var b=location.pathname.replace("/","");b=b.split(".")[0];if(a){b=""}
if(qTcms.Browser.moz){alert("设定失败！该操作不支持FireFox浏览器！")}else{c.style.behavior="url(#default#homepage)";if(b=="index"||b==""||b.indexOf("/")!==-1){c.setHomePage(window.location.href)}else{c.setHomePage(window.location.href)}}},Demo_hits:function(id,G_waibu,htmlid){qTcms.Ajax(G_waibu+"qTcms_Inc/Ajax.asp?action=hits&id="+id+"&t="+new Date().getTime()+"&hid="+htmlid,function(d){var s2="";var s=d.responseText;if(s.indexOf("==")!=-1){var b=s.split("==")
b2=b[1];if(b2!=""){if(qTcms.Dom.get(b2))
qTcms.Dom.get(b2).innerHTML=b[0]}}})},history_in:function(){if(qTcms_S_m_name!=""){var coTime=new Date();var coName;var coDate=coTime.getFullYear()+"-"+coTime.getMonth()+"-"+coTime.getDate()+"-"+coTime.getHours()+"-"+coTime.getMinutes()+"-"+coTime.getSeconds();coName=qTcms_S_m_name.replace("^^","_");var wlink=coDate+"^^"+coName+"^^"+qTcms_S_m_playm.replace("^^","_")+"^^"+getReqq()+"^^"+qTcms_S_p_id+"^^"+qTcms_S_m_id+"_ShG_";old_info=qTcms.Cookie.get("qtmhhis");var insert=true;if(typeof(old_info)=="undefined"|old_info==null){qTcms.Cookie.set("qtmhhis",wlink);}else{var old_link=old_info.split("_ShG_");var wait_info="";for(j=0;j<old_link.length-1;j++){if(old_link[j].indexOf(coName)!=-1){}else{wait_info+=old_link[j]+"_ShG_";}
if(j==10-1){break;}}
wlink+=wait_info;qTcms.Cookie.clear("qtmhhis","")
qTcms.Cookie.set("qtmhhis",wlink);}}},history_del:function(id){var old_info=qTcms.Cookie.get("qtmhhis");if(typeof(old_info)=="undefined"|old_info==null){}else{var wlink="";var old_link=old_info.split("_ShG_");var wait_info="";for(j=0;j<old_link.length-1;j++){if((old_link[j]+"_ShG_").indexOf("^^"+id+"_ShG_")!=-1){}else{wait_info+=old_link[j]+"_ShG_";}}
wlink+=wait_info;qTcms.Cookie.clear("qtmhhis","")
qTcms.Cookie.set("qtmhhis",wlink);}},history_delall:function(){var old_info=qTcms.Cookie.get("qtmhhis");if(typeof(old_info)=="undefined"|old_info==null){}else{qTcms.Cookie.clear("qtmhhis","")}},history_list:function(ppstr,nostr,numbs){var history_info=qTcms.Cookie.get("qtmhhis");var content="",mi=1;if(history_info!=null){history_arg=history_info.split("_ShG_");var i;for(i=0;i<=history_arg.length- 2;i++){if(history_arg[i]!=null){var wlink=history_arg[i].split("^^");var jiludate=wlink[0].split("-");var BirthDay=new Date(jiludate[0],jiludate[1],jiludate[2],jiludate[3],jiludate[4],jiludate[5]);var today=new Date();var timeold=(today.getTime()- BirthDay.getTime());var sectimeold=timeold/1000;var secondsold=Math.floor(sectimeold);var msPerDay=24*60*60*1000;var e_daysold=timeold/msPerDay;var daysold=Math.floor(e_daysold);var e_hrsold=(e_daysold- daysold)*24;var hrsold=Math.floor(e_hrsold);var e_minsold=(e_hrsold- hrsold)*60;var minsold=Math.floor((e_hrsold- hrsold)*60);var seconds=Math.floor((e_minsold- minsold)*60);if(daysold!=0){var daysold_d=daysold+"天";var hrsold="";var minsold="";var seconds="";}else{daysold_d="";}
if(hrsold!=0){var hrsold_d=hrsold+"小时";var daysold="";var minsold="";var seconds="";}else{hrsold_d="";}
if(minsold!=0){var minsold_d=minsold+"分钟";var daysold="";var hrsold="";var seconds="";}else{minsold_d="";}
if(seconds!=0){var seconds_d=seconds+"秒";var daysold="";var hrsold="";var minsold="";}else{seconds_d="";}
if(daysold_d==""&hrsold_d==""&minsold_d==""&seconds_d==""){seconds_d="0秒";}
var qt_time1=daysold_d+ hrsold_d+ minsold_d+ seconds_d+"前";var qt_manhuaming=wlink[1];var qt_manhuazj=wlink[2];var qt_manhuapage=wlink[3];var qt_manhuazjid=wlink[4];var qt_manhuaid=wlink[5];if(mi<=numbs){content+=ppstr.replace(/\{1\}/gi,qt_time1).replace(/\{2\}/gi,qt_manhuaming).replace(/\{3\}/gi,qt_manhuazj).replace(/\{4\}/gi,qt_manhuapage).replace(/\{5\}/gi,qt_manhuazjid).replace(/\{6\}/gi,qt_manhuaid);mi++;}}}}else{content=nostr;}
return content;}};