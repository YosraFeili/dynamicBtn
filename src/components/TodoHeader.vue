<template>
<div class="">
  <ul>
    <li>
      <router-link :to="{name:'home'}">Home</router-link>
    </li>
    <li>
      <router-link :to="{name:'todo'}">Task Home</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'TodoHeader'
}
</script>

<style scoped>
ul{
  display: flex;
  justify-content: start;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
}
li :active{
  background-color: #cae9ff;
}
</style>
