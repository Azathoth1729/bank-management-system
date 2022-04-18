<template>
  {{state.responseData}}
  <div class="history-table">
    <el-table :data="operations" stripe style="width: 100%">
      <el-table-column label="操作时间" width="280">
        <template #default="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="操作类型">
        <template #default="scope">
          <el-tag :type="moduloGetItem(operationTagTypes, scope.$index)"
            >{{ scope.row.operationType }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作事项">
        <template #default="scope">
          <el-tag :type="moduloGetItem(tagTypes, scope.$index)"
            >{{ scope.row.task }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { tagTypes } from "../utils/tags";
import { moduloGetItem, formatDate } from "../utils/util";
import { ref, reactive,onMounted } from "vue";
import { fetchData } from "../network/request";
import { getAllProducts, getProductById } from "../assets/data/products";

const state = reactive({
  // responseCode: 0,
  // responseMsg: "",
  // fetching: false,
  responseData: [],
});

onMounted(() => {
  const config = {
    url: "/logrecord/log",
    method: "GET",
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  fetchData(state, config);
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
