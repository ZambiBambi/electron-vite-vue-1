import { DataTypes, Model } from "sequelize";

const ExpensesModel = (sequelize: any): any => {
  class Expenses extends Model {}
  Expenses.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "expenses",
      timestamps: false,
    }
  );
  return Expenses;
};

export default ExpensesModel;
