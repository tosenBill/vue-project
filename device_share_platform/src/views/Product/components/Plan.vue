<script setup lang="ts">
import { ElCalendar } from "element-plus";
</script>

<template>
  <div class="detail-plan">
    <div class="calender-item">
      <ElCalendar :range="[new Date(2022, 12, 2), new Date(2022, 12, 24)]">
        <template #header="date"> {{ date.date }} </template>
      </ElCalendar>
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-plan {
  .calender-item {
    width: 400px;
    // height: 300px;
  }
}
</style>
