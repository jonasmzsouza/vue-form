import { createApp } from "vue";
import { vMaska } from "maska";
import moment from "moment";
import App from "./App.vue";

const app = createApp(App);

app.directive("maska", vMaska);
app.config.globalProperties.$moment = moment;
app.config.globalProperties.$moment.locale("pt-br");
app.mount("#app");
