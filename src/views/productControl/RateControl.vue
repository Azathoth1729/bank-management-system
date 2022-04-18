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
    <el-table-column prop="rate" label="税率"> </el-table-column>
    <el-table-column prop="calculate_rate" label="后续利率计算方式">
    </el-table-column>
    <el-table-column label="">
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

  <el-button type="primary" class="done-btn" @click="handleSubmit">
    提交修改
  </el-button>

  <!-- 编辑弹出框 -->
  <el-dialog v-model="editVisible" title="修改信息" width="30%">
    <el-form label-width="70px">
      <el-form-item label="税率">
        <el-input v-model="form.rate"></el-input>
      </el-form-item>
      <el-form-item label="后续税率计算方式">
        <el-input v-model="form.calculate_rate"></el-input>
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
import { ref, reactive, onMounted,computed } from "vue";
import { fetchData, postData } from "../../network/request";
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

const handleEdit = (row) => {
  currentId.value = row.id;
  Object.keys(form).forEach((item) => {
    form[item] = row[item];
  });
  editVisible.value = true;
};

const saveEdit = () => { // 需要调用后端
  editVisible.value = false;

  // 从这里开始,调用后端把对应的product改成当前的form
  const product = getProductById(currentId.value);

  Object.keys(form).forEach((item) => {
    product[item] = form[item];
  });
};
</script>

<style lang="scss" scoped>
.done-btn {
  margin-top: 20px;
}
</style>
