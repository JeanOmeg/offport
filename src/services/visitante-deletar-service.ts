import { api } from 'boot/axios'

export default async function visitanteDeletarService (id: number) {
  try {
    return await api.delete(`visitante/deletar/${id}`)
  } catch (error) {
    console.log(error)
  }
}
