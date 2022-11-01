<template>
  <div class="">
    <div class="">
      <TodoHeader/>
    </div>
    <div class="">
      <FilterBox/>
    </div>
    <div class="card" v-for="todo in tasks" :key="todo.id">
      <div class="card-body">{{ todo.todo }}</div>
      <div class="card-icon">
        <div style="cursor: pointer;">
          <img src="../../../assets/todo-list/check.png">
        </div>
        <div style="cursor: pointer;">
          <img src="@/assets/todo-list/trash-bin.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader'
import FilterBox from '@/components/FilterBox'

export default {
  name: 'HomeStore',
  components: { FilterBox, TodoHeader },
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },

  mounted () {
    this.getTasks()
  },

  methods: {
    getTasks () {
      this.$store.dispatch('getTasks')
    }
  }
}
</script>

<style scoped>
.card {
  margin: 10px;
  width: 30%;
  height: 30px;
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  border: 1px solid gray;
  border-radius: 5px;
}

.card-body {
  display: flex;
  justify-content: start;
  width: 55%;
  font-size: 13px;
  text-align: left;
}

.card-icon {
  width: 5%;
  display: flex;
  justify-content: start;
}
</style>
