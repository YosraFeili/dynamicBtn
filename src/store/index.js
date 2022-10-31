import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: ['test', 'hello', 'start'],
    todos: [
      {
        id: 1,
        name: 'todo 1',
        done: true
      },
      {
        id: 2,
        name: 'todo 2',
        done: true
      },
      {
        id: 3,
        name: 'todo 3',
        done: false
      }
    ],
    count: 0
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.number
    }
  },
  actions: {
  },
  modules: {
  }
})
