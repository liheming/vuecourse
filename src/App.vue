<template>
  <div id="app">
    <nav class="mui-bar mui-bar-tab">

      <a v-for="(item , index) in data" :key="index" class="mui-tab-item" :id="item.id"
         @click="tabClick(item.name ,item.id)">
        <label>
          <span class="mui-icon   " style=" margin: 4px 4px 2px 0 "><img
            :src="item.image"
            class="item-img"></span>
          <span class="mui-tab-label">{{item.title}}</span>
        </label>
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
          {title: '首页', id: '../home/recommend', image: home, name: 'home'},
          {title: '继续学习', id: '../study/orderCourse', image: study, name: 'study'},
          {title: '个人中心', id: '../person', image: person, name: 'person'}
        ],
//          persons: [{person: '1111'}, {person: '222'}, {person: '333'},]

        demo: "nihao"
      }
    }
    ,
    mounted(){
      if (localStorage.appPosition === undefined) {
        localStorage.appPosition = 0
      }
      if(localStorage.appPosition == 0){
        this.data[localStorage.appPosition].image = homeOk
      }else   if(localStorage.appPosition == 1){
        this.data[localStorage.appPosition].image = studyOk
      }else   if(localStorage.appPosition == 2){
        this.data[localStorage.appPosition].image = personOk
      }

    },
    methods: {
      tabClick: function (name, id) {
        this.$router.replace({path: id, query: {page: id}})
        if (name === "home") {
          localStorage.appPosition = 0
          this.data[0].image = homeOk
          this.data[1].image = study
          this.data[2].image = person

        } else if (name === "study") {
          localStorage.appPosition = 1
          this.data[0].image = home
          this.data[1].image = studyOk
          this.data[2].image = person
        }
        else if (name === "person") {
          localStorage.appPosition = 2
          this.data[0].image = home
          this.data[1].image = study
          this.data[2].image = personOk
        }
      }
    }
  }
</script>
<style>
  .router-link-active {
    color: #f35b75;

  }

  .item-img {
    width: 25px;
    height: auto;
  }
</style>
