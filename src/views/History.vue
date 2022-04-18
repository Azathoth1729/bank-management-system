<template>
  <div class="history-table">
    <el-table :data="state.responseData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" sortable> </el-table-column>
      <el-table-column prop="name" label="操作名陈" sortable> </el-table-column>
      <el-table-column prop="createTime" label="操作时间" sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { tagTypes } from "../utils/tags";
import { moduloGetItem, formatDate } from "../utils/util";
import { ref, reactive, onMounted } from "vue";
import { fetchData } from "../network/request";
import { getAllProducts, getProductById } from "../assets/data/products";

const state = reactive({
  responseData: [],
});

onMounted(() => {
  const config = {
    url: "/logrecord/log",
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  };

  fetchData(config, state);
  // const { responseData } = fetchData(config);
});
// const products = getAllProducts();

const tasks = [
  "地区控制",
  "身份认证",
  "担保人控制",
  "违约控制",
  "利率控制",
  "库存控制",
  "产品标签",
  "黑名单控制",
];

const operations = [
  {
    time: formatDate(new Date()),
    operationType: "创建",
    task: tasks[0],
  },
  {
    time: formatDate(new Date()),
    operationType: "修改",
    task: tasks[1],
  },
  {
    time: formatDate(new Date()),
    operationType: "创建",
    task: tasks[2],
  },
  {
    time: formatDate(new Date()),
    operationType: "修改",
    task: tasks[3],
  },
];

const operationTagTypes = ["success", "danger"];
</script>

<style lang="scss" scoped>
.history-table {
  margin: 0 auto;
}
</style>
