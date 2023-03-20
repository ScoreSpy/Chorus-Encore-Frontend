<template>
  <v-app>

    <v-system-bar app window color="#2980b9" height="40">
      <v-row>

        <v-col xs="3" sm="3" md="3" lg="3" xl="3">
          <div class="d-flex flex-row">
            <v-btn color="white" variant="plain" icon="mdi-bug-check" @click="openUrl('https://github.com/ScoreSpy/Chorus-Encore-Issues')"/>
          </div>
        </v-col>

        <v-col class="d-flex align-center" cols="6" md="6">
          <v-img contain height="35" src="@/assets/logo.png" />
        </v-col>

        <v-col xs="3" sm="3" md="3" lg="3" xl="3">
          <div class="d-flex flex-row-reverse">
            <v-btn color="white" variant="plain" icon="mdi-login" to="/login"></v-btn>
          </div>
        </v-col>
      </v-row>
    </v-system-bar>

    <DefaultView />

    <v-footer absolute style="position: fixed; bottom: 10px;">NON FUNCTIONAL PREVIEW BUILD</v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefaultView from './View.vue'

export default defineComponent({
  components: { DefaultView },
  data() {
    return {

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
