/**
 * Created by soso on 2021/3/6.
 */

$(function () {
    var names = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    var values = ['杨梅卷叶蛾',"杨梅果蝇","杨梅蚧类","白蚁","松毛虫","天牛爆皮虫"];
    tjtb_qx(names,values);
});

function tjtb_qx(names,values) {
    var myChart = echarts.init(document.getElementById("line"));
    var option = {
        title: {
            text: '2020年（单位亩）',
            left: 'left'
        },
        legend: {
            data: values
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: names
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name:"杨梅卷叶蛾",
            data: [0,0,0,10,80,180,550,680,420,30,0,0],
            type: 'line',
            smooth: true
        },{
            name:"杨梅果蝇",
            data: [0,0,0,0,50,220,510,309,188,90,0,0],
            type: 'line',
            smooth: true
        },{
            name:"杨梅蚧类",
            data: [160,120,161,300,450,560,550,530,440,350,220,157],
            type: 'line',
            smooth: true
        },{
            name:"白蚁",
            data: [420,432,570,670,700,780,800,700,770,730,770,620],
            type: 'line',
            smooth: true
        },{
            name:"松毛虫",
            data: [0,0,0,234,590,430,110,20,0,0,0,0],
            type: 'line',
            smooth: true
        },{
            name:"天牛爆皮虫",
            data: [0,0,0,0,130,330,510,409,128,0,0,0],
            type: 'line',
            smooth: true
        }]
    };
    myChart.setOption(option);
}
