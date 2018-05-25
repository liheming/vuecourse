<!--<template>-->
  <!--<div>-->

    <!--<div class="faq">-->
      <!--<div class="faq-question faq-content">-->
        <!--<div>-->
          <!--<h4 class="faq-title">FAQ常见问题回答</h4>-->
          <!--<p>为了方便亲们的学习，整理了一些常见的问题：</p>-->
        <!--</div>-->
        <!--<div>-->
          <!--<ul class="mui-table-view">-->
            <!--<li class="mui-table-view-cell mui-collapse mui-active">-->
              <!--<a class="mui-navigate-right">-->
                <!--<div style="padding-right: 6px; padding-top: 2px; float:  left">-->
                  <!--<img src="../../../images/faq.png" class="faq-icon">-->
                <!--</div>-->

                <!--<div style=" padding-top: 2px"><label>评论被删除</label></div>-->
              <!--</a>-->
              <!--<div class="mui-collapse-content"><p>Q：评论被删一般都是由于违规操作被删除的喔。请仔细检查自己的评论喔</p></div>-->
            <!--</li>-->

          <!--</ul>-->
        <!--</div>-->


      <!--</div>-->
      <!--<div style="height: 8px ; width: 100% ;background-color: #f9faff"></div>-->
      <!--<div class="faq-consult faq-content">-->
        <!--<div>-->
          <!--<h4 class="faq-title">其他问题咨询</h4>-->
          <!--<div style="height: 1px ; width: 100% ;background-color: #dddddd"></div>-->
          <!--<div style="text-align: center;">-->
            <!--&lt;!&ndash;<input  @change="fileChange($event )"   onclick="getObj(this)"  type="file" id="upload_file"   name="pictures" multiple="multiple"   style=""/>&ndash;&gt;-->
            <!--<input @change="fileChange($event )" id="upload_file" type="file"-->
                   <!--name="pictures" multiple="multiple" value="选择文件" style="display: none" accept="image/*">-->

            <!--<textarea rows="3" autofocus="autofocus" id="feedback-content" placeholder="请输入留言，我们会尽快回复的" maxlength="500"-->
                      <!--style="min-height: 120px;  overflow: auto; border-radius: 10px; font-size: 16px; border: 0;  ">-->
                    <!--</textarea>-->
          <!--</div>-->
          <!--<div class="fileUpload" style="padding-bottom: 10px">-->
            <!--<p>上传图片(注: 每次只能上传3张图片)</p>-->
            <!--<img src="../../../images/add-pic.png" @click="fileClick" style="width: 55px ;height: 50px;">-->

            <!--<div class="upload_warp_img" v-show="imgList.length!=0">-->

              <!--<div class="upload_warp_img_div" v-for="(item, index) in imgList"-->
                   <!--style="width: 55px ; height: 50px ;float: left ; position: relative ; margin-right: 8px">-->
                <!--<div class="upload_warp_img_div_top" style="position: absolute ;right: 1px ;top: 1px">-->
                  <!--<img src="../../../images/faq-close.png" class="upload_warp_img_div_del"-->
                       <!--style=" width: 15px ;height: 15px"-->
                       <!--@click="fileDel(index)">-->
                <!--</div>-->
                <!--<img :src="item.file.src" style="width: 55px ; height: 50px; ">-->
              <!--</div>-->

            <!--</div>-->
          <!--</div>-->
          <!--<div style="height: 1px ; width: 100% ;background-color: #dddddd"></div>-->
          <!--<div style=" text-align: center ; padding-top: 15px">-->
            <!--<button type="submit" @onclick="addFeedBack"-->
                    <!--style=" border-radius: 90px ; background-color: #f35b75 ; border: 0; color: white ; text-align: center; padding: 6px; font-size: 27px ; width: 85%;">-->
              <!--发表-->
            <!--</button>-->
            <!--<p v-if="data.length > 0" style="margin-top: 10px  ;color: #f35b75; text-decoration: underline   ; "-->
               <!--@click="openUserFeedBackList">查看历史留言</p>-->
          <!--</div>-->


        <!--</div>-->
      <!--</div>-->
      <!--<div class="faq-phone faq-content">-->
        <!--<div style="text-align: center; line-height: 20px ;">-->
          <!--<p>如您急需帮助，也可拨打客服电话</p>-->
          <!--<a href="tel:020-2210-4353"-->
             <!--style="text-decoration: underline;color: #f35b75 ; font-size: 16px">020-2210-4353</a>-->
          <!--<p style="padding: 15px 0">为人工客服时间是：周一到周五 早上9：30 - 18:30</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->


  <!--</div>-->
<!--</template>-->


<!--<script>-->
  <!--//  import muijs from './js/mui.min'-->
  <!--import'../.././style/mui.min.css'-->
  <!--import'../.././style/app.css'-->
  <!--import { getHistoryFeedback } from '../../../service/getData'-->

  <!--export default-->
  <!--{-->
    <!--name: 'App',-->

    <!--data () {-->
      <!--return {-->
        <!--imgList: [],-->
        <!--size: 0,-->
        <!--data: null-->
      <!--}-->
    <!--}-->
    <!--,-->
    <!--created(){-->
      <!--let that = this-->
      <!--getHistoryFeedback(type).then(function (resultData) {-->
        <!--that.data = resultData-->
      <!--}).catch(function (err) {-->

      <!--})-->
    <!--},-->

    <!--methods: {-->
      <!--addFeedBack() {-->
        <!--let that = this-->
        <!--let fContent = $("#feedback-content").val();-->
        <!--let form = document.getElementById("imgform");-->
        <!--let formData = new FormData(form);-->

        <!--if (!fContent) {-->
          <!--alert("请先输入留言内容！");-->
          <!--return;-->
        <!--}-->

        <!--if (fContent.length < 6) {-->
          <!--alert("请输入大于6个字符！");-->
          <!--return;-->
        <!--}-->

        <!--let files = vueHelp.imgList;-->
        <!--for (let i = 0; i < files.length; i++) {-->
          <!--formData.append("pictures", files[i].file);-->
        <!--}-->

        <!--formData.append("appKey", APPKEY);-->
        <!--formData.append("sign", SIGN);-->
        <!--formData.append("cpid", CHANNELID);-->
        <!--formData.append("userid", userid);-->
<!--//        formData.append("title", "i m title ");// 标题-->
        <!--formData.append("content", fContent);  // 内容-->
        <!--formData.append("type", 1);-->

        <!--addFeedBack(formData).then(function (resultData) {-->
          <!--that.data = resultData-->
        <!--}).catch(function (err) {-->

        <!--})-->

      <!--}-->

      <!--, fileClick() {-->
        <!--if (this.imgList.length > 2) {-->
          <!--alert("一次只能上传三张图片喔！");-->
          <!--return;-->
        <!--}-->

        <!--var file = document.getElementById('upload_file');-->
        <!--file.click();-->

      <!--},-->
      <!--fileChange(el) {-->

        <!--if (!el.target.files[0].size) return;-->
        <!--this.fileList(el.target);-->
        <!--el.target.value = '';-->
      <!--},-->
      <!--fileList(fileList) {-->
        <!--let files = fileList.files;-->
        <!--for (let i = 0; i < files.length; i++) {-->
          <!--if (i < 3 - this.imgList.length) {-->
            <!--//判断是否为文件夹-->
            <!--if (files[i].type != '') {-->
              <!--this.fileAdd(files[i]);-->
            <!--} else {-->
              <!--//文件夹处理-->
              <!--this.folders(fileList.items[i]);-->
            <!--}-->
          <!--} else {-->
            <!--alert("每次只能同时上传3张截图喔");-->
            <!--return;-->
          <!--}-->
        <!--}-->
      <!--},-->
      <!--//文件夹处理-->
      <!--folders(files) {-->
        <!--let _this = this;-->
        <!--//判断是否为原生file-->
        <!--if (files.kind) {-->
          <!--files = files.webkitGetAsEntry();-->
        <!--}-->
        <!--files.createReader().readEntries(function (file) {-->
          <!--for (let i = 0; i < file.length; i++) {-->
            <!--if (file[i].isFile) {-->
              <!--_this.foldersAdd(file[i]);-->
            <!--} else {-->
              <!--_this.folders(file[i]);-->
            <!--}-->
          <!--}-->
        <!--})-->
      <!--},-->
      <!--foldersAdd(entry) {-->
        <!--let _this = this;-->
        <!--entry.file(function (file) {-->
          <!--_this.fileAdd(file)-->
        <!--})-->
      <!--},-->
      <!--fileAdd(file) {-->
        <!--//总大小-->
        <!--this.size = this.size + file.size;-->
        <!--//判断是否为图片文件-->
        <!--if (file.type.indexOf('image') == -1) {-->
          <!--file.src = 'wenjian.png';-->
          <!--this.imgList.push({-->
            <!--file-->
          <!--});-->
        <!--} else {-->
          <!--let reader = new FileReader();-->
          <!--reader.vue = this;-->
          <!--reader.readAsDataURL(file);-->
          <!--reader.onload = function () {-->
            <!--file.src = this.result;-->
            <!--this.vue.imgList.push({-->
              <!--file-->
            <!--});-->
          <!--}-->
        <!--}-->
      <!--},-->
      <!--fileDel(index) {-->
        <!--this.size = this.size - this.imgList[index].file.size;//总大小-->
        <!--this.imgList.splice(index, 1);-->
      <!--},-->
      <!--bytesToSize(bytes) {-->
        <!--if (bytes === 0) return '0 B';-->
        <!--let k = 1000, // or 1024-->
          <!--sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],-->
          <!--i = Math.floor(Math.log(bytes) / Math.log(k));-->
        <!--return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];-->
      <!--},-->
      <!--dragenter(el) {-->
        <!--el.stopPropagation();-->
        <!--el.preventDefault();-->
      <!--},-->
      <!--dragover(el) {-->
        <!--el.stopPropagation();-->
        <!--el.preventDefault();-->
      <!--},-->
      <!--drop(el) {-->
        <!--el.stopPropagation();-->
        <!--el.preventDefault();-->
        <!--this.fileList(el.dataTransfer);-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style>-->
  <!--.router-link-active {-->
    <!--color: #f35b75;-->

  <!--}-->

  <!--.item-img {-->
    <!--width: 25px;-->
    <!--height: auto;-->
  <!--}-->
<!--</style>-->
