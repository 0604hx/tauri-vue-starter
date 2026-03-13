import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: () => import('./pages/home.vue') },
    { path: '/setting', name: 'Setting', component: () => import('./pages/setting.vue') },
    { path: '/changelog', name: 'Changelog', component: () => import('./pages/changelog.vue') }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router