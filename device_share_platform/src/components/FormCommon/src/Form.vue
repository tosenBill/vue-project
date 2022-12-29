<script setup lang="tsx">
import {
  ref,
  unref,
  computed,
  defineProps,
  useSlots,
  defineComponent,
  onMounted,
} from "vue";
// import type { PropType } from "vue";
import { useDesign } from "@/hooks/web/useDesign";
import { componentMap } from "./componentMap";
import { getSlot } from "@/utils/tsxHelper";

import { ElForm, ElRow, ElTooltip, ElFormItem, ElCol } from "element-plus";
// import type { PropsDefined } from "./form";
import { useForm } from "@/hooks/web/useForm";

import { Icon } from "@/components/Icon";

import {
  setTextPlaceholder,
  setComponentProps,
  setItemComponentSlots,
  setFormItemSlots,
  setGridProp,
} from "./helper";

import { useRenderSelect } from "./components/useRenderSelect";
import { useRenderRadio } from "./components/useRenderRadio";
import { useRenderCheckbox } from "./components/useRenderCheckbox";

import type { FormSchema, FormSetPropsType } from "@/types/form";

const { getPrefixCls } = useDesign();
const prefixCls = getPrefixCls("form");

const props = withDefaults(
  defineProps<{
    // 生成Form的布局结构数组
    schema: any;
    // 是否需要栅格布局
    isCol?: boolean;
    // 是否自动设置placeholder
    autoSetPlaceholder?: boolean;
    // 表单label宽度
    labelWidth?: string | number;
  }>(),
  {
    schema: [],
    isCol: true,
    autoSetPlaceholder: true,
    labelWidth: "auto",
  }
);
const slots = useSlots();
const emit = defineEmits(["register"]);

const elFormRef = ref<ComponentRef<typeof ElForm>>();
// 表单数据
const formModel = ref<Recordable>({});

onMounted(() => {
  emit("register", unref(elFormRef)?.$parent, unref(elFormRef));
});
// 对表单赋值
const setValues = (data: Recordable = {}) => {
  formModel.value = Object.assign(unref(formModel), data);
};

const mergeProps = ref<FormProps>({});

const getProps = computed(() => {
  const propsObj = { ...props };
  Object.assign(propsObj, unref(mergeProps));
  return propsObj;
});
// console.log(getProps);
defineExpose({
  formModel,
});
// 过滤传入Form组件的属性
const getFormBindValue = computed(() => {
  // 避免在标签上出现多余的属性
  const delKeys = [
    "schema",
    "isCol",
    "autoSetPlaceholder",
    "isCustom",
    "model",
  ];
  const props = { ...unref(getProps) };
  for (const key in props) {
    if (delKeys.indexOf(key) !== -1) {
      delete props[key];
    }
  }
  return props;
});
const myprops = { ...unref(getFormBindValue) };
// 渲染options
const renderOptions = (item: FormSchema) => {
  switch (item.component) {
    case "Select":
      const { renderSelectOptions } = useRenderSelect(slots);
      return renderSelectOptions(item);
    case "Radio":
    case "RadioButton":
      const { renderRadioOptions } = useRenderRadio();
      return renderRadioOptions(item);
    case "Checkbox":
    case "CheckboxButton":
      const { renderCheckboxOptions } = useRenderCheckbox();
      return renderCheckboxOptions(item);
    default:
      break;
  }
};
// 渲染包裹标签，是否使用栅格布局
const renderWrap = () => {
  const { isCol } = unref(getProps);
  const content = isCol ? (
    <ElRow gutter={20}>{renderFormItemWrap()}</ElRow>
  ) : (
    renderFormItemWrap()
  );
  return content;
};

// 是否要渲染el-col
const renderFormItemWrap = () => {
  // hidden属性表示隐藏，不做渲染
  const { schema = [], isCol } = unref(getProps);

  return schema
    .filter((v: { hidden: any }) => !v.hidden)
    .map((item: { component: string; componentProps: any; colProps: any }) => {
      // 如果是 Divider 组件，需要自己占用一行
      const isDivider = item.component === "Divider";
      const Com = componentMap["Divider"] as ReturnType<typeof defineComponent>;
      return isDivider ? (
        <Com {...{ contentPosition: "left", ...item.componentProps }}>
          {item?.label}
        </Com>
      ) : isCol ? (
        // 如果需要栅格，需要包裹 ElCol
        <ElCol {...setGridProp(item.colProps)}>{renderFormItem(item)}</ElCol>
      ) : (
        renderFormItem(item)
      );
    });
};
// 渲染formItem
const renderFormItem = (item: FormSchema) => {
  // 单独给只有options属性的组件做判断
  const notRenderOptions = ["SelectV2", "Cascader", "Transfer"];
  const slotsMap: Recordable = {
    ...setItemComponentSlots(slots, item?.componentProps?.slots, item.field),
  };
  if (
    item?.component !== "SelectV2" &&
    item?.component !== "Cascader" &&
    item?.componentProps?.options
  ) {
    slotsMap.default = () => renderOptions(item);
  }

  const formItemSlots: Recordable = setFormItemSlots(slots, item.field);
  // 如果有 labelMessage，自动使用插槽渲染
  if (item?.labelMessage) {
    formItemSlots.label = () => {
      return (
        <>
          <span>{item.label}</span>
          <ElTooltip placement="right" raw-content>
            {{
              content: () => <span v-html={item.labelMessage}></span>,
              default: () => (
                <Icon
                  icon="ep:warning"
                  size={16}
                  color="var(--el-color-primary)"
                  class="ml-2px relative top-1px"
                ></Icon>
              ),
            }}
          </ElTooltip>
        </>
      );
    };
  }
  return (
    <ElFormItem
      {...(item.formItemProps || {})}
      prop={item.field}
      label={item.label || ""}
    >
      {{
        ...formItemSlots,
        default: () => {
          const Com = componentMap[item.component as string] as ReturnType<
            typeof defineComponent
          >;

          const { autoSetPlaceholder } = unref(getProps);

          return slots[item.field] ? (
            getSlot(slots, item.field, formModel.value)
          ) : (
            <Com
              vModel={formModel.value[item.field]}
              {...(autoSetPlaceholder && setTextPlaceholder(item))}
              {...setComponentProps(item)}
              style={item.componentProps?.style}
              {...(notRenderOptions.includes(item?.component as string) &&
              item?.componentProps?.options
                ? { options: item?.componentProps?.options || [] }
                : {})}
            >
              {{ ...slotsMap }}
            </Com>
          );
        },
      }}
    </ElFormItem>
  );
};
</script>

<template>
  <div class="form-container">
    <ElForm
      ref="elFormRef"
      :model="formModel"
      :class="prefixCls"
      :label-width="props.labelWidth"
    >
      <renderWrap />
    </ElForm>
  </div>
</template>

<style lang="less" scoped>
.@{elNamespace}-form.@{namespace}-form .@{elNamespace}-row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
</style>
