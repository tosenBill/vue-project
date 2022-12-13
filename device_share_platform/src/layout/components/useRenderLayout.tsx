import { Header } from "@/components/Header";
import AppView from "./AppView.vue";
// import ToolHeader from "./ToolHeader.vue";
import { ElScrollbar } from "element-plus";
import { useDesign } from "@/hooks/web/useDesign";

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls("layout");

export const useRenderLayout = () => {
  const renderClassic = () => {
    return (
      <>
        <div
          class={[`${prefixCls}-content`, "top-0 h-[100%]"]}
          style="transition: all var(--transition-time-02);"
        >
          <ElScrollbar class={[`${prefixCls}-content-scrollbar`]}>
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
