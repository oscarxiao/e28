<template>
  <div>
    <h2>Featured Experiments</h2>
    <ul>
      <li v-for="exp in FilterdExperiments" :key="exp.id">{{ exp.name }}</li>
    </ul>
  </div>
</template>

<script>
import { exps } from "./../experiments.js";
export default {
  name: "",
  props: ["description"],
  data: function() {
    return {
      exps: exps
    };
  },
  computed: {
    FilterdExperiments: function() {
      function isMatch(exp) {
        return exp.description.includes(this);
      }
      return this.exps.filter(isMatch, this.description);
    }
  }
};
</script>

<style>
</style>