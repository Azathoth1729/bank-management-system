<template>
  <div class="go-back">
    <el-button type="info" icon="el-icon-back" @click="$router.back()"
      >返回</el-button
    >
  </div>
</template>

<script>
export default {
  name: "GoBack",
};
</script>

<style scoped>
.go-back {
  margin-top: 20px;
  margin-left: -1100px;
}
</style>
