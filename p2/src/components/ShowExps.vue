<template>
  <div id="experiments">
    <h2>Experiments</h2>
    <show-exp v-for="exp in exps" :key="exp.id" :exp="exp"></show-exp>
  </div>
</template>

<script>
import ShowExp from "./ShowExp.vue";
import { exps } from "./../experiments.js";
import * as app from "@/common/app.js";
export default {
  components: {
    "show-exp": ShowExp,
  },
  data: function() {
    return {
      exps: exps,
    };
  },
  mounted: function() {
    this.getAllExperiments;
  },
  methods: {
    getAllExperiments: function() {
      console.log("getAllExperiments function working");
      app.api.all("allExperiments").then((response) => {
        console.log(response);
        // results[doc.id] = doc.data();
      });
    },
  },
};
</script>

<style></style>
