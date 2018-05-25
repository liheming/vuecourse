<template>
  <!--继续学习-->
  <div>
    <div class="mui-segmented-control">
      <div @click="tabClick(item.id)"  v-for="(item , index) in data" :key="index" :class="item.cs">{{item.title}}
        <span>
        </span>
      </div>
    </div>
    <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>
    <buyitem :res="res"></buyitem>
  </div>
</template>

<script>
  import buyitem from '../../common/buyitem.vue'

  let activeClass = ' mui-control-item mui-active '
  let normalClass = ' mui-control-item  '
  export default {
    name: '',
    components: {buyitem},
    data () {
      return {
        msg: '我是购买记录',
        res: 'buyFail',
        data: [
          {title: '未成功', id: 'buyFail', cs: activeClass},
          {title: '已成功', id: 'buySuccess', cs: normalClass},
        ]
      }
    }

    ,
    mounted(){
      for (let item of  this.data) {
        item.cs = normalClass

      }
      if (localStorage.buyposition === undefined) {
        localStorage.buyposition = 0
      }
      this.data[localStorage.buyposition].cs = activeClass

    },
    methods: {
      tabClick: function (id) {
        for (let item of  this.data) {
          item.cs = normalClass

        }
        if (id === "buyFail") {
          localStorage.buyposition = 0
          this.data[0].cs = activeClass
          this.res = 'buyFail'

        } else if (id === "buySuccess") {
          localStorage.buyposition = 1
          this.data[1].cs = activeClass
          this.res = 'buySuccess'
        }
      }

    },
    watch: {
      '$route' (to, from) {

        console.log(from.query.page)

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mui-segmented-control .mui-control-item.mui-active span {
    width: 45px;
  }
</style>
