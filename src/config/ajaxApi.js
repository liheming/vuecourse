import {
  baseUrl,APPKEY,SIGN
} from './env'

//noinspection JSAnnotator
export default async (url = '', param = null, formData = null, type = 'POST') => {
  url = baseUrl + url

  let baseValue
  let promise
  if(param){//不上传文件操作
    baseValue  = {
      'appKey': APPKEY,
      'sign': SIGN
    }
    for (let key in param) {
      baseValue[key] = param[key]
    }
    promise = new Promise(function (resolve, reject) {
      $.ajax({
        url: url,
        type: 'POST',
        data: baseValue,
        dataType: 'json',
        success: function (result) {
//          console.log(result)
          if (result.code === 200) {
            resolve(JSON.parse(result.data))
          } else {
            reject(new Error(result))
          }
        },
        error: function () {
          reject(new Error())
        }
      })
    })
  }else {//上传文件
    promise = new Promise(function (resolve, reject) {
      $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (result) {
//          console.log(result)
          if (result.code === 200) {
            resolve(JSON.parse(result.data))
          } else {
            reject(new Error(result))
          }
        },
        error: function () {
          reject(new Error())
        }
      })
    })
  }



  return promise
}



