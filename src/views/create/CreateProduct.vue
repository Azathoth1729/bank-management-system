<template>
  <section>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="产品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="产品经理">
          <el-input v-model="form.jl"></el-input>
        </el-form-item>
        <el-form-item label="产品价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="产品利率">
          <el-input v-model="form.rate"></el-input>
        </el-form-item>
        <el-form-item label="管理费">
          <el-input v-model="form.glf"></el-input>
        </el-form-item>
        <el-form-item label="产品类型">
          <el-select v-model="form.region" placeholder="请选择基金所属板块">
            <el-option label="白酒" value="白酒"></el-option>
            <el-option label="半导体" value="半导体"></el-option>
            <el-option label="军工" value="军工"></el-option>
            <el-option label="医疗" value="医疗"></el-option>
            <el-option label="服装" value="服装"></el-option>
            <el-option label="汽车" value="汽车"></el-option>
            <el-option label="化工" value="化工"></el-option>
            <el-option label="新能源" value="新能源"></el-option>
            <el-option label="电力" value="电力"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="起始时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date4" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <!-- <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item> -->
        <el-form-item label="产品标语">
          <el-input v-model="form.by"></el-input>
        </el-form-item>
        <!-- <el-form-item label="基金类型">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="QDII" name="type"></el-checkbox>
            <el-checkbox label="FOF" name="type"></el-checkbox>
            <el-checkbox label="ETF" name="type"></el-checkbox>
            <el-checkbox label="LOF" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->
        <el-form-item label="投资类型">
          <el-radio-group v-model="form.type_tz">
            <el-radio label="指数型"></el-radio>
            <el-radio label="增长型"></el-radio>
            <el-radio label="混合型"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="基金类型">
          <el-radio-group v-model="form.type_jj">
            <el-radio label="QDII"></el-radio>
            <el-radio label="FOF"></el-radio>
            <el-radio label="ETF"></el-radio>
            <el-radio label="LOF"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="产品介绍">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
    </el-form>
  </section>
</template>


<script>
  export default {
    name: 'CreateProduct',
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          date3: '',
          date4: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          jl:'',
          price:'',
          rate:'',
          by:'',
          glf:'',
          type_jj:'',
          type_tz:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>