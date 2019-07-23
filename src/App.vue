<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
#app {
  font-family: "Raleway";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
