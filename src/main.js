import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import global components
import Input from "@/components/Input";
import Button from "@/components/Button";

Vue.component("Input", Input);
Vue.component("Button", Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
