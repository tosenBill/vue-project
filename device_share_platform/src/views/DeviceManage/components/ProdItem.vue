<script setup lang="ts">
import { ElCard, ElRow, ElCol, ElButton } from "element-plus";

const props = withDefaults(
  defineProps<{
    // 生成Form的布局结构数组
    list: Array<any>;
  }>(),
  {
    list: [],
  }
);
</script>

<template>
  <ElRow class="prod-item" :gutter="50">
    <ElCol
      :span="6"
      v-for="(item, index) in props.list"
      :key="index"
      class="item-col"
    >
      <ElCard>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div class="prod-info">
          <div class="name">SANY485-H履带式挖掘机</div>
          <div class="info">
            <span>操作重量：49吨</span>
            <span>铲斗容量：2.2立方米</span>
          </div>
          <div class="price">￥8888</div>
          <div class="operate-btn">
            <ElButton type="primary" size="small">租赁</ElButton>
            <ElButton type="danger" size="small">预约</ElButton>
          </div>
        </div>
      </ElCard>
    </ElCol>
  </ElRow>
</template>

<style lang="less" scoped>
.prod-item {
  .item-col {
    margin-bottom: 20px;
    .prod-info {
      .name {
        font-size: 14px;
        line-height: 24px;
        color: #666;
        text-align: center;
      }
      .info {
        font-size: 12px;
        color: #999;
        line-height: 24px;
        text-align: center;
        span {
          &:first-child {
            margin-right: 5px;
          }
        }
      }
      .price {
        text-align: center;
        font-size: 14px;
        line-height: 36px;
        color: #e4393c;
      }
      .operate-btn {
        display: flex;
        justify-content: center;
        > :first-child {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
