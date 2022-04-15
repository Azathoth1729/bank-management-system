<template>
  <el-descriptions
    v-for="product in products"
    :key="product.id"
    :title="product.name"
    :column="4"
    border
  >
    <template #extra>
      <router-link
        :to="{
          name: 'productshow',
          params: { id: product.id },
        }"
      >
        <el-button type="primary" class="details-btn"> 详情 </el-button>
      </router-link>
    </template>
    <el-descriptions-item label="产品名">
      {{ product.name }}
    </el-descriptions-item>
    <el-descriptions-item label="产品编号">
      {{ product.id }}
    </el-descriptions-item>
    <el-descriptions-item label="价格">
      {{ product.price }}
    </el-descriptions-item>
    <el-descriptions-item label="标签">
      <el-tag v-for="(tag, index) in product.tags" :key="index" size="small"
        >{{ tag }}
      </el-tag>
    </el-descriptions-item>
    <el-descriptions-item
      label="产品说明"
      :contentStyle="{ 'text-align': 'center' }"
      >{{ product.detail }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
import products from "../../assets/data/products";
</script>

<style scoped>
.details-btn {
  margin: 20px;
}
</style>
