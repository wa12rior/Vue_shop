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
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/products">Products</router-link>
        <router-link class="navbar-item" to="/cart">
          <fa-icon class="badge-relative" icon="shopping-cart">
            Cart
            <div
              :class="{ badge: getCartProductsCount }"
            >{{ getCartProductsCount == 0 ? '' : getCartProductsCount }}</div>
          </fa-icon>
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
    ...mapGetters({
      isMenuOpen: "isMenuOpen",
      getCartProductsCount: "getCartProductsCount"
    })
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
  padding: 3px;
  font-size: 0.8rem;
  width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  border-radius: 50%;
  left: -9px;
  top: -9px;
}
</style>
