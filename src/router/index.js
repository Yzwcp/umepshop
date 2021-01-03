import VueRouter from 'vue-router'
import Vue from 'vue'
const Home = () => import('views/home/home')
const Fenlei = () => import('views/fenlei/fenlei')
const ShopCat = () => import('views/shopcar/shopcar')
const User = () => import('views/user/user')
const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)
const routes = [{
  path: '',
  redirect: '/home',
}, {
  path: '/home',
  component: Home
}, {
  path: '/fenlei',
  component: Fenlei
}, {
  path: '/shopcar',
    component: ShopCat,
}, {
  path: '/user',
  component: User
}, {
  path: '/detail/:iid',
  component: Detail
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router