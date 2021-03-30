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
    var date = new Date();

    var year = date.getFullYear();

    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1; //获取月,如果小于10,前面补个0

    var strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); //获取日,如果小于10,前面补个0

    var strHours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); //获取小时,如果小于10,前面补个0

    var strMinutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //获取分,如果小于10,前面补个0

    var strSeconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //获取秒,如果小于10,前面补个0

    $("#date").val("2021-03-01");
    $("#date1").val(year+"-"+month+"-"+strDate);
    var daid="XJ-YM-"+year+"0"+month+""+strDate+""+strHours+""+strSeconds;

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
        ,title: '病虫害信息查询'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[
            {field:'gsid', title:'古树编号'}
            ,{field:'sbtime', title:'上报时间'}
            ,{field:'sbr', title:'上报人'}
            ,{field:'bcmc', title:'病虫名称'}
            ,{fixed: 'right', title:'操作', toolbar: '#barDemo'}
        ]]
        ,data: [
            {"gsid":"XJ-YM-2021000081759","sbtime":"2021-03-30","sbr":"李永进","bcmc":"杨梅果蝇"},
            {"gsid":"XJ-YM-2021000081759","sbtime":"2021-03-28","sbr":"王均旦","bcmc":"杨梅果蝇"},
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
                window.location.href = "bchsjwh.html";
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
        if(obj.event === 'edit'){
            layer.open({
                type: 2,
                title: '病虫害详情',
                shadeClose: true,
                shade: false,
                maxmin: true, //开启最大化最小化按钮
                area: ['1150px', '400px'],
                content: '../gsmmcx/gsmmbchjl.html?ckgs=001'
            });
        }
    });
});