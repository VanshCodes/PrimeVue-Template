import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/global.css";
import primeVueInit from "@/helper/prime.helper.js";
import router from './router'
const app = createApp(App).use(router).use(router);

primeVueInit(app);

app.mount("#app");
