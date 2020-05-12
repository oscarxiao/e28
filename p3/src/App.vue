<template>
  <div id="app">
    <img class="logo" alt="SpeedLab logo" src="./assets/logo.png" />
    <!-- <show-home></show-home>
    <exp-filter :exps="exps" :description="'Transgene MIRA'"></exp-filter>
    <show-exps></show-exps> -->
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
  mounted: function() {
    localStorage.setItem("savedExp", 5);
    // Initialize firebase
    // let projectId = "e28-speedlab-ox";
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBCir7UdgqdG4Z7yPww7MdYnyDFxWhnel4",
    //   authDomain: projectId + ".firebaseapp.com",
    //   databaseURL: "https://" + projectId + ".firebaseio.com",
    //   projectId: projectId,
    // });
    // // Initialize firestore
    // let api = firebase.firestore();
    // api
    //   .collection("allExperiments")
    //   .add({
    //     name: "eOX2",
    //     description: "Regular MIRA experiments shared with eEE180",
    //     pepA: 50000,
    //     pepB: 30000,
    //     pepC: 60000,
    //     pepD: 30000,
    //     pepZero1: 59000,
    //     pepZero2: 54000,
    //     pairSeq: 150000,
    //     pop1ug: 125000,
    //   })
    //   .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function(error) {
    //     console.error("Error adding document: ", error);
    //   });
    // api
    //   .collection("allExperiments")
    //   .doc("PdvGJ67RhM8rFs917kLE")
    //   .get()
    //   .then(function(doc) {
    //     console.log(doc.data());
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting documents: " + error);
    //   });
    // api
    //   .collection("allExperiments")
    //   .where("name", "==", "eOX2")
    //   .get()
    //   .then(function(querySnapshot) {
    //     console.log(querySnapshot.docs.shift().data());
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting documents: " + error);
    //   });
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
