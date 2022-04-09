<template>
  <aside class="menu-expanded">
    <template>
      <el-descriptions
        :key="product.id"
        v-for="product in products"
        :title="product.name"
        :column="3"
        border
      >
        <template slot="extra">
          <el-button
            type="primary"
            size="small"
            class="product-details"
            @click="skip"
            >详情
          </el-button>
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
          <el-tag size="small">{{ product.tag }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item
          label="简介"
          :contentStyle="{ 'text-align': 'center' }"
          >{{ product.intro }}
        </el-descriptions-item>
      </el-descriptions>
    </template>
  </aside>
</template>

<script>
import products from "../../assets/data/products";

export default {
  name: "Home",

  data() {
    return {
      products,
    };
  },

  methods: {
    skip() {
      this.$router.push({ name: "产品详情" });
    },
  },
};
</script>

<style scoped>
.product-details {
  margin-top: 20px;
}
</style>
