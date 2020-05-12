import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ShowExps from "./components/ShowExps.vue";
import ExpFilter from "./components/ExpFilter.vue";
import ShowHome from "./components/ShowHome.vue";
import EnterExpDataPage from "./components/EnterExpDataPage.vue";
import exp from "@/common/exp.js";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    component: ShowHome,
    name: "Home",
  },
  {
    path: "/experiments",
    component: ShowExps,
    name: "Experiments",
  },
  {
    path: "/featuredExperiments",
    component: ExpFilter,
    name: "Featured Experiments",
  },
  {
    path: "/addExpData",
    component: EnterExpDataPage,
    name: "Add Experiment Data",
  },
];

const router = new VueRouter({
  exp: exp,
  routes: routes,
  mode: "history",
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
