<template>
  <aside class="menu-expanded">
    <!--导航菜单-->
    <!-- <el-menu ref="nav" :unique-opened="false" :default-active="$route.path" :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"> -->
    <el-menu   background-color= "#303133" ref="nav" :unique-opened="false" :default-active="$route.path" :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <template v-for="(item,index) in navRoute" >
        <el-submenu :index="index+''" v-if="!item.leaf && index !== 0 && index !== 1" :key=index>
          <template slot="title">
              <div class="title">
                <p style="font-size: 17px ; color: #909399">{{item.name}}</p>
              </div>
          </template>   
          <template v-for="child in item.children">
            <el-menu-item ref="nav_children"  :index="item.path + '/' + child.path" :key="child.path" v-if="!child.hidden">
              <p class="nav-children">{{child.name}}</p>
            </el-menu-item>
          </template>
        </el-submenu> 
        <!-- <el-menu-item class="nav-children" v-if="item.leaf && item.children.length>0" :index="item.children[0].path">{{item.children[0].name}}</el-menu-item> -->
      </template>
    </el-menu>
  </aside>
</template>

<script>
export default {
  name: "Navigator",
  data(){
    return{
      navRoute: this.$router.options.routes,
      routerName: '',
    }
  },
  mounted() {

  },
  methods:{
    handleOpen() {
      // console.log();
    },
    handleClose() {
      // this.$refs.nav.close(index);
    }
  },
  computed:{

  },
  updated: function () {
    this.$nextTick(function () {
      // console.log("this.item")
    })
  }
}
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
.nav-children{
  color: #475669;
  text-align: center;
  font-size: small;
}

</style>