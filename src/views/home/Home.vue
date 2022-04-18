<template>
  <!-- {{ responseData[0] }} -->
  <div class="home">
    <el-card class="product-card">
      <el-scrollbar height="500px">
        <el-descriptions
          v-for="product in responseData"
          :key="product.id"
          :title="product.name"
          :column="4"
          border
        >
          <template #extra>
            <GoNext
              class="details-btn"
              text="详情"
              btn-type="primary"
              :to="{
                name: '产品详情',
                params: { id: product.id },
              }"
            />
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
          <el-descriptions-item label="年限">
            <el-tag size="small">{{ product.time }} </el-tag>
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

import { ref, reactive, onMounted, computed } from "vue";
import { fetchData } from "../../network/request";
import { getAllProducts } from "../../assets/data/products";

import { tagTypes } from "../../utils/tags";
import { stringifyArea, moduloGetItem, formatDate } from "../../utils/util";

const state = reactive({
  // responseCode: 0,
  // responseMsg: "",
  // fetching: false,
  responseData: [],
});

onMounted(() => {
  const config = {
    url: "/assistance/listProductIntro",
    method: "GET",
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  fetchData(config, state);
});

const responseData = computed(() => state.responseData);
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
