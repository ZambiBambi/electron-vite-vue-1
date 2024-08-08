import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize,
} from "sequelize";
import type { Category } from "./Category";
import type { ExpenseFrequency } from "./ExpenseFrequency";
import type { User } from "./User";

type ExpenseAssociations = "user" | "category" | "expenseFrequency";

export class Expense extends Model<
  InferAttributes<Expense, { omit: ExpenseAssociations }>,
  InferCreationAttributes<Expense, { omit: ExpenseAssociations }>
> {
  declare expenseId: CreationOptional<number>;
  declare userId: number;
  declare categoryId: number;
  declare amount: number;
  declare date: string;
  declare description: string;
  declare isRecurring: boolean;

  // Expense belongsTo User
  declare user?: NonAttribute<User>;
  declare getUser: BelongsToGetAssociationMixin<User>;
  declare setUser: BelongsToSetAssociationMixin<User, number>;
  declare createUser: BelongsToCreateAssociationMixin<User>;

  // Expense belongsTo Category
  declare category?: NonAttribute<Category>;
  declare getCategory: BelongsToGetAssociationMixin<Category>;
  declare setCategory: BelongsToSetAssociationMixin<Category, number>;
  declare createCategory: BelongsToCreateAssociationMixin<Category>;

  // Expense hasOne ExpenseFrequency
  declare expenseFrequency?: NonAttribute<ExpenseFrequency>;
  declare getExpenseFrequency: HasOneGetAssociationMixin<ExpenseFrequency>;
  declare setExpenseFrequency: HasOneSetAssociationMixin<
    ExpenseFrequency,
    number
  >;
  declare createExpenseFrequency: HasOneCreateAssociationMixin<ExpenseFrequency>;

  declare static associations: {
    user: Association<Expense, User>;
    category: Association<Expense, Category>;
    expenseFrequency: Association<Expense, ExpenseFrequency>;
  };

  static initModel(sequelize: Sequelize): typeof Expense {
    Expense.init(
      {
        expenseId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isRecurring: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
      }
    );

    return Expense;
  }
}
