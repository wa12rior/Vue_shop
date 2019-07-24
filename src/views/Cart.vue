<template>
  <div class="cart">
    <div class="container">
      <table class="table">
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
              <abbr title="Remove">Remove</abbr>
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <abbr title="Total Price">Total Price:</abbr>
            </th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>
              <img src="https://bulma.io/images/placeholders/64x64.png" alt="Placeholder image" />
            </td>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                title="Leicester City F.C."
              >Leicester City</a>
              <strong>(C)</strong>
            </td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {},
  computed: {
    ...mapGetters({ cartProducts: "getCartProducts" })
  }
};
</script>