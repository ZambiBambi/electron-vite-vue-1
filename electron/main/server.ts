import { ipcMain } from "electron";

import { getExpenses, addExpense } from "./database/api";

async function server() {
  try {
    ipcMain.handle("getExpenses", async (event, args) => {
      try {
        return await getExpenses();
      } catch (error) {
        console.error(error);
      }
    });

    ipcMain.handle("addExpense", async (event, args) => {
      try {
        return await addExpense(args);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

export { server };
