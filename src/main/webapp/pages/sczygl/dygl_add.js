$(function () {  
	init();
});

function init(){

	layui.use(['form','table','laydate','element'], function(){
		var laydate = layui.laydate;
		//初始化时间
	    var nowDate=getnowtime();
	    laydate.render({
	        elem: '#sj',
	        btns: ['clear', 'now'],
	        trigger: 'click',
	        value:nowDate
	    });
	});
}



function getnowtime(days) {
    if(days == null){
        days = 0;
    }
    var nowDate = new Date();
    var nowtime = new Date((+nowDate)-days*24*3600*1000);
    var year = nowtime.getFullYear();
    var month = nowtime.getMonth() + 1;
    var day = nowtime.getDate();
    return year + "-" + month + "-" + day
}



