
import { LoginSchema } from '../../../schemas/login/login-schema'
import { fazerLoginService } from '../service/fazer-login-service'
import { ILogin } from '../../../interfaces/login/login-interface'
import { UsuarioSchema } from '../../../schemas/usuario/usuario-schema'

export module LoginController {
  const login_schema = new LoginSchema()
  const colaborador_schema = new UsuarioSchema()

  export async function fazerLogin (req: any, res: any): Promise<ILogin> {
    try {
      const dados_login: ILogin = req.body
      const usuario = await fazerLoginService(login_schema, colaborador_schema, dados_login)
      return res.status(200).json(usuario)
    } catch (error: any) {
      return res.status(400).json(error.message)
    }
  }
}
