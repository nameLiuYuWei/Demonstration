layui.use(['table','form', 'layedit', 'laydate','upload','laypage', 'layer'], function(){
    var table = layui.table;
    var laypage = layui.laypage
        , layer = layui.layer;
    var form = layui.form
        ,layer = layui.layer
        ,layedit = layui.layedit
        ,laydate = layui.laydate;
    var $ = layui.jquery
        ,upload = layui.upload
        , layer = layui.layer;
    //日期
    laydate.render({
        elem: '#date'
    });
    laydate.render({
        elem: '#date1'
    });
    form.on('select(hc_select)', function (data) {   //选择移交单位 赋值给input框
        var select_text = data.elem[data.elem.selectedIndex].value;
        $("#HandoverCompany").val(select_text );
        $("#hc_select").next().find("dl").css({ "display": "none" });
        form.render();
    });
    $('#HandoverCompany').bind('input propertychange', function () {
        var value = $("#HandoverCompany").val();
        $("#hc_select").val(value);
        form.render();
        $("#hc_select").next().find("dl").css({ "display": "block" });
        var dl = $("#hc_select").next().find("dl").children();
        var j = -1;
        for (var i = 0; i < dl.length; i++) {
            if (dl[i].innerHTML.indexOf(value) <= -1) {
                dl[i].style.display = "none";
                j++;
            }
            if (j == dl.length-1) {
                $("#hc_select").next().find("dl").css({ "display": "none" });
            }
        }

    });
    table.render({
        elem: '#test'
        // ,url:'/test/table/demo1.json'
        ,toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        // ,defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
        //     title: '提示'
        //     ,layEvent: 'LAYTABLE_TIPS'
        //     ,icon: 'layui-icon-tips'
        // }]
        ,title: '养护信息查询'
        ,cellMinWidth: 50 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[{type:'radio'}
            ,{field:'gsid', title:'古树编号',width: 200}
            ,{field:'wz', title:'位置'}
            ,{field:'szs', title:'生长势',width: 100}
            ,{field:'xczt', title:'现存状态',width: 100}
            ,{fixed: 'right', title:'操作', toolbar: '#barDemo'}
        ]]
        ,data: [
            {"gsid":"XJ-YM-2021000081759","wz":"仙居县横溪镇镇头村屏峰岩","szs":"正常","xczt":"正常"},
            {"gsid":"XJ-YM-2021032211766","wz":"仙居县湫山乡杨岸村","szs":"正常","xczt":"正常"},
            {"gsid":"XJ-YM-2020123021723","wz":"仙居县福应街道","szs":"正常","xczt":"正常"},
            {"gsid":"XJ-YM-2021011248347","wz":"仙居县横溪镇镇头村屏峰岩","szs":"正常","xczt":"正常"},
            {"gsid":"XJ-YM-2021022203283","wz":"仙居县南峰街道","szs":"正常","xczt":"正常"},
            {"gsid":"XJ-YM-2021021123435","wz":"仙居县湫山乡抱龙村","szs":"正常","xczt":"正常"},
            {"gsid":"XJ-YM-2020121591294","wz":"仙居县福应街道","szs":"正常","xczt":"正常"},
            {"gsid":"XJ-YM-2020033001274","wz":"仙居县湫山乡杨岸村","szs":"正常","xczt":"正常"},
            {"gsid":"XJ-YM-2021010111746","wz":"仙居县福应街道","szs":"正常","xczt":"正常"},
            {"gsid":"XJ-YM-2020022082893","wz":"仙居县湫山乡抱龙村","szs":"正常","xczt":"正常"},
        ]
        ,page: true
    });

    //头工具栏事件
    table.on('toolbar(test)', function(obj){

       /* var checkStatus = table.checkStatus(obj.config.gsid); //获取选中行状态
        switch(obj.event){
            case 'getCheckData':
                var data = checkStatus.data;  //获取选中行数据
                layer.alert(JSON.stringify(data));
                break;
        };*/
    });

    //监听行工具事件
    table.on('tool(test)', function(obj){
        var data = obj.data;
        //console.log(obj)
        if(obj.event === 'xjjlxs'){
            layer.open({
                type: 2,
                title: '养护详情',
                shadeClose: true,
                shade: false,
                maxmin: true, //开启最大化最小化按钮
                area: ['1200px', '500px'],
                content: '../sjtjzs/gsyhxx_cx_list.html?ckgs=001'
            });
        } else if(obj.event === 'szjlxs'){
            layer.open({
                type: 2,
                title: '生长详情',
                shadeClose: true,
                shade: false,
                maxmin: true, //开启最大化最小化按钮
                area: ['1200px', '500px'],
                content: '../sjtjzs/gsszxx_cx_list.html?ckgs=001'
            });
        } else if(obj.event === 'bchjlxs'){
            layer.open({
                type: 2,
                title: '病虫害详情',
                shadeClose: true,
                shade: false,
                maxmin: true, //开启最大化最小化按钮
                area: ['1200px', '500px'],
                content: '../sjtjzs/gsbchxx_cx_list.html?ckgs=001'
            });
        } else if(obj.event === 'edit'){
            layer.open({
                type: 2,
                title: '详情',
                shadeClose: true,
                shade: false,
                maxmin: true, //开启最大化最小化按钮
                area: ['1200px', '500px'],
                content: '../gsmm/gsmmdj.html?ckgs=001'
            });
        }
    });
});
function addxj() {
    layer.open({
        type: 2,
        title: '古树登记',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1200px', '500px'],
        content: 'gsmmxc.html?gsid=XJ-YM-2021000081759'
    });
}
function addsz() {
    layer.open({
        type: 2,
        title: '生长记录登记',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1200px', '500px'],
        content: 'gsmmszjl.html?gsid=XJ-YM-2021000081759'
    });
}
function addbch() {
    layer.open({
        type: 2,
        title: '病虫害记录登记',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1200px', '500px'],
        content: 'gsmmbchjl.html?gsid=XJ-YM-2021000081759'
    });
}