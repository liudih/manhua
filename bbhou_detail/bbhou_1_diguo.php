<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<script src="[!--news.url--]skin/bbhou/js/uaredirect.js" type="text/javascript"></script>
<script type="text/javascript">
	uaredirect("http://m.bbhou.com/manhua/jjinjidejuren/33601.html");
</script>
<title>进击的巨人第0卷_比比猴1112</title>
<title>[!--pagetitle--] - 比比猴</title>
<meta name="Keywords" content="[!--pagekey--]" />
<meta name="description" content="[!--pagedes--]" />

<link rel="stylesheet" href="[!--news.url--]skin/bbhou/css/common.css">
<link rel="stylesheet" href="[!--news.url--]skin/bbhou/css/artical.css">
<script src="[!--news.url--]skin/bbhou/js/jquery-1.7.2.min.js"></script>
<script src="[!--news.url--]skin/bbhou/js/dww3.min.js"></script>
<script src="[!--news.url--]skin/bbhou/js/jquery.cookie.js"></script>
<script src="[!--news.url--]skin/bbhou/js/jquery.image.js"></script>
<script src="[!--news.url--]skin/bbhou/js/jquery.jstore-min.js"></script>
<script src="[!--news.url--]skin/bbhou/js/cartoon_common.js"></script>
<script src="[!--news.url--]skin/bbhou/js/cartoon_setting.js"></script>
<script src="[!--news.url--]skin/bbhou/js/user_action.js"></script>
<script src="[!--news.url--]skin/bbhou/js/totop.js"></script>
<script>
	var ishomepage = 2;
</script>
<style>
.pop-box {
	display: none
}
</style>
</head>
<body class="body-gray" >
	<!-- 头部{ -->
	<div id="header">
		<a class="logo" href="#">
		<img src="[!--news.url--]skin/bbhou/image/logo_small.jpg" title="比比猴" alt="比比猴"></a>
		<div class="mod-crumbs-s1">
		[!--newsnav--]
		<span class="arrow">&gt;</span><b id="chapter_title">[!--pagetitle--]</b>
		</div>
	</div>
	<div class="zstitle">
		<h1><?=$navinfor[title]?></h1>
	</div>
	
	<div class="blank20"></div>
	<div class="mark" style="margin: 0 auto; width: 400px; height: 50px;" id="bottom_chapter">
		[e:loop={'selfinfo',1,0,0,'id<'.$navinfor[id].'','id desc'}] 
			<a class="btn-prev" href="<?php echo $bqsr[titleurl];$pre='true';?>">上一话</a> 
		[/e:loop]
		<?php 
		if(empty($pre)){ 
		echo '<a class="btn-prev" href="javascript:;">上一话没有了</a>'; 
		} 
		?>
		<a class="btn-catalog" href="[!--class.url--]">返回目录</a>
		[e:loop={'selfinfo',1,0,0,'id>'.$navinfor[id].'','id asc'}] 
			<a class="btn-prev" href="<?php echo $bqsr[titleurl];$next='true';?>">下一话</a> 
		[/e:loop]
		<?php 
		if(empty($next)){ 
		echo '<a class="btn-prev" href="javascript:;">下一话没有了</a>';  
		} 
		?>
	</div>
	
	<div class="tips-box-1">
		<div class="tips" style="display: none;">
			<a class="btn-close" href="javascript:;" id="tips_1"></a>便捷提示：双击图片进入下一页；按住图片不放可拖动浏览；F11全屏
		</div>
	</div>
	<!-- }头部-->
	
	<div class="img-box J_shareContent" id="pic-list">
		<!-- <img src="0003.jpg" alt="" style="display: block;" width="1280" height="1018">
		<p class="img_info">(4/35)</p> -->
		
	</div>
	<div class="loading-box" id="loading" style="display: none;">
		<img src="[!--news.url--]skin/bbhou/image/icon_loading.gif" alt="">
	</div>
	<div class="mark" style="margin: 0 auto; width: 400px; height: 50px;" id="bottom_chapter">
		[e:loop={'selfinfo',1,0,0,'id<'.$navinfor[id].'','id desc'}] 
			<a class="btn-prev" href="<?php echo $bqsr[titleurl];$pre='true';?>">上一话</a> 
		[/e:loop]
		<?php 
		if(empty($pre)){ 
		echo '<a class="btn-prev" href="javascript:;">上一话没有了</a>'; 
		} 
		?>
		<a class="btn-catalog" href="[!--class.url--]">返回目录</a>
		[e:loop={'selfinfo',1,0,0,'id>'.$navinfor[id].'','id asc'}] 
			<a class="btn-prev" href="<?php echo $bqsr[titleurl];$next='true';?>">下一话</a> 
		[/e:loop]
		<?php 
		if(empty($next)){ 
		echo '<a class="btn-prev" href="javascript:;">下一话没有了</a>';  
		} 
		?>
	</div>
	<div class="blank20"></div>
	
	<div id="actions-tips" class="actions-tips">
		<i></i>点击展开新功能&nbsp;&nbsp;&nbsp;&nbsp;<a class="btn-close J_btnClose"
			href="javascript:;" id="tips_2">知道了</a>
	</div>
	<div id="actions-box" class="actions-box">
		<div class="btn">
			<i></i>
		</div>
		<ul>
			<li class="read-2"><a href="javascript:;" id="btn-read">翻页阅读</a></li>
			<li class="setting"><a href="javascript:;" id="btn-setting">设置</a></li>
			<li class="light-1"><a href="javascript:;" id="btn-light">关灯</a></li>
			<li class="report"><a href="javascript:;" id="btn-find">更换服务器</a></li>
			<li class="share"><a href="javascript:;" id="btn-share">分享</a></li>
		</ul>
	</div>
	<script>
		KISSDW.fixedPosition("#actions-tips", {
			bottom : 45
		});

		KISSDW.fixedPosition("#actions-box", {
			bottom : 20
		});
		$(".actions-box .btn").click(function() {
			$(this).parent().toggleClass("actions-box-open");
		});
	</script>
	<!-- 弹出框{ -->
	<!-- 观看设置{ -->
	<div id="win-setting" class="pop-box">
		<div class="box-hd">
			<h3 class="title">观看设置</h3>
			<a href="javascript:;" class="btn-close J_btnClose" title="关闭">关闭</a>
		</div>
		<div class="box-bd">
			<dl>
				<dt>背景颜色</dt>
				<dd id="setting_bg_color">
					<a class="bg-white" href="javascript:;"></a><a class="bg-black"
						href="javascript:;"></a><a class="bg-gray" href="javascript:;"></a><a
						class="bg-orange" href="javascript:;"></a><a class="bg-blue"
						href="javascript:;"></a><a class="bg-green" href="javascript:;"></a><a
						class="bg-pink" href="javascript:;"></a>
				</dd>
			</dl>
			<dl>
				<dt>大图自动缩小</dt>
				<dd>
					<input type="checkbox" id="setting_image_auto_size_off"
						checked="checked">
				</dd>
			</dl>
			<dl>
				<dt>快捷设置</dt>
				<dd>
					<input class="text" type="text" value="Q" id="pre_key"> 上一页
					&nbsp;&nbsp;<input class="text" type="text" value="A" id="next_key">
					下一页 <span id="win-setting-msg"
						style="color: red; padding-left: 10px; font-size: 12px; display: none"></span>
				</dd>
			</dl>
			<dl>
				<dt>每页显示图片</dt>
				<dd id="setting_images_num">
					<input type="radio" name="images_num" checked="checked" value="1">
					1 <input type="radio" name="images_num" value="2"> 2 <input
						type="radio" name="images_num" value="3"> 3 <input
						type="radio" name="images_num" value="4"> 4 <input
						type="radio" name="images_num" value="5"> 5 <input
						type="radio" name="images_num" value="10"> 10
				</dd>
			</dl>
			<div class="btn-box">
				<a href="javascript:;" id="setting_submit">确定</a><a
					href="javascript:;" class="J_btnClose" id="setting_cancel">取消</a>
			</div>
		</div>
	</div>
	<!-- }观看设置 -->
	<!-- 我发现了{ -->
	<div id="win-find" class="pop-box">
		<div class="box-hd">
			<h3 class="title">请选择图片服务器</h3>
			<a href="javascript:;" class="btn-close J_btnClose" title="关闭">关闭</a>
		</div>
		<div class="box-bd">
			<p id="bug_title"></p>
			<ul class="clearfix" id="bug_type">
				<li class="li-1"><input type="radio" name="serverid"
					id="server0" value="0"><label for="server0">自动选择可用服务器</label></li>
				<li class="li-2"><input type="radio" name="serverid"
					id="server1" value="1"><label for="server1">高速CDN服务器</label></li>
				<li class="li-3"><input type="radio" name="serverid"
					id="server2" value="2"><label for="server2">多线通用服务器</label></li>
				<li class="li-4"><input type="radio" name="serverid"
					id="server3" value="3"><label for="server3">中国电信服务器</label></li>
			</ul>
			<div class="btn-box">
				<a href="javascript:;" id="server_submit">确定</a><a
					href="javascript:;" class="J_btnClose" id="bug_cancel">取消</a>
			</div>
		</div>
	</div>
	<!-- }我发现了 -->
	<!-- 一键分享{ -->
	<div id="win-share" class="pop-box">
		<div class="box-hd">
			<h3 class="title">一键分享</h3>
			<a href="javascript:;" class="btn-close J_btnClose" title="关闭"
				id="win-share-close">关闭</a>
		</div>
		<div class="box-bd">
			<dl>
				<dt>一键分享到</dt>
				<dd></dd>
			</dl>
			<h5>复制转帖</h5>
			<div class="share-btn-box">
				<div>
					<input class="text" type="text" value="" id="chapter_url"><a
						href="javascript:;" id="copy_chapter_url">复制章节地址</a>
				</div>
				<div>
					<input class="text" type="text"
						value="http://www.bbhou.com/manhua/jjinjidejuren/"
						id="cartoon_url_1"><a href="javascript:;"
						id="copy_cartoon_url">复制漫画地址</a>
				</div>
			</div>
		</div>
	</div>
	<!-- }一键分享 -->
	<!-- 这是最后一页了{ -->
	<div id="win-page-last" class="pop-box">
		<div class="box-hd">
			<h3 class="title">这是最后一页了</h3>
			<a href="javascript:;" class="btn-close J_btnClose" title="关闭">关闭</a>
		</div>
		<div class="box-bd">
			<div class="big-link-box">
				<a class="big-link-next" href="javascript:nextChapter()">进入下一话</a>
			</div>
			<div class="link-box">
				<a href="http://www.bbhou.com/manhua/jjinjidejuren/">返回目录</a><a
					href="javascript:;" id="tips_page" class="J_btnClose">不再提示</a>
			</div>
		</div>
	</div>
	<!-- }这是最后一页了 -->
	<!-- 这是最后一话了{ -->
	<div id="win-hua-last" class="pop-box">
		<div class="box-hd">
			<h3 class="title">这是最后一话了</h3>
			<a href="javascript:;" class="btn-close J_btnClose" title="关闭">关闭</a>
		</div>
		<div class="box-bd">
			<div class="big-link-box">
				<a class="big-link-back"
					href="http://www.bbhou.com/manhua/jjinjidejuren/">返回目录</a>
			</div>
			<div class="like-list">
				<div class="like-list-hd">你可能会喜欢</div>
				<ul class="clearfix">
				</ul>
			</div>
			<div class="btn-box">
				<a href="http://www.bbhou.com/list/All/0/0/0/0/0/lastpost/">随便逛逛</a>
			</div>
		</div>
	</div>
	<!-- }这是最后一话了 -->
	<!-- 第一话或第一页{ -->
	<div id="win-first" class="pop-box">
		<div class="box-hd">
			<h3 class="title" id="win-first-title">这是最后一话了</h3>
			<a href="javascript:;" class="btn-close J_btnClose" title="关闭">关闭</a>
		</div>
		<div class="box-bd">
			<div class="big-link-box">
				<a class="big-link-back"
					href="http://www.bbhou.com/manhua/jjinjidejuren/">返回目录</a>
			</div>
		</div>
	</div>
	<!-- }第一话或第一页 -->
	<!-- 弹出框{ -->
	<div id="win-alert" class="pop-box comic_mind_pop">
		<div class="box-hd">
			<h3 class="title" id="win-alert-title">观看设置</h3>
			<a href="javascript:;" class="btn-close J_btnClose" title="关闭"
				id="win-alert-close">关闭</a>
		</div>
		<div class="box-bd">
			<div class="note_text_ctn">
				<p class="note_text note_fix_height" id="win-alert-msg">设置成功！</p>
			</div>
			<div class="btn-box">
				<a href="javascript:;" class="J_btnClose" id="win-alert-ok">确定</a>
			</div>
		</div>
	</div>
	<!-- }弹出框 -->

	<script type="text/javascript">
		<?php
		$morepic=$navinfor['morepic'];
		$rexp="\\r\\n";
		$rr=explode($rexp,$morepic);
		$count=count($rr);
		$piclist = "";
		for($i=0;$i<$count;$i++){
			$fr=explode("::::::",$rr[$i]);
			$smallpic=$fr[0];	//小图
			$piclist .= $smallpic.";";
		}
		?>
		var picc = "<?=$piclist?>";
		var picTree = picc.split(";");
		picTree.pop();
		var pic_base = "";
		console.log(picTree);
		var chapterTree = [ "", "33602" ];
		/*var picTree = [ "\/comic\/2\/713\/33601\/0000.jpg"];
		var pic_base = 'http://hicomic.uuudm.com';*/
		
		var chapter_base = '/manhua/jjinjidejuren/';
		//var currentPic = '1309419512291';
		var currentChapterid = '第0卷';
		var cid = '713';
		var chid = '33601';
	</script>
	<!-- 版权{ -->
	<div id="footer">
		<div class="layout">
			<div>
				Copyright © 2015 <a href="http://www.lolxz.com/">爱漫画</a> | Powered
				by www.bbhou.com 版权所有
			</div>
		</div>
	</div>
	<!-- }版权 -->
	
	<div id="danmeiwo_login"></div>
	<script type="text/javascript"
		src="[!--news.url--]skin/bbhou/js/cartoon_detail_scroll.js"></script>
	<div id="backtotop">
		<a class="backtotop"
			href="#"><i></i></a><a
			class="btn-mark" href="javascript:;"><i></i></a><a
			class="btn-next-page" href="javascript:;"><i></i></a>
	</div>
</body>
</html>