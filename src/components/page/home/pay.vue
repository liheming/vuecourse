<template>
  <div class="hello">
    <div style="height: 10px ; width: 100% ;background-color: #f9faff"></div>
    <div class="list" style="background-color: white;">
      <div class="" style=" text-align:  left;  font-size: 14px;   padding: 10px  25px ;">
        <span id="mostNew" @click="newlyClick" style="color: #f35b75">最新</span>&nbsp&nbsp<span

        style="color:#d2d2d2;" @click="hottestClick">最热</span>
      </div>

      <mainitem res="pay"   :newOrHot="newOrHot" :classId="classId" :isFree="isFree"></mainitem>
    </div>
    <div style="height: 51px"></div>
  </div>
</template>

<script>
  import mainitem  from '../.././common/mainitem.vue'
  export default {
    name: 'Hi',
    components: {mainitem},
    data () {
      return {
        data: null,
        newOrHot: 1,
        classId: '',
        isFree:1,
      }
    },
    mounted() {
      document.title = '付费'
      this.$nextTick(() => {
        var page = this.$route.query.page
        if(page === 'free'){
          this.isFree = 1
        }
        else if (page === 'pay'){
          this.isFree = 0
        }

      })
    },
    methods: {

      newlyClick: function () {
        this.newOrHot = 1
      },
      hottestClick: function () {
        this.newOrHot = 2
      },

    }
  }


</script>

<style scoped>

</style>
