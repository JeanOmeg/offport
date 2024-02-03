import { IUsuario } from 'app/src-backend/interfaces/usuario/usuario-interface'
import { UsuarioSchema } from 'app/src-backend/schemas/usuario/usuario-schema'

export async function usuarioListarTodosService (usuario_schema: UsuarioSchema): Promise<IUsuario[]> {
  return await usuario_schema.listarTodos()
}
