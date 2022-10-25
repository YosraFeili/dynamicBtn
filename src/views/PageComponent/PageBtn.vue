<template>
  <div class="container">
    <BaseBtn title="send" type="circle" @click.native="test"/>
  </div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn'

export default {
  name: 'PageBtn',
  components: { BaseBtn },
  data () {
    return {
      color: 'green'
    }
  },
  methods: {
    test () {
      console.log('123')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}
</style>
