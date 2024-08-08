<template>
  <div
    class="flex flex-col h-full gap-2 p-2 bg-surface-0 text-surface-500 dark:bg-surface-900 dark:text-surface-400 rounded-xl shadow"
  >
    <div class="flex w-full p-4 -mb-4">
      <img src="/logo.svg" class="mx-auto w-10 h-10" />
    </div>

    <Divider />

    <div class="flex flex-col justify-between h-full -mt-4">
      <div class="flex flex-col gap-2">
        <div
          class="p-2 rounded hover:bg-primary-200 hover:text-black hover:dark:bg-primary-800"
          v-for="item in menuItems"
        >
          <router-link
            :to="item.to"
            class="flex flex-col gap-1 items-center justify-center h-16"
            activeClass="text-black dark:text-white"
          >
            <i class="text-3xl" :class="item.icon"></i>
            <span class="text-sm">{{ item.title }}</span>
          </router-link>
        </div>
      </div>
      <div class="flex flex-col">
        <Divider />
        <div
          class="p-2 rounded hover:bg-primary-200 hover:text-black hover:dark:bg-primary-800 -mt-2"
        >
          <router-link
            to="/settings"
            class="flex flex-col gap-1 items-center justify-center h-16"
            activeClass="text-black dark:text-white"
          >
            <i class="ph ph-gear text-3xl"></i>
            <span class="text-sm">Settings</span>
          </router-link>
        </div>
      </div>
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
]);
</script>
