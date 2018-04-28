import ajax from '../config/ajaxApi'
import {getStore} from '../config/mUtils'



export const getHottestData = () => ajax('/selling/products/home', {
  'appKey':APPKEY,'sign':SIGN,
  'channelCode': channelid
}, 'POST');
