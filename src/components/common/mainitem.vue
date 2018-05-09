<template>
  <div class="item">
    <ul class="mui-table-view">
      <li v-for=" (item , index) in data" class="mui-table-view-cell mui-media"
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
    <h1>{{isFree}}{{newOrHot}}{{classId}}</h1>
  </div>
</template>

<script>
  import { getFreeOrPayData, getHottestData } from '../../service/getData'

  export default {
    name: 'mainitem',
    props: ['res', 'isFree', 'newOrHot', 'classId'],
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
      newOrHot: function (newQuestion, oldQuestion) {
        getFreeOrPayData(this, this.isFree, this.newOrHot, this.classId)

      }, isFree: function (newQuestion, oldQuestion) {
        console.log("hellloisFree")
//        getFreeOrPayData(this, this.isFree, this.newOrHot, this.classId)

      }
    }
    ,
    methods: {

      getData: function () {
        switch (this.res) {
          case 'recommend':
            getHottestData(this)
            break

          case 'free':

            getFreeOrPayData(this, this.isFree, this.newOrHot, this.classId)

            break
        }

      }
    },

    beforeCreate: function () {
      console.group('beforeCreate 创建前状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
      console.log("%c%s", "color:red", "message: " + this.message)
    },
    created: function () {
      console.group('created 创建完毕状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeMount: function () {
      console.group('beforeMount 挂载前状态===============》');
      console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },

    beforeUpdate: function () {

      console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    updated: function () {
      console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
