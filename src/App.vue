<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss">
@import './src/assets/scss/main.scss';

body {
  font-family: 'Noto Sans TC';
}
#app {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
