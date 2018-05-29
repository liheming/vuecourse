<template>
  <div>
    <div v-show="show" class="mui-popup mui-popup-in"
         style="display: block; font-size: 16px; line-height: 40px; width: 320px; ">
      <div class="mui-popup-inner" style="padding: 30px">
        <div class="mui-popup-title">订阅未成功</div>

        <div v-if="content.supportCalls">
          <input @click="changeOtherPay" class="mui-ellipsis" value="换一种支付方式"
                 type="button"
                 style="font-size: 20px ; border: 0; margin-top: 15px; color: white; background:#f35b75; display: inline-block; border-radius: 50px; padding: 10px 30px; "/>
          <div style="padding-top: 15px ;color: #8f8f94"><label>查看详情>></label></div>
        </div>
        <div v-else>
          <input @click="closeDialog" class="mui-ellipsis" value="我知道了" type="button"
                 style="font-size: 20px ; border: 0; margin-top: 15px; color: white; background:#f35b75; display: inline-block; border-radius: 50px; padding: 10px 70px; "/>
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
      , changeOtherPay(){

      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
