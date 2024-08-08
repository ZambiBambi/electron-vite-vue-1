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
import type { Income } from './Income'
import type { User } from './User'

type IncomeSourceAssociations = 'user' | 'incomes'

export class IncomeSource extends Model<
  InferAttributes<IncomeSource, {omit: IncomeSourceAssociations}>,
  InferCreationAttributes<IncomeSource, {omit: IncomeSourceAssociations}>
> {
  declare incomeSourceId: CreationOptional<number>
  declare userId: number | null
  declare name: string | null
  declare description: string | null
  
  // IncomeSource belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  // IncomeSource hasMany Income
  declare incomes?: NonAttribute<Income[]>
  declare getIncomes: HasManyGetAssociationsMixin<Income>
  declare setIncomes: HasManySetAssociationsMixin<Income, number>
  declare addIncome: HasManyAddAssociationMixin<Income, number>
  declare addIncomes: HasManyAddAssociationsMixin<Income, number>
  declare createIncome: HasManyCreateAssociationMixin<Income, 'incomeSourceId'>
  declare removeIncome: HasManyRemoveAssociationMixin<Income, number>
  declare removeIncomes: HasManyRemoveAssociationsMixin<Income, number>
  declare hasIncome: HasManyHasAssociationMixin<Income, number>
  declare hasIncomes: HasManyHasAssociationsMixin<Income, number>
  declare countIncomes: HasManyCountAssociationsMixin
  
  declare static associations: {
    user: Association<IncomeSource, User>,
    incomes: Association<IncomeSource, Income>
  }

  static initModel(sequelize: Sequelize): typeof IncomeSource {
    IncomeSource.init({
      incomeSourceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    }, {
      sequelize
    })
    
    return IncomeSource
  }
}
