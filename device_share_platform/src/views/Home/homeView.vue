<script setup lang="ts">
import { Header, Footer } from "./components";
import { ref, watch } from "vue";
// import { ContentWrap } from '@/components/ContentWrap'
// import { useIntro } from '@/hooks/web/useIntro'
import { ElInput } from "element-plus";

// const { introRef } = useIntro();

// const guideStart = () => {
//   introRef.start();
// };
const valueRef = ref("");
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
    <Header></Header>
    <section class="section">
      <div class="title-search">
        <div class="title">
          <img src="@/assets/imgs/logo.png" alt="" />
          <span>工程建设设备共享管理平台</span>
        </div>
        <div class="search">
          <ElInput v-model="valueRef" type="text">
            <template #prefix>
              <Icon class="el-input__icon cursor-pointer" icon="ep:search" />
            </template>
            <template #suffix> 搜索 </template>
          </ElInput>
        </div>
      </div>
      <div class="menu">
        <div class="content">
          <span>租赁</span><span>维修</span><span>设备管理</span
          ><span>工作中心</span>
        </div>
      </div>
      <div class="imgs-content">
        <div class="img-box">
          <img src="@/assets/imgs/home_1.jpg" class="" />
        </div>
        <div class="img-box">
          <img src="@/assets/imgs/home_1.jpg" class="" />
        </div>
      </div>
      <div class="operate-btn">
        <div class="ctx">
          <div>我要出租</div>
          <div>我要求租</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
.welcome-container {
  .section {
    padding: 0 20px;
    .title-search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
    .menu {
      background: #f2f2f2;
      height: 50px;
      display: flex;
      justify-content: center;
      .content {
        display: flex;
        color: #169bd5;
        align-items: center;
        span {
          padding: 0 20px;
        }
      }
    }
    .imgs-content {
      display: flex;
      .img-box {
        flex: 1;
      }
    }
    .operate-btn {
      display: flex;
      justify-content: center;
      .ctx {
        display: flex;
        // transform: translateY(-25px);
        background: #fff;
        border: 1px solid #eee;
        > div {
          width: 150px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          &:first-child {
            border-right: 1px solid #eee;
          }
        }
      }
    }
  }
}
</style>
