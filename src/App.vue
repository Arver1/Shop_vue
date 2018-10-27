<template>
  <div>
    <header>
      <div class="container">
        <div class="row header">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart: {{ lengthCnt }}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <!--<li class="list-group-item">Products</li>-->
              <!--<li class="list-group-item">Cart</li>-->
              <!--<li class="list-group-item">Checkout</li>-->
              <router-link v-for="(item, key) in menuList"
                           :key="key"
                           :to="item.url"
                           tag="li"
                           class="list-group-item"
                           style="cursor: pointer"
                           active-class="active"
              >
                {{ item.text }}
              </router-link>
            </ul>
          </div>
          <div class="col col-sm-9">
            <transition name="slide" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters('menu',{
        menuList: 'items'
      }),
      ...mapGetters('cart',{
        lengthCnt: 'cnt'
      })
      // menuList(){
      //   return this.$store.getters['menu/items'];
      // }
    }
  }
</script>

<style>
  .header {
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
  }
  .menu {
    border-right: 1px solid #ddd;
  }

  .list-group-item {
    transition: background 0.3s, color 0.3s;
  }

  .list-group-item a{
    text-decoration: none;
  }

  .list-group-item.active a{
    color: inherit;
  }

  .slide-enter {

  }

  .slide-enter-active {
    animation: slideIn 0.5s;
  }

  .slide-enter-to {

  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slideOut 0.5s;
  }

  .slide-leave-to {

  }

  @keyframes slideIn {
    from {
      transform: rotateY(90deg) rotateZ(0);
    }
    to {
      transform: rotateY(0deg) rotateZ(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: rotateY(0deg) rotateZ(0);
    }
    to {
      transform: rotateY(90deg) rotateZ(0);
    }
  }
</style>

