import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      homeItems: [],
      ropaH: [],
      ropaM: [],
      carrito: []
    }
  },
  getters: {
  },
  mutations: {
    SET_HOME_ITEMS(state, items) {
      state.homeItems = items
    },
    SET_ROPAH_ITEM(state, ropah) {
      state.ropaH = ropah
    },
    SET_ROPAM_ITEM(state,ropam){
      state.ropaM =ropam
    },
    SET_ELECTRONICS_ITEM(state,electronics){
      state.electronics = electronics
    },
    ADD_PRODUCT(state, item) {
      state.carrito.push(item);
    },
    DELETE_PRODUCT(state,item){
      console.log(item);
      state.carrito = state.carrito.filter(x => x.id != item.id);
    },
    DESTROY_CARRITO(state){
      state.carrito = []
    }
  },
  actions: {
    async fetchHomeItems ({commit}) {
      try {
        let response = await fetch('/home.json')
        let ropa = await response.json()
        commit('SET_HOME_ITEMS', ropa)
      }
      catch(error) {
        console.log(Error)
      }
    },

    async fetchRopaHombre({commit}){
      try{
        let response = await fetch('/ropaHombre.json')
        let ropah = await response.json()
        commit('SET_ROPAH_ITEM', ropah)
      }
      catch(error){
        console.log(error)
      }
    },

    async fetchRopaMujer({commit}){
      try{
        let response = await fetch('/ropaMujer.json')
        let ropaM = await response.json()
        commit('SET_ROPAM_ITEM', ropaM)
      }
      catch(error){
        console.log(error)
      }
    },

    async fetchElectronics({commit}){
      try{
        let response = await fetch('/electronica.json')
        let electronics = await response.json()
        commit('SET_ELECTRONICS_ITEM', electronics)
      }
      catch(error){
        console.log(error)
      }
    },
    agregarAlCarrito({commit}, item){
      commit('ADD_PRODUCT', item);
    },
    sacarDelCarrito ({commit},item){
      commit('DELETE_PRODUCT',item);
    },
    CleanCarrito({commit}){
      commit('DESTROY_CARRITO');
    }
  },
  modules: {
  }
})
