<template>
  <div>
    <div v-show="show" id="sub" class="mui-popup mui-popup-in"
         style="display: block; line-height: 35px; width: 350px">
      <div class="mui-popup-inner">
        <div class="mui-popup-title" style="margin-top: 5px">《{{content.title}}》课程</div>

        <!--<div>-->
        <!--<span style="font-size: 11px ; color: #8f8f94;  text-decoration:line-through">{{content.isFree ?  '' : '原价¥'}} {{content.isFree ?  '' : content.price+30}}</span>-->
        <!--<span style="font-size: 15px ; color:  red "> {{content.isFree ? '免费' : '¥'+content.price+'' }}</span>-->

        <!--</div>-->

        <button @click="wxPayConfig(content.productsCode)" class="mui-ellipsis"
                value="" type="button"
                style="font-size: 20px ; margin-top: 20px;       border: 0;  color: white; background:#f35b75; display: inline-block; border-radius: 50px; padding: 12px 80px; ">
          微信支付<span style="font-size: 12px">{{content.isFree ? '免费' : '¥' + content.price + '' }}</span></button>
        <div v-if="content.supportCalls" style="text-align: center">
          <button @click="huafeiPay(0)" class="mui-ellipsis"
                  value="" type="button"
                  style="font-size: 20px ;  margin-top: 15px;    border: 0;  color: white; background:#f35b75; display: inline-block; border-radius: 50px; padding: 12px 70px; ">
            话费支付<span style="font-size: 12px" v-text=" '¥'+content.callsPrice+'/月'"></span></button>
          <div style="text-align: center ; padding: 0 50px ;margin-top: 5px">
            <div class=" mui-checkbox mui-left">
              <input name="checkbox" class="check-input" type="checkbox">
            </div>
            <div @click="openProtocol"
                 style="text-align: center ; z-index: 5; padding-left: 20px; font-size: 14px; color: sandybrown;  text-decoration:  underline ; ">
              话费支付服务使用协议
            </div>
            <!--<div class=" mui-checkbox ">-->
            <!--<input name="radio" value="Item 1" type="checkbox" style="color: yellow ; ">-->
            <!--</div>-->

          </div>
        </div>
        <div class="mui-popup-out"><span class="mui-icon iconfont icon-close"
                                         style="position: absolute; right: 6px ; top: 6px; font-size: 20px;"
                                         @click="closeDialog"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
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
        msg: 'hello',
        show: true
      }
    },
    methods: {
      closeDialog(){
        this.show = false

      }
      , huafeiPay(){

      }, wxPayConfig(){

      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
