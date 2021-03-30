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
        ,title: '未知病害上报'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[
            {field:'name', title:'病虫名称'}
            ,{field:'time', title:'发生的时间'}
            ,{field:'jdxz', title:'乡镇（办事处）'}
            ,{field:'cwh', title:'村（居委会）'}
            ,{field:'dkm', title:'地块名'}
            ,{field:'lrr', title:'上报人'}
            ,{field:'lrrq', title:'上报时间'},
            {fixed: 'right', title:'操作', toolbar: '#barDemo'}
        ]]
        ,data: [
            {"name":"绿霉病","time":"2021-03-18","jdxz":"安岭乡","cwh":"新官村","dkm":"45号地块","lrr":"张朝阳","lrrq":"2021-03-18"},
            {"name":"红蜘蛛","time":"2021-03-18","jdxz":"安岭乡","cwh":"新官村","dkm":"46号地块","lrr":"李玉龙","lrrq":"2021-03-18"},
            {"name":"黑刺粉虱","time":"2021-03-19","jdxz":"安岭乡","cwh":"新官村","dkm":"36号地块","lrr":"孙启明","lrrq":"2021-03-19"}
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
                window.location.href = "wzbhsb.html";
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