<template>
  <div>
    <h1>Products</h1>
    <div class="row">
      <div class="col col-sm-4"
           v-for="(product, key) in products">
        <router-link tag="h3" :to="'/products/'+ product.id_product"
                     style="cursor: pointer"
        >{{product.title}}</router-link>
        <div>{{ product.price }}</div>
        <button class="btn btn-primary" @click="addToCart({id: product.id_product})">Add to cart</button>
        <button class="btn btn-warning" @click="removeFromCart({id: product.id_product})">Remove from cart</button>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('cart', {
        addToCart: 'add',
        removeFromCart: 'remove'
      })
    },
    computed: {
      ...mapGetters('products', {
        products: 'items'
      })
    }
  }
</script>

<style scoped>
  .row {
    padding-left: 15px;
  }
</style>
