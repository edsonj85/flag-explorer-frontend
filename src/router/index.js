import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/country/:name',
        component: () => import('../views/CountryDetail.vue'),
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
