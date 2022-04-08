<template>
  <section>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="操作时间" width="280">
      </el-table-column>
      <el-table-column prop="operator" label="操作员" width="280">
      </el-table-column>
      <el-table-column prop="operation" label="更改属性">
        <template slot-scope="scope">
          <el-tag
            class="xl"
            :key="tag"
            v-for="tag in scope.row.operation"
            :type="getColor(tag)"
            disable-transitions
            >{{ getTag(tag) }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      tags: [
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
      ],
      type: ["", "success", "info", "warning", "danger"],
      tableData: [
        {
          date: "2022-04-04",
          operator: "2019141460306",
          operation: [1, 3, 5],
        },
      ],
    };
  },
  methods: {
    getColor(idx) {
      return this.type[idx % 5];
    },
    getTag(idx) {
      return this.tags[idx];
    },
  },
};
</script>

<style></style>
