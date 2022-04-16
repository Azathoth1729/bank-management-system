<template>
  <div class="home">
    <el-card class="product-card">
      <el-scrollbar height="700px">
        <el-descriptions
          v-for="product in products"
          :key="product.id"
          :title="product.name"
          :column="4"
          border
        >
          <template #extra>
            <!-- <GoNext
            class="details-btn"
            text="详情"
            btn-type="primary"
            :router-name="`/create/create_product/${product.id}`"
          /> -->
            <router-link
              :to="{
                name: '产品详情',
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
            <el-tag size="small">{{ product.tag }} </el-tag>
          </el-descriptions-item>
          <el-descriptions-item
            label="产品说明"
            :contentStyle="{ 'text-align': 'center' }"
            >{{ product.detail }}
          </el-descriptions-item>
        </el-descriptions>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script setup>
import GoNext from "../../components/GoNext";

import { getAllProducts } from "../../assets/data/products";

const products = getAllProducts();
</script>

<style scoped>
.product-card {
  width: 800px;
  margin: 0 auto;
}
.details-btn {
  margin: 20px;
}
</style>
