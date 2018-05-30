<template>
  <div id="item-comment">

    <template v-if="commentIsShow">
      <!--精彩评论-->
      <div v-if="goodComment" class="goodComment">
        <ul v-if="topcommentData" class="mui-table-view">
          <div style="padding: 15px 0 15px 20px  ;font-size: 15px">精彩评论
          </div>
          <li v-for=" (item, index) in topcommentData " style=" padding-top: 10px">

            <div style=" float: left;width: 100%;  padding-left: 20px ;  padding-right: 20px ;  ">

              <div>
                <img v-if="!(item.headPic == '' || item.headPic == null)" v-bind:src="item.headPic"
                     style=" width: 30px ;  height: 30px; float: left">
              </div>
              <div style="padding-left: 10px ; margin-top: 2px; float: left;  line-height: 9px">
                <p style="font-size: 13px ;font-weight: bold;color: black;">{{item.userName}}<img
                  src="images/top-tips.png" style="height: 15px ; padding-left: 3px;"></p>
                <p style="font-size: 11px">{{ item.commentTime }}</p>
              </div>
              <div @click="likeComment(item.id,index)" style="text-align: right">

                                    <span v-if="item.isLike" class="mui-icon iconfont icon-like"
                                          style=" font-size:  14px  ;color: red"></span>

                <span v-else class="mui-icon iconfont icon-un-like"
                      style=" font-size:  14px"></span>

                <span
                  style="color: #8f8f94"> {{ item.likeNum > 9999 ? Math.round(item.likeNum / 10000 * 100) / 100 + '万' : item.likeNum
                  }}  </span>
              </div>
            </div>

            <div style=" padding-left: 60px ; font-size: 14px ;padding-bottom: 10px ; padding-right: 35px ; ">
              {{item.comment}}
            </div>

            <template v-if="!(item.reply == '' || item.reply == null)">
              <div style="font-size: 14px;   background-color: #f9faff ;        padding: 10px 35px 10px 60px;">
                <span style="color: #f35b75;font-size: 14px;">|三到云课堂小助手</span>
                回复：{{item.reply}}
              </div>
            </template>


            <div style="height: 1px ; width: 100% ;background-color: #f9faff"></div>
          </li>

        </ul>
      </div>


      <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>
      <!--<div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>-->
      <!--所有评论 -->
      <div class="allComment">
        <div style="padding: 15px 0 15px 20px  ;font-size: 15px">所有评论 <span
          style="color:#f35b75 "> ({{commentData == null ? '0' : commentData.length}}人) </span>
        </div>
        <ul class="mui-table-view">
          <li v-for=" (item, index) in commentData " style=" padding-top: 10px">

            <div style=" float: left;width: 100%;  padding-left: 20px ;  padding-right:20px ;  ">

              <div>
                <img v-if="!(item.headPic == '' || item.headPic == null)" v-bind:src="item.headPic"
                     style=" width: 30px ;  height: 30px; float: left">
              </div>
              <div style="padding-left: 10px ; margin-top: 2px; float: left;  line-height: 9px">
                <p style="font-size: 13px ;font-weight: bold;color: black;">{{item.userName}}</p>
                <p style="font-size: 11px">{{ item.commentTime }}</p>
              </div>
              <div @click="likeComment(item.id,index)" style="text-align: right">

                                    <span v-if="item.isLike" class="mui-icon iconfont icon-like"
                                          style=" font-size:  14px  ;color: red"></span>

                <span v-else class="mui-icon iconfont icon-un-like"
                      style=" font-size:  14px"></span>

                <span
                  style="color: #8f8f94"> {{ item.likeNum > 9999 ? Math.round(item.likeNum / 10000 * 100) / 100 + '万' : item.likeNum
                  }}  </span>
              </div>
            </div>

            <div style=" padding-left: 60px ; font-size: 14px ;padding-bottom: 10px ; padding-right: 35px ; ">
              {{item.comment}}
            </div>

            <template v-if="!(item.reply == '' || item.reply == null)">
              <div style="font-size: 14px;   background-color: #f9faff ;        padding: 10px 35px 10px 60px;">
                <span style="color: #f35b75;font-size: 14px;">|三到云课堂小助手</span>
                回复：{{item.reply}}
              </div>
            </template>

            <div style="height: 1px ; width: 100% ;background-color: #f9faff"></div>
          </li>
        </ul>
      </div>


      <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>
      <div class="courseHotComment">

        <ul v-if="recommendcommentData" class="mui-table-view">
          <div style="padding: 15px 0 15px 20px  ;font-size: 15px">课程热评
          </div>
          <li class="item-li" v-for=" (item, index) in recommendcommentData "
              @click="getContent(item.productsId)"
              style=" padding-top: 10px ;margin: 0 20px">
            <div style=" float: left;width: 100%;  padding: 0 10px  ">

              <div>
                <img v-if="!(item.headPic == '' || item.headPic == null)" v-bind:src="item.headPic"
                     style=" width: 30px ;  height: 30px; float: left">
              </div>
              <div style="padding-left: 10px ; margin-top: 2px; float: left;  line-height: 9px">
                <p style="font-size: 13px ;font-weight: bold;color: black;">{{item.userName}}</p>
                <p style="font-size: 11px">{{ item.commentTime }}</p>
              </div>
              <div @click="likeComment(item.id,index)" style="text-align: right">

                                    <span v-if="item.isLike" class="mui-icon iconfont icon-like"
                                          style=" font-size:  14px  ;color: red"></span>

                <span v-else class="mui-icon iconfont icon-un-like"
                      style=" font-size:  14px"></span>

                <span
                  style="color: #8f8f94"> {{ item.likeNum > 9999 ? Math.round(item.likeNum / 10000 * 100) / 100 + '万' : item.likeNum
                  }}  </span>
              </div>
            </div>

            <div style=" padding-left: 60px ; font-size: 14px ;padding-bottom: 10px ; padding-right: 35px ; ">
              {{item.comment}}
            </div>

            <div style="width: 100%;  height: 100% ; padding: 0 10px">
              <div class="item-div-img">
                <img class="item-preview-img"
                     v-bind:src="  item.preview ==''  ?   'images/default-preview.jpg' : item.preview   ">
              </div>
              <div class="item-content-div">
                <div style=" display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: normal;
    width: 65%;
    margin-right: 0;
    padding-left: 10px;
    font-size: 15px;
    line-height: 20px;">
                  <p class=" item-contentName">{{item.productsName}} </p>
                  <p class=" item-totalNum-num" style="font-size: 12px ; margin-top: -5px">
                    {{item.subhead}} </p>
                </div>
              </div>

            </div>

            <div style="height: 1px ; width: 100% ;background-color: #f9faff"></div>
          </li>
        </ul>


      </div>

    </template>


    <template v-else>
      <div style="width: 100%;height: 100%;background-color: white;text-align: center;">
        <div style="padding-top: 50%;">
          <img style="width: 35%;  " src="../../../../images/ic_comment_not.png"/>
        </div>
        <div style="margin-top: 4%;">
          <p style="font-size: 11px;">暂无评论喔~</p>
        </div>
      </div>
    </template>

    <!--<div style="background-color: white ; font-size: 8px ; color: darkgray; width: 100% ; text-align: center; padding: 15px">-->

    <!--<span>已经加载完</span>-->
    <!--</div>-->


  </div>
</template>

<script>
  import { getComment, getRecommendComment,getTopComment } from '../../../../service/getData'


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
        msg: '评论',
        commentIsShow: false,
        goodComment: false,
        commentData: null,
        topcommentData: null,
        recommendcommentData: null,
      }
    }
    ,
    created() {
      let that = this;
      let id = this.content.id

      getComment(id).then(function (resultData) {
        console.log(resultData)
        that.commentData =  computerDataTime(resultData)
        this.goodComment =true
        this.commentIsShow =true
      }).catch(function (err) {
        console.log(err)
      })

      getRecommendComment(id).then(function (resultData) {
        console.log(resultData)
        that.recommendcommentData =  computerDataTime(resultData)
        that.goodComment =true
        that.commentIsShow =true
      }).catch(function (err) {
        console.log(err)
      })

      getTopComment(id).then(function (resultData) {
        console.log(resultData)
        that.topcommentData =  computerDataTime(resultData)
        that.goodComment =true
        that.commentIsShow =true
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
