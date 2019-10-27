import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Prize from "../views/Prize.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/prize/:name",
    name: "prize",
    // route level code-splitting
    // this generates a separate chunk (prize.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "prize" */ "../views/Prize.vue")
    component: Prize
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
