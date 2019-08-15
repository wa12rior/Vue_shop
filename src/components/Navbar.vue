<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img class="navbar__logo" src="../assets/logo.png" alt />
      </div>
      <a
        role="button"
        class="navbar-burger"
        @click="toggleMenu"
        v-bind:class="{ 'is-active': isMenuOpen }"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{ 'is-active': isMenuOpen }" id="navMenu">
      <div class="navbar-end">
        <router-link class="navbar-item" :to="{ name: 'home' }">Home</router-link>
        <router-link class="navbar-item" :to="{ name: 'about' }">About</router-link>
        <router-link class="navbar-item" :to="{ name: 'products' }">Products</router-link>
        <router-link class="navbar-item badge-relative" :to="{ name: 'cart' }">
          <fa-icon icon="shopping-cart" />
          <div v-if="getCartProductsCount" class="badge">{{ getCartProductsCount }}</div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<style scoped>
</style>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["isMenuOpen", "getCartProductsCount"])
  },
  methods: {
    ...mapActions(["toggleMenu"])
  }
};
</script>

<style scoped>
.badge-relative {
  position: relative;
}
.badge {
  position: absolute;
  background-color: #12be8b;
  color: white;
  font-size: 0.8rem;
  width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  border-radius: 50%;
  left: 5px;
  top: 5px;
}
</style>
