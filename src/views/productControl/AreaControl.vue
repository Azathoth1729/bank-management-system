<template>
  <section>
    <!-- <span>{{ state.responseData }}</span> -->
    {{sessionStorage}}
    <el-table
      :data="state.responseData"
      :default-sort="{ prop: 'id', order: 'descending' }"
      border
      style="width: 100%"
    >
      <el-table-column prop="id" label="ID" sortable> </el-table-column>
      <el-table-column prop="name" label="产品名" sortable> </el-table-column>
      <el-table-column prop="detail" label="详情"> </el-table-column>
      <el-table-column label="地区">
        <template #default="scope">
          <div v-if="isString(scope.row.area)">
            <!-- <strong> scope.$index= {{ scope.$index }} </strong> -->
            <el-tag :type="moduloGetItem(tagTypes, scope.$index)">
              {{ stringifyArea(scope.row.area) }}
            </el-tag>
          </div>
          <div v-else>
            <div v-for="(area, index) in scope.row.area" :key="index">
              <!-- <strong>
              (scope.$index, index)= {{ scope.$index }} {{ index }}
            </strong> -->
              <el-tag :type="moduloGetItem(tagTypes, index)">
                {{ stringifyArea(area) }}
              </el-tag>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="primary" class="done-btn" @click="handleSubmit">
      提交修改
    </el-button>
  </section>
</template>

<script setup>
import { tagTypes } from "../../utils/tags";
import { ref, reactive, onMounted } from "vue";
import { fetchData , postData} from "../../network/request";
import { getAllProducts } from "../../assets/data/products";
import {
  isString,
  stringifyArea,
  moduloGetItem,
  formatDate,
} from "../../utils/util";

const state = reactive({
  // responseCode: 0,
  // responseMsg: "",
  // fetching: false,
  responseData: [],
});


onMounted(() => {
  const config = {
    url: "/assistance/listProductIntro",
    method: "GET",
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  fetchData(config, state);
  // fetchData(whitelist, config);
  // const { responseData } = fetchData(config);
});
// const products = state.responseData;

const size = state.responseData.length;
const username = sessionStorage.getItem("username")
const ischanged = new Array(1000).fill(0);

const handleSubmit = (row) => {
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
      data : responseData[i],
    })
    postData({
      url: "/logrecord/addlog",
      method: "POST",
      header: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        username: sessionStorage.username,
        opeator: "修改",
        productname: responseData.name,
        operatecolumn: 1,
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
