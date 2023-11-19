'use strict'
const tabela = 'prestador_servico'

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
      apartamento: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bloco: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      garagem: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      vaga: {
        type: Sequelize.TEXT
      },
      servico: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      empresa: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      contato: {
        type: Sequelize.TEXT
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
      data_entrada: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      data_saida: {
        type: Sequelize.TEXT,
        allowNull: false
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
