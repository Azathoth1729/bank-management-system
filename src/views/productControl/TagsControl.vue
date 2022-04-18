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
    <el-table-column label="标签">
      <template #default="scope">
        <el-tag size="small">{{ scope.row.tag }} </el-tag>
      </template>
    </el-table-column>

    <el-table-column label="修改">
      <template #default="scope">
        <el-select
          @change="handleEdit($event, scope.row, scope.$index)"
          v-model="tags[scope.$index]"
          placeholder="请选择基金所属类型"
        >
          <el-option
            v-for="(tag, index) in AllTags"
            :key="index"
            :label="tag"
            :value="tag"
          />
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
import { ref, reactive, onMounted,computed } from "vue";
import { fetchData, postData } from "../../network/request";
import { getAllProducts, getProductById } from "../../assets/data/products";
import { tags as AllTags } from "../../utils/tags";

import {} from "../../utils/util";

const products = getAllProducts();

const tags = reactive([]);

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
      "Content-Type": "application/json",
    },
  };

  fetchData(config, state);
  // const { responseData } = fetchData(config);
});
// const products = getAllProducts();

const auth_types = reactive([]);

const productSize = computed(()=>state.responseData.length);
const username = sessionStorage.getItem("username")
const ischanged = new Array(1000).fill(0);

const handleEdit = (event, product, idx) => {
  product.tag = event;
  ischanged[idx] = 1;
  console.log(idx)
};

const handleSubmit = () => {
  var responseData = state.responseData.filter((num,idx) => {
    console.log(ischanged[idx])
    // console.log(productSize)
    // console.log(state.responseData.length)
    // console.log(ischanged)

    return ischanged[idx] === 1; 
  })
  //console.log("***********"+JSON.stringify(responseData))
  // let temp = {
  //   username: sessionStorage.username,
  //   operator: "修改",
  //   productname: responseData[0].name,
  //   operatecolumn: 3
  // }
  // console.log("**************"+JSON.stringify(temp));
  for(let i=0; i<responseData.length; i++){
    console.log(JSON.stringify(responseData[i]))
    postData({
      url: "/assistance/updateProduct",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      data:responseData[i], 
      // data:JSON.stringify(), 
    })
    postData({
      url: "/logrecord/addlog",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      // data: temp,
      data: {
        username: sessionStorage.username,
        operator: "修改",
        productname: responseData.name,
        operatecolumn: 3,
      },
    })
    .then((res) => {
      if (res.data.code === 200) {
        console.log("提交成功！")
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
