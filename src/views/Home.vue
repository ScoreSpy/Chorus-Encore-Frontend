<template>
  <div style="width: 100%; height: 100px">
    <v-btn @click="toggle">{{ isOn? 'im on' : 'im off' }}</v-btn>
    <span :class="{ 'isOn': isOn, 'isOff': !isOn }">clicked {{ counter }} times</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({ name: 'HomeView' })
export default class App extends Vue {
  isOn = false
  counter = 0

  toggle () {
    this.isOn = !this.isOn
    this.counter++
  }
}
</script>

<style scoped>
.isOn { color: greenyellow }
.isOff { color: red }
</style>
