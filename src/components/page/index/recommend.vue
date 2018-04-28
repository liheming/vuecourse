<template>
  <div>
    <slide></slide>

    <div class="menu">
      <div>
        <ul class="mui-table-view mui-grid-view mui-grid-9"
            style=" padding-top: 5px;   background-color: white">
          <li v-for="(item , index)  in  topicData" v-if="index<4"
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
        <img
          @click="openTopicPage(topicLargeData[0].id , 2 ,topicLargeData[0].topPicture ,topicLargeData[0].topicDesc)"
          v-bind:src="  topicLargeData[0].specialIcon ==''  ?   'images/default-preview.jpg' : topicLargeData[0].specialIcon "
          style="width: 100% ; height: auto ;padding: 0 21px  10px  21px">
      </div>
    </div>


    <div class="mui-row" style="margin-top: 7px ; background-color:  white">
      <div class="" style="padding: 10px  0  10px  15px ; font-size: 17px ; font-weight: bold">热门推荐
      </div>

      <ul class="mui-table-view">
        <li v-for=" (item , index) in hotdata" v-if="index<10" class="mui-table-view-cell mui-media"
            style=" height: 100%">
          <a class="item-a" @click="openPlayPage(item.id, '')">

            <div class="item-div-img">
              <img class="item-preview-img"
                   v-bind:src="  item.preview ==''  ?   'images/default-preview.jpg' : item.preview   ">
            </div>
            <div class="item-content-div">
              <div class="item-content-div-div">
                <p class=" item-contentName">{{item.contentName}} </p>
                <p class="item-totalNum-num">共{{item.totalNum}}集 | 已更{{item.hasNum}}集</p>
                <p class="item-playNum">
                  {{item.playNum > 9999 ? Math.round(item.playNum / 10000 * 100) / 100 + '万人在学' : item.playNum + '人在学'
                  }}</p>
                <div class="item-content-div-div-div">
                  <p>
                    <span
                      class="item-base-price">{{item.isFree ? '' : '原价¥'}} {{item.isFree ? '' : item.price + 30}}</span>
                    <span class="item-price"> {{item.isFree ? '免费' : '¥' + item.price + '' }}</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>

      <!--<mainitem data=""></mainitem>-->

    </div>
    <foot></foot>
    <div style="height: 51px"></div>
  </div>
</template>

<script>
  import slide from '../.././common/slider.vue'
  import foot from '../.././common/footer.vue'
  import mainitem from '../.././common/mainitem.vue'
  import { getHottestData } from '../../../service/getData'
  export default {
    components: {slide, foot, mainitem},

    name: 'Hi',
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
      this.$nextTick(() => {
        var that = this;
          getHottestData()


//        $.ajax({
//          url: hostUrl + 'selling/products/home',
//          type: 'post',
//          data: {
//            'appKey': APPKEY,
//            'sign': SIGN,
//            'channelCode': channelid
//          },
//          dataType: 'json',
//          success: function (result) {
//            console.log(result);
//
//            if (result.code == 200) {
//              that.hotdata = JSON.parse(result.data);
//              that.msg = '你好'
//
////          isShow = true;
//            } else {
//            }
//          },
//          error: function () {
//          }
//        });

          this.getTopic(that, 1)
        this.getTopic(that, 2)
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
            'cpid': channelid,
            'type': type
          },
          dataType: 'json',
          success: function (result) {

            if (result.code == 200) {
              if (type == 1) {
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
