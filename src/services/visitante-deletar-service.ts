import { api } from 'boot/axios'

export default async function visitanteDeletarService (id: number) {
  return await api.delete(`visitante/deletar/${id}`)
}
