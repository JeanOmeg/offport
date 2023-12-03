'use strict'
const tabela = 'visitante'

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
      documento: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      morador: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      controlador: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      contato: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      apartamento: {
        type: Sequelize.INTEGER
      },
      bloco: {
        type: Sequelize.TEXT
      },
      garagem: {
        type: Sequelize.INTEGER
      },
      vaga: {
        type: Sequelize.TEXT
      },
      data_entrada: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      data_saida: {
        type: Sequelize.TEXT
      },
      observacao: {
        type: Sequelize.TEXT
      },
      data_criacao: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: new Date().toLocaleString()
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
