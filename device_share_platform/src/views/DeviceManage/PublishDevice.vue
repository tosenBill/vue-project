<script setup lang="ts">
import { ref, reactive, unref } from "vue";
import { ElCascader, ElDivider, ElButton } from "element-plus";
import areaLists from "@/utils/area.json";
import { ContentWrap } from "@/components/ContentWrap";
import Form from "./components/Form.vue";
import { useValidator } from "@/hooks/web/useValidator";
import { useForm } from "@/hooks/web/useForm";

import type { FormSchema } from "@/types/form";
const { required } = useValidator();

const loading = ref(false);

// const areacCscaderRef = ref();

const { register, elFormRef, methods } = useForm();

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
const cascaderClear = () => {
  console.log("清楚了");
};

const submitHandle = async () => {
  const formRef = unref(elFormRef);
  await formRef?.validate(async (isValid) => {
    if (isValid) {
      loading.value = true;
      const { getFormData } = methods;
      const formData = await getFormData<any>();
      console.log("getFormData", formData);

      try {
        // const res = await loginApi(formData)
        // if (res) {
        //   wsCache.set(appStore.getUserInfo, res.data)
        //   // 是否使用动态路由
        //   if (appStore.getDynamicRouter) {
        //     getRole()
        //   } else {
        //     await permissionStore.generateRoutes('none').catch(() => {})
        //     permissionStore.getAddRouters.forEach((route) => {
        //       addRoute(route as RouteRecordRaw) // 动态添加可访问路由表
        //     })
        //     permissionStore.setIsAddRouters(true)
        //     push({ path: redirect.value || permissionStore.addRouters[0].path })
        //   }
        // }
      } finally {
        loading.value = false;
      }
    }
  });
};

const schema = reactive<FormSchema[]>([
  {
    field: "area",
    component: "Cascader",
    label: "所在区域：",
    componentProps: {
      options: areaLists,
      class: "province-cascader",
      placeholder: "省/市/区",
      onChange: cascaderChange,
      // clear: cascaderClear, // 无效？
    },
    colProps: {
      span: 10,
    },
  },
  {
    field: "device_name",
    component: "Input",
    label: "设备名称：",
    colProps: {
      span: 10,
    },
    formItemProps: {
      rules: [required()],
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入设备名称",
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "use_date",
    component: "DatePicker",
    label: "启用时间：",
    componentProps: {
      type: "date",
      placeholder: "请选择时间",
      // cellClassName: () => "device-date-picker_custom",
      class: "device-date-picker_custom",
      // style: {
      //   width: "300px",
      // },
      // format:
    },
  },
  {
    field: "submit",
    colProps: {
      span: 24,
    },
  },
]);
</script>

<template>
  <ContentWrap
    class="publish-device"
    title="发布设备"
    message="新增设备经平台审批后，进入出租设备库"
  >
    <Form
      :schema="schema"
      label-width="100px"
      label-position="right"
      @register="register"
    >
      <template #submit>
        <ElButton
          :loading="loading"
          type="primary"
          class="w-[20%]"
          @click="submitHandle"
        >
          提交
        </ElButton>
      </template>
    </Form>
    <div>
      <!-- <ElCascader
        ref="cascaderRef"
        v-model="cascaderY"
        placeholder="省/市/区"
        :options="areaLists"
        filterable
        @change="cascaderChange"
        @clear="cascaderClear"
        clearable
        class="province-cascader"
      ></ElCascader> -->
    </div>
  </ContentWrap>
</template>

<style lang="less" scoped>
.publish-device {
  margin-top: 10px;
  .my-devider {
    background: #fff;
  }
  :deep(.province-cascader) {
    width: 200px;
  }
  :deep(.device-date-picker_custom) {
    // width: 300px;
    .el-input__wrapper {
      width: 200px;
    }
  }
  .title {
    color: @active-word-color;
  }
}
</style>
