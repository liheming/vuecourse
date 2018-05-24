<template>
  <!--继续学习-->
  <div>
    <div class="mui-segmented-control">
      <div @click="tabClick(item.id)" v-for="(item , index) in data" :key="index" :class="item.cs">{{item.title}}
        <span>
        </span>
      </div>
    </div>
    <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>
    <!--<component :is="currentView"></component>-->
    <router-view/>

    <!--<play></play>-->
    <!--<order></order>-->
  </div>
</template>

<script>
  //  import play from './study/playRecord.vue'
  import play from './study/playRecord'
  import Order from './study/orderCourse'
  let activeClass = ' mui-control-item mui-active '
  let normalClass = ' mui-control-item  '
  export default {
    components: {Order, play},
    name: '',
    data () {
      return {
        msg: '很高兴你使用vue 我是继续学习',
        data: [
          {title: '我的订阅', id: 'orderCourse', cs: activeClass},
          {title: '播放记录', id: 'playRecord', cs: normalClass},
        ]
      }
    }

    ,
    mounted(){
      document.title = '继续学习'
      for (let item of  this.data) {
        item.cs = normalClass

      }
      if (localStorage.studyposition === undefined) {
        localStorage.studyposition = 0
      }
      this.data[localStorage.studyposition].cs = activeClass

    },
    methods: {
      tabClick: function (id) {
        for (let item of  this.data) {
          item.cs = normalClass

        }
        this.$router.replace({path: id, query: {page: id}})

        if (id === "orderCourse") {
//        router.put()  ={ path: item.id, query: { page: item.id }}
          localStorage.studyposition = 0
          this.data[0].cs = activeClass

        } else if (id === "playRecord") {
          localStorage.studyposition = 1

          this.data[1].cs = activeClass
        }
      }

    },
    watch: {
      '$route' (to, from) {

        console.log(from.query.page)
//        console.log(from)
//        console.log("to"+to.path)
//        console.log("from"+from +"-----to"+to)
        // 对路由变化作出响应...
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mui-segmented-control .mui-control-item.mui-active span {
    width: 55px;
  }
</style>
