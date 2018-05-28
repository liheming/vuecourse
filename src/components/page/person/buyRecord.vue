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
        res: 'buyFail',
        data: [
          {title: '未成功', id: 'buyFail', cs: activeClass},
          {title: '已成功', id: 'buySuccess', cs: normalClass},
        ]
      }
    }

    ,
    mounted(){
      if (this.res === "buyFail") {
        this.data[0].cs = activeClass
      }else {
        this.data[1].cs = activeClass
      }

    },
    methods: {
      tabClick: function (id) {
        for (let item of  this.data) {
          item.cs = normalClass

        }
        if (id === "buyFail") {
          this.data[0].cs = activeClass
          this.res = 'buyFail'

        } else if (id === "buySuccess") {
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
