<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    // 设备信息
    info: any;
  }>(),
  {
    info: {},
  }
);
</script>

<template>
  <div class="device-info">
    <img :src="props.info.img" alt="" class="img" />
    <div class="info">
      <div class="name">{{ props.info.name }}</div>
      <div class="item weight">
        <span>操作重量：{{ props.info.weight }}吨</span>
        <span>铲斗容量：{{ props.info.volume }}吨</span>
      </div>
      <div class="item company">出租单位：{{ props.info.company }}</div>
      <div class="item weight">
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
    width: 110px;
    height: 110px;
  }
  .info {
    margin-left: 15px;
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
