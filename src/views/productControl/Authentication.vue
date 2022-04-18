<template>

  <span>{{state.responseData[0]}}</span>
      <el-scrollbar height="450px">
        <el-table
    :data="state.responseData"
    :default-sort="{ prop: 'name', order: 'ascending' }"
    border
    style="width: 100%"
  >
    <el-table-column prop="id" label="ID" sortable> </el-table-column>
    <el-table-column prop="name" label="产品名" sortable> </el-table-column>
    <el-table-column prop="detail" label="详情"> </el-table-column>
    <el-table-column label="身份认证">
      <template #default="scope">
        {{ stringifyAuthType(scope.row.auth_type) }}
      </template>
    </el-table-column>

    <el-table-column label="修改">
      <template #default="scope">
        <el-select
          @change="handleEdit($event, scope.row, scope.$index)"
          v-model.number="auth_types[scope.$index]"
          placeholder="身份认证信息"
        >
          <el-option v-if="scope.row.auth_type !== 0" label="无" value="0" />
          <el-option
            v-if="scope.row.auth_type !== 1"
            label="身份证"
            value="1"
          />
          <el-option v-if="scope.row.auth_type !== 2" label="护照" value="2" />
        </el-select>
      </template>
    </el-table-column>
  </el-table>

  <el-button type="primary" class="done-btn" @click="handleSubmit">
    提交修改
  </el-button>
  </el-scrollbar>


</template>

<script setup>
import { ref, reactive,onMounted } from "vue";
import { fetchData } from "../../network/request";
import { getAllProducts, getProductById } from "../../assets/data/products";
import {
  stringifyObj,
  stringifyArea,
  stringifyAuthType,
} from "../../utils/util";

const state = reactive({
  // responseCode: 0,
  // responseMsg: "",
  // fetching: false,
  responseData: [],
});

onMounted(() => {
  const config = {
    url: "/assistance/returnAllProductDetail",
    method: "GET",
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  fetchData(state, config);
  // const { responseData } = fetchData(config);
});
// const products = getAllProducts();

const auth_types = reactive([]);

const handleEdit = (event, product, idx) => {
  product.auth_type = parseInt(event);
  this.ischanged[idx] = 1;
};

const size = state.responseData.length;
const ischanged = new Array(size).fill(0);

const handleSubmit = () => {
  state.responseData.filter((num) => {
    return num === 1;
  })
  for(let i=0; i<state.responseData.length; i++){
    request({
      url: "",
      method: "POST",
      header: {
        "Content-Type": "multipart/form-data",
      },
      params: state.responseData[i],
    })
    request({
      url: "",
      method: "POST",
      header: {
        "Content-Type": "multipart/form-data",
      },
      params:{
        
      },
    })
    .then((res) => {
      if (res.data.code === 200) {
        // console.log("提交成功！")
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
  }
};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
