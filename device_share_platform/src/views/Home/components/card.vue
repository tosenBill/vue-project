<script lang="ts" setup>
import { ref } from "vue";
import { ElCard } from "element-plus";

const currentDate = ref("￥8888");
</script>

<template>
  <div class="card-item">
    <ElCard :body-style="{ padding: '10px 20px' }">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px">
        <span>出租交叉式高空作业车</span>
        <div class="bottom">
          <div class="price">{{ currentDate }}/月</div>
          <div class="address">厦门市</div>
        </div>
      </div>
    </ElCard>
  </div>
</template>

<style lang="less" scoped>
.card-item {
  width: 230px;
}
.price {
  font-size: 14px;
  color: #f52f3e;
}
.address {
  font-size: 11px;
  color: #c7c7c7;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
