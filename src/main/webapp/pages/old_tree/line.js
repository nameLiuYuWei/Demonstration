layui.use(['form', 'table'], function () {
    var table = layui.table;

        // console.dir(data.field);
        table.render({
            elem: '#test',
            toolbar: '#toolbarDemo',
            defaultToolbar:[],
            page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
                layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //自定义分页布局
                //,curr: 5 //设定初始在第 5 页
                ,groups: 1 //只显示 1 个连续页码
                ,first: false //不显示首页
                ,last: false //不显示尾页
                
              },
            height:480,
            url: './lineTableData.json',
            parseData: function (res) {
                return {
                    code: res.resultCode, //解析接口状态
                    msg: res.resultMsg, //解析提示文本
                    data: res.resultObj, //解析数据列表
                }
            },
            cellMinWidth: 100, //全局定义常规单元格的最小宽度，layui 2.2.1 新增
            cols: [
                [
               //表格：乡镇、古树数量、平均树龄、 正常数量、衰弱数量、濒危数量、死亡数量  
               //width 支持：数字、百分比和不填写。你还可以通过 minWidth 参数局部定义当前单元格的最小宽度，layui 2.2.1 新增
                    { field: 'xz', title: '乡镇' },
                    { field: 'gssl', title: '古树数量' },
                    { field: 'pjsl', title: '平均树龄' },
                    { field: 'zcsl', title: '正常数量' },
                    { field: 'srsl', title: '衰弱数量' },
                    { field: "bwsl", title: "濒危数量" },
                    { field: "swsl", title: "死亡数量 " }
                ]

                
            ],
        });
    
   

        table.on('toolbar(demo)', function(obj){
            layer.open({
                type: 2,
                title: '图表查看',
                offset: ['30px', '30px'],
                area: ['1300px', '400px'],
                content: './lineChart.html'
            })
          });
   


})
