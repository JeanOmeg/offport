/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict'

const { hashSenhaPadraoJs } = require('../util/hash-senha-padrao-js')

const tabela = 'usuario'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const dados = (await queryInterface.sequelize.query(`
      SELECT
      tipo_usuario.id AS id_tipo_usuario
      FROM tipo_usuario
      WHERE tipo_usuario.role = 'Sindico'
    `))[0][0]

    const seedData = async () => {
      const usuario = {
          id_tipo_usuario:  dados.id_tipo_usuario,
          nome: 'Sindico',
          login: 'sindico',
          senha: await hashSenhaPadraoJs(),
          email: 'sindico@offport.com',
          telefone: 'telefone',
          endereco: 'endereco',
          bairro: 'bairro',
          cidade: 'cidade',
          funcao: 'Sindico',
          turno: 'Seg a Sex, das 09:00 as 18:00',
          empresa: 'jeanomeg',
          observacao: 'Usuario administrador da plataforma, responsavel por gerenciar os dados'
        }

      await queryInterface.insert(null, tabela, usuario)
    }

    return await seedData()
  }
}
