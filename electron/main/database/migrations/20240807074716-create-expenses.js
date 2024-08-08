const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('expenses', {
      expenseId: {
        type: DataTypes.INTEGER,
        field: 'expense_id',
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        field: 'category_id',
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        field: 'amount',
        allowNull: false
      },
      date: {
        type: DataTypes.DATEONLY,
        field: 'date',
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        field: 'description',
        allowNull: false
      },
      isRecurring: {
        type: DataTypes.BOOLEAN,
        field: 'is_recurring',
        allowNull: false,
        defaultValue: false
      },
      usersId: {
        type: DataTypes.INTEGER,
        field: 'users_id'
      },
      categoriesId: {
        type: DataTypes.INTEGER,
        field: 'categories_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('expenses');
  },
};