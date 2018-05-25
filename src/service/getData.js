import ajax from '../config/ajaxApi'
import { getStore } from '../config/mUtils'
let userid = "o4AOi1JRAUDzU5e9-MC-RuCirdCQ";
/**
 *------------------------------------公共通用接口-------------------------------------
 */

/**
 * userid 获取用户信息
 * @param userid 微信用户openid
 */
export const queryUserByUserId = () => ajax('wechat/wxuser/queryUserInfoByUserId', {
  'userid': userid
})


/**
 * code获取用户信息
 * @param code 微信访问参数code
 */
export const queryUserByCode = (code) => ajax('wechat/wxuser/queryUserInfoByCode', {
  'code': code
})

/**
 * 视频集/音频集增加播放量接口 type 内容类型 1视频集 , 3音频集
 * @param contentId （内容id）
 */
export const addCollectionPlayRecord = (contentId) => ajax('wx/history/addCollection', {
  'contentid': contentId,
  'type': type
})

/**
 * 获取成功订购记录（我的订阅）
 *  @param functionType   1=>成功记录 ， 2=>失败记录
 */
export const getBuyRecord = (functionType) => ajax('wechat/orders/record', {
  'channelid': CHANNELID,
  'userid': userid,
  'functionType': functionType
})

/**
 * wxPayConfig 微信支付配置
 */

export const wxPayConfig = (functionType) => ajax('wx/wxConfig', {
  'url': encodeURIComponent(location.href.split('#')[0])
})

/**
 * chooseWXPay 微信支付
 * @param productsId （销售品id）
 */
export const chooseWXPay = (productsId) => ajax('wx/pay', {
  'userid': userid,
  'cpid': cpid,
  'productsId': productsId
})

/**
 *  3. 话费支付-获取验证码
 *  @param productsId （销售品id）
 * @param phone 手机号码
 */
export const sendVerifyCode = (productsId, phone) => ajax('wx/payfee/sendVerifyCode', {
  'cpid': CHANNELID,
  'productsid': productsId,
  'userId': userid,
  'phone': phone
})

/**
 *  话费支付-回复验证码
 * @param verifyCode 验证码
 * @param orderId 获取验证码返回的订单号
 * @param phone 手机号
 * result code (-5 不支持该课程 ，    -7   )
 */
export const confirmVerifyCode = (verifyCode,orderId, phone) => ajax('api/payfee/confirmVerifyCode', {
  'verifyCode': verifyCode,
  'orderId': orderId,
  'phone': phone
})




/**
 *--------------------------------------首页----------------------------------
 */

/**
 * 获取首页热门推荐数据
 */
export const getHottestData = () => ajax('selling/products/home', {
  'channelCode': CHANNELID
})

/**
 * 获取首页免费或者付费数据
 * @param isFree 1 免费， 0 付费
 * @param newOrHot 1 最新， 2 最热
 * @param classId   分类id
 */
export const getFreeOrPayData = (isFree, newOrHot, classId) => ajax('wx/search/detail', {
  'cpid': CHANNELID,
  'isFree': isFree,
  'newOrHot': newOrHot,
  'classId': classId
})

/**
 * 获取榜单数据（排行）
 * @param  type 榜单类型 '1'=>付费 ,'2'=>点播 ,'3'=>收藏 ,'4'=>点评  String
 */
export const getRanking = (type) => ajax('selling/products/rankList', {
  'channelCode': CHANNELID,
  'rankType': type
})

/**
 * 获取专题（排行）
 * @param  type 专题类型  1=>专题（小图标） ,2=>专辑（大图标）   String
 */
export const getTopic = (type) => ajax('topic/topicList', {
  'cpid': CHANNELID,
  'type': type
})

/**
 * 获取专题详情列表
 * @param  topicid  专题id
 */
export const getTopicList = (topicid) => ajax('wx/topic/products/detail', {
  'channelCode': CHANNELID,
  'topicid': topicid
})

/**
 *--------------------------------------继续学习----------------------------------
 */

/**
 * 获取一周的播放记录
 */
export const getOneWeek = () => ajax('user/center/history/oneWeek', {
  'cpid': CHANNELID,
  'userid': userid
})

/**
 * 获取更早之前的播放记录
 */
export const getEarlier = () => ajax('user/center/history/earlier', {
  'cpid': CHANNELID,
  'userid': userid,
  'pageNum': 1
})

/**
 *--------------------------------------个人中心----------------------------------
 */

/**
 * 我的收藏
 */
export const getMyCollect = () => ajax('user/remark/list', {
  'cpid': CHANNELID,
  'userid': userid,
  'remarkType': 2
})

/**
 * 我的评论
 */
export const getMyComment = () => ajax('selling/comments/myComments', {
  'cpid': CHANNELID,
  'userid': userid
})

/**
 * 我的消息
 */
export const getMyMessage = () => ajax('wx/message/myMessage', {
  'cpid': CHANNELID,
  'userid': userid
})

/**
 *--------------------------------------播放页----------------------------------
 */

/**
 * 获取课程的内容信息
 * @param productsid   销售品id
 */
export const getContent = (productsid) => ajax('wx/comments/addComments', {
  'cpid': CHANNELID,
  'userid': userid,
  'productsId': productsid
})

/**
 * 获取视频集列表 (目录)
 * @param productsid   销售品id
 */
export const getProductList = (productsid) => ajax('wx/products/productList', {
  'cpid': CHANNELID,
  'userid': userid,
  'productsId': productsid
})

/**
 * 添加评论
 * @param productsid   销售品id
 * @param comment      评论内容
 * @param type 1=>视频  ,  3=>音频
 */
export const addComments = (productsid, comment, type) => ajax('wx/comments/addComments', {
  'cpid': CHANNELID,
  'userid': userid,
  'productsid': productsid,
  'comment': comment,
  'type': type
})

/**
 *   点赞评论
 *  @param commentsId   评论内容id
 */
export const likeComment = (commentsId) => ajax('wx/like/addLike', {
  'commentsid': commentsId,
  'userid': userid
})

/**
 *   获取评论记录
 *  @param productsid   销售品id
 */
export const getComment = (productsid) => ajax('wx/comments/productsComments', {
  'cpid': CHANNELID,
  'userid': userid,
  'productsid': productsid
})

/**
 *   获取销售品的推广评论
 *  @param productsid   销售品id
 */
export const getRecommendComment = (productsid) => ajax('wx/comments/promoteComments', {
  'cpid': CHANNELID,
  'userid': userid,
  'productsid': productsid
})

/**
 *   获取销售品的置顶评论
 *  @param productsid   销售品id
 */
export const getTopComment = (productsid) => ajax('wx/comments/topComments', {
  'cpid': CHANNELID,
  'userid': userid,
  'productsid': productsid
})

/**
 * 单集增加播放量接口
 * @param productsid 销售品id （课程 id）
 * @param type 内容类型1视频集 , 3音频集
 * @param contentId  内容id（课程单集id）
 */
export const addSinglePlayRecord = (productsid, contentId, type) => ajax('wx/history/addPlayRecord', {
  'cpid': CHANNELID,
  'userid': userid,
  'productsid': productsid,
  'type': type,
  'contentid': contentId
})

/**
 * 获取同类推荐的课程
 * @param productsId 销售品id
 * @param maxCount 推荐的数目，默认为3
 */
export const getRecommendList = (productsId, maxCount = 3) => ajax('wx/comments/addComments', {
  'channelCode': CHANNELID,
  'id': productsId,
  'maxCount': maxCount
})

/**
 * 获取最近更新的课程
 * @param productsId 销售品id
 */
export const getRecentUpdate = (productsId) => ajax('wx/products/recentUpdate', {
  'channelCode': CHANNELID,
  'productid': productsId
})

/**
 * 收藏 Or 取消收藏接口
 * @param productsId 销售品id
 */
export const doCollect = (productsId) => ajax('wx/remark/addOrUpdate', {
  'userid': userid,
  'cpid': CHANNELID,
  'productsid': productsId
})


/**
 * 添加留言反馈
 * @param jsonObj    var formData = new FormData(form); （form  表单对象）
 */
export const addFeedBack = (formData) => ajax('wx/feedback/addBack', '' ,formData)



/**
 * 获取用户的历史留言
 */
export const getHistoryFeedback = () => ajax('wx/feedback/addBack', {
  'cpid': CHANNELID,
  'userid': userid
})



