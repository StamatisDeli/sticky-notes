import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'
import oldNote from './modules/oldNote'
import booleans from './modules/booleans'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    notes,
    oldNote,
    booleans
  }
})
