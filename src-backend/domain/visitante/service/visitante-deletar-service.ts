import { VisitanteSchema } from '../../../schemas/visitante/visitante-schema'

export async function visitanteDeletarService (visitante_schema: VisitanteSchema, id: number): Promise<number> {
  try {
    return await visitante_schema.deletarVisitante(id)
  } catch (error: any) {
    throw new Error(error)
  }
}
