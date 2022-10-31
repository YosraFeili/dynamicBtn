<template>
<div class="">
  <div class="">actions</div>
  <div class="count">
    <div class="counter">{{number}}</div>
    <base-btn title="decrease" type="pill" @click.native="decrease()"/>
  </div>
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
        number: 10
      })
    }
  }
}
</script>

<style scoped>
.count{
  margin-top: 20px
}
.counter{
  margin-bottom: 20px;
}
</style>
