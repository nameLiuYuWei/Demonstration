layui.use(['form', 'layedit', 'laydate', 'table'], function () {
    var table = layui.table;
    var form = layui.form;
    var laydate = layui.laydate;

    var $ = layui.jquery;
    form.render('select');

   
    
   

    laydate.render({
        elem: '#dateEnd',
    })

    laydate.render({
        elem: '#dateStart',
    })

    form.on('submit(query)', function (data) {
        // console.dir(data.field);
        table.render({
            elem: '#test',
            page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
                layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //自定义分页布局
                //,curr: 5 //设定初始在第 5 页
                ,groups: 1 //只显示 1 个连续页码
                ,first: false //不显示首页
                ,last: false //不显示尾页
                
              },
            height:450,
            url: './positionTableData.json',
            parseData: function (res) {
                return {
                    code: res.resultCode, //解析接口状态
                    msg: res.resultMsg, //解析提示文本
                    data: res.resultObj, //解析数据列表
                }
            },
            cellMinWidth: 60, //全局定义常规单元格的最小宽度，layui 2.2.1 新增
            cols: [
                [
                 
               //width 支持：数字、百分比和不填写。你还可以通过 minWidth 参数局部定义当前单元格的最小宽度，layui 2.2.1 新增
                 //width 支持：数字、百分比和不填写。你还可以通过 minWidth 参数局部定义当前单元格的最小宽度，layui 2.2.1 新增
               { field: 'bh', title: '编号',minWidth:160},
               { field: 'gsjb', title: '古树级别', width:80 },
               { field: 'sl', title: '树龄' ,width:60 },
               { field: 'jd', title: '经度' ,width:80 },
               { field: 'wd', title: '纬度' ,width:80 },
               { field: "hb", title: "海拔",width:60  },
               { field: "sfch", title: "虫害",width:80  },
               { field: "dlwz", title: "地理位置",  minWidth:300 },
                    {
                        fixed: 'right',
                        title:"操作",
                        width: 260,
                        align: 'center',
                        toolbar: '#barDemo',
                    },
                ],
            ],
        })
    
        return false
    })

    form.val('queryParamForm', {
        //formTest 即 class="layui-form" 所在元素属性 lay-filter="" 对应的值
        dateStart: '2021-03-01',
        dateEnd: '2021-03-30',
    })

   
    table.on('tool(demo)', function (obj) {
        var data = obj.data
        if (obj.event === 'detail') {
            layer.open({
                type: 2,
                title: '查看古树详情',
                offset: ['50px', '50px'],
                area: ['1200px', '500px'],
                content: '../gsmm/gsmmdj.html?ckgs=001'
            }); 

           // $("#menu252", window.parent.document).click();

            
        } else if (obj.event === 'edit') {
            // layer.alert('编辑行：<br>' + JSON.stringify(data))
            //modifyForm
            layer.open({
                type: 2,
                title: '查看古树位置',
                offset: ['50px', '50px'],
                area: ['1000px', '500px'],
                content: './position.html'
            })
        }
    })


})
