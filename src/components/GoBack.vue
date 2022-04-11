<template>
  <div class="go-back">
    <el-button type="info" :icon="ElIconBack" @click="router.back()"
      >返回</el-button
    >
  </div>
</template>

<script setup>
import { Back as ElIconBack } from "@element-plus/icons";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.go-back {
  margin-top: 20px;
  margin-left: -1100px;
}
</style>
