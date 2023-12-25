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
      endereco: {
        type: Sequelize.TEXT,
        allowNull: false
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
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'Residencial'
      },
      qtd_apartamento: {
        type: Sequelize.INTEGER
      },
      qtd_bloco: {
        type: Sequelize.INTEGER
      },
      garagem: {
        type: Sequelize.TEXT
      },
      qtd_vaga: {
        type: Sequelize.INTEGER
      },
      sindico: {
        type: Sequelize.TEXT
      },
      contato_sindico: {
        type: Sequelize.TEXT
      },
      contato_condominio: {
        type: Sequelize.TEXT,
        allowNull: false
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
      servicos_gerais: {
        type: Sequelize.TEXT
      },
      contato_servicos_gerais: {
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
