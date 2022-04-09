<template>
  <el-col :span="24" class="header">
    <el-col :span="10" class="logo logo-width">
      {{ sysName }}
    </el-col>
    <el-col :span="4" class="userinfo">
      <el-dropdown>
        <span class="el-dropdown-link userinfo-inner"
          ><img :src="this.sysUserAvatar" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-col>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      sysName: "银行后台管理系统",
      sysUserAvatar: require("../assets/icon.png"),
    };
  },
  mounted() {
    let username = localStorage.getItem("username");
    console.log(username);
    if (username !== "") {
      this.sysUserName = username || "";
    }
  },
  methods: {
    //退出登录
    logout() {
      this.$confirm("确认退出吗?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("isLogin");
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("password");
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #E5E2DF;
  /* color: ; */
  /* border-bottom: 0.5px solid rgb(195, 206, 203); */
}

.header .userinfo {
  text-align: right;
  padding-right: 35px;
  float: right;
}

.header .userinfo .userinfo-inner {
  cursor: pointer;
}

.header .userinfo .userinfo-inner img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 10px 0px 10px 10px;
  float: right;
}

.header .logo {
  height: 60px;
  font-size: 22px;
  padding-left: 20px;
  padding-right: 20px;
  /* border-color: rgba(238, 241, 146, 0.3); */
  border-right-width: 1px;
  /* border-right-style: solid; */
}

.header .logo img {
  width: 40px;
  float: left;
  margin: 10px 10px 10px 18px;
}

.header .logo .txt {
  color: #fff;
}

.header .logo-width {
  width: 230px;
}

</style>
