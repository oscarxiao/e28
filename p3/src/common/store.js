import Vue from "vue";
import Vuex from "vuex";
import * as app from "@/common/app.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    expCount: 0,
    allExps: [],
  },
  mutations: {
    setExpCount(state, payload) {
      state.expCount = payload;
    },
    updateExpCount(state, payload) {
      state.expCount += payload;
    },
    showAllExps(state, payload) {
      state.allExps = payload;
      state.expCount = state.allExps.length;
    },
  },
  actions: {
    showExps(context) {
      app.api.all("allExperiments").then((response) => {
        context.commit("showAllExps", response);
        context.commit("setExpCount", Object.keys(response).length);
      });
    },
  },
  getters: {
    getExpByName(state) {
      return function(name) {
        for (let key of Object.keys(state.allExps)) {
          if (state.allExps[key].name == name) {
            return state.allExps[key];
          }
        }
      };
    },
  },
});
