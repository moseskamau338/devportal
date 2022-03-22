import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta:{ 
            layout: 'FlatLayout',
            title: 'Dashboard'
        }
    },
    {
        path: '/teams',
        name: 'teams',
        component: () => import('@/pages/Teams.vue'),
        meta:{
            layout: 'FlatLayout',
            title: 'Teams',
             breadcrumb: (route) => ([
                {
                    text: 'Teams Section',
                    active: true,
                    to: { name: 'teams',}
                },
            ]),
            // requiresAuth: true,
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router