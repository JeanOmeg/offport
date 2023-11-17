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
      id_condominio: {
        type: Sequelize.INTEGER,
        references: {
          model: 'condominio',
          key: 'id'
        }
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
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
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
      telefone: {
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
        type: Sequelize.TEXT,
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
      funcao: {
        type: Sequelize.TEXT
      },
      apartamento: {
        type: Sequelize.INTEGER
      },
      bloco: {
        type: Sequelize.INTEGER
      },
      garagem: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      vaga: {
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
