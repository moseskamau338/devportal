import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {instance} from '@/library/Auth/axios'
import './assets/index.css'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import {functions} from './library/globalHelpers'
import mitt from 'mitt'
import {maska} from "maska";

const emitter = mitt()
const pinia = createPinia()
pinia.use(piniaPersist)

import('./setup')
  const app = createApp(App)
    app.provide('emitter', emitter)
    app.provide('helpers', functions)
    app.provide('axiosInstance', instance)

    app.use(router)
        .use(pinia)
        .component('BaseLayout', BaseLayout)
        .mixin({directives:{maska}})
        .mount('#app')