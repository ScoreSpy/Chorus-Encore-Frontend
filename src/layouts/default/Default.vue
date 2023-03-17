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

    <DefaultView />
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
