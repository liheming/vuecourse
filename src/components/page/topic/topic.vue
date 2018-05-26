<template >

  <div>

    <div class="top-pic" style="background-color: white">

      <img v-bind:src="topPicture" style="width: 100%;  height: auto ; ">
      <div style="padding: 16px 16px 8px 16px ;font-size: 15px ;  color: #282828 ">
        {{ topicDesc }}
      </div>
    </div>
    <div class="list">

      <ul class="mui-table-view">
        <li v-for=" (item, index) in data" v-if="index<10" class="mui-table-view-cell mui-media"
            style=" height: 100% ;padding: 0  ;line-height: 40px">

          <div v-if="item.title" style="line-height: 17px; margin-top: 20px;">
            <div style="text-align: center ; font-weight: bold; font-size: 17px">{{item.title}}</div>

            <img v-if="item.title" class="item-preview-img" style="border-radius: 5px; margin-top: 8px;"
                 src="../../../images/special_topic_line.png"/>
          </div>

          <div v-else style="line-height: 15px;">
            <div style="text-align: center ; font-weight: bold; font-size: 17px">{{item.title}}</div>

            <img v-if="item.title" class="item-preview-img" style="border-radius: 5px; margin-top: 8px;"
                 src="../../../images/special_topic_line.png"/>
          </div>

          <div style="width: 100%; padding: 14px 16px 0 16px;" v-if="item.productPic">
            <img class="item-preview-img" style="border-radius: 5px" v-bind:src="item.productPic"/>
          </div>

          <div style="padding: 4px 16px ;font-size: 13px ;  color: #282828 ; line-height: 20px; ">
            {{item.productDesc}}
          </div>

          <a class="item-a" @click="openPlayPage(item.productId, '')"
             style=" margin: 16px 16px ; background-color: #fafafa">
            <div class="item-div-img">
              <img class="item-preview-img"
                   v-bind:src="  item.preview ==''  ?   '../../../images/default-preview.jpg' : item.preview   ">
            </div>
            <div class="item-content-div">
              <div class="item-content-div-div">
                <p class=" item-contentName">{{item.productName}} </p>
                <!--<p class="item-playNum"> {{item.playNum > 9999 ?  Math.round(item.playNum/10000*100)/100 +'万人在学' :item.playNum+'人在学' }}</p>-->
                <p class="item-playNum"> {{item.playNum > 9999 ?
                  Math.round(item.playNum/10000*100)/100 +'万人在学' :item.playNum+'人在学' }}</p>

                <div class="item-content-div-div-div">
                  <p>
                  <span
                    class="item-base-price">{{item.isFree ?  '' : '原价¥'}} {{item.isFree ?  '' : item.price+30}}</span>
                    <span class="item-price"> {{item.isFree ? '免费' : '¥'+item.price+'' }}</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>


    </div>

<footer></footer>
  </div>


</template>


<script>
  import {getTopicList} from "../../../service/getData";
  import footer from '../.././common/footer.vue'

  // var vueTopic;
  // var topPicture = GetQueryString('topPicture');
  // var topicDesc = GetQueryString('topicDesc');
  //
  //
  // var topicType = GetQueryString('topicType');


  export default {
    name: "topic",
    components: [footer],
    data() {
      return {
        topPicture: '',
        topicDesc: '',
        data: null
      }
    },
    beforeCreate(){
    },

    created() {
      let that =this
      let params = that.$route.query;
      this.topPicture = params.topPicture;
      this.topicDesc = params.topicDesc;
      if (params.type == 1)
        document.title = "专题";
      else
        document.title = "YY兔专题";
      getTopicList(params.id).then(function (resultData) {
        that.data = resultData
      }).catch(function (err) {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .item-contentName {
    margin-top: 5px;
  }

  .item-playNum {
    margin-top: 6px;
  }

  .item-a {
    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(40, 40, 40, 0.2);
  }

  .item-div-img {
    height: 86px;

  }

  .mui-table-view-cell:after {
    height: 0;
  }

  .item-preview-img {
    width: 100%;
    height: 100%;
    border-radius: 5px 0 0 5px
  }
</style>
