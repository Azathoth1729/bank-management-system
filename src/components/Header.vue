<template>
  <div class="header">
    <div class="logo">{{ sysName }}</div>
    <div class="header-right">
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <!-- 用户头像 -->
        <span class="el-dropdown-link">
          <img class="user-avator" :src="sysUserAvatar" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ElMessageBox } from "element-plus";

const sysName = "银行后台管理系统";
const sysUserAvatar = require("../assets/avatar.png");

const router = useRouter();

const handleCommand = (command) => {
  if (command == "logout") {
    ElMessageBox.confirm("确认退出吗?", "提示", {})
      .then(() => {
        sessionStorage.removeItem("isLogin");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("password");
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  background: #e5e2df;

  .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }

  .header-right {
    float: right;
    padding-right: 50px;
    display: flex;
    height: 70px;
    align-items: center;

    .user-avator {
      display: block;
      width: 55px;
      height: 55px;
      margin-top: 10px;
      cursor: pointer;
    }
  }
}
</style>
