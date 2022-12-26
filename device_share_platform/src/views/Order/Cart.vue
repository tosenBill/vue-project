<script setup lang="ts">
import { ElButton, ElCheckbox } from "element-plus";
import { useRouter } from "vue-router";
import { ref, unref } from "vue";
import { Table } from "@/components/Table";
import type { TableColumn } from "@/types/table";
// import type { TableColumn, TableSlotDefault } from "@/types/table";
import DemoImg from "@/assets/imgs/avatar.jpg";
import DeviceInfo from "@/components/DeviceInfo/index.vue";
import { resolve } from "path";

let tableDataList = ref<any[]>([]);
const { push } = useRouter();
const columns: TableColumn[] = [
  {
    field: "detail_list",
    label: "求租清单",
    width: 420,
    headerAlign: "center",
  },
  {
    field: "price",
    label: "单价",
  },
  {
    field: "address",
    label: "设备所在地",
    sortable: true,
  },
  {
    field: "end_time",
    label: "保险截至日期",
    sortable: true,
  },
  {
    field: "n_time",
    label: "证件截至日期",
    sortable: true,
  },
  {
    field: "action",
    label: "操作",
  },
];

const getTableList = async (params?: Params) => {
  setTimeout(() => {
    loading.value = false;
    tableDataList.value = [
      {
        id: 1,
        detail_list: {
          img: DemoImg,
          name: "出租80式履带叉（设备编号:AB00001）",
          weight: "90",
          volume: "80",
          complay: "A公司设备租赁分公司",
          contact: "张三",
          tel: "1300827123",
        },
        price: "￥9999",
        address: "北京市",
        end_time: "2022年12月31日",
        n_time: "2023年5月31日",
      },
      {
        id: 2,
        detail_list: {
          img: DemoImg,
          name: "出租80式履带叉（设备编号:AB00001）",
          weight: "90",
          volume: "80",
          complay: "A公司设备租赁分公司",
          contact: "张三",
          tel: "1300827123",
        },
        price: "￥9999",
        address: "北京市",
        end_time: "2022年12月31日",
        n_time: "2023年5月31日",
      },
      {
        id: 3,
        detail_list: {
          img: DemoImg,
          name: "出租80式履带叉（设备编号:AB00001）",
          weight: "90",
          volume: "80",
          complay: "A公司设备租赁分公司",
          contact: "张三",
          tel: "1300827123",
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

const actionFn = (data: any) => {
  tableDataList.value = unref(tableDataList).filter((item) => {
    return data.row.id !== item.id;
  });
  // for (let [index, value] of unref(tableDataList).entries()) {
  //   if (data.row.id === value.id) {
  //     console.log("item", index, value);
  //     tableDataList.value.splice(index, 1);
  //   }
  // }
};

const loading = ref(true);
const isSubmit = ref(false);

const submitRequst = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

const confirmHandle = async () => {
  isSubmit.value = true;
  try {
    const res = await submitRequst();
    if (res) {
      push("/order/orderInfo/1");
    }
  } catch (error) {
    console.log("提交订单出错", error);
  } finally {
    isSubmit.value = false;
  }
};
</script>

<template>
  <div class="cart-container">
    <header class="title">求租清单</header>
    <Table
      :columns="columns"
      :data="tableDataList"
      :loading="loading"
      :defaultSort="{ prop: 'display_time', order: 'descending' }"
    >
      <template #detail_list="data">
        <DeviceInfo :info="data.row.detail_list" />
      </template>
      <template #action="data">
        <ElButton
          type="danger"
          size="small"
          @click="actionFn(data as TableSlotDefault)"
        >
          删除
        </ElButton>
      </template>
    </Table>
    <div class="footer-opt" v-loading="isSubmit">
      <div class="lf">
        <ElCheckbox />
        <span class="qx">全选</span>
        <span class="tip">删除选中商品</span>
      </div>
      <div class="rt" @click="confirmHandle">确认求租设备</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cart-container {
  .title {
    height: 50px;
    display: flex;
    align-items: center;
    color: #999;
  }
  .footer-opt {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    background: #fff;
    margin: 20px 0;
    .lf {
      padding-left: 15px;
      display: flex;
      align-items: center;
      .qx {
        color: #999999;
        font-size: 14px;
        margin: 0 15px;
      }
      .tip {
        font-size: 14px;
        color: #666666;
        &:hover {
          cursor: pointer;
          color: #e4393c;
        }
      }
    }
    .rt {
      width: 200px;
      height: 80px;
      background: rgba(240, 72, 68, 1);
      font-size: 18px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: #e4393c;
      }
    }
  }
}
</style>
