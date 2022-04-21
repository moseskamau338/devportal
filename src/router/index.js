import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Home,

    },
    {
        path: '/work-area',
        name: 'workArea',
        component: () => import('@/pages/WorkArea.vue'),
        meta:{ 
            title: 'Working Area',
            breadcrumb: (route) => ([
                {
                    text: 'Working Area',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/audit',
        name: 'audit',
        component: () => import('@/pages/Audit.vue'),
        meta:{ 
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
        component: () => import('@/pages/Recon.vue'),
        meta:{ 
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
    {
        path: '/my-team',
        name: 'team',
        component: () => import('@/pages/ManageTeam.vue'),
        meta:{
            title: 'Manage Team',
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Teams',
                    active: true,
                },
            ]),
        }
    },
    //auth pages
    {
        path: '/auth/signup',
        name: 'signup',
        component: () => import('@/pages/Auth/Register.vue') ,
        meta:{
            layout: 'FlatLayout'
        }
    },
    {
        path: '/auth/login',
        name: 'login',
        component: () => import('@/pages/Auth/Login.vue') ,
        meta:{
            layout: 'FlatLayout'
        }
    },
    {
        path: '/auth/forgot-password',
        name: 'forgotPassword',
        component: () => import('@/pages/Auth/ForgotPassword.vue') ,
        meta:{
            layout: 'FlatLayout'
        }
    },
     {
        path: '/auth/reset-password',
        name: 'resetPassword',
        component: () => import('@/pages/Auth/ResetPassword.vue') ,
        meta:{
            layout: 'FlatLayout'
        }
    },

    // default pages
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => import('@/pages/error/404.vue') ,
        meta:{
            layout: 'FlatLayout'
        }
    },
    // {
    //     path: '/reconciliation',
    //     name: 'recon',
    //     component: () => import('@/pages/Recon.vue'),
    //     meta:{ 
    //         layout: 'FlatLayout',
    //         title: 'Reconciliation',
    //         breadcrumb: (route) => ([
    //             {
    //                 text: 'Dashboard',
    //                 active: false,
    //                 to: {name: 'dashboard'}
    //             },
    //             {
    //                 text: 'Recon.',
    //                 active: true,
    //             },
    //         ]),
    //     }
    // },
    

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router