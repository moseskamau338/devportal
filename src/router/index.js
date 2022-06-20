import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress/nprogress'
import 'nprogress/nprogress.css'

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
        path: '/projects',
        name: 'projects',
        component: () => import('@/pages/projects/List.vue'),
        meta:{
            title: 'Projects',
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to:{name: 'dashboard'}
                },
                {
                    text: 'List',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/projects/view/:id',
        name: 'projects-view',
        component: () => import('@/pages/projects/View.vue'),
        meta:{
            title: (route) => { return 'Project: #'+route.params.id },
             requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to:{name: 'dashboard'}
                },
                {
                    text: 'Projects',
                    active: false,
                    to:{name: 'projects'}
                },
                {
                    text: 'View Project',
                    active: true,
                },
            ]),
        }
    },

    {
        path: '/projects/create',
        name: 'projects-create',
        component: () => import('@/pages/projects/Create.vue'),
        meta:{
            title: 'Create New Project',
            requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Projects',
                    active: true,
                    to: {name: 'projects'}
                },
                {
                    text: 'Create',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('@/pages/Services.vue'),
        meta:{
            title: 'Services',
            requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Services',
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
export let requiresAuth = false;
export let requiresGuest = false;

   router.beforeEach((to, from, next) => {
       if (to.path) {NProgress.start()}

       const { title } = to.meta;
        to.meta.title = typeof title === 'function' ? title(to) : title;

       requiresAuth = to.matched.some(record => record.meta.requiresAuth)
       requiresGuest = to.matched.some(record => record.meta.requiresGuest)

       next()
 })



router.afterEach(() => {
    NProgress.done();
})



export default router