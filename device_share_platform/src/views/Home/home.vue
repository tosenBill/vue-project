<script setup lang="ts">
import { Header } from "@/components/Header";
import { Footer2 } from "@/components/Footer";
import { Content } from "./components";
import { ref, watch } from "vue";
// import { ContentWrap } from '@/components/ContentWrap'
// import { useIntro } from '@/hooks/web/useIntro'
import { ElInput, ElButton } from "element-plus";
import { isLogin } from "@/utils/validate";
import { Logo } from "@/components/LogoTitle";

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
    <Header></Header>
    <section class="section">
      <div class="menu-line">
        <Logo :fontSize="'18px'" />
        <div class="menu">
          <div class="content">
            <span>首页</span>
            <span>租赁</span><span>维修</span><span>设备管理</span
            ><span>工作中心</span>
          </div>
        </div>
        <div class="publish">
          <ElButton type="primary">发布设备</ElButton>
          <ElButton type="primary">发布需求</ElButton>
        </div>
      </div>

      <div class="">
        <Content />
      </div>
    </section>
    <Footer2 />
  </div>
</template>

<style lang="less" scoped>
.welcome-container {
  .section {
    width: @container-width_inner;
    margin: 0 auto;
    .menu-line {
      padding: 30px 0;
      display: flex;
      align-items: center;
      .menu {
        margin-left: 50px;
        .content {
          display: flex;
          align-items: center;
          width: 500px;
          justify-content: space-between;
          > span {
            font-size: 16px;
            color: rgb(83, 83, 83);
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
      .publish {
        margin-left: auto;
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
