<template>
  <div
    class="flex flex-col h-full gap-2 p-2 bg-surface-0 dark:bg-surface-900 dark:text-surface-400 rounded-xl shadow"
  >
    <div class="flex w-full p-4 -mb-4">
      <img src="/logo.svg" class="mx-auto w-10 h-10" />
    </div>

    <Divider />

    <div
      class="p-2 rounded hover:bg-primary-200 hover:dark:bg-primary-800"
      v-for="item in menuItems"
    >
      <router-link
        :to="item.to"
        class="flex flex-col gap-1 items-center justify-center h-16"
      >
        <i class="text-3xl" :class="item.icon"></i>
        <span class="text-sm">{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import Divider from "primevue/divider";

const menuItems = ref([
  {
    title: "Dashboard",
    icon: "ph ph-squares-four",
    to: "/",
  },
  {
    title: "Income",
    icon: "ph ph-hand-coins",
    to: "/income",
  },
  {
    title: "Expenses",
    icon: "ph ph-coins",
    to: "/expenses",
  },
  {
    title: "Settings",
    icon: "ph ph-gear",
    to: "/settings",
  },
]);
</script>
