<template>
  <v-row class="d-flex justify-center">
    <v-col class="d-flex align-center" cols="12" xl="6" md="10" :class="'grow-on-hover'">

      <div class="song-item" :class="somevalue! % 2 ? 'card_even' : 'card_odd'">
        <div style="padding: 8px; padding-bottom: unset;">
          <div class="d-flex align-items-center" style="justify-content: space-between; padding-bottom: 5px">
            <div style="display: flex; align-items: center; justify-content: center; font-size:x-large;">
              {{title}} - {{artist}}
            </div>

            <div v-if="icon">
              <v-img width="40px" :src="getCharterIcon(icon)" />
            </div>
          </div>

          <hr>

          <div class="d-flex align-items-center" style="width: 100%; justify-content: space-between; margin-top: 12px">
            <div style="display: flex; align-items: center; justify-content: center; font-size:small;">
              {{source}}
            </div>
            <div style="display: flex; align-items: center; justify-content: center; font-size:small; color: #ccc ">
              <v-img style="margin-left: 4px;" width="20px" :src="getInstrumentsIcon('bass')"></v-img>
              <v-img style="margin-left: 4px" width="20px" :src="getInstrumentsIcon('drums')"></v-img>
              <v-img style="margin-left: 4px" width="20px" :src="getInstrumentsIcon('ghl_bass')"></v-img>
              <v-img style="margin-left: 4px" width="20px" :src="getInstrumentsIcon('ghl_guitar')"></v-img>
              <v-img style="margin-left: 4px" width="20px" :src="getInstrumentsIcon('guitar')"></v-img>
              <v-img style="margin-left: 4px" width="20px" :src="getInstrumentsIcon('keys')"></v-img>

            </div>
          </div>

          <div class="d-flex align-items-center" style="width: 100%; justify-content: space-between; margin-top: 12px">
            <div style="display: flex; align-items: center; justify-content: center; font-size:x-large;">
              <v-btn variant="text" color="primary" style="padding: unset">Download {{charter}}'s chart</v-btn>
            </div>
            <div style="display: flex; align-items: center; justify-content: center; font-size:small; color: #ccc ">
              {{date}} - {{checksum}}
            </div>
          </div>

        </div>
        <v-btn block height="20px" color="#28343F">
          <v-icon icon="mdi-chevron-down"></v-icon>
        </v-btn>
      </div>

    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    somevalue: Number
  },
  data() {
    return {
      icon: 'csc',
      title: 'Staff Credits',
      artist: 'Mario Kart Band',
      charter: '3-UP',
      source: 'Mario Kart 8 Original Soundtrack',
      download: 'click me',
      date: '000-00-00',
      checksum: '234597878345927893425',
      notesPerSecond: '9001'
    }
  },
  mounted() {

  },
  methods: {
    getCharterIcon: function (icon: string) {
      return `/charterIcons/${icon}.png`
    },
    getInstrumentsIcon: function (icon: string) {
      return `/instruments/${icon}.png`
    }
  }
})
</script>

<style scoped>
.song-item {
  width: 100%;
}

.song-info {
  width: 100%;
  align-items: center;
}

.song-icon {
  margin-right: 16px;
}

.song-title {
  font-size: 24px;
  font-weight: bold;
}

.song-artist,
.song-charter,
.song-source,
.song-download,
.song-date,
.song-checksum,
.song-notes {
  color: white;
  font-size: small;
}

.card_odd {
  background-color: hsla(0,0%,100%,.06667);
}

.card_even {
  background-color: hsla(0,0%,100%,.13333)
}

.grow-on-hover {
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
}

.grow-on-hover:hover {
  transform: scale(1.05);
}
</style>
