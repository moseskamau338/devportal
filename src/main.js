import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import AppFilters from './library/filters'
import {functions} from './library/globalHelpers'
import mitt from 'mitt'
import {maska} from "maska";

const emitter = mitt()
const pinia = createPinia()
pinia.use(piniaPersist)

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
