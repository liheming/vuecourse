<template>
  <div id="app">
    <nav class="mui-bar mui-bar-tab">

      <a  v-for="(item , index) in data" :key="index" class="mui-tab-item"  :id="item.id"   @click="tabClick(item.name)">
        <router-link  :to="item.id">
          <span class="mui-icon   " style=" margin: 4px 4px 2px 0 "><img
                                                                         :src="item.image"
                                                                        class="item-img"></span>
          <span class="mui-tab-label"  >{{item.title}}</span>
        </router-link>
      </a>


    </nav>

    <router-view/>


  </div>
</template>


<script>
  //  import muijs from './js/mui.min'
  import'./style/mui.min.css'
  import'./style/app.css'
  import homeOk from './images/index-home-ok.png'
  import studyOk from './images/index-book-ok.png'
  import personOk from './images/index-head-ok.png'

  import home from './images/index-home.png'
  import study from './images/index-book.png'
  import person from './images/index-head.png'

  export default
  {
    name: 'App',

    data () {
      return {
        data: [
          {title: '首页', id: '../home/recommend', image: homeOk, name:'home'},
          {title: '继续学习', id: '../study/orderCourse', image: study ,name:'study'},
          {title: '个人中心', id: '../person', image: person ,name:'person'}
        ],
//          persons: [{person: '1111'}, {person: '222'}, {person: '333'},]

        demo:"nihao"
      }
    },
    methods: {
      tabClick: function (name) {
        if (name === "home") {
          this.data[0].image= homeOk
          this.data[1].image= study
          this.data[2].image= person

        } else if (name === "study") {
          this.data[0].image= home
          this.data[1].image= studyOk
          this.data[2].image= person
        }
        else if (name === "person") {
          this.data[0].image= home
          this.data[1].image= study
          this.data[2].image= personOk
        }
      }
    }
  }
</script>
<style>

  .item-img {
    width: 25px;
    height: auto;
  }
</style>
