import { createStore } from "vuex";
import api from "@/api";
import { IUserInfo } from "@/types/api/user";

export default createStore({
  state: {
    isUserLogin: false,
    userInfo: {} as IUserInfo,
  },
  getters: {
    getIsUserLogin: (state) => state.isUserLogin,
  },
  mutations: {
    SET_IS_USER_LOGIN: (state, payload: boolean) =>
      (state.isUserLogin = payload),
    SET_USER_INFO: (state, payload: IUserInfo) => (state.userInfo = payload),
  },
  actions: {
    async requestLogin(ctx, payload) {
      const res = await api.userService.requestUserInfo(payload);
      if (res) {
        ctx.commit("SET_USER_INFO", res.data);
      }
    },
  },
});
