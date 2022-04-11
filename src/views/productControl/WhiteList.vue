<template>
  <section>
    <el-button type="primary" round class="dbr" @click="handleAdd"
      >添加用户</el-button
    >
    <el-button type="success" round class="dbr" @click="handleData"
      >提交数据</el-button
    >
    <el-tabs type="border-card">
      <el-tab-pane v-for="(user, index) in users" :key="index" label="白名单">
        <UserItem v-bind:users="user" />
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import users from '../../assets/data/users'
import UserItem from '../../components/UserItem'

export default {
  name: 'WhiteList',

  components: {
    UserItem,
  },

  data() {
    return {
      users: users,
    }
  },

  methods: {
    // 添加行
    handleAdd() {
      let row = {
        name: '',
        number: '',
      }
      this.users.push(row)
    },

    handleData() {
      this.$alert('已成功提交', '产品标签属性', {
        confirmButtonText: '确定',
      })
    },
  },
}
</script>

<style>
.dbr {
  margin-bottom: 20px;
  margin-left: -800px;
}
</style>
