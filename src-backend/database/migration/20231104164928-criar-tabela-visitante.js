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
      id_condominio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'condominio',
          key: 'id'
        }
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id'
        }
      },
      nome: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      documento: {
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
        type: Sequelize.INTEGER
      },
      garagem: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      vaga: {
        type: Sequelize.TEXT
      },
      data_entrada: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_saida: {
        type: Sequelize.DATE
      },
      observacao: {
        type: Sequelize.TEXT
      },
      data_criacao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_edicao: {
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tabela)
  }
}
