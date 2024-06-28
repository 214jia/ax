import { RouterView, createRouter, createWebHashHistory } from 'vue-router'
import { h } from 'vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect:'/Login' },
    { path: '/login', component: () => import ('./components/Login.vue') },
    {
      path: '/home',
      component: () => import ('./components/Home.vue'),
      redirect:'/home/users',
      children: [
        {
          path: 'users',
          component: { render: () => h(RouterView) },  // 使用 h 函数渲染 RouterView
          children: [
            {
              path: '',
              component: () => import ('./components/subcomponents/MyUsers.vue')
            },
            {
              path: ':id',
              name:'details',
              component: () => import ('./components/user/MyUserDetail.vue'), props: true
            }
          ]
        },
        {
          path: 'news',
          component: () => import ('./components/subcomponents/MyNews.vue')
        },
        {
          path: 'orders',
          component: () => import ('./components/subcomponents/MyOrders.vue')
        },
        {
          path: 'settings',
          component: () => import ('./components/subcomponents/MySettings.vue')
        }
      ]
    }
  ]
})
export default router

router.beforeEach((to,from,next) => {
    //如果访问的是登录页面，直接执行下一个钩子函数
    if(to.path === '/login')
        return next()
    //获取Token值
    const token = localStorage.getItem('token')
    console.log(token)
    if (!token){
        //Token值不存在，强制跳转到登录界面
        return next('/login')
    }
    //存在Token值，直接执行下一个钩子函数
    next()
})
