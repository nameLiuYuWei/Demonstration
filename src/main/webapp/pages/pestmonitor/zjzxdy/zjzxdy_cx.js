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
        ,title: '专家在线答疑'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[
            {field:'wtlx', title:'问题类型'},
            {field:'wtbt', title:'问题标题'},
            {field:'zxr', title:'咨询人姓名'},
            {field:'zxrq', title:'咨询时间'},
            {field:'zt', title:'状态'},
            {fixed: 'right', title:'操作', toolbar: '#barDemo'}
        ]]
        ,data: [
            {"wtlx":"答疑解惑","wtbt":"杨梅树的卷叶蛾要怎样防治？","zxr":"张朝阳","zxrq":"2021-03-18","zt":"<span style='color: red;'>未回复</span>"},
            {"wtlx":"答疑解惑","wtbt":"杨梅根腐病要怎么防治？","zxr":"李玉龙","zxrq":"2021-03-18","zt":"<span style='color: #009688;'>已回答</span>"},
            {"wtlx":"答疑解惑","wtbt":"杨梅果蝇要怎么防治？","zxr":"孙启明","zxrq":"2021-03-18","zt":"<span style='color: red;'>未回复</span>"}
        ]
        ,page: true
    });

    //头工具栏事件
    table.on('toolbar(test)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id);
        switch(obj.event){
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
        if(obj.event === 'edit'){
            layer.open({
                title: "专家在线答疑",
                type: 2,
                area: ['700px', '450px'],
                fixed: false, //不固定
                maxmin: true,
                content: './zjzxdy.html'
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