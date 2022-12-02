import { createRouter, createWebHashHistory } from "vue-router";
// import type { RouteRecordRaw } from 'vue-router'

// const routes: Array<RouteRecordRaw> = [
const routes = [
    { path: '/', redirect: "/home" },
    { 
        path: '/home',
        component: () => import('@view/home/index.vue'), 
        name: 'home',
        meta: {
            title: '首页',
        }
    },
    { 
      path: '/about',
      component: () => import('@view/about/index.vue'), 
      name: 'about',
      meta: {
          title: '关于',
      }
    },
    { 
      path: '/404', 
      name: '404', 
      component: () => import('@view/error/404.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 全局路由守卫
router.beforeEach((to, from, next)=>{
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next()
})

export default router