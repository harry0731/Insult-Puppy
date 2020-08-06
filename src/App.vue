<template>
  <div id="app">
    <img alt="pic" src="./assets/insult.jpg" width="50%" height="50%">
    <br>
    <HelloWorld msg="This website's purpose is insulting you"/>
    <evilapi/>
    <puppy/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import evilapi from './components/EvilAPI.vue'
import puppy from './components/Puppy.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    evilapi,
    puppy
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
