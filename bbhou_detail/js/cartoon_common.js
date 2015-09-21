var currentPageIndex = 0; //当前页下标
var currentChapterIndex = 0; //当前章节下标
var pageSize = 1;
var imageMaxWidth = window.screen.width >= 1280 ? 1280 : 1024;//根据分辨率大小，设定图片自适应宽度

//获取参数
function getSetting(name){
	return $.cookie('bg_setting_' + name);
}

//设置参数
function setSetting(name, value, day){
	if(typeof day == 'undefined') day = 30;
	$.cookie('bg_setting_' + name, value, {expires: day*3600*24, path: '/'});
}
	
//弹出框输出信息
function danmeiwo_alert(title, msg, fn){
	$("#win-alert-title").html( title );
	$("#win-alert-msg").html( msg );
	if( typeof fn == 'function' ){
		$("#win-alert-close,#win-alert-ok").unbind('click');
		$("#win-alert-close,#win-alert-ok").bind('click', fn);
	}
	KISSDW.popupBox("none", {boxSelector: "#win-alert"});	
}

//判断是否是翻页模式
function isPageRead(){
	return 	( /shtml/.test(window.location.href) );
}

//通过键值获取字符
function getKeyString(code) {
	var hotKeys = {
		specialKeys: { 8: 'backspace',27: 'esc', 9: 'tab', 32:'space', 13: 'return', 145: 'scroll', 
		20: 'capslock', 144: 'numlock', 19:'pause', 45:'insert', 36:'home', 46:'del',
		35:'end', 33: 'pageup', 34:'pagedown', 37:'←', 38:'↑', 39:'→',40:'↓',109: '-', 
		112:'f1',113:'f2', 114:'f3', 115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 
		120:'f9', 121:'f10', 122:'f11', 123:'f12', 191: '/' , 16:"shift" , 17:"ctrl",18:"alt"},
		shiftNums: { "`":"~", "1":"!", "2":"@", "3":"#", "4":"$", "5":"%", "6":"^", "7":"&", 
		"9":"(", "0":")", "-":"_", "=":"+", ";":":", "'":"\"", ",":"<", 
		".":">",  "/":"?",  "\\":"|" },
		 numKeys : { 106: '*', 
			107: '+', 109: '-', 110: '.', 111 : '/'
			}
	};
	for(var keyString in hotKeys) {
			for(var codeKeys in hotKeys[keyString]){
					if(codeKeys == code)
						return hotKeys[keyString][codeKeys];
			}
	}
	var character = String.fromCharCode(code).toUpperCase();
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
	if(str.indexOf(character) != -1){
		return character;
	}else{
		return "";
	}
}
	
//漫画数据初始化
function cartoon_init(){
	currentPageIndex = getPageIndex();
	currentChapterIndex = getChapterIndex();
	pageSize = getSetting('images_num') > 0 ? parseInt(getSetting('images_num')) : pageSize;
	imageMaxWidth = ( 1 == getSetting('image_auto_size_off') ) ?  2048 : imageMaxWidth;

}

//获取当前页下标
function getPageIndex(){	
	var hash = window.location.hash.substr(1);
	temp=hash.split('&');
	var i =0;
	while(temp[i]){
		temp[i]=temp[i].split('=');
		if(temp[i][0]=='p'){
			return parseInt(temp[i][1]);
		}
		i++;
	}
	return 1;
}

//获取当前章节下标
function getChapterIndex(){	
	for(var i =0; i < chapterTree.length; i++){
		if( currentChapterid == chapterTree[i].substr(chapterTree[i].length-32, 13)){
			return i;
		}	
	}
	return null;
}

//获取页面地址
function getPageUrl(page){
	temp = window.location.href.split('#');
	var url = temp[0]+'#p='+page;

	return url;
}

//页面跳转
function goPage(page){
	window.location.href = getPageUrl(page);
	window.location.reload(false);
}

//章节跳转
function goChapter(url){
	if( isPageRead() ){
		url += '.shtml';
	} else {
		url += '.html';
	}
	window.location.href = url;
}

//最后一页提示
function lastPageTips(){
	if( currentChapterIndex < chapterTree.length - 1 ){
		if( 1 == getSetting('tips_page') ){
			//翻页模式自动跳转
			if( isPageRead() ) {
				nextChapter();
			}
		}else{
			KISSDW.popupBox("none", {boxSelector: "#win-page-last"});
		}
	}else{
		lastChapterTips();//最后一话
	}
}

//最后一话提示
function lastChapterTips(){
	KISSDW.popupBox("none", {boxSelector: "#win-hua-last"});
}

//上一页
function prePage(){
	if( currentPageIndex  - pageSize > 0 ) {
		goPage( currentPageIndex - pageSize );
	} else {
		$("#win-first-title").html('这是第一页了！');
		KISSDW.popupBox("none", {boxSelector: "#win-first"});
	}
}

//下一页
function nextPage(){
	if( currentPageIndex <= picTree.length - pageSize ) {
		goPage( currentPageIndex + pageSize );
	} else {
		lastPageTips();
	}
}

//首页
function firstPage(){
	goPage(1);
}

//末页
function lastPage(){
	mod = picTree.length % pageSize;
	page = ( mod == 0 ) ? picTree.length-pageSize : picTree.length-mod;
	goPage( page );
}

//上一话
function preChapter(){
	if( parseInt( chapterTree[0] ) > 0){
		url = chapter_base+chapterTree[0];
		goChapter(url);
	} else {
		$("#win-first-title").html('这是第一话了！');
		KISSDW.popupBox("none", {boxSelector: "#win-first"});
	}
}

//下一话
function nextChapter(){
	if( parseInt( chapterTree [1]) > 0){
		url = chapter_base+chapterTree[1];
		goChapter(url);
	} else {
		lastChapterTips();
	}
}
	
function getUserActionData(num){
	var data = [];
	data[0]=[$("#cartoon_url").attr('href'), $("#cartoon_url").html()];
	data[1]=[getPageUrl(1), $("#chapter_title").html().replace(/\s共\d+页$/, '')];
	data[2]=[getPageUrl(num), '第' + (num) + '页'];
	return data;
}

//广告显示
function ad_show(cid){
	if( currentChapterIndex < chapterTree.length - 1 ){
	 return false;
	}
	cid_arr=['hyrz008081909','ss008081917','hzw0008081910'];
	for(var i in cid_arr){
		if( cid == cid_arr[i]){
			var html = '<div style="margin-left:auto; margin-right:auto; width:870px; height:80px;">'
				 +'<a href="http://sz.duowan.com/s/gamespread/index.html?__yaadid=1&__yarso=FROM_HJ_BENGOU&__yawebid=1&game=cysg&server=&tip=on" target="_blank">'
				 +'<img src="/game/haizeiwang/870-80.gif" />'
				 +'</a>'
				 +'</div>';
			if( isPageRead() ){
				$('#current-page').parent().after(html);
			}else{
				$('#bottom_chapter').after(html);
			}
			break;
		}	 
	}
} 	
function getImgServer()
{
	servername = $.cookie('servername');
	var img_base = "http://hicomic.uuudm.com";
	if(servername==9)
	{
		img_base = "http://hicomic.uuudm.com";
	}
	else if(servername==1)
	{
		img_base = "http://hicomic.uuudm.com";
	}else if(servername==2)
	{
		img_base = "http://hicomic.uuudm.com";
	}else if(servername==3)
	{
		img_base = "http://hicomic.uuudm.com";
	}else if(servername==8)
	{
		img_base = "http://hicomic.uuudm.com";
	}
	return "";
}
function nofind(){ 
var img=event.srcElement; 
img.src="/Public/img/nofind.gif"; 
img.onerror=null;  
} 


//Ping
var intStartTime;
var objIMG = new Image();
var arrDelays = [];
var intSent;
var bolIsRunning = false;
var bolIsTimeout;
var strURL;
var intTimeout;
var intTimerID;
var intForce;
var svrURLs = ["http://hicomic.uuudm.com/","http://hicomic.uuudm.com/","http://hicomic.uuudm.com/"];
var svrID = 0;
var svrInfo = [[0,0],[0,0],[0,0]];

objIMG.onload =
objIMG.onerror = 
function()
{
	/*
	 * 有回应,取消超时计时
	 */
	clearTimeout(intTimerID);

	if(!bolIsRunning || bolIsTimeout)
		return;

	var delay = new Date() - intStartTime;
	arrDelays.push(delay);
	if(svrID>=3){//结束
		bolIsRunning = false;
		saveSvrInfo();
	}
	if(intSent>=4){
		//统计数据
		var intRecv = arrDelays.length;
		var sum = 0;

		for(var i=0; i<intRecv; i++)
			sum += arrDelays[i];
		svrInfo[svrID][0] = Math.floor(intRecv / intSent * 100);
		svrInfo[svrID][1] = Math.floor(sum/intRecv);
		//执行下一组
		svrID++;
		intSent = 0;
		strURL = svrURLs[svrID];
	}
	/*
	 * 每次请求间隔限制在1秒以上
	 */
	setTimeout(ping, delay<1000?(1000-delay):1000);
}

function ping()
{
	/*
	 * 发送请求
	 */
	intStartTime = +new Date();
	intSent++;

	objIMG.src = strURL + "/" + intStartTime;
	bolIsTimeout = false;

	/*
	 * 超时计时
	 */
	intTimerID = setTimeout(timeout, intTimeout);
}

function timeout()
{
	if(!bolIsRunning)
		return;
	if(svrID>=3){//结束
		bolIsRunning = false;
		saveSvrInfo();
	}
	if(intSent>=4){
		//统计数据
		var intRecv = arrDelays.length;
		var sum = 0;

		for(var i=0; i<intRecv; i++)
			sum += arrDelays[i];
		svrInfo[svrID][0] = intRecv;
		svrInfo[svrID][1] = Math.floor(sum/intRecv);
		//执行下一组
		svrID++;
		intSent = 0;
		strURL = svrURLs[svrID];
	}
	bolIsTimeout = true;
	objIMG.src = "X:\\";

	ping();
}

//更新漫画UV统计
function updateCartoonClick( cid ){
	if( (null == $.cookie('click_' + cid)) || (1 != $.cookie('click_' + cid)) ){
		//console.log("updateclick----cid==="+cid);
		//$.post('/post/updateclick', {'cid':cid});
		$.cookie('click_' + cid, 1, {'expires': 86400,'path':'/'});
	}
}

function autoSelSvr(force){
	intForce = force;
	servername = $.cookie('servername');
	var svrset = $.cookie('svrset');
	if(svrset == 1 && force == 0)
		return;
	strURL = svrURLs[svrID];
	intTimeout = 2000;
	bolIsRunning = true;
	arrDelays = [];
	intSent = 0;
	ping();	
}
function saveSvrInfo(){
	if(svrInfo[0][0]>3 && svrInfo[0][1]<1000)
	{
		$.cookie('svrset',1,{'path': '/'});
		$.cookie("servername",1,{'path': '/'});
	}else if (svrInfo[1][0]>3 && svrInfo[1][1]<1000)
	{
		$.cookie('svrset',1,{'path': '/'});
		$.cookie("servername",3,{'path': '/'});
	}else
	{
		$.cookie('svrset',1,{'path': '/'});
		$.cookie("servername",9,{'path': '/'});
	}
}