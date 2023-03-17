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
</template>

<script lang="ts" setup>

</script>
