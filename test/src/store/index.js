import Vue from 'vue'
import Vuex from 'vuex'
import one from './modules/one'
import two from './modules/two'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    one,
    two
  }
})
