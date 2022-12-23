<script setup lang="ts">
import { ElButton, ElSelect } from "element-plus";
import { ContentWrap } from "@/components/ContentWrap";
</script>

<template>
  <ContentWrap class="order-info" title="订单信息填写">
    <div class="address">
      <div class="title">设备交接地址</div>
      <div class="address-box">
        <div class="contact">
          <div class="info">
            <p>
              <span class="label">收货人：</span>
              <span class="val">大梨</span>
            </p>
            <p>
              <span class="label">联系方式：</span>
              <span class="val">180****1849</span>
            </p>
            <p>
              <span class="label">收货地址：</span>
              <span class="val">吉林省吉林市丰满区吉林大街48号</span>
            </p>
          </div>
          <div class="edit"><ElButton>修改地址</ElButton></div>
        </div>
        <div class="opt-btn">
          <ElButton type="success" text bg>切换地址</ElButton>
          <ElButton type="primary" plain>添加地址</ElButton>
        </div>
      </div>
      <div class="title">项目信息</div>
      <div class="project-info">
        <div class="name">项目名称</div>
        <ElSelect class="my-select" />
      </div>
    </div>
  </ContentWrap>
</template>

<style lang="less" scoped>
.order-info {
  margin-bottom: 20px;
  .title {
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .address-box {
    border: 1px solid rgba(228, 228, 228, 1);
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 20px;
    .contact {
      display: flex;
      justify-content: space-between;
      flex: 1;
      padding-right: 50px;
      align-items: center;
      .info {
        p {
          font-size: 14px;
          height: 32px;
          .label {
            color: #999;
          }
          .val {
            color: #666;
          }
        }
      }
      .edit {
      }
    }
    .opt-btn {
      width: 300px;
      border-left: 1px solid #eee;
      padding-left: 50px;
      height: 90px;
      display: flex;
      align-items: center;
    }
  }
  .project-info {
    border: 1px solid rgba(228, 228, 228, 1);
    height: 90px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    .name {
      width: 227px;
      height: 50px;
      border: 1px solid rgba(240, 72, 68, 1);
      background-color: rgba(249, 249, 249, 1);
      font-size: 14px;
      color: rgb(240, 72, 68);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 40px;
    }
    :deep(.my-select.el-select .select-trigger .el-input) {
      height: 50px;
      width: 300px;
    }
  }
}
</style>
