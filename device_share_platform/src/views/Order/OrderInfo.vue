<script setup lang="tsx">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElButton, ElSelect, ElCheckbox } from "element-plus";
import { ContentWrap } from "@/components/ContentWrap";
import DeviceInfoTable from "./components/DeviceInfoTable.vue";
import { svg } from "@/utils";
import type { TableColumn } from "@/types/table";
import DemoImg from "@/assets/imgs/avatar.jpg";

const { push } = useRouter();
let tableDataList = ref<any[]>([]);
const invoice = ref("");
const loading = ref(true);
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

const getTableList = async (params?: Params) => {
  setTimeout(() => {
    loading.value = false;
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
  }, 1000);
  //   const res = await getTableListApi(
  //     params || {
  //       pageIndex: 1,
  //       pageSize: 10
  //     }
  //   )
  //     .catch(() => {})
  //     .finally(() => {
  //       loading.value = false
  //     })
  //   if (res) {
  //     tableDataList.value = res.data.list
  //   }
};

getTableList();
// 提交订单
const isSubmit = ref(false);

const submitRequst = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

const submitHandle = async () => {
  isSubmit.value = true;
  try {
    const res = await submitRequst();
    if (res) {
      push("/order/complete");
    }
  } catch (error) {
    console.log("提交订单出错", error);
  } finally {
    isSubmit.value = false;
  }
};
</script>

<template>
  <ContentWrap class="order-info" title="订单信息填写">
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
    <div class="title">发票信息</div>
    <div class="check-box">
      <div class="content">
        <ElCheckbox v-model="invoice" label="我需要开发票" size="large" />
      </div>
    </div>
    <div class="title">设备信息</div>
    <DeviceInfoTable
      :columns="columns"
      :list="tableDataList"
      :loading="loading"
    />
    <div class="submit-info">
      <div class="lf">
        <div class=""><span>联系人：</span>张三</div>
        <div class=""><span>电话：</span>1300000012</div>
      </div>
      <div
        class="submit-btn"
        @click="submitHandle"
        v-loading="isSubmit"
        :element-loading-svg="svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
      >
        提交订单
      </div>
    </div>
  </ContentWrap>
</template>

<style lang="less" scoped>
.order-info {
  margin: 10px 0 20px;
  .borderInfo {
    border: 1px solid rgba(228, 228, 228, 1);
  }
  .title {
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .address-box {
    .borderInfo;
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
    .borderInfo;
    height: 90px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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
  .check-box {
    .borderInfo;
    padding-left: 30px;
    height: 90px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .content {
      width: 227px;
      height: 50px;
      background: rgba(249, 249, 249, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #f04844;
    }
  }
  // .device-info-ma {
  //   margin-bottom: 20px;
  // }
  // .date-expires {
  //   margin-top: 5px;
  // }
  .submit-info {
    .borderInfo;
    background-color: rgba(249, 249, 249, 1);
    height: 100px;
    padding: 0 50px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .lf {
      font-size: 14px;
      color: #666;
      span {
        width: 70px;
        text-align: right;
        display: inline-block;
      }
    }
    .submit-btn {
      width: 150px;
      height: 45px;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      font-size: 14px;
      color: #fff;
      background: rgba(240, 72, 68, 1);
      &:hover {
        background: #e4393c;
      }
    }
  }
}
</style>
