import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import TeamDetail from '@/pages/TeamDetail.vue'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Home,
        meta:{ 
            layout: 'FlatLayout',
            title: 'Dashboard'
        }
    },
    {
        path: '/audit',
        name: 'audit',
        component: Home,
        meta:{ 
            layout: 'FlatLayout',
            title: 'Audit Trail'
        }
    },
    {
        path: '/reconciliation',
        name: 'recon',
        component: Home,
        meta:{ 
            layout: 'FlatLayout',
            title: 'Reconciliation'
        }
    },
    

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router