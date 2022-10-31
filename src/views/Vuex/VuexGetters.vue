<template>
<div class="">
  <div class="title">getters</div>
  <div class="card-get-todos">
    <div class="">get all todos</div>
    <hr>
    <div class="card-title">
      <span>Id</span>
      <span>Name</span>
      <span>Done</span>
    </div>
    <hr>
    <div class="card-item" v-for="todo in getTodos" :key="todo.id">
      <span>{{todo.id}}</span>
      <span>{{todo.name}}</span>
      <span>{{todo.done}}</span>
    </div>
  </div>
  <div class="card-get-done-todos">
    <div class="">get done todo</div>
    <hr>
    <div class="card-title">
      <span>Id</span>
      <span>Name</span>
      <span>Done</span>
    </div>
    <hr>
    <div class="card-item" v-for="todo in doneTodos" :key="todo.id">
      <span>{{todo.id}}</span>
      <span>{{todo.name}}</span>
      <span>{{todo.done}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'VuexGetters',
  computed: {
    getTodos () {
      return this.$store.state.todos
    },
    doneTodos () {
      return this.$store.getters.doneTodos
    }
  }
}
</script>

<style scoped>
.card-get-todos {
  margin: 0 auto;
  width: 400px;
  background-color: #FFC8DD;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.card-item{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3px 0 3px 0;
}
.card-title{
  display: flex;
  justify-content: space-around;
}
.card-get-done-todos{
  margin: 0 auto;
  width: 400px;
  background-color: #cae9ff;
  border-radius: 5px;
  padding: 10px;
}
.title{
  margin-bottom: 20px;
}
</style>
