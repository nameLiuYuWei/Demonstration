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
		    url:"ssjk.json",
		    //totalRow: true,
		    toolbar: true,
		    cols: [[ //表头
		    	 {type: 'numbers', title: '序号', sort: true,align:'center',width:60},
	             {field: 'FWMC', title: '服务名称',sort:true,align:'left', width:240},
	             {field: 'FWDZ', title: '服务地址',sort:true,align:'center', width:180},
	             {field: 'FWZT', title: '服务状态',sort:true,align:'center', width:160},
	             {field: 'FWLJS', title: '服务状态连接数',sort:true,align:'center', width:160}
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
}

$('#query').on('click', function(){
	init();
});


$('#add').on('click', function(){
	add();
});

function add(){
	layer.open({
		  type: 2,
		  area: ['720px', '500px'], //宽高
		  offset: 'auto',
		  shadeClose: false, //点击遮罩关闭
		  scrollbar: true,
		  content:  "add_sjksjywh.html"
	});
}
