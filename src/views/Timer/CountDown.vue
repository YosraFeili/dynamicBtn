<template>
  <div class="">
    <div class="row">
      <input v-model="time">
     <base-btn type="square" title="start" @click.native="countDown"/>
    </div>
    <div class="circle-row">
      <div class="box">
        <svg height="120" width="120">
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="#42b983" />
        </svg>
        <div class="watch">
          {{timeAmount}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn'
export default {
  name: 'CountDown',
  components: { BaseBtn },
  data () {
    return {
      time: '',
      isStartedTimer: false,
      timeAmount: 0,
      counter: null
    }
  },
  methods: {
    countDown () {
      if (this.isStartedTimer) return
      this.timeAmount = +this.time
      this.counter = setInterval(() => {
        this.timeAmount -= 1
        if (this.timeAmount <= 0) {
          clearInterval(this.counter)
        }
      }, 1000)
      console.log('start')
    }
  }
}
</script>

<style scoped>
.row {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.circle-row{
  display: flex;
  justify-content: center;
}
.box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
  margin: 1rem auto;
}
.watch {
  position: absolute;
  top: 43px;
  right: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
