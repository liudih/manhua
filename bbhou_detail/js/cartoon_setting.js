$(function($) {
		   
	function init(){
		readModeInit();//阅读模式初始化
		bgColorInit();//背景颜色初始化
		tipsInit();//tips初始化
		lightInit();//关开灯初始化
		hotKeyInit();//快捷键初始化	
	}
	init();
		
	//翻页事件处理
	function pageEvent(event){
		var keyCode = event.keyCode;
		var pre_page_code = getSetting('pre_key') > 0 ? getSetting('pre_key') : 81;
		var next_page_code = getSetting('next_key') > 0 ? getSetting('next_key') : 65;
		//左右箭头翻页永远有效
		if(keyCode == pre_page_code || keyCode == 37){
			prePage();
			return false;
		}
		if(keyCode == next_page_code || keyCode == 39){
			nextPage();
			return false;
		}
	};
	
	//阅读模式	
	function readModeInit(){
//		if( 1 == getSetting('page_read_mode') ){
//			if( !isPageRead() ){
//				window.location.href = window.location.href.replace(/html/, 'shtml');
//			}
//		} else {
//			if( isPageRead() ){
//				window.location.href = window.location.href.replace(/shtml/, 'html');
//			}	
//		}
		if( isPageRead() ){
			$('#btn-read').parent().attr('class', 'read-1');
			$('#btn-read').html('下拉阅读');
		}
	}
	
	$('#btn-read').click(function(){								  
		var url = window.location.href.replace(/html/, 'shtml');
		if( isPageRead() ){
			url = window.location.href.replace(/shtml/, 'html');
			setSetting('page_read_mode',null);	
		} else {
			setSetting('page_read_mode', 1);
			
		}
		$(this).attr('href', url); 
	});
	
	$('.btn-next-page').live('click', function(){
		var url = window.location.href.replace(/html/, 'shtml');
		setSetting('page_read_mode', 1);
		$(this).attr('href', url); 				  
	});
	
	$('.btn-drop-down').live('click', function(){
		var url = window.location.href.replace(/shtml/, 'html');
		setSetting('page_read_mode',null);	
		$(this).attr('href', url); 				  
	});
	//阅读模式end


	//观看设置
	$("#btn-setting").click(function(){
		if( 1 == getSetting('image_auto_size_off') ) {
			$("#setting_image_auto_size_off").attr('checked', false);	
		}
		//快捷键
		$("#pre_key").val( getKeyString( getSetting('pre_key')) );
		$("#next_key").val( getKeyString( getSetting('next_key')) );
		$(document).unbind("keydown", pageEvent);
		
		//每页显示图片
		var images_num = ( null == getSetting('images_num') ) ? 1 : getSetting('images_num');
		$("#setting_images_num input[value='" + images_num+ "']").attr('checked', 'checked');
		
		KISSDW.popupBox("none", {boxSelector: "#win-setting"});
		$(".actions-box .btn").click();//关闭右下角设置框
	});
	
	//背景颜色初始化
	function bgColorInit(){
		if( null != getSetting("bg_color") ){
			switch( getSetting("bg_color") ){
				case 'body-white': bg_color = 'body-white'; break;
				case 'body-black': bg_color = 'body-black'; break;
				case 'body-gray': bg_color = 'body-gray'; break;
				case 'body-orange': bg_color = 'body-orange'; break;
				case 'body-blue': bg_color = 'body-blue'; break;
				case 'body-green': bg_color = 'body-green'; break;
				case 'body-pink': bg_color = 'body-pink'; break;
				default: bg_color = 'body-white'; break;	
			}
			$("body").attr('class', bg_color );
		}
	}
	
	$("#setting_bg_color a").click(function(){
		var bg_color = $(this).attr('class').replace('bg', 'body');
		setSetting("bg_color", bg_color);
		$("body").attr('class', bg_color );
	});
	
	//大图自动缩小缩小设置
	$("#setting_image_auto_size_off").change(function(){
		if( 'checked' == $(this).attr('checked') ){
			setSetting('image_auto_size_off', null);
		} else {
			setSetting('image_auto_size_off', 1);
		}											  
	});
	
	//快捷键初始化	
	function hotKeyInit(){
		if( null == getSetting('pre_key') ){ 
			setSetting('pre_key', 81);
		}
		if( null == getSetting('next_key') ){ 
			setSetting('next_key', 65);
		}
		if( isPageRead() ){
			$(document).bind("keydown", pageEvent);	
		}
	}
		
	$("#pre_key,#next_key").keydown(function(event){
		var keyCode = event.keyCode;
		var keyString = getKeyString(keyCode);
		$(this).val(keyString);
		return false;
	});
	
	$("#pre_key,#next_key").keyup(function(event){	
		//错误提示
		var error = function( msg ){
			$("#win-setting-msg").html( msg );
			$("#win-setting-msg").show();
			$("#pre_key").val( getKeyString( getSetting('pre_key')) );
			$("#next_key").val( getKeyString( getSetting('next_key')) );	
		};
		
		$("#win-setting-msg").hide();//清空错误信息
		$("#win-setting-msg").html('');
		
		if( $("#pre_key").val() == "" || $("#next_key").val() == ""){
			error('快捷键不能为空！');
			return false;
		}
		if( $("#pre_key").val() == $("#next_key").val() ){
			error('快捷键不能相同！');
			return false;
		}
		setSetting($(this).attr('id'), event.keyCode);
		return false;
	});
	
	//每页显示图片
	$("#setting_images_num input[name='images_num']").change(function(){
		setSetting('images_num', $(this).val());				
	});
	
	//提交设置
	$("#setting_submit").click(function(){
		/*$.post( '/post/setting',
		   function(json){
			   $("#setting_cancel").click();
				if(json.status == 1){
					$(document).bind("keydown", pageEvent);
					danmeiwo_alert('观看设置', "设置成功！", function(){ window.location.reload(); } );	
				}else{
					danmeiwo_alert('观看设置', '设置失败，请稍后再试！');
				}   
		   },
		   'json'
	  	);*/
		$("#setting_cancel").click();
		$(document).bind("keydown", pageEvent);
		danmeiwo_alert('观看设置', "设置成功！", function(){ window.location.reload(); } );
	});
	//观看设置end
	
	
	//开灯关灯
	function lightInit(){
		if( null != getSetting('light_bg_color') ){
			$("body").attr('class', 'body-black' );
			$("#btn-light").parent().attr('class', 'light-2');
			$("#btn-light").html('开灯');
		}	
	}
	
	$("#btn-light").click(function(){
		if( $(this).parent().attr('class') =='light-1' ){ //关灯
			//关灯之前的背景颜色
			setSetting('light_bg_color', $("body").attr('class') );			
			$("body").attr('class', 'body-black' );
			$(this).parent().attr('class', 'light-2');
			$(this).html('开灯');			
		} else { //开灯
			var bg_color = (null != getSetting('bg_color')) ? getSetting('bg_color') : getSetting('light_bg_color');
			bg_color = (null != bg_color) ? bg_color : 'body-gray';
			setSetting('light_bg_color', null);
			
			$("body").attr('class', bg_color );
			$(this).parent().attr('class', 'light-1');
			$(this).html('关灯');
			setSetting('light_on', null)
		}
		
		$(this).blur();
		return false;
	});
	
	//报错功能
	$("#btn-find").click(function(){
		//$("#bug_title").html( document.title );
		$(document).unbind("keydown", pageEvent);
		KISSDW.popupBox("none", {boxSelector: "#win-find"});
		$(".actions-box .btn").click();//关闭右下角设置框
	});

	//设置服图片务器
	$("#server_submit").click(function(){
		serverid = $("input[name='serverid']:checked").val();
		if(serverid==0){
			$.cookie('svrset',0,{'path': '/'});
		}else if(serverid==1){
			$.cookie('svrset',1,{'path': '/'});
			$.cookie("servername",1,{'path': '/'});
		}else if(serverid==2){
			$.cookie('svrset',1,{'path': '/'});
			$.cookie("servername",2,{'path': '/'});
		}else if(serverid==3){
			$.cookie('svrset',1,{'path': '/'});
			$.cookie("servername",3,{'path': '/'});
		}else if(serverid==4){
			$.cookie('svrset',1,{'path': '/'});
			$.cookie("servername",9,{'path': '/'});
		}else if(serverid==5){
			$.cookie('svrset',1,{'path': '/'});
			$.cookie("servername",5,{'path': '/'});
		}
		danmeiwo_alert('图片服务器设置', "设置成功！", function(){ window.location.reload(); } );
	});
	
	//提交报错
	$("#bug_submit").click(function(){
		var title = document.title;						   
		var url = window.location.href.replace(/#.*$/, '');
		var type = '';
		$("#bug_type input:checked").each(function(){
			type += $(this).val()+'，';					 
		})
		var description = $('#bug_description').val();
		//获取浏览器类型及版本
		function getBrowser(){
			var userAgent = window.navigator.userAgent.toLowerCase();
			if ( /(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test( userAgent ) ){
				browser = RegExp.$1 + '-' + RegExp.$2
			} else if ( /version\D+(\d[\d.]*).*safari/.test( userAgent ) ){ // safari
				browser =  'safari' + '-' + RegExp.$2
			} else {
				browser = 'unknown';	
			}
			return browser;
		}
		var browser = getBrowser(); 

		$.post('/post/bug',
			   {'title':title, 'url': url, 'type':type, 'description':description, 'browser':browser},
			   function(json){	
			   		$("#bug_cancel").click();
					if(json.status == 1){
						$(document).bind("keydown", pageEvent);
						danmeiwo_alert('我发现了', "提交成功！");
					}else{
						danmeiwo_alert('我发现了', '提交失败，请稍后再试！');
					}   
			   },
			   'json'
		  );
	});
	//报错功能end
	
	
	//分享功能
	$("#btn-share").click(function(){
		$("#chapter_url") .val( window.location.href.replace(/\.html.*$/, '.html') )
		var open = window['open']
		KISSDW.popupBox("none", {boxSelector: "#win-share"});
		window['open'] = open;//修正系统的window.open()方法
		$(".actions-box .btn").click();//关闭右下角设置框
	});
		
	function copyURL(url){
			$("#win-share-close").click();//关闭弹出层
			if(window.clipboardData){
				if( window.clipboardData.setData("Text",url) ){ danmeiwo_alert('一键分享', "复制成功！");}
			}else{prompt("按Ctrl+C复制当前网址", url);}
	};
		
	$("#copy_chapter_url").click(function(){ copyURL($("#chapter_url").val()); });
	$("#copy_cartoon_url").click(function(){ copyURL($("#cartoon_url").val()); });
	//分享功能end


	//tips
	//tips初始化
	function tipsInit(){
		//下拉模式去掉顶部提示
		if( !isPageRead() ){
			$("#tips_1").parent().hide();
		}
		//顶部提示
		if( 1 == getSetting("tips_1") ){
			$("#tips_1").parent().hide();
		}		
		//右下角提示
		if( 1 == getSetting("tips_2") ){
			$("#tips_2").click();
		}
	}
	
	//顶部提示
	$("#tips_1").click(function(){
		setSetting("tips_1",1);						
		$(this).parent().hide();
		return false;
	});

	//右下角提示
	$("#tips_2").click(function(){
		setSetting("tips_2",1);
		return false;
	});
	
	//最后一页的tips的“不在提示”
	$("#tips_page").click(function(){
		setSetting("tips_page",1);
		if( isPageRead() ){ 
			nextChapter(); 
		}
		return false;
	});
	//tips end
		
});