<template>
  <section>
    <span>{{ state.responseData }}</span>
    <el-table
      :data="products"
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
            @change="handleEdit($event, scope.row)"
            v-model.number="white_lists[scope.$index]"
            placeholder="选择黑名单"
          >
            <el-option
              v-if="scope.row.white_list !== 0"
              label="黑名单0"
              value="0"
            />
            <el-option
              v-if="scope.row.white_list !== 1"
              label="黑名单1"
              value="1"
            />
            <el-option
              v-if="scope.row.white_list !== 2"
              label="黑名单2"
              value="2"
            />
          </el-select>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="primary" class="done-btn" @click="handleSubmit">
      提交修改
    </el-button>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { fetchData } from "../../network/request";
import { getAllProducts } from "../../assets/data/products";

const state = reactive({
  // responseCode: 0,
  // responseMsg: "",
  // fetching: false,
  responseData: [],
});

onMounted(() => {
  const config = {
    url: "/blacklist/all/1",
    method: "GET",
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  fetchData(config, state);
  // const { responseData } = fetchData(config);
});

const handleEdit = (event, product) => {
  product.white_list = parseInt(event);
};

const handleSubmit = () => {};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
