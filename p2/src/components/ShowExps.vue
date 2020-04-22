<template>
  <div id="experiments">
    <h2>Experiments</h2>
    <show-exp v-for="exp in exps" :key="exp.id" :exp="exp"></show-exp>
  </div>
</template>

<script>
import ShowExp from "./ShowExp.vue";
import { exps } from "./../experiments.js";
export default {
  components: {
    "show-exp": ShowExp
  },
  data: function() {
    return {
      exps: exps
    };
  }
};
</script>

<style>
</style>
