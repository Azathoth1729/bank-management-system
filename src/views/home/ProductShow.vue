<template>
  <div class="productshow">
    <el-card class="product-card">
      <ProductBoard :product-id="id" />
      <GoBack class="back-btn" />
    </el-card>
  </div>
</template>

<script setup>
import GoBack from "../../components/GoBack";
import ProductBoard from "../../components/ProductBoard";

const props = defineProps({
  id: {
    type: Number,
  },
});
</script>

<style lang="scss" scoped>
.product-card {
  height: 430px;
  width: 800px;
  margin: 0 auto;
}

.back-btn {
  margin: 20px;
}
</style>
