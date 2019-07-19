<template>
  <div class="container">
    <ProductAdd></ProductAdd>
    <ul class="columns">
      <li v-for="product in allProducts" :key="product.id" class="column is-one-third">
        <Product :product="product"></Product>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Product from "../components/Product.vue";
import ProductAdd from '../components/ProductAdd.vue';

export default {
  name: "Products",
  components: {
    Product,
    ProductAdd
  },
  computed: {
    ...mapGetters({
      allProducts: "getAllProducts"
    })
  }
};
</script>