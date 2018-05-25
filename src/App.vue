<template>
  <div>
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import'./style/mui.min.css'
  import'./style/app.css'

  export default {
  }

</script>

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
