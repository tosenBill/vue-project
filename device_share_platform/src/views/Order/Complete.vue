<script setup lang="ts">
import { ElResult, ElButton } from "element-plus";
import { ContentWrap } from "@/components/ContentWrap";
</script>

<template>
  <div class="order-complete">
    <!-- <div class="title">提交成功</div> -->
    <ContentWrap class="wrap">
      <div class="container">
        <ElResult
          icon="success"
          title="订单提交成功"
          sub-title="平台接收订单后，会协助您联络请保持手机畅通"
        >
          <template #extra>
            <ElButton type="primary">查看订单</ElButton>
          </template>
        </ElResult>
      </div>
    </ContentWrap>
  </div>
</template>

<style lang="less" scoped>
.order-complete {
  .title {
    padding: 10px 0 20px;
    font-size: 16px;
    color: #999999;
  }
  .wrap {
    margin-top: 10px;
    margin-bottom: 20px;
    .container {
    }
  }
}
</style>
