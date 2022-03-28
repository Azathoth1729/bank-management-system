<template>
  <section>
    <el-table
      :data="tableData"
      height="500"
      border
      :default-sort = "{prop: 'start_date', order: 'descending'}"
      style="width: 100%">

      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="产品名">
            <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="投资类型">
              <span>{{ props.row.type_ }}</span>
            </el-form-item>
            <el-form-item label="管理费">
              <span>{{ props.row.glf }}</span>
            </el-form-item>
            <el-form-item label="基金经理">
              <span>{{ props.row.jl }}</span>
            </el-form-item>
            <el-form-item label="产品介绍">
              <div class="jieshao">
                <span>{{ props.row.detail }}</span>
              </div>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column
        prop="start_date"
        label="起始日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="end_date"
        label="结束日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="产品名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="购买价格(元)"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="rate"
        label="利率"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="intro"
        label="简介"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '白酒', value: '白酒' }, { text: '新能源', value: '新能源' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '白酒' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}
          </el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="detail"
        label="">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column> -->
    </el-table>

    <div class="block">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </section>
</template>

<style>
  .block{
    margin-top: 20px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    margin-left: 20px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
  .jieshao{
    margin-left: 110px;
    margin-top: -40px;

  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          start_date: '2016-05-02',
          end_date: '2022-05-02',
          name: '大秦科技基金',
          price: '1000000',
          rate: '5%',
          intro: '跟着傲杰投，涨停不用愁...',
          detail: '      本基金进行被动式指数化投资，通过严格的投资纪律约束和数量化的风险管理手段，实现对标的指数的有效跟踪，获得与标的指数收益相似的回报。本基金的投资目标是保持基金净值收益率与业绩基准日均跟踪偏离度的绝对值不超过0.35%，年跟踪误差不超过4%。',
          type_: '指数型',
          glf: '1.00%',
          jl: '秦傲杰',
          tag: '白酒'
        },  {
          start_date: '2016-05-02',
          end_date: '2022-05-02',
          name: '大秦科技基金',
          price: '1000000',
          rate: '5%',
          intro: '跟着傲杰投，涨停不用愁...',
          detail: '本基金进行被动式指数化投资，通过严格的投资纪律约束和数量化的风险管理手段，实现对标的指数的有效跟踪，获得与标的指数收益相似的回报。本基金的投资目标是保持基金净值收益率与业绩基准日均跟踪偏离度的绝对值不超过0.35%，年跟踪误差不超过4%。',
          type_: '指数型',
          glf: '1.00%',
          jl: '秦傲杰',
          tag: '新能源'
        }, {
          start_date: '2016-05-02',
          end_date: '2022-05-02',
          name: '大秦科技基金',
          price: '1000000',
          rate: '5%',
          intro: '跟着傲杰投，涨停不用愁...',
          detail: '本基金进行被动式指数化投资，通过严格的投资纪律约束和数量化的风险管理手段，实现对标的指数的有效跟踪，获得与标的指数收益相似的回报。本基金的投资目标是保持基金净值收益率与业绩基准日均跟踪偏离度的绝对值不超过0.35%，年跟踪误差不超过4%。',
          type_: '指数型',
          glf: '1.00%',
          jl: '秦傲杰',
          tag: '服装'
        }, {
          start_date: '2016-05-02',
          end_date: '2022-05-02',
          name: '大秦科技基金',
          price: '1000000',
          rate: '5%',
          intro: '跟着傲杰投，涨停不用愁...',
          detail: '本基金进行被动式指数化投资，通过严格的投资纪律约束和数量化的风险管理手段，实现对标的指数的有效跟踪，获得与标的指数收益相似的回报。本基金的投资目标是保持基金净值收益率与业绩基准日均跟踪偏离度的绝对值不超过0.35%，年跟踪误差不超过4%。',
          type_: '指数型',
          glf: '1.00%',
          jl: '秦傲杰',
          tag: '半导体'
        }, {
          start_date: '2016-05-02',
          end_date: '2022-05-02',
          name: '大秦科技基金',
          price: '1000000',
          rate: '5%',
          intro: '跟着傲杰投，涨停不用愁...',
          detail: '本基金进行被动式指数化投资，通过严格的投资纪律约束和数量化的风险管理手段，实现对标的指数的有效跟踪，获得与标的指数收益相似的回报。本基金的投资目标是保持基金净值收益率与业绩基准日均跟踪偏离度的绝对值不超过0.35%，年跟踪误差不超过4%。',
          type_: '指数型',
          glf: '1.00%',
          jl: '秦傲杰',
          tag: '医疗'
        }, {
          start_date: '2016-05-02',
          end_date: '2022-05-02',
          name: '大秦科技基金',
          price: '1000000',
          rate: '5%',
          intro: '跟着傲杰投，涨停不用愁...',
          detail: '本基金进行被动式指数化投资，通过严格的投资纪律约束和数量化的风险管理手段，实现对标的指数的有效跟踪，获得与标的指数收益相似的回报。本基金的投资目标是保持基金净值收益率与业绩基准日均跟踪偏离度的绝对值不超过0.35%，年跟踪误差不超过4%。',
          type_: '指数型',
          glf: '1.00%',
          jl: '秦傲杰',
          tag: '汽车'
        }, {
          start_date: '2016-05-02',
          end_date: '2022-05-02',
          name: '大秦科技基金',
          price: '1000000',
          rate: '5%',
          intro: '跟着傲杰投，涨停不用愁...',
          detail: '本基金进行被动式指数化投资，通过严格的投资纪律约束和数量化的风险管理手段，实现对标的指数的有效跟踪，获得与标的指数收益相似的回报。本基金的投资目标是保持基金净值收益率与业绩基准日均跟踪偏离度的绝对值不超过0.35%，年跟踪误差不超过4%。',
          type_: '指数型',
          glf: '1.00%',
          jl: '秦傲杰',
          tag: '化工'
        }, {
          start_date: '2016-05-02',
          end_date: '2022-05-02',
          name: '大秦科技基金',
          price: '1000000',
          rate: '5%',
          intro: '跟着傲杰投，涨停不用愁...',
          detail: '本基金进行被动式指数化投资，通过严格的投资纪律约束和数量化的风险管理手段，实现对标的指数的有效跟踪，获得与标的指数收益相似的回报。本基金的投资目标是保持基金净值收益率与业绩基准日均跟踪偏离度的绝对值不超过0.35%，年跟踪误差不超过4%。',
          type_: '指数型',
          glf: '1.00%',
          jl: '秦傲杰',
          tag: '电力'
        }, {
          start_date: '2016-05-02',
          end_date: '2022-05-02',
          name: '大秦科技基金',
          price: '1000000',
          rate: '5%',
          intro: '跟着傲杰投，涨停不用愁...',
          detail: '本基金进行被动式指数化投资，通过严格的投资纪律约束和数量化的风险管理手段，实现对标的指数的有效跟踪，获得与标的指数收益相似的回报。本基金的投资目标是保持基金净值收益率与业绩基准日均跟踪偏离度的绝对值不超过0.35%，年跟踪误差不超过4%。',
          type_: '指数型',
          glf: '1.00%',
          jl: '秦傲杰',
          tag: '传媒'
        }]
      }
    }
  }
</script>
