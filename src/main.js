// src/main.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const appinit = _ =>
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");

if (window.cordova) document.addEventListener("deviceready", appinit);
else appinit();
