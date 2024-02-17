import { api } from 'boot/axios'
import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'

export default async function visitanteListarTodosService () {
  try {
    return (await api.get('visitante/')).data as IVisitante[]
  } catch (error: any) {
    throw new Error(error)
  }
}
