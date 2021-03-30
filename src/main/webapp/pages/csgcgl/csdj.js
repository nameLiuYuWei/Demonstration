$(function () {  
	init();
});

function init(){

	layui.use(['form','table','laydate','element'], function(){
		
		var laydate = layui.laydate;
		//初始化时间
	    var nowDate=getnowtime();
	    var prevDate=getnowtime(7);
		laydate.render({
	        elem: '#sjq',
	        btns: ['clear', 'now'],
	        trigger: 'click',
	        value:prevDate
	    });
	    laydate.render({
	        elem: '#sjz',
	        btns: ['clear', 'now'],
	        trigger: 'click',
	        value:nowDate
	    });
		
        var data = [{"CPPCH" : "12012301210708",  "NH" : "吴宝福",  "DK" : "下叶村B-R21-03地块", "SL" : "100", "CSSJ" : "2021-07-08", "CSR" : "陈坚平" },
                    {"CPPCH" : "12012002210908",  "NH" : "陈娅萍",  "DK" : "板苍村B-R21-01地块", "SL" : "300", "CSSJ" : "2021-09-08", "CSR" : "陈坚平" },
                    {"CPPCH" : "12011103211008",  "NH" : "吴志美",  "DK" : "下叶村B-R21-05地块", "SL" : "400", "CSSJ" : "2021-10-08", "CSR" : "陈坚平" },
                    {"CPPCH" : "12012202210508",  "NH" : "朱焕彩",  "DK" : "下叶村B-R21-07地块", "SL" : "600", "CSSJ" : "2021-05-08", "CSR" : "陈坚平" }]
        var table = layui.table;
	  	var element = layui.element;
	  	var ywbd= {	  
			    elem: '#ywbd',
			    cols: [[  
						   {field:'', width:60, title: '序号', type: 'numbers' , fixed: 'left'}
					      ,{field:'CPPCH', width: 200, title: '产品批次号', sort: true}
					      ,{field:'NH', width: 150, title: '农户 ', sort: true}
					      ,{field:'DK', width: 180, title: '地块', sort: true}
					      ,{field:'SL', width: 180, title: '数量（单位：公斤）', sort: true}
					      ,{field:'CSSJ', width: 150, title: '采收时间 ', sort: true}
					      ,{field:'CSR', width: 150, title: '采收人 ', sort: true}
					]],
			    data: data,
			    even: true,
			    page: true 
		    }
    	table.render(ywbd);
		
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

function add(){
	layer.open({
	    type: 2,
	    title: '采收登记维护',
	    shadeClose: true,
	    shade: false,
	    maxmin: true, //开启最大化最小化按钮
	    area: ['50%', '90%'],
	    content: "csdj_add.html"
	});
}



