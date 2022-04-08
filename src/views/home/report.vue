<template>
  <aside class="menu-expanded">
    <!-- <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img :src="require('../../assets/images/index/'+item+'.jpg')" @click="Ent">
      </el-carousel-item>
    </el-carousel> -->
    <template> 
      <br>
      <el-descriptions title="自定义样式列表" :column="3" border  >
        <template v-slot:extra>
          <el-button type="primary" size="small">详情</el-button>
        </template>
        <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item> 
      </el-descriptions>
      <br>
      <br>
      <el-descriptions title="自定义样式列表" :column="3" border  >
        <template v-slot:extra>
          <el-button type="primary" size="small">详情</el-button>
        </template>
        <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item> 
      </el-descriptions>
      <br><br>
      <el-descriptions title="自定义样式列表" :column="3" border  >
        <template v-slot:extra>
          <el-button type="primary" size="small">详情</el-button>
        </template>
        <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item> 
      </el-descriptions>
      <br><br>
      <el-descriptions title="自定义样式列表" :column="3" border  >
        <template v-slot:extra>
          <el-button type="primary" size="small">详情</el-button>
        </template>
        <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item> 
      </el-descriptions>
      <br><br>
      <el-descriptions title="自定义样式列表" :column="3" border  >
        <template v-slot:extra>
          <el-button type="primary" size="small">详情</el-button>
        </template>
        <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item> 
      </el-descriptions>
      <br><br>
      <el-descriptions title="自定义样式列表" :column="3" border  >
        <template v-slot:extra>
          <el-button type="primary" size="small">详情</el-button>
        </template>
        <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item> 
      </el-descriptions>
      <br><br>
      <el-descriptions title="自定义样式列表" :column="3" border  >
        <template v-slot:extra>
          <el-button type="primary" size="small">详情</el-button>
        </template>
        <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item> 
      </el-descriptions>
      <br>
    </template>
  </aside>
</template>

<script>

export default {
  name: 'Report',
  components: {

  },
  data() {
  },
  created() {
  },
  watch: {},
  methods :{
    Ent(){
      this.$router.replace('./contacts')
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
