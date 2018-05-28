<template>
  <div>
    <indexad></indexad>
    <nav class="mui-bar mui-bar-tab">
      <a v-for="(item , index) in data" :key="index" class="mui-tab-item" :id="item.id" :class="item.cs"
         @click="tabClick(item.id)">
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

  import homeOk from '../.././images/index-home-ok.png'
  import studyOk from '../.././images/index-book-ok.png'
  import personOk from '../.././images/index-head-ok.png'

  import home from '../.././images/index-home.png'
  import study from '../.././images/index-book.png'
  import person from '../.././images/index-head.png'

  import indexad from '../common/indexAd.vue'

  let activeClass = ' mui-tab-item mui-active'
  let normalClass = ' mui-tab-item '

  const pageHome = '/home'
  const pageStudy = '/study'
  const pageperson = '/person'

  export default
  {
    name: 'App',
    components: {indexad},
    data () {
      return {
        data: [
          {title: '首页', id: pageHome, image: home, name: 'home', cs: normalClass},
          {title: '继续学习', id: pageStudy, image: study, name: 'study', cs: normalClass},
          {title: '个人中心', id: pageperson, image: person, name: 'person', cs: normalClass}
        ],
//          persons: [{person: '1111'}, {person: '222'}, {person: '333'},]
      }
    }
    ,
    created(){
//      let page =this.$route.query.page
      let page = this.$route.path
//      console.log(this.$route)
//      console.log(this.$route.path)
//      console.log(this.$route.fullPath)
      if (page === pageHome) {
        this.data[0].image = homeOk
        this.data[0].cs = activeClass
      } else if (page === pageStudy) {
        this.data[1].image = studyOk
        this.data[1].cs = activeClass
      } else if (page === pageperson) {
        this.data[2].image = personOk
        this.data[2].cs = activeClass
      }
    },

    methods: {
      tabClick: function (id) {
        this.$router.replace({path: id})
        this.data[0].image = home
        this.data[1].image = study
        this.data[2].image = person
        if (id === pageHome) {
          this.data[0].image = homeOk

        } else if (id === pageStudy) {
          this.data[1].image = studyOk
        }
        else if (id === pageperson) {
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
