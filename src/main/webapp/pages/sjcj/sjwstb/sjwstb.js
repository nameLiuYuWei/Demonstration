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

    
});


function add(){
	
	var xh=$("#zzwxq_mx tr").length+1;
	var rows = xh-trxh-1;
	var tr_row = $("#zzwxq_mx");
	var append_str="";
	
	append_str+="<tr id='"+xh+"' class='layui-tab'>"+
					"<td><input class='layui-input' type='text' value='东魁'></td>"+
					"<td><input class='layui-input' type='text' value='岭脚村'></td>"+
					"<td><input class='layui-input' type='text' value='60'></td>"+
					"<td><input class='layui-input' type='text' value='450'></td>"+
					"<td><input class='layui-input' type='text' value='是'></td>"+
					"<td><input class='layui-input' type='text' value='30000'></td>"+
					"<td><input class='layui-input' type='text' value='700000'></td>"+
				"</tr>";
	tr_row.append(append_str);
	
}

function save_tj(){
	
	alert("提交成功！");
	
}


