import { api } from 'boot/axios'
import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'

export default async function visitanteSalvarService (visitante: IVisitante) {
  try {
    const data: IVisitante = (await api.post('visitante/cadastro', visitante)).data
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
