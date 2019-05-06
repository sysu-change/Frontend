<template>
  <div id="app">
	  <Register></Register>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import Register from 'components/Register/Register'

  export default {
    name: 'app',
    components: {
      Register
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
