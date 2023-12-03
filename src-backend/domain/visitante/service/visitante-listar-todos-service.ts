import { IVisitante } from '../../../interfaces/visitante/visitante-interface'
import { VisitanteSchema } from '../../../schemas/visitante/visitante-schema'

export async function visitanteListarTodosService (visitante_schema: VisitanteSchema): Promise<IVisitante[]> {
  return await visitante_schema.listarTodos()
}
