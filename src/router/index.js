import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
const Film = () => import('@/views/Film')
const Cinema = () => import('@/views/Cinema')
const News = () => import('@/views/News')
const Center = () => import('@/views/Center')
const Login = () => import('@/views/Login')

// 二级路由
const Nowplaying = () => import('@/views/film/Nowplaying')
const Comingsoon = () => import('@/views/film/Comingsoon')
Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: 'nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  routes
})

const auth = {
  isLogin () {
    return false
  }
}
// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/center') {
    if (auth.isLogin()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
