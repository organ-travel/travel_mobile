import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index.js'
import mixin from '@/mixin/index.js'
import Meta from 'vue-meta'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import '@/assets/style/base.css'

Vue.mixin(mixin)
Vue.use(Meta)
Vue.use(Vant)
Vue.use(Lazyload, {
  lazyComponent: true,
  loading: require('./assets/img/logo.png'),
  error: require('./assets/img/logo.png'),
  preLoad: 1.3,
  attempt: 1
})
Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
