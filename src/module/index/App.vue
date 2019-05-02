<template>
  <div id="app">
    <img src="./images/logo.png">
	<a href="detail.html">Detail</a>
    <Index></Index>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import Index from 'components/Index/Index'

  export default {
    name: 'app',
    components: {
      Index
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
