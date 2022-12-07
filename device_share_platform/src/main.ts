// 引入windi css
import "@/plugins/windi.css";

// 导入全局的svg图标
import "@/plugins/svgIcon";

// 引入element-plus
import { setupElementPlus } from "@/plugins/elementPlus";

// 引入状态管理
import { setupStore } from "@/store";

// 全局组件
import { setupGlobCom } from "@/components";

// 引入全局样式
import "@/styles/index.less";

// 引入动画
import "@/plugins/animate.css";

import { createApp } from "vue";
// import { createPinia } from "pinia";

import App from "./App.vue";

// 路由
import { setupRouter } from "./router";

// 权限
// import { setupPermission } from './directives'

// import "./assets/main.css";

// app.use(createPinia());
// app.use(router);

// app.mount("#app");

import "./permission";

// 创建实例
const setupAll = () => {
  const app = createApp(App);

  // await setupI18n(app)

  setupStore(app);

  setupGlobCom(app);

  setupElementPlus(app);

  setupRouter(app);

  //   setupPermission(app);

  app.mount("#app");
};

setupAll();
