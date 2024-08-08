const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('incomes', {
      incomeId: {
        type: DataTypes.INTEGER,
        field: 'income_id',
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
      },
      incomeSourceId: {
        type: DataTypes.INTEGER,
        field: 'income_source_id',
        allowNull: false
      },
      amount: {
        type: DataTypes.STRING,
        field: 'amount',
        allowNull: false,
        defaultValue: '0'
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
      incomeSourcesId: {
        type: DataTypes.INTEGER,
        field: 'income_sources_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('incomes');
  },
};