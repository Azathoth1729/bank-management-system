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
    <el-table-column prop="rate" label="税率"> </el-table-column>
    <el-table-column prop="calculate_rate" label="后续利率计算方式">
    </el-table-column>
    <el-table-column label="">
      <template #default="scope">
        <el-button
          type="text"
          icon="el-icon-edit"
          @click="handleEdit(scope.$index, scope.row)"
          >编辑
        </el-button>
        <!-- <el-select
          @change="handleEdit($event, scope.row)"
          v-model.number="state[scope.$index]"
          placeholder="身份认证信息"
        >
          <el-option v-if="scope.row.rate !== 0" label="无" value="0" />
          <el-option v-if="scope.row.rate !== 1" label="身份证" value="1" />
          <el-option v-if="scope.row.rate !== 2" label="护照" value="2" />
        </el-select> -->
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

const state = reactive([{}]);

const handleEdit = (event, product) => {
  
}
const handleEditCalculateRate = (event, product) => {
  product.rate = parseInt(event);
};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
