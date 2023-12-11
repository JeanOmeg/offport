import { IVisitante } from '../../../../src-backend/interfaces/visitante/visitante-interface'
import { VisitanteSchema } from '../../../../src-backend/schemas/visitante/visitante-schema'
import { formatarData } from '../../../../src/utils/formatar-data'

export async function visitanteSalvarService (visitante_schema: VisitanteSchema, dados_criação: IVisitante): Promise<IVisitante> {
  dados_criação.data_entrada = formatarData(dados_criação.data_entrada)
  if (dados_criação.data_saida) {
    dados_criação.data_saida = formatarData(dados_criação.data_saida)
  }

  return await visitante_schema.salvarVisitante(dados_criação)
}
