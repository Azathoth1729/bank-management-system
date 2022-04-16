<template>
  <div class="history-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="操作时间" width="280">
      </el-table-column>
      <el-table-column prop="operator" label="操作员" width="280">
      </el-table-column>
      <el-table-column prop="operation" label="更改属性">
        <template #default="scope">
          <el-tag
            :key="tag"
            v-for="tag in scope.row.operation"
            :type="getColor(tag)"
            disable-transitions
            >{{ getTag(tag) }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const tags = [
  "",
  "利率",
  "价格",
  "白名单",
  "地区",
  "库存",
  "认证",
  "标签",
  "违约",
  "担保人",
];

const type = ["", "success", "info", "warning", "danger"];

const tableData = [
  {
    date: "2022-04-04",
    operator: "2019141460306",
    operation: [1, 3, 5],
  },
];

const getColor = (idx) => {
  return type[idx % 5];
};
const getTag = (idx) => {
  return tags[idx];
};
</script>

<style lang="scss" scoped>
.history-table {
  margin: 0 auto;
}
</style>
