<script setup lang="ts">
import { computed } from "vue";
import { useAppStoreWithOut } from "@/store/modules/app";
import { ConfigGlobal } from "@/components/ConfigGlobal";
import { useDesign } from "@/hooks/web/useDesign";
// import { useCache } from "@/hooks/web/useCache";

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls("app");

const appStore = useAppStoreWithOut();

const currentSize = computed(() => appStore.getCurrentSize);
</script>

<template>
  <ConfigGlobal :size="currentSize">
    <RouterView :class="'' ? `${prefixCls}-grey-mode` : ''" />
  </ConfigGlobal>
</template>

<style lang="less">
@prefix-cls: ~"@{namespace}-app";

.size {
  width: 100%;
  height: 100%;
}

html,
body {
  padding: 0 !important;
  margin: 0;
  // overflow: hidden;
  .size;
  min-width: @body-min-width;
  #app {
    .size;
    // width: @body-page-width;
  }
}

.@{prefix-cls}-grey-mode {
  filter: grayscale(100%);
}
</style>
