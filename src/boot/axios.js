import axios from 'axios'

const setupHeaderConfig = (config) => {
  // -------------------------------------------------------------
  // Note: This will be uncommented once I finish the auth state / store
  // -------------------------------------------------------------
  // const token = store.getters['auth/accessToken']
//   const token = JSON.parse(localStorage.getItem('token'))
  // !config.headers ? config.headers = {} : null
//   config.headers.Authorization = 'Bearer ' + token
  // -------------------------------------------------------------
  config.withCredentials = false
  // config.baseURL = 'https://api.orderbuddy.dk/api/'
  config.baseURL = 'https://api.hexabyte.club/api/'
  return config
}

export default ({ Vue }) => {
  Vue.prototype.$post = (self, url, params = {}, config = { headers: {} }) => {
    return new Promise((resolve) => {
      const newConfig = setupHeaderConfig(config)

      axios.post(url, params, newConfig)
        .then((response) => resolve(response))
        .catch((err) => resolve(err.response || err))
    })
  }

  Vue.prototype.$put = (self, url, params = {}, config = { headers: {} }) => {
    return new Promise((resolve) => {
      const newConfig = setupHeaderConfig(config)

      axios.put(url, params, newConfig)
        .then((response) => resolve(response))
        .catch((err) => resolve(err.response || err))
    })
  }

  Vue.prototype.$patch = (self, url, params = {}, config = { headers: {} }) => {
    return new Promise((resolve) => {
      const newConfig = setupHeaderConfig(config)

      axios.patch(url, params, newConfig)
        .then((response) => resolve(response))
        .catch((err) => resolve(err.response || err))
    })
  }

  Vue.prototype.$delete = (self, url, params = {}, config = { headers: {} }) => {
    return new Promise((resolve) => {
      const newConfig = setupHeaderConfig(config)

      axios.delete(url, params, newConfig)
        .then((response) => resolve(response))
        .catch((err) => resolve(err.response || err))
    })
  }

  Vue.prototype.$get = (self, url, params = {}, config = { headers: {} }) => {
    return new Promise((resolve) => {
      config.params = params
      const newConfig = setupHeaderConfig(config)

      axios.get(url, newConfig)
        .then((response) => resolve(response))
        .catch((err) => resolve(err.response || err))
    })
  }
}
