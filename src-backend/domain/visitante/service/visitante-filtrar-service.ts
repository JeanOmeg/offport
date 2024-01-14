import { IFiltroVisitante } from 'app/src-backend/interfaces/visitante/filtro-visitante-interface'
import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'
import { VisitanteSchema } from 'app/src-backend/schemas/visitante/visitante-schema'

export async function visitanteFiltrarService (visitante_schema: VisitanteSchema, filtro: IFiltroVisitante): Promise<IVisitante[]> {
  const lista_visitantes = await visitante_schema.listarTodos()
  console.log(filtro)

  if (Object.entries(filtro).length === 0) {
    return lista_visitantes
  }
  
  const lista_visitante_filtrado = lista_visitantes.filter((item) => {
    const nome = item.nome.includes(filtro.nome)
    const apartamento = +item.apartamento === +filtro.apartamento
    const bloco = item.bloco === filtro.bloco
    const data_entrada = item.data_entrada === filtro.data_entrada
    const data_saida = item.data_saida === filtro.data_saida
    const contato = item.contato.includes(filtro.contato)

    return nome || apartamento || bloco || data_entrada || data_saida || contato
  })

  return lista_visitante_filtrado
}






