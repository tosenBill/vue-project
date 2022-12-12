<script setup lang="ts">
import { Content } from "./components";
import { ref, watch } from "vue";
// import { ContentWrap } from '@/components/ContentWrap'
// import { useIntro } from '@/hooks/web/useIntro'
import { ElInput, ElButton } from "element-plus";
import { isLogin } from "@/utils/validate";

// const { introRef } = useIntro();

// const guideStart = () => {
//   introRef.start();
// };
const valueRef = ref("");

const searchHandle = () => {
  if (!isLogin()) {
    ElMessage.warning("请先登录~");
  }
};
// 监听
watch(
  () => valueRef.value,
  (val: string) => {
    console.log(val);
  }
);
</script>

<template>
  <div class="welcome-container">
    <section class="section">
      <Content />
    </section>
  </div>
</template>

<style lang="less" scoped>
.welcome-container {
  .section {
    width: @container-width_inner;
    margin: 0 auto;
  }
}
</style>
