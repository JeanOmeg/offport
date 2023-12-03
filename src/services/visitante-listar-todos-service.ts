import { api } from 'boot/axios'
import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'

export default async function visitanteListarTodosService () {
  try {
    const data: IVisitante[] = (await api.get('visitante/')).data
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
