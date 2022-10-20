<template>
  <v-app>
    <v-app-bar class="bg-banner" density="compact">
      <v-row no-gutters class="flex-nowrap" justify="center">

        <v-col cols="0" sm="0" md="1" lg="2" xl="3" />

        <v-col cols="12" sm="12" md="10" lg="8" xl="6">
          <v-img :src="bannerImage" :aspect-ratio="1" height="48" />
        </v-col>

        <v-col cols="0" sm="0" md="1" lg="2" xl="3">

        </v-col>
      </v-row>
    </v-app-bar>

    <v-app-bar class="bg-navigation" density="default">
      <v-row no-gutters class="flex-nowrap" justify="center">

        <v-col sm="12" lg="8" xl="5" class="pa-2">
          <v-text-field :loading="loading" density="compact" variant="solo" label="Search songs" append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick" />
        </v-col>

      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="bg-navigation" style="flex: unset">
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link[0]" @click="openInTab(link[1])" color="white" variant="text"
          class="mx-2" rounded="xl">
          {{ link[0] }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          © {{ new Date().getFullYear() }} — ScoreSpy
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({ name: 'App' })
export default class App extends Vue {
  bannerImage = require('@/assets/banner.png')
  loading = false
  loaded = false
  links = [
    ['Discord', 'https://scorespy.online/'],
    ['GitHub', 'https://scorespy.online/'],
    ['Report Bug', 'https://scorespy.online/'],
    ['ScoreSpy', 'https://scorespy.online/'],
    ['Add your songs', 'https://scorespy.online/']
  ]

  openInTab (url: string) {
    window.open(url, '_blank')
  }

  onClick () {
    this.loading = true

    setTimeout(() => {
      this.loading = false
      this.loaded = true
    }, 2000)
  }
}
</script>

<style scoped>
.headderButtons {
  max-width: 150px;
  text-align: right;
  margin-top: 4px;
  height: 100%;
}
</style>
