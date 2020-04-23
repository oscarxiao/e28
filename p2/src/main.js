import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ShowExps from "./components/ShowExps.vue";
import ExpFilter from "./components/ExpFilter.vue";
import ShowHome from "./components/ShowHome.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    component: ShowHome,
    name: "home",
  },
  {
    path: "/experiments",
    component: ShowExps,
    name: "experiments",
  },
  {
    path: "/featuredExperiments",
    component: ExpFilter,
    name: "featuredExperiments",
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
