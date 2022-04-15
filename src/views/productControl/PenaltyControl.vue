<template>
  <section>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="number" label="产品编号" width="200">
      </el-table-column>
      <el-table-column prop="name" label="产品名" width="200">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="200"> </el-table-column>
      <el-table-column prop="rate" label="利率(%)" width="200">
      </el-table-column>
      <el-table-column
        prop="way"
        label="违约处理方式"
        :filters="[
          { text: '固定罚款', value: 1 },
          { text: '降低利率', value: 2 },
          { text: '信誉分减少', value: 3 },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            class="xl"
            :type="scope.row.way | getcolor"
            disable-transitions
            >{{ scope.row.way | gettag }}
          </el-tag>
          <el-dropdown class="xl" @command="change">
            <span class="el-dropdown-link">
              <el-icon class="el-icon--right"><el-icon-arrow-down /></el-icon>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="beforeHandleCommand(scope.$index, 1)"
                >固定罚款</el-dropdown-item
              >
              <el-dropdown-item :command="beforeHandleCommand(scope.$index, 2)"
                >降低利率</el-dropdown-item
              >
              <el-dropdown-item :command="beforeHandleCommand(scope.$index, 3)"
                >信誉分减少</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
      <el-table-column label="减少幅度">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.input"
            placeholder="请输入内容"
          ></el-input>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="success" round class="ad" @click="handleAdd"
      >提交数据</el-button
    >
  </section>
</template>

<script>
import { ArrowDown as ElIconArrowDown } from '@element-plus/icons-vue'
export default {
  components: {
    ElIconArrowDown,
  },
  name: 'PreBreak',
  data() {
    return {
      tableData: [
        {
          number: '235611231',
          name: '大秦科技基金',
          price: 10000,
          rate: 1.23,
          way: 1,
          input: '',
        },
        {
          number: '235611231',
          name: '大秦科技基金',
          price: 10000,
          rate: 1.23,
          way: 1,
          input: '',
        },
        {
          number: '235611231',
          name: '大秦科技基金',
          price: 10000,
          rate: 1.23,
          way: 1,
          input: '',
        },
        {
          number: '235611231',
          name: '大秦科技基金',
          price: 10000,
          rate: 1.23,
          way: 1,
          input: '',
        },
        {
          number: '235611231',
          name: '大秦科技基金',
          price: 10000,
          rate: 1.23,
          way: 1,
          input: '',
        },
      ],
    }
  },
  methods: {
    beforeHandleCommand(index, command) {
      return {
        index: index,
        command: command,
      }
    },
    change(command) {
      this.tableData[command.index].way = command.command
      // console.log(command)
    },
    filterTag(value, row) {
      return row.way === value
    },
    handleAdd() {
      this.$alert('已成功提交', '身份认证方式', {
        confirmButtonText: '确定',
        // callback: action => {
        //         this.$message({
        //             type: 'info',
        //             message: `action: ${ action }`
        //         });
        //     }
      })
    },
  },
  filters: {
    //tag类型
    gettag(way) {
      const Type = {
        1: '固定罚款',
        2: '降低利率',
        3: '信誉分减少',
      }
      return Type[way]
    },
    //颜色名称
    getcolor(way) {
      const arr = {
        1: 'primary',
        2: 'success',
        3: 'warning',
      }
      return arr[way]
    },
  },
}
</script>

<style>
.num {
  margin-bottom: 5px;
}
.cal {
  margin-left: 0px;
}
.xl {
  margin-right: 10px;
}
.sel {
  position: absolute;
  clip: rect(2px 90px 30px 2px);
  width: 90px;
  height: 28px;
  line-height: 28px;
  font-size: 15px;
  font-weight: bold;
}
.ad {
  margin-bottom: 20px;
}
</style>
