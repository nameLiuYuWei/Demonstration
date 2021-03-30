/**
 * Created by soso on 2021/3/6.
 */

layui.use(['form', 'layedit', 'laydate'], function(){
    var form = layui.form
        ,layer = layui.layer
        ,layedit = layui.layedit
        ,laydate = layui.laydate;

    var $ = layui.jquery;

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

    //监听提交
    form.on('submit(demo)', function(data){
        layer.alert("保存成功！", {
            title: '提示'
        });
        return false;
    });
    //监听提交
    form.on('submit(demo1)', function(data){
        location.href = "hjyzgl_cx.html";
        return false;
    });
});

