<template>
  <el-button :type="btnType" @click="router.back()" class="go-back">{{
    text
  }}</el-button>
</template>

<script setup>
import { Back as ElIconBack } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  text: {
    type: String,
    default: "返回",
  },
  btnType: {
    type: String,
    default: "info",
  },
});
</script>

<style scoped></style>
