<template>
  <div id="item-category">
    <div class="category-collection">
      <ul class="mui-table-view mui-table-view-chevron">

        <li
          v-bind:style="{ color:   (content.isFree  || content.hasBuy || item.isTry==1)  && index==myindex ?  '#f35b75' :  '#282828'  }"
          v-for="  (item, index)  in   categoryData" class="mui-table-view-cell">
          <a style="padding:15px 30px 15px 20px"
             @click="changeVideo(item.fileUrl, item.subsetName, item.id, item.isTry,item.productsType, content.isFree,content.hasBuy)">
            <template v-if="!content.isFree &&  !content.hasBuy">

              <img v-if="item.isTry" src="../../../../images/icon-free.png" style="width: 16px;">
              <img v-else src="../../../../images/icon-money.jpg" style="width: 16px;">

            </template>
            <span style="font-size: 15px ; "> {{item.subsetName}} </span>
            <!--<span v-if="item.isTry" style="position: absolute;right: 25px ; font-size: 11px ; color: white; margin-top: 2px ; background:#f35b75;  display: inline-block; border-radius: 5px;border: 1px solid #f35b75;  padding: 1px 3px; ">{{ item.isTry==1 ?  '试看' :  '' }} </span>-->
          </a>
        </li>


      </ul>
    </div>


    <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>


    <template v-if="">
      <div class="lastUpdate">
        <div style="padding: 20px  0  10px  15px ;font-size: 17px ; color: #282828 ;font-weight: bold ">
          最近更新
        </div>

        <div class="list">

          <ul class="mui-table-view">
            <li v-for=" (item, index) in recentUpdate" v-if="index<3"
                class="mui-table-view-cell mui-media"
                style=" height: 100%">
              <a class="item-a" @click="getContent(item.productid)">

                <div class="item-div-img">
                  <img class="item-preview-img"
                       v-bind:src="  item.preview ==''  ?   'images/default-preview.jpg' : item.preview   ">
                </div>
                <div class="item-content-div">
                  <div class="item-content-div-div">
                    <p class=" item-contentName">{{item.productName}} </p>
                    <p class="item-totalNum-num">更新时间：{{item.updateTime}}</p>
                    <p class="item-playNum"> {{item.contentName }}</p>
                  </div>
                </div>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </template>
  </div>

</template>

<script>
  import { getProductList, getRecentUpdate } from '../../../../service/getData'
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
        msg: '目录',
        categoryData: null,
        recentUpdate: null,
      }
    }
    ,
    created() {
      let that = this;
      let productsId = this.content.id //  productsId 销售品id

      /**
       * 视频目录
       * @param productsId 销售品id
       */
      getProductList(productsId).then(function (resultData) {
        that.categoryData = resultData
      }).catch(function (err) {
        console.log(err)
      })

      /**
       * 获取最近更新
       */
      getRecentUpdate(productsId).then(function (resultData) {
        that.recentUpdate = resultData
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      showAllContent(){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
