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
    <el-table-column label="违约政策">
      <template #default="scope">
        {{ scope.row.penalty }}
      </template>
    </el-table-column>

    <el-table-column label="修改">
      <template #default="scope">
        <el-select
          @change="handleEdit($event, scope.row, scope.$index)"
          v-model.number="penaltys[scope.$index]"
          placeholder="选择违约政策"
        >
          <el-option
            v-if="scope.row.penalty !== 0"
            label="违约政策0"
            value="0"
          />
          <el-option
            v-if="scope.row.penalty !== 1"
            label="违约政策1"
            value="1"
          />
          <el-option
            v-if="scope.row.penalty !== 2"
            label="违约政策2"
            value="2"
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

const products = getAllProducts();

const penaltys = reactive([]);

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

const productSize = computed(()=>state.responseData.length);
const username = sessionStorage.getItem("username")
const ischanged = new Array(1000).fill(0);


const handleEdit = (event, product,idx) => {
  product.penalty = parseInt(event);
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
  console.log(responseData)
  for(let i=0; i<responseData.length; i++){
    postData({
      url: "/assistance/updateProduct",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      data : responseData[i],
    })
    
    postData({
      url: "/logrecord/addlog",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      data :{
        username: sessionStorage.username,
        opeator: "修改",
        productname: responseData.name,
        operatecolumn: 4,
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
