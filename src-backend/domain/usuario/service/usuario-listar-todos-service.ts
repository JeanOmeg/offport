import { IUsuario } from '../../../interfaces/usuario/usuario-interface'
import { UsuarioSchema } from '../../../schemas/usuario/usuario-schema'

export async function usuarioListarTodosService (usuario_schema: UsuarioSchema): Promise<IUsuario[]> {
  return await usuario_schema.listarTodos()
}
