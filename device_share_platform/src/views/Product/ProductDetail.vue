<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElButton, ElBadge } from "element-plus";
import Detail from "./components/Detail.vue";
import Comment from "./components/Comment.vue";
import Plan from "./components/Plan.vue";
import Nearby from "./components/Nearby.vue";

import { useOrderStore } from "@/store/modules/order";

const route = useRoute();
const { push } = useRouter();
const orderStore = useOrderStore();
const cartCount = computed(() => orderStore.getCartCount);
const tabsList = [
  { title: "设备详情", desc: "detail" },
  { title: "设备评价", desc: "comment" },
  { title: "使用计划", desc: "plan" },
];
const curTab = ref(tabsList[2].desc);
const tabClickHandle = (tab) => {
  curTab.value = tab.desc;
};
const curComp = computed(() => {
  if (curTab.value === "detail") {
    return Detail;
  } else if (curTab.value === "comment") {
    return Comment;
  } else {
    return Plan;
  }
});
console.log("当前route参数为：", route.params);
// 加入购物车
const addCartHandle = () => {
  orderStore.addItemToCart({ id: route.params.id });
  orderStore.setCartCount(1);
  console.log();
  push("/order/cart");
};
</script>

<template>
  <div class="product-detail">
    <div class="base-info">
      <div class="big-imgs">
        <img src="@/assets/imgs/home_1.jpg" alt="" />
        <div class="img-list">
          <img src="@/assets/imgs/home_1.jpg" alt="" />
          <img src="@/assets/imgs/home_2.jpg" alt="" />
          <img src="@/assets/imgs/home_3.png" alt="" />
          <img src="@/assets/imgs/home_4.png" alt="" />
          <img src="@/assets/imgs/home_5.png" alt="" />
        </div>
      </div>
      <div class="info">
        <div class="h2">
          吉林省吉林市出租履带车（设备编号:{{ route.params.id }}）
        </div>
        <div class="price-btn">
          <div class="price">月租金：<span>￥28900元/月</span></div>
          <div class="btns">
            <ElBadge :value="cartCount" :max="99" class="item">
              <ElButton size="large" color="#e4393c" @click="addCartHandle"
                >加入求租清单</ElButton
              >
            </ElBadge>

            <ElButton size="large" type="primary">设备预约</ElButton>
          </div>
        </div>
        <div class="guige">
          <p>
            <span class="label">设备规格：</span>
            <span class="ctx">操作重量：7吨 铲斗容量：0.3立方米</span>
          </p>
          <p>
            <span class="label">设备位置：</span>
            <span class="ctx">吉林省吉林市</span>
          </p>
          <p>
            <span class="label">出租单位：</span>
            <span class="ctx">北京市大千设备工程有限公司</span>
          </p>
          <p>
            <span class="label">设备浏览：</span>
            <span class="ctx">22123次</span>
          </p>
          <p>
            <span class="label">联系人：</span>
            <span class="ctx">张三 1301312211012</span>
          </p>
        </div>
        <div class="insurance">
          <div>保险截止日期：2022年9月1日</div>
          <div>证照截止日期: 2023年12月31日</div>
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="tabs">
        <div
          v-for="tab in tabsList"
          :key="tab.desc"
          :class="[curTab === tab.desc && 'active', 'tab']"
          @click="tabClickHandle(tab)"
        >
          {{ tab.title }}<i></i>
        </div>
      </div>

      <component :is="curComp" />
    </div>
  </div>
  <div class="nearby">
    <div class="title">附近设备</div>
    <Nearby />
  </div>
</template>

<style lang="less" scoped>
.product-detail {
  padding: 20px 30px;
  background: #fff;
  .base-info {
    display: flex;
    .big-imgs {
      display: flex;
      > img {
        width: 430px;
        min-height: 440px;
        border: 2px solid transparent;
      }
    }
    .img-list {
      > img {
        width: 84px;
        height: 84px;
        border: 2px solid transparent;
        &:hover {
          border-color: #e4393c;
        }
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }
    .info {
      flex: 1;
      margin-left: 40px;
      .h2 {
        font-size: 28px;
        color: #333;
      }
      .price-btn {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        .price {
          color: #767676;
          font-size: 22px;
          span {
            color: #e4393c;
          }
        }
      }
      .guige {
        background: rgba(246, 246, 246, 1);
        padding: 10px;
        p {
          padding: 10px 0;
          .label {
            font-size: 16px;
            color: #666666;
            width: 80px;
            text-align: right;
            display: inline-block;
          }
          .ctx {
            font-size: 16px;
            color: #999999;
          }
        }
      }
      .insurance {
        background: rgba(246, 246, 246, 1);
        padding: 10px;
        margin-top: 10px;
        > div {
          font-size: 16px;
          color: #666666;
          line-height: 45px;
        }
      }
    }
  }
  .tabs {
    background-color: rgba(245, 245, 245, 1);
    display: flex;
    margin-top: 10px;
    .tab {
      width: 150px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: rgba(249, 249, 249, 1);
      border: 1px solid rgba(228, 228, 228, 1);
      display: flex;
      margin-top: 10px;
      cursor: pointer;
      &:nth-child(2) {
        border-left: none;
        border-right: none;
      }
      i {
        display: inline-block;
        width: 100%;
        height: 5px;
        position: absolute;
        background: transparent;
        top: 0;
      }
      &.active {
        background: #fff;
        i {
          background: @text-blue;
        }
      }
    }
  }
}
.nearby {
  .title {
    height: 50px;
    color: #666;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    background: #fff;
    margin-top: 10px;
    padding-left: 10px;
  }
}
</style>
