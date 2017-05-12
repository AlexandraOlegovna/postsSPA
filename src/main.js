import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import routes from './routes'

Vue.use(VueRouter)
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'
import SignIn from './components/SignIn.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/posts', component: Posts},
  { path: '/signin', component: SignIn }
]


var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render: h => h(App)
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
