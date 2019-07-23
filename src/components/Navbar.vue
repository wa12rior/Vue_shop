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
        <router-link class="navbar-item" to="/shop">
          <i class="fas fa-shopping-cart">Cart</i>
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
      isMenuOpen: "isMenuOpen"
    })
  },
  methods: {
    ...mapActions(["toggleMenu"])
  }
};
</script>