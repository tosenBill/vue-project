<script setup lang="ts">
// import { ElTable } from "element-plus";
import { ref } from "vue";
import { Table } from "@/components/Table";
import type { TableColumn } from "@/types/table";
// import type { TableColumn, TableSlotDefault } from "@/types/table";

let tableDataList = ref<any[]>([]);

const columns: TableColumn[] = [
  {
    field: "title",
    label: "求租清单",
  },
  {
    field: "author",
    label: "单价",
  },
  {
    field: "display_time",
    label: "设备所在地",
    sortable: true,
  },
  {
    field: "display_time",
    label: "保险截至日期",
    sortable: true,
  },
  {
    field: "display_time",
    label: "证件截至日期",
    sortable: true,
  },
  //   {
  //     field: "importance",
  //     label: t("tableDemo.importance"),
  //     formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
  //       return h(
  //         ElTag,
  //         {
  //           type:
  //             cellValue === 1
  //               ? "success"
  //               : cellValue === 2
  //               ? "warning"
  //               : "danger",
  //         },
  //         () =>
  //           cellValue === 1
  //             ? t("tableDemo.important")
  //             : cellValue === 2
  //             ? t("tableDemo.good")
  //             : t("tableDemo.commonly")
  //       );
  //     },
  //   },
  {
    field: "action",
    label: "操作",
  },
];

const getTableList = async (params?: Params) => {
  setTimeout(() => {
    loading.value = false;
    tableDataList.value = [];
  }, 3000);
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
  console.log(data);
};

const loading = ref(true);
</script>

<template>
  <div class="cart-container">
    <header class="title">求租清单</header>
    <div class="">
      <Table
        :columns="columns"
        :data="tableDataList"
        :loading="loading"
        :defaultSort="{ prop: 'display_time', order: 'descending' }"
      >
        <template #action="data">
          <ElButton type="primary" @click="actionFn(data as TableSlotDefault)">
            删除
          </ElButton>
        </template>
      </Table>
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
}
</style>
