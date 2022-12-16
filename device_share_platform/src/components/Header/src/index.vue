<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { ElInput, ElMessageBox, ElBadge } from "element-plus";
import MyMenu from "./Menu.vue";
import { useCache } from "@/hooks/web/useCache";
import { useAppStore } from "@/store/modules/app";
import { resetRouter } from "@/router";

const valueRef = ref("");

const appStore = useAppStore();
const { wsCache } = useCache();

const { replace } = useRouter();

const userInfo = wsCache.get(appStore.getUserInfo);

const loginOut = () => {
  ElMessageBox.confirm("是否退出本系统", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      // const res = await loginOutApi().catch(() => {});
      // if (res) {
      //   wsCache.clear();
      //   resetRouter(); // 重置静态路由表
      //   replace("/login");
      // }
      wsCache.clear();
      resetRouter(); // 重置静态路由表
      replace("/login");
    })
    .catch(() => {});
};
</script>
<template>
  <div class="header-container">
    <div class="content">
      <div class="left">
        <div class="icon-text">
          <Icon class="el-input__icon" icon="icon-park-outline:volume-notice" />
          <span>欢迎访问，中油工程设备共享平台</span>
        </div>
        <div class="search-box">
          <ElInput
            v-model="valueRef"
            placeholder="请输入设备关键词"
            type="text"
            class="custom-search"
          >
            <template #suffix>
              <Icon class="el-input__icon cursor-pointer" icon="ep:search" />
            </template>
          </ElInput>
        </div>
      </div>
      <div class="right">
        <span>领导角色登入</span>
        <span>共享中心角色登入</span>
        <span>在线客服</span>

        <span v-if="userInfo && userInfo.username" class="user-info">
          <span>{{ userInfo.username }}·</span>
          <span @click="loginOut">退出</span>
        </span>
        <span v-else>请您登录</span>
        <ElBadge :value="200" :max="99" class="item">
          <span>通知公告</span>
        </ElBadge>
      </div>
    </div>
    <MyMenu></MyMenu>
  </div>
</template>

<style lang="less" scoped>
.header-container {
  background: @header-bg-color;
  .flex_font {
    font-size: 12px;
    color: #999;
    display: flex;
    align-items: center;
  }
  .content {
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: @container-width;
  }
  .left {
    .flex_font();
    .icon-text {
      display: flex;
      align-items: center;
      margin-right: 30px;
      > span {
        margin-left: 10px;
      }
    }
    :deep(.custom-search .el-input__wrapper) {
      border-radius: 50px;
      height: 34px;
      width: 320px;
      padding-left: 15px;
    }
  }
  .right {
    .flex_font();
    color: rgb(204, 204, 204);
    .user-info {
      color: @active-word-color;
    }
    > span {
      &:not(:last-child)::after {
        content: "|";
        display: inline-block;
        padding: 0 10px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
