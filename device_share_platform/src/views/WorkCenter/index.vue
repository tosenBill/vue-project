<script setup lang="ts">
import { computed, ref } from "vue";
import Menu from "./components/Menu.vue";
import { ContentWrap } from "@/components/ContentWrap";
// import Subview from "./components/Subview.vue";
import Center from "./components/Center.vue";
import SelfOrder from "./components/SelfOrder.vue";
import SelfOrderDetailVue from "./components/SelfOrderDetail.vue";

const curNenu = ref("SelfOrder");

let curComponent = computed(() => {
  if (curNenu.value === "SelfOrder") {
    return SelfOrder;
  } else if (curNenu.value === "SelfOrderDetailVue") {
    return SelfOrderDetailVue;
  } else {
    return Center;
  }
});
const menuChangeHandle = (res: string) => (curNenu.value = res);
</script>

<template>
  <div class="work-center">
    <ContentWrap class="mune-list">
      <Menu @change="menuChangeHandle" />
    </ContentWrap>
    <!-- <Subview /> -->
    <Transition name="fade" mode="out-in" appear>
      <component :is="curComponent" @change="menuChangeHandle"></component>
    </Transition>
    <!-- <Center /> -->
  </div>
  <!-- <div class="content">
      <ContentWrap>
        <div class="count">
          <div class="avatar">
            <ElAvatar :size="60" :src="stateInfo.circleUrl" />
            <span class="title">共享中心</span>
          </div>

          <div class="status-num">
            <div class="num-item">
              <div class="label">待响应</div>
              <div class="num">12</div>
            </div>
            <div class="num-item">
              <div class="label">协调中</div>
              <div class="num">18</div>
            </div>
            <div class="num-item">
              <div class="label">设备求租</div>
              <div class="num">126</div>
            </div>
            <div class="num-item">
              <div class="label">设备预约</div>
              <div class="num">26</div>
            </div>
            <div class="num-item">
              <div class="label">待审批</div>
              <div class="num">13</div>
            </div>
            <div class="num-item">
              <div class="label">消息通知</div>
              <div class="num">66</div>
            </div>
          </div>
        </div>
      </ContentWrap>
      <ElCard class="approve" shadow="never" :body-style="{ padding: '0px' }">
        <template #header>
          <div class="card-header">
            <span class="tip">待审批</span>
            <span class="more">查看全部</span>
          </div>
        </template>
        <div class="ctx">
          <div class="item" v-for="i in 3" :key="i">
            <div class="name">外租审批申请{{ i }}</div>
            <div class="time sub-time border-left">提交时间：2022-8-31</div>
            <div class="time company border-left">发起单位：xxxxxx</div>
            <div class="opt-btn border-left">
              <ElButton type="danger" size="small">办 理</ElButton>
            </div>
          </div>
        </div>
      </ElCard>
      <ElCard class="notice" shadow="never" :body-style="{ padding: '0px' }">
        <template #header>
          <div class="card-header">
            <span class="tip">通知公告</span>
            <span class="more">
              <ElButton color="#626aef">发布通知公告</ElButton>
              <span class="label">查看全部</span>
            </span>
          </div>
        </template>
        <div class="ctx">
          <div class="item" v-for="i in 3" :key="i">
            <div class="name">外租审批申请{{ i }}</div>
            <div class="time sub-time border-left">提交时间：2022-8-31</div>
            <div class="time company border-left">发起单位：xxxxxx</div>
            <div class="opt-btn border-left">
              <ElButton type="danger" size="small">办 理</ElButton>
            </div>
          </div>
        </div>
      </ElCard>
    </div> -->
  <!-- <router-view /> -->
  <!-- <template #default="{ Component, route }">
          <component :is="Component" />
        </template> -->
  <!-- </router-view> -->
  <!-- </div> -->
</template>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.work-center {
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
  .mune-list {
    width: 220px;
    margin-right: 20px;
  }
}
</style>
