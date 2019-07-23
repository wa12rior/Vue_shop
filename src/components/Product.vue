<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="card-buttons">
        <div class="quantity-buttons">
          <button @click="incrementQuantity" class="button-add">
            <i class="fas fa-plus-square"></i>
          </button>
          <input type="hidden" v-model="cartProduct.quantity" />
          <label class="product-quantity" for="product quantity">{{ cartProduct.quantity }}</label>
          <button @click="decrementQuantity" class="button-remove">
            <i class="fas fa-minus-square"></i>
          </button>
        </div>
        <button @click="addToCart(cartProduct)" class="button-cart">
          <i class="fas fa-cart-plus"></i>
        </button>
      </div>
      <div class="media">
        <div class="media-content">
          <p class="product__name title is-4">{{ product.name }}</p>
          <p class="product__quantity subtitle is-6">Quantity: {{ product.quantity }}</p>
        </div>
      </div>

      <div class="content">
        <p class="product__description">{{ product.description }}</p>
        <!-- taxonomies template -->
        <!-- <a>@bulmaio</a>.
        <a href="#">#css</a>
        <a href="#">#responsive</a>-->
        <br />
        <p class="product__price">
          <b>Price:</b>
          {{ cartProduct.quantity == 0 ? product.price : product.price * cartProduct.quantity }} {{ product.currency }}
        </p>
      </div>
    </div>
  </div>
</template>         
<script>
import { mapActions } from "vuex";

export default {
  name: "Product",
  data: function() {
    return {
      cartProduct: {
        quantity: 0,
        productId: this.product.id
      }
    };
  },
  props: {
    product: {}
  },
  methods: {
    incrementQuantity: function() {
      this.cartProduct.quantity++;
    },
    decrementQuantity: function() {
      this.cartProduct.quantity =
        this.cartProduct.quantity >= 1
          ? --this.cartProduct.quantity
          : this.cartProduct.quantity;
    },
    ...mapActions(["addProductToCart"]),
    addToCart: function() {
      this.addProductToCart({
        productId: this.cartProduct.productId,
        quantity: this.cartProduct.quantity
      });
      this.cartProduct.quantity = 0;
      // this.cartProduct = {
      //   quantity: 0,
      //   productId: this.product.id
      // };
    }
  }
};
</script>

<style scoped>
.content {
  text-align: left !important;
}

.quantity-buttons {
  margin-bottom: 5px;
}

.card-content {
  position: relative;
}

.card-buttons {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px;
}

.button-add,
.button-remove,
.button-cart {
  border: none;
  background: none;
  outline: none;
}

.button-add i,
.button-remove i,
.button-cart i,
.product-quantity {
  font-size: 1.4rem;
}

.button-add i {
  color: gold;
}

.button-remove i {
  color: tomato;
}

.button-cart i {
  color: rgb(22, 235, 189);
  font-size: 1.8rem;
}

.button-add:hover,
.button-remove:hover,
.button-cart:hover {
  cursor: pointer;
  color: #8c67ef;
}
</style>
