<template>
  <div
    class="flex w-full h-16 p-4 bg-transparent justify-between items-center mb-4"
  >
    <div
      class="flex items-center gap-4 font-bold text-2xl dark:text-surface-400"
    >
      <span>{{ props.title }}</span>
    </div>
    <div class="flex gap-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  title: String,
});
</script>
