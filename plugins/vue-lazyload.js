import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import loading from '@/assets/image/Eclipse-1s-210px.svg'

Vue.use(VueLazyload, {
  preLoad: 1,
  loading: loading,
  attempt: 1,
  observer: true,
})
