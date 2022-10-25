<template>
  <div class="">
    <button :class="{
      pill : type === 'pill',
      circle : type === 'circle',
      square : type === 'square'
    }">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    color: String,
    title: {
      type: String,
      required: true
    },
    type: String
  }
}
</script>

<style scoped>
.pill {
  width: 100px;
  height: 30px;
  font-size: 15px;
  background-color: #2c3e50;
  color: white;
  border-radius: 999px;
  border: none;
  cursor: pointer;
}
.circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #CDB4DB;
  color: #2c3e50;
  border: none;
  cursor: pointer;
}
.square{
  width: 80px;
  background-color: #42b983;
  color: white;
  border: 2px solid #42b983;
}
</style>
