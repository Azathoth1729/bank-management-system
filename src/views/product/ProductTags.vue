<template>
  <section>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="number" label="产品编号" width="280">
      </el-table-column>
      <el-table-column prop="name" label="产品名" width="280">
      </el-table-column>
      <el-table-column prop="lab" label="产品标签">
        <template slot-scope="scope">
          <el-tag
            :key="tag"
            v-for="(tag, index) in scope.row.dynamicTags"
            :type="color_(index)"
            closable
            :disable-transitions="false"
            @close="handleClose(scope.$index, tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="scope.row.inputVisible"
            v-model="scope.row.inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm(scope.$index)"
            @blur="handleInputConfirm(scope.$index)"
          >
          </el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput(scope.$index)"
            >+ New Tag</el-button
          >
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
  name: "ProductTags",
  data() {
    return {
      tableData: [
        {
          number: "235611231",
          name: "大秦科技基金",
          amount: 0,
          dynamicTags: ["标签一", "标签二", "标签三"],
          inputVisible: false,
          inputValue: "",
        },
        {
          number: "235611231",
          name: "大秦科技基金",
          amount: 0,
          dynamicTags: ["标签一", "标签二", "标签三"],
          inputVisible: false,
          inputValue: "",
        },
      ],
      Type: ["", "success", "info", "warning", "danger"],
    };
  },
  methods: {
    handleClose(row, tag) {
      console.log(this.tableData[row].dynamicTags);
      this.tableData[row].dynamicTags.splice(
        this.tableData[row].dynamicTags.indexOf(tag),
        1
      );
      console.log(this.tableData[row].dynamicTags);
    },

    showInput(row) {
      this.tableData[row].inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.focus();
      });
      console.log(this.tableData[row].inputVisible);
    },

    handleInputConfirm(row) {
      let inputValue = this.tableData[row].inputValue;
      if (inputValue) {
        this.tableData[row].dynamicTags.push(inputValue);
      }
      this.tableData[row].inputVisible = false;
      this.tableData[row].inputValue = "";
    },
    handleAdd() {
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
    color_(index) {
      return this.Type[index % 5];
    },
  },
  computed: {},
};
</script>

<style>
.ad {
  margin-bottom: 20px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
