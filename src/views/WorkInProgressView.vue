<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div>
      <p class="font-medium">Work in progress.</p>
      <router-link to="/docs" class="text-sm hover:underline"
        >Dokumentacja</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style scoped></style>
