<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
//  import slide from 'src/components/common/slider.vue'

export default {
  name: 'Hi',
  data () {
    return {
      msg: '很高兴你使用vue 我是排行'
    }
  },
  components: {
//    slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
