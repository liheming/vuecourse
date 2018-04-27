<template>
  <div class="item">
    <ul class="mui-table-view">
      <li v-for=" (item , index) in data" v-if="index<10" class="mui-table-view-cell mui-media"
          style=" height: 100%">
        <a class="item-a" @click="openPlayPage(item.id, '')">

          <div class="item-div-img">
            <img class="item-preview-img"
                 v-bind:src="  item.preview ==''  ?   'images/default-preview.jpg' : item.preview   ">
          </div>
          <div class="item-content-div">
            <div class="item-content-div-div">
              <p class=" item-contentName">{{item.contentName}} </p>
              <p class="item-totalNum-num">共{{item.totalNum}}集 | 已更{{item.hasNum}}集</p>
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
    <h1>{{data}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'mainitem',
    data () {
      return {
//        msg: '很高兴你使用vue 我是免费',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
