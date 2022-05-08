import Vue from 'vue'

export default{
    namespaced: true,
    state: {
        navigation: {},
        showddcalc: false,
        isloadsummary: false,
        isshortcircuit: false,
    },
    mutations: {
        setnavigation(state, payload){
            state.navigation = payload
        },
        setnavigationchild(state, payload){
            state.navigation.child = payload
        },
        setshowddcalc(state, payload){
            state.showddcalc = payload
        },
        setisloadsummary(state, payload){
            state.isloadsummary = payload
        },
        setisshortcircuit(state, payload){
            state.isshortcircuit = payload
        }
    },
    getters: {
        getnavigation(state){
            return state.navigation
        },
        getshowddcalc(state){
            return state.showddcalc
        },
        getisloadsummary(state){
            return state.isloadsummary
        },
        getisshortcircuit(state){
            return state.isshortcircuit
        }
    },
    actions: {
        setnavigation({commit}, payload){
            commit('setnavigation', payload)
        },
        setnavigationchild({commit}, payload){
            commit('setnavigationchild', payload)
        },
        setshowddcalc({commit}, payload){
            commit('setshowddcalc', payload)
        },
        setisloadsummary({commit}, payload){
            commit('setisloadsummary', payload)
        },
        setisshortcircuit({commit}, payload){
            commit('setisshortcircuit', payload)
        }
    }
}