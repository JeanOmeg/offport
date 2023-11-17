import * as dotenv from 'dotenv'
import { ILogin } from '../../../interfaces/login/login-interface'
import { IUsuario } from '../../../interfaces/usuario/usuario-interface'
dotenv.config()

export async function criarPayloadService (usuario: IUsuario) {
  const login: ILogin = {
    id_condominio: usuario.id_condominio,
    id_usuario: usuario.id,
    id_tipo_usuario: usuario.id_tipo_usuario,
    login: usuario.login,
    data_criacao: new Date()
  }

  return login
}
