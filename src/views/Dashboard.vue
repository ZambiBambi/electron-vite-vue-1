<template>
  <Navbar title="Dashboard"></Navbar>

  <div
    class="flex p-4 flex-col w-full h-full bg-surface-0 dark:bg-surface-900 rounded-xl shadow overflow-y-auto"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import { GetExpenses, AddExpense } from "@/renderer/database";

import Button from "primevue/button";

import Navbar from "@/components/Navbar.vue";

onMounted(async () => {
  expenses.value = await GetExpenses();

  console.log("Expenses", expenses.value);
});

const expenses = ref();

const addNewExpense = async () => {
  await AddExpense({
    amount: 100,
    title: "Test",
  });

  refreshExpenses();
};

const refreshExpenses = async () => {
  expenses.value = await GetExpenses();

  console.log("Expenses", await GetExpenses());
};
</script>
