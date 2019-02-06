<template lang="pug">
  #app
    img(src='https://marcelojoc.github.io/reVueapp/vuemusic/dist/assets/logo.png')
    h1 PlatziMusic
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>

import Artist from './components/Artist.vue'  // importo el componente  nuevo Artist
import Spinner from './components/spinner.vue'  // importo el componente  nuevo Artist
import getArtists from './api'  // importo la clase index  con el metodo

  export default {
      name: 'app',
      data () {
        return {
            artists: [],
            countries: [
              { name: 'Argentina', value: 'argentina' },
              { name: 'Colombia', value: 'colombia' },
              { name: 'España', value: 'spain' },
            ],
            selectedCountry: 'argentina',
            loading: true
        }
      },

      components: {
        Artist,
        Spinner
      },

      methods:{

        refreshArtists: function(){
              const self = this
              this.loading = true
              getArtists(this.selectedCountry)
                .then(function (artists) {
                  self.loading=false
                  self.artists = artists
                })
        }

      },
      mounted() {
        this.refreshArtists()
      },
      watch: {
        selectedCountry() {
          this.refreshArtists()
        }

      }
  }
</script>

<style lang="stylus">

    #app
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e20
      margin-top 60px
    h1, h2
      font-weight normal
    ul
      list-style-type none
      padding 0
    li
      display inline-block
      margin 0 15px
    a
      color red

</style>
