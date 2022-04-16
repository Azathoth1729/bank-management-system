<template>
  <el-table
    :data="products"
    :default-sort="{ prop: 'id', order: 'descending' }"
    border
    style="width: 100%"
  >
    <el-table-column prop="id" label="ID" sortable> </el-table-column>
    <el-table-column prop="name" label="产品名" sortable> </el-table-column>
    <el-table-column prop="detail" label="详情"> </el-table-column>
    <el-table-column label="地区">
      <template #default="scope">
        <div v-if="isString(scope.row.areas)">
          {{ stringifyArea(scope.row.areas) }}
        </div>
        <div v-else>
          <div v-for="(area, index) in scope.row.areas" :key="index">
            {{ stringifyArea(area) }}
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <el-button type="primary" class="done-btn" @click="handleSubmit">
    提交修改
  </el-button>
</template>

<script setup>
import { stringifyArea } from "../../utils/util";
import { getAllProducts } from "../../assets/data/products";

const products = getAllProducts();

const isString = (obj) => {
  return typeof obj === "string";
};

const handleSubmit = (row) => {};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
