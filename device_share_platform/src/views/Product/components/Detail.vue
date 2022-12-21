<script setup lang="ts">
import { ElRow, ElCol } from "element-plus";
</script>

<template>
  <div class="detail-comp">
    <ElRow class="category">
      <ElCol :span="8">
        <span class="label">设备编号：</span>
        <span class="val">15129</span>
      </ElCol>
      <ElCol :span="8">
        <span class="label">类别：</span>
        <span class="val">挖掘机械</span>
      </ElCol>
      <ElCol :span="8">
        <span class="label">组别：</span>
        <span class="val">挖掘机</span>
      </ElCol>
    </ElRow>
    <ElRow class="category">
      <ElCol :span="8">
        <span class="label">产品名称：</span>
        <span class="val">履带式挖掘机</span>
      </ElCol>
      <ElCol :span="8">
        <span class="label">规格：</span>
        <span class="val">操作重量：22吨 铲斗容量：1立方米</span>
      </ElCol>
      <ElCol :span="8">
        <span class="label">品牌：</span>
        <span class="val">雷沃</span>
      </ElCol>
    </ElRow>
    <ElRow class="category">
      <ElCol :span="8">
        <span class="label">型号：</span>
        <span class="val">200E</span>
      </ElCol>
      <ElCol :span="8">
        <span class="label">整机序列号：</span>
        <span class="val">不详</span>
      </ElCol>
      <ElCol :span="8">
        <span class="label">出厂时间：</span>
        <span class="val">2017-08-31</span>
      </ElCol>
    </ElRow>
    <ElRow class="category">
      <ElCol :span="8">
        <span class="label">工作小时数：</span>
        <span class="val">不详</span>
      </ElCol>
      <ElCol :span="8">
        <span class="label">功能特点：</span>
        <span class="val">通用型</span>
      </ElCol>
    </ElRow>
    <div class="imgs">
      <img src="@/assets/imgs/home_4.png" alt="" />
      <img src="@/assets/imgs/home_5.png" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-comp {
  padding: 20px 30px;
  .category {
    margin-bottom: 15px;
    .label {
      color: #666;
    }
    .val {
      color: #333;
    }
  }
  .imgs {
    > img {
      margin: 0 auto;
      width: 70%;
    }
  }
}
</style>
