/**
 * Created by soso on 2021/3/6.
 */

layui.use(['form'], function(){
    var form = layui.form
        ,layer = layui.layer;

    //监听提交
    form.on('submit(demo)', function(data){
        layer.alert('答疑成功！', { icon: 1, closeBtn: 0 }, function (index) {
            var index=parent.layer.getFrameIndex(window.name); //获取当前窗口的name
            parent.layer.close(index);//关闭窗口
        });
        return false;
    });
});

$(function () {
    $("#wtnr").val("杨梅树的卷叶蛾要怎样防治?");
});

