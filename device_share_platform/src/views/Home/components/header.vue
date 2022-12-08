<script setup lang="ts">
// import { ContentWrap } from '@/components/ContentWrap'
// import { useIntro } from '@/hooks/web/useIntro'
// import { ElButton } from "element-plus";

// const { introRef } = useIntro();

// const guideStart = () => {
//   introRef.start();
// };
</script>

<template>
  <div class="section">
    <div>
      <span>欢迎来到中石油设备共享服务平台</span>
      <span class="login_btn">登录</span><span>注册</span>
    </div>
    <div>服务热线：0316-XXXXXXXXX</div>
  </div>
</template>

<style lang="less" scoped>
.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: rgba(242, 242, 242, 1);
  color: #999;
  //   color: @link-color;
  .login_btn {
    margin: 0 10px;
  }
}
</style>
