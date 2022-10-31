import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UiPosition from '@/views/Design/position/UiPosition'
import PageBtn from '@/views/PageComponent/PageBtn'
import CountDown from '@/views/Timer/CountDown'
import VuexState from '@/views/Vuex/VuexState'
import TodoList from '@/views/TodoList/TodoList'
import VuexGetters from '@/views/Vuex/VuexGetters'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/position-task',
    name: 'position',
    component: UiPosition
  },
  {
    path: '/page-btn',
    name: 'page-btn',
    component: PageBtn
  },
  {
    path: '/count-down',
    name: 'count-down',
    component: CountDown
  },
  {
    path: '/vuex-state',
    name: 'vuex-state',
    component: VuexState
  },
  {
    path: '/vuex-getters',
    name: 'vuex-getters',
    component: VuexGetters
  },
  {
    path: '/todo-list',
    name: 'todo-list',
    component: TodoList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
