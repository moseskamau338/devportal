import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
//import {keycloak, initOptions} from "./library/Auth/keycloak";
import AppFilters from './library/filters'
import {functions} from './library/globalHelpers'
import mitt from 'mitt'
import {maska} from "maska";

const emitter = mitt()
const pinia = createPinia()
pinia.use(piniaPersist)


//
//keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
//  if (!auth) {
//    window.location.reload();
//  } else {
    //setup application
    //plugin global filters:
    //For documentation: https://github.com/freearhey/vue2-filters
  import('./setup')
  const app = createApp(App)
    app.provide('emitter', emitter)

    app.config.globalProperties.$filters = AppFilters
    app.config.globalProperties.$helpers = functions

    app.use(router)
        .use(pinia)
        .component('BaseLayout', BaseLayout)
        .mixin({directives:{maska}})
        .mount('#app')
  //}


//Token Refresh
//  setInterval(() => {
//    keycloak.updateToken(70).then((refreshed) => {
//      if (refreshed) {
//        console.log('Token refreshed' + refreshed);
//      } else {
//        console.log('Token not refreshed, valid for '
//          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
//      }
//    }).catch(() => {
//      console.log('Failed to refresh token');
//    });
//  }, 6000)
//
//}).catch(() => {
//  console.log("Authenticated Failed");
//});

