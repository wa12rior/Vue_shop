import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  faShoppingCart,
  faUpload,
  faCartPlus,
  faMinusSquare,
  faPlusSquare,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import WebFont from 'webfontloader';

library.add(faShoppingCart, faUpload, faCartPlus, faMinusSquare, faPlusSquare, faTrashAlt)

// Custom functions

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

require("./assets/scss/app.scss");

WebFont.load({
  google: {
    families: ["Raleway:400,700"]
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");