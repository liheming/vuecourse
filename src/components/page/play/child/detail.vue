<template>
  <div>
    <div class="pic-detail" style="   overflow: hidden;">
      <div v-for="image in content.contentPicture">
        <img v-bind:src="image" style="width: 100%; ">

      </div>

    </div>

    <img src="../../../../images/showAllDetail.png" class="showAll" onclick="showAllContent()"
         style="  width:  100% ;   margin-top: -200px ">
    <div>
      <img src="../../../../images/use-guide.jpg" style="width: 100% ; ">

    </div>

    <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>


      <div class="mostNewRecommend">
        <div style="padding: 20px  0  10px  15px ;font-size: 17px ; color: #282828 ;font-weight: bold ">
          同类推荐
        </div>


        <div class="list">

          <ul class="mui-table-view">
            <li v-for=" (item, index) in newRecommendData" v-if="index<3"
                class="mui-table-view-cell mui-media"
                style=" height: 100%">
              <a class="item-a" @click="getContent(item.id)">

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
                        <span class="item-base-price">{{item.isFree ? '' : '原价¥'}} {{item.isFree ? '' : item.price + 30}}</span>
                        <span class="item-price"> {{item.isFree ? '免费' : '¥' + item.price + '' }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>

          </ul>
        </div>

      </div>

  </div>
</template>

<script>
  import { getRecommendList } from '../../../../service/getData'
  export default {
    props: {
      content: {
        type: Object,
        default: function () {
          return {message: 'hello'}
        }
      }
    },
    data () {
      return {
        msg: '详情',
        newRecommendData:null
      }
    }
    ,
    created() {
      let that = this;
      let id = this.content.id
      getRecommendList(id).then(function (resultData) {
        that.newRecommendData = resultData
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods:{
      showAllContent(){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
