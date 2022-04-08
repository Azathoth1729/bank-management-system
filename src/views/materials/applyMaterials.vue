<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0;">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
          <el-button type="primary" @click="getMaterials">更新</el-button>
          <el-button @click="exportExcel" type="primary">导出</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table id="rebateSetTable" :data="materials" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="applicationDate" label="申请日期" width="200" sortable></el-table-column>
      <el-table-column prop="name" label="姓名" width="100" sortable></el-table-column>
      <el-table-column prop="age" label="年龄" width="90" sortable></el-table-column>
      <el-table-column prop="mobile" label="联系方式" width="150" sortable></el-table-column>
      <el-table-column prop="materialName" label="物资名" width="200" sortable></el-table-column>
      <el-table-column prop="quantity" label="数量" width="200" sortable></el-table-column>
      <el-table-column label="操作" width="150" fixed="right">
        <template v-slot="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--工具条-->
    <el-col :span="24" class="toolbar footer-tool">
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;"></el-pagination>
    </el-col>

    <!--编辑界面-->
    <el-dialog title="编辑" :visible="editFormVisible" v-model="editFormVisible" :show-close="false">
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="identity">
          <el-input v-model="editForm.identity" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="mobile">
          <el-input v-model="editForm.mobile" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="editForm.age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="物资名" prop="materialName">
          <el-input v-model="editForm.materialName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="quantity">
          <el-input v-model="addForm.quantity" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>

    <!--新增界面-->
    <el-dialog title="新增" :visible="addFormVisible" v-model="addFormVisible" :show-close="false">
      <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="identity">
          <el-input v-model="addForm.identity" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="mobile">
          <el-input v-model="addForm.mobile" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="addForm.age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="物资名" prop="materialName">
          <el-input v-model="addForm.materialName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="quantity">
          <el-input v-model="addForm.quantity" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import {request} from "../../network/request"
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
  name: 'ApplyMaterials',
  data() {
    return {
      materials: [],
      total: 0,
      page: 1,
      listLoading: false,
      sels: [],        //列表选中列

      editFormVisible: false,          //编辑界面是否显示
      editLoading: false,
      editFormRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        identity: [
          { required: true, message: '请输入身份信息', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        age: [
          { required: false, message: '请输入年龄', trigger: 'blur' }
        ],
        materialName: [
          { required: true, message: '请输入物资名', trigger: 'blur' }
        ],
        quantity:[
          { required: true, message: '请输入物资数量', trigger: 'blur' }
        ]
      },
      //编辑界面数据
      editForm: {
        id: 0,
        name: '',
        identity: '',
        mobile: '',
        age: 0,
        materialName: '',
        quantity: 0
      },

      addFormVisible: false,        //新增界面是否显示
      addLoading: false,
      //新增界面数据
      addForm: {
        name: '',
        identity: '',
        mobile: '',
        age: 0,
        materialName: '',
        quantity: 0
      },
      addFormRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        identity: [
          { required: true, message: '请输入身份信息', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        age: [
          { required: false, message: '请输入年龄', trigger: 'blur' }
        ],
        materialName: [
          { required: true, message: '请输入物资名', trigger: 'blur' }
        ],
        quantity:[
          { required: true, message: '请输入物资数量', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    //获取申请信息列表
    getMaterials() {
      this.listLoading = true;
      this.materials = []
      request({url: '/apply/list'}).then((res) => {
        if(res.data.code === 200){
          this.materials = res.data.data;
          this.listLoading = false;
        }else{
          this.$message({
            type: 'info',
            message: '获取失败！'
          });
        }
      });
    },
    //删除
    handleDel: function (index, row) {
      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      }).then(() => {
        request({
          url: `/apply/remove/${row.id}`,
          method: 'POST'
        }).then(()=>{
          this.getMaterials();
        })
      });
    },
    //显示编辑界面
    handleEdit: function (index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
    },
    //显示新增界面
    handleAdd: function () {
      this.addFormVisible = true;
      this.addForm = {
        name: '',
        identity: '',
        mobile: '',
        age: 0,
        materialName: '',
        quantity: 0
      };
    },
    //编辑
    editSubmit: function () {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.editLoading = true;
              request({
                url: '/apply/update',
                method: 'post',
                data: this.editForm
              }).then((res) => {
                this.editLoading = false;
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.$refs['editForm'].resetFields();
                this.editFormVisible = false;
                this.getMaterials();
              });
          });
        }
      });
    },
    //新增
    addSubmit: function () {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.addLoading = true;
            request({
              url: '/apply/addOne',
              method: 'POST',
              data: this.addForm
            }).then((res) => {
              this.addLoading = false;
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.$refs['addForm'].resetFields();
              this.addFormVisible = false;
              this.getMaterials();
            });
          });
        }else{
          this.$message({
            message: '格式不符',
            type: 'Fail'
          });
        }
      });
    },
    selsChange: function (sels) {
      this.sels = sels;
    },
    handleCurrentChange(){},
    exportExcel () {
      /* generate workbook object from table */
      let wb = XLSX.utils.table_to_book(document.querySelector('#rebateSetTable'));
      /* get binary string as output */
      let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '物资申请表.xlsx');
      } catch (e)
      {
        if (typeof console !== 'undefined')
          console.log(e, wbout)
      }
      return wbout
    },
  },
  mounted() {
    this.getMaterials();
  }
}
</script>

<style scoped>

.footer-tool{
  display: flex;
  margin-top: 20px;
}

</style>