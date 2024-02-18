/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict'

const { faker } = require('@faker-js/faker')

const tabela = 'visitante'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    let lista_visitante = []
    for (let i = 0; i < 20; i++) {
      const visitante = {
        nome: faker.person.fullName(),
        documento: '123456789123',
        morador: faker.person.fullName(),
        controlador: 'José da Silva',
        contato: '4112345678',
        apartamento: `${faker.number.int(150)}`,
        bloco: 'A',
        data_entrada: new Date()
      }

      lista_visitante.push(visitante)
    }
      
    await queryInterface.bulkInsert(tabela, lista_visitante)
  }
}
