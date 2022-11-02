import { createRouter, createWebHistory } from "vue-router";
import appRoutes from "@/router/app";
import docsRoutes from "@/router/docs";

// const mode = import.meta.env.MODE;
// const prod = import.meta.env.PROD;
// const dev = import.meta.env.DEV;
// console.log(mode);
// console.log(prod);
// console.log(dev);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...appRoutes, ...docsRoutes],
});

export default router;
