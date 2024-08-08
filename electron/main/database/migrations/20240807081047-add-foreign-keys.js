const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('expenses', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'expenses_users_id_fkey',
      references: {
        table: 'users',
        field: 'user_id'
      }
    })
    
    await queryInterface.addConstraint('expenses', {
      fields: ['categories_id'],
      type: 'foreign key',
      name: 'expenses_categories_id_fkey',
      references: {
        table: 'categories',
        field: 'category_id'
      }
    })
    
    await queryInterface.addConstraint('expense_frequencies', {
      fields: ['expenses_id'],
      type: 'foreign key',
      name: 'expense_frequencies_expenses_id_fkey',
      references: {
        table: 'expenses',
        field: 'expense_id'
      }
    })
    
    await queryInterface.addConstraint('expense_frequencies', {
      fields: ['frequencies_id'],
      type: 'foreign key',
      name: 'expense_frequencies_frequencies_id_fkey',
      references: {
        table: 'frequencies',
        field: 'frequency_id'
      }
    })
    
    await queryInterface.addConstraint('categories', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'categories_users_id_fkey',
      references: {
        table: 'users',
        field: 'user_id'
      }
    })
    
    await queryInterface.addConstraint('income_sources', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'income_sources_users_id_fkey',
      references: {
        table: 'users',
        field: 'user_id'
      }
    })
    
    await queryInterface.addConstraint('incomes', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'incomes_users_id_fkey',
      references: {
        table: 'users',
        field: 'user_id'
      }
    })
    
    await queryInterface.addConstraint('incomes', {
      fields: ['income_sources_id'],
      type: 'foreign key',
      name: 'incomes_income_sources_id_fkey',
      references: {
        table: 'income_sources',
        field: 'income_source_id'
      }
    })
    
    await queryInterface.addConstraint('budgets', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'budgets_users_id_fkey',
      references: {
        table: 'users',
        field: 'user_id'
      }
    })
    
    await queryInterface.addConstraint('goals', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'goals_users_id_fkey',
      references: {
        table: 'users',
        field: 'user_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('expenses', 'expenses_users_id_fkey')
    await queryInterface.removeConstraint('expenses', 'expenses_categories_id_fkey')
    await queryInterface.removeConstraint('expense_frequencies', 'expense_frequencies_expenses_id_fkey')
    await queryInterface.removeConstraint('expense_frequencies', 'expense_frequencies_frequencies_id_fkey')
    await queryInterface.removeConstraint('categories', 'categories_users_id_fkey')
    await queryInterface.removeConstraint('income_sources', 'income_sources_users_id_fkey')
    await queryInterface.removeConstraint('incomes', 'incomes_users_id_fkey')
    await queryInterface.removeConstraint('incomes', 'incomes_income_sources_id_fkey')
    await queryInterface.removeConstraint('budgets', 'budgets_users_id_fkey')
    await queryInterface.removeConstraint('goals', 'goals_users_id_fkey')
  }
};