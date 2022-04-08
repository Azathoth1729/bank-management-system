<template>
  <div>
    <template v-if="!isCheck">
      <div class="table_button">
        <el-button type="primary" @click="createInform" plain>创建</el-button>
        <el-button type="warning" @click="getInfo" plain>更新</el-button>
        <el-button @click="exportExcel" type="warning">导出</el-button>
      </div>
      <el-table id="rebateSetTable" ref="singleTable" :data="downLoadListData" highlight-current-row @current-change="handleCurrentChange"
          style="width: 100%"
          @row-click="checkInform">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="startTime" label="日期" width="200" ></el-table-column>
        <el-table-column property="title" :show-overflow-tooltip="true" label="标题" width="200"></el-table-column>
        <el-table-column property="content" :show-overflow-tooltip="true" label="内容"></el-table-column>
        <el-table-column label="操作" fixed="right">
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
    <el-form v-else :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="通知标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" required>
        <el-col :span="11">
          <el-form-item prop="startTime">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.startTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="结束时间" required>
        <el-col :span="11">
          <el-form-item prop="endTime">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.endTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="通知等级" prop="grade">
        <el-radio-group v-model="ruleForm.grade">
          <el-radio label="1">一级通知</el-radio>
          <el-radio label="2">二级通知</el-radio>
          <el-radio label="3">三级通知</el-radio>
          <el-radio label="4">四级通知</el-radio>
          <el-radio label="5">五级通知</el-radio>
        </el-radio-group>
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
import XLSX from "xlsx";
import FileSaver from 'file-saver'

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
        id: 0,
        title: '',
        startTime: '',
        endTime: '',
        grade: '',
        content: '',
        status: 1
      },
      rules: {
        title: [
          { required: true, message: '请输入标题名称', trigger: 'blur' }
        ],
        startTime: [
          {  required: true, message: '请选择发布日期', trigger: 'change' }
        ],
        endTime: [
          {  required: true, message: '请选择结束日期', trigger: 'change' }
        ],
        grade: [
          { required: true, message: '请选择通知等级', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请填写通知内容', trigger: 'blur' }
        ]
      }
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
    getInfo(){
      request({
        url: '/notice/allNotice',
        header:{
          'Content-Type':'multipart/form-data'
        },
      }).then((res)=>{
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
          url: `/notice/remove/${row.id}`,
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
      this.isUpdate = '修改'
      this.ruleForm.id = row.id
      this.ruleForm.title = row.title;
      this.ruleForm.grade = row.grade;
      this.ruleForm.endTime = row.endTime;
      this.ruleForm.startTime = row.startTime;
      this.ruleForm.content = row.content;
      this.ruleForm.status = row.status;
      this.currentRow = row;
      this.isCheck=true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.isUpdate === "修改"){
            // 向后台发送修改的请求并返回数据
            request({
              url: '/notice/edit',
              method: 'POST',
              data: this.ruleForm,
              headers:{
                'Content-Type':'application/json'
              }
            }).then((res)=>{
              this.$message({
                type: 'info',
                message: '修改成功！'
              });
              this.getInfo()
            })
            this.isCheck=false;
          }else{
            // 向后台发送创建的请求
            this.$alert("创建成功！", "", {confirmButtonText: '确定',})
            request({
              url: '/notice/addOne',
              headers:{
                'Content-Type':'application/json'
              },
              method: 'POST',
              data: this.ruleForm
            }).then(res => {
              this.$message({
                type: 'info',
                message: '创建成功！'
              });
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
        this.ruleForm.title = '';
        this.ruleForm.startTime = '';
        this.ruleForm.endTime = '';
        this.ruleForm.grade = '';
        this.ruleForm.content = '';
        this.isCheck=false;
      }
    },
    createInform(){
      this.isUpdate = "创建";
      this.ruleForm.title='';
      this.ruleForm.startTime='';
      this.ruleForm.endTime='';
      this.ruleForm.grade='';
      this.ruleForm.content='';

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
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '通告表.xlsx');
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
  float: left;
  margin-left: 30px;
}
.table_button button{
  width:100px;
}

</style>