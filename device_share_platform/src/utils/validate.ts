import { useAppStoreWithOut } from "@/store/modules/app";
import { useCache } from "@/hooks/web/useCache";

const appStore = useAppStoreWithOut();
const { wsCache } = useCache();

export const isLogin = () => {
  const userInfo = wsCache.get(appStore.getUserInfo);
  return !!userInfo?.username;
};
