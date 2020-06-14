import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ("../views/home/home.vue")
const Category = () =>
    import ("../views/category/category.vue")
const Cart = () =>
    import ("../views/cart/cart.vue")
const Proflie = () =>
    import ("../views/proflie/proflie.vue")
Vue.use(VueRouter)

const routes = [

    {
        path: '',
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/category',
        name: 'category',
        component: Category
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/proflie',
        name: 'proflie',
        component: Proflie
    }

]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router