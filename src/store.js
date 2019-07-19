import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: {
      visible: true
    },
    allProducts: [{
        id: 0,
        name: "Poduszka",
        quantity: 150,
        price: 14,
        currency: "PLN",
        description: "Very nice pillow"
      },
      {
        id: 1,
        name: "Kubek",
        quantity: 50,
        price: 5,
        currency: "PLN",
        description: "Very nice cup"
      }
    ],
    cart: [{
      orderId: 1,
      status: 1,
      products: [

      ]
    }],
    taxonomies: {

    }
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.menu.visible = !state.menu.visible;
    }
  },
  actions: {
    toggleMenu(context) {
      context.commit('TOGGLE_MENU')
    }
  },
  getters: {
    isMenuOpen: state => {
      return state.menu.visible;
    },
    getAllProducts: state => {
      return state.allProducts;
    }
  }
});