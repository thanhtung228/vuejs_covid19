import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import View from "../views/error-page/404";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/country/:slug",
    name: "Country",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Country.vue")
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404')
  },
  { path: '*', redirect: '/404' }
];

const router = new VueRouter({
  routes
});

export default router;
