<template>
  <el-table :data="responseData" style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="username" label="用户名" width="180" />
    <el-table-column prop="identity" label="身份证" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="primary" @click="handleAdd(scope.row)"
          >添加</el-button
        >
        <el-button size="small" type="danger" @click="handleDelete(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { getUserById } from "../assets/data/users";

import { fetchData } from "../network/request";

const props = defineProps({
  index: {
    type: Object,
  },
});

const editVisible = ref(false);
const currentId = ref(-1);

const state = reactive({
  responseData: [],
});

onMounted(() => {
  fetchData(
    {
      url: `/blacklist/all/${props.index}`,
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    },
    state
  );
});

const responseData = computed(() => state.responseData);

const handleAdd = (row) => {
  fetchData({
    url: "/blacklist/update",
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
    params: {
      userId: row.id,
      tableNumber: row.tableNumber,
    },
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

  console.log(id, tableNumber);
};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
