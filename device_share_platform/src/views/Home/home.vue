<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElButton } from "element-plus";
import Card from "./components/card.vue";

const list = ref([
  {
    title: "钻井设备",
    id: 0,
  },
  {
    title: "钻采特车",
    id: 1,
  },
  {
    title: "测井及物探设备",
    id: 2,
  },
  {
    title: "运输车辆",
    id: 3,
  },
  {
    title: "油气处理与集输设备",
    id: 4,
  },
  {
    title: "起重搬运机械",
    id: 5,
  },
  {
    title: "辅助专用车辆",
    id: 8,
  },
  {
    title: "工程机械",
    id: 6,
  },
  {
    title: "船舶",
    id: 7,
  },
]);
const state = reactive({ isMouseEnter: false, category: {} });
const enter = (item: any) => {
  console.log(item);
  // state.isMouseEnter = true;
  state.category = item;
};
const leave = () => {
  state.isMouseEnter = false;
};
</script>

<template>
  <div class="home-content">
    <div class="navigate-list">
      <div class="list">
        <div class="item-box">
          <div
            class="item"
            v-for="item in list"
            :key="item.id"
            @mouseenter="enter(item)"
            @mouseleave="leave()"
          >
            <span>{{ item.title }}</span>
            <Icon class="el-input__icon" icon="ep:arrow-right" />
          </div>
        </div>
        <div :class="['translate-drawer']">
          {{ state.category }}
        </div>
      </div>
      <div class="info">
        <div class="intorduce">
          <div class="h1">中石油设备共享平台</div>
          <div class="h4">工程设备共享解决方案</div>
          <div class="btn">点击查看</div>
        </div>
        <img class="img" src="@/assets/imgs/home_3.png" alt="" />
      </div>
    </div>
    <div class="card-list">
      <div class="title-h2">为您推荐</div>
      <div class="card-container">
        <Card v-for="(o, index) in 5" :key="index" />
      </div>
    </div>
    <div class="card-list">
      <div class="title-h2">平台服务</div>
      <div class="server-container">
        <div class="server">
          <div class="desc">需方自选供方</div>
          <img src="@/assets/imgs/home_4.png" class="img" alt="需方自选供方" />
          <div class="tip">设备需求方自由筛选设备提供方</div>
          <div class="server-detai">
            <span>了解详情</span>
            <Icon :size="14" class="el-input__icon" icon="ep:arrow-right" />
          </div>
        </div>
        <div class="server">
          <div class="desc">供方自选需方</div>
          <img src="@/assets/imgs/home_5.png" class="img" alt="供方自选需方" />
          <div class="tip">设备提供方自由筛选设备需求方</div>
          <div class="server-detai">
            <span>了解详情</span>
            <Icon :size="14" class="el-input__icon" icon="ep:arrow-right" />
          </div>
        </div>
        <div class="server">
          <div class="desc">平台撮合</div>
          <img src="@/assets/imgs/home_6.png" class="img" alt="平台撮合" />
          <div class="tip">平台为供方、需方提供对接服务</div>
          <div class="server-detai">
            <span>了解详情</span>
            <Icon :size="14" class="el-input__icon" icon="ep:arrow-right" />
          </div>
        </div>
        <div class="server">
          <div class="desc">预约设备</div>
          <img src="@/assets/imgs/home_7.png" class="img" alt="预约设备" />
          <div class="tip">支持需方对设备按需预约</div>
          <div class="server-detai">
            <span>了解详情</span>
            <Icon :size="14" class="el-input__icon" icon="ep:arrow-right" />
          </div>
        </div>
      </div>
    </div>
    <div class="card-list digit-container">
      <div class="info digit-box">
        <div class="title-h2">
          <div>实时数据</div>
          <div class="look-all-icon">
            <span>查看全部</span>
            <Icon :size="14" class="el-input__icon" icon="ep:arrow-right" />
          </div>
        </div>
        <div class="digits">
          <div>
            <div class="num">32089台</div>
            <div class="desc">本月新增在租设备<span>128</span>台</div>
            <ElButton color="#e4393c" type="danger" round class="dig-btn"
              >在租设备</ElButton
            >
          </div>
          <div>
            <div class="num">1219条</div>
            <div class="desc">本月新增需求信息<span>56</span>条</div>
            <ElButton color="#e4393c" type="danger" round class="dig-btn"
              >需求信息</ElButton
            >
          </div>
          <div>
            <div class="num">7866单</div>
            <div class="desc">本月新增成交订单<span>128</span>单</div>
            <ElButton color="#e4393c" type="danger" round class="dig-btn"
              >已成交订单</ElButton
            >
          </div>
        </div>
      </div>
      <div class="info notice-box">
        <div class="title-h2">
          <div>通知公告</div>
          <div class="look-all-icon">
            <span>查看全部</span>
            <Icon :size="14" class="el-input__icon" icon="ep:arrow-right" />
          </div>
        </div>
        <div class="notice-info">
          <h2 class="title">
            冲击压路机为何要使用同步轴？它究竟能起什么作用？
          </h2>
          <p>助推数字化转型，临工重机新能源矿山成套设备数字化工厂项目开工</p>
          <p>峥嵘十年｜长沙：从“工程机械之都”到“智能制造之城”</p>
          <p>8月CMI指数环比微调，工程机械市场缓慢筑底</p>
          <p>8月CMI指数环比微调，工程机械市场缓慢筑底</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@list-item-width: 230px;
.home-content {
  background: #f5f5f5;
  .title-h2 {
    height: 50px;
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #666;
  }
  .navigate-list {
    display: flex;
    margin-bottom: 10px;
    position: relative;
    height: 395px;
    overflow: hidden;
    .list {
      // z-index: 2;
      // position: absolute;
      .item-box {
        background: #585858;
        width: @list-item-width;
        padding: 20px 0;
        position: absolute;
        z-index: 1;
      }
      &:hover .translate-drawer {
        transform: translateX(0);
      }
      .item {
        padding: 0 30px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        span {
          font-size: 14px;
        }
        color: #fff;
        &:hover {
          background: rgba(22, 155, 213, 1);
        }
      }
    }
    .translate-drawer {
      position: absolute;
      width: 800px;
      background: #fff;
      height: 100%;
      top: 0;
      left: @list-item-width;
      // z-index: -1;
      transition: transform 0.3s;
      transform: translateX(-100%);
      &.inter {
        transform: translateX(0);
      }
    }
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      margin-left: @list-item-width;
      .h1 {
        font-size: 36px;
        font-weight: 700;
      }
      .h4 {
        height: 48px;
        font-size: 24px;
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
      }
    }
  }
  .card-list {
    padding: 0 20px;
    .card-container {
      display: flex;
      padding: 10px 0;
      > div:not(:last-child) {
        margin-right: 20px;
      }
    }
    .server-container {
      display: flex;
      .server {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 20px;
        &:nth-child(1) {
          background: rgba(255, 248, 248, 1);
        }
        &:nth-child(2) {
          background: rgba(240, 246, 255, 1);
        }
        &:nth-child(3) {
          background: rgba(246, 255, 247, 1);
        }
        &:nth-child(4) {
          background: rgba(255, 250, 239, 1);
        }
        .desc {
          font-weight: 700;
          font-style: normal;
          font-size: 18px;
          color: #575757;
          margin-bottom: 10px;
        }
        .img {
          width: 231px;
          height: 177px;
        }
        .tip {
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #676767;
          margin: 5px 0;
        }
        .server-detai {
          font-weight: 400;
          font-style: normal;
          font-size: 12px;
          color: #999999;
          display: flex;
          align-items: center;
        }
      }
    }
    &.digit-container {
      display: flex;
      margin-bottom: 25px;
      .info {
        .title-h2 {
          display: flex;
          justify-content: space-between;
          .look-all-icon {
            font-size: 12px;
            color: #666;
            display: flex;
            align-items: center;
          }
        }
      }
      .digit-box {
        flex: 1;
        margin-right: 25px;
        .digits {
          display: flex;
          > div {
            flex: 1;
            height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            &:nth-child(1) {
              background: rgba(236, 247, 255, 1);
            }
            &:nth-child(2) {
              background: rgba(255, 245, 231, 1);
              margin: 0 20px;
            }
            &:nth-child(3) {
              background: rgba(255, 239, 239, 1);
            }
            .num {
              font-size: 28px;
              color: #e32f2f;
            }
            .desc {
              font-size: 14px;
              color: #999;
              span {
                color: #333;
              }
            }
            .dig-btn {
              width: 150px;
              :deep(span) {
                font-size: 14px;
                font-weight: normal;
              }
            }
          }
        }
      }
      .notice-box {
        width: 444px;
        .notice-info {
          background: #fff;
          padding: 15px 20px 0px 20px;
          height: 300px;
          h2.title {
            font-weight: 700;
            color: #1d546c;
            font-size: 20px;
            margin-bottom: 25px;
          }
          p {
            font-size: 14px;
            font-weight: 400;
            color: #565656;
            &:not(:last-child) {
              margin-bottom: 25px;
            }
          }
        }
      }
    }
  }
}
</style>
