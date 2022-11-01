import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    count: 0,
    number: 30,
    tasks: []
  },

  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    }
  },

  mutations: {
    increment (state, payload) {
      state.count += payload.number
    },

    decrease (state, payload) {
      state.number -= payload
    },

    setTasks (state, tasks) {
      state.tasks = tasks
    }
  },

  actions: {
    decrease ({ commit }, payload) {
      commit('decrease', payload.number)
    },

    getTasks ({ commit }) {
      axios.get('https://dummyjson.com/todos').then((res) => {
        commit('setTasks', res.data.todos)
      }).catch((err) => {
        console.log(err)
      })
    },

    filterTasks ({ commit }, limit) {
      axios.get(`https://dummyjson.com/todos?limit=${limit}`).then((res) => {
        commit('setTasks', res.data.todos)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {}
})
