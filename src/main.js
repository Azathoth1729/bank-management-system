import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Vuex from "vuex";
import VueRouter from "vue-router";

import router from "./router";

import "vue-area-linkage/dist/index.css";
import { pca, pcaa } from "area-data";
import VueAreaLinkage from "vue-area-linkage";
import { AreaSelect } from "vue-area-linkage";
Vue.use(AreaSelect);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAreaLinkage);
Vue.config.productionTip = false;
Vue.prototype.pca = pca;
Vue.prototype.pcaa = pcaa;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
