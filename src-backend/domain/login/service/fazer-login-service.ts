import * as bcrypt from 'bcrypt'
import { criarPayloadService } from './criar-payload-service'
import { ILogin } from '../../../interfaces/login/login-interface'
import { LoginSchema } from '../../../schemas/login/login-schema'
import { UsuarioSchema } from '../../../schemas/usuario/usuario-schema'

export async function fazerLoginService (login_schema: LoginSchema, colaborador_schema: UsuarioSchema, dados_login: ILogin): Promise<ILogin> {

  if (!dados_login || !dados_login.login) {
    throw new Error('Erro')
  }

  const usuario = await colaborador_schema.listarColaboradorPorLogin(dados_login.login)

  if (!usuario) {
    throw new Error('Erro')
  }

  // trocar interface de dados para login, mudado para .login apenas pra evitar o erro
  const comparacao = await bcrypt.compare(dados_login.login as string, usuario.senha)
  if (!comparacao) {
    throw new Error('Erro')
  }

  const login = await criarPayloadService(usuario)

  return await login_schema.logarUsuario(login)
}
