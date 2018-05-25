<template>
  <div>

    <div>

      <slide></slide>
      <div class="mui-segmented-control">
        <div @click="tabClick(item.id)" v-for="(item , index) in data" :key="index" :class="item.cs">{{item.title}}
          <span>
        </span>
        </div>
      </div>

    </div>
    <div>
      <keep-alive>
        <rankitem res="ranking" :itemType="itemType" ></rankitem>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import slide from '../.././common/slider.vue'
  import rankitem  from '../.././common/rankitem.vue'
  let activeClass = ' mui-control-item mui-active '
  let normalClass = ' mui-control-item  '

  export default {
    components: {slide, rankitem},
    name: 'Hi',
    data () {
      return {
        data: [
          {title: '付费榜', id: 'recommend', cs: activeClass},
          {title: '点播榜', id: 'ranking', cs: normalClass},
          {title: '收藏榜', id: 'free', cs: normalClass},
          {title: '点评榜', id: 'pay', cs: normalClass}
        ],
        itemType: 1,
      }
    }, mounted() {
      document.title = '排行'
      localStorage.position = 0
      for (let item of  this.data) {
        item.cs = normalClass
      }
      if (localStorage.rankposition === undefined) {
        localStorage.position = 0
      }else {

      }
      this.data[0].cs = activeClass  // 默认第一个

    },

    methods: {
      tabClick: function (id) {
        for (let item of  this.data) {
          item.cs = normalClass
        }
//        this.$router.replace({path: id, query: {page: id}})

        if (id === "recommend") {
//        router.put()  ={ path: item.id, query: { page: item.id }}
          localStorage.rankposition = 0
          this.data[0].cs = activeClass
          this.itemType = 1

        } else if (id === "ranking") {
          localStorage.rankposition = 1
          this.data[1].cs = activeClass
          this.itemType = 2
        }
        else if (id === "free") {
          localStorage.rankposition = 2
          this.data[2].cs = activeClass
          this.itemType = 3
        } else if (id === "pay") {
          localStorage.rankposition = 3
          this.data[3].cs = activeClass
          this.itemType = 4
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mui-segmented-control .mui-control-item.mui-active span {
    width: 42px;
  }
</style>
