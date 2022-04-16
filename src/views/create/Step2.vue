<template>
  <div class="step2">
    <el-card class="form-card">
      <el-form :inline="true" :model="tableArea" class="form-inline">
        <h3>地区控制</h3>
        <el-form-item label="省份">
          <el-input
            :disabled="areaIsAll"
            v-model="tableArea.province"
            placeholder="省份"
          />
        </el-form-item>
        <el-form-item label="城市">
          <el-input
            :disabled="areaIsAll"
            v-model="tableArea.city"
            placeholder="城市"
          />
        </el-form-item>
        <el-form-item label="区">
          <el-input
            :disabled="areaIsAll"
            v-model="tableArea.region"
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
            @click="() => handleSubmitArea(tableArea)"
            >添加</el-button
          >
        </el-form-item>

        <h3>身份验证</h3>
        <el-form-item>
          <el-radio v-model="form.auth_type" label="0" size="large"
            >不启用</el-radio
          >
        </el-form-item>
        <el-form-item>
          <el-radio v-model="form.auth_type" label="1" size="large"
            >身份证</el-radio
          >
        </el-form-item>
        <el-form-item>
          <el-radio v-model="form.auth_type" label="2" size="large"
            >护照验证</el-radio
          ></el-form-item
        >
        <h3>担保人</h3>
        <el-form-item>
          <el-checkbox
            v-model="form.bondsman"
            label="是否需要担保人"
            size="large"
          />
        </el-form-item>
      </el-form>

      <div class="nav-btns">
        <GoNext
          @click="() => handleSubmit(areas)"
          text="下一步"
          btn-type="primary"
          router-name="/create/create_product/3"
        />
        <GoBack text="上一步" btn-type="primary" />
        <el-button type="danger" @click="handleCancel">取消</el-button>
      </div>
    </el-card>

    <el-card class="areas-card">
      您已添加的地区:
      <el-scrollbar height="600px">
        <div v-for="(place, index) in areas" :key="index">
          {{ index }} :
          {{ stringifyArea(place) }}
          <el-button
            class="delete-btn"
            type="danger"
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

import { stringifyArea, stringifyObj } from "../../utils/util";

import { ref, reactive } from "vue";

const tableArea = reactive({
  province: "",
  city: "",
  region: "",
});

const areas = ref([]);

const areaIsAll = ref(false);

const form = reactive({
  auth_type: 0,
  bondsman: false,
});

const handleSubmitArea = (area) => {
  console.log(areaIsAll.value);
  if (areaIsAll.value === true) {
    areas.value.push("all");
  } else {
    const newArea = { ...area };
    areas.value.push(newArea);
  }
};

const handleDeleteArea = (index) => {
  areas.value.splice(index, 1);
};

const handleCancel = () => {};

const handleSubmit = (areas) => {
  console.log(stringifyObj(areas));
};
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
