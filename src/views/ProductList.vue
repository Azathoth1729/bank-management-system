<template>
  <el-table
    :data="products"
    border
    :default-sort="{ prop: 'start_date', order: 'descending' }"
    height="700"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template #default="props">
        <el-form label-position="left" :inline="true" class="product-details">
          <el-form-item label="产品编号">
            {{ props.row.id }}
          </el-form-item>
          <el-form-item label="产品名">
            {{ props.row.name }}
          </el-form-item>
          <el-form-item label="开始时间">
            {{ props.row.start_date }}
          </el-form-item>
          <el-form-item label="结束时间">
            {{ props.row.end_date }}
          </el-form-item>
          <el-form-item label="价格">
            {{ props.row.price }}
          </el-form-item>
          <el-form-item label="税率">
            {{ props.row.rate }}
          </el-form-item>
          <el-form-item label="详情">
            {{ props.row.detail }}
          </el-form-item>
          <el-form-item label="标签">
            {{ props.row.tags }}
          </el-form-item>
          <el-form-item label="地区">
            {{ props.row.area }}
          </el-form-item>
          <el-form-item label="库存">
            {{ props.row.stock }}
          </el-form-item>
          <el-form-item label="认证方式">
            {{ props.row.auth_type }}
          </el-form-item>
          <el-form-item label="违约惩罚方式">
            {{ props.row.penalty }}
          </el-form-item>
          <el-form-item label="白名单">
            {{ props.row.white_list }}
          </el-form-item>
          <el-form-item label="担保人">
            {{ props.row.bondsman }}
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column prop="id" label="ID" sortable width="180">
    </el-table-column>
    <el-table-column prop="name" label="产品名" sortable width="180">
    </el-table-column>
    <el-table-column prop="start_date" label="起始日期" sortable width="180">
    </el-table-column>
    <el-table-column prop="end_date" label="结束日期" sortable width="180">
    </el-table-column>
    <el-table-column prop="price" label="购买价格(元)" sortable width="180">
    </el-table-column>
    <el-table-column prop="rate" label="利率" sortable width="180">
    </el-table-column>
    <el-table-column prop="detail" label="详情" width="180"> </el-table-column>
    <el-table-column prop="tags" label="标签" width="100">
      <template #default="props">
        <el-tag :key="index" size="small">{{ props.row.tag }} </el-tag>
      </template>
    </el-table-column>

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
</template>

<script setup>
import products from "../assets/data/products";

const handleEdit = (row) => {
  console.log(JSON.stringify(row, null, 2));
};

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
