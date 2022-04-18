<template>
  {{ forwardProduct }}
  <div class="step2">
    <el-card class="form-card">
      <el-form :inline="true" :model="form">
        <div class="area-form">
          <h3>地区控制</h3>
          <el-form-item label="省份">
            <el-input
              :disabled="areaIsAll"
              v-model="form.province"
              placeholder="省份"
            />
          </el-form-item>
          <el-form-item label="城市">
            <el-input
              :disabled="areaIsAll"
              v-model="form.city"
              placeholder="城市"
            />
          </el-form-item>
          <el-form-item label="区">
            <el-input
              :disabled="areaIsAll"
              v-model="form.region"
              placeholder="区"
            />
          </el-form-item>
          <el-form-item>
            <el-switch active-text="不做限制" v-model="areaIsAll" />
          </el-form-item>

          <el-form-item>
            <el-button
              :disabled="false"
              type="primary"
              @click="handleSubmitArea"
              >添加</el-button
            >
          </el-form-item>
        </div>
        <div class="auth">
          <h3>身份验证</h3>
          <el-form-item label="认证方式">
            <el-select
              v-model.number="form.auth_type"
              placeholder="身份认证信息"
            >
              <el-option v-if="form.auth_type !== 0" label="0" value="0">
                不启用
              </el-option>
              <el-option v-if="form.auth_type !== 1" label="1" value="1">
                身份证
              </el-option>
              <el-option v-if="form.auth_type !== 2" label="2" value="2">
                护照验证
              </el-option>
            </el-select>
          </el-form-item>
        </div>

        <h3>担保人</h3>
        <el-form-item>
          <el-checkbox v-model="form.bondsman" label="是否需要担保人" />
        </el-form-item>
      </el-form>

      <div class="nav-btns">
        <GoNext
          text="下一步"
          btn-type="primary"
          :to="{
            name: '产品添加-第三步',
            params: {
              product: JSON.stringify({
                auth_type: form.auth_type,
                bondsman: form.bondsman,
                area: form.area,
                ...previousProdct,
              }),
            },
          }"
        />
        <GoBack text="上一步" btn-type="primary" />
        <el-button type="danger" @click="handleCancel">取消</el-button>
      </div>
    </el-card>

    <el-card class="areas-card">
      您已添加的地区:
      <el-scrollbar height="600px">
        <div v-for="(place, index) in form.area" :key="index">
          {{ index }} :
          <el-tag :type="moduloGetItem(tagTypes, index)">
            {{ stringifyArea(place) }}
          </el-tag>

          <el-button
            class="delete-btn"
            type="danger"
            size="small"
            @click="() => handleDeleteArea(index)"
            >删除
          </el-button>
        </div>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script setup>
import GoNext from "../../components/GoNext";
import GoBack from "../../components/GoBack";
import { tagTypes } from "../../utils/tags";
import { stringifyArea, moduloGetItem, formatDate } from "../../utils/util";

import { ref, reactive } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const previousProdct = JSON.parse(router.params.product);

const areaIsAll = ref(false);

const form = reactive({
  province: "",
  city: "",
  region: "",
  auth_type: 0,
  bondsman: false,
  area: [],
});

const handleSubmitArea = () => {
  if (areaIsAll.value === true) {
    form.area.push("all");
  } else {
    const newArea = {
      province: form.province,
      city: form.city,
      region: form.region,
    };

    form.area.push(newArea);
  }
};

const handleDeleteArea = (index) => {
  form.area.splice(index, 1);
};

const handleCancel = () => {};
</script>

<style lang="scss" scoped>
h3 {
  text-align: left;
  margin-top: 40px;
}
.step2 {
  display: flex;
  flex-direction: row;
  .form-card {
    flex-grow: 2;
    flex-basis: 0;
    margin-right: 50px;

    .nav-btns {
      margin-top: 20px;
    }
  }

  .areas-card {
    flex-grow: 1;
    flex-basis: 0;

    text-align: left;
    margin: 0 auto;
    .delete-btn {
      margin: 20px;
    }
  }
}
</style>
