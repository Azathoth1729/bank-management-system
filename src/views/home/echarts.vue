<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div ref="chartColumn" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div ref="chartBar" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div ref="chartLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12" style="position: relative; left: -350px">
                <div ref="chartPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="24">
                <a href="" target="_blank" style="float: right;">more>></a>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import * as echarts from 'echarts'
    import {request} from "../../network/request";
    export default {
      name: 'HelpEcharts',
        data() {
            return {
                chartColumn: null,
                chartBar: null,
                chartLine: null,
                chartPie: null
            }
        },
        methods: {
            drawColumnChart() {
              let tableData = [];
              request({
                url: '/rescue/list',
                header:{
                  'Content-Type':'multipart/form-data'
                }
              }).then((res) => {
                tableData = res.data.data;
                let map = new Map;
                for(let i = 0; i < tableData.length; i++){
                  let str = tableData[i].createTime.substr(0, 4)
                  if(!map.has(str)){
                    map.set(str, 1)
                  }else{
                    let temp = map.get(str)
                    temp ++;
                    map.set(str, temp)
                  }
                }
                let time = []
                let people = []
                for(let item of map){
                  time.push(item[0])
                  people.push(item[1])
                }
                this.chartColumn = echarts.init(this.$refs.chartColumn);
                this.chartColumn.setOption({
                  title: { text: '救援历年概览', subtext: "        (人)"},
                  tooltip: {},
                  xAxis: {
                    data: time
                  },
                  yAxis: {},
                  series: [{
                    name: '救援次数',
                    type: 'bar',
                    data: people
                  }]
                });
              });
            },
            drawBarChart() {
                let tableData = []
                request({
                  url: '/rescue/list',
                  header:{
                    'Content-Type':'multipart/form-data'
                  }
                }).then((res) => {
                  if(res.data.code === 200){
                    let y = ['2021', '2020']
                    tableData = res.data.data;
                    let data1 = [0, 0, 0, 0, 0, 0]
                    let data2 = [0, 0, 0, 0, 0, 0]
                    for(let i = 0; i < tableData.length; i++){
                      let year = tableData[i].createTime.substr(0,4);
                      if(year === y[0]){
                        data1[tableData[i].status] ++;
                        data1[5] ++;
                      }else if(year === y[1]){
                        data2[tableData[i].status] ++;
                        data2[5] ++;
                      }
                    }
                    this.chartBar = echarts.init(this.$refs.chartBar);
                    this.chartBar.setOption({
                      title: {
                        text: '最近两年救援事件比较',
                        subtext: '数据来自网络',
                      },
                      tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                          type: 'shadow'
                        }
                      },
                      legend: {
                        data: ['2020年', '2021年']
                      },
                      grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                      },
                      xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                      },
                      yAxis: {
                        type: 'category',
                        data: ['一级救援事件', '二级救援事件', '三级救援事件', '四级救援事件', '五级救援事件', '总救援事件(件)']
                      },
                      series: [
                        {
                          name: '2020年',
                          type: 'bar',
                          data: data2
                        },
                        {
                          name: '2021年',
                          type: 'bar',
                          data: data1
                        }
                      ]
                    });
                  }else{
                    this.$message({
                      type: 'info',
                      message: '获取失败！'
                    });
                  }
                });
            },
            drawLineChart() {
                // this.chartLine = echarts.init(this.$refs.chartLine);
                // this.chartLine.setOption({
                //     title: {
                //         text: '近年紧急救援概览',
                //         subtext: '数据来自网络',
                //     },
                //     tooltip: {
                //         trigger: 'axis'
                //     },
                //     legend: {
                //         data: ['中国东北', '中国西北', '中国南海']
                //     },
                //     grid: {
                //         left: '3%',
                //         right: '4%',
                //         bottom: '3%',
                //         containLabel: true
                //     },
                //     xAxis: {
                //         type: 'category',
                //         boundaryGap: false,
                //         data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
                //     },
                //     yAxis: {
                //         type: 'value'
                //     },
                //     series: [{
                //             name: '中国东北',
                //             type: 'line',
                //             stack: '总量',
                //             data: [120, 132, 101, 134, 90, 230, 210]
                //         },{
                //             name: '中国西北',
                //             type: 'line',
                //             stack: '总量',
                //             data: [220, 182, 191, 234, 290, 330, 310]
                //         },{
                //             name: '中国南海',
                //             type: 'line',
                //             stack: '总量',
                //             data: [250, 270, 298, 330, 360, 387, 412]
                //         }
                //     ]
                // });
            },
            drawPieChart() {
              //获取物资列表
                let materials = [];
                request({
                      url: '/material/list',
                      header:{
                        'Content-Type':'multipart/form-data'
                      }
                    })
                    .then((res) => {
                    materials = res.data.data;
                    let materialsName = []
                    for(let i = 0; i < materials.length; i++){
                      materialsName.push(materials[i].name)
                    }
                    let materialsData = []
                    for(let i = 0; i < materials.length; i++){
                      materialsData.push({value: materials[i].quantity, name: materials[i].name})
                    }
                    this.chartPie = echarts.init(this.$refs.chartPie);
                    this.chartPie.setOption({
                      title: {
                        text: '物资存储',
                        subtext: '数据来自网络',
                        x: 'center'
                      },
                      tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                      },
                      legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: materialsName
                      },
                      series: [
                        {
                          name: '访问来源',
                          type: 'pie',
                          radius: '55%',
                          center: ['50%', '60%'],
                          data: materialsData,
                          itemStyle: {
                            emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                          }
                        }
                      ]
                    });
                });
            },
            drawCharts() {
                this.drawColumnChart()
                this.drawBarChart()
                this.drawLineChart()
                this.drawPieChart()
            },
        },

        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    .chart div {
        height: 400px;
        float: left;
    }
    .el-col {
        padding: 30px 20px;
    }
</style>
