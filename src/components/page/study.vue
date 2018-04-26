<template>
  <!--继续学习-->
  <div  >
    <div class="mui-segmented-control" style="margin-bottom: 5px ;">

      <router-link to="/study/orderCourse" class="mui-control-item mui-active" >我的订阅<span style="width: 58px"></span></router-link>
      <router-link  to="/study/playRecord" class="mui-control-item"  >播放记录<span style="width: 58px"></span></router-link>
    </div>
    <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>
  <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Hi',
    data () {
      return {
        msg: '很高兴你使用vue 我是继续学习'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
