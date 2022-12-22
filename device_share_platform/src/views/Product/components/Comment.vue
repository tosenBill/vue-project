<script setup lang="ts">
import { reactive } from "vue";
import { ElAvatar, ElRate, ElImage } from "element-plus";
import AvatarDefault from "@/assets/imgs/avatar.jpg";
import DemoImg1 from "@/assets/imgs/home_1.jpg";
import DemoImg2 from "@/assets/imgs/home_2.jpg";
const commentList = reactive([
  {
    id: 1,
    circleUrl: AvatarDefault,
    rate: 4,
    imgs: [
      {
        url: DemoImg1,
      },
      {
        url: DemoImg2,
      },
      {
        url: DemoImg1,
      },
      {
        url: DemoImg2,
      },
      {
        url: DemoImg1,
      },
    ],
  },
  {
    id: 2,
    circleUrl: AvatarDefault,
    rate: undefined,
    imgs: [
      {
        url: DemoImg1,
      },
      {
        url: DemoImg1,
      },
    ],
  },
  {
    id: 3,
    circleUrl: AvatarDefault,
    rate: 2,
    imgs: [],
  },
]);
</script>

<template>
  <div class="detail-comment">
    <div class="comment-list">
      <div class="item" v-for="item in commentList" :key="item.id">
        <header class="header">
          <div class="avatar-box">
            <ElAvatar :size="50" :src="item.circleUrl" />
            <div class="name-add">
              <div class="name">Windir</div>
              <div class="address">吉林省吉林市</div>
            </div>
          </div>
          <div class="star">
            <div class="rates">
              <ElRate v-model="item.rate" disabled />
              <div class="desc">物流：速度快 服务好</div>
            </div>
          </div>
        </header>
        <div class="detail-desc">设备很好用，服务态度好</div>
        <div class="imgs">
          <ElImage
            class="img"
            :src="img.url"
            v-for="(img, index) in item.imgs"
            :key="index"
            fit="contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-comment {
  margin-top: 30px;
  .item {
    width: 800px;
    border: 1px solid rgba(228, 228, 228, 1);
    margin: 0 auto;
    padding: 30px 40px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .avatar-box {
        display: flex;
        align-items: center;
        .name-add {
          margin-left: 12px;
          .name {
            font-size: 14px;
            color: #666;
          }
          .address {
            font-size: 12px;
            color: #999;
          }
        }
      }
      .star {
        .rates {
          display: flex;
          align-items: center;
          .desc {
            font-size: 14px;
            color: #6a6a6a;
          }
        }
      }
    }
    .detail-desc {
      color: #999999;
      font-size: 14px;
      margin: 20px 0;
    }
    .imgs {
      .img {
        width: 230px;
        height: 230px;
        &:not(:last-child) {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
