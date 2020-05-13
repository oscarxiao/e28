<template>
  <div>
    <h2>Featured Experiments</h2>
    <label>Enter your experiment name: </label>
    <input type="text" v-model="searchExp" class="center" />
    <button @click="searchExperiment">Submit</button>
    <ul>
      <li v-for="exp in FilterdExperiments" :key="exp.id">{{ exp.name }}</li>
    </ul>
    <!-- Chart insert -->
    <LineChart :chart-data="dataCollection" class="center"></LineChart>
  </div>
</template>

<script>
import { exps } from "./../experiments.js";
import LineChart from "./../DataChart.js";
import * as app from "@/common/app.js";
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
      searchExp: null,
      tempLabel: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      tempData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      expKeys: null,
      expValues: null,
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
    // this.fillData();
  },
  methods: {
    fillData: function(keys, values) {
      this.dataCollection = {
        labels: keys,
        datasets: [
          {
            label: "cell count #",
            backgroundColor: "rgba(255,0, 0)",
            borderColor: "lightblue",
            pointBackgroundColor: "blue",
            borderWidth: 1,
            pointBorderColor: "blue",
            data: values,
          },
        ],
      };
    },
    searchExperiment: function() {
      let tempExp = this.searchExp;
      let tempExpKeys = [];
      let tempExpValues = [];
      //   console.log(tempExp);
      app.api.find("allExperiments", "name", tempExp).then((response) => {
        tempExpKeys = Object.keys(response);
        tempExpValues = Object.values(response);
        this.fillData(tempExpKeys, tempExpValues);
      });
    },
  },
};
</script>

<style>
.center {
  margin: auto;
  width: 50%;
  height: 500px;
}
</style>
