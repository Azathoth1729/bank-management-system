<template>
  <section>
    <el-row>
      <el-button type="primary" round class="dbr" @click="Add"
        >添加担保人</el-button
      >
      <el-button type="success" round class="tj" @click="handleAdd"
        >提交数据</el-button
      >
    </el-row>
    <el-tabs type="border-card">
      <el-tab-pane label="担保人">
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
          <el-table-column label="操作" width="">
            <template slot-scope="scope">
              <el-button
                type="danger"
                :icon="ElIconDelete"
                @click="del(scope.$index, table1Data)"
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
import { Delete as ElIconDelete } from '@element-plus/icons'
export default {
  data() {
    return {
      table1Data: [
        {
          name: '秦傲杰',
          number: '2019141460306',
          flag: false,
        },
        {
          name: '徐孝鸽',
          number: '2019141460175',
          flag: false,
        },
        {
          name: '尚圣东',
          number: '2019141460324',
          flag: false,
        },
      ],
      ElIconDelete,
    }
  },
  name: 'BondsManControl',
  methods: {
    del: function (row, data) {
      // return data.filter(function (data) {
      // })
      if (confirm('确定要删除吗') == true) {
        data.splice(row, 1)
      }
    },
    // 添加行
    Add() {
      let row = {
        name: '',
        number: '',
        flag: 'false',
      }
      this.table1Data.push(row)
    },
    handleAdd() {
      this.$alert('已成功提交', '担保人信息', {
        confirmButtonText: '确定',
        // callback: action => {
        //         this.$message({
        //             type: 'info',
        //             message: `action: ${ action }`
        //         });
        //     }
      })
    },
    directives: {
      // 注册一个局部的自定义指令 v-focus
      focus: {
        // 指令的定义
        inserted: function (el) {
          // 聚焦元素
          el.querySelector('input').focus()
        },
      },
    },
    // 编辑
    cellClick(row) {
      row.flag = true
      console.log(row)
    },
    //input框失去焦点事件
    inputClick(row) {
      row.flag = false
    },
  },
}
</script>

<style>
.dbr {
  margin-bottom: 20px;
  margin-left: -800px;
}
.tj {
  margin-bottom: 20px;
  /* margin-left: -500px; */
}
</style>
