<template>
  <div>
    <!--短信协议-->
    <div v-show="show" class="mui-popup mui-popup-in"
         style="display: block; font-size: 14px; line-height: 22px; width:90%; ">
      <div class="mui-popup-inner" style="padding: 20px">

        <div class="mui-popup-title">话费支付服务使用协议</div>
        <div>
          <div style="color: #8f8f94">
            <ul style="padding-left: 0;text-align: left ; text-decoration: none;list-style: none">

              <li><img src="../../../images/sms-rule-dot.png" style="width: 8px"><span style="padding-left: 10px">三到云课堂为您提供“亲子母婴10元包”系列连续包月课程服务，资费为￥10.00元/月，开通后当天生效，在您退订前可观看本系列课程已上架的所有内容。</span>
              </li>
              <li><img src="../../../images/sms-rule-dot.png" style="width: 8px"><span style="padding-left: 10px">以话费开通后立即生效，按自然月为用户提供包月收费，如不退订则每月自动续订（每月月初自动续费），您话单显示的业务名称为“亲子母婴10元包”。</span>
              </li>
              <li><img src="../../../images/sms-rule-dot.png" style="width: 8px"><span style="padding-left: 10px">本业务目前支持中国联通用户使用，开通的省份为：内蒙古、宁夏、山东、山西、天津、北京、河北、贵州、辽宁、广西、海南、湖南（仅限4G用户）、福建、陕西、浙江、黑龙江、江西、安徽、重庆，其余省份陆续开通中，敬请期待。</span>
              </li>
              <li><img src="../../../images/sms-rule-dot.png" style="width: 8px"><span style="padding-left: 10px">本次支付仅限于“郑渊洁安全百科”系列课程，不包括三到云课堂内其他系列课程。本业务支持随时退订，您可拨打10010号客服热线或三到云课堂客服热线退订，即可取消连续包月业务，次月生效不再扣费，</span>
              </li>
              <li><img src="../../../images/sms-rule-dot.png" style="width: 8px"><span style="padding-left: 10px">三到云课堂承诺获得版权内容代理授权，承担相应的法律责任，如内容当中包含不良信息，请积极向客服热线进行反馈。</span>
              </li>
            </ul>
          </div>
        </div>
        <input @click="huafeiPay(1)" class="mui-ellipsis" value="继续支付" type="button"
               style="font-size: 20px ; border: 0; margin-top: 15px; color: white; background:#f35b75; display: inline-block; border-radius: 50px; padding: 10px 70px; "/>
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
