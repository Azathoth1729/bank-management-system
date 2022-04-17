<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="username" label="用户名" width="180" />
    <el-table-column prop="credits" label="信誉分" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="primary" @click="handleEdit(scope.row)"
          >修改</el-button
        >
        <el-button size="small" type="danger" @click="handleDelete(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <el-button type="success" class="done-btn" @click="handleSubmit">
    提交
  </el-button>

  <el-button type="primary" class="done-btn" @click="handleAdd">
    添加用户
  </el-button>

  <!-- 编辑弹出框 -->
  <el-dialog v-model="editVisible" title="修改信息" width="30%">
    <el-form label-width="70px">
      <el-form-item label="id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="信誉分">
        <el-input v-model="form.credits"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="editVisible = false">取消</el-button>
        <el-button type="primary" @click="saveEdit"> 提交 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from "vue";
import { getUserById } from "../assets/data/users";

const props = defineProps({
  data: {
    type: Object,
  },
});

const editVisible = ref(false);
const currentId = ref(-1);

const form = reactive({
  id: "",
  username: "",
  credits: "",
});

const handleEdit = (row) => {
  currentId.value = row.id;
  Object.keys(form).forEach((item) => {
    form[item] = row[item];
  });
  editVisible.value = true;
};

const handleDelete = (row) => {}; //调后端函数实现, 这里的row代表当前行的数据

const saveEdit = () => {
  // 需要调用后端
  editVisible.value = false;

  const user = getUserById(currentId.value);

  Object.keys(form).forEach((item) => {
    user[item] = form[item];
  });
};

const handleAdd = () => {}; // 调后端函数实现
const handleSubmit = () => {}; //调后端函数实现
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
