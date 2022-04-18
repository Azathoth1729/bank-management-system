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
        <el-form-item label="年限">
          <el-input v-model.number="form.time" placeholder="请输入产品年限" />
        </el-form-item>
        <el-form-item label="产品价格">
          <el-input
            v-model.number="form.price"
            placeholder="请输入产品价格(小数)"
          />
        </el-form-item>

        <el-form-item label="产品介绍">
          <el-input
            type="textarea"
            v-model="form.intro"
            placeholder="产品的大致介绍(50字以内)"
          />
        </el-form-item>
        <el-form-item label="产品详情">
          <el-input
            type="textarea"
            v-model="form.detail"
            placeholder="产品的详细描述(100字以内)"
          />
        </el-form-item>
        <el-form-item label="产品标签">
          <el-input
            type="textarea"
            v-model="form.tag"
            placeholder="产品的标签(10字以内)"
          />
        </el-form-item>
      </el-form>

      <div class="nav-btns">
        <GoNext
          text="下一步"
          btn-type="primary"
          :to="{
            name: '产品添加-第二步',
            params: {
              product: JSON.stringify(form),
            },
          }"
        />
        <el-button type="danger" @click="handleCancel">取消</el-button>
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
  id: 0,
  name: "",
  time: 0,
  price: 0,
  intro: "",
  detail: "",
  tag: "",
});

const router = useRouter();

const handleCancel = () => {};
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
