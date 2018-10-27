export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
    cnt(state){
      return state.products.length
    },
    products(state){
      return state.products;
    }
  },
  mutations: {
    add(state, payload){
      state.products.push(payload.id)
    },
    remove(state, payload){
      const index = state.products.indexOf(payload.id);
      if(~index){
        state.products.splice(index, 1);
      }
    }
  },
  actions: {
    add(store, payload){
      store.commit('add', payload)
    },
    remove(store, payload){
      store.commit('remove', payload)
    }
  }
}
