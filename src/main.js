import Vue from 'vue'
import App from './App.vue'
import notas from './components/notas.vue'
import tiempo from './components/tiempo.vue'
import homepage from './components/homepage.vue'
import VueRouter from 'vue-router'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  { path: '/notas', component: notas },
  { path: '/tiempo', component: tiempo},
  { path: '/*', component: homepage},
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
