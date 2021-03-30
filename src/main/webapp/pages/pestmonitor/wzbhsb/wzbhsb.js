/**
 * Created by soso on 2021/3/6.
 */

layui.use(['form', 'layedit', 'laydate','upload'], function(){
    var form = layui.form
        ,layer = layui.layer
        ,layedit = layui.layedit
        ,laydate = layui.laydate;
    var $ = layui.jquery,
        upload = layui.upload;

    //同时绑定多个
    $("input[lay-verify='date']").each(function(){
        laydate.render({
            elem: this
            ,trigger: 'click'
        });
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

    //监听提交
    form.on('submit(demo)', function(data){
        layer.alert("保存成功！", {
            title: '提示'
        });
        return false;
    });
    //监听提交
    form.on('submit(demo1)', function(data){
        location.href = "wzbhsb_cx.html";
        return false;
    });
});

