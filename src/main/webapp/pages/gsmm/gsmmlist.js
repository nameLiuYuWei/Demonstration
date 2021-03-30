var qrcode="";
layui.use(['form', 'layedit', 'laydate','upload','laypage', 'layer'], function() {
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

    //总页数低于页码总数
    laypage.render({
        elem: 'demo0'
        , count: 50 //数据总数
    });


/*
    $('button[name="scewmid"]').on('click', function(){
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });*/



})

$(function () {

});

function cx() {
    $("#cxdiv").css("display","");
}
function xz() {
    layer.open({
        type: 2,
        title: '古树名木登记',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1150px', '400px'],
        content: 'gsmmdj.html'
    });
}
function ckxq() {
    layer.open({
        type: 2,
        title: '详情',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1150px', '400px'],
        content: 'gsmmdj.html?ckgs=001'
    });
}
function scewm() {
    layer.open({
        type: 2,
        title: '定位',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['300px', '370px'],
        content: 'gsmmewm.html'
    });

}

function ckqw() {
    layer.open({
        type: 2,
        title: '定位',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['1150px', '400px'],
        content: '../old_tree/position.html'
    });
}