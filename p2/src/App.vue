<template>
  <div id="app">
    <img alt="SpeedLab logo" src="./assets/logo.png" />
    <p>SpeedLab is your expedite and smart way to save and present your lab experimental data.</p>
    <show-exps></show-exps>
  </div>
</template>

<script>
import ShowExps from "./components/ShowExps.vue";
export default {
  name: "App",
  components: {
    "show-exps": ShowExps
  }
};
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
