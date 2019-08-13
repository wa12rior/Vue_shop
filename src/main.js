import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import '@fortawesome/fontawesome-free/css/all.css';
import WebFont from 'webfontloader';

// Custom functions

Vue.config.productionTip = false;
Vue.use(Buefy);

require("./assets/scss/app.scss");

WebFont.load({ google: { families: ["Raleway:400,700"] } });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");