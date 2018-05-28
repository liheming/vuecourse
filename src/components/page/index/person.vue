<template>
  <div>
    <!--个人中心-->
    <div class="person-center">
      <div class="person-center-div">
        <img class="person-center-div-img" id="userHead"
             :src=" headimgurl  ? headimgurl : '../../images/index_pay.png'  "/>
        <P class="person-center-nickName" id="nickName" v-text=" nickname ? nickname : '昵称' "></P>
      </div>
    </div>

    <ul class="mui-table-view" style="color: #282828">
      <li class="mui-table-view-cell" v-for="(item , index) in data " :key="index">
        <router-link class="mui-navigate-right" :to="item.id" >
          <img :src="item.image" class="person-center-item-image">{{item.title}}
        </router-link>
      </li>
    </ul>
    <router-link to="/help">help</router-link>
  </div>
</template>

<script>
  import collect from '../../../images/person-collect-black.png'
  import comment from '../../../images/person-comment-black.png'
  import buyRecord from '../../../images/person-buyrecord-black.png'
  import message from '../../../images/person-message-black.png'

  import { queryUserByUserId } from '../../../service/getData'
  export default {
    name: 'Hi',
    data () {
      return {
        data: [
          {title: '我的收藏', id: 'personCollect', image: collect},
          {title: '我的评论', id: 'personComment', image: comment},
          {title: '购买记录', id: 'personBuyRecord', image: buyRecord},
          {title: '我的消息', id: 'personMessage', image: message}
        ],
        headimgurl: '',
        nickname: ''
      }
    },
    mounted(){
      document.title = '个人中心'
      let that = this
      queryUserByUserId().then(function (resultData) {
        localStorage.userid = resultData.openid;
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
  .person-center-item-image{
    margin-right: 10px;
  }
  .mui-navigate-right {
    font-size: 14px;
  }

  .mui-table-view-cell {
    padding: 12px 15px;

  }
</style>
