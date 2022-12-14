<script setup lang="ts">
import { Content } from "./components";
import { ref, watch } from "vue";
import { isLogin } from "@/utils/validate";
</script>

<template>
  <div class="home-container">
    <section class="section">
      <Content />
    </section>
  </div>
</template>

<style lang="less" scoped>
.home-container {
  .section {
    width: @container-width_inner;
    margin: 0 auto;
  }
}
</style>
