<template>
  <div>
    <GoNext
      text="返回首页"
      btn-type="primary"
      :to="{
        path: '/home',
      }"
    />
  </div>
</template>

<script>
import GoNext from "../components/GoNext";
</script>

<style lang="scss" scoped></style>
