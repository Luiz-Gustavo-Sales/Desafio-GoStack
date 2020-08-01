"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("recipients", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
      },
      //chave primaria
      cod_envio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name_recepient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua_recepient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number_recepient: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      complement_recepient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state_recepient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city_recepient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep_recepient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
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
