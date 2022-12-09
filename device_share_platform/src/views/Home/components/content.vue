<script setup lang="ts">
import { ref } from "vue";

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
</script>

<template>
  <div class="home-content">
    <div class="navigate-list">
      <div class="list">
        <div class="item" v-for="item in list" :key="item.id">
          <span>{{ item.title }}</span>
          <Icon class="el-input__icon" icon="ep:arrow-right" />
        </div>
      </div>
      <div class="info">
        <h2>中石油设备共享平台</h2>
      </div>
    </div>
    <div class="card-list">
      <div class="title">为您推荐</div>
      <div class="card">
        <div class="card-item"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-content {
  background: rgba(242, 242, 242, 1);
  .navigate-list {
    display: flex;
    .list {
      background: rgba(51, 51, 51, 0.8);
      width: 230px;
      padding: 20px 0;
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
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .card-list {
    .title {
      height: 50px;
      font-weight: 700;
      font-style: normal;
      font-size: 18px;
      display: flex;
      align-items: center;
      color: #666;
    }
    .card {
      .card-item {
        background: #fff;
        width: 250px;
        height: 250px;
        border: 1px solid #eee;
      }
    }
  }
}
</style>
