<script setup lang="ts">
import { ref, reactive } from "vue";
import Card from "./card.vue";

const list = ref([
  {
    title: "钻井设备",
    id: 0,
  },
  {
    title: "钻采特车",
    id: 1,
  },
  {
    title: "测井及物探设备",
    id: 2,
  },
  {
    title: "运输车辆",
    id: 3,
  },
  {
    title: "油气处理与集输设备",
    id: 4,
  },
  {
    title: "起重搬运机械",
    id: 5,
  },
  {
    title: "工程机械",
    id: 6,
  },
  {
    title: "船舶",
    id: 7,
  },
]);
const state = reactive({ isMouseEnter: false });
const enter = (id?: string | number) => {
  console.log(id, state);
  state.isMouseEnter = true;
};
const leave = () => {
  state.isMouseEnter = false;
};
</script>

<template>
  <div class="home-content">
    <div class="navigate-list">
      <div class="list">
        <div
          class="item"
          v-for="item in list"
          :key="item.id"
          @mouseenter="enter(item.id)"
          @mouseleave="leave()"
        >
          <span>{{ item.title }}</span>
          <Icon class="el-input__icon" icon="ep:arrow-right" />
        </div>
      </div>
      <div
        :class="['translate-drawer', state.isMouseEnter ? 'inter' : '']"
      ></div>
      <div class="info">
        <div class="intorduce">
          <div class="h1">中石油设备共享平台</div>
          <div class="h4">工程设备共享解决方案</div>
          <div class="btn">点击查看</div>
        </div>
        <img class="img" src="@/assets/imgs/home_3.png" alt="" />
      </div>
    </div>
    <div class="card-list">
      <div class="title">为您推荐</div>
      <div class="card-container">
        <Card v-for="(o, index) in 5" :key="index" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@list-item-width: 230px;
.home-content {
  background: #f5f5f5;
  .navigate-list {
    display: flex;
    margin-bottom: 10px;
    position: relative;
    height: 360px;
    .list {
      background: rgba(51, 51, 51, 0.8);
      width: @list-item-width;
      padding: 20px 0;
      z-index: 2;
      position: absolute;
      .item {
        padding: 0 30px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        span {
          font-size: 14px;
        }
        color: #fff;
        &:hover {
          background: rgba(22, 155, 213, 1);
        }
      }
    }
    .translate-drawer {
      position: absolute;
      width: 800px;
      background: red;
      height: 100%;
      top: 0;
      z-index: 1;
      transition: all 0.3;
      transform: translateX(-100%);
      &.inter {
        transform: translateX(10%);
      }
      &.out {
        transform: translateX(-100%);
      }
    }
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      margin-left: @list-item-width;
      .h1 {
        font-size: 36px;
        font-weight: 700;
      }
      .h4 {
        height: 48px;
        font-size: 24px;
      }
      .btn {
        width: 200px;
        height: 45px;
        background-color: rgba(240, 72, 68, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 3px;
        font-size: 18px;
        color: #ffffff;
        margin-top: 30px;
      }
      .img {
        width: 435px;
        height: 290px;
      }
    }
  }
  .card-list {
    padding: 0 20px;
    .title {
      height: 50px;
      font-weight: 700;
      font-style: normal;
      font-size: 18px;
      display: flex;
      align-items: center;
      color: #666;
    }
    .card-container {
      display: flex;
      padding: 10px 0;
      > div:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
}
</style>
