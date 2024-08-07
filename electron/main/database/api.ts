import { Sequelize } from "sequelize";

import ExpensesModel from "./models/expenses";

const sequelize = new Sequelize({
  dialect: "sqlite", // type of the database
  logging: false, // if you want to log out the states of the database
  storage: "./database/db_dev.db", // database file path
  sync: {
    force: process.env.NODE_ENV === "development",
  },
});

const Expenses = ExpensesModel(sequelize);

/**
 * sync function creates the tables and the association defined.
 * If not called, the tables won't be created!
 */
SyncDB();

async function SyncDB() {
  await sequelize.sync();
}

async function getExpenses() {
  return await Expenses.findAll();
}

async function addExpense(expense: any) {
  return await Expenses.create(expense);
}

export { getExpenses, addExpense };
