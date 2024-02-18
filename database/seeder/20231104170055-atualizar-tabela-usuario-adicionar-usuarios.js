/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict'

const { hashSenhaPadraoJs } = require('../util/hash-senha-padrao-js')

const tabela = 'usuario'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const sindico_usuario = (await queryInterface.sequelize.query(`
      SELECT
      tipo_usuario.id AS id_tipo_usuario
      FROM tipo_usuario
      WHERE tipo_usuario.role = 'Sindico'
    `))[0][0]

    const controlador_usuario = (await queryInterface.sequelize.query(`
      SELECT
      tipo_usuario.id AS id_tipo_usuario
      FROM tipo_usuario
      WHERE tipo_usuario.role = 'Controlador'
    `))[0][0]

    const sindico = {
      id_tipo_usuario:  sindico_usuario.id_tipo_usuario,
      nome: 'Jean Fernandes',
      login: 'sindico',
      senha: await hashSenhaPadraoJs(),
      email: 'sindico@email.com',
      telefone: '4112345678',
      endereco: 'Rua Principal Nº204',
      bairro: 'Vila Iná',
      cidade: 'São José dos Pinhais',
      funcao: 'Sindico',
      turno: 'Seg a Sex, das 09:00 as 18:00',
      empresa: 'Condominio Terra Nova',
      observacao: 'Usuario administrador da plataforma, responsavel por gerenciar os dados'
    }

    const controlador = {
      id_tipo_usuario:  controlador_usuario.id_tipo_usuario,
      nome: 'José da Silva',
      login: 'joseporteiro',
      senha: await hashSenhaPadraoJs(),
      email: 'jose@email.com',
      telefone: '41123456789',
      endereco: 'Rua Principal Nº204',
      bairro: 'Vila Iná',
      cidade: 'São José dos Pinhais',
      turno: 'Seg a Sex, das 09:00 as 18:00',
      empresa: 'Condominio Terra Nova',
      observacao: 'Controlador de Acesso'
    }
    
    await queryInterface.bulkInsert(tabela, [sindico, controlador])
  }
}
