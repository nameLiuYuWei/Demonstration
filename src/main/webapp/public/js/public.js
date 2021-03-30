$(function() { 
	$.ajaxSetup({
	        beforeSend: function(request) {
	            //在请求前给修改url（增加一个时间戳参数）
	        	var token = getCookie("zkxxtoken");
	        	//alert("token:"+token);
	        	request.setRequestHeader("token", token);
	        },
	      });
});

function getCookie(name){
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split("; ");//分割
    //遍历匹配
    for ( var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name){
            return arr[1];
        }
    }
    return "";
}
