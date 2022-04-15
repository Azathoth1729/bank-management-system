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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -180px;
}

.main-container {
  position: absolute;
  left: 220px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
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
