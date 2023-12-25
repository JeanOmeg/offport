import { IVisitante } from '../../../../src-backend/interfaces/visitante/visitante-interface'
import { VisitanteSchema } from '../../../../src-backend/schemas/visitante/visitante-schema'

export async function visitanteSalvarService (visitante_schema: VisitanteSchema, dados_criação: IVisitante): Promise<IVisitante> {
  return await visitante_schema.salvarVisitante(dados_criação)
}
