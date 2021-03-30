$(function () {  
	init();
});

function init(){

	layui.use(['form','table','laydate','element'], function(){
		
	    var data = [{"NHXM" : "吴宝福", "NHBH" : "120123", "DK" : "下叶村B-R21-03地块 ", "SCRXM" : "倪治先", "SCRSFZHM" : "33042119550802412X", "SCRSJHM" : "13566553322", "LRRQ" : "2021-02-01", "ZT" : "有效"},
                    {"NHXM" : "陈娅萍", "NHBH" : "120120", "DK" : "板苍村B-R21-01地块", "SCRXM" : "吴惠梅", "SCRSFZHM" : "33052219700907692X", "SCRSJHM" : "13554345566", "LRRQ" : "2021-02-10", "ZT" : "有效"},
                    {"NHXM" : "吴志美", "NHBH" : "120111", "DK" : "下叶村B-R21-05地块", "SCRXM" : "刘振兴", "SCRSFZHM" : "430521198408270019", "SCRSJHM" : "13677665544", "LRRQ" : "2021-02-21", "ZT" : "有效"},
                    {"NHXM" : "朱焕彩", "NHBH" : "120122", "DK" : "下叶村B-R21-07地块", "SCRXM" : "徐杰", "SCRSFZHM" : "330382198806170337", "SCRSJHM" : "13345664455", "LRRQ" : "2021-01-03", "ZT" : "有效"}]
        var table = layui.table;
	  	var element = layui.element;
	  	var ywbd= {	  
			    elem: '#ywbd',
			    cols: [[  
			               {field:'', width:60, title: '序号', type: 'numbers' , fixed: 'left'}
					      ,{field:'NHXM', width: 150, title: '农户姓名 ', sort: true}
					      ,{field:'NHBH', width: 150, title: '农户编号 ', sort: true}
					      ,{field:'DK', width: 180, title: '地块', sort: true}
					      ,{field:'SCRXM', width: 200, title: '生产人姓名', sort: true}
					      ,{field:'SCRSFZHM', width: 200, title: '生产人身份证号码', sort: true}
					      ,{field:'SCRSJHM', width: 150, title: '生产人手机号码 ', sort: true}
					      ,{field:'LRRQ', width: 150, title: '录入日期 ', sort: true}
					      ,{field:'ZT', width: 150, title: '状态', sort: true}
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
	    title: '生产人员维护',
	    shadeClose: true,
	    shade: false,
	    maxmin: true, //开启最大化最小化按钮
	    area: ['50%', '90%'],
	    content: "scrygl_add.html"
	});
}

