<template>
  <div>
    <div v-show="show" class="mui-popup mui-popup-in"
         style="display: block; font-size: 16px; line-height: 40px; width: 320px; ">
      <div class="mui-popup-inner" style="padding: 40px">
        <div class="mui-popup-title">恭喜你已经成功订阅</div>
        <div class="mui-popup-text">《{{content.contentName}}》课程</div>
        <input @click="closeDialog" class="mui-ellipsis" value="我知道了" type="button"
               style="font-size: 20px ; border: 0; margin-top: 15px; color: white; background:#f35b75; display: inline-block; border-radius: 50px; padding: 10px 70px; "/>
        <div class="mui-popup-out"><span class="mui-icon iconfont icon-close"
                                         style="position: absolute; right: 2px ; top: 2px;"
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

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
