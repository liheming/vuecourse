<template>
  <div class="hello">
    <div v-if="subdata" class="list" style="margin-top: 10px ;">
      <ul class="mui-table-view">
        <li v-for=" (item , index ) in subdata"  @key="index" v-if="index<10" class="mui-table-view-cell mui-media"
            style=" height: 100%">
          <a class="item-a" @click="openPlayPage(item.productsId, '')">

            <div class="item-div-img">
              <img class="item-preview-img"
                   v-bind:src="  item.preview ==''  ?   'images/default-preview.jpg' : item.preview   ">
            </div>
            <div class="item-content-div">
              <div class="item-content-div-div">
                <p class=" item-contentName">{{item.name}} </p>
                <p class="item-totalNum-num">共{{item.totalNum}}集 | 已更{{item.hasNum}}集</p>

                <div class="item-content-div-div-div">
                  <p class="mui-ellipsis"
                     style="font-size: 10px ; color: white;  background:#f35b75;  display: inline-block; border-radius: 10px;  padding: 2px 6px; ">
                    继续学习
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div v-else style="width: 100%;height: 100%;background-color: white;text-align: center;">
      <div style="padding-top: 20%;">
        <img style="width: 30%;height: 50%;" src="../../../images/ic_mine_record.png"/>
      </div>
      <div style="margin-top: 4%;">
        <p style="font-size: 11px;">暂无订阅记录喔</p>
      </div>
      <div @click="openIndex()" style="margin-top: 4%;">
        <p class="mui-ellipsis learn-hot-recommend">热门推荐</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { getBuyRecord } from '../../../service/getData'
export default {
  name: 'order',
  data () {
    return {
      subdata:null
    }
  },
  created() {
    let that = this;
    getBuyRecord(1).then(function (resultData) {
      that.subdata = resultData
    }).catch(function (err) {

    })
  }
}
</script>

<style scoped>

</style>
