<template>
  <div class="docs-layout">
    <Transition>
      <div
        v-if="!menu.hidden"
        class="docs-layout__overlay"
        @click="menu.hidden = true"
      ></div>
    </Transition>
    <div
      ref="menuRef"
      class="docs-layout__menu"
      :style="menu.hidden ? `left: -${menu.size}px` : ''"
    >
      <div class="docs-layout__menu__header">
        <p class="font-semibold">Dokumentacja</p>
        <button
          @click="menu.hidden = true"
          class="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
        >
          <XMarkIcon class="h-6 w-6 text-black" />
        </button>
      </div>
      <div class="docs-layout__menu__content">Menu</div>
    </div>
    <div class="docs-layout__main">
      <div class="docs-layout__main__header">
        <button
          @click="menu.hidden = false"
          class="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
        >
          <Bars3BottomLeftIcon class="h-6 w-6 text-black" />
        </button>
        <p>Temp</p>
      </div>
      <div class="docs-layout__main__content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/vue/24/solid";

export default defineComponent({
  name: "DocsLayout",
  components: {
    Bars3BottomLeftIcon,
    XMarkIcon,
  },
  data() {
    return {
      menu: {
        hidden: true,
        size: 320,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.docs-layout {
  @apply relative min-h-screen w-full;
  @apply lg:flex;
  &__overlay {
    @apply fixed top-0 left-0 z-10 h-screen w-full bg-black opacity-25;
    @apply lg:hidden;
  }
  &__menu {
    @apply fixed top-0 left-0 z-10 h-screen w-full max-w-xs border-r border-slate-200 bg-white transition-all duration-500 ease-in-out;
    @apply lg:sticky lg:left-0 lg:top-0;
    &__header {
      @apply flex items-center justify-between border-b border-slate-200 p-2 pl-4;
      @apply lg:p-4;
    }
    &__content {
      @apply p-4;
    }
  }
  &__main {
    @apply w-full;
    &__header {
      @apply sticky top-0 z-0 flex items-center justify-between border-b border-slate-200 bg-white p-2;
      @apply lg:p-4;
    }
    &__content {
      @apply m-auto max-w-screen-lg p-4;
      @apply lg:p-8;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
