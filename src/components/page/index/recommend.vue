<template>
  <div>
    <slide></slide>
    <div class="slider">

      <div class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
          <!-- 第三张 -->
          <div class="mui-slider-item">
            <a
              href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000037&idx=1&sn=9b9b08568529d759708e8949ccc1055a&chksm=7c9cb5aa4beb3cbc4a1e3342e2f95d59ee338bb39c734d1c8269858d92dc175da8f58d38b6f1#rd">
              <img src="../../../images/banner3.jpg">
            </a>
          </div>

          <!--第一张-->
          <div class="mui-slider-item">
            <a
              href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000001&idx=1&sn=2b29bf9b837c2d2350df27ec0514c893&chksm=7c9cb58e4beb3c98550cd6bfb7b47843e7c0a58512abb00da75ef5af366b4854f731a1b6ec92#rd">
              <img src="../../../images/banner1.jpg">
            </a>
          </div>

          <!--第二张-->
          <div class="mui-slider-item">
            <a
              href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000016&idx=1&sn=de81156b0f1139535751cf321afc02e8&chksm=7c9cb59f4beb3c89217df7d323de1126584643bc1c328d4b94f308fc0e941a579720467dac82#rd">
              <img src="../../../images/banner2.jpg">
            </a>
          </div>
          <!-- 第三张 -->
          <div class="mui-slider-item">
            <a
              href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000037&idx=1&sn=9b9b08568529d759708e8949ccc1055a&chksm=7c9cb5aa4beb3cbc4a1e3342e2f95d59ee338bb39c734d1c8269858d92dc175da8f58d38b6f1#rd">
              <img src="../../../images/banner3.jpg">
            </a>
          </div>

          <!-- 第四张 -->
          <!--<div class="mui-slider-item">-->
          <!--<a href="content-details.html?id=ff8080816155bd6c016155daf089001c">-->
          <!--<img src="images/banner-sanzijing.jpg">-->
          <!--</a>-->
          <!--</div>-->
          <!--第一张-->

          <div class="mui-slider-item">
            <a
              href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000001&idx=1&sn=2b29bf9b837c2d2350df27ec0514c893&chksm=7c9cb58e4beb3c98550cd6bfb7b47843e7c0a58512abb00da75ef5af366b4854f731a1b6ec92#rd">
              <img src="../../../images/banner1.jpg">
            </a>
          </div>

        </div>

        <div class="mui-slider-indicator">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>


    </div>
    <div class="menu">
      <div>
        <ul class="mui-table-view mui-grid-view mui-grid-9"
            style=" padding-top: 5px;   background-color: white">
          <li v-for="(item , index)  in  topicData" v-if="index<4" :key="index"
              class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 ">
            <a @click="openTopicPage(item.id,1,item.topPicture,item.topicDesc)"> <span
              class="mui-icon "><img class="index-menu-topic-img"
                                     v-bind:src="  item.icon ==''  ?   'images/default-preview.jpg' : item.icon "></span>
              <div class="mui-media-body  " style="font-size: 12px">{{item.name}}</div>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img  v-for="(item , index)  in  topicLargeData"  :key="index"
          @click="openTopicPage(item[index].id , 2 ,item.topPicture ,item.topicDesc)"
          v-bind:src="  item.specialIcon ==''  ?   'images/default-preview.jpg' : item.specialIcon "
          style="width: 100% ; height: auto ;padding: 0 21px  10px  21px">
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
  import foot from '../.././common/footer.vue'
  import mainitem from '../.././common/mainitem.vue'
  import { getHottestData , getTopic } from '../../../service/getData'
  export default {
    components: {slide, foot, mainitem},

    name: 'recommend',
    data () {
      return {
        msg: '很高兴你使用vue 我是推荐',
        hotdata: null,
        topicData: null,
        topicLargeData: null
      }
    }
    ,
    mounted() {

      var that = this;
//          this.getTopic(that, 1)
//        this.getTopic(that, 2)

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
      async mobileLogin(){},
      getTopic: function (that, type) {
        $.ajax({
          url: hostUrl + 'topic/topicList',
          type: 'post',
          data: {
            'appKey': APPKEY,
            'sign': SIGN,
            'cpid': CHANNELID,
            'type': type
          },
          dataType: 'json',
          success: function (result) {

            if (result.code === 200) {
              if (type === 1) {
                that.topicData = JSON.parse(result.data);
              }
              else {

                that.topicLargeData = JSON.parse(result.data);
              }
            } else {
              console.log("err");
            }
          },
          error: function () {
          }
        });
      }
    }
  }

  /**
   * 获取热门推荐
   */


  /**
   * 获取专题列表小图标
   */


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
