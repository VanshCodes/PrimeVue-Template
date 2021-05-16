import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/global.css";
import primeVueInit from "@/helper/prime.helper.js";
const app = createApp(App);

primeVueInit(app);

app.mount("#app");
