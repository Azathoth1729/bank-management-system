<template>
  <div class="productshow">
    <el-card class="product-card">
      <el-descriptions :title="product.name" :column="2" border>
        <el-descriptions-item label="产品编号">
          {{ product.id }}
        </el-descriptions-item>
        <el-descriptions-item label="产品名">
          {{ product.name }}
        </el-descriptions-item>
        <el-descriptions-item label="开始时间">
          {{ product.start_date }}
        </el-descriptions-item>
        <el-descriptions-item label="结束时间">
          {{ product.end_date }}
        </el-descriptions-item>
        <el-descriptions-item label="价格">
          {{ product.price }}
        </el-descriptions-item>
        <el-descriptions-item label="税率">
          {{ product.rate }}
        </el-descriptions-item>
        <el-descriptions-item label="详情">
          {{ product.detail }}
        </el-descriptions-item>
        <el-descriptions-item label="标签" width="180">
          <el-tag size="small">{{ product.tag }} </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="地区">
          {{ product.area }}
        </el-descriptions-item>
        <el-descriptions-item label="库存">
          {{ product.stock }}
        </el-descriptions-item>
        <el-descriptions-item label="认证方式">
          {{ product.auth_type }}
        </el-descriptions-item>
        <el-descriptions-item label="违约惩罚方式">
          {{ product.penalty }}
        </el-descriptions-item>
        <el-descriptions-item label="白名单">
          {{ product.white_list }}
        </el-descriptions-item>
        <el-descriptions-item label="担保人">
          {{ stringifyBondsman(product.bondsman) }}
        </el-descriptions-item>

        <!-- <el-descriptions-item label="价格">
          {{ product.price }}
        </el-descriptions-item>
        <el-descriptions-item label="标签">
          <el-tag size="small">{{ product.tag }} </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="产品说明">
          {{ product.detail }}
        </el-descriptions-item> -->
      </el-descriptions>
      <GoBack class="back-btn" />
    </el-card>
  </div>
</template>

<script setup>
import GoBack from "../../components/GoBack";
import { getProductById } from "../../assets/data/products";
import { stringifyBondsman } from "../../utils/util";

const props = defineProps({
  id: {
    type: Number,
  },
});

const product = getProductById(props.id);
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
