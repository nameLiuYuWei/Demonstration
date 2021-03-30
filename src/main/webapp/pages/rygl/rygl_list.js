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
        ,title: '养护查询列表'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[
            {type:'radio'}
            ,{field:'xm', title:'姓名'}
            ,{field:'sfzhm', title:'身份证号码'}
            ,{field:'sjhm', title:'手机号码'}
            ,{field:'djtime', title:'登记日期'}
            ,{field:'zt', title:'状态'}
            ,{field:'cql', title:'出勤率'}
            ,{field:'zcqtime', title:'总出勤时间'}
            ,{field:'cdcs', title:'迟到次数'}
            ,{field:'ztcs', title:'早退次数'}
            ,{fixed: 'right', title:'操作', toolbar: '#barDemo',width:250}
        ]]
        ,data: [
            {"xm":"李永进","sfzhm":"332624197401180019","sjhm":"13968563892","djtime":"2019-11-11","zt":"在职","cql":"99.8%","zcqtime":"2550","cdcs":"17","ztcs":"3"},
            {"xm":"应开远","sfzhm":"332624195609224376","sjhm":"13968562082","djtime":"2020-03-14","zt":"离职","cql":"97.8%","zcqtime":"1879","cdcs":"11","ztcs":"6"},
            {"xm":"张勇平","sfzhm":"332624197912100017","sjhm":"18058462206","djtime":"2018-02-01","zt":"在职","cql":"95.9%","zcqtime":"4355","cdcs":"33","ztcs":"15"},
            {"xm":"吴卫勇","sfzhm":"332624197402263991","sjhm":"13906555616","djtime":"2021-01-01","zt":"在职","cql":"99.1%","zcqtime":"398","cdcs":"6","ztcs":"2"},
            {"xm":"应汉湖","sfzhm":"332624195805224373","sjhm":"13136581963","djtime":"2021-02-01","zt":"在职","cql":"99.9%","zcqtime":"118","cdcs":"2","ztcs":"0"},
            {"xm":"陈锦龙","sfzhm":"332624197302064215","sjhm":"13656579688","djtime":"2020-08-22","zt":"在职","cql":"98.7%","zcqtime":"1467","cdcs":"12","ztcs":"0"},
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
        if(obj.event === 'del'){
            layer.open({
                type: 2,
                title: '人员养护记录',
                shadeClose: true,
                shade: false,
                maxmin: true, //开启最大化最小化按钮
                area: ['1200px', '500px'],
                content: 'yhryyhjl_list.html?ckgs=001'
            });
        } else if(obj.event === 'edit'){
            layer.open({
                type: 2,
                title: '人员出勤记录',
                shadeClose: true,
                shade: false,
                maxmin: true, //开启最大化最小化按钮
                area: ['1200px', '500px'],
                content: 'yhrycqjl_list.html?ckgs=001'
            });
        }else if(obj.event === 'xq'){
            layer.open({
                type: 2,
                title: '人员登记记录',
                shadeClose: true,
                shade: false,
                maxmin: true, //开启最大化最小化按钮
                area: ['1200px', '500px'],
                content: 'yhrydj.html?czzt=001'
            });
        }
    });
});

function addry() {
    layer.open({
        type: 2,
        title: '人员登记',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1200px', '500px'],
        content: 'yhrydj.html'
    });
}

function xgry() {
    layer.open({
        type: 2,
        title: '人员修改',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1200px', '500px'],
        content: 'yhrydj.html?czzt=002'
    });
}
function addcq() {
    layer.open({
        type: 2,
        title: '人员出勤登记',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1200px', '500px'],
        content: 'yhrycqjl.html'
    });
}

function addyh() {
    layer.open({
        type: 2,
        title: '人员养护登记',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1200px', '500px'],
        content: 'yhryyhjl.html'
    });
}
