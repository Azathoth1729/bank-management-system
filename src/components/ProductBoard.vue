<template>
  <section>
    {{ JSON.stringify(responseData, null, 4) }}
    <el-descriptions :title="state.responseData.name" :column="column" border>
      <el-descriptions-item label="产品名">
        {{ state.responseData.name }}
      </el-descriptions-item>
      <el-descriptions-item label="价格">
        {{ state.responseData.price }}
      </el-descriptions-item>
      <el-descriptions-item label="税率">
        {{ state.responseData.rate }}
      </el-descriptions-item>
      <el-descriptions-item label="后续税率计算方式">
        {{ state.responseData.calculate_rate }}
      </el-descriptions-item>
      <el-descriptions-item label="详情">
        {{ state.responseData.detail }}
      </el-descriptions-item>
      <el-descriptions-item label="标签" width="180">
        <el-tag size="small">{{ state.responseData.tag }} </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="地区">
        <div>
          <div v-for="(area, index) in state.responseData.area" :key="index">
            <el-tag :type="moduloGetItem(tagTypes, index)">
              {{ stringifyArea(area) }}
            </el-tag>
          </div>
        </div>
      </el-descriptions-item>
      <el-descriptions-item label="库存">
        {{ state.responseData.stock }}
      </el-descriptions-item>
      <el-descriptions-item label="认证方式">
        {{ stringifyAuthType(state.responseData.auth_type) }}
      </el-descriptions-item>
      <el-descriptions-item label="违约惩罚方式">
        {{ stringifyPenalty(state.responseData.penalty) }}
      </el-descriptions-item>
      <el-descriptions-item label="白名单">
        {{ state.responseData.white_list }}
      </el-descriptions-item>
      <el-descriptions-item label="担保人">
        {{ stringifyBondsman(state.responseData.bondsman) }}
      </el-descriptions-item>
    </el-descriptions>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { fetchData } from "../network/request";
import { getAllProducts } from "../assets/data/products";
import { tagTypes } from "../utils/tags";
import {
  isString,
  formatDate,
  moduloGetItem,
  stringifyBondsman,
  stringifyArea,
  stringifyAuthType,
  stringifyPenalty,
} from "../utils/util";

import { getProductById } from "../assets/data/products";

const props = defineProps({
  productId: {
    type: Number,
  },
  column: {
    type: Number,
    default: 2,
  },
});

const state = reactive({
  // responseCode: 0,
  // responseMsg: "",
  // fetching: false,
  responseData: [],
});

onMounted(() => {
  const config = {
    url: "/assistance/getProductDetailById/" + props.productId,
    method: "GET",
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  fetchData(config, state);
});

const responseData = computed(() => state.responseData);
</script>
<style lang="scss"></style>
