import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'
import { VisitanteSchema } from 'app/src-backend/schemas/visitante/visitante-schema'

export async function visitanteSalvarService (visitante_schema: VisitanteSchema, dados_criação: IVisitante): Promise<IVisitante> {
  if (dados_criação.id && dados_criação.id > 0) {
    return await visitante_schema.editarVisitante(dados_criação)
  }
  return await visitante_schema.salvarVisitante(dados_criação)
}
