import bcrypt from "bcrypt";
import {
  initModels,
  Frequency,
  Expense,
  User,
  Category,
  ExpenseFrequency,
} from "./models";

import data from "./mockdata/expenses.json";

export async function seedDatabase() {
  //Seed the database
  try {
    const user = await User.create({
      username: "admin",
      passwordHash: await hashPassword("admin"),
      email: "admin@example.com",
    });

    console.log(user.dataValues);

    const categories = [
      "Food",
      "Rent",
      "Transport",
      "Entertainment",
      "Health",
      "Education",
    ];

    for (const category of categories) {
      try {
        await Category.findOrCreate({
          where: {
            userId: user.dataValues.userId,
            name: category,
            description: category,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    const frequency = [
      {
        type: "Daily",
        value: 1,
      },
      {
        type: "Weekly",
        value: 7,
      },
      {
        type: "Monthly",
        value: 30,
      },
    ];

    for (const freq of frequency) {
      try {
        await Frequency.findOrCreate({
          where: {
            frequencyType: freq.type,
            value: freq.value,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    const expenses = data;

    for (const exp of expenses) {
      try {
        const e = await Expense.findOrCreate({
          where: {
            userId: exp.userId,
            categoryId: exp.categoryId,
            amount: exp.amount,
            date: exp.date,
            description: exp.description,
            isRecurring: exp.isRecurring,
          },
        });

        // Add frequency to the expense
        try {
          const freq = await Frequency.findOne({
            where: {
              frequencyType: "Monthly",
              value: 30,
            },
          });

          if (freq) {
            await e[0].setExpenseFrequency(freq.dataValues.frequencyId);
          }
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    console.log("Database seeded successfully !");
  } catch (error) {
    console.log(error);
  }
}

async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}
