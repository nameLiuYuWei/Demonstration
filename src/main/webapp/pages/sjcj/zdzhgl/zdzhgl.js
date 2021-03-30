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
		    url:"zdzhgl.json",
		    //totalRow: true,
		    toolbar: true,
		    cols: [[ //表头
		    	 {type: 'numbers', title: '序号', sort: true,align:'center',width:60},
	             {field: 'ZDMC', title: '字段名称',sort:true,align:'left', width:120},
	             {field: 'BDS', title: '表达式',sort:true,align:'center', width:160},
	             {field: 'ZDMS', title: '字段描述',sort:true,align:'left', width:200},
	             {field: 'ZDLX', title: '字段类型',sort:true,align:'center', width:120},
	             {field: 'ZDDX', title: '字段大小',sort:true,align:'center', width:160}
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

$('#glzj').on('click', function(){
	glzj();
});


$('#zdtm').on('click', function(){
	zdtm();
});

function zdtm(){
	layer.open({
		  type: 2,
		  area: ['720px', '500px'], //宽高
		  offset: 'auto',
		  shadeClose: false, //点击遮罩关闭
		  scrollbar: true,
		  content:  "add_zdtm.html"
	});
}

function glzj(){
	layer.open({
		  type: 2,
		  area: ['720px', '500px'], //宽高
		  offset: 'auto',
		  shadeClose: false, //点击遮罩关闭
		  scrollbar: true,
		  content:  "add_glzj.html"
	});
}
