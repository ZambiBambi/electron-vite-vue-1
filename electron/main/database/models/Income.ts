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
import type { IncomeSource } from './IncomeSource'
import type { User } from './User'

type IncomeAssociations = 'user' | 'incomeSource'

export class Income extends Model<
  InferAttributes<Income, {omit: IncomeAssociations}>,
  InferCreationAttributes<Income, {omit: IncomeAssociations}>
> {
  declare incomeId: CreationOptional<number>
  declare userId: number
  declare incomeSourceId: number
  declare amount: string
  declare date: string
  declare description: string
  declare isRecurring: boolean
  
  // Income belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  // Income belongsTo IncomeSource
  declare incomeSource?: NonAttribute<IncomeSource>
  declare getIncomeSource: BelongsToGetAssociationMixin<IncomeSource>
  declare setIncomeSource: BelongsToSetAssociationMixin<IncomeSource, number>
  declare createIncomeSource: BelongsToCreateAssociationMixin<IncomeSource>
  
  declare static associations: {
    user: Association<Income, User>,
    incomeSource: Association<Income, IncomeSource>
  }

  static initModel(sequelize: Sequelize): typeof Income {
    Income.init({
      incomeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      incomeSourceId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '0'
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isRecurring: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    }, {
      sequelize
    })
    
    return Income
  }
}
