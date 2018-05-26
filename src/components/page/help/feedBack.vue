<template>
  <div >

    <div class="result" id="outdiv">
      <div class="indiv">
        <img class="imgresult" id="bigimg" src="">
      </div>
      <div style="position: absolute;  padding: 15px  15px;  left: 0  ; bottom: 0 ; color: #dddddd;">
        {{content}}
      </div>
    </div>
    <div class="feedback" v-if="true">
      <ul class="mui-table-view">
        <li v-for="(item , index )  in data " :key="index"
            style=" padding-top: 10px ;">
          <div style="padding-left: 20px">

            <div style=" float: left;width: 100%;   ">
              <div>
                <img v-if="!(item.headPic == '' || item.headPic == null)" v-bind:src="item.headPic"
                     style=" width: 35px ;  height: 35px; float: left">
                <p style="font-size: 16px ;  padding: 9px 0  0 6px ;  font-weight: bold;color: black;">
                  &nbsp;&nbsp;{{item.userName}}</p>
              </div>
            </div>

            <div>
              <p style="font-size: 12px">{{ item.confirmTime }}</p>
              <p style="color: black ;font-size: 16px  ">{{ item.content }}</p>
            </div>

            <div>

              <img v-if="item.imgSrc1" :src="item.imgSrc1" @click="showImg(item.imgSrc1,item.content)"
                   class="imgclass " style="width: 80px ;height: 80px">
              <img v-if="item.imgSrc2" :src="item.imgSrc2" @click="showImg(item.imgSrc2,item.content)"
                   class="imgclass "
                   style="width: 80px ;height: 80px">
              <img v-if="item.imgSrc3" :src="item.imgSrc3" @click="showImg(item.imgSrc3,item.content)"
                   class="imgclass "
                   style="width: 80px ;height: 80px">

            </div>

            <template v-if="!(item.respond == '' || item.respond == null)">
              <div style="font-size: 14px;   background-color: #f9faff ;        padding: 10px 35px 10px 0;">
                <span style="color: #f35b75;font-size: 14px;">|</span>
                三到云课堂小助手回复：{{item.respond}}
              </div>
            </template>

          </div>

          <div style="height: 5px ; width: 100% ;background-color: #f9faff"></div>
        </li>
      </ul>


    </div>

  </div>
</template>


<script>

  import {addFeedBack, getHistoryFeedback} from '../../../service/getData'

  export default
  {
    name: 'App',

    data () {
      return {
        data: '',
        content: ''
      }
    }
    ,
    created(){
      let that = this
      getHistoryFeedback().then(function (resultData) {
        that.data = resultData
      }).catch(function (err) {
        console.log(err);
      })
    },

    methods: {

      showImg (imaUrl, content) {
        this.content = content;
        outdiv = "#outdiv";
        indiv = ".indiv";
        bigimg = "#bigimg";
        var winW = $(window).width();
        var winH = $(window).height();
        $(bigimg).attr("src", imaUrl);
        $("<img/>").attr("src", imaUrl).load(function () {
          var imgW = this.width;
          var imgH = this.height;
          var scale = imgW / imgH;
          if (imgW > winW) {
            $(bigimg).css("width", "100%").css("height", "auto");
            imgH = winW / scale;
            var h = (winH - imgH) / 2;
            $(indiv).css({"left": 0, "top": h});
          } else {
            $(bigimg).css("width", imgW + 'px').css("height", imgH + 'px');
            var w = (winW - imgW) / 2;
            var h = (winH - imgH) / 2;
            $(indiv).css({"left": w, "top": h});
          }

          $(outdiv).fadeIn("fast");
          $(outdiv).click(function () {
            $(this).fadeOut("fast");
          });
        });
      }

    }
  }
</script>
<style>
  .feedback {
    width: 100%;
    height: auto;
    background-color: white;
  }

  .result {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 1);
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: none;
  }

  .indiv {
    position: absolute;
  }
</style>
