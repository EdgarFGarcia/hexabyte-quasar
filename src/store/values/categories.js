import Vue from 'vue'

export default{
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        setCategories(state, payload){
          state.categories = [...payload]
        }
    },
    getters: {
        getCategories(state){
          return state.categories
        }
    },
    actions: {
        setCategories({commit}, payload){
          commit('setCategories', payload)
        }
    }
}