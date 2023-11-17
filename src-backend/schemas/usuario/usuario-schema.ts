import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'
import { IUsuario } from '../../interfaces/usuario/usuario-interface'
import { UsuarioModel } from '../../models/usuario/usuario-model'
dotenv.config()

export class UsuarioSchema {
  schema () {
    return UsuarioModel
  }

  async salvarColaborador (dados_criação: IUsuario): Promise<IUsuario> {
    const senha = await bcrypt.hash(dados_criação.senha, Number(process.env.SALT))
    return await UsuarioModel.create({
      nome: dados_criação.nome,
      email: dados_criação.email,
      login: dados_criação.login,
      senha: senha,
      telefone: dados_criação.telefone,
      endereco: dados_criação.endereco,
      data_criacao: Date.now()
    })
  }

  async listarPorEmailELogin (email: string, login: string): Promise<IUsuario> {
    return await UsuarioModel.findOne({
      where: {
        email: email,
        login: login
      },
      raw: true
    })
  }

  async listarColaboradorPorLogin (login: string): Promise<IUsuario> {
    return await UsuarioModel.findOne({
      where: { login: login },
      raw: true
    })
  }

  async listarTodos (): Promise<IUsuario[]> {
    return await UsuarioModel.findAll({
      raw: true
    })
  }
}
