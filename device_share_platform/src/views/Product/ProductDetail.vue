<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { ElButton } from "element-plus";
const route = useRoute();
console.log("当前route参数为：", route.params);
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
        <div class="h2">吉林省吉林市出租履带车（设备编号:AB00001）</div>
        <div class="price-btn">
          <div class="price">月租金：<span>￥28900元/月</span></div>
          <div class="btns">
            <ElButton size="large" color="#e4393c">加入求租清单</ElButton>
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
        min-height: 200px;
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
}
</style>
