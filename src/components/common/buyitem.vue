<template>
  <div class="buy">

    <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>
    <div >
      <div v-if="data">
        <ul  class="mui-table-view">
          <li v-for="item in data" class="mui-table-view-cell mui-media">
            <a @click="openPlayPage(item.productsId,'')" style="padding: 11px 15px 6px 15px;">
              <!--优化-->
              <div
                style="text-align: center; width: 35% ;height: 100%; margin-right: 0 ;  float: left ; position: relative">
                <img v-if="!(item.preview == '' || item.preview == null)" v-bind:src="item.preview"
                     style="width: 100%; border-radius: 5px ">
                <img v-else src="../../images/default-preview.jpg" style="width: 100%; border-radius: 5px ">
              </div>

              <div class="my-class" style="position: relative; height: 100% ;width: 100%">
                <div
                  style=" position:  absolute;top: 10%; left: 35%;  transform: translateY(10%);display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;   white-space: normal; float: left ; width: 65%;  margin-right: 0;  padding-left: 10px;  font-size: 15px  ; line-height: 21px;">
                  <p style="color: #282828;  font-weight:  bold ; overflow: hidden;">{{item.name}}</p>
                  <p v-if="item.payType == 1" class='mui-ellipsis' style="font-size: 11px;">¥{{item.price}}</p>
                  <p v-if="item.payType == 2" class='mui-ellipsis' style="font-size: 11px;">¥{{item.price}}/月</p>
                  <p class='mui-ellipsis' style="font-size: 11px; margin-top: 4px;">{{ item.updateTime }}</p>
                </div>
              </div>
            </a>
          </li>
        </ul>

      </div>

      <div v-else>
        <div style="width: 100%;height: 100%;background-color: white;text-align: center;">
          <div style="padding-top: 20%;">
            <img style="width: 30%;height: 50%;" src="../../images/buy_not_record.png"/>
          </div>
          <div style="margin-top: 4%;">
            <p style="font-size: 11px;">暂无购买记录</p>
          </div>
          <div @click="toHome()" style="margin-top: 4%;">
            <p class="mui-ellipsis hot_recommend">热门推荐</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { getBuyRecord } from '../../service/getData'

  export default {
    name: 'buyitem',
    props: ['res',],
    data () {
      return {
        data: null

      }
    },
    created() {
      this.getData(this)
    },

    watch: {

      res: function (newQuestion, oldQuestion) {
        let that = this
        let type = 1 //成功
        if (newQuestion === 'buyFail') {
          type = 2
        }
        getBuyRecord(type).then(function (resultData) {
          that.data = resultData
        }).catch(function (err) {

        })
      }
    }
    ,
    methods: {

      getData(that) {
        switch (this.res) {
          case 'buySuccess':
            getBuyRecord(1).then(function (resultData) {
              that.data = resultData
            }).catch(function (err) {

            })
            break
          case 'buyFail':
            getBuyRecord(2).then(function (resultData) {
              that.data = resultData
            }).catch(function (err) {

            })

            break

        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mui-table-view .mui-media-object {
    width: 25%;
    max-width: 500px;
    height: auto;
  }

  a .mui-media-object {
    width: 50%;
  }

  .mui-table-view:before {
    position: absolute;
    right: 0;
    left: 0;
    height: 0;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
    top: 0
  }

  .mui-table-view-cell.mui-active {
    background-color: white;
  }

  .mui-table-view .mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 15px;
    line-height: 18px;
    display: block;
    width: 100%;
    height: 18px;
    margin-top: 3px;
    text-overflow: ellipsis;
    color: #333
  }

  .order-success {
    color: transparent;
    background-color: transparent
  }
</style>
