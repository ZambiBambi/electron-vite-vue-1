async function getExpenses() {
  return await window.ipcRenderer.invoke("getExpenses").then((expenses) => {
    console.log(expenses);
    return expenses;
  });
}

async function addExpense(expense: any) {
  return await window.ipcRenderer
    .invoke("addExpense", expense)
    .then((expense) => {
      console.log(expense);
      return expense;
    });
}

export { getExpenses, addExpense };
