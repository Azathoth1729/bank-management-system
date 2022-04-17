<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane
      :label="listName"
      :name="listName"
      v-for="(listName, index) in listNames"
      :key="index"
    >
      <UserBoard :data="getWhiteList(index + 1)" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
//记得改UserBoard里面的
import { ref } from "vue";

import UserBoard from "../components/UserBoard.vue";

import { getWhiteList } from "../assets/data/users"; //改成从后端调用数据,参数为列表id

const listNames = ["黑名单1", "黑名单2", "黑名单3"];
const activeName = ref("黑名单1");
</script>
