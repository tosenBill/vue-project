<script setup lang="ts">
import { ref, reactive, unref, computed } from "vue";

import { Logo } from "@/components/LogoTitle";
import { ElButton } from "element-plus";
import { usePermissionStore } from "@/store/modules/permission";
import { useRouter } from "vue-router";
import { MunuRouter } from "./useRenderMenuItem";

const { addRouters } = usePermissionStore();
const { push } = useRouter();

const routerList = MunuRouter(addRouters);

const state = reactive({ isMouseEnter: false, category: {} });
const enter = (item: any) => {
  state.category = item;
};
const leave = () => {
  state.isMouseEnter = false;
};
const menuClick = (current: AppRouteRecordRaw, parent: AppRouteRecordRaw) => {
  const { path, meta = {} } = current;
  // 是否是一级导航
  if (current.children !== undefined) {
    if (meta?.hideChild) {
      push(current.fullPath!);
    }
  } else {
    push(`${parent.path}/${path}`);
  }
};
const publish = (router) => {
  push(`/deviceManage${router}`);
};
</script>

<template>
  <div class="menu-line">
    <div class="menu-line-container">
      <div class="menu-line-content">
        <div class="menu-box">
          <Logo :fontSize="'18px'" />
          <div class="menu">
            <div class="content">
              <div
                v-for="(item, index) in routerList"
                :key="index"
                @mouseenter="enter(item)"
                @mouseleave="leave()"
                class="item"
              >
                <span class="first-level" @click="menuClick(item, {})">{{
                  item.meta?.title
                }}</span>
                <!-- 弹出二级路由层 start -->
                <div
                  :class="['translate-drawer']"
                  :style="{
                    display: item.meta.hideChild ? 'none' : '',
                  }"
                >
                  <div
                    v-for="(child, cindex) in item.children"
                    :key="cindex"
                    @click="menuClick(child, item)"
                    class="sub-menu"
                  >
                    <span class="child-span" v-if="!child?.meta?.hidden">{{
                      child?.meta?.title || "--"
                    }}</span>
                  </div>
                </div>
                <!-- 弹出二级路由层 end -->
              </div>
            </div>
          </div>
          <div class="publish">
            <ElButton type="primary" @click="publish('/publishDevice')"
              >发布设备</ElButton
            >
            <ElButton type="primary" @click="publish('/publishRequest')"
              >发布需求</ElButton
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <div :class="['translate-drawer', state.isMouseEnter ? 'inter' : '']">
      {{ state?.category?.title }}
    </div> -->
  </div>
</template>

<style lang="less" scoped>
.menu-line {
  // padding: 30px 0;
  background: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  height: 110px;
  align-items: center;
  .menu-line-container {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 4;
    background: #fff;
    .menu-line-content {
      display: flex;
      align-items: center;
      background: #fff;
      width: 100%;
      justify-content: center;
      border-bottom: 1px solid #eee;
      .menu-box {
        display: flex;
        align-items: center;
        width: @container-width_inner;
        height: 100%;
      }
    }
  }
  .translate-drawer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 800px;
    background: #fff;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transition: transform 0.3s;
    transform: translateY(0);
    .sub-menu {
      &:not(:last-child) {
        margin-right: 20px;
      }
      &:hover {
        cursor: pointer;
        color: @active-word-color;
      }
    }
    &.inter {
      // transform: translateY(100%);
    }
    .child-span {
      &:hover {
        color: @active-word-color;
      }
    }
  }

  .menu {
    height: 100%;
    display: flex;
    align-items: center;
    // margin-left: 50px;
    .content {
      display: flex;
      align-items: center;
      // width: 500px;
      justify-content: space-between;
      height: 100%;
      .item {
        width: 120px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          span.first-level {
            color: @active-word-color;
            border-bottom-color: @active-word-color;
          }
          .translate-drawer {
            transform: translateY(100%);
          }
        }
      }
      span {
        font-size: 16px;
        color: rgb(83, 83, 83);
        font-weight: 500;
        cursor: pointer;
        padding: 5px 0;
        border-bottom: 2px solid transparent;
      }
    }
  }
  .publish {
    margin-left: auto;
  }
}
</style>
