import type { Sequelize, Model } from 'sequelize'
import { Expense } from './Expense'
import { Frequency } from './Frequency'
import { ExpenseFrequency } from './ExpenseFrequency'
import { User } from './User'
import { Category } from './Category'
import { IncomeSource } from './IncomeSource'
import { Income } from './Income'
import { Budget } from './Budget'
import { Goal } from './Goal'

export {
  Expense,
  Frequency,
  ExpenseFrequency,
  User,
  Category,
  IncomeSource,
  Income,
  Budget,
  Goal
}

export function initModels(sequelize: Sequelize) {
  Expense.initModel(sequelize)
  Frequency.initModel(sequelize)
  ExpenseFrequency.initModel(sequelize)
  User.initModel(sequelize)
  Category.initModel(sequelize)
  IncomeSource.initModel(sequelize)
  Income.initModel(sequelize)
  Budget.initModel(sequelize)
  Goal.initModel(sequelize)

  Expense.belongsTo(User, {
    as: 'user',
    foreignKey: 'users_id'
  })
  Expense.belongsTo(Category, {
    as: 'category',
    foreignKey: 'categories_id'
  })
  Expense.hasOne(ExpenseFrequency, {
    as: 'expenseFrequency',
    foreignKey: 'expenses_id'
  })
  Frequency.hasMany(ExpenseFrequency, {
    as: 'expenseFrequencies',
    foreignKey: 'frequencies_id'
  })
  ExpenseFrequency.belongsTo(Expense, {
    as: 'expense',
    foreignKey: 'expenses_id'
  })
  ExpenseFrequency.belongsTo(Frequency, {
    as: 'frequency',
    foreignKey: 'frequencies_id'
  })
  User.hasMany(Category, {
    as: 'categories',
    foreignKey: 'users_id'
  })
  User.hasMany(IncomeSource, {
    as: 'incomeSources',
    foreignKey: 'users_id'
  })
  User.hasMany(Income, {
    as: 'incomes',
    foreignKey: 'users_id'
  })
  User.hasMany(Expense, {
    as: 'expenses',
    foreignKey: 'users_id'
  })
  User.hasMany(Budget, {
    as: 'budgets',
    foreignKey: 'users_id'
  })
  User.hasMany(Goal, {
    as: 'goals',
    foreignKey: 'users_id'
  })
  Category.belongsTo(User, {
    as: 'user',
    foreignKey: 'users_id'
  })
  Category.hasMany(Expense, {
    as: 'expenses',
    foreignKey: 'categories_id'
  })
  IncomeSource.belongsTo(User, {
    as: 'user',
    foreignKey: 'users_id'
  })
  IncomeSource.hasMany(Income, {
    as: 'incomes',
    foreignKey: 'income_sources_id'
  })
  Income.belongsTo(User, {
    as: 'user',
    foreignKey: 'users_id'
  })
  Income.belongsTo(IncomeSource, {
    as: 'incomeSource',
    foreignKey: 'income_sources_id'
  })
  Budget.belongsTo(User, {
    as: 'user',
    foreignKey: 'users_id'
  })
  Goal.belongsTo(User, {
    as: 'user',
    foreignKey: 'users_id'
  })

  return {
    Expense,
    Frequency,
    ExpenseFrequency,
    User,
    Category,
    IncomeSource,
    Income,
    Budget,
    Goal
  }
}
