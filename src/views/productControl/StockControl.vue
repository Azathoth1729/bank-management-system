<template>
  <section>
    <el-table :data="products" stripe style="width: 100%">
      <el-table-column prop="id" label="产品ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="产品名" width="180">
      </el-table-column>
      <el-table-column prop="stock" label="总库存" sortable width="180">
      </el-table-column>
      <el-table-column prop="payed_stock" label="已购买数" sortable width="180">
      </el-table-column>
      <el-table-column prop="remain" label="剩余可买" sortable width="180">
        <template slot-scope="scope">
          <span> {{ scope.row.stock - scope.row.payed_stock }} </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="">
        <template slot-scope="scope">
          <el-row>
            <el-input
              class="edit-box"
              v-model="amount"
              placeholder="0"
              clearable
            ></el-input>
            <el-button
              type="primary"
              round
              class="edit-btn"
              @click="handleEdit(scope.row.id, scope.row.amount)"
              >修改库存
            </el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
import { getAllProducts, getProductById } from '../../assets/data/products'

export default {
  name: 'StockControl',
  data() {
    return {
      products: getAllProducts(),
      amount: 0,
    }
  },

  methods: {
    handleEdit(id, amount) {
      let product = getProductById(id)
      product.stock = amount
    },
  },
}
</script>

<style scoped>
.edit-box {
  margin-bottom: 5px;
}

.edit-btn {
  margin-left: 0px;
}
</style>
