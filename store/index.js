import Vuex from 'vuex'
import mutations from './mutations.js'
const state = {
  loadingShow: true,
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
  })
}

export default createStore
