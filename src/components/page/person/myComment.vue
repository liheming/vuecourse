<template>
  <div class="comment">
    <div v-if="commentData">
      <ul class="mui-table-view">
        <li v-for="item in commentData " @click="openComment(item.productsId, item.contentType, item.status)"
            style=" padding-top: 10px">

          <div style=" float: left;width: 100%;  padding-left: 35px ;  padding-right: 35px ;  ">
            <div>
              <img v-if="!(item.headPic == '' || item.headPic == null)" v-bind:src="item.headPic"
                   style=" width: 30px ;  height: 30px; float: left">
            </div>
            <div style="padding-left: 10px ; margin-top: 2px; float: left;  line-height: 9px">
              <p style="font-size: 13px ;font-weight: bold;color: black;">{{item.userName}}</p>
              <p style="font-size: 11px">{{ item.commentTime }}【{{item.contentName}}】</p>
            </div>
            <div style="text-align: right ;font-size: 10px ; ">
              <span style="color: #f35b75" v-if="item.status==0">未审核</span>
              <span v-else-if="item.status==1">已审核</span>
              <span style="color: red" v-else>审核未通过</span>
              <!--<span>{{ item.status==1 ? '已审核': '未审核'   }}</span>-->

              <div style=" position: absolute;  right: 35px ;display: none ">
							<span v-if="item.isLike" class="mui-icon iconfont icon-like"
                    style=" font-size:  13px  ;color: red"></span>

                <span v-else class="mui-icon iconfont icon-un-like"
                      style=" font-size:  13px"></span>

                <span
                  style="color: grey"> {{ item.likeNum > 9999 ? Math.round(item.likeNum / 10000 * 100) / 100 + '万' : item.likeNum
                  }}  </span>
              </div>
            </div>
          </div>

          <div style=" padding-left: 74px ; font-size: 14px ;padding-bottom: 10px ; padding-right: 35px ; ">
            {{item.comment}}
          </div>

          <template v-if="!(item.reply == '' || item.reply == null)">
            <div style="font-size: 14px;   background-color: #f9faff ;        padding: 10px 35px 10px 74px;">
              <span style="color: #f35b75;font-size: 14px;">三到云课堂小助手</span>
              回复：{{item.reply}}
            </div>
          </template>
          <span style="width: 100%  ;height: 1px ;background-color: #f2f2f2 ;display: block"></span>

        </li>
      </ul>
    </div>


    <div v-else style="width: 100%;height: 100%;background-color: white;text-align: center;">
      <div style="padding-top: 20%;">
        <img style="width: 30%;height: 50%;" src="../../../images/ic_comment_not.png"/>
      </div>
      <div style="margin-top: 4%;">
        <p style="font-size: 11px;">暂无评论喔~</p>
      </div>
      <div @click="toHome()" style="margin-top: 4%;">
        <p class="mui-ellipsis hot_recommend">热门推荐</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { getMyComment } from '../../../service/getData'
  export default {
    name: 'comment',
    data () {
      return {
        commentData: null
      }
    },
    created() {
      let that = this;
      getMyComment().then(function (resultData) {
        that.commentData = resultData
      }).catch(function (err) {

      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
