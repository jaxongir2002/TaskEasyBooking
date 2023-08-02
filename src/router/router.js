import { createRouter, createWebHistory } from "vue-router";
import home from '../components/home.vue'
import dashbord from '../components/dashbord.vue'
import glavni from '../dashbordComp/dashbord1.vue'
import dagavor from '../viwsDashbord/dagavor.vue'
import izbroni from '../viwsDashbord/izbroni.vue'
import nastroyki from '../viwsDashbord/nastroyki.vue'
import otchoti from '../viwsDashbord/otchoti.vue'
import polzavatel from '../viwsDashbord/polzavatel.vue'
import postavshik from '../viwsDashbord/postavshik.vue'
import provaydri from '../viwsDashbord/provaydri.vue'
import search from '../viwsDashbord/search.vue'
import zakazi from '../viwsDashbord/zakazi.vue'
import menuHome from '../dashbordComp/menuHome.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  

  {
    path: '/dashbord',
    name: 'dashbord',
    component: dashbord,
    children: [
      {
        path: '/glavni',
        name: 'Главная',
        component: glavni
      },
      {
        path: '/dagavor',
        name: 'dagavor',
        component: dagavor
      },
      {
        path: '/izbroni',
        name: 'izbroni',
        component: izbroni
      },
      {
        path: '/nastroyki',
        name: 'nastroyki',
        component: nastroyki
      },
      {
        path: '/otchoti',
        name: 'otchoti',
        component: otchoti
      }, 
     {
        path: '/polzavatel',
        name: 'polzavatel',
        component: polzavatel
      },
      {
        path: '/postavshik',
        name: 'postavshik',
        component: postavshik
      },
      {
        path: '/provaydri',
        name: 'provaydri',
        component: provaydri
      },
      {
        path: '/zakazi',
        name: 'zakazi',
        component: zakazi
      },
      {
        path: '/search',
        name: 'search',
        component: search
      },

    ]
  },

]



let router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;