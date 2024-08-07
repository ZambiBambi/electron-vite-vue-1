import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Dashboard.vue") },
  { path: "/income", component: () => import("../views/Income.vue") },
  {
    path: "/expenses",
    component: () => import("../views/Expenses.vue"),
  },
  { path: "/settings", component: () => import("../views/Settings.vue") },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
