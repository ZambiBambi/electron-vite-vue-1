<template>
  <div>
    <div v-for="expense in expenses" :key="expense.id">
      <p>{{ expense.id }}</p>
      <p>{{ expense.amount }}</p>
      <p>{{ expense.description }}</p>
    </div>
  </div>
  <Button @click="addNewExpense">Add new expense</Button>
  <Button @click="refreshExpenses">Get expenses</Button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import { getExpenses, addExpense } from "@/renderer/database";

import Button from "primevue/button";

onMounted(async () => {
  expenses.value = await getExpenses();

  console.log("Expenses", expenses.value);
});

const expenses = ref();

const addNewExpense = async () => {
  await addExpense({
    amount: 100,
    title: "Test",
  });

  expenses.value = await getExpenses();
};

const refreshExpenses = async () => {
  expenses.value = await getExpenses();

  console.log("Expenses", await getExpenses());
};
</script>
