<template lang="pug">
  li.artist
    h2: a(:href="artist.url" target="_blank") {{ artist.name }}
    img(:src="artist.image[2]['#text']" v-on:click='alerta')
</template>

<script>
export default {
  name: 'artist',
  props: [ 'artist' ],

  methods:{

    alerta: function (){

      alert('esto es una alerta del componente'+ JSON.stringify(this.artist));


    },



  }
}
</script>

<style lang="stylus" scoped>
li.artist
  display block
  margin 10px 0
</style>
