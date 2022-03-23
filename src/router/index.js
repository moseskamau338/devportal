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
            title: 'Audit Trail',
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Audit Trail',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/reconciliation',
        name: 'recon',
        component: Home,
        meta:{ 
            layout: 'FlatLayout',
            title: 'Reconciliation',
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Recon.',
                    active: true,
                },
            ]),
        }
    },
    

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router