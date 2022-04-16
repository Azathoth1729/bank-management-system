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
    <el-table-column label="标签">
      <template #default="scope">
        <el-tag size="small">{{ scope.row.tag }} </el-tag>
      </template>
    </el-table-column>

    <el-table-column label="修改">
      <template #default="scope">
        <el-select
          @change="handleEdit($event, scope.row)"
          v-model="tags[scope.$index]"
          placeholder="请选择基金所属类型"
        >
          <el-option
            v-for="(tag, index) in AllTags"
            :key="index"
            :label="tag"
            :value="tag"
          />
        </el-select>
      </template>
    </el-table-column>
  </el-table>

  <el-button type="primary" class="done-btn" @click="handleSubmit">
    提交修改
  </el-button>
</template>

<script setup>
import { reactive } from "vue";
import { getAllProducts, getProductById } from "../../assets/data/products";
import { tags as AllTags } from "../../utils/tags";

import {} from "../../utils/util";

const products = getAllProducts();

const tags = reactive([]);

const handleEdit = (event, product) => {
  product.tag = event;
};

const handleSubmit = () => {};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
