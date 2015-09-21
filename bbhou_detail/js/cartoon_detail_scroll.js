$(function(){
	var jPicList = $('#pic-list');
	var sTimer =null;
	
	cartoon_init();
	//autoSelSvr(0);
	pic_base = getImgServer();
	//刷pv
	//$("body").append('<iframe src="about:blank" id="iframe_pv" frameborder="0" width="0" height="0">');
	//function pv(page){
	//	$("#iframe_pv").attr('src', '/chapter.html?from='+ encodeURIComponent(getPageUrl(page)) );	
	//}
	
	$(window).scroll(function scrollHandler(){
		clearTimeout(sTimer);
		sTimer = setTimeout(function() {
				if(window.loaded == 1){
					$(window).unbind("scroll", scrollHandler);									
				}
				var c=document.documentElement.clientHeight || document.body.clientHeight, t=$(document).scrollTop();
				if(t+c >= jPicList.offset().top+jPicList.height()){
					loadMore();
				}
			}, 
			100
		);
	});

	function loadMore() {
		if (window.loaded == 1) return;		
		if( currentPageIndex <= picTree.length ){
			showPic();
		}else{
			window.loaded = 1;
			$("#bottom_chapter").show();//底部显示上一话下一话
			//ad_show(cid);//显示广告
			//lastPageTips();			
		}	
	}
	
	//预加载图片
	var loadPageIndex = -1;
	var intervalHandle = setInterval(function loadPic(){
			if( currentPageIndex == loadPageIndex ){
				return false;
			}
			loadPageIndex = currentPageIndex;
			
			if( loadPageIndex >= (picTree.length-1) ){
				clearInterval(intervalHandle);
				return ;
			}
			var c=document.documentElement.clientHeight || document.body.clientHeight, t=$(document).scrollTop();
			if(t+c+6000 >= jPicList.offset().top+jPicList.height()){
				//加载图片，加载完之后立即显示
				pic_base = getImgServer();
				var imgUrl = picTree[loadPageIndex];
//				if(imgUrl.match(/^http:\/\/.+/)){
//					imgUrl = "/showPic.php?picurl="+imgUrl;
//				}
				$.preLoadImg( pic_base + imgUrl, function(){ showPic(); });
			}
		},
		100);
	
	var lastPageIndex = -1;
	
	function showPic(){	
		//当前图片尚未加载完之前，不显示下一张图片
		if( (currentPageIndex-1) == lastPageIndex){
			return false;
		}
		lastPageIndex = currentPageIndex-1;
		
		var num = currentPageIndex;	
		pic_base = getImgServer();
		console.log("++++++++");
		console.log("++++++++"+pic_base);
		var imgUrl = picTree[currentPageIndex-1];
		
		if(typeof(imgUrl)=="undefined"){
			return false;
		}
//		if(imgUrl.match(/^http:\/\/.+/)){
//			imgUrl = "/showPic.php?picurl="+imgUrl;
//		}
		var imgStr = '<img src="' + pic_base + imgUrl + '" alt="" />';
		var imgInfo = '<p class="img_info">(' + num + '/' + picTree.length +')</p>';
		//console.info(imgStr);
		jPicList.append( imgStr );
		
		var lastImgObj = $('#pic-list img').last();	
		lastImgObj.hide();
		$('#loading').show();
		//自适应大小
		lastImgObj.imgAutoSize( imageMaxWidth,
			0,
			function(){									
				$('#loading').hide();
				lastImgObj.show();
				jPicList.append(imgInfo);
				currentPageIndex++;	
			 }
		);
		
	}
	showPic();

	$("#pic-list").drag(); //图片拖拽功能
	$("#chapter_title").append('  共' + picTree.length + '页');
	
	//观看记录与记号
	addHistory(cid, getUserActionData(currentPageIndex));
	var lastHistoryPageIndex = currentPageIndex;
	var startHistoryPageIndex = lastHistoryPageIndex;
	function getPageindex(){
		var images_height = jPicList.offset().top;;
		var c=document.documentElement.clientHeight || document.body.clientHeight, t=$(document).scrollTop();
		var scroll_height = t+c;
		var pageIndex = startHistoryPageIndex;
		$('#pic-list img').each(function(i){
			images_height += $(this).height();
			if( images_height > scroll_height){
				var num = startHistoryPageIndex + i -2;
				num = (num > startHistoryPageIndex) ? num : startHistoryPageIndex;
				pageIndex = (num < picTree.length) ? num : picTree.length-1;
				return false;	
			}
		});	
		return pageIndex;
	}
	setInterval(function(){	
		var num = getPageindex()			 
		if( num > lastHistoryPageIndex ){
			lastHistoryPageIndex = num;
			addHistory(cid, getUserActionData(num));
			//pv(num);
		}
		return false;
	},3000);
	
	$(".btn-mark").click(function(){
		addMark(cid, getUserActionData(getPageindex()));
		danmeiwo_alert('做个记号','记号做好了！');
		return false;
	});
	
});