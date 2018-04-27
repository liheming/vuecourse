<template>
  <div class="hello">
    <div style="height: 10px ; width: 100% ;background-color: #f9faff"></div>
    <div class="list" style="background-color: white;">
      <div class="" style=" text-align:  left;  font-size: 14px;   padding: 10px  25px ;">
        <span id="mostNew" @click="newlyClick" style="color: #f35b75">最新</span>&nbsp&nbsp<span

        style="color:#d2d2d2;" @click="hottestClick">最热</span>
      </div>
      <div class="list">
        <ul class="mui-table-view">
          <li v-for=" item in freeData"
              class="mui-table-view-cell mui-media" style=" height: 100%">
            <a class="item-a" @click="openPlayPage(item.id, '')">

              <div class="item-div-img">
                <img class="item-preview-img"
                     v-bind:src="  item.preview ==''  ?   'images/default-preview.jpg' : item.preview   ">
              </div>
              <div class="item-content-div">
                <div class="item-content-div-div">
                  <p class=" item-contentName">{{item.contentName}} </p>
                  <p class="item-totalNum-num">共{{item.totalNum}}集 |
                    已更{{item.hasNum}}集</p>
                  <p class="item-playNum">
                    {{item.playNum > 9999 ? Math.round(item.playNum / 10000 * 100) / 100 + '万人在学' : item.playNum + '人在学'
                    }}</p>
                  <div class="item-content-div-div-div">
                    <p>
                      <span
                        class="item-base-price">{{item.isFree ? '' : '原价¥'}} {{item.isFree ? '' : item.price + 30}}</span>
                      <span class="item-price"> {{item.isFree ? '免费' : '¥' + item.price + '' }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>

        </ul>
      </div>
    </div>
    <div style="height: 51px"></div>
  </div>
</template>

<script>


  export default {
    name: 'Hi',
    data () {
      return {
        freeData: null,
        type: 1
      }
    },
    mounted() {
      this.$nextTick(() => {

        var that = this;
        this.payOrFree(that, 1, 1)

      })
    },
    methods: {
      newlyClick: function () {
        this.payOrFree(this, 1, 1)
      },
      hottestClick: function () {
        this.payOrFree(this, 1, 2)
      },

      /**
       * 获取免费和付费数据
       * @param freeOrPay 1 免费， 0 付费
       * @param newOrHot 1 最新， 2 最热
       */
      payOrFree: function (that, freeOrPay, newOrHot) {

        $.ajax({
          url: hostUrl + 'selling/products/payOrFree',
          type: 'post',
          data: {
            'appKey': 'sandaoyun',
            'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
            'channelCode': '100001',
            'isfree': freeOrPay,
            'newOrHot': newOrHot
          },
          dataType: 'json',
          success: function (result) {
            console.log(result);

            if (result.code == 200) {
//          console.log("200");
              that.freeData = JSON.parse(result.data);
            } else {
            }
          },
          error: function () {
          }
        });
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
