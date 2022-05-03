import Vue from 'vue'

export default{
    namespaced: true,
    state: {
        navigation: {},
        showddcalc: false
    },
    mutations: {
        setnavigation(state, payload){
            state.navigation = payload
        },
        setshowddcalc(state, payload){
            state.showddcalc = payload
        }
    },
    getters: {
        getnavigation(state){
            return state.navigation
        },
        getshowddcalc(state){
            return state.showddcalc
        }
    },
    actions: {
        setnavigation({commit}, payload){
            commit('setnavigation', payload)
        },
        setshowddcalc({commit}, payload){
            commit('setshowddcalc', payload)
        }
    }
}