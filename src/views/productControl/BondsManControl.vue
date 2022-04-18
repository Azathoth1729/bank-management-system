<template>
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
    <el-table-column label="担保人">
      <template #default="scope">
        {{ stringifyBondsman(scope.row.bondsman) }}</template
      >
    </el-table-column>

    <el-table-column label="修改">
      <template #default="scope">
        <el-checkbox
          @change="handleEdit($event, scope.row, scope.$index)"
          v-model.number="bondsmans[scope.$index]"
          label="是否需要担保人"
        />
      </template>
    </el-table-column>
  </el-table>
  <el-button type="primary" class="done-btn" @click="handleSubmit">
    提交修改
  </el-button>
</el-scrollbar>
</template>

<script setup>
import { ref, reactive, onMounted,computed } from "vue";
import { fetchData, postData } from "../../network/request";
import { getAllProducts, getProductById } from "../../assets/data/products";
import {
  stringifyObj,
  stringifyArea,
  stringifyBondsman,
} from "../../utils/util";

const products = getAllProducts();

const bondsmans = reactive([]);

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

  fetchData(config, state);
  // const { responseData } = fetchData(config);
});

const productSize = computed(()=>state.responseData.length);
const username = sessionStorage.getItem("username")
const ischanged = new Array(1000).fill(0);

const handleEdit = (event, product, idx) => {
 switch (event) {
    case "true":
      event = true;
      break;
    case "false":
      event = false;
      break;
  }
  state.responseData.bondsman = event;
  ischanged[idx] = 1;
  console.log(idx)
};

const handleSubmit = () => {
  var responseData = state.responseData.filter((num,idx) => {
    // console.log(ischanged[idx])
    // console.log(productSize)
    // console.log(state.responseData.length)
    // console.log(ischanged)

    return ischanged[idx] === 1; 
  })
  console.log(responseData)
  for(let i=0; i<responseData.length; i++){
    postData({
      url: "/assistance/returnAllProductDetail",
      method: "POST",
      header: {
        "Content-Type": "multipart/form-data",
      },
      params: responseData[i],
    })
    postData({
      url: "/logrecord/addlog",
      method: "POST",
      header: {
        "Content-Type": "multipart/form-data",
      },
      params:{
        username: sessionStorage.username,
        opeator: "修改",
        productname: responseData.name,
        operatecolumn: 3,
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
