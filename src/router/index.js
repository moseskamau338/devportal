import { createRouter, createWebHistory } from 'vue-router'
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
        component: () => import('@/pages/Home.vue'),
        meta:{
            requiresAuth: true
        }

    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/components/widgets/DynamicGrid.vue'),
        meta:{
            requiresAuth: true
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
            title: 'Reconciliation Summary',
            requiresAuth: true,
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
        path: '/reconciliation/engine',
        name: 'recon-engine',
        component: () => import('@/pages/ReconEngine.vue'),
        meta:{
            title: 'Reconciliation Engine',
            requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Reconciliation Engine',
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
        name: 'erp-settings-upload-data',
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
     {
        path: '/invoice/marketplace/:id',
        name: 'marketplace-view',
        component: () => import('@/pages/Client.vue'),
        meta:{
            title: route => `View Client: ${route.params.id}`,
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Marketplace',
                    active: false,
                    to: {name: 'marketplace'}
                },
                {
                    text: 'View Client',
                    active: true,
                },
            ]),
        }
    },
     {
        path: '/invoice/marketplace/:client/:invoice',
        name: 'marketplace-view-invoice',
        component: () => import('@/pages/InvoiceView.vue'),
        meta:{
            title: route => `View invoice: #${route.params.invoice}`,
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Marketplace',
                    active: false,
                    to: {name: 'marketplace'}
                },
                {
                    text: 'Invoice',
                    active: true,
                },
            ]),
        }
    },
     {
        path: '/invoice/marketplace/adjustments',
        name: 'marketplace-adjustments',
        component: () => import('@/pages/Adjustments.vue'),
        meta:{
            title: 'Adjustments',
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Marketplace',
                    active: false,
                    to: {name: 'marketplace'}
                },
                {
                    text: 'Manage Adjustments',
                    active: true,
                },
            ]),
        }
    },
     //settings
     {
        path: '/settings',
        name: 'system-settings',
        component: () => import('@/pages/Settings.vue'),
        meta:{
            title:'System Settings',
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Settings',
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

       const { title } = to.meta;
        to.meta.title = typeof title === 'function' ? title(to) : title;

       requiresAuth = to.matched.some(record => record.meta.requiresAuth)
       requiresGuest = to.matched.some(record => record.meta.requiresGuest)
       if (to.matched.some(record => record.meta.requiresAuth)){
           nextMain = next
           if (checkAuth()){

               //guest screen?
               if (requiresGuest){
                    next({name: 'dashboard'})
              }else{next()}

           }else{
               setTimeout(()=>{
                   //recheck authentication (should be updated by main.js)
                   if (!checkAuth()){keycloak.login()}
               }, 500)
           }
       }else{
           next()
       }
 })



router.afterEach(() => {
    NProgress.done();
})



export default router