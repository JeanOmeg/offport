import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'
import { VisitanteSchema } from 'app/src-backend/schemas/visitante/visitante-schema'

export async function visitanteListarTodosService (visitante_schema: VisitanteSchema): Promise<IVisitante[]> {
  return await visitante_schema.listarTodos()
}
