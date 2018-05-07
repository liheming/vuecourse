<template>
  <!--继续学习-->
  <div  >
    <div class="mui-segmented-control" style="margin-bottom: 5px ;">

      <router-link to="/study/orderCourse"  replace   class="mui-control-item mui-active" >我的订阅<span style="width: 58px"></span></router-link>
      <router-link  to="/study/playRecord"  replace   class="mui-control-item"  >播放记录<span style="width: 58px"></span></router-link>
    </div>
    <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>
    <!--<component :is="currentView"></component>-->
  <!--<router-view/>-->
    <play></play>
    <order></order>
  </div>
</template>

<script>
//  import play from './study/playRecord.vue'
  import play from './study/playRecord'
  import Order from './study/orderCourse'
  export default {
    components: {Order,play},
    name: '',
    data () {
      return {
        msg: '很高兴你使用vue 我是继续学习'
//        currentView:'order'
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
