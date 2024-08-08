import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Budget } from './Budget'
import type { Category } from './Category'
import type { Expense } from './Expense'
import type { Goal } from './Goal'
import type { Income } from './Income'
import type { IncomeSource } from './IncomeSource'

type UserAssociations = 'categories' | 'incomeSources' | 'incomes' | 'expenses' | 'budgets' | 'goals'

export class User extends Model<
  InferAttributes<User, {omit: UserAssociations}>,
  InferCreationAttributes<User, {omit: UserAssociations}>
> {
  declare userId: CreationOptional<number>
  declare username: string
  declare passwordHash: string
  declare email: string
  declare createdAt: Date
  
  // User hasMany Category
  declare categories?: NonAttribute<Category[]>
  declare getCategories: HasManyGetAssociationsMixin<Category>
  declare setCategories: HasManySetAssociationsMixin<Category, number>
  declare addCategory: HasManyAddAssociationMixin<Category, number>
  declare addCategories: HasManyAddAssociationsMixin<Category, number>
  declare createCategory: HasManyCreateAssociationMixin<Category, 'userId'>
  declare removeCategory: HasManyRemoveAssociationMixin<Category, number>
  declare removeCategories: HasManyRemoveAssociationsMixin<Category, number>
  declare hasCategory: HasManyHasAssociationMixin<Category, number>
  declare hasCategories: HasManyHasAssociationsMixin<Category, number>
  declare countCategories: HasManyCountAssociationsMixin
  
  // User hasMany IncomeSource
  declare incomeSources?: NonAttribute<IncomeSource[]>
  declare getIncomeSources: HasManyGetAssociationsMixin<IncomeSource>
  declare setIncomeSources: HasManySetAssociationsMixin<IncomeSource, number>
  declare addIncomeSource: HasManyAddAssociationMixin<IncomeSource, number>
  declare addIncomeSources: HasManyAddAssociationsMixin<IncomeSource, number>
  declare createIncomeSource: HasManyCreateAssociationMixin<IncomeSource, 'userId'>
  declare removeIncomeSource: HasManyRemoveAssociationMixin<IncomeSource, number>
  declare removeIncomeSources: HasManyRemoveAssociationsMixin<IncomeSource, number>
  declare hasIncomeSource: HasManyHasAssociationMixin<IncomeSource, number>
  declare hasIncomeSources: HasManyHasAssociationsMixin<IncomeSource, number>
  declare countIncomeSources: HasManyCountAssociationsMixin
  
  // User hasMany Income
  declare incomes?: NonAttribute<Income[]>
  declare getIncomes: HasManyGetAssociationsMixin<Income>
  declare setIncomes: HasManySetAssociationsMixin<Income, number>
  declare addIncome: HasManyAddAssociationMixin<Income, number>
  declare addIncomes: HasManyAddAssociationsMixin<Income, number>
  declare createIncome: HasManyCreateAssociationMixin<Income, 'userId'>
  declare removeIncome: HasManyRemoveAssociationMixin<Income, number>
  declare removeIncomes: HasManyRemoveAssociationsMixin<Income, number>
  declare hasIncome: HasManyHasAssociationMixin<Income, number>
  declare hasIncomes: HasManyHasAssociationsMixin<Income, number>
  declare countIncomes: HasManyCountAssociationsMixin
  
  // User hasMany Expense
  declare expenses?: NonAttribute<Expense[]>
  declare getExpenses: HasManyGetAssociationsMixin<Expense>
  declare setExpenses: HasManySetAssociationsMixin<Expense, number>
  declare addExpense: HasManyAddAssociationMixin<Expense, number>
  declare addExpenses: HasManyAddAssociationsMixin<Expense, number>
  declare createExpense: HasManyCreateAssociationMixin<Expense, 'userId'>
  declare removeExpense: HasManyRemoveAssociationMixin<Expense, number>
  declare removeExpenses: HasManyRemoveAssociationsMixin<Expense, number>
  declare hasExpense: HasManyHasAssociationMixin<Expense, number>
  declare hasExpenses: HasManyHasAssociationsMixin<Expense, number>
  declare countExpenses: HasManyCountAssociationsMixin
  
  // User hasMany Budget
  declare budgets?: NonAttribute<Budget[]>
  declare getBudgets: HasManyGetAssociationsMixin<Budget>
  declare setBudgets: HasManySetAssociationsMixin<Budget, number>
  declare addBudget: HasManyAddAssociationMixin<Budget, number>
  declare addBudgets: HasManyAddAssociationsMixin<Budget, number>
  declare createBudget: HasManyCreateAssociationMixin<Budget, 'userId'>
  declare removeBudget: HasManyRemoveAssociationMixin<Budget, number>
  declare removeBudgets: HasManyRemoveAssociationsMixin<Budget, number>
  declare hasBudget: HasManyHasAssociationMixin<Budget, number>
  declare hasBudgets: HasManyHasAssociationsMixin<Budget, number>
  declare countBudgets: HasManyCountAssociationsMixin
  
  // User hasMany Goal
  declare goals?: NonAttribute<Goal[]>
  declare getGoals: HasManyGetAssociationsMixin<Goal>
  declare setGoals: HasManySetAssociationsMixin<Goal, number>
  declare addGoal: HasManyAddAssociationMixin<Goal, number>
  declare addGoals: HasManyAddAssociationsMixin<Goal, number>
  declare createGoal: HasManyCreateAssociationMixin<Goal, 'userId'>
  declare removeGoal: HasManyRemoveAssociationMixin<Goal, number>
  declare removeGoals: HasManyRemoveAssociationsMixin<Goal, number>
  declare hasGoal: HasManyHasAssociationMixin<Goal, number>
  declare hasGoals: HasManyHasAssociationsMixin<Goal, number>
  declare countGoals: HasManyCountAssociationsMixin
  
  declare static associations: {
    categories: Association<User, Category>,
    incomeSources: Association<User, IncomeSource>,
    incomes: Association<User, Income>,
    expenses: Association<User, Expense>,
    budgets: Association<User, Budget>,
    goals: Association<User, Goal>
  }

  static initModel(sequelize: Sequelize): typeof User {
    User.init({
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, {
      sequelize
    })
    
    return User
  }
}
