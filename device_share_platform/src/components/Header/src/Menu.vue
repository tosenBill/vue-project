<script setup lang="ts">
import { Logo } from "@/components/LogoTitle";
import { ElButton } from "element-plus";
</script>

<template>
  <div class="menu-line">
    <div class="menu-line-container">
      <Logo :fontSize="'18px'" />
      <div class="menu">
        <div class="content">
          <span>首页</span>
          <span>租赁</span>
          <span>维修</span>
          <span>设备管理</span>
          <span>工作中心</span>
        </div>
      </div>
      <div class="publish">
        <ElButton type="primary">发布设备</ElButton>
        <ElButton type="primary">发布需求</ElButton>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.menu-line {
  padding: 30px 0;
  background: #fff;
  display: flex;
  justify-content: center;
  .menu-line-container {
    display: flex;
    align-items: center;
    width: @container-width_inner;
  }
  .menu {
    margin-left: 50px;
    .content {
      display: flex;
      align-items: center;
      width: 500px;
      justify-content: space-between;
      > span {
        font-size: 16px;
        color: rgb(83, 83, 83);
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
  .publish {
    margin-left: auto;
  }
}
</style>
