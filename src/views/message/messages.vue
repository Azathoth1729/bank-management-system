<template>
  <div>
    <template v-if="!isCheck">
      <div class="table_button">
        <el-button type="warning" @click="getInfo" plain>更新</el-button>
        <el-button @click="exportExcel" type="primary">导出</el-button>
      </div>
      <el-table id="rebateSetTable" ref="singleTable" :data="downLoadListData" highlight-current-row @current-change="handleCurrentChange"
                style="width: 100%"
                @row-click="checkInform">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column show-overflow-tooltip="true" property="title" label="标题" width="190"></el-table-column>
        <el-table-column show-overflow-tooltip="true" property="mobile" label="联系方式"></el-table-column>
        <el-table-column show-overflow-tooltip="true" property="content" label="内容"></el-table-column>
        <el-table-column show-overflow-tooltip="true" property="isHurt" label="是否受伤">
          <template v-slot="scope">
            <span v-if="scope.row.isHurt === 1">有人受伤</span>
            <span v-else>无人受伤</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right">
          <template v-slot="scope">
            <el-button type="danger" round @click.stop.prevent="deleteInform(scope.row)">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="float: top; margin-top: 45px;margin-bottom: 50px"
                     background
                     layout="prev, pager, next"
                     :total="tableData.length"
                     :page-size="pageSize"
                     v-model:current-page="currentPage"
                     @current-change="handleCurrentChange(currentPage)">
      </el-pagination>
    </template>
    <el-form v-else :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="通知标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="mobile">
        <el-input v-model="ruleForm.mobile"></el-input>
      </el-form-item>
      <el-form-item label="是否有人受伤" prop="isHurt">
        <el-radio-group  style="width: 200px; display: flex; margin-left: 10px"  v-model="ruleForm.isHurt">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="薪酬" prop="salary">
        <el-input type="number" style="width: 200px; display: flex; margin-left: 0" :rows="10" v-model="ruleForm.salary"></el-input>
      </el-form-item>
      <el-form-item label="通知内容" prop="content">
        <el-input type="textarea" :rows="10" v-model="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button ref="form_btn" type="primary" @click="submitForm('ruleForm')">{{isUpdate}}</el-button>
        <el-button @click="resetForm('ruleForm')">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import {request} from "../../network/request";
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
  name: 'Inform',
  data() {
    return {
      pageSize: 10,
      currentPage: 1,
      isUpdate: "修改",
      isCheck: false,
      tableData: [],
      currentRow: null,
      ruleForm: {
        id: "",
        userId: "",
        longitude: "",
        latitude: "",
        title: "",
        salary: "",
        mennum: "",
        isHurt: 0,
        mobile: "",
        address: "",
        status: "",
        content: ""
      }
    }
  },
  computed:{
    downLoadListData(){
      let pageSize = this.pageSize;
      let currentPage = this.currentPage;
      return this.tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    },
  },
  methods: {
    getInfo(){
      request({
        url: '/assistance/list'
      }).then((res)=>{
        console.log(res.data)
        this.tableData = res.data.data;
      })
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    deleteInform(row){
      this.$confirm('确认删除该通知吗?', '提示', {
        type: 'warning'
      }).then(() => {
        request({
          url: `/assistance/remove/${row.id}`,
          method: 'POST',
          header:{
            'Content-Type':'multipart/form-data'
          },
        }).then((res) => {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getInfo();
        });
      });
    },
    checkInform(row, column,event){
      this.ruleForm.id = row.id;
      this.ruleForm.userId = row.userId;
      this.ruleForm.longitude = row.longitude;
      this.ruleForm.latitude = row.latitude;
      this.ruleForm.title = row.title;
      this.ruleForm.salary = row.salary;
      this.ruleForm.mennum = row.mennum;
      this.ruleForm.isHurt = row.isHurt;
      this.ruleForm.mobile = row.mobile;
      this.ruleForm.address = row.address;
      this.ruleForm.status = row.status;
      this.ruleForm.content = row.content;
      this.currentRow = row;
      this.isCheck=true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.isUpdate === "修改"){
            this.$alert("修改成功！", "", {confirmButtonText: '确定',})
            // 向后台发送修改的请求并返回数据
            request({
              url: '/assistance/update',
              method: 'post',
              data: this.ruleForm
            }).then((res)=>{
              this.$message({
                message: '修改成功!',
                type: 'success'
              });
              this.getInfo()
            })
            this.isCheck=false;
          }else{
            // 向后台发送创建的请求
            this.$alert("创建成功！", "", {confirmButtonText: '确定',})
            request({
              url: '/assistance/addOne',
              method: 'post',
              params:{
                title: formName.name,
                grade: formName.resource,
                content: formName.desc,
                startTime: formName.date1,
                endTime: formName.date2
              }
            }).then(res => {
              this.getInfo()
            })
            this.isCheck=false;
          }
        }else {
          this.$alert('格式错误！', "", {confirmButtonText: '确定',})
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      if(this.isUpdate === "创建"){
        this.isUpdate = "修改";
        this.isCheck=false;
      }else{
        this.ruleForm = formName
        this.isCheck=false;
      }
    },
    createInform(){
      this.isUpdate = "创建";

      Object.keys(this.ruleForm).forEach(key=>{this.ruleForm[key]=''})

      this.isCheck=true;
    },
    handleCurrentChange(currentPage){
      this.currentPage = currentPage
    },
    exportExcel () {
      /* generate workbook object from table */
      let wb = XLSX.utils.table_to_book(document.querySelector('#rebateSetTable'));
      /* get binary string as output */
      let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '物资表.xlsx');
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
    this.getInfo()
  }
}
</script>

<style scoped>

.table_button{
  float: right;
  margin-right: 90px;
}
.table_button button{
  width:100px;
}


</style>