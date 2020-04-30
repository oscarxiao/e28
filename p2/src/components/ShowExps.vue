<template>
  <div id="experiments">
    <h2>All Experiments</h2>
    <button @click="getAllExperiments">Get All Experiments</button>
    <show-exp v-for="exp in exps" :key="exp.id" :exp="exp"></show-exp>
  </div>
</template>

<script>
import ShowExp from "./ShowExp.vue";
// import { exps } from "./../experiments.js";
import * as app from "@/common/app.js";
export default {
  components: {
    "show-exp": ShowExp,
  },
  data: function() {
    return {
      exps: null,
    };
  },
  mounted: function() {
    console.log("Mounted working!");
    this.getAllExps;
    this.getAllExperiments;
  },
  methods: {
    getAllExps: function() {
      console.log("getAllExps function working");
      app.api.all("allExperiments");
      // .then((response) => {
      //   this.exp = response;
      //   console.log(response);
      // });
    },
    getAllExperiments: function() {
      console.log("getAllExperiments function working");
    },
  },
};
</script>

<style></style>
