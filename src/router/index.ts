import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import DetailsPage from "@/pages/DetailsPage.vue";
import { store } from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/details/:id",
    name: "details",
    component: DetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(({ params }) => {
  store.commit("setHistory", { params });
});

export default router;
