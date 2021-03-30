layui.use(['form', 'layedit', 'laydate','upload'], function(){
	var form = layui.form
		,layer = layui.layer
		,layedit = layui.layedit
		,laydate = layui.laydate;
	var $ = layui.jquery
		,upload = layui.upload;
	//日期
	laydate.render({
		elem: '#date'
	});
	laydate.render({
		elem: '#date1'
	});


	//创建一个编辑器
	var editIndex = layedit.build('LAY_demo_editor');

	qrcode = new QRCode(document.getElementById("qrcode"), {
		text: "http://baidu.com",
		width: 200,
		height: 200,
		colorDark : "#393D49",
		colorLight : "#F2F2F2",
		correctLevel : 0 // 二维码结构复杂性 0~3
	});


});
function dy() {
    $("#testbc").css("display","none");
    window.print();/*
	$("#qrcode").printArea();*/
}
