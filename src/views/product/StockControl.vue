<template>
    <section>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="number"
            label="产品编号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="payed"
            label="已购买数"
            sortable
            width="180">
            </el-table-column>
            <el-table-column
            prop="remain"
            label="剩余可买"
            sortable
            width="180">
            </el-table-column>
            <el-table-column
            prop="maxpay"
            label="个人最多可买"
            sortable
            width="180">
            </el-table-column>
            <el-table-column label="操作" width="">
                <template slot-scope="scope">
                <el-row>
                    <el-input class="num" v-model.number="scope.row.input" placeholder="请输入内容"></el-input>
                    <el-button 
                        type="primary" 
                        round 
                        class="cal" 
                        @click="Add(scope.row.number)">添加库存</el-button>
                    <el-button 
                        type="success" 
                        round 
                        class="cal" 
                        @click="Sub(scope.row.number)">减少库存</el-button>
                </el-row>
                </template>
            </el-table-column>
        </el-table>
        <!-- <span>{{input}}</span> -->
  </section>
</template>

<script>
  export default {
    name: 'StockControl',
    data() {
      return {
        tableData: [{
          input: 0,
          number: '235611231',
          name: '大秦科技基金',
          payed: 2516548,
          remain: 548632,
          maxpay: '10'
        },{
          input: 0,
          number: '235611232',
          name: '大秦科技基金',
          payed: 2516548,
          remain: 548632,
          maxpay: '10'
        },{
          input: 0,
          number: '235611233',
          name: '大秦科技基金',
          payed: 2516548,
          remain: 548632,
          maxpay: '10'
        },{
          input: 0,
          number: '235611234',
          name: '大秦科技基金',
          payed: 2516548,
          remain: 548632,
          maxpay: '10'
        },{
          input: 0,
          number: '235611235',
          name: '大秦科技基金',
          payed: 2516548,
          remain: 548632,
          maxpay: '10'
        },{
          input: 0,
          number: '235611236',
          name: '大秦科技基金',
          payed: 2516548,
          remain: 548632,
          maxpay: '10'
        }]
      }
    },
    methods: {
        Add(r) {
            for(let i = 0; i<this.tableData.length; i++){
                if(this.tableData[i].number === r){
                    this.tableData[i].remain += this.tableData[i].input
                    break
                }
            }
        },
        Sub(r){
            for(let i = 0; i<this.tableData.length; i++){
                if(this.tableData[i].number === r){
                    this.tableData[i].remain -= this.tableData[i].input
                    if(this.tableData[i].remain<0)    
                        this.tableData[i].remain = 0
                    break
                }
            }
        }
    }
  }
</script>

<style>
    .num{
        margin-bottom: 5px;
    }
    .cal{
        margin-left:0px;
    }
</style>

