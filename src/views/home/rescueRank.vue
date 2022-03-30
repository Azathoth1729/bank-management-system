<template>
  <div>
      <div class="table_button">
        <el-button type="warning" plain @click="updateInfo">更新</el-button>
        <el-button @click="exportExcel" type="primary">导出</el-button>
      </div>
      <el-table id="rebateSetTable" ref="singleTable" :data="downLoadListData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="name" label="用户名" width="200" :formatter="getUsername"></el-table-column>
        <el-table-column property="published" label="发布日期" width="200" ></el-table-column>
        <el-table-column label="救援地点" width="400" :formatter="getLocation"></el-table-column>
        <el-table-column fixed="right"><el-button type="danger" round @click.stop.prevent="deleteInform">移除</el-button></el-table-column>
      </el-table>
      <el-pagination style="float: top; margin-top: 45px;margin-bottom: 50px"
                     background
                     layout="prev, pager, next"
                     :total="tableData.length"
                     :page-size="pageSize"
                     :current-page.sync="currentPage"
                     @current-change="handleCurrentChange(currentPage)">
      </el-pagination>
  </div>
</template>

<script>
import {request} from "../../network/request"
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
  name: 'Inform',
  data() {
    return {
      pageSize: 10,
      currentPage: 1,
      tableData: [],
      user: [],
      currentRow: null,
    }
  },
  computed:{
    downLoadListData(){
      let pageSize = this.pageSize;
      let currentPage = this.currentPage;
      return this.tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    }
  },
  methods: {
    getInfo() {
      this.tableData = []
      request({
        url: '/rescue/list',
        header:{
          'Content-Type':'multipart/form-data'
        }
      }).then((res) => {
        console.log(res.data)
        if(res.data.code === 200){
          this.tableData = res.data.data;
        }else{
          this.$message({
            type: 'info',
            message: '获取失败！'
          });
        }
      });
    },
    // 查询用户
    getUser: function() {
      request({url: '/user/userList'}).then((res)=>{
        this.user = res.data.data;
      })
    },
    getLocation: function (row, column){
      // 根据经纬度返回具体位置
      return "经纬度：" + "（" +  row.longitude + " ，" + row.latitude + "）";
    },
    getUsername: function (row, column){
      for(let i = 0; i < this.user.length; i++){
        if(row.userId === this.user[i].id){
          return this.user[i].name + row.userId
        }
      }
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    deleteInform(row){
      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      }).then(() => {
        request({
          url: `/rescue/remove/${row.id}`,
          header:{
            'Content-Type':'multipart/form-data'
          }
        }).then((res)=>{
          // console.log(res.data)
          this.getInfo();
        })
      });
    },
    handleCurrentChange(){
    },
    updateInfo(){
      this.getInfo();
    },
    exportExcel () {
      /* generate workbook object from table */
      let wb = XLSX.utils.table_to_book(document.querySelector('#rebateSetTable'));
      /* get binary string as output */
      let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '救援信息表.xlsx');
      } catch (e)
      {
        if (typeof console !== 'undefined')
          console.log(e, wbout)
      }
      return wbout
    },
  },
  filters: {
    formatDate (time) {
      var date = new Date(time);
      var year = date.getFullYear();
      var month = padDate(date.getMonth() + 1);
      var day = padDate(date.getDate());
      return year + '-' + month + '-' + day;
    }
  },
  mounted() {
    this.getInfo();
    this.getUser();
  }
}
</script>

<style scoped>

.table_button{
  float: left;
  margin-left: 30px;
}
.table_button button{
  width:100px;
}

</style>