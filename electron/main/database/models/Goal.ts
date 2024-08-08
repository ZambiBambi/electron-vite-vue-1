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

type GoalAssociations = 'user'

export class Goal extends Model<
  InferAttributes<Goal, {omit: GoalAssociations}>,
  InferCreationAttributes<Goal, {omit: GoalAssociations}>
> {
  declare goalId: CreationOptional<number>
  declare userId: number
  declare name: string
  declare targetAmount: number
  declare currentAmount: number
  declare targetDate: string
  declare description: string
  
  // Goal belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  declare static associations: {
    user: Association<Goal, User>
  }

  static initModel(sequelize: Sequelize): typeof Goal {
    Goal.init({
      goalId: {
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
      targetAmount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      currentAmount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      targetDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize
    })
    
    return Goal
  }
}
