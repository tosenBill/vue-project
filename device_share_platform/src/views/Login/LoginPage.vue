<script setup lang="ts">
import { useRoute } from "vue-router";
import { LoginForm, RegisterForm } from "./components";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { LocaleDropdown } from "@/components/LocaleDropdown";
// import { useI18n } from "@/hooks/web/useI18n";
import { underlineToHump } from "@/utils";
import { useAppStore } from "@/store/modules/app";
import { useDesign } from "@/hooks/web/useDesign";
import { ref } from "vue";
console.log(useRoute().path);

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls("login");

const appStore = useAppStore();

const isLogin = ref(true);

const toRegister = () => {
  isLogin.value = false;
};

const toLogin = () => {
  isLogin.value = true;
};
</script>

<template>
  <div
    :class="prefixCls"
    class="h-[100%] relative <sm:px-10px <xl:px-10px <md:px-10px login-container"
  >
    <div class="relative h-full flex mx-auto">
      <div
        :class="`${prefixCls}__left flex-1 bg-opacity-20 relative <xl:hidden`"
      >
        <div class="flex justify-center items-center h-[calc(100%-60px)]">
          <Transition
            appear
            tag="div"
            class="transition-lf"
            enter-active-class="animate__animated animate__bounceInLeft"
          >
            <div class="info">
              <div class="h1"><span>中油工程</span>设备共享平台</div>
              <div class="h4">工程设备共享解决方案</div>
              <div class="intorduce">
                <div class="btn">点击查看</div>
                <img class="img" src="@/assets/imgs/home_3.png" alt="" />
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div class="flex-1 p-30px <sm:p-10px dark:bg-v-dark relative">
        <Transition
          appear
          enter-active-class="animate__animated animate__bounceInRight"
        >
          <div
            class="h-full flex items-center m-auto w-[100%] @2xl:max-w-500px @xl:max-w-500px @md:max-w-500px @lg:max-w-500px"
          >
            <LoginForm
              v-if="isLogin"
              class="p-20px h-auto m-auto <xl:(rounded-3xl light:bg-white)"
              @to-register="toRegister"
            />
            <RegisterForm
              v-else
              class="p-20px h-auto m-auto <xl:(rounded-3xl light:bg-white)"
              @to-login="toLogin"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-login";

.@{prefix-cls} {
  &__left {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url("@/assets/svgs/login-bg.svg");
      background-position: center;
      background-repeat: no-repeat;
      content: "";
    }
  }
  &.login-container {
    .transition-lf.info {
      .h1 {
        font-size: 36px;
        color: #999999;
        font-weight: 700;
        > span {
          margin-right: 10px;
        }
      }
      .h4 {
        color: #999;
        font-size: 24px;
      }
      .intorduce {
        display: flex;
        align-items: flex-end;
        margin-top: 20px;
        &::before {
          content: "";
          display: inline-block;
        }
      }
      .btn {
        width: 200px;
        height: 45px;
        background-color: rgba(240, 72, 68, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 3px;
        font-size: 18px;
        color: #ffffff;
        margin-top: 30px;
      }
      .img {
        width: 435px;
        height: 290px;
        transform: translate(20px, 20px);
      }
    }
  }
}
</style>
