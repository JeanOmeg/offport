/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict'

const { hashSenhasPadraoJs } = require('../util/hash-senhas-padrao-js')

const tabela = 'usuario'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const id_superadmin = (await queryInterface.select(null, 'tipo_usuario', {
      where: {
        role: 'SuperAdmin'
      }
    }))[0].id

    const seedData = async () => {
      const data = [
        {
          id_tipo_usuario: id_superadmin,
          nome: 'SuperAdmin',
          email: 'superadmin@onportaria.com',
          login: 'SuperAdmin',
          senha: await hashSenhasPadraoJs(),
          telefone: 'telefone',
          endereco: 'endereco',
          numero: 123,
          bairro: 'bairro',
          cidade: 'cidade',
          estado: 'estado',
          pais: 'pais',
          funcao: 'Administrador da Plataforma',
          observacao: 'Usuario administrador da plataforma, responsavel por criar condominios e usuarios',
          data_criacao: new Date().toLocaleString()
        }
      ]

      await queryInterface.bulkInsert(tabela, data)
    }

    return seedData()
  }
}
