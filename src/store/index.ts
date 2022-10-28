import { createStore } from "vuex";
import api from "@/api";
import { IUserInfo } from "@/types/api/user";
import { USER_GETTERS, USER_SETTERS } from "@/types/store";

export default createStore({
  state: {
    isUserLogin: false,
    userInfo: {} as IUserInfo,
  },
  getters: {
    [USER_GETTERS.GET_IS_USER_LOGIN]: (state) => state.isUserLogin,
    [USER_GETTERS.GET_USER_INFO]: (state) => state.userInfo,
  },
  mutations: {
    [USER_SETTERS.SET_IS_USER_LOGIN]: (state, payload: boolean) =>
      (state.isUserLogin = payload),
    [USER_SETTERS.SET_USER_INFO]: (state, payload: IUserInfo) =>
      (state.userInfo = payload),
  },
  actions: {
    async requestLogin(store, payload): Promise<boolean> {
      const res = await api.userService.requestUserInfo(payload);
      if (res) {
        store.commit(USER_SETTERS.SET_USER_INFO, res.data);
        store.dispatch("logIn");
        return true;
      }
      return false;
    },
    logIn(store) {
      sessionStorage.setItem("isLogin", "true");
      store.commit(USER_SETTERS.SET_IS_USER_LOGIN, true);
    },
    logOut(store) {
      sessionStorage.setItem("isLogin", "false");
      store.commit(USER_SETTERS.SET_IS_USER_LOGIN, false);
    },
  },
});
