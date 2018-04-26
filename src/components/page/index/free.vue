<template>
  <div class="hello">
    <div style="height: 8px ; width: 100% ;background-color: #f9faff"></div>
    <div class="" style=" text-align:  left;  font-size: 14px;   padding: 10px  25px ;">
      <span id="mostNew" onclick="mostNew()" style="color: #f35b75">最新</span>&nbsp&nbsp<span
      id="mostHot" onclick="mostHot()"
      style="color:#d2d2d2;">最热</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: '很高兴你使用vue 我是免费'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
