<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PageDisplay/>
    <PieChart/>
  </div>
</template>

<script>
import PageDisplay from './components/PageDisplay.vue'
import PieChart from './components/PieChart.vue'

export default {
  name: 'App',
  components: {
    PageDisplay,
    PieChart
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
