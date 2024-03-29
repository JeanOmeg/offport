'use strict'
const tabela = 'usuario'

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
      id_tipo_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo_usuario',
          key: 'id'
        }
      },
      nome: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      login: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      telefone: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
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
        type: Sequelize.TEXT,
        allowNull: false
      },
      funcao: {
        type: Sequelize.TEXT,
        defaultValue: 'Controlador de Acesso'
      },
      turno: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      empresa: {
        type: Sequelize.TEXT,
        allowNull: false
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
