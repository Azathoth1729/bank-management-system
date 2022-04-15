<template>
  <section>
    <el-table
      :data="products"
      border
      :default-sort="{ prop: 'start_date', order: 'descending' }"
      height="500"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template #default="props">
          <el-form label-position="left" inline class="demo-table-expand">
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
      <el-table-column prop="detail" label="详情" width="180">
      </el-table-column>
      <el-table-column prop="tags" label="标签" width="100">
        <template #default="props">
          <el-tag
            v-for="(tag, index) in props.row.tags"
            :key="index"
            size="small"
            >{{ tag }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script setup>
import products from "../assets/data/products";
</script>

<style lang="scss" scoped>

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
</style>
