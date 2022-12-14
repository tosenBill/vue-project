<script setup lang="ts">
import { defineProps } from "vue";
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
  }>(),
  {
    width: "53px",
    height: "47px",
    fontSize: "18px",
    fontWeight: 500,
  }
);
</script>

<template>
  <div class="logo-title_container">
    <img
      src="@/assets/imgs/logo.png"
      :style="{ width: props.width, height: props.height }"
      alt=""
    />
    <span :style="{ fontSize: props.fontSize, fontWeight: props.fontWeight }"
      >工程建设设备共享管理平台</span
    >
  </div>
</template>

<style lang="less" scoped>
.logo-title_container {
  display: flex;
  align-items: center;
  > img {
    margin-right: 10px;
  }
  > span {
    color: #999;
    // font-weight: 500;
  }
}
</style>
