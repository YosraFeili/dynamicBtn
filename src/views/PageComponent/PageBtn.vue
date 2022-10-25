<template>
  <div class="">
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

</style>
