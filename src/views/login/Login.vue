<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="Image" />
    </div>
    <div class="login-container login_from">
      <el-form
        :rules="rules"
        status-icon
        ref="ruleForm2"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-page"
      >
        <h3 class="title">银行管理系统 登录</h3>
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
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { request } from "../../network/request";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      logining: false, //设置登录按钮状态
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ], //登录时验证用户名密码是否为空
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      checked: false, //设置是否记住密码初始状态
      imgSrc: require("../../assets/images/bg.png"),
    };
  },

  methods: {
    login() {
      request({
        url: "/login",
        method: "POST",
        header: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          username: this.user.username,
          password: this.user.password,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            sessionStorage.setItem("token", res.data.data.token);
            sessionStorage.setItem("isLogin", 1);

            sessionStorage.setItem("username", this.user.username);
            sessionStorage.setItem("password", this.user.password);
            this.$router.push("/home/products");
          }
        })
        .catch((err) => {
          console.log(err.msg);
        });
      this.$router.push("/home/products");
    },
  },
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
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0 0 15px;
  text-align: left;
}

.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  left: 0;
}
.login_from {
  position: relative;
  top: 200px;
}
</style>
