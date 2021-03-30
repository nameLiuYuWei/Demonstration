var ckdj={"xm":"李永进","sfzhm":"332624197401180019","sjhm":"13968563892","xzbsc":"在职","lrr":"王均方","lrtime":"2019-11-11"}
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

	//自定义验证规则
	form.verify({
		title: function(value){
			if(value.length < 5){
				return '标题至少得5个字符啊';
			}
		}
		,pass: [
			/^[\S]{6,12}$/
			,'密码必须6到12位，且不能出现空格'
		]
		,content: function(value){
			layedit.sync(editIndex);
		}
	});

	//监听指定开关
	form.on('switch(switchTest)', function(data){
		layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
			offset: '6px'
		});
		layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
	});

	//监听提交
	form.on('submit(demo1)', function(data){
		layer.alert("保存成功！", {
			title: '提示'
		});
		return false;
	});

	//表单赋值
	layui.$('#LAY-component-form-setval').on('click', function(){
		form.val('example', {
			"username": "贤心" // "name": "value"
			,"password": "123456"
			,"interest": 1
			,"like[write]": true //复选框选中状态
			,"close": true //开关状态
			,"sex": "女"
			,"desc": "我爱 layui"
		});
	});

	//表单取值
	layui.$('#LAY-component-form-getval').on('click', function(){
		var data = form.val('example');
		alert(JSON.stringify(data));
	});

	var date = new Date();

	var year = date.getFullYear();

	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1; //获取月,如果小于10,前面补个0

	var strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); //获取日,如果小于10,前面补个0

	var strHours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); //获取小时,如果小于10,前面补个0

	var strMinutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //获取分,如果小于10,前面补个0

	var strSeconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //获取秒,如果小于10,前面补个0

	$('#xctime').val(year+"-"+month+"-"+strDate);

	//多图片上传
	upload.render({
		elem: '#test2'
		,url: 'https://httpbin.org/post' //改成您自己的上传接口
		,multiple: true
		,before: function(obj){
			//预读本地文件示例，不支持ie8
			obj.preview(function(index, file, result){
				$('#demo2').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img" style="width: 250px;">')
			});
		}
		,done: function(res){
			//上传完毕
		}
	});
	var czzt = getUrlParam("czzt");
	if(czzt=="001"){
		$("#xzbsc_inp").css("display","");
		$("#xzbsc_sel").css("display","none");
		$.each(ckdj, function (key, value) {
			$('#'+key).val(value);
			$('#'+key).attr("disabled","disabled");
			$('input[name="'+key+'"]').attr("disabled","disabled");
			$("#xzbsc option:selected").empty();
			$("#xzbsc option:selected").append("在职");
			layui.form.render("select");
		});
		$("#testbc").css("display","none");
		//$("#testfh").css("display","");
	}
	if(czzt=="002"){
		$.each(ckdj, function (key, value) {
			$('#'+key).val(value);
		});
		$("#rmc").html("修改人");
		$("#rrq").html("修改日期");
	}
});

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}