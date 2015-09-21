//初始化数据

function getUsername(){
	return $.cookie('symh_username');
}
function getUid(){
	return $.cookie('symh_uid');
}
function danmeiwo_login(url){
	url=url? url : window.location.href;
	$.cookie('symh_gourl', url, {'path':'/'});
	window.location.href = '/Member/login';
	/*$("#danmeiwo_login").html('<div id="udbsdk_login" class="udbsdk_login" style="position: fixed; z-index: 30002; display: block;"><div class="udbsdk_close"><a href="javascript:" onclick=\'$("#danmeiwo_login").empty();\' title="关闭" class="udbsdk_href">&nbsp;X&nbsp;&nbsp;</a>&nbsp;&nbsp;</div><iframe id="udbsdk_frm" class="udbsdk_frm" src="/Member/login/ajaxframe" frameborder="0" scrolling="no"></iframe></div><div id="popupMaskudbsdk_login" class="popup-mask"><iframe src="" frameborder="0" style="width:100%;height:100%;background-color:#000;filter: alpha(opacity=0);-moz-opacity: 0;opacity: 0;"></iframe></div>');
	var udbsdk_login_left = document.body.offsetWidth/2-260;
	var udbsdk_login_top = document.documentElement.clientHeight/2-150;
	$("#udbsdk_login").css("left",udbsdk_login_left);
	$("#udbsdk_login").css("top",udbsdk_login_top);*/
	//return url;
}
function danmeiwo_logout(){
	$.cookie('symh_username', '', {'path':'/','expires':-1});
	$.cookie('symh_uid', '', {'path':'/','expires':-1});
	$.cookie('symh_uid_md5', '', {'path':'/','expires':-1});
	window.location.href = '/Member';
	//location.reload();
	return ;
}


/*
//观看记录和记号的数据格式
var json = {
	"cid1":[["cartoon_url","cartoon_name"],["chapter_url","chapter_name"],["page_url","page_name"],["add_time"]],
	"cid2":[["cartoon_url","cartoon_name"],["chapter_url","chapter_name"],["page_url","page_name"],["add_time"]],
	"cid3":[["cartoon_url","cartoon_name"],["chapter_url","chapter_name"],["page_url","page_name"],["add_time"]]
};
*/
var historyData = {}, historyMaxNum =20;
var markData = {}, markMaxNum =20;
var bookshelfData = {}, bookshelfMaxNum =10000;
var jStoreReady = false;
var userAction = {};
var html5Storage = false;

//显示格式化时间
danmeiwo_showTime = function( time ){
	var str = "";	
	var minute=Math.round( (new Date().getTime() - parseInt(time) ) / (1000*60) );
	if( minute<60 ){
		str = (minute ? minute : 1) + '分钟前';
	}else if( minute < (60*24) ){
		str = Math.round( minute/60 ) + '小时前';
	}else{
		str = Math.round( minute/(60*24) ) + '天前';
	}	
	return str;	
}

//获取json长度
danmeiwo_getJsonLength = function( json ){
	var length = 0;
	for(var i in json){
		length++;
	}
	return length;
}

//添加数据
danmeiwo_addData = function(json, maxNum, cid, data){
	//已经存在，则删除
	if( typeof json['bid'+cid] == 'object'){
		delete json['bid'+cid];
	}
	data[3] = new Date().getTime();
	json['bid'+cid] = data;//在最后面添加数据
	//超出限制，则删除最前面的数据
	var num = danmeiwo_getJsonLength( json ) - maxNum;
	if(num > 0){
		for(var i in json){
			if(num > 0){
				delete json[i];
				num--;
			}	
		}
	}
	return json;
}

//删除数据
function danmeiwo_delData(json, cid){
	if( typeof json['bid'+cid] == 'object'){
		delete json['bid'+cid];
	}
	return json;
}

function danmeiwo_getShowData(json){
	var str = "", tmp = "", len1=8,len2=5, num=0;
	jsonLen = danmeiwo_getJsonLength( json );
	for(var i in json){
		if( num < jsonLen-5 ) {
			num++;
			continue;
		}
		tmp = '<li><div><a href="' + json[i][0][0] + '">' + json[i][0][1].substr(0, len1) + '</a>';
		tmp += '<span><a href="' + json[i][1][0] + '">' + json[i][1][1].substr(0, len2) + '</a></span>';
		tmp += '<span><a href="' + json[i][2][0] + '">' + json[i][2][1] + '</a></span>';
		tmp += '<span class="time">' + danmeiwo_showTime(json[i][3]) + '</span></div>';
		tmp += '<a class="btn-close" href="javascript:;" cid="' + i + '"></a></li>';
		str = tmp + str;
		num++;
	}
	return str;
}

function danmeiwo_getShowData_homepage(json){
		var str = "", tmp = "", len1=12,len2=6, num=0;
		jsonLen = danmeiwo_getJsonLength( json );
		for(var i in json){
			if( num < jsonLen-7 ) {
				num++;
				continue;
			}
			title = json[i][0][1].substr(0, len1) + ' ' + json[i][1][1].substr(0, len2) + ' ' + json[i][2][1]; 
			tmp = '<li><i class="front_icon"></i><a href="' + json[i][2][0] + '" title="'+ title+ '" target="_blank">'+ title+ '</a><a href="javascript:;" class="cancle btn-close" cid="' + i + '"></a></li>'

			str = tmp + str;
			num++;
		}
		if(str === ""){
			str = '<p class="empty_content">还没有记录，<a href="' + $('#random_url').attr('href') + '">去逛逛</a></p>';
		}
		return str;
	}

function LocalWrite(name, value){
	if(html5Storage){
		localStorage.setItem(name, $.toJSON(value));
		return true;
	}
	if(jStoreReady){
		$.jStore.set(name, $.toJSON(value));	
		return true;					  
	}
	var counter = 0;
	var interval = setInterval(function(){
		 if(jStoreReady){
			$.jStore.set(name, $.toJSON(value));					  
		 }
		 if(jStoreReady || counter >100){
			clearInterval(interval);
		 }
		 counter++;
	 },100);
}

function LocalRead(name, fn){
	if(html5Storage){
		data = localStorage.getItem(name);
		data = (null == data || ''==data ) ? {} : $.evalJSON(data);
		fn( data );				
		return true;
	}
	if(jStoreReady){
		data = $.jStore.get(name);
		data = (null == data || ''==data ) ? {} : data;
		fn( data );
		return true;					  
	}
	var counter = 0;
	var interval = setInterval(function(){
			 if(jStoreReady){
				data = $.jStore.get(name);
				data = (null == data || '' == data) ? {} : data;
				fn( data );					  
			 }
			 if(jStoreReady || counter >100){
				clearInterval(interval);
			 }
			 counter++;
		 },100);					 
}

//显示观看记录
function showHistory(){
	var str = danmeiwo_getShowData(historyData);
	if(ishomepage==1)
	str = danmeiwo_getShowData_homepage(historyData);
	if(str === ""){
		str = "<li><div><span>还没有观看历史</span></div><li>";	
		$("#user_history").html(str);
		return false;
	}
	$("#user_history").html(str);
	
	$("#user_history li").hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	});
	
	$("#user_history .btn-close").click(function(){
		delHistory( $(this).attr('cid').substr(3) );									 
	});
}


//添加观看记录
function addHistory(cid, data){
	LocalRead('history', function(_historyData){
		historyData = danmeiwo_addData(_historyData, historyMaxNum, cid, data);
		showHistory();//显示数据
		LocalWrite('history', historyData);
		updateBookshelf(cid, data);//在自动添加观看记录的时候更新数据的数据
		updateRemoteData('history');//将数据同步到服务器
		updateCartoonClick(cid);//更新漫画UV统计
	});
}


//删除观看记录
function delHistory(cid, pageReload){
	LocalRead('history', function(_historyData){
		historyData = danmeiwo_delData(_historyData, cid); //删除数据
		showHistory();//显示数据
		LocalWrite('history', historyData);
		updateRemoteData('history');//将数据同步到服务器
		if( (typeof pageReload == 'boolean') && (true == pageReload) ) window.location.reload();
	});	
}
				 
//显示记号
function showMark(){
	var str = danmeiwo_getShowData(markData);
	if(ishomepage==1)
	str = danmeiwo_getShowData_homepage(markData);
	if(str === ""){
		str = "<li><div><span>还没有记号</span></div><li>";	
		$("#user_mark").html(str);
		return false;
	}
	$("#user_mark").html(str);

	$("#user_mark li").hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	});
	
	$("#user_mark .btn-close").click(function(){
		delMark( $(this).attr('cid').substr(3) );									 
	});
}

//添加记号
function addMark(cid, data){
	LocalRead('mark', function(_markData){
		markData = danmeiwo_addData(_markData, markMaxNum, cid, data);
		showMark();//显示数据
		LocalWrite('mark', markData);
		updateRemoteData('mark');//将数据同步到服务器
	});
}

//删除记号
function delMark(cid, pageReload){
	LocalRead('mark', function(_markData){
		markData = danmeiwo_delData(_markData, cid); //删除数据
		showMark();//显示数据
		LocalWrite('mark', markData);
		updateRemoteData('mark');//将数据同步到服务器
		if( (typeof pageReload == 'boolean') && (true == pageReload) ) window.location.reload();
	});
}

//添加书架
function addBookshelf(cid, alertFlag){
	if( null == getUsername() ){
		return danmeiwo_login();
	}
	LocalRead('bookshelf', function(_bookshelfData){
		//已存在，则不添加
		if( typeof _bookshelfData['bid'+cid] == 'object'){
			alertFlag && (alert('书架有这部漫画了'));
			return false;
		}
		data = [["",""],["",""],["",""],[""]];
		bookshelfData = danmeiwo_addData(_bookshelfData, bookshelfMaxNum, cid, data);
		LocalWrite('bookshelf', bookshelfData);
		$.post('/Post/addbookshelf',
			{'cid':cid},
			function(json){
				if(json.rs==1) alert('成功收藏本书！');
				if(json.rs==2) alert('你已经添加过本书！');
				if(json.rs==0) alert('出现错误，请重试！');
			},
			'json'
		);
		//updateRemoteData(false, '/post/addbookshelf', {'cid':cid});//将数据同步到服务器
		alertFlag && (alert('已加入到书架'));
	});
}

//删除书架
function delBookshelf(cid, pageReload){
	LocalRead('bookshelf', function(_bookshelfData){
		bookshelfData = danmeiwo_delData(_bookshelfData, cid); //删除数据
		LocalWrite('bookshelf', bookshelfData);
		$.post("/post/delbookshelf",
			{'cid':cid},
			function(json){
				if(json.rs!=1){alert(json.rs);alert('出现错误，请重试！');}
				else{
					if( (typeof pageReload == 'boolean') && (true == pageReload) ){
						window.location.reload();
					}
				}
			},
			'json'
		);
	});
}

//删除更新提示
function delUpdateNotice(cid, pageReload){
	var delnoticefurl="/Post/delremind";
	if(cid==0) delnoticefurl="/Post/update_ac.php";//如果不设置cid则删除所有
	$.get(delnoticefurl,
	  function(data){
		if(data!=1){alert('出现错误，请重试！');}
		else{
			$.cookie('update_total', 0, {'expires': 0,'path':'/'});
			if( (typeof pageReload == 'boolean') && (true == pageReload) ){
				window.location.reload();
			}
		}
	});
}

//更新书架
function updateBookshelf(cid, data){
if( null != getUsername() ){
	LocalRead('bookshelf', function(_bookshelfData){
		//仅存在的时候才更新
		if( typeof _bookshelfData['bid'+cid] == 'object'){
			bookshelfData = danmeiwo_addData(_bookshelfData, bookshelfMaxNum, cid, data);
			LocalWrite('bookshelf', bookshelfData);
			if(_bookshelfData['bid'+cid][1][0]==getPageUrl(1)){
				//updateRemoteData(cid, data);
				//alert(cid);alert(chid);
				$.post("/Post/updatebookshelf",
					{'bid':cid, 'cid':chid, 'chapname':data[1][1]},
				 	function(data){
						if(data!=1) alert("将书架数据同步到服务器时出现了错误！");
						//alert(data);
					});
			}
		}
	});
}}

//更新服务器数据
function updateRemoteData(type){
if( null != getUsername() ){
	LocalRead(type, function(_data){
		postData = $.toJSON(_data);
		$.post("/Post/updatedata",
			{'type':type,'data': postData},
			function(data){
				if(data!=1) alert("将数据同步到服务器时出现了错误！");
		});
	});
}
}

//更新本地数据
function updateLocalData(){
	if( null != getUsername() ){
		$.get('/get/bookshelf', 
			   function(data){
			   	historyData = ( $.isEmptyObject(data['history']) ) ? {} : data['history']; 
					markData = ( $.isEmptyObject(data['mark']) ) ? {} : data['mark']; 
					bookshelfData = ( $.isEmptyObject(data['bookshelf']) ) ? {} : data['bookshelf']; 
					LocalWrite('history', historyData);
					LocalWrite('mark', markData);
					LocalWrite('bookshelf', bookshelfData);	
					showHistory();
					showMark();	
				},
				 'json'
			);
	}
}

//更新漫画UV统计
function updateCartoonClick( cid ){
	if( (null == $.cookie('click_' + cid)) || (1 != $.cookie('click_' + cid)) ){
		//console.log("updateCartoonClick==="+cid);
		//$.post('/post/updateclick', {'cid':cid});
		$.cookie('click_' + cid, 1, {'expires': 86400,'path':'/'});
	}
}

function bengou_logout(){
	$.cookie('username', null, {'path':'/'});
	$.cookie('bengou_auth', null, {'path':'/'});
	danmeiwo_logout();	
}

//jQuery.extend(jQuery.jStore.defaults, {
//	project: 'ccmanhua.com',
//	engine: 'flash',
//	flash: 'http://' + window.location.host + '/js/jstore/jStore.Flash.html'
//});
		
$(function(){
	/*try{
		$.jStore.load();
		
		$.jStore.ready(function(engine){alert('001');
			$.jStore.flashReady(function(){
				alert('004');
				historyData = (null != $.jStore.get('history') && '' != $.jStore.get('history') ) ? $.jStore.get('history') : historyData;
				markData = (null != $.jStore.get('mark') && '' != $.jStore.get('mark') ) ? $.jStore.get('mark') : markData;
				bookshelfData = (null != $.jStore.get('bookshelf') && '' != $.jStore.get('bookshelf')  ) ? $.jStore.get('bookshelf') : bookshelfData;
				alert('005');
				showHistory();//显示历史记录
				showMark()//显示记号

				jStoreReady = true;
			});
		});
	}catch(e){
		*/
//		if(window.localStorage){
//			html5Storage = true;
//			LocalRead('history', function(_historyData){ historyData=_historyData;} );
//			LocalRead('mark', function(_markData){ markData=_markData ;} );
//			LocalRead('bookshelf', function(_bookshelfData){ bookshelfData=_bookshelfData;} );
//			showHistory();//显示历史记录
//			showMark()//显示记号
//		} 
	//}

	//从服务器同步数据
	
//	if( (null != $.cookie('symh_username')) && (null == $.cookie('update_flag')) ){
//		//alert('start');
//		updateLocalData();
//		$.cookie('update_flag', 1, {'path':'/'});
//	}
//	if( null == $.cookie('symh_username') ){
//		$.cookie('update_flag', null, {'path':'/'});
//	}
});  