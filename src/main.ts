import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/index.scss";
import httpServicePlugin from "@/plugins/api";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(httpServicePlugin);
app.mount("#app");
