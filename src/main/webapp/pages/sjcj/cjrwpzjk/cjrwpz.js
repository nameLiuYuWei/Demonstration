/**
 * 全局变量
 */
var $;
var layer;
var form
var table;
var tree;
var laydate;
var formSelects;
var trxh = 0;
layui.use(['form','table','laydate','tree'], function(){

	$ = layui.$;
    layer = layui.layer;
    form = layui.form;
    laydate = layui.laydate;
    tree = layui.tree;
    table = layui.table;

    
    laydate.render({ 
		elem: '#rwrqgs',
		type: 'date',
		value: getToday(),
		btns: ['confirm']
	});
    
});


function save_tj(){
	
	layer.alert("成功！",function (index) { 
		var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        parent.layer.close(index);
        window.parent.query();
	});
	
}


