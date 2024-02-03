import * as bcrypt from 'bcrypt'
import { ILogin } from 'app/src-backend/interfaces/login/login-interface'
import { LoginSchema } from 'app/src-backend/schemas/login/login-schema'
import { UsuarioSchema } from 'app/src-backend/schemas/usuario/usuario-schema'

export async function fazerLoginService (login_schema: LoginSchema, colaborador_schema: UsuarioSchema, dados_login: ILogin): Promise<any> {

  if (!dados_login || !dados_login.login || !dados_login.senha) {
    throw new Error('Erro')
  }

  const usuario = await colaborador_schema.listarColaboradorPorLogin(dados_login.login)

  if (!usuario) {
    throw new Error('Erro')
  }

  const comparacao = await bcrypt.compare(dados_login.senha, usuario.senha)
  if (!comparacao) {
    throw new Error('Erro')
  }

  const dados = await login_schema.logarUsuario(usuario)
  dados.dataValues.nome = usuario.nome
  return dados
}
