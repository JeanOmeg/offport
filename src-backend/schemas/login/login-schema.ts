import { IUsuario } from 'app/src-backend/interfaces/usuario/usuario-interface'
import { LoginModel } from '../../models/login/login-model'

export class LoginSchema {
  schema () {
    return LoginModel
  }

  async logarUsuario (login: IUsuario): Promise<any> {
    return await LoginModel.create({
      id_tipo_usuario: login.id_tipo_usuario,
      id_usuario: login.id,
      login: login.login
    }, {
      raw: true
    })
  }
}

export const login_schema = new LoginSchema()
