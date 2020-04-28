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
      expKeys: [],
      expValues: [],
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
    fillData: function() {
      this.dataCollection = {
        //   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        // this.expKeys,
        //this.expValues,
        labels: this.expKeys,
        datasets: [
          {
            label: "cell count #",
            backgroundColor: "rgba(255,0, 0)",
            borderColor: "lightblue",
            pointBackgroundColor: "blue",
            borderWidth: 1,
            pointBorderColor: "blue",
            data: this.expValues,
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
        // console.log(tempExpKeys);
        // console.log(tempExpValues);
        this.expKeys = tempExpKeys;
        this.expValues = tempExpValues;
        console.log(this.expKeys);
        console.log(this.expValues);
      });
      this.fillData();
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
