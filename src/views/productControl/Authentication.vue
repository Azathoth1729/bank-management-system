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
    <el-table-column label="身份认证">
      <template #default="scope">
        {{ stringifyAuthType(scope.row.auth_type) }}
      </template>
    </el-table-column>

    <el-table-column label="修改">
      <template #default="scope">
        <el-select
          @change="handleEdit($event, scope.row)"
          v-model.number="auth_types[scope.$index]"
          placeholder="身份认证信息"
        >
          <el-option v-if="scope.row.auth_type !== 0" label="无" value="0" />
          <el-option
            v-if="scope.row.auth_type !== 1"
            label="身份证"
            value="1"
          />
          <el-option v-if="scope.row.auth_type !== 2" label="护照" value="2" />
        </el-select>
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

const auth_types = reactive([]);

const handleEdit = (event, product) => {
  product.auth_type = parseInt(event);
};

const handleSubmit = () => {};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
