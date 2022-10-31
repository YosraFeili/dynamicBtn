<template>
  <div class="home">
    <ul>
      <li>
        <router-link :to="{name:'position'}">task position</router-link>
      </li>
      <li>
        <router-link :to="{name:'page-btn'}">btn component</router-link>
      </li>
      <li>
        <router-link :to="{name:'count-down'}">count down</router-link>
      </li>
      <li>
        <router-link :to="{name:'vuex-state'}">vuex state</router-link>
      </li>
      <li>
        <router-link :to="{name:'vuex-getters'}">vuex getters</router-link>
      </li>
      <li>
        <router-link :to="{name:'todo-list'}">todo list</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView'
}
</script>
<style>
.home{
  display: flex;
  justify-content: space-between;
}
ul{
  display: flex;
  justify-content: start;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1b4965;
  border-radius: 10px;
}
li a{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li :hover{
  background-color: #cae9ff;
  color: #1b4965;
}
li :active{
  background-color: #cae9ff;
}
</style>
