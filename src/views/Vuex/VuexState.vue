<template>
<div class="">state: {{text}}</div>
</template>

<script>
export default {
  name: 'VuexState',
  computed: {
    text () {
      return this.$store.state.text
    }
  }
}
</script>

<style scoped>

</style>
