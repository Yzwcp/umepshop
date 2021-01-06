import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css';
import WaterfallEasy from 'vue-waterfall-easy'
Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(VueLazyLoad)
Vue.use(VueLazyLoad, {
  loading:require('./assets/img/home/loading.png')
})
Vue.use(WaterfallEasy)
Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})