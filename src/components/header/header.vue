<template>
  <el-col :span="24" class="header">
    <el-col :span="10" class="logo logo-width">
      {{sysName}}
    </el-col>
    <el-col :span="10">
      <div class="tools">
        <i class="fa fa-align-justify"></i>
      </div>
    </el-col>
    <el-col :span="4" class="userinfo">
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-col>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      sysName:'银行后台管理系统',
      sysUserName: '',
      sysUserAvatar: require('../../assets/user.png'),
    }
  },
  mounted() {
    let username = localStorage.getItem('username');
    console.log(username)
    if (username !== '') {
      this.sysUserName = username || '';
    }
  },
  methods:{
    //退出登录
    logout: function () {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        sessionStorage.removeItem('isLogin');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        _this.$router.push('/login');
      }).catch(() => {
      });
    },
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background:#303133;
  color: #606266;
}

.header .userinfo {
  text-align: right;
  padding-right: 35px;
  float: right;
}

.header .userinfo .userinfo-inner {
  cursor: pointer;
  color: #fff;
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
  border-color: rgba(238, 241, 146, 0.3);
  border-right-width: 1px;
  border-right-style: solid;
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

.header .tools {
  padding: 0px 23px;
  width: 14px;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
}

</style>