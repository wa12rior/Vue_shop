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
      state.allProducts.push(product)
    },
    INCREMENT_NEXT_PRODUCT_ID(state) {
      state.nextProductId++
    },
    REMOVE_PRODUCT_FROM_CART(state, productId) {
      state.cart.products = state.cart.products.filter(product => product.productId !== productId)
    },
    ADD_PRODUCT_TO_CART(state, {
      productId,
      quantity
    }) {
      let itemExist = false;
      for (let i = state.cart.products.length - 1; i >= 0; i--) {
        if (state.cart.products[i].productId == productId) {
          item.quantity += quantity
          itemExist = true;
          break;
        }
      }

      if (!itemExist) {
        state.cart.products.push({
          productId,
          quantity
        })
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
    addProductToCartAndIncrementId(context, payload) {
      context.commit('ADD_PRODUCT_TO_CART', payload)
      context.commit('INCREMENT_NEXT_PRODUCT_ID')
    },
    removeProductFromCart(context, id) {
      context.commit('REMOVE_PRODUCT_FROM_CART', id)
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
      return state.cart.products.length;
    },
    getCartProducts: state => {
      let products = []

      state.cart.products.forEach((product) => {
        products.push({
          data: state.allProducts.find(item => item.id == product.productId),
          quantity: product.quantity
        })
      })

      return products.length > 0 ? products : [];
    }
  }
});