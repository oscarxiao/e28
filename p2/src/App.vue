<template>
  <div id="app">
    <img alt="SpeedLab logo" src="./assets/logo.png" />
    <!-- <show-home></show-home>
    <exp-filter :exps="exps" :description="'Transgene MIRA'"></exp-filter>
    <show-exps></show-exps> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { exps } from "./experiments.js";
export default {
  name: "App",
  components: {
    // "show-exps": ShowExps,
    // "exp-filter": ExpFilter,
    // "show-home": ShowHome,
  },
  data: function() {
    return { exps: exps };
  },
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
