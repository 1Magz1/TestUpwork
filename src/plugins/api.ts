import axios from "axios";
import api, { IApiService, setHTTPClientInstance } from "@/api";

const httpServicePlugin = {
  install(Vue: any) {
    const axiosInstance = axios.create({
      baseURL: "https://e4514330-641e-4461-9363-abecdca5acdd.mock.pstmn.io",
    });
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
