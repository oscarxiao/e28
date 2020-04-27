<template>
  <div>
    <h2>Featured Experiments</h2>
    <ul>
      <li v-for="exp in FilterdExperiments" :key="exp.id">{{ exp.name }}</li>
    </ul>
    <!-- Chart insert -->
    <LineChart :chart-data="dataCollection"></LineChart>
  </div>
</template>

<script>
import { exps } from "./../experiments.js";
import LineChart from "./../DataChart.js";
export default {
  name: "",
  props: ["description"],
  components: {
    LineChart,
  },
  data: function() {
    return {
      exps: exps,
      dataCollection: null,
      loaded: false,
    };
  },
  computed: {
    FilterdExperiments: function() {
      function isMatch(exp) {
        return exp.description.includes(this);
      }
      return this.exps.filter(isMatch, this.description);
    },
  },
  mounted: function() {
    this.fillData();
  },
  methods: {
    fillData: function() {
      this.dataCollection = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
          {
            label: "cell count #",
            backgroundColor: "rgba(255,0, 0)",
            borderColor: "lightblue",
            pointBackgroundColor: "blue",
            borderWidth: 1,
            pointBorderColor: "blue",
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          },
        ],
      };
    },
  },
};
</script>

<style></style>
