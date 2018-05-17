import {
  baseUrl
} from './env'

export default async (url = '', param = {}, formData = null, type = 'POST') => {
  // type = type.toUpperCase()
  url = baseUrl + url

  let baseValue = {
    'appKey': APPKEY,
    'sign': SIGN
  }
  for (var key in param) {
    baseValue[key] = param[key]
  }
// 文件上传参数为formdata
  if (formData!== null  ){
    baseValue = formData
  }

  const promise = new Promise(function (resolve, reject) {
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

  return promise
}



