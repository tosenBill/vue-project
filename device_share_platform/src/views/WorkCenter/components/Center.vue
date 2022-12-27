<script setup lang="ts">
import { reactive } from "vue";
import { ContentWrap } from "@/components/ContentWrap";
import { ElAvatar, ElCard, ElButton } from "element-plus";

const stateInfo = reactive({
  circleUrl:
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});
</script>

<template>
  <div class="person-center">
    <ContentWrap>
      <div class="count">
        <div class="avatar">
          <ElAvatar :size="60" :src="stateInfo.circleUrl" />
          <span class="title">共享中心</span>
        </div>

        <div class="status-num">
          <div class="num-item">
            <div class="label">待响应</div>
            <div class="num">12</div>
          </div>
          <div class="num-item">
            <div class="label">协调中</div>
            <div class="num">18</div>
          </div>
          <div class="num-item">
            <div class="label">设备求租</div>
            <div class="num">126</div>
          </div>
          <div class="num-item">
            <div class="label">设备预约</div>
            <div class="num">26</div>
          </div>
          <div class="num-item">
            <div class="label">待审批</div>
            <div class="num">13</div>
          </div>
          <div class="num-item">
            <div class="label">消息通知</div>
            <div class="num">66</div>
          </div>
        </div>
      </div>
    </ContentWrap>
    <ElCard class="approve" shadow="never" :body-style="{ padding: '0px' }">
      <template #header>
        <div class="card-header">
          <span class="tip">待审批</span>
          <span class="more">查看全部</span>
        </div>
      </template>
      <div class="ctx">
        <div class="item" v-for="i in 3" :key="i">
          <div class="name">外租审批申请{{ i }}</div>
          <div class="time sub-time border-left">提交时间：2022-8-31</div>
          <div class="time company border-left">发起单位：xxxxxx</div>
          <div class="opt-btn border-left">
            <ElButton type="danger" size="small">办 理</ElButton>
          </div>
        </div>
      </div>
    </ElCard>
    <ElCard class="notice" shadow="never" :body-style="{ padding: '0px' }">
      <template #header>
        <div class="card-header">
          <span class="tip">通知公告</span>
          <span class="more">
            <ElButton color="#626aef">发布通知公告</ElButton>
            <span class="label">查看全部</span>
          </span>
        </div>
      </template>
      <div class="ctx">
        <div class="item" v-for="i in 3" :key="i">
          <div class="name">外租审批申请{{ i }}</div>
          <div class="time sub-time border-left">提交时间：2022-8-31</div>
          <div class="time company border-left">发起单位：xxxxxx</div>
          <div class="opt-btn border-left">
            <ElButton type="danger" size="small">办 理</ElButton>
          </div>
        </div>
      </div>
    </ElCard>
  </div>
</template>

<style lang="less" scoped>
.person-center {
  flex: 1;
  .count {
    display: flex;
    justify-content: space-around;
    .avatar {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #999999;
      font-weight: 700;
      span.title {
        margin-left: 20px;
      }
    }
    .status-num {
      display: flex;
      align-items: center;
      .num-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
        .label {
          font-size: 14px;
          color: #999999;
        }
        .num {
          font-weight: 700;
          color: #e36844;
          font-size: 20px;
        }
      }
    }
  }
  .approve,
  .notice {
    margin-top: 10px;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tip {
        font-size: 16px;
        color: #999999;
      }
      .more {
        font-size: 12px;
        color: #666666;
        .label {
          margin-left: 30px;
        }
      }
    }
    .ctx {
      padding: 10px 15px;
      .item {
        border: 1px solid #ededed;
        display: flex;
        height: 66px;
        align-items: center;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        > div {
          height: 100%;
          display: flex;
          align-items: center;
        }
        .border-left {
          border-left: 1px solid #ededed;
        }
        .name,
        .time {
          display: flex;
          justify-content: center;
          font-size: 12px;
          color: #666666;
          .border-left {
            border-left: 1px solid #ededed;
          }
          &.sub-time {
            width: 150px;
          }
          &.company {
            width: 190px;
          }
        }
        .name {
          flex: 1;
        }
        .opt-btn {
          width: 130px;
          justify-content: center;
        }
      }
    }
  }
}
</style>
