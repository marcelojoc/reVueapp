<template lang="pug">

  #app
    img(src='./assets/logo.png')
    h1 PlatziMusic
    ul
      li(v-for="artist in artists") {{ artist.name }}
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        artists: [

          {name:'asasasasas'},
          {name:'asasasaerrrrrrrrrrrrrsas'},
          {name:'asasasaerrrrrrrrrrrrrsas'},
          {name:'asasasaerrrrrrrrrrrrrsas'},
          {name:'asasasaerrrrrrrrrrrrrsas'},
          {name:'asasasaerrrrrrrrrrrrrsas'},
          {name:'asasasaerrrrrrrrrrrrrsas'},
          {name:'aaaaaaaaaaaaaaaaa'},
          {name:'asasasasas'},
          {name:'bbbbbbbbbbbbbbbbbb'},



        ]
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
