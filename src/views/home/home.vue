<template>
  <el-row class="container">
    <Header />
    <el-col :span="24" class="main">
      <Navigator />
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <strong ref="title" class="title">{{ $route.name }}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item
                v-for="item in $route.matched"
                :key="item.path"
              >
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
import Navigator from "../../components/navigator/navigator";
import Header from "../../components/header/header";

export default {
  name: "Home",
  components: {
    Navigator,
    Header,
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}

.container .main {
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 0px;
  overflow: hidden;
}

.container .main .content-container {
  flex: 1;
  overflow-y: scroll;
  padding: 20px;
}

.container .main .content-container .breadcrumb-container .title {
  width: 200px;
  float: left;
  color: #475669;
}

.container .main .content-container .breadcrumb-container .breadcrumb-inner {
  float: right;
}

.container .main .content-container .content-wrapper {
  background-color: #fff;
  box-sizing: border-box;
}

.content-wrapper {
  margin-top: 30px;
}

.title {
  margin-left: -50px;
  font-size: large;
}
</style>
