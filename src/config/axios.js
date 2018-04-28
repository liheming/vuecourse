import {
  baseUrl
} from './env'

export default async (url = '', data = {}, type = 'GET') => {
  type = type.toUpperCase()
  url = baseUrl + url

  if (type == 'GET') {
    let dataStr = '' //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
    axios.get('/user?ID=12345')
      .then(function(response){
        console.log(response);
      })
      .catch(function(err){
        console.log(err);
      });



  } else {
    axios.post(url, {
      data
    })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

}
