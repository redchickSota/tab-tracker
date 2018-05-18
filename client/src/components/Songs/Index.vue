<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2"/>
    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-flex>

  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import SongsService from '@/services/SongsService'
import SongsBookmarks from './SongsBookmarks'
import SongsPanel from './SongsPanel'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsSearchPanel from './SongsSearchPanel'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
    ])
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overeflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
