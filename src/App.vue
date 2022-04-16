<template>
  <div class="app" v-if="currentRoute !== 'login'">
    <Header />
    <Sidebar />
    <div class="main-container">
      <div class="breadcrumb-container">
        <h4>{{ currentRoute }}</h4>
      </div>
      <div class="router-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <div class="login-container" v-else>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { computed } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();

const currentRoute = computed(() => {
  return router.name;
});
</script>

<style lang="scss">
@import "./assets/css/main.css";

.main-container {
  position: absolute;
  left: 198px;
  right: 0;
  top: 70px;
  bottom: 0;
  background-color: white;
}

.breadcrumb-container {
  padding: 5px;
  margin: 5px;
  h4 {
    margin: 20px;
  }
}

.router-container {
  padding: 20px;
  margin: 5px;
}
</style>
