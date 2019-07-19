<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
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
        <p class="product__price">Price: {{ product.price }} {{ product.currency }}</p>
      </div>
    </div>
  </div>
</template>         
<script>
export default {
  name: "Product",
  props: {
    product: {}
  }
};
</script>

<style scoped>
.content {
  text-align: left !important;
}
</style>
