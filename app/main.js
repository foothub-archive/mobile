import Vue from 'nativescript-vue'
import '@/plugins/vuex'
import '@/plugins/vue-devtools'
import Login from './components/Login'

import { authApi, coreApi } from './services'

import store from './shared/src/vuex-store'
import registerInterceptors from './shared/src/interceptors'

registerInterceptors([authApi, coreApi])


new Vue({
  data() {return {store}},
  store,
  render: h => h('frame', [h(Login)]),
}).$start()
