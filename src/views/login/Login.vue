<template>
  <div>
    <div class="login-container">
      <el-form
        :rules="rules"
        status-icon
        ref="ruleForm2"
        label-position="left"
        label-width="0px"
        class="login-page"
      >
        <h3>银行管理系统 登录</h3>
        <el-form-item>
          <el-input
            prop="username"
            type="text"
            v-model="user.username"
            auto-complete="off"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prop="password"
            type="password"
            v-model="user.password"
            auto-complete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
        <el-form-item style="width: 100%">
          <el-button
            type="primary"
            style="width: 100%"
            @click="login"
            :loading="logining"
            >登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { request } from "../../network/request";

import { reactive } from "vue";
import { useRouter } from "vue-router";

const logining = false; //设置登录按钮状态
const checked = false; //设置是否记住密码初始状态
const router = useRouter();

const user = reactive({
  username: "",
  password: "",
});

const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }], //登录时验证用户名密码是否为空
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const login = () => {
  request({
    url: "/login",
    method: "POST",
    header: {
      "Content-Type": "multipart/form-data",
    },
    params: {
      username: user.username,
      password: user.password,
    },
  })
    .then((res) => {
      if (res.data.code === 200) {
        sessionStorage.setItem("token", res.data.data.token);
        sessionStorage.setItem("isLogin", 1);

        sessionStorage.setItem("username", user.username);
        sessionStorage.setItem("password", user.password);
        router.push("/home");
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}

.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 280px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.rememberme {
  margin: 0 0 15px;
  text-align: left;
}
</style>
