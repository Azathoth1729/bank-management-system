<template>
  <Header />
  <Sidebar />
  <div class="main">
    <div class="breadcrumb-container">
      <strong ref="title" class="breadcrumb-title">{{ router.name }}</strong>
      <el-breadcrumb separator="/" class="breadcrumb-inner">
        <el-breadcrumb-item v-for="item in router.matched" :key="item.path">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="router-container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default {
  name: "Navigation",
  components: {
    Sidebar,
    Header,
  },

  setup() {
    const router = useRoute();
    return { router };
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  left: 220px;
  right: 0;
  top: 90px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  // background: #e5e2df;
}
</style>
