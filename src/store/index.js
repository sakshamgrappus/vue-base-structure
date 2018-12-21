import Vue from 'vue'
import Vuex from 'vuex'
import login from './module/login'
import ui from './module/ui'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    ui
  }
})
