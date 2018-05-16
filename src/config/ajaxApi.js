import {
  baseUrl
} from './env'

export default async  ( url = '', param = {}, type = 'POST') => {
  type = type.toUpperCase()
  url = baseUrl + url
  const promise = new Promise(function (resolve, reject) {
    $.ajax({
      url: url,
      type: 'POST',
      data: param,
      dataType: 'json',
      success: function (result) {
//          console.log(result)
        if (result.code === 200) {
          resolve(JSON.parse(result.data));
        } else {
          reject(new Error(result));
        }
      },
      error: function () {
        reject(new Error());
      }
    })
  });

  return promise;
}



