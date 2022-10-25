<template>
  <div class="home">
    <router-link :to="{name:'position'}">task position</router-link>
    <router-link :to="{name:'page-btn'}"> btn component</router-link>
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
a{
  color: #2c3e50;
}
</style>
