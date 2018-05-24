<template>
  <div class="item">
    <ul class="mui-table-view">
      <li v-for=" (item, index) in data" v-if="index<10" class="mui-table-view-cell mui-media"
          style=" height: 100%">
        <a class="item-a" @click="openDetailsPage(item.id)">

          <div class="item-div-img">
            <img class="item-preview-img"
                 v-bind:src="  item.preview ==''  ?   'images/default-preview.jpg' : item.preview   ">
          </div>
          <div class="item-content-div">
            <div class="item-content-div-div">
              <p class=" item-contentName">{{item.contentName}} </p>
              <p class="item-totalNum-num">共{{item.totalNum}}集 | 已更{{item.hasNum}}集{{itemType}}111</p>
              <p class="item-playNum">
                <span
                  v-if="itemType === 1   &&  item.buyNum != null">   {{item.buyNum > 9999 ? Math.round(item.buyNum / 10000 * 100) / 100 + '万人在线学' : item.buyNum + '人在线学'}}</span>
                <span
                  v-else-if="itemType === 2   &&  item.playNum != null">{{item.playNum > 9999 ? Math.round(item.playNum / 10000 * 100) / 100 + '万人播放' : item.playNum + '人播放'}}</span>
                <span
                  v-else-if="itemType === 3  &&  item.remarkNum != null">{{item.remarkNum > 9999 ? Math.round(item.remarkNum / 10000 * 100) / 100 + '万人收藏' : item.remarkNum + '人收藏'}}</span>
                <span
                  v-else-if="itemType === 4 &&  item.commentsNum != null ">{{item.commentsNum > 9999 ? Math.round(item.commentsNum / 10000 * 100) / 100 + '万人评论' : item.commentsNum + '人评论'}}</span>


              </p>
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
</template>

<script>
  import { getRanking } from '../../service/getData'

  export default {
    name: 'rankitem',
    props: ['res', 'itemType'],
    data () {
      return {
        data: null

      }
    },
    mounted() {
      this.getData(this)
    },

    watch: {

      // 如果 `newOrHot` 发生改变，这个函数就会运行
      itemType: function (newQuestion, oldQuestion) {
        let that = this
        getRanking(this.itemType).then(function (resultData) {
          that.data = resultData
        })

      }

    }
    ,
    methods: {
      getData(that) {
        switch (this.res) {
          case 'ranking':
            getRanking(this.itemType).then(function (resultData) {
              that.data = resultData
            }).catch(function (err) {

            })
            break
        }

      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
