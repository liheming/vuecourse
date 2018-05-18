<template>
  <div class="hello">
    <ul v-if="isShow" class="mui-table-view">
      <li class="mui-table-view-cell mui-collapse mui-active" style="padding-left: 13px">
        <a class="mui-navigate-right" href="#">近一周</a>
        <div class="mui-collapse-content" style="padding-top: 0;">
          <div class="list" style="background-color: white;">
            <ul class="mui-table-view" style="margin-top: 0;">
              <li v-for="item in weekdata " class="mui-table-view-cell mui-media"
                  style="padding-left:12px">
                <a @click="openPlayPage(item.productsId, item.id, item.productsType)"
                   style="padding: 11px 15px 6px 15px;">
                  <!--优化-->
                  <div
                    style="text-align: center; width: 35% ;height: 100%; margin-right: 0 ;  float: left ; position: relative">
                    <img v-if="!(item.preview == '' || item.preview == null)"
                         v-bind:src="item.preview"
                         style="width: 100%; border-radius: 5px ">
                    <img v-else
                         style="width: 100%; border-radius: 5px ">
                  </div>

                  <div class="my-class"
                       style="position: relative; height: 100% ;width: 100%">
                    <div
                      style=" position: absolute;top: 10%; left: 35%; transform: translateY(10%);display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;   white-space: normal; float: left ; width: 65%;  margin-right: 0;  padding-left: 10px;  font-size: 15px  ; line-height: 21px;">
                      <div>
                        <p style="color: #282828;  font-weight:  bold ; overflow: hidden;">
                          {{item.name}}</p>
                        <p style="font-size: 11px">{{item.updateTime}}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li class="mui-table-view-cell mui-collapse" style="padding-left: 13px;">
        <a class="mui-navigate-right" href="#">更早之前</a>
        <div class="mui-collapse-content" style="padding-top: 0px;">
          <div class="list" style="background-color:  white">
            <ul class="mui-table-view" style="margin-top: 0px;">
              <li v-for="item in longtimedata " class="mui-table-view-cell mui-media"
                  style="padding-left:12px">
                <a @click="openPlayPage(item.productsId, item.id, item.productsType)"
                   style="padding: 11px 15px 6px 15px;">
                  <!--优化-->
                  <div
                    style="text-align: center; width: 35% ;height: 100%; margin-right: 0 ;  float: left ; position: relative">
                    <img v-if="!(item.preview == '' || item.preview == null)"
                         v-bind:src="item.preview"
                         style="width: 100%; border-radius: 5px ">
                    <img v-else src="images/default-preview.jpg"
                         style="width: 100%; border-radius: 5px ">
                  </div>

                  <div class="my-class"
                       style="position: relative; height: 100% ;width: 100%">
                    <div
                      style=" position:  absolute;top: 10%; left: 35%;  transform: translateY(10%);display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;   white-space: normal; float: left ; width: 65%;  margin-right: 0;  padding-left: 10px;  font-size: 15px  ; line-height: 21px;">
                      <p style="color: #282828;  font-weight:  bold ; overflow: hidden;">
                        {{item.name}}</p>
                      <p style="font-size: 11px">{{item.updateTime}}</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>

    <div v-else style="width: 100%;height: 100%;background-color: white;text-align: center;">
      <div style="padding-top: 20%;">
        <img style="width: 30%;height: 50%;" src="../../../images/ic_play_record.png"/>
      </div>
      <div style="margin-top: 4%;">
        <p style="font-size: 11px;">暂无播放记录喔</p>
      </div>

      <div @click="openIndex()" style="margin-top: 4%;">
        <p class="mui-ellipsis learn-hot-recommend">热门推荐</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { getEarlier, getOneWeek } from '../../../service/getData'
  export default {
    name: 'play',
    data () {
      return {
        isShow: false,
        weekdata:null,
        longtimedata:null
      }
    }
    ,
    mounted() {
      let that = this;
      getOneWeek().then(function (resultData) {
        that.weekdata = resultData
        that.isShow = true
      }).catch(function (err) {

      })
      getEarlier().then(function (resultData) {
        that.longtimedata = resultData
        that.isShow = true
      }).catch(function (err) {

      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
