<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="menu-list">
      <span>首页</span>
      <span>租赁</span>
      <span>维修</span>
      <span>设备管理</span>
      <span>工作中心</span>
    </div>
    <div class="copyright">CopyRight @ 中油工程 2022</div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  background: rgba(51, 51, 51, 1);
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    height: 36px;
  }
  .flex_font {
    font-size: 12px;
    color: #999999;
    display: flex;
    align-items: center;
  }
  .menu-list {
    .flex_font();
    // color: rgb(204, 204, 204);
    span {
      &:not(:last-child)::after {
        content: "|";
        display: inline-block;
        padding: 0 10px;
      }
    }
  }
  .copyright {
    font-size: 13px;
    color: #999999;
  }
}
</style>
