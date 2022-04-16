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
    <el-table-column label="担保人">
      <template #default="scope">
        {{ stringifyBondsman(scope.row.bondsman) }}</template
      >
    </el-table-column>

    <el-table-column label="修改">
      <template #default="scope">
        <el-checkbox
          @change="handleEdit($event, scope.row)"
          v-model.number="bondsmans[scope.$index]"
          label="是否需要担保人"
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
  stringifyBondsman,
} from "../../utils/util";

const products = getAllProducts();

const bondsmans = reactive([]);

const handleEdit = (event, product) => {
  switch (event) {
    case "true":
      event = true;
      break;
    case "false":
      event = false;
      break;
  }
  product.bondsman = event;
};

const handleSubmmit = () => {};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
