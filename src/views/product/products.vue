<template>
  <section>
    <el-table
      :data="products"
      height="500"
      style="width: 100%"
      stripe
      border
      :default-sort="{ prop: 'start_date', order: 'descending' }"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <!-- form -->
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="产品名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="投资类型">
              <span>{{ props.row.type }}</span>
            </el-form-item>
            <el-form-item label="管理费">
              <span>{{ props.row.glf }}</span>
            </el-form-item>
            <el-form-item label="基金经理">
              <span>{{ props.row.manager }}</span>
            </el-form-item>
            <el-form-item label="产品介绍">
              <div class="intro">
                <span>{{ props.row.detail }}</span>
              </div>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column prop="start_date" label="起始日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="end_date" label="结束日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="产品名" sortable width="180">
      </el-table-column>
      <el-table-column prop="price" label="购买价格(元)" sortable width="180">
      </el-table-column>
      <el-table-column prop="rate" label="利率" sortable width="180">
      </el-table-column>
      <el-table-column prop="intro" label="简介" width="180"> </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="getTagFilter()"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '白酒' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}
          </el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="detail"
        label="">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column> -->
    </el-table>

    <div class="block">
      <el-pagination background layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
  </section>
</template>

<style>
.block {
  margin-top: 20px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  margin-left: 20px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
.jieshao {
  margin-left: 110px;
  margin-top: -40px;
}
</style>

<script>
import products from "../../assets/data/products";

export default {
  name: "Products",
  data() {
    return {
      products,
    };
  },

  methods: {
    getTagFilter() {
      return [
        { text: "白酒", value: "白酒" },
        { text: "新能源", value: "新能源" },
      ];
    },

    filterTag(val, row) {
      return row.tag == val;
    },
  },
};
</script>
