const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('frequencies', {
      frequencyId: {
        type: DataTypes.INTEGER,
        field: 'frequency_id',
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      frequencyType: {
        type: DataTypes.STRING,
        field: 'frequency_type',
        allowNull: false
      },
      value: {
        type: DataTypes.INTEGER,
        field: 'value',
        allowNull: false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('frequencies');
  },
};