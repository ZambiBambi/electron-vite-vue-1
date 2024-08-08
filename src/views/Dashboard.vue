<template>
  <Navbar title="Dashboard"></Navbar>

  <div
    class="flex p-4 flex-col w-full h-full bg-surface-0 dark:bg-surface-900 rounded-xl shadow overflow-y-auto"
  >
    {{ totalExpenses }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import { GetExpenses, AddExpense } from "@/renderer/database";

import Button from "primevue/button";

import Navbar from "@/components/Navbar.vue";

onMounted(async () => {
  expenses.value = await GetExpenses(null);

  console.log("Expenses", expenses.value);

  getTotalExpenses();
});

const expenses = ref();
const totalExpenses = ref(0);

const getTotalExpenses = () => {
  totalExpenses.value = expenses.value.reduce(
    (acc: any, expense: { dataValues: { amount: any } }) =>
      acc + expense.dataValues.amount,
    0
  );
};

const refreshExpenses = async () => {
  expenses.value = await GetExpenses(null);
};
</script>
