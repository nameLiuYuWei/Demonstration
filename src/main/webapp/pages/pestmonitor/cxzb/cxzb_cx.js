

layui.use(['form'], function(){
    var form = layui.form
        ,layer = layui.layer;

    //监听提交
    form.on('submit(demo)', function(data){
        query();
        return false;
    });
});

$(function () {
    // $("#cxzb").val(val);
});

function query() {
    $('#content').empty();
    var val = "";
    if($("#cxzb").val()){
        val = $("#cxzb").val();
    }
    $.getJSON("cxval.json", function(data) {
        if(0<data.data.length){
            $.each(data.data,function (index,value) {
                var bt = "";bt = value.bt;
                var nr = "";nr = value.nr;
                for (var i =0;i<val.length;i++){
                    bt = bt.replace(new RegExp("("+val[i]+")",'g'),"<span style='color:red;'>" + val[i]+"</span>");
                    nr = nr.replace(new RegExp("("+val[i]+")",'g'),"<span style='color:red;'>" + val[i]+"</span>");
                }
                $("<div class='layui-text' style='cursor: pointer;margin-bottom: 20px;'  onclick=\"query_one('"+value.ymlx+"');\">" +
                    "<h3 style='margin-bottom: 10px;color:#2440b3;'><u>"+bt+"</u></h3>" +
                    "<p style='width: 70%;'><img src='../public/images/"+value.ymlx+".jpg' style='float:left;width: 160px;margin-right: 20px;'>"+nr+"</p>" +
                    "<div style='clear:both;'></div></div>").appendTo('#content');
            })
        }else {
            layui.alert("未查询相关数据！");
        }
    });
}

function query_one(type) {
    if ("ymjye" != type) {
        type = "ym" + type;
    }
    location.href = "../ymchpages/"+type+".html";
}