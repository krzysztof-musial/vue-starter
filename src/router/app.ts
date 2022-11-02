import AppLayout from "@/layouts/app-layout/AppLayout.vue";
import WorkInProgressView from "@/views/WorkInProgressView.vue";

const docsRoutes: any = [
  {
    path: "/",
    name: "app",
    component: AppLayout,
    children: [{ path: "/", name: "app.home", component: WorkInProgressView }],
  },
];

export default docsRoutes;
