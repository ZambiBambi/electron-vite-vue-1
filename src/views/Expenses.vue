<template>
  <Navbar title="Expenses">
    <Button icon="ph ph-plus" label="New Expense" @click="showDialog = true" />
  </Navbar>

  <div
    class="flex p-4 flex-col w-full h-full bg-surface-0 dark:bg-surface-900 rounded-xl shadow overflow-y-auto"
  >
    <DataTable :value="expenses" :paginator="true" :rows="10">
      <Column field="dataValues.title" header="Title"></Column>
      <Column field="dataValues.amount" header="Amount"></Column>
    </DataTable>
  </div>

  <Dialog header="Expense" modal v-model:visible="showDialog">
    <div class="flex flex-col gap-4">
      <InputText v-model="newExpense.title" placeholder="Title" />
      <InputNumber v-model="newExpense.amount" placeholder="Amount" />
      <Button label="Add" @click="addNewExpense" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import { GetExpenses, AddExpense } from "@/renderer/database";

import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";

import Navbar from "@/components/Navbar.vue";

onMounted(async () => {
  expenses.value = await GetExpenses();

  console.log("Expenses", expenses.value);
});

const expenses = ref();
const newExpense = ref({
  title: "",
  amount: 0,
});
const showDialog = ref(false);

const addNewExpense = async () => {
  await AddExpense({
    amount: newExpense.value.amount,
    title: newExpense.value.title,
  });

  showDialog.value = false;

  newExpense.value = {
    title: "",
    amount: 0,
  };

  refreshExpenses();
};

const refreshExpenses = async () => {
  expenses.value = await GetExpenses();

  console.log("Expenses", await GetExpenses());
};
</script>
