<template>
<div class="body">
    <div class="first"></div>
    <div class="second"></div>
    <div class="third"></div>
    <div class="fourth"></div>
  <div class="fifth"></div>
  </div>
</template>

<script>
export default {
  name: 'UiPosition'
}
</script>

<style scoped>
.body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}
.first{
  background-color: #FFAFCC;
  width: 100px;
  height: 500px;
  position: absolute;
  right: 693px;
}
.second{
  background-color: #CDB4DB;
  width: 500px;
  height: 100px;
  position: absolute;
  bottom: 234px;
}
.third{
  background-color: #BDE0FE;
  width: 100px;
  height: 500px;
  position: absolute;
  left: 694px;
}
.fourth{
  background-color: #FFC8DD;
  width: 400px;
  height: 100px;
  position: absolute;
  top: 235px;
  left: 694px;
}
.fifth{
  background-color: #A2D2FF;
  position: absolute;
  top: 335px;
  width: 300px;
  height: 300px;
  z-index: -1;
}
</style>
