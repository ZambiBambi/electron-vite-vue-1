import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
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
import type { Expense } from './Expense'
import type { User } from './User'

type CategoryAssociations = 'user' | 'expenses'

export class Category extends Model<
  InferAttributes<Category, {omit: CategoryAssociations}>,
  InferCreationAttributes<Category, {omit: CategoryAssociations}>
> {
  declare categoryId: CreationOptional<number>
  declare userId: number
  declare name: string
  declare description: string
  
  // Category belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  // Category hasMany Expense
  declare expenses?: NonAttribute<Expense[]>
  declare getExpenses: HasManyGetAssociationsMixin<Expense>
  declare setExpenses: HasManySetAssociationsMixin<Expense, number>
  declare addExpense: HasManyAddAssociationMixin<Expense, number>
  declare addExpenses: HasManyAddAssociationsMixin<Expense, number>
  declare createExpense: HasManyCreateAssociationMixin<Expense, 'categoryId'>
  declare removeExpense: HasManyRemoveAssociationMixin<Expense, number>
  declare removeExpenses: HasManyRemoveAssociationsMixin<Expense, number>
  declare hasExpense: HasManyHasAssociationMixin<Expense, number>
  declare hasExpenses: HasManyHasAssociationsMixin<Expense, number>
  declare countExpenses: HasManyCountAssociationsMixin
  
  declare static associations: {
    user: Association<Category, User>,
    expenses: Association<Category, Expense>
  }

  static initModel(sequelize: Sequelize): typeof Category {
    Category.init({
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize
    })
    
    return Category
  }
}
