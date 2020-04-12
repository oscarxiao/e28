// vue will be pulled in after setting up the npm
import Vue from "vue";
//The components which are going to be used will be imported through a path
import RoundDetail from "./components/RoundDetail.vue";

let app = new Vue({
  el: "#app",
  data: {
    rounds: [
      { number: 1, winner: "Computer", coin: "heads", choice: "heads" },
      { number: 2, winner: "Computer", coin: "tails", choice: "tails" },
      { number: 3, winner: "Computer", coin: "heads", choice: "tails" }
    ]
  },
  components: {
    //The components which are going to be used will be added into this component section
    // be careful about the naming style of the component, template used kebob style eg. "round-detail", file name used pascal style eg. "RoundDetail"
    "round-detail": RoundDetail
  },
  methods: {
    deleteRound: function(number) {
      function isMatchingRound(round) {
        return round.number != this;
      }
      this.rounds = this.rounds.filter(isMatchingRound, number);
    }
  },
  computed: {},
  mounted: function() {}
});
