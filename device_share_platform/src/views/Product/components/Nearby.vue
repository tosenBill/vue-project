<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Card from "@/views/DeviceManage/components/ProdItem.vue";

import "swiper/css";
// import "swiper/css/navigation";
const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const { push } = useRouter();
const prodList = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
]);

const prodItemClick = (item) => {
  console.log(item);
  push({
    name: `ProductDetail`,
    params: {
      id: item.id,
    },
  });
};
</script>

<template>
  <div class="nearby-list">
    <Swiper
      :modules="modules"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :slides-per-view="5"
      :slides-per-group="5"
      :autoplay="true"
      :space-between="10"
      :loop="true"
      class="mySwiper"
    >
      <SwiperSlide v-for="(item, index) in prodList" :key="index">
        <div class="swiper-item">
          <Card :type="2" @click="prodItemClick(item)" :prod-item="item"></Card>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="change-btn swiper-button-prev l">
      <i class="arrow arrow-l"></i>
    </div>
    <div class="change-btn swiper-button-next r">
      <i class="arrow arrow-r"></i>
    </div>
  </div>
</template>

<style lang="less" scoped>
.arrow {
  display: inline-block;
  border-top: 2px solid #ccc;
  border-left: 2px solid #ccc;
  width: 12px;
  height: 12px;
  &.arrow-l {
    transform: rotate(-45deg);
    margin-left: 5px;
  }
  &.arrow-r {
    transform: rotate(135deg);
    margin-left: -5px;
  }
}
.nearby-list {
  position: relative;
  margin: 15px 0;
  background: #fff;
  .swiper-item {
    width: 236px;
    cursor: pointer;
  }
  .change-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #ccc;
    &:hover {
      border-color: @text-blue;
      > i.arrow {
        border-color: @text-blue;
      }
    }
  }
  .l {
    left: -40px;
  }
  .r {
    right: -40px;
  }
}
</style>
