<template>
  <el-scrollbar height="700px">
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="用户名" width="180" />
      <el-table-column prop="identity" label="身份证" />
    </el-table>

    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane
        :label="listName"
        :name="listName"
        v-for="(listName, index) in listNames"
        :key="index"
      >
        <UserBoard :index="index + 1" listname="blacklist" />
      </el-tab-pane>
    </el-tabs>
  </el-scrollbar>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import UserBoard from "../components/UserBoard.vue";
import { fetchData } from "../network/request";

const state = reactive({
  responseData: [],
});

onMounted(() => {
  const url = "/blacklist/userInfo";
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

const users = computed(() => state.responseData);

const listNames = ["黑名单1", "黑名单2", "黑名单3"];
const activeName = ref("黑名单1");
</script>
