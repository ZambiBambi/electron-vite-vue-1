const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('goals', {
      goalId: {
        type: DataTypes.INTEGER,
        field: 'goal_id',
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        field: 'name',
        allowNull: false
      },
      targetAmount: {
        type: DataTypes.FLOAT,
        field: 'target_amount',
        allowNull: false
      },
      currentAmount: {
        type: DataTypes.FLOAT,
        field: 'current_amount',
        allowNull: false
      },
      targetDate: {
        type: DataTypes.DATEONLY,
        field: 'target_date',
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        field: 'description',
        allowNull: false
      },
      usersId: {
        type: DataTypes.INTEGER,
        field: 'users_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('goals');
  },
};