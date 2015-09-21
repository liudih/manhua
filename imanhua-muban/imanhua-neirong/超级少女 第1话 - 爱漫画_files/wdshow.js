var qTcms_fuwuqi_default = "1"
var qTcms_Window_href = "" + window.location.href;
function getPicSelectP() {
	var v = qTcms_S_m_murl;
	var s = "", s2 = "", b = "";
	var a = v.split("$qingtiandy$");
	var p = getReqq();
	for (var i = 0; i < a.length; i++) {
		if ((i + 1) == p) {
			b = " Selected"
		} else {
			b = ""
		}
		;
		s2 = "<option value='" + (i + 1) + "'" + b + ">第" + (i + 1)
				+ "页</option>";
		s += s2;
	}
	return s;
}
function $$$(objID) {
	return document.getElementById(objID);
};
function getReq(item) {
	if (location.search.indexOf("?") != -1) {
		var sValue = location.search.match(new RegExp("[\?\&]" + item
				+ "=([^\&]*)(\&?)", "i"));
		return sValue ? sValue[1] : sValue;
	} else {
		var a = qTcms_Window_href + "";
		if (a.indexOf("-") != -1) {
			var a1 = a.split("/");
			var a2 = a1[a1.length - 1].split(".");
			var a3 = a2[0].split("-");
			var a4 = a3[1];
			return a4
		} else {
			return ""
		}
	}
}
function getReqq() {
	var pi = getReq("p");
	if (pi == "" || pi == null)
		pi = 1;
	return parseInt(pi);
}
function getPicUrlP(v, pi) {
	if (pi == "" || pi == null)
		pi = 1;
	var a, b, bb;
	b = "";
	a = v.split("$qingtiandy$");
	qTcms_Pic_len = a.length;
	var server = getserver();
	var serverurl = WebimgServerURL[server];
	
	if (parseInt(pi) > qTcms_Pic_len)
		pi = 1;
	for (var i = 0; i < a.length; i++) {
		if (i == 0)
			bb = a[i];
		if (i == (pi - 1)) {
			b = serverurl + a[i];
			i = a.length + 1;
		}
	}
	if (b == "")
		b = bb;
	console.log(b);
	return b;
}
function f_qTcms_Pic_curUrl() {
	//alert(qTcms_S_m_murl);
	qTcms_Pic_curUrl = getPicUrlP(qTcms_S_m_murl, getReqq());
	a_f_qTcms_Pic_TotalPage();
	a_f_qTcms_Pic_backNextUrl_Href();
	if (qTcms_S_m_murl.indexOf("+http://") != -1) {
		document.getElementById("wdwailian").innerHTML = "<div style='padding-top:88px;'></div><span style='font-family:微软雅黑,宋体;font-size:16px;font-weight:bold;color:green;'>请点击下方链接开始观看本期漫画：</span><br><br><a href='"
				+ getPicUrlP(qTcms_S_m_murl, 1).replace('+http://', 'http://')
				+ "' target='_blank' style='font-family:微软雅黑,宋体;font-size:21px;font-weight:bold;color:#FF6600;text-decoration:underline;'>点击观看："
				+ qTcms_S_m_playm
				+ "</a><div style='padding-bottom:88px;'></div>"
	} else {
		
		document.getElementById("qTcms_pic").src = f_qTcms_Pic_curUrl_realpic(qTcms_Pic_curUrl)
			//alert(f_qTcms_Pic_curUrl_realpic(qTcms_Pic_curUrl));
		document.getElementById("qTcms_pic").onload = function() {
			Show_Pic_w(document.getElementById("qTcms_pic"))
		}
	}
}
function a_f_qTcms_Pic_TotalPage() {
	if (document.getElementById("qTcms_CurentPage2"))
		document.getElementById("qTcms_CurentPage2").innerHTML = getReqq();
	if (document.getElementById("qTcms_CurentPage1"))
		document.getElementById("qTcms_CurentPage1").innerHTML = getReqq();
	var a = qTcms_S_m_murl;
	var aa = a.split("$qingtiandy$");
	if (document.getElementById("qTcms_TotalPage1"))
		document.getElementById("qTcms_TotalPage1").innerHTML = aa.length;
	if (document.getElementById("qTcms_TotalPage2"))
		document.getElementById("qTcms_TotalPage2").innerHTML = aa.length;
}
function a_f_qTcms_Pic_backNextUrl_Href() {
	if (document.getElementById("qTcms_Pic_backChapUrl")) {
		document.getElementById("qTcms_Pic_backChapUrl").href = qTcms_PicArr[1][1];
		document.getElementById("qTcms_Pic_backChapUrl").innerHTML = qTcms_PicArr[1][0];
		if (qTcms_PicArr[1][1] == "/") {
			document.getElementById("qTcms_Pic_backChapUrl").href = "javascript:void(0)";
		}
	}
	if (document.getElementById("qTcms_Pic_NextChapUrl")) {
		document.getElementById("qTcms_Pic_NextChapUrl").href = qTcms_PicArr[0][1];
		document.getElementById("qTcms_Pic_NextChapUrl").innerHTML = qTcms_PicArr[0][0];
		if (qTcms_PicArr[0][1] == "/") {
			document.getElementById("qTcms_Pic_NextChapUrl").href = "javascript:void(0)";
		}
	}
}
function f_qTcms_Pic_curUrl_realpic(v) {
	var s = ""
	if (v.indexOf(base64_decode("bWFuaHVhanUuY29t")) != -1) {
		s = web_dir + "qTcms_Inc/qTcms.Pic.FangDao.asp?p=" + base64_encode(v);
	} else if (v.indexOf(base64_decode("YmVuZ291LmNvbQ==")) != -1)
		s = web_dir + "qTcms_Inc/qTcms.Pic.FangDao.asp?p=" + base64_encode(v);
	else
		s = v;
	return s
}
function f_qTcms_Pic_nextUrl() {
}
function f_qTcms_Pic_show_Pic_real() {
	var c_G_show_p_2 = (typeof (c_G_show_p_1) == "undefined") ? ""
			: c_G_show_p_1
	if (c_G_show_p_2 == "1")
		return "-"
	else
		return ""
}
function f_qTcms_Pic_nextUrl_Href() {
	if (getReqq() == "1")
		qTcms_Window_href = f_qTcms_Pic_show_Pic_real();
	if (parseInt(getReqq()) >= qTcms_Pic_len) {
		console.log(qTcms_Pic_nextArr);
		console.log(qTcms_S_m_id);
		if (qTcms_Pic_nextArr.length == 0) {
			$$$("box").style.display = "block";
			$$$("qTcms_select_i").style.display = "none";
			return false
		}
		alert("这是最后一页了，点击“确定”进入下一话！");
		window.location.href = qTcms_Pic_nextArr;
		return false
	}
	if (qTcms_Window_href.indexOf("-") != -1) {
		var s = qTcms_Cur;
		var a, b, c, d, e, d2, g;
		var p = getReqq();
		if (parseInt(p) >= qTcms_Pic_len)
			p = 0;
		if (s.indexOf("#") != -1) {
			a = s.split("#");
			b = a[0];
		} else {
			b = s;
		}
		if (b.indexOf("?") != -1) {
			c = b.split("?");
			d = c[1];
			d2 = c[0];
			d2_a = d2.split(".")
			d3_1 = d2_a[0]
			d3_2 = d2_a[1]
			d4 = d3_1.split("-")
			d4_1 = d4[0] + "-" + (p + 1) + "." + d3_2
			d2 = d4_1
			g = d2;
		} else {
			d = (p + 1);
			d2 = b;
			d2_a = d2.split(".")
			d3_1 = d2_a[0]
			d3_2 = d2_a[1]
			d4 = d3_1.split("-")
			d4_1 = d4[0] + "-" + (p + 1) + "." + d3_2
			d2 = d4_1
			g = d2;
		}
	} else {
		var s = qTcms_Cur;
		var a, b, c, d, e, d2, g;
		var p = getReqq();
		if (parseInt(p) >= qTcms_Pic_len)
			p = 0;
		if (s.indexOf("#") != -1) {
			a = s.split("#");
			b = a[0];
		} else {
			b = s;
		}
		if (b.indexOf("?") != -1) {
			c = b.split("?");
			d = c[1] + "&p=" + (p + 1);
			d2 = c[0];
			g = d2 + "?" + d + "";
		} else {
			d = "?p=" + (p + 1);
			d2 = b;
			g = d2 + "" + d + "";
		}
	}
	return g;
}
function a_f_qTcms_Pic_nextUrl_Href() {
	var f = f_qTcms_Pic_nextUrl_Href();
	if (f != 0) {
		window.location = f;
	}
}
function f_qTcms_Pic_backUrl() {
}
function f_qTcms_Pic_backUrl_Href() {
	if (getReqq() == "1")
		qTcms_Window_href = f_qTcms_Pic_show_Pic_real()
	if (qTcms_Window_href.indexOf("-") != -1) {
		var s = qTcms_Cur;
		var a, b, c, d, e, d2, g;
		var p = getReqq();
		if (parseInt(p) >= qTcms_Pic_len)
			p = qTcms_Pic_len;
		if (parseInt(p) <= 1)
			p = qTcms_Pic_len + 1;
		if (s.indexOf("#") != -1) {
			a = s.split("#");
			b = a[0];
		} else {
			b = s;
		}
		if (b.indexOf("?") != -1) {
			c = b.split("?");
			d = c[1];
			d2 = c[0];
			d2_a = d2.split(".")
			d3_1 = d2_a[0]
			d3_2 = d2_a[1]
			d4 = d3_1.split("-")
			d4_1 = d4[0] + "-" + (p - 1) + "." + d3_2
			d2 = d4_1
			g = d2;
		} else {
			d = (p + 1);
			d2 = b;
			d2_a = d2.split(".")
			d3_1 = d2_a[0]
			d3_2 = d2_a[1]
			d4 = d3_1.split("-")
			d4_1 = d4[0] + "-" + (p - 1) + "." + d3_2
			d2 = d4_1
			g = d2;
		}
	} else {
		var s = qTcms_Cur;
		var a, b, c, d, e, d2, g;
		var p = getReqq();
		if (p == "1") {
			qTcmsMhS.alerts(2);
			return false;
		}
		if (parseInt(p) >= qTcms_Pic_len)
			p = qTcms_Pic_len;
		if (parseInt(p) <= 1)
			p = qTcms_Pic_len + 1;
		if (s.indexOf("#") != -1) {
			a = s.split("#");
			b = a[0];
		} else {
			b = s;
		}
		if (b.indexOf("?") != -1) {
			c = b.split("?");
			d = c[1] + "&p=" + (p - 1);
			d2 = c[0];
			g = d2 + "?" + d + "";
		} else {
			d = "?p=" + (p - 1);
			d2 = b;
			g = d2 + d + "";
		}
	}
	return g;
}
function a_f_qTcms_Pic_backUrl_Href() {
	window.location = f_qTcms_Pic_backUrl_Href();
}
function f_qTcms_Pic_NomalUrl_Href() {
	var argv = f_qTcms_Pic_NomalUrl_Href.arguments;
	var argc = f_qTcms_Pic_NomalUrl_Href.arguments.length;
	var p = (argc > 0) ? argv[0] : getReqq();
	var s = qTcms_Cur;
	if (getReqq() == "1")
		qTcms_Window_href = f_qTcms_Pic_show_Pic_real()
	if (qTcms_Window_href.indexOf("-") != -1) {
		var a, b, c, d, e, d2, g;
		if (s.indexOf("#") != -1) {
			a = s.split("#");
			b = a[0];
		} else {
			b = s;
		}
		if (b.indexOf("?") != -1) {
			c = b.split("?");
			d = c[1];
			d2 = c[0];
			d2_a = d2.split(".")
			d3_1 = d2_a[0]
			d3_2 = d2_a[1]
			d4 = d3_1.split("-")
			d4_1 = d4[0] + "-" + (p) + "." + d3_2
			d2 = d4_1
			g = d2;
		} else {
			d = (p + 1);
			d2 = b;
			d2_a = d2.split(".")
			d3_1 = d2_a[0]
			d3_2 = d2_a[1]
			d4 = d3_1.split("-")
			d4_1 = d4[0] + "-" + (p) + "." + d3_2
			d2 = d4_1
			g = d2;
		}
	} else {
		var a, b, c, d, e, d2, g;
		if (s.indexOf("#") != -1) {
			a = s.split("#");
			b = a[0];
		} else {
			b = s;
		}
		if (b.indexOf("?") != -1) {
			c = b.split("?");
			d = c[1] + "&p=" + p;
			d2 = c[0];
			g = d2 + "?" + d + "";
		} else {
			d = "?p=" + p;
			d2 = b;
			g = d2 + d + "";
		}
	}
	return g;
}
function a_f_qTcms_Pic_selecturl_Href(o) {
	window.location = f_qTcms_Pic_NomalUrl_Href(o.value);
}
function a_f_qTcms_picID() {
	document.getElementById("qTcms_picID").innerHTML = "第" + getReqq() + "画";
}
function base64_decode(data) {
	var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, dec = "", tmp_arr = [];
	if (!data) {
		return data;
	}
	data += '';
	do {
		h1 = b64.indexOf(data.charAt(i++));
		h2 = b64.indexOf(data.charAt(i++));
		h3 = b64.indexOf(data.charAt(i++));
		h4 = b64.indexOf(data.charAt(i++));
		bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
		o1 = bits >> 16 & 0xff;
		o2 = bits >> 8 & 0xff;
		o3 = bits & 0xff;
		if (h3 == 64) {
			tmp_arr[ac++] = String.fromCharCode(o1);
		} else if (h4 == 64) {
			tmp_arr[ac++] = String.fromCharCode(o1, o2);
		} else {
			tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
		}
	} while (i < data.length);
	dec = tmp_arr.join('');
	dec = this.utf8_decode(dec);
	return dec;
}
function base64_encode(data) {
	var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = "", tmp_arr = [];
	if (!data) {
		return data;
	}
	data = this.utf8_encode(data + '');
	do {
		o1 = data.charCodeAt(i++);
		o2 = data.charCodeAt(i++);
		o3 = data.charCodeAt(i++);
		bits = o1 << 16 | o2 << 8 | o3;
		h1 = bits >> 18 & 0x3f;
		h2 = bits >> 12 & 0x3f;
		h3 = bits >> 6 & 0x3f;
		h4 = bits & 0x3f;
		tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3)
				+ b64.charAt(h4);
	} while (i < data.length);
	enc = tmp_arr.join('');
	switch (data.length % 3) {
	case 1:
		enc = enc.slice(0, -2) + '==';
		break;
	case 2:
		enc = enc.slice(0, -1) + '=';
		break;
	}
	return enc;
}
function utf8_decode(str_data) {
	var tmp_arr = [], i = 0, ac = 0, c1 = 0, c2 = 0, c3 = 0;
	str_data += '';
	while (i < str_data.length) {
		c1 = str_data.charCodeAt(i);
		if (c1 < 128) {
			tmp_arr[ac++] = String.fromCharCode(c1);
			i++;
		} else if ((c1 > 191) && (c1 < 224)) {
			c2 = str_data.charCodeAt(i + 1);
			tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
			i += 2;
		} else {
			c2 = str_data.charCodeAt(i + 1);
			c3 = str_data.charCodeAt(i + 2);
			tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12)
					| ((c2 & 63) << 6) | (c3 & 63));
			i += 3;
		}
	}
	return tmp_arr.join('');
}
function utf8_encode(argString) {
	var string = (argString + '');
	var utftext = "";
	var start, end;
	var stringl = 0;
	start = end = 0;
	stringl = string.length;
	for (var n = 0; n < stringl; n++) {
		var c1 = string.charCodeAt(n);
		var enc = null;
		if (c1 < 128) {
			end++;
		} else if (c1 > 127 && c1 < 2048) {
			enc = String.fromCharCode((c1 >> 6) | 192)
					+ String.fromCharCode((c1 & 63) | 128);
		} else {
			enc = String.fromCharCode((c1 >> 12) | 224)
					+ String.fromCharCode(((c1 >> 6) & 63) | 128)
					+ String.fromCharCode((c1 & 63) | 128);
		}
		if (enc !== null) {
			if (end > start) {
				utftext += string.substring(start, end);
			}
			utftext += enc;
			start = end = n + 1;
		}
	}
	if (end > start) {
		utftext += string.substring(start, string.length);
	}
	return utftext;
}
function Show_Pic_w(o) {
	
	displayPager(getReqq());
	if (screen.width > 1024 && screen.width <= 1280) {
		if (o.width > 1200)
			o.width = 1200;
	} else if (screen.width <= 1024) {
		if (o.width > 960)
			o.width = 960;
	}
	if (o.width == 740 && o.height == 368) {
		a_f_qTcms_Pic_nextUrl_Href();
		return false
	}
	if (document.getElementById("mypic_k0") && qTcms.Browser.ie) {
		var opicurl = getPicUrlP(qTcms_S_m_murl, getReqq());
		document.getElementById("mypic_k0").style.display = "block";
		var c = qTcms.getPosXY(o, "")
		document.getElementById("mypic_k0").style.top = c[1] - 25;
		document.getElementById("mypic_k0").style.left = c[0];
		document.getElementById("mypic_k0").style.width = o.width;
		document.getElementById("mypic_k1").innerHTML = c_G_Pic_local_wenzi_shuiyin;
	}
	if (document.getElementById("qTcms_picID")) {
		var pi = getReqq()
		var pNext = getPicUrlP(qTcms_S_m_murl, pi + 1);
		var o2 = document.createElement("img");
		o2.src = f_qTcms_Pic_curUrl_realpic(pNext);
	
		o2.style.display = "none";
		document.getElementById("qTcms_picID").appendChild(o2);
	}
}
var qTcms_S_Cookies_server = qTcms.Cookie.get("Pserver");
var qTcms_S_m_murl = "", qTcms_S_m_murl_e1 = "";
if (qTcms_S_Cookies_server == null || qTcms_S_Cookies_server == "")
	qTcms_S_Cookies_server = qTcms_fuwuqi_default;
if (qTcms_S_Cookies_server == null || qTcms_S_Cookies_server == ""
		|| qTcms_S_Cookies_server == "1") {
	qTcms_S_m_murl = base64_decode(qTcms_S_m_murl_e);
} else if (qTcms_S_Cookies_server == "2") {
	if (qTcms_S_m_murl_e2 != "") {
		qTcms_S_m_murl = base64_decode(qTcms_S_m_murl_e2);
	} else {
		qTcms_S_m_murl = base64_decode(qTcms_S_m_murl_e);
		qTcms_S_Cookies_server = "1";
	}
} else if (qTcms_S_Cookies_server == "3") {
	if (qTcms_S_m_murl_e3 != "") {
		qTcms_S_m_murl = base64_decode(qTcms_S_m_murl_e3);
	} else {
		qTcms_S_m_murl = base64_decode(qTcms_S_m_murl_e);
		qTcms_S_Cookies_server = "1"
	}
} else {
	qTcms_S_m_murl = base64_decode(qTcms_S_m_murl_e);
	qTcms_S_Cookies_server = "1";
}
alert(1);
alert(qTcms_S_m_murl);
console.log(qTcms_S_m_murl);
qTcms_S_m_murl_e1 = qTcms_S_m_murl;
function GetServera() {
	if (qTcms_S_m_murl_e2 == "" && qTcms_S_m_murl_e3 == "") {
		return false;
	}
	var a, s = "";
	var c = qTcms_S_Cookies_server;
	for (var i = 1; i <= 3; i++) {
		if (i == 1)
			a = "qTcms_S_m_murl_e";
		else
			a = "qTcms_S_m_murl_e" + i;
		var astr = eval(a);
		if (astr != "") {
			s += '<a href="javascript:void(0)" onclick="SetServea(' + i
					+ ')" id="serverid' + i + '">' + c_G_Fuwuqi_a[i - 1]
					+ '</a>';
		}
	}
	document.write(s);
	if ($$$("serverid" + qTcms_fuwuqi_default))
		$$$("serverid" + qTcms_fuwuqi_default).className = "on"
	if (eval("qTcms_S_m_murl_e" + c) != "" && $$$("serverid" + c)) {
		if ($$$("serverid" + qTcms_fuwuqi_default))
			$$$("serverid" + qTcms_fuwuqi_default).className = ""
		$$$("serverid" + c).className = "on"
	}
}
function SetServea(a) {
	qTcms.Cookie.set("Pserver", a);
	window.location.reload();
}
qTcms.history_in()
function ResumeError() {
	return true;
}
window.onerror = ResumeError;
document.onkeydown = function(evt) {
	evt = evt ? evt : (window.event ? window.event : null);
	if (evt.keyCode == 39) {
		a_f_qTcms_Pic_nextUrl_Href();
	}
	if (evt.keyCode == 37) {
		a_f_qTcms_Pic_backUrl_Href();
	}
	if (evt.keyCode == 67) {
		openOrCloseLights();
	}
	if (evt.keyCode == 86) {
		window.scrollTo(0, 0);
	}
}
var qTcmsMhS = {
	s : "此章节已经浏览完毕，是否点击浏览下一章节? &nbsp;&nbsp;<a href='" + qTcms_Pic_nextArr
			+ "'>继续浏览</a> <span id='P_qx' style='cursor:pointer'>取消</span>",
	ss : "没有上一页了",
	g : function() {
		return document.documentElement.scrollTop || window.pageYOffset
				|| document.body.scrollTop;
	},
	alerts : function(pp) {
		if (pp == "1") {
			str = qTcmsMhS.s;
		} else if (pp == "2") {
			str = qTcmsMhS.ss;
		}
		if (document.getElementById("bgDiv")) {
			document.body.removeChild(document.getElementById("bgDiv"));
			document.getElementById("msgDiv").removeChild(
					document.getElementById("msgTitle"));
			document.body.removeChild(document.getElementById("msgDiv"));
		}
		var msgw, msgh, bordercolor;
		msgw = 400;
		msgh = 100;
		bordercolor = "#336699";
		titlecolor = "#99CCFF";
		var sWidth, sHeight;
		sWidth = document.body.offsetWidth;
		sHeight = window.screen.height;
		var bgObj = document.createElement("div");
		bgObj.setAttribute('id', 'bgDiv');
		bgObj.style.position = "absolute";
		bgObj.style.top = "0";
		bgObj.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
		bgObj.style.opacity = "0.0";
		bgObj.style.left = "0";
		bgObj.style.width = sWidth + "px";
		bgObj.style.height = sHeight + "px";
		document.body.appendChild(bgObj);
		var msgObj = document.createElement("div")
		msgObj.setAttribute("id", "msgDiv");
		msgObj.setAttribute("align", "center");
		msgObj.style.position = "absolute";
		msgObj.style.background = "white";
		msgObj.style.font = "12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
		msgObj.style.border = "1px solid " + bordercolor;
		msgObj.style.width = msgw + "px";
		msgObj.style.height = msgh + "px";
		msgObj.style.top = (qTcmsMhS.g() + (sHeight - msgh) / 2) - 50 + "px";
		msgObj.style.left = (sWidth - msgw) / 2 + "px";
		var title = document.createElement("h4");
		title.setAttribute("id", "msgTitle");
		title.setAttribute("align", "right");
		title.style.margin = "0";
		title.style.padding = "3px";
		title.style.background = bordercolor;
		title.style.filter = "progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
		title.style.opacity = "0.75";
		title.style.border = "1px solid " + bordercolor;
		title.style.height = "18px";
		title.style.font = "12px Verdana, Geneva, Arial, Helvetica, sans-serif";
		title.style.color = "white";
		title.style.cursor = "pointer";
		title.innerHTML = "关闭";
		title.onclick = function() {
			document.body.removeChild(bgObj);
			document.getElementById("msgDiv").removeChild(title);
			document.body.removeChild(msgObj);
		}
		document.body.appendChild(msgObj);
		document.getElementById("msgDiv").appendChild(title);
		var txt = document.createElement("p");
		txt.style.margin = "1em 0"
		txt.setAttribute("id", "msgTxt");
		txt.innerHTML = str;
		document.getElementById("msgDiv").appendChild(txt);
		document.getElementById("P_qx").onclick = function() {
			document.body.removeChild(bgObj);
			document.getElementById("msgDiv").removeChild(title);
			document.body.removeChild(msgObj);
		}
		bgObj.onclick = function() {
			document.body.removeChild(bgObj);
			document.getElementById("msgDiv").removeChild(title);
			document.body.removeChild(msgObj);
		}
	}
}
function closex() {
	$$$("box").style.display = "none";
	$$$("qTcms_select_i").style.display = "";
}
function setsookies(cookieName, cookieValue) {
	var today = new Date();
	var expire = new Date();
	expire.setTime(today.getTime() + 3600000 * 356 * 24);
	document.cookie = cookieName + '=' + escape(cookieValue) + ';expires='
			+ expire.toGMTString() + "; path=/;";
}
function readcookies(cookieName) {
	var theCookie = '' + document.cookie;
	var ind = theCookie.indexOf(cookieName);
	if (ind == -1 || cookieName == '')
		return '';
	var ind1 = theCookie.indexOf(';', ind);
	if (ind1 == -1)
		ind1 = theCookie.length;
	return unescape(theCookie.substring(ind + cookieName.length + 1, ind1))
			.replace(";", "");
}
function setsookie(cookieName, cookieValue) {
	var today = new Date();
	var expire = new Date();
	expire.setTime(today.getTime() + 3600 * 1000 * 24 * 30 * 6);
	document.cookie = cookieName + '=' + escape(cookieValue) + ";expires="
			+ expire.toGMTString() + ";path=/";
}
function getserver() {
	var imgserver = readcookies("iserver");
	if (imgserver == "") {
		var j = Math.floor(0);
		imgserver = j;
		setsookie("iserver", j);
	} else {
		imgserver = parseInt(imgserver);
		if (imgserver > WebimgServer.length) {
			var j = Math.floor(0);
			imgserver = j;
			setsookie("iserver", j);
		}
	}
	if (imgserver == 2) {
		var j = Math.floor(0);
		imgserver = j;
		setsookie("iserver", j);
	}
	return imgserver;
}
function imgError(obj) {
	var server = getserver();
	var cstr = "serverStr" + qTcms_S_p_id;
	var serStr = readcookies(cstr);
	if (serStr.length == 0) {
		setsookie(cstr, server + ',');
		serStr = readcookies(cstr);
	}
	var loopFg = true;
	var strlen = WebimgServer.length;
	for (var ii = 0; ii < strlen; ii++) {
		if (serStr.indexOf(ii + ',') == -1) {
			setsookie("iserver", ii);
			setsookie(cstr, readcookies(cstr) + ii + ',');
			f_qTcms_Pic_curUrl();
			loopFg = false;
			break;
		}
	}
	if (loopFg) {
		obj.src = '/js/nopic.jpg';
	}
}