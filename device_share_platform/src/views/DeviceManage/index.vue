<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import { ContentWrap } from "@/components/ContentWrap";
import areaLists from "@/utils/area.json";
import ProdItem from "./components/ProdItem.vue";
import { useRouter } from "vue-router";

import {
  ElRadioGroup,
  ElRadio,
  ElRadioButton,
  ElDivider,
  ElButton,
  ElCascader,
  ElCheckbox,
  ElPagination,
  ElRow,
  ElCol,
} from "element-plus";

const { push } = useRouter();

const companyList = ref([
  { label: "不限", value: "0" },
  { label: "管道局工程公司", value: "1" },
  { label: "工程建设公司", value: "2" },
  { label: "寰球工程公司", value: "3" },
  { label: "昆仑工程公司", value: "4" },
  { label: "项目管理公司", value: "5" },
]);
const firmList = ref([
  { label: "不限", value: "0" },
  { label: "徐工有限", value: "1" },
  { label: "三一重工", value: "2" },
  { label: "小松中国", value: "3" },
  { label: "山河智能", value: "4" },
]);
const radioList = ref([
  { label: "挖掘机", value: "1" },
  { label: "土方机械", value: "2" },
  { label: "工业起重机械", value: "3" },
  { label: "机动工业车辆", value: "4" },
  { label: "动力设备", value: "5" },
  { label: "压实机械", value: "6" },
  { label: "路桥机械", value: "7" },
  { label: "混凝土机械", value: "8" },
]);
const rentList = ref([
  { label: "5千元以下", id: "1" },
  { label: "5千元—1万元", id: "2" },
  { label: "1万元—5万元", id: "3" },
  { label: "5万元—10万元", id: "4" },
  { label: "10万元以上", id: "5" },
]);
const statusList = ref([
  { label: "不限", value: "0" },
  { label: "在用", value: "2" },
  { label: "闲置", value: "3" },
  { label: "在修", value: "4" },
]);
const sortList = ref([
  { label: "默认排序", value: "0" },
  { label: "发布时间", value: "2" },
  { label: "距离", value: "3" },
  { label: "价格", value: "4" },
  { label: "信用", value: "5" },
]);
const currentPage = ref(2);
const prodList = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
]);
const filterRef = reactive({
  type: "2",
  company: "2",
  firm: "1",
  rent: "", // 租金区间：
  provice: "",
  status: "0",
  sort: "0",
  waitDevice: "0", // 显示待租设备
});
// 省市区
const cascaderRef = ref(null);
const cascaderChange = (cur: any) => {
  console.log("cascaderChange", cur);
  // const checkLabels = areacCscaderRef.value.getCheckedNodes();
  // var labelList: any[] = [];
  // checkLabels.forEach(function (item: { hasChildren: any; label: any }) {
  //   if (!item.hasChildren) {
  //     labelList.push(item.label);
  //   }
  // });
  // console.log("cascaderChange-cur", cur, labelList);
};
const prodItemClick = (item) => {
  console.log(item);
  push({
    name: `ProductDetail`,
    params: {
      id: item.id,
    },
  });
};
watch(filterRef, (val) => {
  console.log("filterRef表单变化了", val);
});
onMounted(() => {
  console.log("进入了商品列表页，加载列表...");
});
// 设备类型change
const typeClick = (val: string, key: string) => {
  console.log("key", key);
  filterRef[key] = filterRef[key] === val ? "" : val;

  console.log(filterRef.type);
};
const cascaderClear = () => {
  console.log("清楚了");
};
const currentChangeHandle = (val: number) => {
  console.log("currentChangeHandle", val);
};
</script>

<template>
  <ContentWrap class="device-libero" title="">
    <div class="filter-container">
      <div class="">筛选条件</div>
      <div class="item">
        <div class="label">设备类型：</div>
        <ElRadioGroup v-model="filterRef.type">
          <ElRadio
            @click.prevent="typeClick(radio.value, 'type')"
            :label="radio.value"
            v-for="(radio, i) in radioList"
            :key="i"
            >{{ radio.label }}</ElRadio
          >
        </ElRadioGroup>
        <div class="more">更多</div>
      </div>
      <ElDivider style="margin: 10px 0" />
      <div class="item">
        <div class="label">所属企业：</div>
        <ElRadioGroup v-model="filterRef.company">
          <ElRadio
            @click.prevent="typeClick(radio.value, 'company')"
            :label="radio.value"
            v-for="(radio, i) in companyList"
            :key="i"
            >{{ radio.label }}</ElRadio
          >
        </ElRadioGroup>
      </div>
      <ElDivider style="margin: 10px 0" />
      <div class="item">
        <div class="label">外部厂商：</div>
        <ElRadioGroup v-model="filterRef.firm">
          <ElRadio
            :label="radio.value"
            @click.prevent="typeClick(radio.value, 'firm')"
            v-for="(radio, i) in firmList"
            :key="i"
            >{{ radio.label }}</ElRadio
          >
        </ElRadioGroup>
      </div>
      <ElDivider style="margin: 10px 0" />
      <div class="item">
        <div class="label">租金区间：</div>
        <ElButton
          v-for="rent in rentList"
          :key="rent.id"
          size="small"
          :type="filterRef.rent === rent.id ? 'primary' : ''"
          @click.prevent="typeClick(rent.id, 'rent')"
          plain
          >{{ rent.label }}</ElButton
        >
        <!-- <div class="rent-item" ></div> -->
      </div>
      <ElDivider style="margin: 10px 0" />
      <div class="item">
        <div class="label">所在地区：</div>
        <ElCascader
          ref="cascaderRef"
          v-model="filterRef.provice"
          placeholder="省/市/区"
          :options="areaLists"
          filterable
          @change="cascaderChange"
          @clear="cascaderClear"
          clearable
          class="province-cascader"
        ></ElCascader>
        <!-- <div class="rent-item" ></div> -->
      </div>
      <div class="item">
        <div class="label">设备状态：</div>
        <ElRadioGroup v-model="filterRef.status">
          <ElRadio
            :label="radio.value"
            @click.prevent="typeClick(radio.value, 'status')"
            v-for="(radio, i) in statusList"
            :key="i"
            >{{ radio.label }}</ElRadio
          >
        </ElRadioGroup>
      </div>
    </div>
  </ContentWrap>
  <ContentWrap class="device-list" title="">
    <div class="search">
      <div class="ra-lf">
        <div class="item">
          <ElRadioGroup v-model="filterRef.sort" fill="#e4393c">
            <ElRadioButton
              :label="radio.value"
              v-for="(radio, i) in sortList"
              @click.prevent="typeClick(radio.value, 'sort')"
              :key="i"
              >{{ radio.label }}</ElRadioButton
            >
          </ElRadioGroup>
          <ElCheckbox
            style="margin-left: 20px"
            v-model="filterRef.waitDevice"
            true-label="1"
            false-label="0"
            >仅显待租设备</ElCheckbox
          >
          <!-- <div class="more">更多</div> -->
        </div>
      </div>
    </div>
    <div class="product-container">
      <div class="list">
        <ElRow class="prod-item" :gutter="50">
          <ElCol
            :span="6"
            class="item-col"
            v-for="(item, index) in prodList"
            :key="index"
            @click="prodItemClick(item)"
          >
            <ProdItem :prodItem="item" />
          </ElCol>
        </ElRow>
      </div>
      <div class="paginate">
        <ElPagination
          v-model:current-page="currentPage"
          :total="prodList.length"
          :page-size="2"
          layout="prev, pager, next"
          background
          @current-change="currentChangeHandle"
        />
      </div>
    </div>
  </ContentWrap>
</template>

<style lang="less" scoped>
.device-libero {
  margin-top: 10px;
  .item {
    display: flex;
    align-items: center;
    &:last-child {
      margin-top: 15px;
    }
    .radio-item {
      width: 100px;
    }
    .label {
      font-size: 12px;
      color: #999999;
    }
    .more {
      margin-left: auto;
    }
  }
}
.device-list {
  margin-top: 10px;
  .search {
    .ra-lf {
      .item {
        display: flex;
        align-items: center;
      }
    }
  }
  .product-container {
    .list {
      margin: 20px 0;
      .prod-item {
        .item-col {
          margin-bottom: 15px;
        }
      }
    }
    .paginate {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
