import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Experiments({
  state: {
    expCount: 0,
    allExperiments: [],
  },
});
