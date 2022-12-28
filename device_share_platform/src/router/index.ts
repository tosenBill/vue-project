import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// import { Layout } from "@/utils/routerHelper";
// import Layout from "../layout/Layout.vue";
const Layout = () => import("@/layout/Layout.vue");

import type { App } from "vue";

export const constantRouterMap = [
  {
    path: "/",
    // component: Layout,
    // redirect: "/dashboard/analysis",
    redirect: "/welcome",
    name: "Root",
    meta: {
      hidden: true,
      title: "layout",
    },
  },
  {
    path: "/login",
    component: Layout,
    // redirect: "/home/index",
    name: "Login",
    meta: {
      title: "登录",
      alwaysShow: true,
      hideChild: true,
    },
    children: [
      {
        path: "/login",
        component: () => import("@/views/Login/LoginPage.vue"),
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "登录",
          noTagsView: true,
        },
      },
    ],
  },
  // {
  //   path: "/login",
  //   component: () => import("@/views/Login/LoginPage.vue"),
  //   name: "Login",
  //   meta: {
  //     hidden: true,
  //     // title: t("router.login"),
  //     title: "登录",
  //     noTagsView: true,
  //   },
  // },
  {
    path: "/product",
    component: Layout,
    // redirect: "/lease/LeaseDevice",
    name: "Product",
    meta: {
      title: "商品",
      alwaysShow: true,
      hidden: true,
    },
    children: [
      {
        path: "ProductDetail/:id",
        component: () => import("@/views/Product/ProductDetail.vue"),
        name: "ProductDetail",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "商品详情",
          noTagsView: true,
        },
      },
    ],
  },
  {
    path: "/order",
    component: Layout,
    // redirect: "/lease/LeaseDevice",
    name: "Order",
    meta: {
      title: "订单",
      alwaysShow: true,
      hidden: true,
    },
    children: [
      {
        path: "Cart",
        component: () => import("@/views/Order/Cart.vue"),
        name: "Cart",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "购物车",
          noTagsView: true,
        },
      },
      {
        path: "orderInfo/:id",
        component: () => import("@/views/Order/OrderInfo.vue"),
        name: "OrderInfo",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "订单信息填写",
          noTagsView: true,
        },
      },
      {
        path: "complete",
        component: () => import("@/views/Order/Complete.vue"),
        name: "complete",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "订单提交成功",
          noTagsView: true,
        },
      },
    ],
  },
  {
    path: "/welcome",
    component: () => import("@/views/welcome/welcome.vue"),
    name: "welcome",
    meta: {
      hidden: true,
      // title: t("router.login"),
      title: "欢迎页",
      noTagsView: true,
    },
  },
];

export const asyncRouterMap = [
  {
    path: "/home",
    component: Layout,
    redirect: "/home/index",
    name: "Home",
    meta: {
      title: "首页",
      alwaysShow: true,
      hideChild: true,
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/Home/home.vue"),
        name: "homePage",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "首页",
          noTagsView: true,
        },
      },
    ],
  },
  {
    path: "/lease",
    component: Layout,
    redirect: "/lease/LeaseDevice",
    name: "Lease",
    meta: {
      title: "租赁",
      alwaysShow: true,
    },
    children: [
      {
        path: "LeaseDevice",
        component: () => import("@/views/Lease/LeaseDevice.vue"),
        name: "LeaseDevice",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "出租设备",
          noTagsView: true,
        },
      },
      {
        path: "QuestDevice",
        component: () => import("@/views/Lease/QuestDevice.vue"),
        name: "QuestDevice",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "求租设备",
          noTagsView: true,
        },
      },
    ],
  },
  {
    path: "/repair",
    component: Layout,
    // redirect: "/repair/index",
    name: "Repair",
    meta: {
      title: "维修",
      alwaysShow: true,
    },
    children: [
      {
        path: "RepairDevice",
        component: () => import("@/views/Repair/RepairDevice.vue"),
        name: "RepairDevice",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "维修设备",
          noTagsView: true,
        },
      },
    ],
  },
  {
    path: "/dashboard",
    component: Layout,
    redirect: "/dashboard/analysis",
    name: "Dashboard",
    meta: {
      title: "面板",
      icon: "ant-design:dashboard-filled",
      alwaysShow: false,
      hidden: true,
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
    path: "/deviceManage",
    component: Layout,
    name: "DeviceManage",
    // redirect: "/deviceManage/index",
    meta: {
      title: "设备管理",
      alwaysShow: true,
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/DeviceManage/index.vue"),
        name: "deviceManageIndex",
        meta: {
          title: "设备资源库",
          noTagsView: true,
        },
      },
      {
        path: "publishDevice",
        component: () => import("@/views/DeviceManage/PublishDevice.vue"),
        name: "PublishDevice",
        meta: {
          title: "发布设备",
          noTagsView: true,
          hidden: true,
        },
      },
      {
        path: "publishRequest",
        component: () => import("@/views/DeviceManage/PublishRequest.vue"),
        name: "PublishRequest",
        meta: {
          title: "发布需求",
          noTagsView: true,
          hidden: true,
        },
      },
    ],
  },
  {
    path: "/work",
    component: Layout,
    redirect: "/work/index",
    name: "Work",
    meta: {
      title: "工作中心",
      alwaysShow: true,
      hideChild: true,
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/WorkCenter/index.vue"),
        name: "centerIndex",
        // redirect: "/index/workOrder",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "工作中心",
          noTagsView: true,
        },
      },
      {
        path: "workOrder",
        component: () => import("@/views/WorkCenter/workOrder.vue"),
        name: "workOrder",
        meta: {
          // hidden: true,
          // title: t("router.login"),
          title: "自选订单",
          noTagsView: true,
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
    path: "/error",
    component: Layout,
    redirect: "/error/404",
    name: "Error",
    meta: {
      title: "错误页面",
      icon: "ci:error",
      alwaysShow: false,
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
  scrollBehavior: () => ({
    top: 0,
    behavior: "smooth",
  }),
});

export const resetRouter = (): void => {
  const resetWhiteNameList = ["Redirect", "Login", "NoFind", "Root"];
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
};

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};

export default router;
