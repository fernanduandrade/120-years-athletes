import Vue from 'vue'
import App from './App.vue'

import createAthlete from './components/pages/createAthlete/createAthlete.vue';
import editAthlete from './components/pages/editAthlete/editAthlete.vue'
import listAthletes from './components/pages/ListAthletes/listAthletes.vue';
import athleteProfile from './components/pages/athleteProfile/athleteProfile.vue';

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
        path: '/cadastro',
        name: 'cadastro',
        component: createAthlete,
      },
      {
        path: '/atualizar/:id',
        name: 'atualizar',
        component: editAthlete,
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
