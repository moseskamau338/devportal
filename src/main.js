import {createApp, nextTick} from 'vue'
import App from './App.vue'
import router, {nextMain,requiresAuth, requiresGuest} from './router'
import './assets/index.css'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import {keycloak, initOptions, checkAuth} from "./library/Auth/keycloak";
import AppFilters from './library/filters'
import {functions} from './library/globalHelpers'
import mitt from 'mitt'
import {maska} from "maska";

const emitter = mitt()
const pinia = createPinia()
pinia.use(piniaPersist)

import('./setup')
  const app = createApp(App)
    app.provide('emitter', emitter)
    app.provide('keycloak', keycloak)

    app.config.globalProperties.$filters = AppFilters
    app.config.globalProperties.$helpers = functions

    app.use(router)
        .use(pinia)
        .component('BaseLayout', BaseLayout)
        .mixin({directives:{maska}})



keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
  console.log('Authentication status: ', auth)
  if (!auth) {
    console.log('Requires auth? ', requiresAuth)
    if (requiresAuth) {keycloak.login();}
    else {
        console.log('LOGGED IN or NOT')
        app.mount('#app')
        nextMain()
    }
    //
  } else {
      console.log("Authenticated");
      app.mount('#app')
    console.log('App loaded')

    nextMain() //force next route
    //Token Refresh
      setInterval(() => {
        keycloak.updateToken(70).then((refreshed) => {
          if (refreshed) {
            console.log('Token refreshed' + refreshed);
          } else {
            console.log('Token not refreshed, valid for '
              + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
          }
        }).catch(() => {
          console.log('Failed to refresh token');
        });
      }, 6000)
  }

}).catch(() => {
  console.log("Authenticated Failed");
});
