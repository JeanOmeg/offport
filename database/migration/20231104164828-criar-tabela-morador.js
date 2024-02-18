'use strict'
const tabela = 'morador'

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
      nome: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      apartamento: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bloco: {
        type: Sequelize.TEXT
      },
      telefone: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT,
        unique: true
      },
      garagem: {
        type: Sequelize.TEXT
      },
      vaga: {
        type: Sequelize.TEXT
      },
      observacao: {
        type: Sequelize.TEXT
      },
      data_criacao: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: new Date()
      },
      data_edicao: {
        type: Sequelize.TEXT
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
