import axios from "axios";
import api, { IApiService, setHTTPClientInstance } from "@/api";

const httpServicePlugin = {
  install(Vue: any) {
    const axiosInstance = axios.create();
    setHTTPClientInstance({ ...axiosInstance });
    Vue.config.globalProperties.$api = api;
  },
};

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $api: IApiService;
  }
}

export default httpServicePlugin;
