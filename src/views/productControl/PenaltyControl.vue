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
    <el-table-column label="违约政策">
      <template #default="scope">
        {{ scope.row.penalty }}
      </template>
    </el-table-column>

    <el-table-column label="修改">
      <template #default="scope">
        <el-select
          @change="handleEdit($event, scope.row)"
          v-model.number="penaltys[scope.$index]"
          placeholder="选择违约政策"
        >
          <el-option
            v-if="scope.row.penalty !== 0"
            label="违约政策0"
            value="0"
          />
          <el-option
            v-if="scope.row.penalty !== 1"
            label="违约政策1"
            value="1"
          />
          <el-option
            v-if="scope.row.penalty !== 2"
            label="违约政策2"
            value="2"
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
import { ref, reactive } from "vue";
import { getAllProducts } from "../../assets/data/products";
import { stringifyArea, stringifyAuthType } from "../../utils/util";

const products = getAllProducts();

const penaltys = reactive([]);

const handleEdit = (event, product) => {
  product.penalty = parseInt(event);
};

const handleSubmit = () => {};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
