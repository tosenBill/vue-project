import { computed } from "vue";
import { useAppStoreWithOut } from "@/store/modules/app";
// import { Menu } from "@/components/Menu";
// import { TabMenu } from "@/components/TabMenu";
// import { TagsView } from "@/components/TagsView";
// import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import AppView from "./AppView.vue";
// import ToolHeader from "./ToolHeader.vue";
import { ElScrollbar } from "element-plus";
import { useDesign } from "@/hooks/web/useDesign";

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls("layout");

const appStore = useAppStoreWithOut();

const pageLoading = computed(() => appStore.getPageLoading);

// 标签页
const tagsView = computed(() => appStore.getTagsView);

// 菜单折叠
const collapse = computed(() => appStore.getCollapse);

// logo
const logo = computed(() => appStore.logo);

// 固定头部
const fixedHeader = computed(() => appStore.getFixedHeader);

// 是否是移动端
const mobile = computed(() => appStore.getMobile);

// 固定菜单
const fixedMenu = computed(() => appStore.getFixedMenu);

export const useRenderLayout = () => {
  const renderClassic = () => {
    return (
      <>
        <div
          class={[`${prefixCls}-content`, "top-0 h-[100%]"]}
          style="transition: all var(--transition-time-02);"
        >
          <ElScrollbar
            v-loading={pageLoading.value}
            class={[`${prefixCls}-content-scrollbar`]}
          >
            <Header></Header>
            <AppView></AppView>
          </ElScrollbar>
        </div>
      </>
    );
  };

  return {
    renderClassic,
  };
};
