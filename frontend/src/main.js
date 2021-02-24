import Vue from 'vue'
import App from './App.vue'
import Form from './components/Form';
import ListAthletes from './components/ListAthletes.vue';
import VueRouter from 'vue-router'


Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: App,
      },
      {
        path: '/cadastro',
        name: 'form',
        component: Form,
      },
      {
        path: '/lista',
        name: 'lista',
        component: ListAthletes,
      },
    ],
    
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
