<template>
  <div class="step1">
    <el-card class="form-card">
      <h3>基本配置</h3>

      <el-form :model="form" label-width="80px">
        <el-form-item label="产品编号">
          <el-input
            v-model.number="form.id"
            placeholder="请输入产品编号(9位数字)"
          />
        </el-form-item>

        <el-form-item label="产品名称">
          <el-input
            v-model.number="form.name"
            placeholder="请输入产品名(20字以内)"
          />
        </el-form-item>

        <el-form-item label="起始时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.start_date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="结束时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.end_date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="产品价格">
          <el-input
            v-model.number="form.price"
            placeholder="请输入产品价格(小数)"
          />
        </el-form-item>
        <el-form-item label="产品利率">
          <el-input
            v-model.number="form.rate"
            placeholder="请输入产品利率(小数,=>0)"
          />
        </el-form-item>
        <el-form-item label="产品详情">
          <el-input
            type="textarea"
            v-model="form.detail"
            placeholder="产品的详细描述(100字以内)"
          />
        </el-form-item>

        <el-form-item label="产品类型">
          <el-select v-model="form.tag" placeholder="请选择基金所属类型">
            <el-option
              v-for="(tag, index) in AllTags"
              :key="index"
              :label="tag"
              :value="tag"
            />
          </el-select>
        </el-form-item>
      </el-form>

      <div class="nav-btns">
        <GoNext
          text="下一步"
          btn-type="primary"
          :to="{
            path: '/create/create_product/2',
          }"
        />
        <el-button type="danger" @click="() => handleCancel(form)"
          >取消</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script setup>
import GoNext from "../../components/GoNext";
import { tags as AllTags } from "../../utils/tags";

import { reactive } from "vue";
import { useRouter } from "vue-router";

const form = reactive({
  id: "",
  name: "",
  start_date: "",
  end_date: "",
  price: "",
  rate: "",
  detail: "",
  tag: "",

  // stock: "",
  // payed_stock: "",
  // white_list: "",
  // penalty: "",

  // area: [],
  // bondsman: false,
  // auth_type: "",
});

const router = useRouter();

const handleCancel = (form) => {
  console.log(form);
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: left;
  margin-top: 10px;
}

.form-card {
  width: 500px;
  margin: 0 auto;
}
</style>
