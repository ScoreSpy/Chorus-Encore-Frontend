<template>
  <div class="diff-image-container">
    <div class="diff-image-container-EMHX" style="color: white">
      <span :style="`color: ${diffLabels.E ? 'while' : 'grey'}`">E</span>
      <span :style="`color: ${diffLabels.M ? 'while' : 'grey'}`">M</span>
      <span :style="`color: ${diffLabels.H ? 'while' : 'grey'}`">H</span>
      <span :style="`color: ${diffLabels.X ? 'while' : 'grey'}`">X</span>
    </div>
    <v-img style="margin-left: 10px;" width="30px" :src="getInstrumentsIcon(iconName!)"></v-img>
    <div class="diff-image-container-text-dot" ></div>
    <div class="diff-image-container-text" style="color: white"> {{ difficulty }} </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Difficulty } from '@/types/chorus'

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true,
    },
    difficulty: {
      type: Number,
      required: true,
    },
    difficultyLabels: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      diffLabels: {
        E: false,
        M: false,
        H: false,
        X: false
      }
    }
  },
  mounted() {
    if ((this.difficultyLabels & Difficulty.Easy) === Difficulty.Easy) { this.diffLabels.E = true }
    if ((this.difficultyLabels & Difficulty.Medium) === Difficulty.Medium) { this.diffLabels.M = true }
    if ((this.difficultyLabels & Difficulty.Hard) === Difficulty.Hard) { this.diffLabels.H = true }
    if ((this.difficultyLabels & Difficulty.Expert) === Difficulty.Expert) { this.diffLabels.X = true }
  },
  methods: {
    getInstrumentsIcon: function (icon: string) {
      return `/instruments/${icon}.png`
    }
  }
})
</script>

<style scoped>
.diff-image-container {
  position: relative;
  align-items: center;
  display: flex;
}

.diff-image-container-text-dot {
  position: absolute;
  border-radius: 50%;
  background-color: darkred;
  width: 15px;
  height: 15px;
  top: 18px;
  left: 5px
}
.diff-image-container-text {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 16px;
  left: 9px;
  font-weight: bold;
}

.diff-image-container-EMHX {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: -12px;
  left: 9px;
  font-size: smaller;
}
</style>
