<script setup lang="ts">
// import { reactive } from "vue";
import { ElDatePicker } from "element-plus";
import { Table } from "@/components/Table";
import DeviceInfo from "@/components/DeviceInfo/index.vue";

const props = defineProps<{
  columns: Array<any>;
  list: Array<any>;
  loading?: boolean;
  readonly?: boolean;
}>();
</script>

<template>
  <div class="device-info-ma">
    <Table
      :columns="props.columns"
      :data="props.list"
      :loading="props.loading"
      :selection="false"
      :defaultSort="{ prop: 'display_time', order: 'descending' }"
    >
      <template #device_info="data">
        <DeviceInfo
          :info="data.row.device_info"
          :img_height="'90px'"
          :img_width="'90px'"
        >
          <template #footer>
            <div class="date-expires">
              <span>选择进出场日期：</span>
              <ElDatePicker
                v-model="data.row.date_range"
                type="daterange"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                :disabled="readonly"
              />
            </div>
          </template>
        </DeviceInfo>
      </template>
    </Table>
  </div>
</template>

<style lang="less" scoped>
.device-info-ma {
  // margin-bottom: 20px;
}
.date-expires {
  margin-top: 5px;
}
</style>
