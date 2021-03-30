$(function () {  
	init();
});

function init(){

	layui.use(['form','table','laydate','element'], function(){
		
		var laydate = layui.laydate;
		//初始化时间
	    var nowDate=getnowtime();
	    var prevDate=getnowtime(7);
		laydate.render({
	        elem: '#sjq',
	        btns: ['clear', 'now'],
	        trigger: 'click',
	        value:prevDate
	    });
	    laydate.render({
	        elem: '#sjz',
	        btns: ['clear', 'now'],
	        trigger: 'click',
	        value:nowDate
	    });
	    
        var data = [{"DDBH" : "12012321071214", "CPPCH" : "12012301210708",  "NH" : "吴宝福",  "NHBH" : "120123", "SJ" : "2021-07-12", "CGDW" : "仙居县百联种养殖专业合作社", "CGRY" : "王丽华"},
                    {"DDBH" : "12012321071214", "CPPCH" : "12012002210908",  "NH" : "陈娅萍",  "NHBH" : "120120", "SJ" : "2021-07-12", "CGDW" : "仙居县百联种养殖专业合作社", "CGRY" : "王丽华"},
                    {"DDBH" : "12011121021233", "CPPCH" : "12011103211008",  "NH" : "吴志美",  "NHBH" : "120111", "SJ" : "2021-07-12", "CGDW" : "仙居县百联种养殖专业合作社", "CGRY" : "王丽华"},
                    {"DDBH" : "12012221051227", "CPPCH" : "12012202210508",  "NH" : "朱焕彩",  "NHBH" : "120122", "SJ" : "2021-07-12", "CGDW" : "仙居县百联种养殖专业合作社", "CGRY" : "王丽华"},
                    {"DDBH" : "12012321071218", "CPPCH" : "12012301210709",  "NH" : "胡凤台",  "NHBH" : "120125", "SJ" : "2021-07-12", "CGDW" : "仙居县百联种养殖专业合作社", "CGRY" : "王丽华"},
                    {"DDBH" : "12012321071218", "CPPCH" : "12012301210710",  "NH" : "沈春芳",  "NHBH" : "120126", "SJ" : "2021-07-12", "CGDW" : "仙居县百联种养殖专业合作社", "CGRY" : "王丽华"},
                    {"DDBH" : "12012321071218", "CPPCH" : "12012301210711",  "NH" : "胡锦水",  "NHBH" : "120127", "SJ" : "2021-07-12", "CGDW" : "仙居县百联种养殖专业合作社", "CGRY" : "王丽华"},
                    {"DDBH" : "12012321071218", "CPPCH" : "12012301210712",  "NH" : "吴伟平",  "NHBH" : "120128", "SJ" : "2021-07-12", "CGDW" : "仙居县百联种养殖专业合作社", "CGRY" : "王丽华"}]
        var table = layui.table;
	  	var element = layui.element;
	  	var ywbd= {	  
			    elem: '#ywbd',
			    cols: [[   {checkbox: true, width: 60, fixed: true}
			              ,{field:'DDBH', width: 200, title: '订单编号', sort: true}
					      ,{field:'CPPCH', width: 200, title: '采收批次', sort: true}
					      ,{field:'NH', width: 150, title: '农户 ', sort: true}
					      ,{field:'NHBH', width: 120, title: '农户编号', sort: true}
					      ,{field:'SJ', width: 150, title: '时间', sort: true}
					      ,{field:'CGDW', width: 240, title: '采购单位', sort: true}
					      ,{field:'CGRY', width: 150, title: '采购人员 ', sort: true}
					]],
					done: function (response) {
			               //定位当前table视图
			               var tableView = this.elem.next();
			                //response.data获取后端返回的JSON格式数据
			               $.each(response.data,function (index,item) {
			                    //逻辑判断
			                   if(item.DDBH == "12012321071214"){
			                        //改变TR标签内字体颜色
			                       tableView.find('tbody tr[data-index="'+ index +'"]').css('backgroundColor','#FFCC99');
			                       //tableView.attr('style', 'background:color:red')
			                   }else if(item.DDBH == "12011121021233"){
			                        //改变TR标签内字体颜色
			                       tableView.find('tbody tr[data-index="'+ index +'"]').css('backgroundColor','#66FF99');
			                       //tableView.attr('style', 'background:color:red')
			                   }else if(item.DDBH == "12012221051227"){
			                        //改变TR标签内字体颜色
			                       tableView.find('tbody tr[data-index="'+ index +'"]').css('backgroundColor','#CC6633');
			                       //tableView.attr('style', 'background:color:red')
			                   }else if(item.DDBH == "12012321071218"){
			                        //改变TR标签内字体颜色
			                       tableView.find('tbody tr[data-index="'+ index +'"]').css('backgroundColor','#CCFF33');
			                       //tableView.attr('style', 'background:color:red')
			                   }
			               })
			            },
			    data: data,
			    even: true,
			    page: true 
		    }
    	table.render(ywbd);
		
	});
}

function Layui_SetDataTableRowColor(DivId,RowIndex, Color)
{
    try
    {
    	var table = document.getElementById(DivId);
       
                if (table != null && table.length > 0) {
                    var trs = table[0].querySelectorAll("tr");
                    if (trs != null && trs.length > 0) {
                        trs[RowIndex].style.color = Color;//字体颜色 
                        trs[RowIndex].style.backgroundColor= Color;//背景颜色
                    }
                }
       

    }
    catch(e)
    {
        console.log(e.message);
    }
}


function getnowtime(days) {
    if(days == null){
        days = 0;
    }
    var nowDate = new Date();
    var nowtime = new Date((+nowDate)-days*24*3600*1000);
    var year = nowtime.getFullYear();
    var month = nowtime.getMonth() + 1;
    var day = nowtime.getDate();
    return year + "-" + month + "-" + day
}


function zsm(){
	layer.open({
	    type: 2,
	    title: '追溯码',
	    shadeClose: true,
	    shade: false,
	    maxmin: true, //开启最大化最小化按钮
	    area: ['50%', '100%'],
	    content: "ddgl_zsm.html"
	});
}


