<template>
  <el-scrollbar height="450px">
    <el-table
      :data="state.responseData"
      :default-sort="{ prop: 'id', order: 'ascending' }"
      border
      style="width: 100%"
    >
      <el-table-column prop="id" label="ID" sortable> </el-table-column>
      <el-table-column prop="name" label="产品名" sortable> </el-table-column>
      <el-table-column prop="detail" label="详情"> </el-table-column>
      <el-table-column prop="rate" label="利率"> </el-table-column>
      <el-table-column prop="calculate_rate" label="后续利率计算方式">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="handleEdit(scope.row)"
            >编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑弹出框 -->
    <el-dialog v-model="editVisible" title="修改信息" width="30%">
      <el-form label-width="70px">
        <el-form-item label="利率">
          <el-input v-model.number="form.rate"></el-input>
        </el-form-item>
        <el-form-item label="后续税率计算方式">
          <el-input v-model.number="form.calculate_rate"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="editVisible = false">取消</el-button>
          <el-button type="primary" @click="saveEdit"> 提交 </el-button>
        </span>
      </template>
    </el-dialog>
  </el-scrollbar>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import service, { fetchData, postData } from "../../network/request";
import { getAllProducts, getProductById } from "../../assets/data/products";
import { stringifyArea, stringifyAuthType } from "../../utils/util";

const products = getAllProducts();

const currentId = ref(-1);
const editVisible = ref(false);

const form = reactive({
  rate: "",
  calculate_rate: "",
});

const state = reactive({
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
});

const productSize = computed(() => state.responseData.length);
const username = sessionStorage.getItem("username");
const ischanged = new Array(productSize).fill(0);

const handleEdit = (row) => {
  currentId.value = row.id;

  Object.keys(form).forEach((item) => {
    form[item] = row[item];
  });
  editVisible.value = true;
};

const saveEdit = async () => {
  editVisible.value = false;

  const getIdConfig = {
    url: `/assistance/getProductDetailById/${currentId.value}`,
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  };

  let res = await service(getIdConfig);
  const product = res.data.data;

  console.log(product);

  Object.keys(form).forEach((item) => {
    product[item] = form[item];
  });

  // const addConfig = {
  //   url: "/assistance/updateProduct",
  //   method: "POST",
  //   header: {
  //     "Content-Type": "application/json",
  //   },
  //   data: product,
  // };

  const addConfig = {
    url: "/assistance/addProduct",
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(product),
  };

  await service(addConfig);
};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
