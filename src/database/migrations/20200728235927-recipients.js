"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("recipients", {
      nameRecipient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ruaRecipient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numberRecipient: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      complementRecipient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stateRecipient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cityRecipient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cepRecipient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
