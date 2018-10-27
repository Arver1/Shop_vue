import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart';
import E404 from './components/E404';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: {name: 'products'}
  },
  {
    path: '/products/:id',
    component: Product
  },
  {
    name: 'products',
    path: '/products',
    component: ProductList
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '*',
    component: E404
  }
];

export default new VueRouter({
  routes,
  mode: 'history'
});
