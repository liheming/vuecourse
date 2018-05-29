<template>
  <div>
    <!--播放内容部分-->
    <div style="background-color: white ;">
      <div style="position: relative ; background-color: white; height: 100%; width: 100%;">

        <video id="myVideo" v-bind:src="fileUrl"
               onplay="videoPlay()" playsinline="" webkit-playsinline=""
               preload="auto" style="width: 100%  ;height: auto" :poster=" content.topPicture "
               v-bind:title="subsetName">
        </video>
        <!--<div  v-bind:style="{ background-image: url(content.topPicture) ,position: absolute , top: -5px}"></div>-->
        <!--<img v-if="playIsShow" :src="content.topPicture"  v-bind:style="{  width: '100%' , height: 'inherit' ,  position: 'absolute' , top: '0' ,fontSize : content.topPicture, color : 'red'}" >-->
        <div v-if="playIsShow" @click="playVideo(fileUrl)"
             style="width: 100% ; height: inherit ; position: absolute; top: -5.5px ; background:rgba(40,40,40,0.3);  ">
          <div style="position:   absolute;top: 50%;  left:35% ;   transform: translateY(-50%); color: white ;  ">
            <img src="../../../images/icon-play.png" style="height: 43px ; width: auto">
          </div>
        </div>


      </div>

      <div style="padding: 20px ;position: relative ; ">

        <p style="color: #282828;  overflow: hidden; font-size: 15px; font-weight: bold">
          {{ content.contentName }}
          <!--{{ subsetName }}目录中第几集的名字 -->
        </p>
        <p class='mui-ellipsis' style="font-size: 13px;"> {{ content.director }} </p>

        <div class='mui-ellipsis' style="width: 100%;">
          <p style="display: inline; font-size: 11px;">
            已有{{content.playNum}}人播放
          </p>

          <div style="display: inline; float: right;">
            <span style="font-size: 11px ; color: #a89e9d;  text-decoration:line-through">{{content.isFree ? '' : '原价¥'}} {{content.isFree ? '' : content.price + 30}}</span>
            <span style="font-size: 15px ; color:  #f35b75 "> {{content.isFree ? '免费' : '¥' + content.price + ''
              }}</span>
          </div>
        </div>
      </div>
    </div>

    <!--菜单目录-->
    <div class="mui-segmented-control" style="padding: 3px 0 ;      z-index: 5; font-size: 15px">
      <a id="detail" class="mui-control-item mui-active" href="#item-detail"
         style=" font-size: 15px  ">简介<span></span></a>
      <a id="category" class="mui-control-item " href="#item-category"
         style=" font-size: 15px ">目录<span></span></a>
      <a id="comment" class="mui-control-item" href="#item-comment"
         style=" font-size: 15px ;">评论<span></span></a>

    </div>

    <div style="height: 2px ; width: 100% ;background-color: #f9faff"></div>
    <wx-sub :content="content"></wx-sub>
    <sms-sub :content="content"></sms-sub>
    <sub-success :content="content"></sub-success>
    <sub-fail :content="content"></sub-fail>
    <sm-rule :content="content"></sm-rule>

    <sub-success :content="content"></sub-success>
    <!--<subdialog :content="content"></subdialog>-->
  </div>

</template>

<script>
  import wxSub from '../../common/dialog/wxSub.vue'
  import smsSub from '../../common/dialog/smsSub.vue'
  import subSuccess from '../../common/dialog/subSuccess.vue'
  import subFail from '../../common/dialog/subFail.vue'
  import smRule from '../../common/dialog/smRule.vue'
  import { getContent } from '../../../service/getData'


  export default {
    name: "play",
    components: {wxSub,smsSub,subSuccess,subFail,smRule},
    data() {
      return {
        msg: '我是播放页',
        dialogShow: false,
        dialogType: '',
        backTopIsShow: false,
        remarkNumIsShow: true,
        goHome: false,
        playIsShow: true,
        agreeProtocol: 0,
        myindex: 0,
        message: '',
        commentIsShow: false,
        goodComment: false,  //精彩评论
        newRecisShow: false,
        isSeen: false,
        isComment: false,
        isCollect: true,
        fileUrl: null,
        subsetName: null,
        content: null,
        commentData: null,
        topcommentData: null,
        recommendcommentData: null,
        categoryData: null,
        recentUpdate: null,
        newRecommendData: null
      }
    },
    created(){
      let that = this
      let pid = that.$route.query.pid
      getContent(pid).then(function (resultData) {
        console.log(resultData.id)
        console.log(resultData)
        that.content = resultData
      }).catch(function (err) {
      })
    }

  }
</script>

<style scoped>

  video::-internal-media-controls-download-button {
    /*display: none!important;
              -webkit-appearance: none;*/
    display: none;
  }

  video::-webkit-media-controls-enclosure {
    overflow: hidden;
  }

  video::-webkit-media-controls-panel {
    width: calc(100% + 30px);
    /*display: none!important;
              -webkit-appearance: none;*/
  }

  /* Old shadow dom for play button */
  video::--webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }

  /* New shadow dom for play button */
  /* This one works */
  video::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }

  .mui-table-view-cell:after {
    background-color: #EBEBEB;
  }

  /*.main{*/
  /*position:fixed;top:50px; bottom:50px;overflow:scroll;*/
  /*}*/

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .main {
    padding-bottom: 60px;
  }

  /*main的padding-bottom值要等于或大于footer的height值*/
  .footer {
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    /*position: absolute;*/
    bottom: 0;
    width: 100%;
    height: 50px;
  }

  /*!* 可以设置不同的进入和离开动画 *!*/
  /*!* 设置持续时间和动画函数 *!*/
  /*.slide-fade-enter-active {*/
    /*transition: all 1s ease;*/
  /*}*/

  /*.slide-fade-leave-active {*/
    /*transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  /*}*/

  /*.slide-fade-enter, .slide-fade-leave-to*/
    /*!* .slide-fade-leave-active for below version 2.1.8 *!*/
  /*{*/
    /*transform: translateX(30px);*/
    /*opacity: 0.8;*/
  /*}*/

  .item-li {

    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(40, 40, 40, 0.2);
  }

  .mui-checkbox input[type=checkbox]:checked:before, .mui-radio input[type=radio]:checked:before {
    color: #f35b75;
  }
</style>
