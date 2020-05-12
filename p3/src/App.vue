<template>
  <div id="app">
    <img class="logo" alt="SpeedLab logo" src="./assets/logo.png" />
    <!-- <show-home></show-home>
    <exp-filter :exps="exps" :description="'Transgene MIRA'"></exp-filter>
    <show-exps></show-exps> -->
    <!-- {{ expCount }} -->
    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <router-link :to="{ name: link }" exact>{{ link }} </router-link>
          <!-- <router-link :to="paths[link]" exact>{{ link }} </router-link> -->
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";
// // import { exps } from "./experiments.js";
export default {
  name: "App",
  components: {
    // "show-exps": ShowExps,
    // "exp-filter": ExpFilter,
    // "show-home": ShowHome,
  },
  data: function() {
    return {
      // exps: exps,
      links: [
        "Home",
        "Experiments",
        "Featured Experiments",
        "Add Experiment Data",
      ],
      // paths: {
      //   home: "/",
      //   experiments: "/experiments",
      //   featuredExperiments: "/featuredExperiments",
      // },
    };
  },
  mounted: function() {},
  computed: {
    expCount: function() {
      return this.$lab.state.expCount;
    },
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
.logo {
  border: solid 5px lightblue;
}
</style>
