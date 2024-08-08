<template>
  <Navbar title="Expenses">
    <IconField>
      <InputIcon class="ph ph-magnifying-glass" />
      <InputText v-model="filters['global'].value" placeholder="Search" />
    </IconField>
    <Button icon="ph ph-plus" label="New Expense" @click="showDialog = true" />
  </Navbar>

  <div
    class="flex p-4 flex-col w-full h-full bg-surface-0 dark:bg-surface-900 rounded-xl shadow overflow-y-auto"
  >
    <Tabs value="0">
      <TabList>
        <Tab value="0">Recurring</Tab>
        <Tab value="1">Other</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col">
            <DataTable
              v-model:filters="filters"
              :value="persistentExpenses"
              :globalFilterFields="['dataValues.description']"
              :paginator="true"
              :rows="10"
              class="rounded overflow-hidden"
            >
              <Column
                field="dataValues.description"
                header="Description"
              ></Column>
              <Column field="dataValues.amount" header="Amount"></Column>
            </DataTable>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col">
            <DataTable
              v-model:filters="filters"
              :value="otherExpenses"
              :globalFilterFields="['dataValues.description']"
              :paginator="true"
              :rows="10"
              class="rounded overflow-hidden"
            >
              <Column
                field="dataValues.description"
                header="Description"
              ></Column>
              <Column field="dataValues.amount" header="Amount"></Column>
            </DataTable>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>

  <Dialog header="Expense" modal v-model:visible="showDialog">
    <div class="flex flex-col gap-4 pt-1">
      <InputText v-model="newExpense.name" placeholder="Title" />
      <InputNumber v-model="newExpense.amount" placeholder="Amount" />
      <Button label="Add" @click="addNewExpense" />
    </div>
    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Add" @click="addNewExpense" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { FilterMatchMode } from "@primevue/core/api";

import { GetExpenses, AddExpense } from "@/renderer/database";

import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import ToggleSwitch from "primevue/toggleswitch";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

import Navbar from "@/components/Navbar.vue";

onMounted(async () => {
  persistentExpenses.value = await GetExpenses({
    isRecurring: true,
  });

  otherExpenses.value = await GetExpenses({
    isRecurring: false,
  });
});

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const otherExpenses = ref();
const persistentExpenses = ref();
const newExpense = ref({
  name: "",
  amount: 0,
});
const showDialog = ref(false);

const addNewExpense = async () => {
  await AddExpense({
    amount: newExpense.value.amount,
    title: newExpense.value.name,
  });

  showDialog.value = false;

  newExpense.value = {
    name: "",
    amount: 0,
  };

  //refreshExpenses();
};

/* const refreshExpenses = async () => {
  expenses.value = await GetExpenses();

  console.log("Expenses", await GetExpenses());
}; */
</script>
