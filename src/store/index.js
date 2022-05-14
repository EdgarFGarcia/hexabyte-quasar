import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// import example from './module-example'

import categories from './values/categories.js'
import userdata from './values/userdata.js'
import topnav from './values/navrelated.js'

// dwelling multipanel store
import uddwellmulti from './values/dwellingmultipanel.js'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      categories:     categories,
      userdata:       userdata,
      uddwellmulti:   uddwellmulti,
      topnav:         topnav
    },
    plugins: [createPersistedState()],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
