import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CountryDetail from '../views/CountryDetail.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/country/:name', component: CountryDetail, props: true }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
