import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuexStore from "./store/storeVuex";
import "@fortawesome/fontawesome-free/js/all";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
