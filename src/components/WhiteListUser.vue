<template>
  <el-tab-pane :label="`${listName}`">
    <el-table
      @cell-dblclick="cellClick"
      :data="users"
      stripe
      style="width: 100%"
    >
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <el-input
            size="mini"
            v-model="scope.row.name"
            v-if="scope.row.flag"
            @blur="inputClick(scope.row)"
            v-focus
          ></el-input>
          <span v-if="!scope.row.flag">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="账号">
        <template slot-scope="scope">
          <el-input
            size="mini"
            v-model="scope.row.number"
            v-if="scope.row.flag"
            @blur="inputClick(scope.row)"
            v-focus
          ></el-input>
          <span v-if="!scope.row.flag">{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="删除" width="">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, table1Data)"
            circle
          >
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-tab-pane>
</template>


<script>




export default {
  data() {
    return {
      isInput: false,
    };
  },

  props: {
    listName: String,
    users: Array,
  },

  methods: {
    handleDelete: function(row, data) {
      // return data.filter(function (data) {
      // })
      if (confirm("确定要删除吗") == true) {
        data.splice(row, 1);
      }
    },
  },
};
</script>

<style></style>
