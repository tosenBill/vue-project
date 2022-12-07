import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
// import { Layout } from "@/utils/routerHelper";
import Layout from "../layout/Layout.vue";

import type { App } from "vue";

export const constantRouterMap = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard/analysis",
    name: "Root",
    meta: {
      hidden: true,
      title: "layout",
    },
  },
  {
    path: "/login",
    component: () => import("../views/Login/LoginPage.vue"),
    name: "login",
    meta: {
      hidden: true,
      // title: t("router.login"),
      title: "登录",
      noTagsView: true,
    },
  },
];

export const asyncRouterMap = [
  {
    path: "/dashboard",
    component: Layout,
    redirect: "/dashboard/analysis",
    name: "Dashboard",
    meta: {
      title: "首页",
      icon: "ant-design:dashboard-filled",
      alwaysShow: true,
    },
    children: [
      {
        path: "analysis",
        component: () => import("@/views/Dashboard/Analysis.vue"),
        name: "Analysis",
        meta: {
          title: "分析页",
          noCache: true,
          affix: true,
        },
      },
    ],
  },
  {
    path: "/about",
    component: Layout,
    name: "about",
    meta: {},
    children: [
      {
        path: "index",
        component: () => import("../views/AboutView.vue"),
        name: "aboutDemo",
        meta: {
          title: "关于",
          icon: "cib:telegram-plane",
        },
      },
    ],
  },
  {
    path: "/guide",
    component: Layout,
    name: "guide",
    meta: {},
    children: [
      {
        path: "index",
        component: () => import("@/views/Guide/Guide.vue"),
        name: "GuideDemo",
        meta: {
          title: "引导",
          icon: "cib:telegram-plane",
        },
      },
    ],
  },
  {
    path: "/HomeView",
    component: Layout,
    name: "HomeView",
    meta: {
      title: "分类",
      icon: "ant-design:dashboard-filled",
      alwaysShow: true,
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
        meta: {
          // hidden: true,
          title: "home",
          // noTagsView: true,
        },
      },
    ],
  },
  {
    path: "/error",
    component: Layout,
    redirect: "/error/404",
    name: "Error",
    meta: {
      title: "错误页面",
      icon: "ci:error",
      alwaysShow: true,
    },
    children: [
      {
        path: "404-demo",
        component: () => import("@/views/Error/404.vue"),
        name: "404Demo",
        meta: {
          title: "404",
        },
      },
      {
        path: "403-demo",
        component: () => import("@/views/Error/403.vue"),
        name: "403Demo",
        meta: {
          title: "403",
        },
      },
      {
        path: "500-demo",
        component: () => import("@/views/Error/500.vue"),
        name: "500Demo",
        meta: {
          title: "500",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap,
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};

export default router;
