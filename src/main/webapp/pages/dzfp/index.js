const {
    Line,Column,Pie,Bar
} = G2Plot;

axios.defaults.baseURL='/Demonstration';
Vue.prototype.axios=axios ;
new Vue({
    el: "#app",
    data: {},
    created() {

    },
    mounted() {
    	this.renderBar();
      this.renderLine();

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
    	                    
    	                    legend: {
    	                  	  layout: 'vertical',
    	                  	  position: 'right'
    	                  	},
    	                  	
    	                  
    	                    
    	                    xAxis: {
    	                        
    	                    	tickCount:10

    	                    },
 
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
    	
    	
    	
        renderLine(){
          axios.get('/sum/getLineChartData.do')
          .then(function (response) {

            const linePlot = new Line(document.getElementById('containerLine'), {
              data:  response.data.resultObj,
              xField: 'ny',
              yField: 'wcl',
              seriesField: 'pzlx_mc',
              legend: {
            	  layout: 'vertical',
            	  position: 'right'
            	},
              height:150,
              width:300,
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
