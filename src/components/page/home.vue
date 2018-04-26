<template>
  <div>
    <div class="mui-segmented-control">
      <router-link v-for="item in data" :class="item.cs" :to="item.id">{{item.title}}<span></span></router-link>
    </div>
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data () {
      return {
        data: [
          {title: '推荐', id: 'recommend', cs: ' mui-control-item mui-active '},
          {title: '排行', id: 'ranking', cs: ' mui-control-item  '},
          {title: '免费', id: 'free', cs: ' mui-control-item  '},
          {title: '付费', id: 'pay', cs: ' mui-control-item '}
        ]
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
