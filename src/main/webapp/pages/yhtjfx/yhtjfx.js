$(function () {  
	init();
});

function init(){

	layui.use(['form','table','laydate','element'], function(){
			
		var laydate = layui.laydate;
        laydate.render({
            elem: '#sjq',
            type: 'year',
			/* ready和change函数是为了实现选择年份时不用点确定直接关闭  */
            ready: function(date){ // 控件在打开时触发，回调返回一个参数：初始的日期时间对象
                initYear = date.year;
            },
            btns : [ 'confirm' ],
            value : new Date().getFullYear(),
            min : (new Date().getFullYear() - 10) + '-1-1',
            max : (new Date().getFullYear() + 10) + '-1-1',
            change: function(value, date, endDate){ // 年月日时间被切换时都会触发。回调返回三个参数，分别代表：生成的值、日期时间对象、结束的日期时间对象
                var selectYear = date.year;
                var differ = selectYear-initYear;
                if (differ != 15 && differ != -15) {
                    if($(".layui-laydate").length){
                        $("#sjq").val(value);
                        $(".layui-laydate").remove();
                    }
                }
                initYear = selectYear;
            }
        });
        var data = [{"XM" : "吴宝福","ZZZWMC" : "东魁杨梅","ZZDZ" : "下叶村","ZZMJ" : "250", "YJCL" : "70000","YJXSJE" : "560000","YXSL" : "10000","YXSJE" : "80000"},
        			{"XM" : "陈娅萍","ZZZWMC" : "东魁杨梅","ZZDZ" : "板苍村","ZZMJ" : "700","YJCL" : "22500","YJXSJE" : "200000","YXSL" : "11250","YXSJE" : "100000"},
        			{"XM" : "吴志美","ZZZWMC" : "东魁杨梅","ZZDZ" : "下叶村","ZZMJ" : "50","YJCL" : "20000","YJXSJE" : "300000","YXSL" : "10000","YXSJE" : "150000"},
        			{"XM" : "朱焕彩","ZZZWMC" : "东魁杨梅", "ZZDZ" : "下叶村", "ZZMJ" : "100","YJCL" : "20000","YJXSJE" : "240000","YXSL" : "5000","YXSJE" : "60000"},
        			{"XM" : "胡凤台","ZZZWMC" : "东魁杨梅", "ZZDZ" : "下叶村","ZZMJ" : "180", "YJCL" : "50000", "YJXSJE" : "400000", "YXSL" : "20000", "YXSJE" : "160000"},
        			{"XM" : "沈春芳","ZZZWMC" : "东魁杨梅","ZZDZ" : "坑口垟村","ZZMJ" : "50","YJCL" : "40000","YJXSJE" : "560000","YXSL" : "10000","YXSJE" : "140000"},
        			{"XM" : "胡锦水","ZZZWMC" : "东魁杨梅","ZZDZ" : "石井村","ZZMJ" : "30","YJCL" : "20000","YJXSJE" : "200000","YXSL" : "10000","YXSJE" : "100000"},
        			{"XM" : "吴伟平","ZZZWMC" : "东魁杨梅","ZZDZ" : "大方垟村","ZZMJ" : "90","YJCL" : "30000","YJXSJE" : "300000","YXSL" : "20000","YXSJE" : "200000"},
        			{"XM" : "王国华","ZZZWMC" : "东魁杨梅", "ZZDZ" : "黄龙村", "ZZMJ" : "90","YJCL" : "30000","YJXSJE" : "240000","YXSL" : "10000","YXSJE" : "80000"},
        			{"XM" : "赵将根","ZZZWMC" : "东魁杨梅", "ZZDZ" : "西炉村","ZZMJ" : "120", "YJCL" : "50000", "YJXSJE" : "400000", "YXSL" : "10000", "YXSJE" : "80000"}
        			]
        var table = layui.table;
	  	var element = layui.element;
	  	var ywbd= {	  
			    elem: '#ywbd',
			    cols: [[  
					       {field:'XM', width: 100, title: '姓名', sort: true}
					      ,{field:'ZZZWMC', width: 180, title: '种植作物名称 ', sort: true}
					      ,{field:'ZZDZ', width: 180, title: '种植地址', sort: true}
					      ,{field:'ZZMJ', width: 160, title: '种植面积(亩)', sort: true}
					      ,{field:'YJCL', width: 160, title: '预计产量(公斤) ', sort: true}
					      ,{field:'YJXSJE', width: 160, title: '预计销售金额(元)', sort: true}
					      ,{field:'YXSL', width: 160, title: '已销售量(公斤)', sort: true }
					      ,{field:'YXSJE', width: 160, title: '已销售金额(元)', sort: true}
					]],
			    data: data,
			    even: true,
			    page: true 
		    }
    	table.render(ywbd);
		
	    
	});
}

