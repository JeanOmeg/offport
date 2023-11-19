'use strict'
const tabela = 'tipo_usuario'

const lista_roles = [
  {
    role: 'Controlador',
    data_criacao: new Date().toLocaleString()
  },
  {
    role: 'Condomino',
    data_criacao: new Date().toLocaleString()
  },
  {
    role: 'Sindico',
    data_criacao: new Date().toLocaleString()
  },
  {
    role: 'Administrador',
    data_criacao: new Date().toLocaleString()
  },
  {
    role: 'SuperAdmin',
    data_criacao: new Date().toLocaleString()
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(tabela, lista_roles)
  }
}
