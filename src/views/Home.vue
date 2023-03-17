<template>
  <v-app-bar app color="#2c3e50" name="app-bar" class="justify-center">
    <v-row class="justify-center">
      <v-col class="d-flex" xs="0" sm="0" md="3" lg="3" xl="3"></v-col>
      <v-col class="d-flex align-center" cols="12" md="6">
        <v-text-field
          color="primary"
          density="compact"
          label="What do you feel like playing today?"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-col class="d-none d-md-block" xs="0" sm="0" md="3" lg="3" xl="3">
        <v-btn variant="text" color="#DA9E0E">Advanced Search</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>

  <v-row class="d-flex justify-center">
    <v-col class="d-flex align-center" cols="12" xl="6" md="10" :class="'grow-on-hover'">
      <div class="d-flex align-items-center" style="width: 100%; justify-content: space-between; margin-top: 12px">
        <div style="display: flex; align-items: center; justify-content: center;">
          Latest Charts
        </div>
        <div style="display: flex; align-items: center; justify-content: center; font-size:small; color: #ccc ">
          <span style="color: rgb(var(--v-theme-primary))">123456</span> 	&nbsp;Charts
        </div>
      </div>
    </v-col>
  </v-row>

  <template v-for="(entry, index) in songs" :key="entry">
    <SongItem :somevalue="index" />
  </template>

  <v-row class="d-flex justify-center" style="margin: 10px">
    <v-col cols="12" lg="8" md="10" class="d-flex justify-center">
      <v-btn color="primary" variant="text">
        More Songs
      </v-btn>

    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SongItem from '@/components/songItem.vue'

export default defineComponent({
  components: { SongItem },
  data() {
    return {
      songs: [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,9,0]
    }
  },
  mounted() {

  },
  methods: {
    openUrl: function (url: string) {
      window.open(url, '_blank')?.focus()
    }
  }
})
</script>
