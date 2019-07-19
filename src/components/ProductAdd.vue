<template>
    <form class="form" @submit.prevent>
        <h1 class="is-size-2">Add new product</h1>
        <div class="field">
          <div class="control">
            <input class="input is-medium" type="text" placeholder="Name">
          </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="Description">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="number" placeholder="Quantity">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="number" placeholder="Price">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="Currency">
            </div>
        </div>
        <div class="field">
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
                <a type="button" class="button is-primary is-outlined is-pulled-right" @click="addProductToStorage()">Send</a>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "ProductAdd",
    data() {
        newProduct = {
            
        };
        return newProduct;
    },
    computed: {
        ...mapActions(['addProductToStorage']),
        ...mapGetters(['getAllProductsCount'])
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

