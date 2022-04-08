<template>
  <section>
    <el-button type="primary" round class="dbr" @click="handleAdd"
      >添加用户</el-button
    >
    <el-button type="success" round class="dbr" @click="handleData"
      >提交数据</el-button
    >
    <!-- <el-button type="success" round class="ad" @click="handleAddl">添加白名单</el-button> -->
    <!-- <span>{{this.table1Data}}</span> -->
    <el-tabs type="border-card">
      <el-tab-pane label="白名单1">
        <el-table
          @cell-dblclick="cellClick"
          :data="table1Data"
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
      <el-tab-pane label="白名单2">
        <el-table :data="table2Data" stripe style="width: 100%">
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="number" label="账号"> </el-table-column>
          <el-table-column label="操作" width="">
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
      <el-tab-pane label="白名单3">
        <el-table :data="table3Data" stripe style="width: 100%">
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="number" label="账号"> </el-table-column>
          <el-table-column label="操作" width="">
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

      <el-tab-pane label="白名单4">
        <el-table :data="table4Data" stripe style="width: 100%">
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="number" label="账号"> </el-table-column>
          <el-table-column label="操作" width="">
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
    </el-tabs>
  </section>
</template>

<script>
import users from "../../assets/data/users";

export default {
  name: "WhiteList",
  data() {
    return {
      table1Data: users[0],
      table2Data: users[1],
      table3Data: users[2],
      table4Data: users[3],
    };
  },

  methods: {
    handleDelete(row, data) {
      // return data.filter(function (data) {
      // })
      if (confirm("确定要删除吗") == true) {
        data.splice(row, 1);
      }
    },
    // 添加行
    handleAdd() {
      let row = {
        name: "",
        number: "",
        flag: "false",
      };
      this.table1Data.push(row);
    },
    handleData() {
      this.$alert("已成功提交", "产品标签属性", {
        confirmButtonText: "确定",
        // callback: action => {
        //         this.$message({
        //             type: 'info',
        //             message: `action: ${ action }`
        //         });
        //     }
      });
    },
    directives: {
      // 注册一个局部的自定义指令 v-focus
      focus: {
        // 指令的定义
        inserted: function(el) {
          // 聚焦元素
          el.querySelector("input").focus();
        },
      },
    },
    // 编辑
    cellClick(row) {
      row.flag = true;
      console.log(row);
    },
    //input框失去焦点事件
    inputClick(row) {
      row.flag = false;
    },
  },
};
</script>

<style>
.dbr {
  margin-bottom: 20px;
  margin-left: -800px;
}
</style>
