<template>
  <div>
    <div class="mui-segmented-control">
      <div @click="tabClick(item.id)" v-for="(item , index) in data" :key="index" :class="item.cs">{{item.title}}
        <span>
        </span>
      </div>
    </div>
    <div>
      <keep-alive>

          <recommend v-if="page == 'recommend'"></recommend>
          <ranking v-if="page == 'ranking'"></ranking>
          <free v-if="page === 'free'"></free>
          <pay v-if="page === 'pay'"></pay>

      </keep-alive>
    </div>
  </div>
</template>
<script>
  import recommend from '../home/recommend.vue'
  import ranking from '../home/ranking.vue'
  import free from '../home/free.vue'
  import pay from '../home/pay.vue'
  //  import (getQueryString) from 'vue-concise-slider'// 引入slider组件
  let activeClass = ' mui-control-item mui-active '  //
  let normalClass = ' mui-control-item  '     //

  const pageRcommend ='recommend'
  const pageRanking ='ranking'
  const pageFree ='free'
  const pagePay ='pay'
  export default {
    name: 'home',
    components: {recommend, ranking, free, pay},
    data () {
      return {
        page: pageRcommend,  //切换 tab page
        data: [
          {title: '推荐', id: pageRcommend, cs: activeClass},
          {title: '排行', id: pageRanking, cs: normalClass},
          {title: '免费', id: pageFree, cs: normalClass},
          {title: '付费', id: pagePay, cs: normalClass}
        ]
      }
    },
    created(){
      document.title = '首页'
      for (let item of  this.data) {
        item.cs = normalClass
      }
      let page = this.$route.query.page
      if (page === pageRcommend  || !page) {
        this.page = pageRcommend
        this.data[0].cs = activeClass
      } else if (page === pageRanking) {
        this.page = pageRanking
        this.data[1].cs = activeClass
      } else if (page === pageFree) {
        this.page = pageFree
        this.data[2].cs = activeClass
      } else if (page === pagePay) {
        this.page = pagePay
        this.data[3].cs = activeClass
      }
    },
    methods: {
      tabClick: function (id) {
        for (let item of  this.data) {
          item.cs = normalClass
        }
        this.$router.replace({path: 'home', query: {page: id}})
        if (id === pageRcommend) {
          this.page = pageRcommend
          this.data[0].cs = activeClass
        } else if (id === pageRanking) {
          this.page = pageRanking
          this.data[1].cs = activeClass
        }
        else if (id === pageFree) {
          this.page = pageFree
          this.data[2].cs = activeClass
        } else if (id === pagePay) {
          this.page = pagePay
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
