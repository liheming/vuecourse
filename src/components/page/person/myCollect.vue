<template>
  <div id="myCollect" style=" background-color: #F5F5F5; ">
    <div id="item-course" class="mui-control-content mui-active">
      <template v-if="courseData">
        <ul class="mui-table-view">
          <li v-for=" item  in courseData" class="mui-table-view-cell mui-media"
              style=" height: 100%">
            <a class="item-a" @click="openPlayPage(item.productsId, '')">

              <div class="item-div-img">
                <img class="item-preview-img"
                     v-bind:src="  item.preview ==''  ?   'images/default-preview.jpg' : item.preview   ">
              </div>
              <div class="item-content-div">
                <div class="item-content-div-div" style="">
                  <p class=" item-contentName">{{item.name}} </p>
                  <p class="item-totalNum-num">共{{item.totalNum}}集 | 已更{{item.hasNum}}集</p>
                  <p class="item-playNum">
                    {{ item.remarkNum > 9999 ? Math.round(item.remarkNum / 10000 * 100) / 100 + '万人收藏' : item.remarkNum + '人收藏'
                    }}
                  </p>
                  <div class="item-content-div-div-div">
                    <p class='mui-ellipsis' style="font-size: 11px; margin-top: 8px;">{{item.createTime}}</p>

                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>


      </template>

      <template v-else>
        <div style="width: 100%;height: 100%;background-color: white;text-align: center;">
          <div style="padding-top: 20%;">
            <img style="width: 30%;height: 50%;" src="../../../images/ic_collect_not.png"/>
          </div>
          <div style="margin-top: 4%;">
            <p style="font-size: 11px;">空空如也喔~</p>
          </div>
          <div @click="toHome()" style="margin-top: 4%;">
            <p class="mui-ellipsis hot_recommend">热门推荐</p>
          </div>
        </div>
      </template>
    </div>


  </div>

</template>

<script>
  import { getMyCollect } from '../../../service/getData'
  export default {
    name: 'collect',
    data () {
      return {
        courseData: null
      }
    },
    created() {
      let that = this;
      getMyCollect().then(function (resultData) {
        that.courseData = resultData
      }).catch(function (err) {

      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
