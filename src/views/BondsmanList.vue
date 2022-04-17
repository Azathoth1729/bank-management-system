<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane
      :label="listName"
      :name="listName"
      v-for="(listName, index) in listNames"
      :key="index"
    >
      <UserBoard :data="getBondsmanList(index + 1)" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
// 担保人的与黑名单差不多,照着改就行
import { ref } from "vue";

import UserBoard from "../components/UserBoard.vue";

import { getBondsmanList } from "../assets/data/users"; 

const listNames = ["担保人列表1", "担保人列表2", "担保人列表3"];
const activeName = ref("担保人列表1");
</script>
