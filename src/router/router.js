import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../components/page/home')), 'home')
const person = r => require.ensure([], () => r(require('../components/page/person')), 'person')
const study = r => require.ensure([], () => r(require('../components/page/study')), 'study')

const recommend = r => require.ensure([], () => r(require('../components/page/index/recommend.vue')), 'recommend')
const ranking = r => require.ensure([], () => r(require('../components/page/index/ranking.vue')), 'ranking')
const free = r => require.ensure([], () => r(require('../components/page/index/free.vue')), 'free')
const pay = r => require.ensure([], () => r(require('../components/page/index/pay.vue')), 'pay')

const orderCourse = r => require.ensure([], () => r(require('../components/page/study/orderCourse.vue')), 'orderCourse')
const playRecord = r => require.ensure([], () => r(require('../components/page/study/playRecord.vue')), 'playRecord')

const myCollect = r => require.ensure([], () => r(require('../components/page/person/myCollect.vue')), 'myCollect')
const myComment = r => require.ensure([], () => r(require('../components/page/person/myComment.vue')), 'myComment')
const myMessage = r => require.ensure([], () => r(require('../components/page/person/myMessage.vue')), 'myMessage')
const buyRecord = r => require.ensure([], () => r(require('../components/page/person/buyRecord.vue')), 'buyRecord')

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 地址为空时跳转home页面
    {
      path: '',
      redirect: '/home/recommend'
    },

    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'recommend',
          component: recommend
        },
        {
          path: 'ranking',
          component: ranking
        },
        {
          path: 'free',
          component: free
        },
        {
          path: 'pay',
          component: free
        }
      ]

    }, {
      path: '/person',
      component: person,
      children: [
        {
          path: 'myCollect',
          component: myCollect
        }, {
          path: 'myComment',
          component: myComment
        }, {
          path: 'myMessage',
          component: myMessage
        },
        {
          path: 'buyRecord',
          component: buyRecord
        }
      ]
    }, {
      path: '/study',
      component: study,
      children: [
        {
          path: 'orderCourse',
          component: orderCourse
        },
        {
          path: 'playRecord',
          component: playRecord
        }
      ]
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
