async function GetExpenses(query: any) {
  return await window.ipcRenderer
    .invoke("getExpenses", query)
    .then((expenses) => {
      return expenses;
    });
}

async function AddExpense(expense: any) {
  return await window.ipcRenderer
    .invoke("addExpense", expense)
    .then((expense) => {
      return expense;
    });
}

export { GetExpenses, AddExpense };
