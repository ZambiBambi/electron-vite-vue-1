const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('expense_frequencies', {
      expenseFrequencyId: {
        type: DataTypes.INTEGER,
        field: 'expense_frequency_id',
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      expenseId: {
        type: DataTypes.INTEGER,
        field: 'expense_id',
        allowNull: false
      },
      frequencyId: {
        type: DataTypes.INTEGER,
        field: 'frequency_id',
        allowNull: false
      },
      expensesId: {
        type: DataTypes.INTEGER,
        field: 'expenses_id'
      },
      frequenciesId: {
        type: DataTypes.INTEGER,
        field: 'frequencies_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('expense_frequencies');
  },
};