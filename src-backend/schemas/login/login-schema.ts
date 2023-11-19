import { ILogin } from '../../interfaces/login/login-interface'
import { LoginModel } from '../../models/login/login-model'

export class LoginSchema {
  schema () {
    return LoginModel
  }

  async logarUsuario (login: ILogin): Promise<ILogin> {
    await LoginModel.create({
      id_condominio: login.id_condominio,
      id_tipo_usuario: login.id_tipo_usuario,
      login: login.login,
      data_criacao: login.data_criacao
    })

    const usuario_logado: ILogin = {
      id_condominio: login.id_condominio,
      id_usuario: login.id_usuario,
      login: login.login,
      id_tipo_usuario: login.id_tipo_usuario,
      id: 0,
      data_criacao: ''
    }

    return usuario_logado
  }
}

export const login_schema = new LoginSchema()
