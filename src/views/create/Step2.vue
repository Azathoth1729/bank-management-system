<template>
  <el-input v-model="input" placeholder="Please input" />
  {{ input }}

  <el-button type="primary" @click="handleSubmit">下一步</el-button>
  <el-button type="danger" @click="handleCancel">上一步</el-button>
  <el-button type="danger" @click="handleCancel">取消</el-button>

</template>

<script setup>
import { ref } from "vue";
const input = ref("");
</script>
