/**
 * 全局变量
 */
var $;
var layer;
var table;

layui.use(['form','table','laydate','tree'], function(){

    $ = layui.$;
    layer = layui.layer;
    laydate = layui.laydate;
    table = layui.table;

    laydate.render({ 
		elem: '#cxrqq',
		type: 'date',
		value: getFirstDayOfYear(),
		btns: ['confirm']
	});
	
	laydate.render({ 
		elem: '#cxrqz',
		type: 'date',
		value: getToday(),
		btns: ['confirm']
	});
    
    //初始化表格数据
	var initData ={"djzclx":$("#djzclx").val(),
				   "cxrqq":$("#cxrqq").val(),
				   "cxrqz":$("#cxrqz").val(),
				   "swjg_dm":$("#swjg_dm").val(),
				   "ywlx":"dzswjywl"
				};
	//getdlxx();
    init(initData);
    

    showchar();
});




function init(json){
	  	table.render({	  
	  		elem: '#retTable',
		    method:'post',
		    contentType: 'application/json',
		    where: json,
		    //url: "/"+webserivesname+"/ywsjtj/query"+dostr,
		    url:"nhsjfx.json",
		    //totalRow: true,
		    toolbar: true,
		    cols: [[ //表头
		    	 {type: 'numbers', title: '序号', sort: true,align:'center',width:60},
	             {field: 'XM', title: '姓名',sort:true,align:'left', width:120},
	             {field: 'ZZZWZL', title: '种植作物种类',sort:true,align:'center', width:150},
	             {field: 'ZZMJ', title: '种植面积',sort:true,align:'center', width:120},
	             {field: 'NZMC', title: '农资名称',sort:true,align:'center', width:120},
	             {field: 'LJGMSL', title: '累计购买数量',sort:true,align:'center', width:150},
	             {field: 'ZCMMSYL', title: '正常每亩使用量',sort:true,align:'center', width:150},
	             {field: 'PJMMSYL', title: '平均每亩使用量',sort:true,align:'center', width:150},
	             {field: 'SFYC', title: '是否异常',sort:true,align:'center', width:120}
	        ]],
	        parseData: function(res){ //res 即为原始返回的数据
	            if(res.resultCode=='0'){
	            	if(!JSON.stringify(res.resultObj) == "{}"){
	            		showchar(res.resultObj.rows);
	            	}
	                return {
	                    "code": res.resultCode, //解析接口状态
	                    "msg": res.resultMsg, //解析提示文本
	                    "count": res.resultObj.count, //解析数据长度
	                    "data": res.resultObj.rows //解析数据列表
	                };
	            }else{
	                //layer.alert(res.resultMsg);
	            }
	        },
		    data: [],
		    even: true,
		    page: true 
	  	});
	  	
	  //监听行工具事件
		  layui.table.on('tool(KnowledgeTable)', function(obj){
		    var data = obj.data;
		
		    if(obj.event === 'ck'){
			    //layer.confirm('确认查看？', function(index){
			      getSwsxMx(data.swjg_dm,data.swsx_dm);
			      //layer.close(index);
			    	
			    //});
		    }
		 });
	  	
	  	
}

$('#query').on('click', function(){
	var parms = layui.form.val('cxform');
	parms ={"djzclx":$("#djzclx").val(),
		   "cxrqq":$("#cxrqq").val(),
		   "cxrqz":$("#cxrqz").val(),
		   "swjg_dm":$("#swjg_dm").val(),
		   "ywlx":"dzswjywl"
		};
	init(parms);
});


function showchar(){
	
	option = {
		    color: ['#3398DB'],
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        //bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: ['总任务数', '成功次数', '失败次数'],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value'
		        }
		    ],
		    series: [
		        {
		            type: 'bar',
		            barWidth: '20%',
		            data: [10, 7, 3]
		        }
		    ]
		};

	var myChart = echarts.init(document.getElementById('chartdiv'));
	myChart.setOption(option);
	
}




