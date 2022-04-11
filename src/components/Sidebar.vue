<template>
  <aside class="menu-expanded">
    <!--导航菜单-->
    <el-menu
      background-color="#E5E2DF"
      text-color=""
      active-text-color="#D39938"
      ref="nav"
      :unique-opened="false"
      :default-active="$route.path"
      :router="true"
      class="el-menu-vertical-demo"
    >
      <template v-for="(item, index) in navRoute">
        <el-submenu
          :index="index + ''"
          v-if="!item.leaf && index !== 0 && index !== 1"
          :key="index"
        >
          <template slot="title">
            <div class="title">
              <p style="font-size: 17px">{{ item.name }}</p>
            </div>
          </template>
          <template v-for="child in item.children">
            <el-menu-item
              :index="item.path + '/' + child.path"
              :key="child.path"
              v-if="!child.hidden"
            >
              <p>{{ child.name }}</p>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      navRoute: this.$router.options.routes,
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },

  computed: {},
};
</script>

<style scoped>
aside {
  flex: 0 0 230px;
  width: 230px;
}

aside .el-menu {
  height: 100%;
}

.menu-collapsed {
  flex: 0 0 60px;
  width: 60px;
}

.menu-expanded {
  flex: 0 0 230px;
  width: 230px;
  overflow-y: auto; /* 实现超出部分可以加滚动条*/
}

/* .nav-children {
  color: #ffffff; 
   text-align: center;
  font-size: small; 
} */
</style>
