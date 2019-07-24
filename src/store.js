import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: {
      visible: true
    },
    nextProductId: 2,
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
    cart: {
      orderId: 1,
      status: 1,
      count: 0,
      products: []
    },
    taxonomies: {

    }
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.menu.visible = !state.menu.visible
    },
    ADD_PRODUCT_TO_STORAGE(state, product) {
      state.nextProductId++
      state.allProducts.push(product)
    },
    ADD_PRODUCT_TO_CART(state, {
      productId,
      quantity
    }) {
      let itemExist = false;
      state.cart.products.forEach((item, index) => {
        if (item.productId == productId) {
          item.quantity += quantity
          itemExist = true;
        }
      })

      if (!itemExist) {
        state.cart.products.push({
          productId,
          quantity
        })
        state.cart.count++
      }
    }
  },
  actions: {
    toggleMenu(context) {
      context.commit('TOGGLE_MENU')
    },
    addProductToStorage(context, product) {
      context.commit('ADD_PRODUCT_TO_STORAGE', product)
    },
    addProductToCart(context, payload) {
      context.commit('ADD_PRODUCT_TO_CART', payload)
    }
  },
  getters: {
    isMenuOpen: state => {
      return state.menu.visible;
    },
    getAllProducts: state => {
      return state.allProducts;
    },
    getNextProductId: state => {
      return state.nextProductId;
    },
    getCartProductsCount: state => {
      return state.cart.count;
    },
    getCartProducts: state => {
      let products = []

      state.cart.products.forEach((product) => {
        products.push({
          data: state.allProducts.find(item => item.id == product.productId),
          quantity: product.quantity
        })
      })

      return products.length > 0 ? products : false;
    }
  }
});