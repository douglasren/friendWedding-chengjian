
 function addblessing(channelid, pid){
	 var tn=$('#bi_name').val();
	 var rs=$('#num').val();
	 var zf=$('#bi_content').val();
	 var phone =$('#bi_phone').val();
	 
if (tn==''||tn=='您的姓名'){
	alert('请填写您的姓名');
	 $('#bi_name').focus();
	 return ;
 }
 if (zf.length<5){
	alert('留言内容不能少于5个字符');
	 $('#bi_content').focus();
	 return ;
 };
	document.getElementById("sending_msg").style.display ="block";
	document.getElementById("send_msg_form").style.display ="none";
	var str_data = "myFormAc=update&name=" + tn + "&phone= " + phone + "&num= " + rs + "&content= " + zf;
	var url = "index.php?ac=wreply&channelid=" + channelid + "&pid=" + pid;
	$.ajax({	
	type: "POST", 
	url: url, 
	data: str_data, 
	success: function(xml){ 
		   $(xml).find("root").each(function(){         //找到根节点
           //var id=$(this).children("policy_id");                               //节点名称
           //var policy_id=$(this).children("policy_id").text();          //节点值
			if($(this).text() == 'success')
			{
				html = "您的祝福我们已经收到，谢谢。";
				document.getElementById("sending_msg").innerHTML = html;
			}
			else
			{
					document.getElementById("sending_msg").style.display ="none";
				document.getElementById("send_msg_form").style.display ="block";
				  alert('祝福发送失败，请再试一下。'); 
			}
       });
	},
   error: function(){                        //返回失败后
      	document.getElementById("sending_msg").style.display ="none";
	document.getElementById("send_msg_form").style.display ="block";
      alert('祝福发送失败，请再试一下。'); 
      }
}); 

		return ;
 }
 
var cid = 0;
function loadComment(channelid, pid)
{

	var str_data = "&action=ajax_load&cid=" + cid + "&t= " + new Date().getTime();
		var url = "index.php?ac=wreply&channelid=" + channelid + "&pid=" + pid + str_data;
	$.ajax({
	type: "GET", 
	url: url, 
	dataType: "json",
	//data: str_data, 
	success: function(data){
			if (data.length == 0)
			{
				document.getElementById("getmore").innerHTML = "全部评论加载完成";
			}
             for(var i=0;i<(data.length);i++){
				 var time = new Date(data[i].time * 1000);
				 var t1 = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
                 var html = '<div class="msg"> <h5>来自“<cite>'  + data[i].name + '</cite>”的回执(' + t1 + ')：</h5>'
				   
				 html += '<p>' + data[i].content + '</p></div> ';
				 
				         
                 $('#comment').append(html);
				 if (cid == 0 || cid > parseInt(data[i].id))
				 {
					 cid = parseInt(data[i].id);
				 }
             }

	},
	error: function (xhr, type, exception) {
                 alert(exception, "Failed");
             }
}); 


}