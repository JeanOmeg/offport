/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict'
const tabela = 'condominio'

const condominio = {
  nome: 'Condomínio Terra Nova',
  endereco: 'Rua Principal Nº 204',
  bairro: 'Vila Iná',
  cidade: 'São José dos Pinhais',
  estado: 'Paraná',
  telefone_condominio: '41912345678',
  email_condominio: 'condominio@email.com'
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.insert(null, tabela, condominio)
  }
}
