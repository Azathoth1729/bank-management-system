<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      background-color="#E5E2DF"
      text-color=""
      active-text-color="#D39938"
      :default-active="onRoutes"
      unique-opened
      router
    >
      <template v-for="item in navItems" :key="item.index">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index">
            <template #title>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs" :key="subItem.index">
              <el-menu-item :index="subItem.index">
                <template #title>{{ subItem.title }}</template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const onRoutes = computed(() => {
  return route.path;
});

const navItems = [
  {
    index: "/home",
    title: "产品首页",
  },
  {
    index: "/create",
    title: "产品创建",
    subs: [
      {
        index: "/create/create_product/1",
        title: "产品添加",
      },
    ],
  },
  {
    index: "/product",
    title: "产品修改",
    subs: [
      {
        index: "/product/area_control",
        title: "地区控制",
      },
      {
        index: "/product/authentication",
        title: "身份认证",
      },
      {
        index: "/product/bondsman_control",
        title: "担保人控制",
      },
      {
        index: "/product/penalty_control",
        title: "违约控制",
      },
      {
        index: "/product/rate_control",
        title: "利率控制",
      },
      {
        index: "/product/stock_control",
        title: "库存控制",
      },
      {
        index: "/product/tags_control",
        title: "产品标签",
      },
      {
        index: "/product/white_list",
        title: "黑名单控制",
      },
    ],
  },
  {
    index: "/product_info",
    title: "产品信息",
  },
  {
    title: "黑名单信息",
    index: "/blackList",
  },
  {
    title: "担保人信息",
    index: "/bondsmanList",
  },
  {
    index: "/history",
    title: "操作记录",
  },
];
</script>

<style lang="scss" scoped>
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
