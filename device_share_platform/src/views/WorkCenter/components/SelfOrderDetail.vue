<script setup lang="ts">
import { ref } from "vue";
import {
  ElCard,
  ElButton,
  ElSteps,
  ElStep,
  ElSelect,
  ElMessageBox,
} from "element-plus";
import type { TableColumn } from "@/types/table";
import DeviceInfoTable from "@/views/Order/components/DeviceInfoTable.vue";
import DemoImg from "@/assets/imgs/avatar.jpg";

let tableDataList = ref<any[]>([]);

const columns: TableColumn[] = [
  {
    field: "device_info",
    label: "设备信息",
    width: 480,
    headerAlign: "center",
  },
  {
    field: "price",
    label: "预估金额",
  },
  {
    field: "address",
    label: "设备所在地",
  },
  {
    field: "end_time",
    label: "证件截至日期",
  },
  {
    field: "n_time",
    label: "保险截至日期",
  },
];

tableDataList.value = [
  {
    id: 1,
    device_info: {
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
    id: 2,
    device_info: {
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
    id: 3,
    device_info: {
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
];
const statusHandle = () => {
  ElMessageBox.confirm(
    "系统按照设备出租单位自动拆分订单页面将跳转到平台协调",
    "是否确认响应？",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      center: true,
      // type: "warning",
    }
  )
    .then(async () => {
      // const res = await loginOutApi().catch(() => {});
      // if (res) {
      //   wsCache.clear();
      //   resetRouter(); // 重置静态路由表
      //   replace("/login");
      // }
    })
    .catch(() => {});
};
</script>

<template>
  <div class="self-order-detail">
    <ElCard shadow="never" class="header-card">
      <div class="header">
        <div class="desc">
          <!-- <div class=""> -->
          <Icon
            icon="mdi:clock-time-four-outline"
            size="40"
            color="var(--el-color-primary)"
          />
          <!-- </div> -->
          <div class="">需方自选求租单</div>
          <div>等待响应</div>
        </div>
        <div class="order-num">
          <div class="label">订单编号</div>
          <div class="val">62205697599</div>
        </div>
        <div class="company">
          <div class="label">需求单位</div>
          <div class="label">新疆工程公司</div>
          <div class="val">
            <span>张三：</span>
            <span>62205697599</span>
          </div>
        </div>
        <div class="opt-btn">
          <ElButton color="#e4393c" @click="statusHandle">响 应</ElButton>
        </div>
      </div>
    </ElCard>
    <ElCard shadow="never" class="section-card">
      <section class="section">
        <ElSteps :active="2">
          <ElStep title="提交订单" description="2022-11-06 17:09:35"></ElStep>
          <ElStep title="待响应"></ElStep>
          <ElStep title="协调中"></ElStep>
          <ElStep title="成交"></ElStep>
          <ElStep title="终止/完结"></ElStep>
        </ElSteps>
        <div class="tip">
          <div class="lf">
            <span class="time">2022-01-06 17:09:35 </span>
            <span>该订单类型为需方自选，请尽快响应！</span>
          </div>
          <ElButton type="primary" plain>添加响应备注</ElButton>
        </div>
        <div class="table-title">
          需求设备信息(需求单位：<span>新疆工程公司</span>)
        </div>
        <div class="borderInfo DeviceInfoTable">
          <DeviceInfoTable
            :columns="columns"
            :list="tableDataList"
            :readonly="true"
          />
        </div>
        <div class="title">项目信息</div>
        <div class="project-info">
          <div class="name">项目名称</div>
          <ElSelect class="my-select" />
        </div>
        <div class="title">发票信息</div>
        <div class="project-info invoice-info">
          <div class="info">
            <p><span>发票类型：</span> <span>设备租用</span></p>
            <p><span>发票内容：</span> <span>挖掘机</span></p>
            <p><span>发票抬头：</span> <span>中油工程管道局</span></p>
          </div>
          <div class="check-invoice">
            <ElButton type="primary" plain>添加响应备注</ElButton>
          </div>
        </div>
      </section>
    </ElCard>
  </div>
</template>

<style lang="less" scoped>
.self-order-detail {
  .borderInfo {
    border: 1px solid rgba(228, 228, 228, 1);
  }
  flex: 1;
  .header-card {
    margin-bottom: 10px;
  }
  .flex-align {
    display: flex;
    align-items: center;
  }
  .flex-v-c {
    justify-content: center;
  }
  .header {
    .flex-align;
    justify-content: space-around;
    .label {
      font-size: 16px;
      color: #999999;
    }
    .val {
      font-size: 14px;
      color: #666;
      margin-top: 5px;
    }
    .desc {
      color: var(--el-color-primary);
      .flex-align;
      flex-direction: column;
    }
    .order-num,
    .company {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .section {
    .tip {
      background-color: rgba(249, 249, 249, 1);
      border: 1px solid rgba(228, 228, 228, 1);
      height: 50px;
      .flex-align;
      justify-content: space-between;
      padding: 0 20px;
      margin: 20px 0;
      .lf {
        font-size: 12px;
        color: #666;
        .time {
          color: #999999;
          margin-right: 5px;
        }
      }
      button {
        font-weight: normal;
        color: #999;
      }
    }
    .table-title {
      font-size: 16px;
      color: #999999;
      margin-bottom: 20px;
    }
    .DeviceInfoTable {
      margin-bottom: 10px;
    }
    .title {
      color: #666;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .project-info {
      .borderInfo;
      height: 90px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding-left: 30px;
      &.invoice-info {
        height: 140px;
        justify-content: space-between;
        padding-right: 30px;
        .info {
          color: #999999;
          font-size: 14px;
          p {
            height: 32px;
          }
        }
        .check-invoice {
          button {
            font-weight: normal;
            color: #999;
          }
        }
      }
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
}
</style>
