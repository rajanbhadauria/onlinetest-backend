'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      first_name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull:false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      is_active: {
        type: Sequelize.ENUM('0', '1'),
        defaultValue: '0'
      },
      is_verified: {
        type: Sequelize.ENUM('0','1'),
        defaultValue: '0'
      },
      verify_token: {
        type: Sequelize.STRING(40),
        allowNull: true
      },
      password_token: {
        type: Sequelize.STRING(40),
        allowNull: true
      }
    },
    {
      timestamps:true,
    }

    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users')
  }
};
