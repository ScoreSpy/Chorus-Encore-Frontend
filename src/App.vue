<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({ name: 'App' })
export default class App extends Vue {

}
</script>
