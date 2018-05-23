<template>
  <div>
    <slide></slide>
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
