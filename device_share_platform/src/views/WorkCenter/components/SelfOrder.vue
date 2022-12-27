<script setup lang="ts">
import { ref, watch, reactive } from "vue";
import {
  ElTabs,
  ElTabPane,
  ElEmpty,
  ElCard,
  ElButton,
  ElPagination,
} from "element-plus";
import { svg } from "@/utils";
import DemoImg from "@/assets/imgs/avatar.jpg";
import DeviceInfo from "@/components/DeviceInfo/index.vue";

const currentPage = ref(1);
const curTabsIndex = ref("0");
const loading = ref(true);
const tabpanes = [
  { label: "全部", id: 0 },
  { label: "待响应", id: 1 },
  { label: "协调中", id: 2 },
  { label: "成交", id: 3 },
  { label: "终止", id: 4 },
  { label: "撤回", id: 5 },
];
const currentChangeHandle = (val: number) => {
  console.log("currentChangeHandle", val);
};
let dataList = reactive<any[any]>({ arr: [] });
// 获取数据
const getData = async () => {
  loading.value = true;
  setTimeout(() => {
    dataList.arr = [
      {
        id: 1,
        status: 2,
        children: [
          {
            device_info: {
              id: "1-1",
              img: DemoImg,
              name: "360履带式挖掘机",
              weight: "90",
              volume: "80",
              complay: "B公司设备租赁分公司",
              contact: "张三",
              tel: "1300827123",
              date_range: "",
            },
            price: "￥9999",
            address: "北京市",
            end_time: "2022年12月31日",
            n_time: "2023年5月31日",
          },
        ],
      },
      {
        id: 2,
        status: 1,
        children: [
          {
            device_info: {
              id: "2-1",
              img: DemoImg,
              name: "出租80式履带叉（设备编号:AB00001）",
              weight: "90",
              volume: "80",
              complay: "A公司设备租赁分公司",
              contact: "张三",
              tel: "1300827123",
              date_range: "",
            },

            price: "￥9999",
            address: "北京市",
            end_time: "2022年12月31日",
            n_time: "2023年5月31日",
          },
          {
            device_info: {
              id: "2-2",
              img: DemoImg,
              name: "70履带式挖掘机",
              weight: "90",
              volume: "80",
              complay: "B公司设备租赁分公司",
              contact: "张三",
              tel: "1300827123",
              date_range: "",
            },
            status: 2,
            price: "￥9999",
            address: "北京市",
            end_time: "2022年12月31日",
            n_time: "2023年5月31日",
          },
        ],
      },
    ];
    loading.value = false;
  }, 1000);
};
watch(
  curTabsIndex,
  async (newv) => {
    console.log(newv);
    await getData();
  },
  { immediate: true }
);
// 去详情页
const emits = defineEmits(["change"]);
const goDetail = () => {
  emits("change", "SelfOrderDetailVue");
};
</script>

<template>
  <div class="self-order">
    <ElTabs
      type="border-card"
      v-model="curTabsIndex"
      v-loading="loading"
      :element-loading-svg="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
    >
      <ElTabPane :label="item.label" v-for="(item, id) in tabpanes" :key="id">
        <ElEmpty description="暂无数据" v-if="!dataList.arr.length" />
        <div class="content">
          <ElCard
            shadow="never"
            class="item"
            v-for="(item, index) in dataList.arr"
            :key="index"
            :body-style="{ padding: '0px' }"
          >
            <template #header>
              <div class="header">
                <div class="time-num">
                  <div class="time">下单时间：2022-09-08 15:02:00</div>
                  <div class="num">订单编号：62205697599</div>
                </div>
                <div class="custom-info">
                  <span>发起单位：XXXXXX单位</span>
                  <span>联系人：王丽 </span>
                  <span>联系电话：13102912222</span>
                </div>
              </div>
            </template>
            <div class="info">
              <div class="item-box">
                <div
                  class="order-item"
                  v-for="child in item.children"
                  :key="child.id"
                >
                  <div class="info-box">
                    <DeviceInfo
                      :info="child.device_info"
                      :showCompany="false"
                      :showCustom="false"
                      :img_width="'80px'"
                      :img_height="'80px'"
                    />
                  </div>
                  <div class="price">¥29921.00</div>
                </div>
              </div>
              <div class="status">
                <span v-if="item.status == 1">待响应</span>
                <span v-else>¥29434.00</span>
              </div>
              <div class="opt-btn">
                <ElButton color="#e4393c" @click="goDetail">
                  <template #default>
                    <span>详情</span>
                    <span v-if="item.status == 1">（待响应）</span>
                    <span v-else>（已响应）</span>
                  </template>
                </ElButton>
              </div>
            </div>
          </ElCard>
          <div class="paginate">
            <ElPagination
              v-model:current-page="currentPage"
              :total="tabpanes.length"
              :page-size="10"
              layout="prev, pager, next"
              background
              @current-change="currentChangeHandle"
            />
          </div>
        </div>
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<style lang="less" scoped>
.self-order {
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  flex: 1;
  .content {
    :deep(.el-card__header) {
      padding: 0;
    }
    .item {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      .header {
        background: #f9f9f9;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        .time-num {
          font-size: 12px;
          color: #666;
          display: flex;
          .time {
            margin-right: 20px;
          }
        }
        .custom-info {
          font-size: 14px;
          color: #999;
          span {
            &:not(:last-child) {
              margin-right: 10px;
            }
          }
        }
      }
      .info {
        display: flex;
        .item-box {
          flex: 1;
          .order-item {
            display: flex;
            align-items: center;
            &:not(:last-child) {
              border-bottom: 1px solid rgba(237, 237, 237, 1);
            }
            .info-box {
              flex: 1;
              padding-left: 20px;
            }
            .price {
              .flex;
              border-left: 1px solid rgba(237, 237, 237, 1);
              width: 150px;
              height: 120px;
              color: #666;
              font-size: 12px;
            }
          }
        }
        .status {
          .flex;
          border-left: 1px solid rgba(237, 237, 237, 1);
          width: 190px;
          font-size: 12px;
          color: #666666;
        }
        .opt-btn {
          .flex;
          border-left: 1px solid rgba(237, 237, 237, 1);
          width: 140px;
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
  .paginate {
    display: flex;
    justify-content: center;
  }
}
</style>
