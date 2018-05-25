<template>
  <div>
    <div class="mui-segmented-control">
      <div @click="tabClick(item.id)" v-for="(item , index) in data" :key="index" :class="item.cs">{{item.title}}
        <span>
        </span>
      </div>
    </div>
    <div>


      <transition name="slide-fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
  //  import (getQueryString) from 'vue-concise-slider'// 引入slider组件
  let activeClass = ' mui-control-item mui-active '
  let normalClass = ' mui-control-item  '
  export default {
    name: 'home',
    data () {
      return {
        data: [
          {title: '推荐', id: 'recommend', cs: activeClass},
          {title: '排行', id: 'ranking', cs: normalClass},
          {title: '免费', id: 'free', cs: normalClass},
          {title: '付费', id: 'pay', cs: normalClass}
        ]
      }
    },
    mounted(){
      document.title = '首页'
      for(let item of  this.data){
        item.cs = normalClass
      }
      if(localStorage.position===undefined){
        localStorage.position =0
      }
      this.data[localStorage.position].cs  = activeClass
    },
    methods: {
      tabClick: function (id) {
        for(let item of  this.data){
          item.cs = normalClass
        }
        this.$router.replace({ path: id, query: { page: id }})
        if (id === "recommend") {
//        router.put()  ={ path: item.id, query: { page: item.id }}
          localStorage.position = 0
          this.data[0].cs = activeClass
        } else if (id === "ranking") {
          localStorage.position = 1
          this.data[1].cs = activeClass
        }
        else if (id === "free") {
          localStorage.position = 2
          this.data[2].cs = activeClass
        } else if (id === "pay") {
          localStorage.position = 3
          this.data[3].cs = activeClass
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(100px);
    opacity: 0.5;
  }
</style>
