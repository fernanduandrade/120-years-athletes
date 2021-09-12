import Vue from 'vue'
import App from './App.vue'

import createAthlete from './components/pages/createAthlete/createAthlete.vue';
import listAthletes from './components/pages/listAthletes/listAthletes.vue';
import athleteProfile from './components/pages/athleteProfile/athleteProfile.vue';

import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
      { 
        path: '/',
        name: 'lista',
        component: listAthletes,
      },
      {
        path: '/cadastrar',
        name: 'cadastrar',
        component: createAthlete,
      },
      {
        path: '/perfil',
        name: 'perfil',
        component: athleteProfile,
      },
    ],
    
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
