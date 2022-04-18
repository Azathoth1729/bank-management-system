<template>
<el-scrollbar height="450px">
  <el-table
    :data="state.responseData"
    border
    :default-sort="{ prop: 'start_date', order: 'descending' }"
    height="700"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template #default="scope">
        <el-form label-position="left" :inline="true" class="product-details">
          <el-form-item label="产品编号">
            {{ scope.row.id }}
          </el-form-item>
          <el-form-item label="产品名">
            {{ scope.row.name }}
          </el-form-item>
          <el-form-item label="开始时间">
            {{ scope.row.start_date }}
          </el-form-item>
          <el-form-item label="结束时间">
            {{ scope.row.end_date }}
          </el-form-item>
          <el-form-item label="价格">
            {{ scope.row.price }}
          </el-form-item>
          <el-form-item label="税率">
            {{ scope.row.rate }}
          </el-form-item>
          <el-form-item label="详情">
            {{ scope.row.detail }}
          </el-form-item>
          <el-form-item label="标签" width="180">
            <el-tag size="small">{{ scope.row.tag }} </el-tag>
          </el-form-item>
          <el-form-item label="地区">
            <div v-if="isString(scope.row.areas)">
              <el-tag :type="moduloGetItem(tagTypes, scope.$index)">
                {{ stringifyArea(scope.row.areas) }}
              </el-tag>
            </div>
            <div v-else>
              <div v-for="(area, index) in scope.row.areas" :key="index">
                <el-tag :type="moduloGetItem(tagTypes, index)">
                  {{ stringifyArea(area) }}
                </el-tag>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="库存">
            {{ scope.row.stock }}
          </el-form-item>
          <el-form-item label="认证方式">
            {{ scope.row.auth_type }}
          </el-form-item>
          <el-form-item label="违约惩罚方式">
            {{ scope.row.penalty }}
          </el-form-item>
          <el-form-item label="白名单">
            {{ scope.row.white_list }}
          </el-form-item>
          <el-form-item label="担保人">
            {{ stringifyBondsman(scope.row.bondsman) }}
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column prop="id" label="ID" sortable width="180">
    </el-table-column>
    <el-table-column prop="name" label="产品名" sortable width="180">
    </el-table-column>
    <el-table-column prop="price" label="购买价格(元)" sortable width="180">
    </el-table-column>
    <el-table-column prop="rate" label="利率" sortable width="180">
    </el-table-column>
    <el-table-column prop="detail" label="详情" width="180"> </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="primary" @click="handleEdit(scope.row)"
          >修改</el-button
        >
        <el-button size="small" type="danger" @click="handleDelete(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</el-scrollbar>
</template>

<script setup>
import { ref, reactive, onMounted,computed } from "vue";
import { fetchData, postData } from "../network/request";
import { getAllProducts, getProductById } from "../assets/data/products";
import { tagTypes } from "../utils/tags";
import {
  isString,
  stringifyBondsman,
  stringifyArea,
  moduloGetItem,
} from "../utils/util";

const products = getAllProducts();

const state = reactive({
  // responseCode: 0,
  // responseMsg: "",
  // fetching: false,
  responseData: [],
});

onMounted(() => {
  const config = {
    url: "/assistance/returnAllProductDetail",
    method: "GET",
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  fetchData(config, state);
  // const { responseData } = fetchData(config);
});

const handleEdit = (product) => {};

const handleDelete = (row) => {};
</script>

<style lang="scss" scoped>
.product-details {
  margin-left: 55px;
  margin-top: 5px;
  margin-bottom: 5px;

  .el-form-item {
    margin-right: 0;

    margin-bottom: 0;
    width: 50%;
  }
}
</style>
