import { api } from 'boot/axios'
import { IFiltroVisitante } from 'app/src-backend/interfaces/visitante/filtro-visitante-interface'

export default async function visitanteFiltrarService (filtro: IFiltroVisitante) {
  try {
    return (await api.get('visitante/filtro', { params: { filtro: JSON.stringify(filtro) } })).data
  } catch (error: any) {
    throw new Error(error)
  }
}
