<template lang="pug">

  #app
    img(src='./assets/logo.png')
    h1 PlatziMusic
    ul
      artist(v-for="artist in artists" v-bind:artist = 'artist')

      h1 funciona???
</template>

<script>

import Artist from './components/Artist'  // importo el componente  nuevo Artist
import getArtists from './api'  // importo la clase index  con el metodo

  export default {
      name: 'app',
      data () {
        return {
          artists: []
        }
      },

      components: {
        Artist : Artist

      },

      mounted: function () {
        const self = this
        getArtists()
          .then(function (artists) {
            self.artists = artists
          })
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
