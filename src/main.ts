import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import './style.css'
import App from './App.vue'
import Product from './components/Product.vue';

const routes = [
    { path: '/product/:handle', component: Product, name: 'product' },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.addRoute({
    path: '/',
    component: Product,
    meta: { params: { handle: 'demo' } },
    beforeEnter: (to) => {
        if (to.meta.params) {
            to.params = Object.assign({}, to.meta.params)
        }
    }
})

const route = router.resolve('/')
if (route.meta.params) {
    Object.assign(route, Object.assign({}, { params: route.meta.params }))
}

createApp(App)
    .use(router)
    .mount('#app')
