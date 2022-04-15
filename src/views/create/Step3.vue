<template>
  <el-input v-model="input" placeholder="Please input" />
  {{ input }}
  <GoNext text="下一步" btn-type="primary"/>
  <GoBack text="上一步" btn-type="primary"/>
  <el-button type="danger" @click="handleCancel">取消</el-button>
</template>

<script setup>
import GoNext from "../../components/GoNext";
import GoBack from "../../components/GoBack";

import { ref } from "vue";
const input = ref("");
</script>
