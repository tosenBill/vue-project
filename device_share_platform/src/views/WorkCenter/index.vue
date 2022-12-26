<script setup lang="ts">
import Menu from "./components/Menu.vue";
import { ContentWrap } from "@/components/ContentWrap";
import Subview from "./components/Subview.vue";
</script>

<template>
  <div class="work-center">
    <ContentWrap class="mune-list">
      <Menu />
    </ContentWrap>
    <Subview />
    <!-- <ContentWrap class="content"> -->
    <!-- <router-view /> -->
    <!-- <template #default="{ Component, route }">
          <component :is="Component" />
        </template> -->
    <!-- </router-view> -->
    <!-- </ContentWrap> -->
  </div>
</template>

<style lang="less" scoped>
.work-center {
  display: flex;
  margin-top: 10px;
  .mune-list {
    width: 220px;
    margin-right: 20px;
  }
  .content {
    // display: flex;
    flex: 1;
  }
}
</style>
