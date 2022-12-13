<script setup lang="ts">
import { ref, reactive, unref } from "vue";

import { Logo } from "@/components/LogoTitle";
import { ElButton } from "element-plus";

const munuList = [
  {
    title: "首页",
  },
  {
    title: "租赁",
  },
  {
    title: "维修",
  },
  {
    title: "设备管理",
  },
  {
    title: "工作中心",
  },
];

const state = reactive({ isMouseEnter: false, category: {} });
const enter = (item: any) => {
  console.log(item);
  // state.isMouseEnter = true;
  state.category = item;
};
const leave = () => {
  state.isMouseEnter = false;
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
                v-for="(item, index) in munuList"
                :key="index"
                @mouseenter="enter(item)"
                @mouseleave="leave()"
                class="item"
              >
                <span>{{ item.title }}</span>
                <div :class="['translate-drawer']">
                  {{ state?.category?.title }}
                </div>
              </div>
            </div>
          </div>
          <div class="publish">
            <ElButton type="primary">发布设备</ElButton>
            <ElButton type="primary">发布需求</ElButton>
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
    &.inter {
      // transform: translateY(100%);
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
          span {
            color: rgb(22, 155, 213);
            border-bottom-color: rgb(22, 155, 213);
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
