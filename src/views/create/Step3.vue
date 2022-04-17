<template>
  <div class="step3">
    <el-card class="form-card">
      <h3>违约、税率控制</h3>

      <el-form :inline="true" :model="form">
        <el-form-item label="违约方式">
          <el-select
            v-model.number="form.penalty"
            placeholder="违约后的惩罚方式"
          >
            <el-option label="0" value="0" />
            <el-option label="1" value="1" />
            <el-option label="2" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="税率">
          <el-input v-model="form.rate" placeholder="产品的增值税率" />
        </el-form-item>
        <el-form-item label="后续税率">
          <el-select
            v-model.number="form.calculate_rate"
            placeholder="后续设定的利率计算方式"
          >
            <el-option label="0" value="0" />
            <el-option label="1" value="1" />
            <el-option label="2" value="2" />
          </el-select>
        </el-form-item>
      </el-form>

      <el-form :inline="true" :model="form">
        <h3>库存、黑名单控制</h3>
        <el-form-item label="库存">
          <el-input v-model.number="form.stock" placeholder="产品的库存总量" />
        </el-form-item>
        <el-form-item label="黑名单">
          <el-select
            v-model.numer="form.white_list"
            placeholder="选择产品的黑名单"
          >
            <el-option label="0" value="0" />
            <el-option label="1" value="1" />
            <el-option label="2" value="2" />
          </el-select>
        </el-form-item>
      </el-form>

      <div class="nav-btns">
        <GoBack text="上一步" btn-type="primary" />
        <el-button type="danger" @click="handleCancel">取消</el-button>
        <div class="done-btn">
          <el-button type="primary" @click="handleSubmit">完成创建</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import GoNext from "../../components/GoNext";
import GoBack from "../../components/GoBack";

import { stringifyArea, stringifyObj } from "../../utils/util";

import { ref, reactive } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const previousProdct = JSON.parse(router.params.product);

const form = reactive({
  penalty: "",
  rate: "",
  calculate_rate: "",
  stock: "",
  white_list: "",
});

const handleSubmit = () => {};
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

  .nav-btns {
    margin-top: 20px;
  }
}

.done-btn {
  margin-top: 20px;
}
</style>
