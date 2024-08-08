const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('budgets', {
      budgetId: {
        type: DataTypes.INTEGER,
        field: 'budget_id',
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
      },
      amount: {
        type: DataTypes.STRING,
        field: 'amount',
        allowNull: false,
        defaultValue: '0'
      },
      startDate: {
        type: DataTypes.DATEONLY,
        field: 'start_date',
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATEONLY,
        field: 'end_date',
        allowNull: false
      },
      usersId: {
        type: DataTypes.INTEGER,
        field: 'users_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('budgets');
  },
};