<template>
  <div class="flex w-full h-screen gap-4 p-4">
    <Sidebar />
    <div class="flex flex-col w-full">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const search = computed({
  get() {
    return route.query.search ?? "";
  },
  set(search) {
    router.replace({ query: { search } });
  },
});
</script>

<style></style>
