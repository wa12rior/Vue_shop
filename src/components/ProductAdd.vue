<template>
    <form class="form" @submit.prevent>
        <h1 class="is-size-2">Add new product</h1>
        <div class="field">
          <div class="control">
            <input class="input is-medium" type="text" v-model="newProduct.name" placeholder="Name">
          </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="text" v-model="newProduct.description" placeholder="Description">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="number" v-model="newProduct.quantity" placeholder="Quantity">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="number" v-model="newProduct.price" placeholder="Price">
            </div>
        </div>
        <div class="field">
            <div class="field select">
                <select v-model="newProduct.currency">
                    <option value="PLN">PLN</option>
                </select>
            </div>
            <div class="file has-name">
                <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span class="file-name">
                    Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                </label>
                <a type="button" class="button is-primary is-outlined is-pulled-right" @click="addProductToStorage(newProduct)">Send</a>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "ProductAdd",
    data() {
        return {
            newProduct: {
                id: this.getNextProductId,
                name: '',
                quantity: 0,
                price: 0,
                currency: "PLN",
                description: ""
            }
        }
    },
    computed: {
        ...mapActions(['addProductToStorage']),
        ...mapGetters(['getNextProductId'])
    }
}
</script>

<style scoped>
.form {
    padding: 20px 0;
}
.field {
    padding: 5px 0;
}
</style>

