import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Expense } from './Expense'
import type { Frequency } from './Frequency'

type ExpenseFrequencyAssociations = 'expense' | 'frequency'

export class ExpenseFrequency extends Model<
  InferAttributes<ExpenseFrequency, {omit: ExpenseFrequencyAssociations}>,
  InferCreationAttributes<ExpenseFrequency, {omit: ExpenseFrequencyAssociations}>
> {
  declare expenseFrequencyId: CreationOptional<number>
  declare expenseId: number
  declare frequencyId: number
  
  // ExpenseFrequency belongsTo Expense
  declare expense?: NonAttribute<Expense>
  declare getExpense: BelongsToGetAssociationMixin<Expense>
  declare setExpense: BelongsToSetAssociationMixin<Expense, number>
  declare createExpense: BelongsToCreateAssociationMixin<Expense>
  
  // ExpenseFrequency belongsTo Frequency
  declare frequency?: NonAttribute<Frequency>
  declare getFrequency: BelongsToGetAssociationMixin<Frequency>
  declare setFrequency: BelongsToSetAssociationMixin<Frequency, number>
  declare createFrequency: BelongsToCreateAssociationMixin<Frequency>
  
  declare static associations: {
    expense: Association<ExpenseFrequency, Expense>,
    frequency: Association<ExpenseFrequency, Frequency>
  }

  static initModel(sequelize: Sequelize): typeof ExpenseFrequency {
    ExpenseFrequency.init({
      expenseFrequencyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      expenseId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      frequencyId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize
    })
    
    return ExpenseFrequency
  }
}
