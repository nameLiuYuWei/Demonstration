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
    
 
	//getdlxx();
    init();
    

});




function init(){
	  	table.render({	  
	  		elem: '#retTable',
		    method:'post',
		    contentType: 'application/json',
		    //where: json,
		    //url: "/"+webserivesname+"/ywsjtj/query"+dostr,
		    url:"nzgyz.json",
		    //totalRow: true,
		    toolbar: true,
		    cols: [[ //表头
		    	 {type: 'numbers', title: '序号', sort: true,align:'center',width:60},
	             {field: 'NZGYZ', title: '农资供应站',sort:true,align:'left', width:300},
	             {field: 'NZMC', title: '农资名称',sort:true,align:'center', width:150},
	             {field: 'GJZSL', title: '购进总数量',sort:true,align:'center', width:120},
	             {field: 'XSZSL', title: '销售总数量',sort:true,align:'center', width:150},
	             {field: 'KCZDYCYL', title: '库存最低应持有量',sort:true,align:'center', width:200},
	             {field: 'KCZSL', title: '库存总数量',sort:true,align:'center', width:150}
	             
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

	init();
});






