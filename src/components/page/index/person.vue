<template>
  <div >
    <!--个人中心-->
    <div class="person-center">
      <div class="person-center-div">
        <img class="person-center-div-img" id="userHead" :src=" headimgurl  ? headimgurl : '../../images/index_pay.png'  "/>
        <P class="person-center-nickName" id="nickName" v-text=" nickname ? nickname : '昵称' "></P>
      </div>
    </div>
    <ul class="mui-table-view" style="color: #282828">
      <li @click="openMyCollent()" class="mui-table-view-cell">
        <a class="mui-navigate-right">
          <img class="person-center-item-image" src="../../../images/person-collect-black.png"> 我的收藏
        </a>
      </li>
      <li @click="openMyComment()" class="mui-table-view-cell">
        <a class="mui-navigate-right">
          <img src="../../../images/person-comment-black.png" class="person-center-item-image"> 我的评论
        </a>
      </li>
      <li @click="openBuyRecord()" class="mui-table-view-cell">
        <a class="mui-navigate-right">
          <img src="../../../images/person-buyrecord-black.png" class="person-center-item-image"> 购买记录
        </a>
      </li>
      <li @click="toastMsg()" class="mui-table-view-cell">
        <router-link   class="mui-navigate-right"  to="/person/myCollect">
          <img src="../../../images/person-message-black.png" class="person-center-item-image"> 我的消息
        </router-link>
      </li>
      <router-link to="/person/myCollect" class="description_top">test</router-link>
      <!--<li @click="toastMsg()" class="mui-table-view-cell">
          <a class="mui-navigate-right" style="color: #878787">
              <img src="images/person-card.png" class="person-center-item-image"> 我的卡券
          </a>
      </li>
      <li @click="toastMsg()" class="mui-table-view-cell">
          <a class="mui-navigate-right" style="color: #878787 ">
              <img src="images/person-gift.png" class="person-center-item-image"> 赠送记录
          </a>
      </li>
      <li @click="toastMsg()" class="mui-table-view-cell">
          <a class="mui-navigate-right" style="color: #878787 ">
              <img src="images/person-share.png" class="person-center-item-image"> 分享记录
          </a>
      </li>-->



    </ul>
    <router-view />
  </div>
</template>

<script>
  import { queryUserByUserId } from '../../../service/getData'
  export default {
    name: 'Hi',
    data () {
      return {
        headimgurl: '',
        nickname: ''
      }
    },
    mounted(){
      document.title = '个人中心'
      let that = this
      queryUserByUserId().then(function (resultData) {
        that.headimgurl = resultData.headimgurl;
        that.nickname = resultData.nickname;
      }).catch(function (err) {
      })
    },
    methods: {
      openMyComment(){
        alert("11")
//      this.$router.replace({ path: id+'person/myComment', query: { page: id }})
      }
    }
  }
</script>
<style scoped>
  .mui-navigate-right{
    font-size: 14px;
  }
  .mui-table-view-cell{
    padding: 12px 15px;
  }
</style>
