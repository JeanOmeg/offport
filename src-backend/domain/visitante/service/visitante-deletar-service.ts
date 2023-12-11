import { VisitanteSchema } from '../../../schemas/visitante/visitante-schema'

export async function visitanteDeletarService (visitante_schema: VisitanteSchema, id: number): Promise<void> {
  try {
    const teste = await visitante_schema.deletarVisitante(id)
    console.log(teste)
  } catch (error) {
    console.log(error)    
  }
}
