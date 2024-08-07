import { createApp } from "vue";
import PrimeVue from "primevue/config";
//@ts-ignore
import Aura from "@/presets/aura"; //import preset
import App from "./App.vue";
import router from "@/router/index.js";

import "@/assets/index.css";
import "@/assets/base.css";

import "@phosphor-icons/web/regular";

import "./demos/ipc";
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura, //apply preset
});

app.use(router);

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
