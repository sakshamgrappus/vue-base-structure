import { storage } from '@s/config/storage'
export default {
  setLoginDetail (state, payload) {
    state.loginUserDetail = payload
    state.authToken = payload === null ? null : payload.token
  },
  setLocalStorage (state, payload) {
    storage.set.authToken(payload)
  },
  destroyLocalStorage (state) {
    storage.destroy.authToken()
  }
}
