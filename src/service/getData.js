import ajax from '../config/ajaxApi'
import { getStore } from '../config/mUtils'

/**
 * 获取首页热门推荐数据
 * @param obj vue组件实例对象
 */
export const   getHottestData = () =>  ajax( '/selling/products/home', {
  'appKey': APPKEY,
  'sign': SIGN,
  'channelCode': CHANNELID
}, 'POST')

/**
 * 获取首页免费或者付费数据
 * @param isFree 1 免费， 0 付费
 * @param newOrHot 1 最新， 2 最热
 * @param classId   分类id
 */

export const getFreeOrPayData = (isFree,newOrHot,classId) => ajax( '/wx/search/detail',  {
  'appKey': APPKEY,
  'sign': SIGN,
  'cpid': CHANNELID,
  'isFree': isFree,
  'newOrHot': newOrHot,
  'classId':classId
}, 'POST')
