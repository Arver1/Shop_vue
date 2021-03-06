export default {
  namespaced: true,
  state: {
    items: getProducts()
  },
  getters: {
    items(state){
      return state.items
    },
    mapItems(state){
      const mapItems = {};
      for(let i = 0; i < state.items.length; i++){
        let product = state.items[i];
        mapItems[product.id_product] = product;
      }
      return mapItems
    },
    item: (state, getters) => (id) => {
      return getters.mapItems[id]
    }
  },
  mutations: {

  },
  actions: {

  }
}

function getProducts(){
  return [
    {
      id_product: 1,
      title: 'Iphone 5',
      price: 20000
    },
    {
      id_product: 2,
      title: 'Iphone 6',
      price: 25000
    },
    {
      id_product: 3,
      title: 'Iphone 7',
      price: 30000
    }
  ]
}
