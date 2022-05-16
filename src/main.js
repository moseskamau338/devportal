import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
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


const loadApp = ()=>{
  app.mount('#app')
}

router.beforeResolve(async (to, from, next) => {
    const forward = () => { loadApp(); next();}

    if (!to.meta.requiresAuth){forward()}else{
        await checkAuth().then((res)=>{
            if (res){forward()}
        }).catch((error)=>{keycloak.login()})
    }
})