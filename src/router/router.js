import App from '../App.vue'

const index = r => require.ensure([], () => r(require('../components/page/index.vue')), 'home')

const home = r => require.ensure([], () => r(require('../components/page/index/home')), 'home')
const person = r => require.ensure([], () => r(require('../components/page/index/person')), 'person')
const study = r => require.ensure([], () => r(require('../components/page/index/study')), 'study')

const recommend = r => require.ensure([], () => r(require('../components/page/home/recommend.vue')), 'recommend')
const ranking = r => require.ensure([], () => r(require('../components/page/home/ranking.vue')), 'ranking')
const free = r => require.ensure([], () => r(require('../components/page/home/free.vue')), 'free')
const pay = r => require.ensure([], () => r(require('../components/page/home/pay.vue')), 'pay')

const orderCourse = r => require.ensure([], () => r(require('../components/page/study/orderCourse.vue')), 'orderCourse')
const playRecord = r => require.ensure([], () => r(require('../components/page/study/playRecord.vue')), 'playRecord')

const personCollect = r => require.ensure([], () => r(require('../components/page/person/myCollect.vue')), 'myCollect')
const personComment = r => require.ensure([], () => r(require('../components/page/person/myComment.vue')), 'myComment')
const personMessage = r => require.ensure([], () => r(require('../components/page/person/myMessage.vue')), 'myMessage')
const personBuyRecord = r => require.ensure([], () => r(require('../components/page/person/buyRecord.vue')), 'buyRecord')


const help = r => require.ensure([], () => r(require('../components/page/help/help.vue')), 'help')


export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 地址为空时跳转home页面
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index,
      children: [
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
              component: pay
            }
          ]
        },
        {
          path: '/person',
          component: person,

        },
        {
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
      ]
    }
    ,

    {
      path: 'personCollect',
      component: personCollect
    }, {
      path: 'personComment',
      component: personComment
    }, {
      path: 'personMessage',
      component: personMessage
    },
    {
      path: 'personBuyRecord',
      component: personBuyRecord
    }
    ,{
      path: 'help',
      component: help
    }

  ]
}]
