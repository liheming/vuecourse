import {
  baseUrl
} from './env'

export default async (vueObj = null, url = '', param = {}, type = 'POST') => {
  type = type.toUpperCase()
  url = baseUrl + url
  $.ajax({
    url: url,
    type: type,
    data: param,
    dataType: 'json',
    success: function (result) {
      console.log(result)
      if (result.code == 200) {
        console.log('200')
        vueObj.data = JSON.parse(result.data)
      } else {
        console.log('err')
      }
    },
    error: function () {
      console.log('err')
    }
  })
}
