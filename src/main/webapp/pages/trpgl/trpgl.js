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
		
	    
	    
        var data = [{"TRPMC" : "塑料托盘","DJ" : "40","CJMC" : "仙居县恒辉塑料制品厂", "CJLXR" : "方有亮", "LRR" : "陈坚平", "LRRQ" : "2020-09-10", "CK" : "说明"},
                    {"TRPMC" : "泡沫箱（内包装）","DJ" : "40","CJMC" : "仙居县雅诺塑料制品有限公司", "CJLXR" : "陈平琼", "LRR" : "陈坚平", "LRRQ" : "2020-09-10", "CK" : "说明"},
                    {"TRPMC" : "篮子","DJ" : "20","CJMC" : "仙居县恒兴塑料制品厂", "CJLXR" : "李放", "LRR" : "陈坚平", "LRRQ" : "2020-09-10", "CK" : "说明"},
                    {"TRPMC" : "冰块","DJ" : "10","CJMC" : "仙居县琪达塑料制品经营部", "CJLXR" : "王升", "LRR" : "陈坚平", "LRRQ" : "2020-09-10", "CK" : "说明"},
                    {"TRPMC" : "外包装箱","DJ" : "20","CJMC" : "仙居县琪达塑料制品经营部", "CJLXR" : "王升", "LRR" : "陈坚平", "LRRQ" : "2020-09-10", "CK" : "说明"},
                    {"TRPMC" : "密封袋","DJ" : "20","CJMC" : "仙居县万鸿塑料制品有限公司", "CJLXR" : "何平", "LRR" : "陈坚平", "LRRQ" : "2020-09-10", "CK" : "说明"}]
        var table = layui.table;
	  	var element = layui.element;
	  	var ywbd= {	  
			    elem: '#ywbd',
			    cols: [[  
					       {field:'TRPMC', width: 200, title: '投入品名称', sort: true}
					      ,{field:'DJ', width: 100, title: '单价 ', sort: true}
					      ,{field:'CJMC', width: 200, title: '厂家名称 ', sort: true}
					      ,{field:'CJLXR', width: 150, title: '厂家联系人 ', sort: true}
					      ,{field:'LRR', width: 150, title: '录入人', sort: true}
					      ,{field:'LRRQ', width: 150, title: '录入日期', sort: true}
					      /*,{field:'CK', width:100, title: '查看', sort: true, fixed: 'right',
					    	  templet: function(res){
				    		   		var arrayLink = new Array();
				    		   		arrayLink.push('<a href="#" onclick="javascript:mx(');
				    		   		arrayLink.push(res.FJDZ);
					  				arrayLink.push(')"  style="color:blue;">查看</a>');
				  					return arrayLink.join("");
					    		    
						    	}
					      }*/
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
	    title: '投入品维护',
	    shadeClose: true,
	    shade: false,
	    maxmin: true, //开启最大化最小化按钮
	    area: ['50%', '90%'],
	    content: "trpgl_add.html"
	});
}




