const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('income_sources', {
      incomeSourceId: {
        type: DataTypes.INTEGER,
        field: 'income_source_id',
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      },
      name: {
        type: DataTypes.STRING,
        field: 'name'
      },
      description: {
        type: DataTypes.STRING,
        field: 'description'
      },
      usersId: {
        type: DataTypes.INTEGER,
        field: 'users_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('income_sources');
  },
};