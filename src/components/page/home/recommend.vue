<template>
  <div>
    <slide></slide>
    <div class="menu">
      <div>
        <ul class="mui-table-view mui-grid-view mui-grid-9"
            style=" padding-top: 5px;   background-color: white">
          <li v-for="(item , index)  in  topicData" v-if="index<4" :key="index"
              class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 ">
            <a  @click="openTopicPage(item.id,1,item.topPicture,item.topicDesc)"> <span
              class="mui-icon "><img class="index-menu-topic-img"
                                     v-bind:src="  item.icon ==''  ?   'images/default-preview.jpg' : item.icon "></span>
              <div class="mui-media-body  " style="font-size: 12px">{{item.name}}</div>
            </a>
          </li>
        </ul>
      </div>
      <div>
      <a v-for="(item , index)  in  topicLargeData" :key="index"  @click="openTopicPage(item.id , 2 ,item.topPicture ,item.topicDesc)">

     <img v-bind:src="item.specialIcon ==''  ?   'images/default-preview.jpg' : item.specialIcon "
             style="width: 100% ; height: auto ;padding: 0 21px  10px  21px">   </a>
      </div>
    </div>


    <div class="mui-row" style="margin-top: 7px ; background-color:  white">
      <div class="" style="padding: 10px  0  10px  15px ; font-size: 17px ; font-weight: bold">热门推荐
      </div>

      <mainitem res="recommend"></mainitem>

    </div>
    <foot></foot>
    <div style="height: 51px"></div>
  </div>
</template>

<script>
  import slide from '../.././common/slider.vue'
  import foot from '../../common/pagefooter.vue'
  import mainitem from '../.././common/mainitem.vue'
  import { getTopic } from '../../../service/getData'
  export default {
    components: {slide, foot, mainitem},

    name: 'recommend',
    data () {
      return {
        topic:'111',
        msg: '很高兴你使用vue 我是推荐',
        hotdata: null,
        topicData: null,
        topicLargeData: null
      }
    }
    ,
    mounted() {

      document.title = '推荐';
      let that = this;

      getTopic(1).then(function (resultData) {
        that.topicData = resultData
      }).catch(function (err) {
      })
      getTopic(2).then(function (resultData) {
        that.topicLargeData = resultData
      }).catch(function (err) {

      })

      this.$nextTick(() => {

      })

    },
    methods: {
      openTopicPage(id,type,topPicture,topicDesc){
        this.$router.push({path: '/topic', query: {id: id,type: type,topPicture: topPicture,topicDesc: topicDesc}})
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
