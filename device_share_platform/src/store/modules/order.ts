import { defineStore } from "pinia";
import { store } from "../index";
import { useCache } from "@/hooks/web/useCache";

const { wsCache } = useCache();

interface OrderState {
  cartCount: number;
  cartList: Array<any>;
}

export const useOrderStore = defineStore("store", {
  state: (): OrderState => {
    return {
      cartCount: wsCache.get("cartCount") || 0, // 购物车数量
      cartList: [],
    };
  },
  getters: {
    getCartCount(): number {
      return this.cartCount;
    },
    getCartList(): Array<any> {
      return this.cartList;
    },
  },
  actions: {
    setCartCount(cartCount: number): void {
      this.cartCount += cartCount;
      wsCache.set("cartCount", cartCount);
    },
    // 加入购物车
    addItemToCart(item: any) {
      this.cartList.push(item);
      wsCache.set("cartCount", this.cartList);
    },
    // 删除购物车里某一项
    delItemFromCart(item: any) {
      for (const [index, v] of this.cartList.entries()) {
        if (v.id === item.id) {
          this.cartList.splice(index, 1);
          break;
        }
      }
      wsCache.set("cartCount", this.cartList);
    },
    // 清空购物车
    clearCart() {
      this.cartList = [];
      wsCache.set("cartCount", this.cartList);
    },
    // setCartList(cartList: Array)
  },
});

export const useOrderStoreWithOut = () => {
  return useOrderStore(store);
};
