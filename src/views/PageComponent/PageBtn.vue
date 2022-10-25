<template>
  <div class="">
    <BaseBtn :title="title"/>
  </div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn'

export default {
  name: 'PageBtn',
  components: { BaseBtn },
  data () {
    return {
      title: 'send'
    }
  }
}
</script>

<style scoped>

</style>
