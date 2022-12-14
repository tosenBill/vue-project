<script setup lang="ts">
import { computed } from "vue";
import { debounce } from "lodash-es";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store/modules/app";
import { useCache } from "@/hooks/web/useCache";

// import { ContentWrap } from '@/components/ContentWrap'
// import { useIntro } from '@/hooks/web/useIntro'
// import { ElButton } from "element-plus";

// const { introRef } = useIntro();

// const guideStart = () => {
//   introRef.start();
// };

const appStore = useAppStore();
const { wsCache } = useCache();

const userInfo = wsCache.get(appStore.getUserInfo);

const router = useRouter();
const loginHandle = debounce(() => {
  console.log("login");
  router.push("/login");
}, 100);
</script>

<template>
  <div class="section">
    <div>
      <span>欢迎来到中石油设备共享服务平台</span>
      <span v-if="userInfo && userInfo.username" class="user-info">{{
        userInfo.username
      }}</span>
      <span v-else>
        <span class="login-btn" @click="loginHandle">登录</span
        ><span>注册</span>
      </span>
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
  .user-info {
    color: @active-word-color;
  }
  .login-btn {
    margin: 0 10px;
    color: @text-blue;
    cursor: pointer;
  }
}
</style>
