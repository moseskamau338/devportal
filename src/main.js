import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import { createPinia } from 'pinia'
// import createPersistedState from 'pinia-plugin-persist'
import piniaPersist from 'pinia-plugin-persist'
// import SecureLS from "secure-ls";

const pinia = createPinia()
pinia.use(piniaPersist)

// let ls = new SecureLS({
//     encodingType: 'aes',
//     isCompression: true,
//     encryptionSecret:'SomePass'
// })
// createPersistedState({
//     storage: {
//     getItem: (key) => ls.get(key),
//     setItem: (key, value) => ls.set(key, value),
//     removeItem: (key) => ls.remove(key)
//   }
//
// })
// pinia.use(createPersistedState)

import('./setup')

createApp(App)
    .use(router)
    .use(pinia)
    .component('BaseLayout', BaseLayout)
    .mount('#app')
