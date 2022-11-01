<template>
<div class="">
  <div style="text-align: left;margin: 20px 0 0 10px">Filter Tasks:</div>
  <div class="custom-select">
    <select v-model="number" @change="filterTasks" style="width: 300px;padding: 10px">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </div>
</div>
</template>

<script>
export default {
  name: 'FilterBox',

  data () {
    return {
      number: ''
    }
  },

  methods: {
    filterTasks () {
      this.$store.dispatch('filterTasks', this.number)
    }
  }
}
</script>

<style scoped>
.custom-select{
  display: flex;
  justify-content: start;
  margin: 10px 0 20px 10px
}
</style>
