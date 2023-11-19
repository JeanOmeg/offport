/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict'

const { hashSenhaPadraoJs } = require('../util/hash-senha-padrao-js')

const tabela = 'usuario'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const dados = (await queryInterface.sequelize.query(`
      SELECT
      tipo_usuario.id AS id_tipo_usuario,
      condominio.id AS id_condominio
      FROM tipo_usuario
      LEFT JOIN condominio ON condominio.nome = 'Condomínio'
      WHERE tipo_usuario.role = 'Administrador'
    `))[0][0]

    const seedData = async () => {
      const usuario = {
          id_condominio: dados.id_condominio,
          id_tipo_usuario:  dados.id_tipo_usuario,
          nome: 'Administrador',
          login: 'SuperAdmin',
          senha: await hashSenhaPadraoJs(),
          email: 'admin@offport.com',
          telefone: 'telefone',
          endereco: 'endereco',
          bairro: 'bairro',
          cidade: 'cidade',
          funcao: 'Administrador da Plataforma',
          turno: 'Seg a Sex, das 09:00 as 18:00',
          empresa: 'jeanomeg',
          observacao: 'Usuario administrador da plataforma, responsavel por gerenciar os dados da plataforma'
        }

      await queryInterface.insert(null, tabela, usuario)
    }

    return await seedData()
  }
}
