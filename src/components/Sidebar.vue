<template>
  <div class="sidebar">
    <!--导航菜单-->
    <el-menu
      class="sidebar-el-menu"
      background-color="#E5E2DF"
      text-color=""
      active-text-color="#D39938"
      ref="nav"
      :unique-opened="false"
      :default-active="router.path"
      :router="true"
    >
      <template v-for="(routeItem, index) in navRoutes">
        <el-sub-menu
          :index="index + ''"
          v-if="!routeItem.leaf && index !== 0 && index !== 1"
          :key="index"
        >
          <template v-slot:title>
            <div class="title">
              <p style="font-size: 17px">{{ routeItem.name }}</p>
            </div>
          </template>
          <template v-for="child in routeItem.children">
            <el-menu-item
              :index="routeItem.path + '/' + child.path"
              v-if="true"
              :key="child.path"
            >
              <p>{{ child.name }}</p>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navRoutes = router.options.routes;
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu {
  width: 200px;
}

.sidebar > ul {
  height: 100%;
}
</style>
