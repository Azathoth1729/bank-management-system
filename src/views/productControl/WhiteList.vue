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
      <el-table-column label="黑名单">
        <template #default="scope">
          {{ scope.row.white_list }}
        </template>
      </el-table-column>

      <el-table-column label="修改">
        <template #default="scope">
          <el-select
            @change="handleEdit($event, scope.row, scope.$index)"
            v-model.number="white_lists[scope.$index]"
            placeholder="选择黑名单"
          >
            <el-option label="黑名单0" value="0" />
            <el-option label="黑名单1" value="1" />
            <el-option label="黑名单2" value="2" />
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
import { ref, reactive, onMounted, computed } from "vue";
import { fetchData, postData } from "../../network/request";
import { getAllProducts, getProductById } from "../../assets/data/products";

const state = reactive({
  // responseCode: 0,
  // responseMsg: "",
  // fetching: false,
  responseData: [],
});

const white_lists = reactive([]);

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

const productSize = computed(() => state.responseData.length);
const username = sessionStorage.getItem("username");
const ischanged = new Array(1000).fill(0);

const handleEdit = (event, product, idx) => {
  product.white_list = parseInt(event);
  ischanged[idx] = 1;
  console.log(username);
};

const handleSubmit = () => {
  let responseData = state.responseData.filter((num, idx) => {
    return ischanged[idx] === 1;
  });

  for (let i = 0; i < responseData.length; i++) {
    postData({
      url: "/assistance/updateProduct",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      data: responseData[i],
    });

    postData({
      url: "/logrecord/addlog",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      data: {
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
