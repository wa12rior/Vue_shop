<template>
  <div class="cart">
    <div class="container">
      <table class="table" v-if="cartProducts">
        <thead>
          <tr>
            <th>
              <abbr title="Image">Image</abbr>
            </th>
            <th>
              <abbr title="Name">Name</abbr>
            </th>
            <th>
              <abbr title="Price">Price</abbr>
            </th>
            <th>
              <abbr title="Quantity">Quantity</abbr>
            </th>
            <th>
              <abbr title></abbr>
            </th>
            <th>
              <abbr title="Remove">Remove</abbr>
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <abbr title="Total Price"></abbr>
            </th>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="product in cartProducts" :key="product.data.id">
            <td>
              <img src="https://bulma.io/images/placeholders/64x64.png" alt="Placeholder image" />
            </td>
            <td>{{ product.data.name }}</td>
            <td>{{ product.data.price * product.quantity }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button class="button-add">
                <i class="fas fa-plus-square"></i>
              </button>
              <input type="hidden" />
              <label class="product-quantity" for="product quantity">{{ product.quantity }}</label>
              <button class="button-remove">
                <i class="fas fa-minus-square"></i>
              </button>
            </td>
            <td>
              <button @click="removeProductFromCart(product.data.id)">
                <fa-icon icon="trash-alt" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 v-else class="title">There is no product in here...</h1>
      <br />
      <router-link class="button is-primary is-outlined" to="/products">Browse our shop</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      checkout: {
        products: [],
        discounts: []
      }
    };
  },
  components: {},
  computed: {
    ...mapGetters({ cartProducts: "getCartProducts" })
  },
  methods: {
    ...mapActions(["removeProductFromCart"]),
    incrementQuantity: function() {
      this.cartProduct.quantity++;
    },
    decrementQuantity: function() {
      this.cartProduct.quantity =
        this.cartProduct.quantity >= 1
          ? --this.cartProduct.quantity
          : this.cartProduct.quantity;
    }
  }
};
</script>