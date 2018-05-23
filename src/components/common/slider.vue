<template>
  <div class="slider">

    <!--<div class="mui-slider">-->
    <!--<div class="mui-slider-group mui-slider-loop">-->
    <!--&lt;!&ndash; 第三张 &ndash;&gt;-->
    <!--<div class="mui-slider-item">-->
    <!--<a-->
    <!--href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000037&idx=1&sn=9b9b08568529d759708e8949ccc1055a&chksm=7c9cb5aa4beb3cbc4a1e3342e2f95d59ee338bb39c734d1c8269858d92dc175da8f58d38b6f1#rd">-->
    <!--<img src="../../images/banner3.jpg">-->
    <!--</a>-->
    <!--</div>-->

    <!--&lt;!&ndash;第一张&ndash;&gt;-->
    <!--<div class="mui-slider-item">-->
    <!--<a-->
    <!--href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000001&idx=1&sn=2b29bf9b837c2d2350df27ec0514c893&chksm=7c9cb58e4beb3c98550cd6bfb7b47843e7c0a58512abb00da75ef5af366b4854f731a1b6ec92#rd">-->
    <!--<img src="../../images/banner1.jpg">-->
    <!--</a>-->
    <!--</div>-->

    <!--&lt;!&ndash;第二张&ndash;&gt;-->
    <!--<div class="mui-slider-item">-->
    <!--<a-->
    <!--href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000016&idx=1&sn=de81156b0f1139535751cf321afc02e8&chksm=7c9cb59f4beb3c89217df7d323de1126584643bc1c328d4b94f308fc0e941a579720467dac82#rd">-->
    <!--<img src="../../images/banner2.jpg">-->
    <!--</a>-->
    <!--</div>-->
    <!--&lt;!&ndash; 第三张 &ndash;&gt;-->
    <!--<div class="mui-slider-item">-->
    <!--<a-->
    <!--href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000037&idx=1&sn=9b9b08568529d759708e8949ccc1055a&chksm=7c9cb5aa4beb3cbc4a1e3342e2f95d59ee338bb39c734d1c8269858d92dc175da8f58d38b6f1#rd">-->
    <!--<img src="../../images/banner3.jpg">-->
    <!--</a>-->
    <!--</div>-->

    <!--&lt;!&ndash; 第四张 &ndash;&gt;-->
    <!--&lt;!&ndash;<div class="mui-slider-item">&ndash;&gt;-->
    <!--&lt;!&ndash;<a href="content-details.html?id=ff8080816155bd6c016155daf089001c">&ndash;&gt;-->
    <!--&lt;!&ndash;<img src="images/banner-sanzijing.jpg">&ndash;&gt;-->
    <!--&lt;!&ndash;</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;第一张&ndash;&gt;-->

    <!--<div class="mui-slider-item">-->
    <!--<a-->
    <!--href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000001&idx=1&sn=2b29bf9b837c2d2350df27ec0514c893&chksm=7c9cb58e4beb3c98550cd6bfb7b47843e7c0a58512abb00da75ef5af366b4854f731a1b6ec92#rd">-->
    <!--<img src="../../images/banner1.jpg">-->
    <!--</a>-->
    <!--</div>-->

    <!--</div>-->

    <!--<div class="mui-slider-indicator">-->
    <!--<div class="mui-indicator mui-active"></div>-->
    <!--<div class="mui-indicator"></div>-->
    <!--<div class="mui-indicator"></div>-->
    <!--</div>-->
    <!--</div>-->


    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide><a
        href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000001&idx=1&sn=2b29bf9b837c2d2350df27ec0514c893&chksm=7c9cb58e4beb3c98550cd6bfb7b47843e7c0a58512abb00da75ef5af366b4854f731a1b6ec92#rd">
        <img class="banner" src="../../images/banner1.jpg">
      </a></swiper-slide>
      <swiper-slide><a
        href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000016&idx=1&sn=de81156b0f1139535751cf321afc02e8&chksm=7c9cb59f4beb3c89217df7d323de1126584643bc1c328d4b94f308fc0e941a579720467dac82#rd">
        <img class="banner" src="../../images/banner2.jpg">
      </a></swiper-slide>
      <swiper-slide><a
        href="http://mp.weixin.qq.com/s?__biz=MzU2NzM4NzYxNg==&mid=100000037&idx=1&sn=9b9b08568529d759708e8949ccc1055a&chksm=7c9cb5aa4beb3cbc4a1e3342e2f95d59ee338bb39c734d1c8269858d92dc175da8f58d38b6f1#rd">
        <img class="banner" src="../../images/banner3.jpg">
      </a></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>

  </div>
</template>

<script>
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  Vue.use(VueAwesomeSwiper, /* { default global options } */)

  // require styles
//  import 'swiper/dist/css/swiper.css'

  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: true,//自动播放
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {//左右箭头翻页
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import 'swiper/dist/css/swiper.css';

.banner{
  width: 100%;
  height: auto;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #f35b76;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(243, 91, 117);
}

</style>
