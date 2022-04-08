<template>
    <section>
        <div class="background">
            <el-button type="info" icon="el-icon-back" class="back">返回</el-button>
        </div>
    </section>
</template>

<script>
    export default {
      name: 'ProductShow',
        data() {
            return {

            }
        },
        methods: {
        
        }
    }
</script>

<style>
.background {
  background: url("../../../public/img/product_background.webp") no-repeat;
  background-color: aquamarine;
  background-position: center;
  height: 100%;
  width: 80%;
  background-size: cover;
  position: fixed;
}
.back{
  margin-top: 20px;
  margin-left: -1100px;  
}
</style>
