<template>
  <section>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="number" label="产品编号" width="380">
      </el-table-column>
      <el-table-column prop="name" label="产品名" width="380">
      </el-table-column>
      <el-table-column
        prop="way"
        label="认证方式"
        :filters="[
          { text: '身份证', value: 1 },
          { text: '护照', value: 2 },
          { text: '社保卡', value: 3 },
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
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="beforeHandleCommand(scope.$index, 1)"
                >身份证</el-dropdown-item
              >
              <el-dropdown-item :command="beforeHandleCommand(scope.$index, 2)"
                >护照</el-dropdown-item
              >
              <el-dropdown-item :command="beforeHandleCommand(scope.$index, 3)"
                >社保卡</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="success" round class="ad" @click="handleAdd"
      >提交数据</el-button
    >
  </section>
</template>

<script>
export default {
  name: "Authentication",
  data() {
    return {
      tableData: [
        {
          number: "235611231",
          name: "大秦科技基金",
          way: 1,
        },
        {
          number: "235611231",
          name: "大秦科技基金",
          way: 2,
        },
        {
          number: "235611231",
          name: "大秦科技基金",
          way: 3,
        },
        {
          number: "235611231",
          name: "大秦科技基金",
          way: 2,
        },
        {
          number: "235611231",
          name: "大秦科技基金",
          way: 3,
        },
      ],
    };
  },
  methods: {
    beforeHandleCommand(index, command) {
      return {
        index: index,
        command: command,
      };
    },
    change(command) {
      this.tableData[command.index].way = command.command;
      // console.log(command)
    },
    filterTag(value, row) {
      return row.way === value;
    },
    handleAdd() {
      this.$alert("已成功提交", "身份认证方式", {
        confirmButtonText: "确定",
        // callback: action => {
        //         this.$message({
        //             type: 'info',
        //             message: `action: ${ action }`
        //         });
        //     }
      });
    },
  },
  filters: {
    //tag类型
    gettag(way) {
      const Type = {
        1: "身份证",
        2: "护照",
        3: "社保卡",
      };
      return Type[way];
    },
    //颜色名称
    getcolor(way) {
      const arr = {
        1: "primary",
        2: "success",
        3: "warning",
      };
      return arr[way];
    },
  },
};
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
