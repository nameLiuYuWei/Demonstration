layui.use('table', function(){
    var table = layui.table;

    table.render({
        elem: '#test'
        // ,url:'/test/table/demo1.json'
        ,toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        // ,defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
        //     title: '提示'
        //     ,layEvent: 'LAYTABLE_TIPS'
        //     ,icon: 'layui-icon-tips'
        // }]
        ,title: '环境阈值管理'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[
            {field:'hjlx', title:'环境类型'},
            {field:'syz', title:'适宜值'},
            {field:'zdfz', title:'最低阀值'},
            {field:'zgfz', title:'最高阀指'},
            {fixed: 'right', title:'操作', toolbar: '#barDemo'}
        ]]
        ,data: [
            {"hjlx":"气温","syz":"15℃-20℃","zdfz":"-9℃","zgfz":"35℃"},
            {"hjlx":"年雨量","syz":"900mm-1100mm","zdfz":"500m","zgfz":"2000m"},
            {"hjlx":"PH值","syz":"5-6","zdfz":"4","zgfz":"7"}
        ]
        ,page: true
    });

    //头工具栏事件
    table.on('toolbar(test)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id);
        switch(obj.event){
            case 'getCheckData':
                var data = checkStatus.data;
                // layer.alert(JSON.stringify(data));
                window.location.href = "hjyzgl.html";
                break;
            case 'getCheckLength':
                var data = checkStatus.data;
                // layer.msg('选中了：'+ data.length + ' 个');
                location.reload();
                break;
            //自定义头工具栏右侧图标 - 提示
            // case 'LAYTABLE_TIPS':
            //     layer.alert('这是工具栏右侧自定义的一个图标按钮');
            //     break;
        }
    });

    //监听行工具事件
    table.on('tool(test)', function(obj){
        var data = obj.data;
        //console.log(obj)
        if(obj.event === 'del'){
            layer.confirm('真的删除行么', function(index){
                obj.del();
                layer.close(index);
            });
        } else if(obj.event === 'edit'){
            layer.prompt({
                formType: 2
                ,value: data.email
            }, function(value, index){
                obj.update({
                    email: value
                });
                layer.close(index);
            });
        }
    });
});

layui.use(['form', 'laydate'], function(){
    var laydate = layui.laydate;
    var $ = layui.jquery;

    //同时绑定多个
    $("input[lay-verify='date']").each(function(){
        laydate.render({
            elem: this
            ,trigger: 'click'
            ,range: true
        });
    });
});