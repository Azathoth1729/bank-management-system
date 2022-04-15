<template>
  <el-button type="primary" @click="() => router.push(url)" class="go-next">{{
    text
  }}</el-button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  text: {
    type: String,
    default: "下一步",
  },
  url: {
    type: String,
  },
});
</script>

<style scoped></style>
