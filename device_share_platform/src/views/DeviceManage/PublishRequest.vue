<script setup lang="ts">
import { ref, reactive, unref } from "vue";
import { ElButton, ElUpload, ElTooltip } from "element-plus";
import type { UploadProps, UploadUserFile } from "element-plus";
import areaLists from "@/utils/area.json";
import { ContentWrap } from "@/components/ContentWrap";
import { Form } from "@/components/FormCommon";
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

      try {
        console.log("getFormData", formData);
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
      // rules: [required()],
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入设备名称",
      class: "input-custome-class",
      inputStyle: {
        // width: "300px",
      },
    },
  },
  {
    field: "start_date",
    component: "DatePicker",
    label: "开始时间：",
    colProps: {
      span: 10,
    },
    componentProps: {
      type: "date",
      placeholder: "请选择开始时间",
      // cellClassName: () => "device-date-picker_custom",
      class: "device-date-picker_custom",
      // style: {
      //   width: "300px",
      // },
      // format:
    },
  },
  {
    field: "end_date",
    component: "DatePicker",
    label: "结束时间：",
    colProps: {
      span: 10,
    },
    componentProps: {
      type: "date",
      placeholder: "请选择结束时间",
      // cellClassName: () => "device-date-picker_custom",
      class: "device-date-picker_custom",
      // style: {
      //   width: "300px",
      // },
      // format:
    },
  },
  {
    field: "device_type",
    component: "Input",
    label: "设备类型：",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入设备类型",
      class: "input-custome-class",
      inputStyle: {
        // width: "200px",
      },
    },
  },
  {
    field: "device_num",
    component: "Input",
    label: "设备数量：",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      type: "number",
      placeholder: "请输入设备类型",
      class: "input-custome-class",
      inputStyle: {
        // width: "200px",
      },
    },
  },
  {
    field: "performance",
    component: "Input",
    label: "主要性能",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入主要性能",
      class: "input-custome-class",
      inputStyle: {
        // width: "200px",
      },
    },
  },
  {
    field: "device_type",
    component: "Input",
    label: "需求设备天数：",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入数字",
      type: "number",
      class: "input-custome-class",
      inputStyle: {
        // width: "200px",
      },
    },
  },
  {
    field: "expect_price",
    component: "Input",
    label: "期望求租价格：",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入期望价格",
      class: "input-custome-class",
      inputStyle: {
        // width: "200px",
      },
    },
  },
  {
    field: "project",
    component: "Input",
    label: "所在项目：",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入所在项目",
      class: "input-custome-class",
      inputStyle: {
        // width: "200px",
      },
    },
  },
  {
    field: "device_category",
    label: "设备分类：",
    component: "Radio",
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
      options: [
        {
          label: "大型机械",
          value: "1",
        },
        {
          label: "其它机械",
          value: "2",
        },
      ],
    },
  },
  {
    field: "description",
    component: "Input",
    label: "描述:",
    colProps: {
      span: 18,
    },
    formItemProps: {
      // rules: [required()],
      labelWidth: "129px",
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder:
        "请对设备的技术参数、设备状况、提供的配套辅件、服务项目、服务商实力进行说明",
      clearable: false,
      type: "textarea",
      maxlength: "300",
      showWordLimit: true,
      rows: "6",
      autoSize: { minRows: "2", maxRows: "8" },
      // inputStyle: {
      //   width: "200px",
      // },
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
  <ContentWrap class="publish-requst" title="发布需求">
    <Form
      :schema="schema"
      label-width="126px"
      label-position="top"
      @register="register"
    >
      <template #submit>
        <div class="submit-btn">
          <ElButton
            :loading="loading"
            type="primary"
            class="w-[20%]"
            @click="submitHandle"
          >
            提交
          </ElButton>
        </div>
      </template>
    </Form>
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
  </ContentWrap>
</template>

<style lang="less" scoped>
.publish-requst {
  margin-top: 10px;
  .my-devider {
    background: #fff;
  }
  :deep(.input-custome-class) {
    // .el-input__wrapper {
    width: 300px;
    // }
  }
  :deep(.province-cascader) {
    width: 300px;
  }
  :deep(.device-date-picker_custom) {
    // width: 300px;
    .el-input__wrapper {
      width: 300px;
    }
  }
  .title {
    color: @active-word-color;
  }
  .upload-file {
    width: 400px;
  }
  .submit-btn {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>
