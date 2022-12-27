<script setup lang="ts">
import { usePermissionStore } from "@/store/modules/permission";
import { useRouter } from "vue-router";
import { MunuRouter } from "@/components/Header/src/useRenderMenuItem";

const { addRouters } = usePermissionStore();
const { push } = useRouter();

const subRouterList = MunuRouter(addRouters).filter(
  (router) => router.name === "Work"
);
const emits = defineEmits(["change"]);
const menuClick = (type: string) => {
  emits("change", type);
};

console.log(subRouterList);
</script>

<template>
  <div class="work-menu">
    <div class="item">
      <div class="title">共享中心</div>
      <div class="sub" @click="menuClick('Center')">
        个人中心<span class="num">（12）</span>
      </div>
    </div>
    <div class="item">
      <div class="title">订单管理</div>
      <div class="sub" @click="menuClick('SelfOrder')">
        自选订单<span class="num">（23）</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.work-menu {
  min-height: 500px;
  .title {
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    color: #666;
  }
  .sub {
    font-size: 14px;
    color: #666;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: @text-blue;
      cursor: pointer;
    }
    .num {
      color: #ff3a3a;
    }
  }
}
</style>
