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
		
        
        var data = [{"LX" : "化肥","MC" : "磷肥","LRR" : "王星海", "LRRQ" : "2020-09-10", "BZ" : "有效","SM" : "说明"},
                    {"LX" : "化肥","MC" : "钾肥以及复合肥","LRR" : "徐子连", "LRRQ" : "2020-01-10", "BZ" : "有效","SM" : "说明"},
                    {"LX" : "农药","MC" : "抗菌剂","LRR" : "陈坚平", "LRRQ" : "2020-02-10", "BZ" : "有效","SM" : "说明"},
                    {"LX" : "农药","MC" : "甲基托布津","LRR" : "陈进荣", "LRRQ" : "2020-04-10", "BZ" : "有效","SM" : "说明"},
                    {"LX" : "农药","MC" : "多菌灵","LRR" : "应苏爱", "LRRQ" : "2020-06-10", "BZ" : "有效","SM" : "说明"},
                    {"LX" : "农药","MC" : "纹达克","LRR" : "王军木", "LRRQ" : "2020-05-10", "BZ" : "有效","SM" : "说明"},
                    {"LX" : "农药","MC" : "青虫菌","LRR" : "郑爱华", "LRRQ" : "2020-08-10", "BZ" : "有效","SM" : "说明"},
                    {"LX" : "农药","MC" : "杀虫剂","LRR" : "王泽东", "LRRQ" : "2020-09-10", "BZ" : "有效","SM" : "说明"}]
        var table = layui.table;
	  	var element = layui.element;
	  	var ywbd= {	  
			    elem: '#ywbd',
			    cols: [[  
					       {field:'LX', width: 100, title: '类型', sort: true}
					      ,{field:'MC', width: 200, title: '名称 ', sort: true}
					      ,{field:'LRR', width: 180, title: '录入人', sort: true}
					      ,{field:'LRRQ', width: 180, title: '录入日期', sort: true}
					      ,{field:'BZ', width: 180, title: '标志 ', sort: true}
					      ,{field:'SM', width:180, title: '说明', sort: true, fixed: 'right',
					    	  templet: function(res){
				    		   		var arrayLink = new Array();
				    		   		arrayLink.push('<a href="#" onclick="javascript:mx(');
				    		   		arrayLink.push(res.FJDZ);
					  				arrayLink.push(')"  style="color:blue;">说明</a>');
				  					return arrayLink.join("");
					    		    
						    	}
					      }
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
	    title: '生产资料的维护',
	    shadeClose: true,
	    shade: false,
	    maxmin: true, //开启最大化最小化按钮
	    area: ['50%', '70%'],
	    content: "sczlgl_add.html"
	});
}

function mx(){
	layer.open({
	    type: 2,
	    title: '说明',
	    shadeClose: true,
	    shade: false,
	    maxmin: true, //开启最大化最小化按钮
	    area: ['70%', '90%'],
	    content: "sczlgl_mx.html"
	});
}



