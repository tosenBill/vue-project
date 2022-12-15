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
/**
 * upload start
 */
const fileList = ref<UploadUserFile[]>([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "food2.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
]);

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (file) => {
  console.log(file);
};
/**
 * upload end
 */

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
    field: "device_num",
    component: "Input",
    label: "设备编号：",
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
      placeholder: "请输入设备编号",
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "device_type1",
    component: "Input",
    label: "设备型号：",
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
      placeholder: "请输入设备型号",
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "use_date",
    component: "DatePicker",
    label: "启用时间：",
    colProps: {
      span: 10,
    },
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
    field: "device_type2",
    component: "Input",
    label: "设备类型：",
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
      placeholder: "请输入设备类型",
      inputStyle: {
        width: "200px",
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
      inputStyle: {
        width: "200px",
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
    field: "performance",
    component: "Input",
    label: "主要性能：",
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
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "field41",
    label: "",
    component: "Divider",
  },
  {
    field: "price1",
    component: "Input",
    label: "指导价格(元/月):",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      labelWidth: "124px",
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入指导价格",
      type: "number",
      clearable: false,
      // type: 'textarea',
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "price2",
    component: "Input",
    label: "指导价格(元/台班):",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      labelWidth: "129px",
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入指导价格",
      type: "number",
      clearable: false,
      // type: 'textarea',
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "price3",
    component: "Input",
    label: "设备原值(元):",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      labelWidth: "124px",
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入设备原值",
      type: "number",
      clearable: false,
      // type: 'textarea',
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "price4",
    component: "Input",
    label: "设备净值(元):",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      labelWidth: "129px",
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入设备净值",
      type: "number",
      clearable: false,
      // type: 'textarea',
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "price5",
    component: "Input",
    label: "发动机功率(kw):",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      labelWidth: "124px",
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入发动机功率",
      type: "number",
      clearable: false,
      // type: 'textarea',
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "price6",
    component: "Input",
    label: "生成厂家:",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      labelWidth: "129px",
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      placeholder: "请输入生产厂家",
      type: "number",
      clearable: false,
      // type: 'textarea',
      inputStyle: {
        width: "200px",
      },
    },
  },
  {
    field: "use_status",
    label: "使用状态:",
    component: "Radio",
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
      options: [
        {
          label: "在用",
          value: "1",
        },
        {
          label: "闲置",
          value: "2",
        },
      ],
    },
  },
  {
    field: "tec_status",
    label: "技术状态:",
    component: "Radio",
    colProps: {
      span: 10,
    },
    formItemProps: {
      // rules: [required()],
      labelWidth: "129px",
      style: {
        // width: "100px",
      },
    },
    componentProps: {
      options: [
        {
          label: "完好",
          value: "1",
        },
        {
          label: "待修/在修",
          value: "2",
        },
        {
          label: "待报废",
          value: "3",
        },
      ],
    },
  },
  {
    field: "other_performance",
    component: "Input",
    label: "其它性能参数:",
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
      placeholder: "请输入性能参数",
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
    field: "upload",
    colProps: {
      span: 18,
    },
  },
  {
    field: "detial_info",
    component: "Input",
    label: "详细信息:",
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
      placeholder: "请输入详细信息",
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
  <ContentWrap
    class="publish-device"
    title="发布设备"
    message="新增设备经平台审批后，进入出租设备库"
  >
    <Form
      :schema="schema"
      label-width="126px"
      label-position="top"
      @register="register"
    >
      <template #upload>
        <ElUpload
          v-model:file-list="fileList"
          class="upload-file"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          list-type="picture"
        >
          <ElButton type="primary">添加图片</ElButton>
          <ElTooltip effect="dark" placement="right">
            <template #content>
              <div class="max-w-400px">
                至少一张，最多八张。设备图片格式为jpg,png,gif。文件大小不超过5M，否则将不能上传。请从前后左右四个方向以及主要工作部件，内部结构等方面展示设备。建议图片的长边不低于800像素。
              </div>
            </template>
            <Icon class="ml-5px" icon="bi:question-circle-fill" :size="14" />
          </ElTooltip>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </ElUpload>
      </template>
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
.publish-device {
  margin-top: 10px;
  .my-devider {
    background: #fff;
  }
  :deep(.province-cascader) {
    width: 222px;
  }
  :deep(.device-date-picker_custom) {
    // width: 300px;
    .el-input__wrapper {
      width: 222px;
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
