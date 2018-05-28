<template>
  <div id="indexAd"
       style="color:  white  ;   background-size:100% 40px;  background:rgba(0,0,0,0.4);  width: 100%;height: 40px ;      position:relative; ">
    <div style="width: 100% ;   position: absolute;top: 50%; transform: translateY(-50%);">
                <span id="adIcon" class="mui-icon iconfont icon-gift"
                      style="font-size: 18px ;   margin-left: 20px ;  "></span>
      <span id="adTitle" style=" font-family: 'PingFang TC'  ;font-size: 13px ; margin-left: 10px ;">郑渊洁给孩子的安全百科</span>
      <a @click="openPlayPage('ff80808161fe3ceb0161ffa0ccb0011c', '')"><span id="adReceive"
                                                                             style="font-size: 12px ;   margin-left: 10px ; color: #fbf058;  ">立即领取 >></span></a>
      <span class="mui-icon iconfont icon-close" style="margin-left: 10px  ;font-size: 14px "
            @click="removeAd"></span>
    </div>
  </div>
</template>

<script>

//  let windowWidth = $(window).width();

//  let adIcon = document.getElementById('adIcon');
//  let adTitle = document.getElementById('adTitle');
//  let adReceive = document.getElementById('adReceive');

//  if (windowWidth <= 320) {
//    adIcon.style.marginLeft = '20px';
//    adTitle.style.fontSize = '13px';
//    adReceive.style.fontSize = '12px';
//  } else if (windowWidth > 320 && windowWidth <= 375) {
//    adIcon.style.marginLeft = '30px';
//    adTitle.style.fontSize = '14px';
//    adReceive.style.fontSize = '13px';
//  } else {
//    adIcon.style.marginLeft = '30px';
//    adTitle.style.fontSize = '17px';
//    adReceive.style.fontSize = '16px';
//  }

  export default {
    data () {
      return {
        msg: 'hello'
      }
    }
    ,
    methods:{
      removeAd(){

      },openPlayPage(){

      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
