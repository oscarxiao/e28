<template>
  <div id="experiments">
    <h2>All Experiments</h2>
    <button>Get All Experiments({{ expCount }})</button>
    <show-exp v-for="exp in exps" :key="exp.id" :exp="exp"></show-exp>
  </div>
</template>

<script>
import ShowExp from "./ShowExp.vue";

export default {
  components: {
    "show-exp": ShowExp,
  },
  data: function() {
    return {};
  },
  mounted: function() {
    this.$store.dispatch("showExps");
  },
  computed: {
    expCount: function() {
      return this.$store.state.expCount;
    },
    exps: function() {
      return this.$store.state.allExps;
    },
  },
  methods: {},
};
</script>

<style></style>
