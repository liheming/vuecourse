import App from '../App'

const home = r => require.ensure([], () => r(require('../components/page/index/home')), 'home')
const person = r => require.ensure([], () => r(require('../components/page/index/person')), 'person')
const study = r => require.ensure([], () => r(require('../components/page/index/study')), 'study')

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    // 首页城市列表页
    {
      path: '/home',
      component: home
    }, {
      path: '/person',
      component: person
    }, {
      path: '/study',
      component: study
    }
  // //个人信息页
  // {
  //     path: '/profile',
  //     component: profile,
  //     children: [{
  //         path: 'info', //个人信息详情页
  //         component: info,
  //        children: [{
  //             path: 'setusername',
  //             component: setusername,
  //         },{
  //             path: 'address',
  //             component: address,     //编辑地址
  //             children:[{
  //                 path:'add',
  //                component:add,
  //                 children:[{
  //                     path:'addDetail',
  //                     component:addDetail
  //                 }]
  //             }]
  //         }]
  //     },
  //     {
  //         path: 'service', //服务中心
  //         component: service,
  //     },]
  // }
  ]
}]
