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
import type { ExpenseFrequency } from './ExpenseFrequency'

type FrequencyAssociations = 'expenseFrequencies'

export class Frequency extends Model<
  InferAttributes<Frequency, {omit: FrequencyAssociations}>,
  InferCreationAttributes<Frequency, {omit: FrequencyAssociations}>
> {
  declare frequencyId: CreationOptional<number>
  declare frequencyType: string
  declare value: number
  
  // Frequency hasMany ExpenseFrequency
  declare expenseFrequencies?: NonAttribute<ExpenseFrequency[]>
  declare getExpenseFrequencies: HasManyGetAssociationsMixin<ExpenseFrequency>
  declare setExpenseFrequencies: HasManySetAssociationsMixin<ExpenseFrequency, number>
  declare addExpenseFrequency: HasManyAddAssociationMixin<ExpenseFrequency, number>
  declare addExpenseFrequencies: HasManyAddAssociationsMixin<ExpenseFrequency, number>
  declare createExpenseFrequency: HasManyCreateAssociationMixin<ExpenseFrequency, 'frequencyId'>
  declare removeExpenseFrequency: HasManyRemoveAssociationMixin<ExpenseFrequency, number>
  declare removeExpenseFrequencies: HasManyRemoveAssociationsMixin<ExpenseFrequency, number>
  declare hasExpenseFrequency: HasManyHasAssociationMixin<ExpenseFrequency, number>
  declare hasExpenseFrequencies: HasManyHasAssociationsMixin<ExpenseFrequency, number>
  declare countExpenseFrequencies: HasManyCountAssociationsMixin
  
  declare static associations: {
    expenseFrequencies: Association<Frequency, ExpenseFrequency>
  }

  static initModel(sequelize: Sequelize): typeof Frequency {
    Frequency.init({
      frequencyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      frequencyType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize
    })
    
    return Frequency
  }
}
