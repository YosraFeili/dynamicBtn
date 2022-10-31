<template>
  <div class="">
    <div class="header">
      todo list page
    </div>
    <div class="body-input">
      <input type="text" v-model="todo" placeholder="add task">
      <base-btn title="add task" type="square" @click.native="addTask"/>
    </div>
    <div class="text-error">{{textError}}</div>
    <div class="" v-for="(task, i) in tasks" :key="i">
      <span>{{task}}</span>
    </div>
  </div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn'
export default {
  name: 'TodoList',
  components: { BaseBtn },
  data () {
    return {
      todo: '',
      textError: '',
      tasks: []
    }
  },
  methods: {
    addTask () {
      if (this.todo === '') {
        this.textError = 'empty filed'
      } else {
        this.textError = ''
        const taskList = JSON.stringify(this.tasks)
        console.log('task list -> ', taskList)
        localStorage.setItem('tasks-list', taskList)

        this.tasks.push(this.todo)
        this.todo = ''
      }
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.body-input{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
