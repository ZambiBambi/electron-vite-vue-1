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
import type { User } from './User'

type BudgetAssociations = 'user'

export class Budget extends Model<
  InferAttributes<Budget, {omit: BudgetAssociations}>,
  InferCreationAttributes<Budget, {omit: BudgetAssociations}>
> {
  declare budgetId: CreationOptional<number>
  declare userId: number
  declare amount: string
  declare startDate: string
  declare endDate: string
  
  // Budget belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  declare static associations: {
    user: Association<Budget, User>
  }

  static initModel(sequelize: Sequelize): typeof Budget {
    Budget.init({
      budgetId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '0'
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    }, {
      sequelize
    })
    
    return Budget
  }
}
