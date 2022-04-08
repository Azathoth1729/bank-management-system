<template>
  <aside class="menu-expanded">
    <template>
      <br />
      <el-descriptions
        :key="index"
        v-for="(item, index) in products"
        title=""
        :column="3"
        border
      >
        <template slot="extra">
          <el-button type="primary" size="small" class="xq" @click="skip"
            >详情</el-button
          >
        </template>
        <el-descriptions-item
          label="产品名"
          label-class-name="my-label"
          content-class-name="my-content"
          >{{ item.name }}</el-descriptions-item
        >
        <el-descriptions-item label="产品编号">{{
          item.id
        }}</el-descriptions-item>
        <el-descriptions-item label="价格">{{
          item.price
        }}</el-descriptions-item>
        <el-descriptions-item label="标签">
          <el-tag size="small">{{ item.tag }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item
          label="简介"
          :contentStyle="{ 'text-align': 'center' }"
          >{{ item.intro }}</el-descriptions-item
        >
      </el-descriptions>
      <br />
    </template>
  </aside>
</template>

<script>
import products from "../../assets/data/products";

export default {
  name: "DashBoard",
  data() {
    return {
      products,
    };
  },
  methods: {
    skip() {
      this.$router.push("/users/user");
    },
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.xq {
  margin-top: 20px;
}
</style>
