<template>
<div class="">
  <div class="">actions</div>
  <div class="">{{number}}</div>
  <base-btn title="decrease" type="pill" @click.native="decrease()"/>
</div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn'
export default {
  name: 'VuexActions',
  components: { BaseBtn },
  computed: {
    number () {
      return this.$store.state.number
    }
  },
  methods: {
    decrease () {
      this.$store.dispatch('decrease', {
        number: 3
      })
    }
  }
}
</script>

<style scoped>

</style>
