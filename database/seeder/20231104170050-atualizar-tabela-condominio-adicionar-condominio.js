/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict'
const tabela = 'condominio'

const condominio = {
  nome: 'Condomínio',
  endereco: 'Endereço',
  bairro: 'Bairro',
  cidade: 'Cidade',
  estado: 'Estado',
  contato_condominio: '41912345678 condominio@email.com'
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.insert(null, tabela, condominio)
  }
}
