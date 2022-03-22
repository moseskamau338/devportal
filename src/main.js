import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import BaseLayout from '@/components/layouts/BaseLayout.vue'

createApp(App).use(router).component('BaseLayout', BaseLayout).mount('#app')
