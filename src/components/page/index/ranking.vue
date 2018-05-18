<template>
  <div>
    <slide></slide>
  </div>
</template>

<script>
  import slide from '../.././common/slidervue.vue'
  export default {
    components: {slide},
  name: 'Hi',
  data () {
    return {
      msg: '很高兴你使用vue 我是排行'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
