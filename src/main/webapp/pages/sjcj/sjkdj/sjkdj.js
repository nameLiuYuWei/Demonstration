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
		    url:"sjkdj.json",
		    //totalRow: true,
		    toolbar: true,
		    cols: [[ //表头
		    	 {type: 'numbers', title: '序号', sort: true,align:'center',width:60},
	             {field: 'SJKM', title: '数据库名',sort:true,align:'left', width:150},
	             {field: 'SJKDZ', title: '数据库地址',sort:true,align:'center', width:150},
	             {field: 'ZH', title: '账号',sort:true,align:'center', width:120},
	             {field: 'MM', title: '密码',sort:true,align:'center', width:150},
	             {field: 'SJKCP', title: '数据库产品',sort:true,align:'center', width:150},
	             {field: 'MRSJKLJS', title: '默认数据库连接数',sort:true,align:'center', width:150},
	             {field: 'ZGSJKLJS', title: '最高数据库连接数',sort:true,align:'center', width:150}
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
		  content:  "add_sjkdj.html"
	});
}
