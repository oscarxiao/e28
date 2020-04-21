<template>
  <div id="experiments">
    <h2>Experiments</h2>
    <show-exp v-for="exp in exps" :key="exp.id" :exp="exp"></show-exp>
  </div>
</template>

<script>
import ShowExp from "./ShowExp.vue";
export default {
  component: {
    "show-exp": ShowExp
  },
  data: function() {
    return {
      exps: [
        {
          id: 1,
          name: "eOX1",
          description: "Regular 369AM MIRA",
          peptideA: 5000,
          peptideB: 6000
        },
        {
          id: 2,
          name: "eEE202",
          description: "Transgene MIRA",
          peptideA: 25000,
          peptideB: 36000
        },
        {
          id: 3,
          name: "eOX2",
          description: "Regular 369AM MIRA",
          peptideA: 45000,
          peptideB: 26000
        },
        {
          id: 4,
          name: "eOX3",
          description: "Regular 369AM MIRA",
          peptideA: 15000,
          peptideB: 16000
        },
        {
          id: 5,
          name: "eEE205",
          description: "Regular 369AM MIRA",
          peptideA: 2000,
          peptideB: 5000
        },
        {
          id: 6,
          name: "eOX4",
          description: "Regular 369AM MIRA",
          peptideA: 1000,
          peptideB: 2000
        }
      ]
    };
  }
};
</script>

<style>
</style>
