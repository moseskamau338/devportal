import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import { createPinia } from 'pinia'
import('./setup')

createApp(App)
    .use(router)
    .use(createPinia())
    .component('BaseLayout', BaseLayout)
    .mount('#app')
