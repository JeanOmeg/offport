'use strict'
const tabela = 'tipo_usuario'

const lista_roles = [
  { role: 'Controlador' },
  { role: 'Sindico' },
  { role: 'Administrador' }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(tabela, lista_roles)
  }
}
