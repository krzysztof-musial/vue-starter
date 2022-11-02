import DocsLayout from "@/layouts/docs-layout/DocsLayout.vue";
import MarkdownLayout from "@/layouts/markdown-layout/MarkdownLayout.vue";
import * as index from "@/views/docs/index.md";

const docsRoutes: any = [
  {
    path: "/docs",
    name: "docs",
    component: DocsLayout,
    children: [
      {
        path: "",
        name: "docs.index",
        component: MarkdownLayout,
        props: { md: index },
      },
    ],
  },
];

export default docsRoutes;
