<template>
  <div class="markdown-layout">
    <div v-html="html" class="prose prose-slate max-w-none"></div>
    <div class="flex flex-col gap-4">
      <p class="whitespace-nowrap text-sm font-semibold">On this page</p>
      <ul class="flex flex-col gap-2">
        <li
          v-for="section in toc"
          :key="section.content"
          class="whitespace-nowrap text-sm"
        >
          {{ section.content }}
        </li>
      </ul>
    </div>
  </div>
  <!-- <component :is="md.VueComponent" /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarkdownComponent",
  props: {
    md: {
      type: Object,
      required: true,
    },
  },
  computed: {
    html() {
      return this.md.html;
    },
    toc() {
      return this.md.toc.filter(
        (section: { level: string; content: string }) => section.level === "1"
      );
    },
  },
  mounted() {
    console.log(this.md);
  },
});
</script>

<style scoped>
.markdown-layout {
  @apply flex flex-col-reverse gap-8;
  @apply lg:flex-row;
}
</style>
