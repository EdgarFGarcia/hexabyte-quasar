import Vue from 'vue'

export default{
    namespaced: true,
    state: {
      categories: [],
      parent_categories: [],
      child_categories: [],
    },
    mutations: {
      setCategories(state, payload){
        state.categories = [...payload]
      },
      setparent_categories(state, payload){
        state.parent_categories = [...payload]
      },
      setchild_categories(state, payload){
        state.child_categories = [...payload]
      }
    },
    getters: {
      getCategories(state){
        return state.categories
      },
      getparent_categories(state){
        return state.parent_categories
      },
      getchild_categories(state){
        return state.child_categories
      },
    },
    actions: {
      setCategories({commit}, payload){
        commit('setCategories', payload)
      },
      setparent_categories({commit}, payload){
        commit('setparent_categories', payload)
      },
      setchild_categories({commit}, payload){
        commit('setchild_categories', payload)
      }
    }
}