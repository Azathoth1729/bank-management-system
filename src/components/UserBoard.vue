<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="name" label="用户名" width="180" />
    <el-table-column prop="identity" label="身份证" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="danger" @click="handleDelete(scope.row)"
          >删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="add-user-form">
    <el-form :inline="true" :model="form">
      <el-form-item label="id">
        <el-input v-model.number="userId" placeholder="请输入用户id" />
      </el-form-item>
      <el-form-item v-if="props.listname === blacklist" label="黑名单编号">
        <el-input v-model.number="tableNumber" placeholder="请输入黑名单编号" />
      </el-form-item>
    </el-form>
    <el-button size="small" type="primary" @click="handleAdd">添加</el-button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { getUserById } from "../assets/data/users";

import service, { fetchData, postData, directFetch } from "../network/request";

const props = defineProps({
  listname: {
    type: String,
  },
  index: {
    type: Number,
  },
});

const editVisible = ref(false);
const currentId = ref(-1);

const userId = ref("");
const tableNumber = ref("");

const state = reactive({
  responseData: [],
});

onMounted(() => {
  const url =
    props.listname === "blacklist"
      ? `/${props.listname}/all/${props.index}`
      : `/${props.listname}/all`;

  // console.log("url for fetch list is:", props.listname);
  fetchData(
    {
      url: url,
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    },
    state
  );
});

const list = computed(() => state.responseData);

const handleAdd = async () => {
  const config = {
    url: `/blacklist/userInfoByid/${userId.value}`,
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  };

  const res = await service(config);
  const addUser = res.data.data;
  // console.log("atrer", addUser);

  addUser.tableNumber = tableNumber.value;

  console.log("atrer", addUser);
  console.log("url is:", `/${props.listname}/update`);
  postData({
    url: `/${props.listname}/update`,
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    data: addUser,
  });
};

const handleDelete = (row) => {
  fetchData({
    url: "/blacklist/delete",
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
    params: {
      id: row.id,
      tableNumber: row.tableNumber,
    },
  });

  console.log(row.id, row.tableNumber);
};
</script>

<style lang="scss" scoped>
.add-user-form {
  margin-top: 40px;
}
</style>
