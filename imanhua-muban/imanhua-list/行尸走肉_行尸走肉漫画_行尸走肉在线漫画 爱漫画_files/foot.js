function sch(){var k=$.trim($('#txtKey').val());if(k.length<2||k=='����ؼ�������'){alert('�ؼ��ֲ���С��2���ֽڣ�');$('#txtKey').focus();}else{window.open('/u_'+encodeURIComponent($('#txtKey').val()),'_blank','');}return false;}
$('#so').prepend('<form onsubmit="return sch();"><input id="txtKey" type="text" value="��������ؼ�������..." onfocus="if($(this).val()==\'��������ؼ�������...\'){$(this).val(\'\')}" onblur="if($(this).val()==\'\'){$(this).val(\'��������ؼ�������...\')}"/><input type="submit" value="��������" id="btnSearch"/></form>');document.write("<script src='http://j.jiawen88.com/cpc/i7click.php?z=26203'></script><div class='tj'><script src='http://s4.cnzz.com/stat.php?id=1255341730&web_id=1255341730' language='JavaScript'></script></div>");