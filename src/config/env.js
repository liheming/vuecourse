/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = 'http://www.wyuetec.com/wycms/';
let routerMode = 'hash';
let imgBaseUrl;
const APPKEY = 'sandaoyun';
const SIGN = '59CCE180FFAC49C8FF97DE2A0A08C119';
const CHANNELID = '100001';

if (process.env.NODE_ENV == 'development') {
  imgBaseUrl = 'http://cangdu.org:8001/img/';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = 'http://www.wyuetec.com/wycms';
  imgBaseUrl = 'http://cangdu.org:8001/img/';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
  APPKEY,
  SIGN,
  CHANNELID
}
