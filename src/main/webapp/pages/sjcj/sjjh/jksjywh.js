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
		    url:"jksjywh.json",
		    //totalRow: true,
		    toolbar: true,
		    cols: [[ //表头
		    	 {type: 'numbers', title: '序号', sort: true,align:'center',width:60},
	             {field: 'JKMC', title: '接口名称',sort:true,align:'left', width:200},
	             {field: 'JKMS', title: '接口描述',sort:true,align:'left', width:240},
	             {field: 'JKDZ', title: '接口地址',sort:true,align:'left', width:160},
	             {field: 'JKLX', title: '接口类型',sort:true,align:'center', width:120},
	             {field: 'JKBB', title: '接口版本',sort:true,align:'center', width:120},
	             {field: 'FBSJ', title: '发布时间',sort:true,align:'center', width:120}
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
		  content:  "add_jksjywh.html"
	});
}
