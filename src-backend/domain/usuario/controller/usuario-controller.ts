import { IUsuario } from '../../../interfaces/usuario/usuario-interface'
import { UsuarioSchema } from '../../../schemas/usuario/usuario-schema'
import { usuarioListarTodosService } from '../service/usuario-listar-todos-service'
import { usuarioSalvarService } from '../service/usuario-salvar-service'

export module UsuarioController {
  const usuario_schema = new UsuarioSchema()

  export async function usuarioListarTodos (_req: any, res: any): Promise<IUsuario[]> {
    const lista_usuario = await usuarioListarTodosService(usuario_schema)
    return res.status(200).json(lista_usuario)
  }

  export async function usuarioCadastrar (req: any, res: any) {
    try {
      const dados_criação: IUsuario = req.body
      const usuario_cadastrado = await usuarioSalvarService(usuario_schema, dados_criação)
      return res.status(200).json(usuario_cadastrado)
    } catch (error: any) {
      res.status(400).json(error.message)
    }
  }
}
