import { Options, Sequelize } from "sequelize";
import { Umzug, SequelizeStorage } from "umzug";
import bcrypt from "bcrypt";
import configs from "./config/config.js";
import {
  initModels,
  Frequency,
  Expense,
  User,
  Category,
  ExpenseFrequency,
} from "./models";

import { seedDatabase } from "./seed.js";

const env = process.env.NODE_ENV || "development";
const config = (configs as { [key: string]: Options })[env];

const db: Sequelize = new Sequelize({
  ...config,
  define: {
    underscored: true,
    timestamps: false,
  },
});

const umzug = new Umzug({
  migrations: {
    glob: "migrations/*.js",
  },
  context: db.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize: db }),
  logger: console,
});

// Checks migrations and run them if they are not already applied. To keep
// track of the executed migrations, a table (and sequelize model) called SequelizeMeta
// will be automatically created (if it doesn't exist already) and parsed.
CheckMigrations();

async function CheckMigrations() {
  try {
    await umzug.up();

    initModels(db);

    /**
     * sync function creates the tables and the association defined.
     * If not called, the tables won't be created!
     */
    SyncDB();
  } catch (error) {
    console.log(error);
  }
}

async function SyncDB() {
  await db.sync();
  if (env === "development") {
    await seedDatabase();
  }
}

async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

async function getExpenses(filter: any) {
  console.log("filter", filter);

  return await Expense.findAll({
    where: filter,
  });
}

async function addExpense(expense: any) {
  return await Expense.create(expense);
}

async function getFrequencies() {
  return await Frequency.findAll();
}

async function addFrequency(frequency: any) {
  return await Frequency.create(frequency);
}

export { getExpenses, addExpense, getFrequencies, addFrequency };
