<template>
  <el-button :type="btnType" @click="router.push(to)" class="go-next">{{
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
  btnType: {
    type: String,
    default: "primary",
  },
  to: {
    type: Object,
  },
});
</script>

<style scoped></style>
