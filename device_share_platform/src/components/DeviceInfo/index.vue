<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    // 设备信息
    info: any;
    showCompany: boolean;
    showCustom: boolean;
    img_width?: string;
    img_height?: string;
  }>(),
  {
    info: {},
    showCompany: true,
    showCustom: true,
    img_width: "110px",
    img_height: "110px",
  }
);
</script>

<template>
  <div class="device-info">
    <img
      :src="props.info.img"
      alt=""
      :style="{ width: props.img_width, height: props.img_height }"
      class="img"
    />
    <div class="info">
      <div class="name">{{ props.info.name }}</div>
      <div class="item weight">
        <span>操作重量：{{ props.info.weight }}吨</span>
        <span>铲斗容量：{{ props.info.volume }}吨</span>
      </div>
      <div class="item company" v-if="showCompany">
        出租单位：{{ props.info.company }}
      </div>
      <div class="item weight" v-if="showCustom">
        <span>联系人：{{ props.info.contact }}</span>
        <span>联系电话：{{ props.info.tel }}</span>
      </div>
    </div>
  </div>
  <slot name="footer"></slot>
</template>

<style lang="less" scoped>
.device-info {
  display: flex;
  .img {
    // width: 110px;
    // height: 110px;
  }
  .info {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      margin: 5px 0;
      font-size: 16px;
      color: #666;
    }
    .item {
      font-size: 12px;
      color: #999;
      height: 28px;
      &.weight span {
        margin-right: 10px;
      }
    }
  }
}
</style>
