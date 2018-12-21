import { Login } from '@s/login'
const handleError = err => {
  console.log('Error in login action :', err)
}

export default {
  async requestCreateLogin ({ commit }, payload) {
    try {
      commit('setProgress', true)
      let result = await Login.createLogin(payload)
      commit('setLoginDetail', result)
      commit('setLocalStorage', result)
      commit('setProgress', false)
      return result
    } catch (err) {
      commit('setProgress', false)
      handleError(err)
    }
  },

  async requestCreateLogout ({ commit }) {
    try {
      commit('setProgress', true)
      let result = await Login.createLogout()
      commit('destroyLocalStorage')
      commit('setLoginDetail', null)
      commit('setProgress', false)
      return result
    } catch (err) {
      commit('setProgress', false)
      handleError(err)
    }
  }
}
