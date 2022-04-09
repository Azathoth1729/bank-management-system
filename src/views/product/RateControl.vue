<template>
  <section>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="number" label="产品编号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="产品名" width="180">
      </el-table-column>
      <el-table-column prop="rate" label="利率(%)" sortable width="180">
      </el-table-column>
      <el-table-column prop="rate5" label="5日均线(%)" sortable width="180">
      </el-table-column>
      <el-table-column prop="rate10" label="10日均线(%)" sortable width="180">
      </el-table-column>
      <el-table-column label="操作" width="">
        <template slot-scope="scope">
          <el-row :gutter="30">
            <el-col :span="12">
              <el-input
                class="num"
                v-model="scope.row.input"
                placeholder="请输入内容"
              ></el-input>
            </el-col>
            <el-button
              type="primary"
              round
              class="cal"
              @click="change(scope.row.number)"
              >更改利率</el-button
            >
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <!-- <span>{{input}}</span> -->
  </section>
</template>

<script>
export default {
  name: "RateControl",
  data() {
    return {
      tableData: [
        {
          input: 0,
          number: "235611231",
          name: "大秦科技基金",
          rate: "1.23",
          rate5: "-0.71",
          rate10: "2.36",
        },
        {
          input: 0,
          number: "235611231",
          name: "大秦科技基金",
          rate: "1.23",
          rate5: "-0.71",
          rate10: "2.36",
        },
        {
          input: 0,
          number: "235611231",
          name: "大秦科技基金",
          rate: "1.23",
          rate5: "-0.71",
          rate10: "2.36",
        },
        {
          input: 0,
          number: "235611231",
          name: "大秦科技基金",
          rate: "1.23",
          rate5: "-0.71",
          rate10: "2.36",
        },
        {
          input: 0,
          number: "235611231",
          name: "大秦科技基金",
          rate: "1.23",
          rate5: "-0.71",
          rate10: "2.36",
        },
        {
          input: 0,
          number: "235611231",
          name: "大秦科技基金",
          rate: "1.23",
          rate5: "-0.71",
          rate10: "2.36",
        },
      ],
    };
  },
  methods: {
    change(r) {
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].number === r) {
          this.tableData[i].rate = this.tableData[i].input;
          this.tableData[i].input = "";
          break;
        }
      }
    },
  },
};
</script>

<style>
.num {
  margin-bottom: 5px;
}
.cal {
  margin-left: 0px;
}
</style>
