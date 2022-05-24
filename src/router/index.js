import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import NProgress from 'nprogress/nprogress'
import 'nprogress/nprogress.css'
import {keycloak, checkAuth} from "../library/Auth/keycloak";

NProgress.configure({
    showSpinner: true
})

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Home,
        meta:{
            requiresAuth: true
        }

    },
    {
        path: '/work-area',
        name: 'workArea',
        component: () => import('@/pages/WorkArea.vue'),
        meta:{
            title: 'Working Area',
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Working Area',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/banks/transactions',
        name: 'transactions',
        component: () => import('@/pages/BankTransactions.vue'),
        meta:{
            title: 'Bank Transactions',
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'View Transactions',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/payments/expected',
        name: 'expected_payments',
        component: () => import('@/pages/ExpectedPayments.vue'),
        meta:{
            title: 'Expected Payments',
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Payments',
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
             requiresAuth: true,
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
             requiresAuth: true,
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
    {
        path: '/setup/erp',
        name: 'erp-settings',
        component: () => import('@/pages/Erp.vue'),
        meta:{
            title: 'ERP Settings',
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'ERP Settings',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/onboard/upload',
        name: 'upload-data',
        component: () => import('@/pages/UploadReconData.vue'),
        meta:{
            title: 'Upload Data',
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Upload',
                    active: true,
                },
            ]),
        }
    },
    //marketplace
     {
        path: '/invoice/marketplace',
        name: 'marketplace',
        component: () => import('@/pages/Marketplace.vue'),
        meta:{
            title: 'Marketplace',
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Invoice Marketplace',
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
            layout: 'FlatLayout',
            requiresGuest: true,
        }
    },
    {
        path: '/auth/login',
        name: 'login',
        component: () => import('@/pages/Auth/Login.vue') ,
        meta:{
            layout: 'FlatLayout',
             requiresGuest: true,
        }
    },
    {
        path: '/auth/forgot-password',
        name: 'forgotPassword',
        component: () => import('@/pages/Auth/ForgotPassword.vue') ,
        meta:{
            layout: 'FlatLayout',
             requiresGuest: true,
        }
    },
     {
        path: '/auth/reset-password',
        name: 'resetPassword',
        component: () => import('@/pages/Auth/ResetPassword.vue') ,
        meta:{
            layout: 'FlatLayout',
             requiresGuest: true,
        }
    },

    // default pages
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/error/404.vue') ,
        meta:{
            layout: 'FlatLayout',
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
export let nextMain = ()=>{}
export let requiresAuth = false;
export let requiresGuest = false;

   router.beforeEach((to, from, next) => {
       if (to.path) {NProgress.start()}
       console.log('About to check auth')
       requiresAuth = to.matched.some(record => record.meta.requiresAuth)
       requiresGuest = to.matched.some(record => record.meta.requiresGuest)
       if (to.matched.some(record => record.meta.requiresAuth)){
           console.log('Auth required')
           nextMain = next
           if (checkAuth()){
               console.log('Auth passed')

               //guest screen?
               if (requiresGuest){
                    console.log('Must be guest to access')
                    next({name: 'dashboard'})
              }else{next()}

           }else{
               console.log('Auth check failed')
               setTimeout(()=>{
                   //recheck authentication (should be updated by main.js)
                   if (!checkAuth()){keycloak.login()}
               }, 500)
           }
       }else{
           console.log('No need for auth')
           next()
       }
 })



router.afterEach(() => {
    NProgress.done();
})



export default router