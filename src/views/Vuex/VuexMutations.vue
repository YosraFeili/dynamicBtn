<template>
<div class="">
  <div class="">mutations</div>
  <div class="count">
    <div class="counter">{{count}}</div>
    <BaseBtn title="increment" type="pill" @click.native="increment"/>
  </div>
</div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn'
export default {
  name: 'VuexMutations',
  components: { BaseBtn },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment', {
        number: 3,
        text: 'name'
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
