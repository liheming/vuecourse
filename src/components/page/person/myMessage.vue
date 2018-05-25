<template>
  <div id="message" style=" background-color: #F5F5F5; ">
    <div v-if="messageData">
      <ul class="mui-table-view">
        <li v-for="item in messageData "
            style=" padding-top: 10px" @click="openPlayPage(item.productId, '')">


          <div style=" float: left;width: 18%;  padding: 0 10px 0 20px  ">
            <img src="../../../images/sandaoyun-logo.png" style="width: 100%">

          </div>

          <div>
            <span style="color: #f35b75;font-size: 16px;">三到云课堂小助手</span>
          </div>

          <div style=" padding-left: 74px ; font-size: 14px ;padding-top: 5px">
            {{item.messageContent}}
          </div>
          <div style="color: #f35b75 ; padding-left: 74px ; font-size: 14px ; padding-top: 5px">
            戳此可查看课程详情！
          </div>
          <div
            style="  padding-left: 74px ; font-size: 12px ;padding-top: 5px ; padding-bottom: 10px ;   color: #878787 ">
            {{ item.createTime}}
          </div>

          <div style="height: 3px ; width: 100% ;background-color: #f9faff"></div>
        </li>


      </ul>


    </div>
    <div v-else>
      <div style="width: 100%;height: 100%;background-color: white;text-align: center;">
        <div style="padding-top: 20%;">
          <img style="width: 30%;height: 50%;" src="../../../images/person-news-not.png"/>
        </div>
        <div style="margin-top: 4%;">
          <p style="font-size: 11px;">暂无消息喔~</p>
        </div>
        <div @click="openHomePage" style="margin-top: 4%;">
          <p class="mui-ellipsis hot_recommend">热门推荐</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { getMyMessage } from '../../../service/getData'
  export default {
    name: 'message',
    data () {
      return {
        messageData: null
      }
    },
    created() {
      let that = this;
      getMyMessage().then(function (resultData) {
        that.messageData = resultData
      }).catch(function (err) {

      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
