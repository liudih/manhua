/**
 * @author Tuyo
 */


function BackToTop() {
	// 按钮
	if(/shtml/.test(window.location.href)){
		var btnHtml = '<div id="backtotop"><a class="backtotop" href="#" ><i></i></a><a class="btn-drop-down" href="javascript:;"><i></i></a></div>';
	}else {
		var btnHtml = '<div id="backtotop"><a class="backtotop" href="#"><i></i></a><a class="btn-mark" href="javascript:;"><i></i></a><a class="btn-next-page" href="javascript:;"><i></i></a></div>';
	}
	$("body").append(btnHtml);

	var btn = $("#backtotop");
	btn.click(function(){$(this).hide()});

	// ie6
	if ( !window.XMLHttpRequest ) {
		btn.css({position: "absolute", bottom: "auto"});
	};

	// 显示隐藏
	function show() {
		btn.fadeIn();
	}
	function hide() {
		btn.fadeOut();
	}

	var aHeight = 800;
	$(window).scroll(function(){
		if ( getTop() > 800 ) {
			if ( btn.css("display") == "none" ) {
				btn.fadeIn();
			}

			// ie6
			if ( !window.XMLHttpRequest ) {
				setTop();
			}
		} else {
			btn.fadeOut();
		}
	});

	// 设置获取所需要高度
	function setTop() {
		var t = getTop();
		btn.css({top: t});
	}
	function getTop() {
		var t = document.documentElement.scrollTop || document.body.scrollTop,
			h = document.documentElement.clientHeight || document.body.clientHeight;

		return t + h - 190;
	}
}

$(document).ready(function(){
	BackToTop();
});
