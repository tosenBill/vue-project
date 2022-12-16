<script setup lang="ts">
import { ElButton } from "element-plus";
</script>

<template>
  <div class="download-app">
    <div class="item">
      <div class="title">客户服务</div>
      <div class="ser-que">
        <div class="box">
          <Icon icon="ic:sharp-wechat" class="icon-s" :size="36" />
          <span>在线客服</span>
        </div>

        <div class="box">
          <Icon icon="tabler:message-circle" class="icon-s" :size="36" />
          <span>问题反馈</span>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title">下载APP</div>
      <div class="down-box">
        <img src="@/assets/imgs/download_qrcode.svg" alt="" />
        <div class="tip">
          <p>扫描二维码下载移动版</p>
          <ElButton>下载APP</ElButton>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title">服务热线</div>
      <div class="phone">400-0000-000</div>
      <div class="time">周一至周五 8:30-17:00</div>
      <div class="time">可在线留言</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.download-app {
  height: 250px;
  background: #fff;
  border-top: 1px solid rgba(242, 242, 242, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  .item {
    height: 164px;
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    &:not(:last-child) {
      border-right: 1px solid rgba(242, 242, 242, 1);
    }
    .title {
      font-size: 16px;
      color: #999999;
      margin-bottom: 20px;
    }
    .ser-que {
      display: flex;
      .box {
        margin: 0 5px;
        width: 80px;
        height: 80px;
        border: 1px solid #eee;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .icon-s {
          color: #ccc;
        }
        span {
          color: #666;
        }
      }
    }
    .down-box {
      display: flex;
      .tip {
        margin-left: 15px;
        height: 100px;
        width: 85px;
        justify-content: space-around;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        color: #999999;
        :deep(span) {
          font-size: 12px;
          color: #999999;
        }
      }
    }
    .phone {
      font-size: 20px;
      font-weight: 700;
      color: #666;
    }
    .time {
      font-size: 14px;
      font-weight: 400;
      color: #999;
    }
  }
}
</style>
