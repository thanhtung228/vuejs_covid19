import Vue from "vue";
import moment from "moment";
import VueMomentJS from "vue-momentjs";
import "@/styles/index.scss"; // global css

import App from "./App.vue";
import router from "./router";
import store from "./store";

if (process.env.NODE_ENV === "production") {
  console.log = () => { };
}

Vue.config.productionTip = false;
Vue.use(VueMomentJS, moment);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
