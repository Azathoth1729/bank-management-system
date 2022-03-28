<template>
  <div>
    <template v-if="!isCheck">
      <section>
        <!--工具条-->
        <div class="table_button">
          <el-button type="warning" plain>更新</el-button>
          <el-button @click="exportExcel" type="primary">导出</el-button>
        </div>
        <!--列表-->
        <template>
          <el-table id="rebateSetTable" :data="contacts" highlight-current-row v-loading="loading" style="width: 100%;">
            <el-table-column type="index" width="100"></el-table-column>
            <el-table-column property="name" label="姓名" width="450"></el-table-column>
            <el-table-column property="roleName" label="待确认的权限" width="190"></el-table-column>
            <el-table-column fixed="right" align="right">
              <el-button type="success" slot-scope="scope" round @click.stop.prevent="affirm(scope.row)">确认</el-button>
            </el-table-column>
          </el-table>
        </template>
      </section>
    </template>
  </div>
</template>
<script>
import { request } from "../../network/request";
import XLSX from "xlsx";
import FileSaver from 'file-saver'

export default {
  name: 'ApplyAuth',
  data() {
    return {
      isUpdate: "修改",
      isCheck: false,
      loading: false,
      contacts: [],
      ruleForm: {
        id: 0,
        name: '',
        roleName: '',
      }
    }
  },
  methods: {
    //获取用户认证列表
    getContacts() {
      // 发送请求获取用户申请信息
      let contactList = []
      request({
        url: '/user/authenticationList',
        header:{
          'Content-Type':'multipart/form-data'
        },
      }).then(res => {
        this.contacts = res.data.data;
      });
    },
    affirm(row){
      console.log(row)
      request({
        url: `/user/pass/${row.id}`,
        method: "POST",
        header:{
          'Content-Type':'multipart/form-data'
        }
      }).then(res =>{
        if(res.data.code === 200){
          this.$message({
            type: 'info',
            message: '申请成功！'
          });
          this.getContacts()
        }else {
          this.$message({
            type: 'info',
            message: res.data.msg
          });
        }
      })
    },
    exportExcel () {
      /* generate workbook object from table */
      let wb = XLSX.utils.table_to_book(document.querySelector('#rebateSetTable'));
      /* get binary string as output */
      let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '用户联系人信息表.xlsx');
      } catch (e)
      {
        if (typeof console !== 'undefined')
          console.log(e, wbout)
      }
      return wbout
    },
  },
  created() {
    this.getContacts();
  },
  mounted() {this.getContacts()}
};

</script>

<style scoped>

.toolUser{
  float: right;
  padding-right: 90px;
}

.table_button{
  float: left;
  margin-left: 30px;
}
.table_button button{
  width:100px;
}

.demo-ruleForm{
  position: relative;
  left: 300px;
}

</style>