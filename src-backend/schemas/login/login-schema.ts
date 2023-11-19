import { IUsuario } from 'app/src-backend/interfaces/usuario/usuario-interface'
import { ILogin } from '../../interfaces/login/login-interface'
import { LoginModel } from '../../models/login/login-model'

export class LoginSchema {
  schema () {
    return LoginModel
  }

  async logarUsuario (login: IUsuario): Promise<ILogin> {
    return await LoginModel.create({
      id_condominio: login.id_condominio,
      id_tipo_usuario: login.id_tipo_usuario,
      id_usuario: login.id,
      login: login.login
    }, {
      raw: true
    })
  }
}

export const login_schema = new LoginSchema()
