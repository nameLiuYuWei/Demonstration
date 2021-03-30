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
        ,title: '虫情测报仪器'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[
            {field:'cbdbh', title:'虫情测报灯编号'}
            ,{field:'cj', title:'厂家'}
            ,{field:'xh', title:'型号'}
            ,{field:'xz', title:'乡镇'}
            ,{field:'xxdz', title:'详细地址'}
            ,{field:'scsl', title:'杀虫数量' ,style:'color: red;'}
            ,{fixed: 'right', title:'操作', toolbar: '#barDemo'}
        ]]
        ,data: [
            {"cbdbh":"XJ-CQCBD-20210312001","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"官路镇","xxdz":"官路镇新桥村后里吴村","scsl":"9111","dwzb_x":"120.676386","dwzb_y":"28.842455"},
            {"cbdbh":"XJ-CQCBD-20210312002","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"大战乡","xxdz":"下弯山","scsl":"10005","dwzb_x":"120.824401","dwzb_y":"28.82512"},
            {"cbdbh":"XJ-CQCBD-20210312003","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"福应街道","xxdz":"三里溪","scsl":"8988","dwzb_x":"120.785845","dwzb_y":"28.888731"},
            {"cbdbh":"XJ-CQCBD-20210312004","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"官路镇","xxdz":"坑口垟水磨山","scsl":"12111","dwzb_x":"120.652985","dwzb_y":"28.834862"},
            {"cbdbh":"XJ-CQCBD-20210312005","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"横溪镇","xxdz":"巧麻村大引地自然村","scsl":"13002","dwzb_x":"120.429909","dwzb_y":"28.781695"},
            {"cbdbh":"XJ-CQCBD-20210312006","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"官路镇","xxdz":"坑口垟大坑里","scsl":"9899","dwzb_x":"120.68763","dwzb_y":"28.854112"},
            {"cbdbh":"XJ-CQCBD-20210312007","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"湫山乡","xxdz":"湫山村","scsl":"11277","dwzb_x":"120.434237","dwzb_y":"28.695973"},
            {"cbdbh":"XJ-CQCBD-20210312008","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"埠头镇","xxdz":"上九都村山枣","scsl":"14199","dwzb_x":"120.530757","dwzb_y":"28.758082"},
            {"cbdbh":"XJ-CQCBD-20210312009","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"官路镇","xxdz":"官路镇谷旦","scsl":"12310","dwzb_x":"120.668825","dwzb_y":"28.834745"},
            {"cbdbh":"XJ-CQCBD-202103120010","cj":"浙江托普云农科技股份有限公司","xh":"PCB-II-C 4.0/TPCB-Ⅲ-B","xz":"大战乡","xxdz":"大战腰坑","scsl":"10251","dwzb_x":"120.824809","dwzb_y":"28.824187"}
        ]
        ,page: true
    });

    //头工具栏事件
    table.on('toolbar(test)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id);
        switch(obj.event){
            case 'getCheckData':
                layer.open({
                title: "虫情识别",
                type: 2,
                area: ['820px', '650px'],
                fixed: false, //不固定
                maxmin: true,
                content: 'xjmap.html'
				});
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
        	layer.open({
                title: "虫情定位",
                type: 2,
                area: ['906px', '704px'],
                fixed: false, //不固定
                maxmin: true,
                content: 'cqjst.html'
            });
        } else if(obj.event === 'edit'){
            layer.open({
                title: "虫情定位",
                type: 2,
                area: ['700px', '450px'],
                fixed: false, //不固定
                maxmin: true,
                content: '../cqdw/cqdtdw.html?name='+obj.data.cbdbh + "&dwzb_x="+obj.data.dwzb_x + "&dwzb_y="+obj.data.dwzb_y
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



setInterval(function(){ 
	//alert("1");
	$("td[data-field='scsl']").each(function(){
	    //alert($(this).text())
		var rsl=$(this).text();
		var qqsl=parseFloat(rsl)*1.05;
		qqsl=parseInt(qqsl);
		var dhtml='<div class="layui-table-cell laytable-cell-1-0-5" style="color:red">'+qqsl+'</div>';
		$(this).html(dhtml);
	  });
 }, 3000);
 
