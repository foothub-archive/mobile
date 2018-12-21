import Vue from "nativescript-vue"
import VueDevtools from 'nativescript-vue-devtools'

if(process.env.NODE_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (process.env.NODE_ENV !== 'production')
