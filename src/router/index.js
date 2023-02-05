import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView";
import ProjectView from "../views/ProjectView";
import TravelView from "../views/TravelView";
import PersonalView from "../views/PersonalView";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import PostView from "../views/PostView"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
  },
  {
    path: "/travels",
    name: "travel",
    component: TravelView,
  },
  {
    path: "/personal",
    name: "personal",
    component: PersonalView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: '/post', 
    name: "post", 
    component: PostView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
