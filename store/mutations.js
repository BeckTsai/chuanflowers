import { SET_LOADING_SHOW } from './mutation-types.js'

export default {
  [SET_LOADING_SHOW](state, value) {
    state.loadingShow = value
  },
}
