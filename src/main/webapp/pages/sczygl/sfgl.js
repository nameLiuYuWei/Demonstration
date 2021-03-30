$(function () {  
	init();
});

function init(){

	layui.use(['form','table','laydate','element'], function(){
		
		var data = [{"NHXM" : "吴宝福",  "DK" : "下叶村B-R21-03地块 ", "SJ" : "2021-02-01", "FL" : "磷肥", "PP" : "中化化肥", "GYS" : "荆门市高园磷肥有限公司", "YL" : "7000", "SCRY" : "倪治先", "LRRQ" : "2021-02-01"},
                    {"NHXM" : "陈娅萍",  "DK" : "板苍村B-R21-01地块", "SJ" : "2021-02-10", "FL" : "磷肥", "PP" : "中化化肥", "GYS" : "荆门市高园磷肥有限公司", "YL" : "1000", "SCRY" : "吴惠梅", "LRRQ" : "2021-02-10"},
                    {"NHXM" : "吴志美",  "DK" : "下叶村B-R21-05地块", "SJ" : "2021-02-21", "FL" : "钾肥以及复合肥", "PP" : "云天化", "GYS" : "北京中农国控化肥贸易有限公司", "YL" : "3000", "SCRY" : "刘振兴", "LRRQ" : "2021-02-21"},
                    {"NHXM" : "朱焕彩",  "DK" : "下叶村B-R21-07地块", "SJ" : "2021-01-03", "FL" : "钾肥以及复合肥", "PP" : "云天化", "GYS" : "北京中农国控化肥贸易有限公司", "YL" : "2000", "SCRY" : "徐杰", "LRRQ" : "2021-01-03"}]
        
        var table = layui.table;
	  	var element = layui.element;
	  	var ywbd= {	  
			    elem: '#ywbd',
			    cols: [[  
			               {field:'', width:60, title: '序号', type: 'numbers' , fixed: 'left'}
					      ,{field:'NHXM', width: 150, title: '农户姓名 ', sort: true}
					      ,{field:'DK', width: 180, title: '地块', sort: true}
					      ,{field:'SJ', width: 200, title: '时间', sort: true}
					      ,{field:'FL', width: 200, title: '肥料', sort: true}
					      ,{field:'PP', width: 150, title: '品牌 ', sort: true}
					      ,{field:'GYS', width: 150, title: '供应商 ', sort: true}
					      ,{field:'YL', width: 200, title: '用量(公斤)', sort: true}
					      ,{field:'SCRY', width: 150, title: '生产人员 ', sort: true}
					      ,{field:'LRRQ', width: 150, title: '录入日期 ', sort: true}
					]],
			    data: data,
			    even: true,
			    page: true 
		    }
    	table.render(ywbd);
		
	});
}


function add(){
	layer.open({
	    type: 2,
	    title: '施肥信息维护',
	    shadeClose: true,
	    shade: false,
	    maxmin: true, //开启最大化最小化按钮
	    area: ['50%', '90%'],
	    content: "sfgl_add.html"
	});
}

