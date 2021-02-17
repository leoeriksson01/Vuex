import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../views/HomePage";
import AboutPage from "../views/AboutPage";
import contactPage from "../views/contactPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/contactUs",
    name: "contactPage",
    component: contactPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
