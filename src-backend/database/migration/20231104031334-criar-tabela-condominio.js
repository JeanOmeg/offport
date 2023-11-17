'use strict'
const tabela = 'condominio'

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
      contato_condominio: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      endereco: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      complemento: {
        type: Sequelize.TEXT
      },
      bairro: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      estado: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      pais: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      tipo: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'Residencial'
      },
      apartamentos: {
        type: Sequelize.INTEGER
      },
      blocos: {
        type: Sequelize.INTEGER
      },
      sindico: {
        type: Sequelize.TEXT
      },
      contato_sindico: {
        type: Sequelize.TEXT
      },
      administradora: {
        type: Sequelize.TEXT
      },
      contato_administradora: {
        type: Sequelize.TEXT
      },
      seguranca: {
        type: Sequelize.TEXT
      },
      contato_seguranca: {
        type: Sequelize.TEXT
      },
      observacao: {
        type: Sequelize.TEXT
      },
      data_criacao: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      data_edicao: {
        type: Sequelize.TEXT
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
