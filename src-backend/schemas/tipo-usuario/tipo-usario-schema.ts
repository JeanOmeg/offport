import { ITipoUsuario } from '../../interfaces/tipo-usuario/tipo-usuario-interface'
import { TipoUsuarioModel } from '../../models/tipo-usuario/tipo-usuario-model'

export class TipoUsuarioSchema {
  schema () {
    return TipoUsuarioModel
  }

  async listarTodos (): Promise<ITipoUsuario[]> {
    const lista: ITipoUsuario[] = await TipoUsuarioModel.findAll({ raw: true })

    return lista
  }
}

export const tipo_usuario_schema = new TipoUsuarioSchema()
