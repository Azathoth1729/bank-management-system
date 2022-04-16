<template>
  <el-table
    :data="products"
    :default-sort="{ prop: 'id', order: 'descending' }"
    style="width: 100%"
  >
    <el-table-column prop="id" label="ID" sortable> </el-table-column>
    <el-table-column prop="name" label="产品名" sortable> </el-table-column>
    <el-table-column prop="detail" label="详情"> </el-table-column>
    <el-table-column label="地区">
      <template #default="scope">
        <div v-for="(area, index) in scope.row.areas" :key="index">
          {{ stringifyArea(area) }}
        </div>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="primary" @click="handleAdd(scope.row)"
          >添加</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import products from "../../assets/data/products";
import { stringifyArea } from "../../utils/util";

const handleAdd = (row) => {
  // console.log(JSON.stringify(row, null, 2));
  // console.log(JSON.stringify(col, null, 2));
};

const handleDelete = (row) => {};
</script>

<style></style>
