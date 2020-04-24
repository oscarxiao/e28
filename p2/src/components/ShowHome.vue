<template>
  <div>
    <p>
      SpeedLab is your expedite and smart way to save and present your lab
      experimental data.
    </p>
    <exp-filter :exps="exps" :description="featuredCategory"></exp-filter>
  </div>
</template>

<script>
import { exps } from "./../experiments.js";
import ExpFilter from "./ExpFilter.vue";
export default {
  name: "",
  components: {
    "exp-filter": ExpFilter,
  },
  data: function() {
    return {
      featuredCategory: "Regular 369AM MIRA",
      exps: exps,
    };
  },
};
</script>

<style></style>
