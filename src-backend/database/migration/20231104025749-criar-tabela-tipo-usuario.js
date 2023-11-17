'use strict'
const tabela = 'tipo_usuario'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(tabela, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      role: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false
      },
      data_criacao: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      data_edicao: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
