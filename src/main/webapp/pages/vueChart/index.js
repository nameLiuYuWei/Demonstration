const {
    Line,Column,Pie,Bar
} = G2Plot;

//axios.defaults.baseURL='http://127.0.0.1:8080/Demonstration';
axios.defaults.baseURL='/Demonstration';
Vue.prototype.axios=axios ;
new Vue({
    el: "#app",
    data: {
        
        columnPlot: null,//图标实例
        list: null,//图标数据
        gzdtDatas:[//工作动态
            {time:"2021-03-02",text:"广告费和业务宣传费支出企业税前扣除有关政策"},
            {time:"2021-03-03",text:"中国经济社会发展取得历史成就"},
            {time:"2021-03-04",text:"纳税人提供电影放映服务取得的收入免征增值税"},
            {time:"2021-03-05",text:"2020年3月20日起，部分产品出口退税率提高"},
            {time:"2021-03-06",text:"2020年小型微利企业所得税延缓缴纳政策"},
            {time:"2021-03-08",text:"小额贷款公司取得的农户小额贷款利息收入的增值税、所得税优惠政策延长实施期限"}],
        fply:{
            title:"发票领用",
            num:"65529",
            bfb:62
        },

      
        pjsy:{
            title:"票据使用",
            num:"15520",
            bfb:63
        },
//==============================
        fpkj:{
          title:"发票领用",
          num:"65529",
          bfb:30
      },
      pjkj:{
          title:"票据使用",
          num:"15520",
          bfb:93
      },
//=============================
zdfply:{
  title:"重点领域发票领用",
  num:"45678",
  bfb:88
},

zdpjly:{
  title:"重点领域票据领用",
  num:"6511",
  bfb:65
},
    //333333333333333  
        baoxiao:{
            num:"15520",
            bfl:63
        }  ,
        gd:{
          num:"65510",
          bfl:89
      }  ,
      zdjs:{
        num:"510",
        bfl:76
    }     
    },
    
    contextPath:"/Demonstration",
    created() {

    },
    mounted() {
    	this.renderBar();
//    	this.renderPie();
      this.renderLine();
//         this.renderColum();

    },
    methods: {
    	renderBar(){


    	      axios.get('/sum/getColumnChartData.do')
    	                .then(function (response) {
    	                 

    	                  var bar = new Bar(document.getElementById('container'), {
    	                    data:  response.data.resultObj,
    	                    xField: 'hs',
    	                    yField: 'mc',
//    	                    seriesField: 'mc',
    	                    legend: {
    	                        position: 'top-left',
    	                      },
    	                    height:150,
    	                    
    	                   /* xAxis: {
    	                        
    	                      max:20000000

    	                    },*/
 
    	                    animation: {
    	                      // 配置图表第一次加载时的入场动画
    	                      appear: {
    	                        animation: 'scale-in-x', // 动画效果
    	                        duration: 1000,  // 动画执行时间
    	                      }
    	                    }
    	                  });
    	            
    	                  bar.render();
    	                   
    	                });
    	        
    	},
    	
    	
    	
//       =====================柱状图======================================
        renderColum() {

      axios.get('/sum/getColumnChartData.do')
                .then(function (response) {
                 

                  columnPlot = new Column(document.getElementById('container'), {
                    data:  response.data.resultObj,
                    xField: 'zbmc',
                    yField: 'kjhs',
                    height:150,
                    color: '#2691F3',
                    columnStyle: {
                      fillOpacity:0.8
                    },
                    yAxis: {
                    
//                      max:100

                    },
                    minColumnWidth: 50,
                    maxColumnWidth: 50,

                    animation: {
                      // 配置图表第一次加载时的入场动画
                      appear: {
                        animation: 'scale-in-y', // 动画效果
                        duration: 1000,  // 动画执行时间
                      }
                    }
                  });
            
                columnPlot.render();
                   
                });
        },

//      =====================柱状图======================================
       


        renderLine(){
          axios.get('/sum/getLineChartData.do')
          .then(function (response) {

            const linePlot = new Line(document.getElementById('containerLine'), {
              data:  response.data.resultObj,
              xField: 'ny',
              yField: 'wcl',
              seriesField: 'pzlx_mc',
            
              height:150,
              smooth: true,
              // @TODO 后续会换一种动画方式
              animation: {
                appear: {
                  animation: 'path-in',
                  duration: 3000,
                },
              },
            });

            linePlot.render();
          });
          
         
        },

        //请求
        renderPie(){

            axios.get('/sum/getPieChartData.do')
          .then(function (response) {
            const piePlot = new Pie(document.getElementById('containerPie'), {
              data:  response.data.resultObj,
              appendPadding: 10,
              angleField: 'kjhs',
              colorField: 'zbmc',
              radius: 0.9,
              height:160,
              interactions: [{ type: 'element-active' }],
            });
            
            piePlot.render();
          })
         
        },
        addItem() {
            this.list.push({
                "type": "家庭清洁",
                "sales": 68
              })
            this.columnPlot.update({
                data: this.list,
                xField: 'year',
                yField: 'value',
            });
        }

    },
    components: {

    }
});
