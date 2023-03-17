<template>
  <v-row class="d-flex justify-center">
    <v-col class="d-flex align-center" cols="12" lg="8" md="10">

      <div class="song-item" :class="somevalue! % 2 ? 'card_even' : 'card_odd'">
        <div class="song-info">
          <div class="song-icon">
            <!-- small icon -->
            {{icon}} {{ somevalue }}
          </div>
          <div class="song-details">
            <div class="song-title">
              <!-- title -->
              {{title}} - {{artist}}
            </div>
            <div class="song-charter">
              <!-- charter -->
              {{charter}}
            </div>
            <div class="song-source">
              <!-- source -->
              {{source}}
            </div>
            <div class="song-download">
              <!-- download -->
              {{download}}
            </div>
            <div class="song-date">
              <!-- date -->
              {{date}}
            </div>
            <div class="song-checksum">
              <!-- checksum -->
              {{checksum}}
            </div>
            <div class="song-notes">
              <!-- notes per second -->
              {{notesPerSecond}}
            </div>
          </div>
        </div>
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

  }
})
</script>

<style scoped>
  .song-item {
    width: 100%;
  }

  .song-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
  }

  .song-icon {
    margin-right: 16px;
  }

  .song-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .song-artist,
  .song-charter,
  .song-source,
  .song-download,
  .song-date,
  .song-checksum,
  .song-notes {
    margin-bottom: 8px;
  }


.card_odd {
  background-color: hsla(0,0%,100%,.06667);
}

.card_even {
  background-color: hsla(0,0%,100%,.13333)
}
</style>
