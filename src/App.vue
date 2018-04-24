<template>
  <div id="app">
    <nav class="mui-bar mui-bar-tab">

      <a  v-for="(item , index) in data" :key="index" class="mui-tab-item"  :id="item.id"   @click="tabClick(item.id)">
        <router-link :to="item.id">
          <span class="mui-icon   " style=" margin: 4px 4px 2px 0 "><img
                                                                         :src="item.image"
                                                                        class="item-img"></span>
          <span class="mui-tab-label"  >{{item.title}}</span>
        </router-link>
      </a>

      <!--<a id="tabStudy" class="mui-tab-item" >-->
      <!--<router-link to="/study">-->
      <!--<span class="mui-icon " style=" margin: 5px 3px 1px 0 "><img id="index-learn-img"-->
      <!--src="./images/index-book.png"-->
      <!--style="width: 25px ; height: auto"></span>-->
      <!--<span class="mui-tab-label">继续学习</span>-->
      <!--</router-link>-->
      <!--</a>-->

      <!--<a id="personCenterClick" class="mui-tab-item" >-->
      <!--<router-link to="/person">-->
      <!--<span class="mui-icon   " style=" margin: 4px 2px 2px 0 "> <img id="index-center-img"-->
      <!--src="./images/index-head.png"-->
      <!--style="width: 25px ; height: auto"></span>-->
      <!--<span class="mui-tab-label">个人中心</span>-->
      <!--</router-link>-->
      <!--</a>-->
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
          {title: '首页', id: 'home', image: homeOk},
          {title: '继续学习', id: 'study', image: study },
          {title: '个人中心', id: 'person', image: person }
        ],
//          persons: [{person: '1111'}, {person: '222'}, {person: '333'},]

        demo:"nihao"
      }
    },
    methods: {

      tabClick: function (id) {

        if (id === "home") {
          this.data[0].image= homeOk
          this.data[1].image= study
          this.data[2].image= person

        } else if (id === "study") {
          this.data[0].image= home
          this.data[1].image= studyOk
          this.data[2].image= person
        }
        else if (id === "person") {
          this.data[0].image= home
          this.data[1].image= study
          this.data[2].image= personOk
        }

      }

//      home: function (type) {
//        $('#index-home-img').attr('src', './images/index-home-ok.png');
//        $('#index-learn-img').attr('src', './images/index-book.png');
//        $('#index-center-img').attr('src', './images/index-head.png');
//
//      },
//      study: function (type) {
//        document.title = "继续学习";
//        $('#index-home-img').attr('src', './images/index-home.png');
//        $('#index-learn-img').attr('src', './images/index-book-ok.png');
//        $('#index-center-img').attr('src', './images/index-head.png');
//
//      },
//      person: function (type) {
//        document.title = "个人中心";
//        $('#index-home-img').attr('src', './images/index-home.png');
//        $('#index-learn-img').attr('src', './images/index-book.png');
//        $('#index-center-img').attr('src', './images/index-head-ok.png');
//
//      },

    }
  }
  //
  //  var tabHome =  $('#tabHome').id;
  //  var tabStudy =  $('#tabStudy').id;
  //  var personCenterClick =  $('#personCenterClick').id;

  //
  //  tabHome.addEventListener('tap', function () {
  //  //        $("#index-home").css({"color": " #ff0000"});
  //    $('#index-home-img').attr('src', 'images/index-home-ok.png');
  //    $('#index-learn-img').attr('src', 'images/index-book.png');
  //    $('#index-center-img').attr('src', 'images/index-head.png');
  //  //  if (vm && vm.index != 0) {
  //  //    vm.openIndex();
  //  //  }
  //  });
  //
  //  tabStudy.addEventListener('tap', function () {
  //    document.title = "继续学习";
  //    $('#index-home-img').attr('src', 'images/index-home.png');
  //    $('#index-learn-img').attr('src', 'images/index-book-ok.png');
  //    $('#index-center-img').attr('src', 'images/index-head.png');
  //  //  getOrdersRecord();
  //  //  getOneWeek();
  //  //  getEarlier();
  //  });
  //
  //  personCenterClick.addEventListener("tap", function () {
  //    document.title = "个人中心";
  //    $('#index-home-img').attr('src', 'images/index-home.png');
  //    $('#index-learn-img').attr('src', 'images/index-book.png');
  //    $('#index-center-img').attr('src', 'images/index-head-ok.png');
  ////    getUserData();
  //  });


</script>


<style>
  .ok{
    color: rebeccapurple;
  }
  .nok{
    color: rebeccapurple;
  }
  .item-img {
    width: 25px;
    height: auto;
  }


</style>
