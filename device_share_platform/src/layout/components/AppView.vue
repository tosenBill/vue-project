<script setup lang="ts">
import { useTagsViewStore } from "@/store/modules/tagsView";
import { useAppStoreWithOut } from "@/store/modules/app";
import { Footer, DownloadApp } from "@/components/Footer";
import { computed } from "vue";

const appStore = useAppStoreWithOut();

const layout = computed(() => appStore.getLayout);

const fixedHeader = computed(() => appStore.getFixedHeader);

const footer = computed(() => appStore.getFooter);
const pageLoading = computed(() => Boolean(appStore.getPageLoading));

const tagsViewStore = useTagsViewStore();

const getCaches = computed((): string[] => {
  return tagsViewStore.getCachedViews;
});
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;
</script>

<template>
  <section
    v-loading="pageLoading"
    :element-loading-svg="svg"
    class="custom-loading-svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    :class="[
      'w-[100%] bg-[var(--app-content-bg-color)] dark:bg-[var(--el-bg-color)]',
      {
        '!min-h-[calc(100%-var(--app-footer-height))]':
          fixedHeader &&
          (layout === 'classic' || layout === 'topLeft') &&
          footer,
      },
    ]"
  >
    <div class="layout-router-view">
      <router-view>
        <template #default="{ Component, route }">
          <keep-alive :include="getCaches">
            <component :is="Component" />
          </keep-alive>
        </template>
      </router-view>
    </div>
  </section>
  <DownloadApp />
  <Footer v-if="footer" />
</template>

<style lang="less">
.layout-router-view {
  width: @container-width_inner;
  margin: 0 auto;
}
</style>
