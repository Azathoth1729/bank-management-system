<template>
<section>
  <span>{{state.responseData}}</span>
  <el-table
    :data="state.responseData"
    :default-sort="{ prop: 'id', order: 'descending' }"
    border
    style="width: 100%"
  >
    <el-table-column prop="id" label="ID" sortable> </el-table-column>
    <el-table-column prop="name" label="产品名" sortable> </el-table-column>
    <el-table-column prop="detail" label="详情"> </el-table-column>
    <el-table-column label="地区">
      <template #default="scope">
        <div v-if="isString(scope.row.area)">
          <!-- <strong> scope.$index= {{ scope.$index }} </strong> -->
          <el-tag :type="moduloGetItem(tagTypes, scope.$index)">
            {{ stringifyArea(scope.row.area) }}
          </el-tag>
        </div>
        <div v-else>
          <div v-for="(area, index) in scope.row.area" :key="index">
            <!-- <strong>
              (scope.$index, index)= {{ scope.$index }} {{ index }}
            </strong> -->
            <el-tag :type="moduloGetItem(tagTypes, index)">
              {{ stringifyArea(area) }}
            </el-tag>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <el-button type="primary" class="done-btn" @click="handleSubmit">
    提交修改
  </el-button>
</section>
</template>

<script setup>
import { tagTypes } from "../../utils/tags";
import { ref, reactive, onMounted } from "vue";
import { fetchData } from "../../network/request";
import { getAllProducts } from "../../assets/data/products";
import {
  isString,
  stringifyArea,
  moduloGetItem,
  formatDate,
} from "../../utils/util";

const state = reactive({
  // responseCode: 0,
  // responseMsg: "",
  // fetching: false,
  responseData: [],
});

onMounted(() => {
  const config = {
    url: "/assistance/listProductIntro",
    method: "GET",
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  fetchData(state, config);
  // fetchData(whitelist, config);
  // const { responseData } = fetchData(config);
});
// const products = state.responseData;

const handleSubmit = (row) => {
  
};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
