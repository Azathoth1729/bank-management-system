<template>
  <el-table
    :data="products"
    :default-sort="{ prop: 'name', order: 'ascending' }"
    border
    style="width: 100%"
  >
    <el-table-column prop="id" label="ID" sortable> </el-table-column>
    <el-table-column prop="name" label="产品名" sortable> </el-table-column>
    <el-table-column prop="detail" label="详情"> </el-table-column>
    <el-table-column label="总库存">
      <template #default="scope">
        {{ scope.row.stock }}
      </template>
    </el-table-column>

    <el-table-column label="修改">
      <template #default="scope">
        <el-input
          @change="handleEdit($event, scope.row)"
          v-model.number="stocks[scope.$index]"
          placeholder="请输入修改后的数值"
        />
      </template>
    </el-table-column>
  </el-table>

  <el-button type="primary" class="done-btn" @click="handleSubmit">
    提交修改
  </el-button>
</template>

<script setup>
import { ref, reactive } from "vue";
import { getAllProducts, getProductById } from "../../assets/data/products";
import {
  stringifyObj,
  stringifyArea,
  stringifyAuthType,
} from "../../utils/util";

const products = getAllProducts();

const stocks = reactive([]);

const handleEdit = (event, product) => {
  product.stock = parseInt(event);
};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
