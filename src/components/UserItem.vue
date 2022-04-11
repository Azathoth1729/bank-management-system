<template>
  <el-table :data="users" stripe style="width: 100%">
    <el-table-column prop="username" label="姓名"> </el-table-column>
    <el-table-column prop="account" label="账号"> </el-table-column>
    <el-table-column label="编辑 / 删除" width="">
      <template>
        <el-button type="primary" :icon="ElIconEdit" @click="onEdit" circle>
        </el-button>
        <el-button type="danger" :icon="ElIconDelete" @click="onDelete" circle>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Edit as ElIconEdit, Delete as ElIconDelete } from '@element-plus/icons'
export default {
  data() {
    return {
      isInput: false,
      username: 'das',
      account: '',
      ElIconEdit,
      ElIconDelete,
    }
  },
  name: 'UserItem',
  props: {
    users: Array,
  },
  methods: {
    inputClick() {
      this.isInput = !this.isInput
    },

    onEdit() {},

    onDelete() {},
  },
}
</script>
